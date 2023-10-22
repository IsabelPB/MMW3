import ConnectButton from "./connectButton";
import { Young_Serif } from 'next/font/google'



export default function HeaderMain(){
    return(
        <main className="m-5 top-4 flex justify-around bg-white">
            <div className='p-3 left-20 border-solid bg-red-300 rounded-full'>
                <div className='font-serif text-black'>
                    Music&Movies
                </div>
            </div>

            <div className='p-3 left-20 border-solid bg-black-300 rounded-full'>
                <div className='font-serif text-black'>
                    <a>News</a>
                </div>
            </div>

            <div className='p-3 left-20 border-solid bg-black-300 rounded-full'>
                <div className='font-serif text-black'>
                    <a>Events</a>
                </div>
            </div>

            
            <div className=''>
                <ConnectButton />
            </div>
        </main>
    )
}