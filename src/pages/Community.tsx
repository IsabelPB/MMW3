import HeaderMain from "@/components/HeaderMain";
import AddCommunity from "@/components/AddCommunity";
import Communities from "@/components/Communities";

export default function Profile(){
    return(
        <main>
            <div>
                <HeaderMain />
            </div>

            <div>
                <AddCommunity />
            </div>
            <div>
                <Communities />
            </div>
        </main>
    )
}