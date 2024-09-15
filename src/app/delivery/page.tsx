import Footer from "@/components/footer"
import Navbar from "@/components/navbar"

export default function Delivery (){
    return (
        <div className="w-full">
            <Navbar/>
            <div className="max-w-[1440px] pt-[160px] px-[20px] mx-auto">
                <div className="">
                    <h1>Dalivi area</h1>
                </div>
                <div className="w-full h-[400px] outline-double overflow-hidden rounded-[12px] mb-[100px] shadow-lg">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d38331.206842893705!2d72.06996736189463!3d40.528716064715546!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2s!4v1725472102756!5m2!1sru!2s" width="100%" height="400" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
            <div className="">
                <Footer/>
            </div>
        </div>
    )
}