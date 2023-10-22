import React from "react";
import Image from "next/image";


export async function getStaticProps() {
    const communities = await fetch("/public/communityData.json").then((res) =>
      res.json()
    );
  
    return {
      props: {
        communities,
      },
    };
}



const Community = ({ communities }) => {
  return (
    <div className="card">
      {/* <Image
        src={communities.image}
        alt={communities.description}
        width={200}
        height={200}
      /> */}
      <div className="card-body">
        <h3>{communities.name}</h3>
        <p>Owner: {communities.ownerHash}</p>
      </div>
    </div>
  );
};

export default Community;
