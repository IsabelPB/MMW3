import ConnectButton from "./connectButton";
import { Young_Serif } from 'next/font/google'



export default function HeaderMain(){
    return(
        <main>
            <div className='p-4 fixed top-4 left-20 border-solid bg-red-300 rounded-full'>
                <div className='font-serif text-black'>
                    Music&Movies
                </div>
            </div>
            <div className='fixed top-6 right-4 '>
                <ConnectButton />
            </div>
        </main>
    )
}