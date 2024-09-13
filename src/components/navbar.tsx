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
import { Modal, Select, Space, Switch } from 'antd';

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

    const filteredOptions = OPTIONS.filter((o) => !selectedItems.includes(o));

    return (
        <div className="w-full">
            <div className="w-full fixed z-50 items-center bg-green-700">
                <div className="max-w-[1440px] items-center px-[20px] text-white mx-auto h-[40px] bg-green-700">
                    <div className="flex items-center justify-between py-1">
                        <ul className="flex gap-[50px]">
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
                                <li className="font-semibold">Delivery area</li>
                            </Link>
                        </ul>
                        <div className="sm:hidden md:hidden lg:hidden xl:flex 2xl:flex flex gap-[40px]">
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
                        <div className="flex gap-[20px]">
                            <div className="w-[40px] h-[30px]">
                                <Space direction="vertical">
                                    <Switch checkedChildren="UZ" unCheckedChildren="EN" defaultChecked />
                                    <Switch checkedChildren="1" unCheckedChildren="0" />
                                    <Switch
                                    checkedChildren={<CheckOutlined />}
                                    unCheckedChildren={<CloseOutlined />}
                                    defaultChecked
                                    />
                                </Space>
                            </div>
                            <div className="sm:block md:block lg:block xl:hidden 2xl:hidden">
                                <Button onClick={showModal} className="bg-white">
                                    <Image
                                        src={'/box.png'}
                                        alt="user"
                                        width={30}
                                        height={30}
                                    />
                                </Button>
                                <Modal title="Admin data" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                                    <div className="flex bg-slate-400 rounded-[12px] p-[10px] justify-center gap-[20px] flex-wrap">
                                        <h1>+998905843504</h1>
                                        <h1>ibrohimbekmuhammadmusayev@gmail.com</h1>
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
                                </Modal>
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
                        <div className="w-[165px]">
                            <Link href={'/'}>
                                <h1 className="text-[30px] drop-shadow-lg font-bold text-green-700"><span className="text-lime-600">Eco</span> market</h1>
                            </Link>
                        </div>
                    </div>
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
                    <Button className="bg-white sm:flex md:hidden h-[50px] w-[50px] p-0">
                        <Image
                            src={'/hause.png'}
                            alt="category"
                            width={30}
                            height={30}
                        />
                    </Button>
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