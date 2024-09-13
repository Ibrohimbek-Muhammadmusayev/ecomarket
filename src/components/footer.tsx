import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";

export default function Footer(){
    return (
        <div>
            <div className="w-full bg-green-100 rounded-t-[12px]">
                <div className="w-full">
                    <div className="max-w-[1440px] min-h-[300px] mx-auto">
                    <footer className="relative bg-blueGray-200 pt-8 pb-6">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-wrap text-left lg:text-left">
                        <div className="w-full lg:w-6/12 px-4">
                            <Link href={'/'}>
                                <h1 className="text-[30px] drop-shadow-lg font-bold text-green-700"><span className="text-lime-600">Eco</span> market</h1>
                            </Link>
                            <h5 className="text-lg mt-0 mb-2 text-blueGray-600">
                            Find us on any of these platforms, we respond 1-2 business days.
                            </h5>
                            <div className="mt-6 lg:mb-0 mb-6">
                            <button className="bg-white overflow-hidden text-lightBlue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                                <Image
                                src={'https://avatars.mds.yandex.net/i?id=307093cbaf0dd05a040f9663e3948dc0_l-7754287-images-thumbs&n=13'}
                                alt="logo"
                                width={45}
                                height={25}
                                />
                            </button>
                                <button className="bg-white overflow-hidden text-lightBlue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                                <Image
                                    src={'https://banner2.cleanpng.com/20180712/skf/kisspng-computer-icons-logo-instagram-social-logo-5b47c6cf5eb370.9823746715314306073879.jpg'}
                                    alt="logo"
                                    width={45}
                                    height={25}
                                />
                                </button>
                                {/* <button className="bg-white text-pink-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                                <i className="fab fa-dribbble"></i></button><button className="bg-white text-blueGray-800 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                                <i className="fab fa-github"></i>
                            </button> */}
                            </div>
                        </div>
                        <div className="w-full lg:w-6/12 px-4">
                            <div className="flex flex-wrap items-top mb-6">
                            <div className="w-full lg:w-4/12 px-4 ml-auto">
                                <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">Connection to Admins</span>
                                <ul className="list-unstyled">
                                <li>
                                    <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="https://t.me/Ibrohimbek_enginer">Telegram</a>
                                </li>
                                <li>
                                    <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="https://blog.creative-tim.com?ref=njs-profile">Tell:+998(90) 584 35 04</a>
                                </li>
                                {/* <li>
                                    <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="https://www.github.com/creativetimofficial?ref=njs-profile">Github</a>
                                </li>
                                <li>
                                    <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="https://www.creative-tim.com/bootstrap-themes/free?ref=njs-profile">Free Products</a>
                                </li> */}
                                </ul>
                            </div>
                            <div className="w-full lg:w-4/12 px-4">
                                <Button disabled className="overflow-hidden w-[200px] hover:bg-none h-[60px]">
                                <Image
                                    className="fill-white"
                                    src={'https://global-ural.ru/assets/media/google.jpg'}
                                    alt="logo"
                                    width={300}
                                    height={80}
                                />
                                </Button>
                                <Button disabled className="overflow-hidden w-[200px] hover:bg-none h-[60px]">
                                <Image
                                    className="fill-white"
                                    src={'https://vrasto.gr/wp-content/uploads/2020/05/app_store-2048x669.png'}
                                    alt="logo"
                                    width={300}
                                    height={80}
                                />
                                </Button>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="flex flex-wrap items-center md:justify-between justify-center">
                        <div className="w-full md:w-4/12 px-4 mx-auto text-center">
                            <div className="text-sm text-blueGray-500 font-semibold py-1">
                            Owner: Ibrogimbek Muhammadmusayev © 
                            </div>
                        </div>
                        </div>
                    </div>
                    </footer>
                    </div>
                </div>
                </div>
        </div>
    )
}