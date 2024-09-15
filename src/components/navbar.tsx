"use client"
// import "./globals.css";
import Image from "next/image";
import Link from "next/link";
import { CheckOutlined, CloseOutlined } from '@ant-design/icons';
import { Button } from "./ui/button";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import React, { useEffect, useState } from 'react';
import { Drawer, Modal, Select, Space, Switch } from 'antd';
import type { DrawerProps, RadioChangeEvent } from 'antd';

const OPTIONS = ['Apples', 'Nails', 'Bananas', 'Helicopters'];

export default function Navbar(){
    const [selectedItems, setSelectedItems] = useState<string[]>([]);
    const [token, setToken] = useState<string | null>(null);
    useEffect(() => {
        const token = JSON.parse(localStorage.getItem('token') as string)
        if (token) {
            setToken(token)
        }
    }, [])

    const [open, setOpen] = useState(false);
    const [placement, setPlacement] = useState<DrawerProps['placement']>('left');

    const showDrawer = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };

    const onChange = (e: RadioChangeEvent) => {
        setPlacement(e.target.value);
    };

    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const onCategory = ()=>{
        onClose()
        showModal()
    }

    const filteredOptions = OPTIONS.filter((o) => !selectedItems.includes(o));

    return (
        <div className="w-full">
            <div className="w-full fixed z-50 items-center bg-green-400">
                <div className="max-w-[1440px] flex justify-between items-center px-[20px] text-white mx-auto h-[40px] sm:border-b md:border-b bg-green-400">
                    <div className="flex items-center justify-center sm:justify-between 2xl:justify-between lg:justify-between md:justify-between xl:justify-between">
                        <ul className="flex gap-[50px] mobilhidden">
                            <Link href={'/'}>
                                <li className="font-semibold">Home</li>
                            </Link>
                            <Link href={'/'}>
                                <li className="font-semibold">About</li>
                            </Link>
                            <Popover>
                                <PopoverTrigger>
                                    <li className="font-semibold">Categoriya</li>
                                </PopoverTrigger>
                                <PopoverContent className="w-full">
                                    <div className="w-[800px]">
                                        1
                                    </div>
                                    <div className="w-[800px]">
                                        2
                                    </div>
                                    <div className="w-[800px]">
                                        3
                                    </div>
                                </PopoverContent>
                            </Popover>
                            <Link href={'/'}>
                                <li className="font-semibold">Delivery_area</li>
                            </Link>
                        </ul>
                        <Drawer
                            title="Pagination"
                            placement={placement}
                            closable={true}
                            onClose={onClose}
                            width={320}
                            open={open}
                            key={placement}
                        >
                            <ul className="flex flex-col pb-[20px] border-b gap-[10px]">
                                <Link href={'/'}>
                                    <div className="w-full h-[30px] bg-slate-400 rounded-[6px] p-1">
                                        <li className="font-semibold text-green-300">Home</li>
                                    </div>
                                </Link>
                                <Link href={'/'}>
                                    <div className="w-full h-[30px] bg-slate-400 rounded-[6px] p-1">
                                        <li className="font-semibold text-green-300">About</li>
                                    </div>
                                </Link>
                                <div onClick={onCategory} className="w-full h-[30px] bg-slate-400 rounded-[6px] p-1">
                                    <li className="font-semibold text-start text-green-300">Categoriya</li>
                                </div>
                                <Modal title="All Category" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                                    <div className="flex h-[400px] shadow-inner p-2 justify-center flex-wrap gap-[30px] overflow-y-scroll">
                                        <div className="w-[70px] rounded-sm h-[70px] bg-slate-500"></div>
                                        <div className="w-[70px] rounded-sm h-[70px] bg-slate-500"></div>
                                        <div className="w-[70px] rounded-sm h-[70px] bg-slate-500"></div>
                                        <div className="w-[70px] rounded-sm h-[70px] bg-slate-500"></div>
                                        <div className="w-[70px] rounded-sm h-[70px] bg-slate-500"></div>
                                        <div className="w-[70px] rounded-sm h-[70px] bg-slate-500"></div>
                                        <div className="w-[70px] rounded-sm h-[70px] bg-slate-500"></div>
                                        <div className="w-[70px] rounded-sm h-[70px] bg-slate-500"></div>
                                        <div className="w-[70px] rounded-sm h-[70px] bg-slate-500"></div>
                                        <div className="w-[70px] rounded-sm h-[70px] bg-slate-500"></div>
                                        <div className="w-[70px] rounded-sm h-[70px] bg-slate-500"></div>
                                        <div className="w-[70px] rounded-sm h-[70px] bg-slate-500"></div>
                                        <div className="w-[70px] rounded-sm h-[70px] bg-slate-500"></div>
                                    </div>
                                </Modal>
                                <Link href={'/'}>
                                    <div className="w-full h-[30px] bg-slate-400 rounded-[6px] p-1">
                                        <li className="font-semibold text-green-300">Delivery_area</li>
                                    </div>
                                </Link>
                            </ul>
                            <ul className="flex mt-[20px] flex-col pb-[20px] border-b gap-[10px]">
                                <Link href={'/'}>
                                    <div className="w-full h-[30px] bg-slate-400 rounded-[6px]">
                                        <li className="flex justify-between px-[5px] text-green-300 items-center font-semibold">
                                            Card
                                            <Image
                                                className="fill-white text-white"
                                                src={'/Shopping-Cart.gif'}
                                                alt="category"
                                                width={30}
                                                height={30}
                                            />
                                        </li>
                                    </div>
                                </Link>
                                <Link href={'/login'}>
                                    <div className="w-full h-[30px] bg-slate-400 rounded-[6px] p-1">
                                        <li className="font-semibold text-green-300">Login</li>
                                    </div>
                                </Link>
                                <Link href={'/signup'}>
                                    <div className="w-full h-[30px] bg-slate-400 rounded-[6px] p-1">
                                        <li className="font-semibold text-green-300">Signup</li>
                                    </div>
                                </Link>
                            </ul>
                            <h1 className="mt-[20px] text-[20px] font-bold">Admin Data</h1>
                            <div className="flex flex-col rounded-[12px] pr-[10px] justify-center gap-[20px] flex-wrap">
                                <h1 className="text-18px] font-bold">+998905843504</h1>
                                <h1 className="text-18px] font-bold">ibrohimbekmuhammadmusayev@gmail.com</h1>
                                <div className="flex justify-center gap-[10px]">
                                    <Button className="bg-green-400">
                                        <Link href={'https://t.me/Ibrohimbek_enginer'}>
                                            <Image
                                                src={'./telegram.svg'}
                                                alt="telegram"
                                                width={30}
                                                height={30}
                                                />
                                        </Link>
                                    </Button>
                                    <Button className="bg-green-400">
                                        <Link href={'https://www.instagram.com/ibrokhm.l6/'}>
                                            <Image
                                                src={'./instagram.svg'}
                                                alt="telegram"
                                                width={30}
                                                height={30}
                                            />
                                        </Link>
                                    </Button>
                                </div>
                            </div>
                        </Drawer>
                        <div className="sm:hidden md:hidden mobilhidden minwidthmobilhidden lg:hidden xl:flex 2xl:flex flex gap-[40px]">
                            <h1 className="font-semibold">+998905843504</h1>
                            <h1 className="font-semibold">ibrohimbekmuhammadmusayev@gmail.com</h1>
                            <div className="flex gap-[10px]">
                                <Link href={'https://t.me/Ibrohimbek_enginer'}>
                                    <Image
                                        src={'./telegram.svg'}
                                        alt="telegram"
                                        width={30}
                                        height={30}
                                    />
                                </Link>
                                <Link href={'https://www.instagram.com/ibrokhm.l6/'}>
                                    <Image
                                        src={'./instagram.svg'}
                                        alt="telegram"
                                        width={30}
                                        height={30}
                                    />
                                </Link>
                            </div>
                        </div>
                        <div className="sm:hidden">
                            <div className="h-[40px] px-[5px] bg-green-400">
                                <Link href={'/'}>
                                    <h1 className="text-[30px] drop-shadow-lg font-bold text-green-700"><span className="text-lime-600">Eco</span> market</h1>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full fixed z-50 bg-green-400 mt-[40px] rounded-b-[12px]">
                <div className="h-[90px] max-w-[1440px] px-[20px] mx-auto items-center flex gap-[20px] sm:gap-[20px] justify-between">
                    <div className="flex items-center gap-[15px]">
                        {token ? 
                            <Avatar>
                                <AvatarImage src="https://sh-tarutinskaya-r04.gosweb.gosuslugi.ru/netcat_files/108/690/speaker_azzurro_1.png" />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                            : null
                        }
                        <div className="w-[165px] mobilhidden">
                            <Link href={'/'}>
                                <h1 className="text-[30px] drop-shadow-lg font-bold text-green-700"><span className="text-lime-600">Eco</span> market</h1>
                            </Link>
                        </div>
                    </div>
                    <button className="bg-white w-[60px] sm:hidden flex justify-center overflow-hidden rounded text-black" onClick={showDrawer}>
                        <Image
                            className="w-[30px] mx-[8px] h-[30px]"
                            src={'/hamburger.png'}
                            alt="pagination logo"
                            width={30}
                            height={30}
                        />
                    </button>
                    {/* asdasdasdasdasdasd */}
                    <Select
                        mode="multiple"
                        placeholder="Inserted are removed"
                        value={selectedItems}
                        onChange={setSelectedItems}
                        style={{ width: '400px' }}
                        options={filteredOptions.map((item) => ({
                            value: item,
                            label: item,
                        }))}
                    />
                    <Popover>
                        <PopoverTrigger>
                            <div className="mobilhidden sm:hidden flex items-center gap-[10px]">
                                <div className="p-[5px] bg-green-800 rounded-[6px]">
                                    <Image
                                        src={'./category-logo.svg'}
                                        alt="category"
                                        width={30}
                                        height={30}
                                    />
                                </div>
                                <h1 className="text-[18px] font-semibold text-white">Category</h1>
                            </div>
                        </PopoverTrigger>
                        <PopoverContent className="w-full">
                            <div className="w-[800px]">
                                1
                            </div>
                            <div className="w-[800px]">
                                2
                            </div>
                            <div className="w-[800px]">
                                3
                            </div>
                        </PopoverContent>
                    </Popover>
                    <ul className="sm:hidden md:flex lg:flex xl:flex 2xl:flex  flex gap-[20px]">
                        <Popover>
                            <PopoverTrigger>
                                <div className="bg-white flex justify-center items-center w-[50px] h-[36px] rounded-[6px] mobilhidden p-0">
                                    <Image
                                        src={'/Shopping-Cart.gif'}
                                        alt="category"
                                        width={30}
                                        height={30}
                                    />
                                </div>
                            </PopoverTrigger>
                            <PopoverContent className="w-full">
                                <div className="w-[800px]">
                                    1
                                </div>
                                <div className="w-[800px]">
                                    2
                                </div>
                                <div className="w-[800px]">
                                    3
                                </div>
                            </PopoverContent>
                        </Popover>
                        <div className="mobilhidden flex gap-[12px]">
                            <Link href={'/login'}>
                                <Button className="bg-green-800">Login</Button>
                            </Link>
                            <Link href={'signup'}>
                                <Button className="bg-green-800">Sign up</Button>
                            </Link>
                        </div>
                    </ul>
                </div>
            </div>
        </div>
    )
}