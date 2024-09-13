import TopCorusel from "@/components/antdesign/top-corusel";
import Navbar from "@/components/navbar";
// import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import "./globals.css";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";

export default function Home() {
  const skletondata = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,];
  return (
    <div className="w-full">
      <div className="">
        <Navbar/>
        <div className="max-w-[1440px] mx-auto h-full flex flex-col">
          <div className="mx-[20px] overflow-hidden mt-[160px] rounded-[12px]">
            <TopCorusel/>
          </div>
          <div className="flex justify-center items-center my-[50px]">
            <Link href={'/products'} className="relative inline-flex items-center px-12 py-3 overflow-hidden text-lg font-medium text-green-500 border-2 border-green-500 rounded-full hover:text-white group hover:bg-gray-50">
              <span className="absolute left-0 block w-full h-0 transition-all bg-green-400 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
              <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
              <Image
                className="fill-white"
                src={'./logo.svg'}
                alt="logo"
                width={25}
                height={20}
              />
              </span>
              {/* <span className="relative">start buying now</span> */}
              <span className="relative">All Products</span>
            </Link>
          </div>
          <div className="w-full">
            <div className="flex justify-center items-center">
              <h1 className="text-[40px] font-bold text-green-500">Top Rating</h1>
            </div>
            <div className="">
              <div className="w-full h-[100%] shadow-inner my-[60px] overflow-hidden flex justify-center gap-[40px] flex-wrap rounded-md">
                  {skletondata.map((item) => (
                    <div className="rounded-[12px] overflow-hidden border h-[400px] w-[250px]">
                      <div className="w-[250px] h-[200px] bg-slate-400"></div>
                      <div className="px-[15px] pt-[10px]">
                        <div className="h-[10px] animate-pulse bg-slate-200 rounded"></div>
                        <div className="grid animate-pulse grid-cols-3 gap-4 mt-[10px]">
                          <div className="h-[10px] bg-slate-200 rounded col-span-2"></div>
                          <div className="h-[10px] bg-slate-200 rounded col-span-1"></div>
                        </div>
                        <div className="h-[10px] mt-[10px] animate-pulse max-w-[170px] bg-slate-200 rounded col-span-1"></div>
                        <div className="h-[10px] mt-[10px] animate-pulse max-w-[70px] bg-slate-200 rounded col-span-1"></div>
                        <Button className="w-full animate-pulse mt-[10px] bg-slate-200">
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
            </div>
          </div>
          <div className="w-full h-[100%] shadow-inner my-[60px] overflow-hidden flex justify-center gap-[40px] flex-wrap rounded-md">
            {/* <div className="rounded-[12px] overflow-hidden border h-[400px] w-[250px]">
              <div className="w-[250px] h-[200px] bg-slate-400"></div>
              <div className="px-[15px]">
                <h1>name</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione non minus reprehenderit.</p>
                <h2>23 $</h2>
                <Button className="w-full">
                  Buy now
                </Button>
              </div>
            </div> */}
          </div>
          <div className="px-[20px]">
            <div className="flex justify-center items-center">
              <h1 className="text-[40px] font-bold text-green-500">Delivery area</h1>
            </div>
            <div className="w-full h-[400px] mt-[60px] outline-double overflow-hidden rounded-[12px] mb-[100px] shadow-lg">
              <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d38331.206842893705!2d72.06996736189463!3d40.528716064715546!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2s!4v1725472102756!5m2!1sru!2s" width="100%" height="400" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    </div>
  );
}
