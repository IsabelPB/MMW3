import ConnectButton from "./connectButton";
import { Young_Serif } from "next/font/google";
import Link from "next/link";

export default function HeaderMain() {
  return (
    <main className="divide-red-400">
      <div className="p-5 top-4 flex justify-around bg-red-100">
        <div className="p-3 left-20 border-solid bg-red-300 rounded-full">
          <div className="font-serif text-black">
            <Link href="/">
            Music&Movies
            </Link>
            </div>
        </div>

        <div className="p-3 left-20 border-solid bg-black-300 rounded-full">
          <div className="font-serif text-black">
            <Link href="/Feed">News</Link>
          </div>
        </div>

        <div className="p-3 left-20 border-solid bg-black-300 rounded-full">
          <div className="font-serif text-black">
            <Link href="/">Events</Link>
          </div>
        </div>

        <div className="p-3 left-20 border-solid bg-black-300 rounded-full">
          <div className="font-serif text-black">
            <Link href="/Profile">Profile</Link>
          </div>
        </div>

        <div className="p-3 left-20 border-solid bg-black-300 rounded-full">
          <div className="font-serif text-black">
            <Link href="/Community">Communities</Link>
          </div>
        </div>

        <div className="">
          <ConnectButton />
        </div>
      </div>
      <hr className="red-300">
      </hr>
    </main>
  );
}
