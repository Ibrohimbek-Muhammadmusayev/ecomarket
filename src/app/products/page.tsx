import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Products (){
    const skletondata = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,];
    return (
        <div>
            <div className="m-0">
                <Navbar/>
            </div>
            <div className="flex flex-col w-full">
                <div className="mt-[90px] max-w-[1440px] mx-auto">
                    <div className="mt-[60px] mb-[60px]">
                        <div className="flex flex-wrap justify-center px-[20px] gap-[10px]">
                            <Button className="bg-green-400 shadow-lg">
                                <Image
                                    src={'https://img.icons8.com/ios/50/bread.png'}
                                    alt="pomidor logo"
                                    width={30}
                                    height={30}
                                />
                            </Button>
                            <Button className="bg-green-400 shadow-lg px-[13px]">
                                <Image
                                    src={'https://img.icons8.com/external-goofy-line-kerismaker/96/external-vegetables-groceries-goofy-line-kerismaker.png'}
                                    alt="pomidor logo"
                                    width={40}
                                    height={40}
                                />
                            </Button>
                            <Button className="bg-green-400 shadow-lg">
                                <Image
                                    src={'https://img.icons8.com/ios/50/honey.png'}
                                    alt="pomidor logo"
                                    width={30}
                                    height={30}
                                />
                            </Button>
                            <Button className="bg-green-400 shadow-lg">
                                <Image
                                    src={'https://img.icons8.com/external-kiranshastry-lineal-kiranshastry/64/external-vegetables-healthy-kiranshastry-lineal-kiranshastry.png'}
                                    alt="pomidor logo"
                                    width={30}
                                    height={30}
                                />
                            </Button>
                            <Button className="bg-green-400 shadow-lg">
                                <Image
                                    src={'https://img.icons8.com/wired/64/pie.png'}
                                    alt="pomidor logo"
                                    width={30}
                                    height={30}
                                />
                            </Button>
                            <Button className="bg-green-400 shadow-lg">
                                <Image
                                    src={'https://img.icons8.com/ios/50/rack-of-lamb.png'}
                                    alt="pomidor logo"
                                    width={30}
                                    height={30}
                                />
                            </Button>
                            <Button className="bg-green-400 shadow-lg">
                                <Image
                                    src={'https://img.icons8.com/external-nawicon-detailed-outline-nawicon/64/external-chicken-grocery-nawicon-detailed-outline-nawicon.png'}
                                    alt="pomidor logo"
                                    width={30}
                                    height={30}
                                />
                            </Button>
                            <Button className="bg-green-400 shadow-lg">
                                <Image
                                    src={'https://img.icons8.com/ios/50/ice-cream-bowl.png'}
                                    alt="pomidor logo"
                                    width={30}
                                    height={30}
                                />
                            </Button>
                            <Button className="bg-green-400 shadow-lg">
                                <Image
                                    src={'https://img.icons8.com/ios/50/milk-carton.png'}
                                    alt="pomidor logo"
                                    width={30}
                                    height={30}
                                />
                            </Button>
                            <Button className="bg-green-400 shadow-lg">
                                <Image
                                    src={'https://img.icons8.com/external-flatart-icons-outline-flatarticons/64/external-juice-travel-flatart-icons-outline-flatarticons.png'}
                                    alt="pomidor logo"
                                    width={30}
                                    height={30}
                                />
                            </Button>
                            <Button className="bg-green-400 shadow-lg">
                                <Image
                                    src={'https://img.icons8.com/external-outline-juicy-fish/60/external-toys-humanitarian-outline-outline-juicy-fish.png'}
                                    alt="pomidor logo"
                                    width={30}
                                    height={30}
                                />
                            </Button>
                            <Button className="bg-green-400 shadow-lg">
                                <Image
                                    src={'https://img.icons8.com/external-bearicons-detailed-outline-bearicons/50/external-Dishes-cooking-bearicons-detailed-outline-bearicons.png'}
                                    alt="pomidor logo"
                                    width={40}
                                    height={40}
                                />
                            </Button>
                            <Button className="bg-green-400 shadow-lg">
                                <Image
                                    src={'https://img.icons8.com/carbon-copy/100/cutlery.png'}
                                    alt="pomidor logo"
                                    width={30}
                                    height={30}
                                />
                            </Button>
                            <Button className="bg-green-400 shadow-lg">
                                <Image
                                    src={'https://img.icons8.com/ios/50/wok.png'}
                                    alt="pomidor logo"
                                    width={30}
                                    height={30}
                                />
                            </Button>
                            <Button className="bg-green-400 shadow-lg">
                                <Image
                                    src={'https://img.icons8.com/ios/50/teapot.png'}
                                    alt="pomidor logo"
                                    width={30}
                                    height={30}
                                />
                            </Button>
                            <Button className="bg-green-400 shadow-lg">
                                <Image
                                    src={'https://img.icons8.com/ios/50/kitchen--v1.png'}
                                    alt="pomidor logo"
                                    width={30}
                                    height={30}
                                />
                            </Button>
                            <Button className="bg-green-400 shadow-lg">
                                <Image
                                    src={'https://img.icons8.com/external-dreamstale-lineal-dreamstale/32/external-dress-clothes-accessories-dreamstale-lineal-dreamstale-1.png'}
                                    alt="pomidor logo"
                                    width={30}
                                    height={30}
                                />
                            </Button>
                            <Button className="bg-green-400 shadow-lg">
                                <Image
                                    src={'https://img.icons8.com/ios/50/suit.png'}
                                    alt="pomidor logo"
                                    width={30}
                                    height={30}
                                />
                            </Button>
                            <Button className="bg-green-400 shadow-lg">
                                <Image
                                    src={'https://img.icons8.com/external-flatart-icons-outline-flatarticons/64/external-juice-travel-flatart-icons-outline-flatarticons.png'}
                                    alt="pomidor logo"
                                    width={30}
                                    height={30}
                                />
                            </Button>
                            <Button className="bg-green-400 shadow-lg">
                                <Image
                                    src={'https://img.icons8.com/wired/64/forest.png'}
                                    alt="pomidor logo"
                                    width={30}
                                    height={30}
                                />
                            </Button>
                        </div>
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
                                        {/* Buy now */}
                                    </Button>
                                    </div>
                                </div>
                                // <div className="border border-slate-200 shadow rounded-md p-4 max-w-sm w-full mx-auto">
                                //   <div className="animate-pulse flex space-x-4">
                                //     <div className="rounded-full bg-slate-200 h-10 w-10"></div>
                                //     <div className="flex-1 space-y-6 py-1">
                                //       <div className="h-2 bg-slate-200 rounded"></div>
                                //       <div className="space-y-3">
                                //         <div className="grid grid-cols-3 gap-4">
                                //           <div className="h-2 bg-slate-200 rounded col-span-2"></div>
                                //           <div className="h-2 bg-slate-200 rounded col-span-1"></div>
                                //         </div>
                                //         <div className="h-2 bg-slate-200 rounded"></div>
                                //       </div>
                                //     </div>
                                //   </div>
                                // </div>
                            ))}
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        </div>
    )
}