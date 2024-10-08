'use client'

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Segmented } from 'antd';
import { type } from "os";
import React, { useState } from 'react';

type type = {
    email: string,
    password: string,
    username: string,
    lastname: string,
    role: string | number,
}

export default function Signup(){
    const [value, setValue] = useState<string | number>('User');
    console.log(value);
    
    const [selectedItems, setSelectedItems] = useState<type>({
        email: "",
        password: "",
        username: "",
        lastname: "",
        role: value
    });

    console.log(selectedItems);
    

    // const OnSubit = ()=>{

    // }
    
    return (
        <div className="w-full">
            <div className="mt-[80px] mx-[20px]">
                <div className="max-w-[450px] px-[20px] rounded-[12px] mx-auto bg-gradient-to-r from-cyan-500 to-green-500 p-[20px] min-h-[700px]">
                    <div className="flex mt-[70px] justify-center">
                        <h1 className="text-white text-[25px] font-bold drop-shadow-xl">Signup</h1>
                    </div>
                    <div className="flex flex-col mt-[170px] mx-[40px] gap-[10px]">
                        <div className="mx-auto">
                            <Segmented options={['User', 'Seller']} value={value} onChange={setValue} />
                        </div>
                        <Input value={selectedItems.email} onChange={(e)=>setSelectedItems({...selectedItems, email: e.target.value})} type="email" placeholder={"Email"}/>
                        <Input value={selectedItems.password} onChange={(e)=>setSelectedItems({...selectedItems, password: e.target.value})} type="password" placeholder={"Password"}/>
                        <Input value={selectedItems.username} onChange={(e)=>setSelectedItems({...selectedItems, username: e.target.value})} type="text" placeholder={"Username"}/>
                        <Input value={selectedItems.lastname} onChange={(e)=>setSelectedItems({...selectedItems, lastname: e.target.value})} type="text" placeholder={"Lastname"}/>
                    </div>
                    <div className="flex justify-center mt-[50px] px-[40px]">
                        <Button className="w-[400px]">Signup</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}