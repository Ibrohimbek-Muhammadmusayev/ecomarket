import Footer from "@/components/footer"
import Navbar from "@/components/navbar"

export default function About (){
    return (
        <div className="w-full flex flex-col justify-between">
            <Navbar/>
            <div className="max-w-[1440px] mt-[130px] mx-auto">
                <div className="">
                    <h1>About</h1>
                </div>
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    )
}