// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/access/Ownable.sol";

import "@openzeppelin/contracts/utils/Counters.sol";

contract Community {
    using Counters for Counters.Counter;

    enum CommunityType {
        Movies,
        Music
    }

    struct Poll {
        uint256 id;
        string title;
        string option1;
        string option2;
        uint256 op1Votes;
        uint256 op2Votes;
        mapping(address => bool) hasVoted;
        bool active;
    }

    struct Member {
        address memberAddress;
        bool exists;
    }

    Counters.Counter private pollIdCounter;
    Counters.Counter private memberIdCounter;

    string public name;
    address public owner;
    string public description;
    string public communityType;
    mapping(address => Member) public members;
    mapping(uint256 => Poll) public polls;

    event MemberAdded(address indexed member);
    event MemberRemoved(address indexed member);
    event PollCreated(uint256 indexed pollId, string title);
    event Voted(uint256 indexed pollId, address indexed member, bool vote);

    constructor(string memory _name, string memory _description, string memory _communityType) {
        owner = msg.sender;
        name = _name;
        description = _description;
        communityType = _communityType;
        members[msg.sender] = Member(msg.sender, true);
        memberIdCounter.increment();
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Only the owner can call this function");
        _;
    }

    modifier onlyMembers() {
        require(
            members[msg.sender].exists,
            "You must be a member to call this function"
        );
        _;
    }

    function addMember(address newMember) public onlyOwner {
        require(!members[newMember].exists, "Member already exists");
        members[newMember] = Member(newMember, true);
        memberIdCounter.increment();
        emit MemberAdded(newMember);
    }

    function removeMember(address member) public onlyOwner {
        require(members[member].exists, "Member does not exist");
        delete members[member];
        memberIdCounter.decrement();
        emit MemberRemoved(member);
    }

    function createPoll(string memory title, string memory _option1, string memory _option2) public onlyMembers {
        uint256 pollId = pollIdCounter.current();
        Poll storage newPoll = polls[pollId];
        newPoll.id = pollId;
        newPoll.title = title;
        newPoll.option1 = _option1;
        newPoll.option2 = _option2;
        newPoll.op1Votes = 0;
        newPoll.op2Votes = 0;
        newPoll.active = true;
        pollIdCounter.increment();
        emit PollCreated(pollId, title);
    }

    function voteOnPoll(uint256 pollId, bool vote) public onlyMembers {
        require(polls[pollId].active, "Poll is not active");
        require(!polls[pollId].hasVoted[msg.sender], "You have already voted");

        polls[pollId].hasVoted[msg.sender] = true;
        if (vote) {
            polls[pollId].op1Votes++;
        } else {
            polls[pollId].op2Votes++;
        }
        emit Voted(pollId, msg.sender, vote);
    }

    function endPoll(uint256 pollId) public onlyOwner {
        require(polls[pollId].active, "Poll is not active");
        polls[pollId].active = false;
    }

    function getMemberCount() public view returns (uint256) {
        return memberIdCounter.current();
    }

    function getPollCount() public view returns (uint256) {
        return pollIdCounter.current();
    }
}
