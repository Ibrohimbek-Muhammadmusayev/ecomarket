'use client'

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Segmented } from 'antd';
import React, { useState } from 'react';

export default function Login(){
    const [value, setValue] = useState<string | number>('User');
    return (
        <div className="w-full">
            <div className="mt-[80px] mx-[20px]">
                <div className="max-w-[450px] px-[20px] rounded-[12px] mx-auto bg-gradient-to-r from-cyan-500 to-green-500 p-[20px] min-h-[700px]">
                    <div className="flex mt-[70px] justify-center">
                        <h1 className="text-white text-[25px] font-bold drop-shadow-xl">Login</h1>
                    </div>
                    <div className="flex flex-col mt-[170px] mx-[40px] gap-[10px]">
                        <div className="mx-auto">
                            <Segmented className="" options={['User', 'Seller']} value={value} onChange={setValue} />
                        </div>
                        <Input type="email" placeholder={"Email"}/>
                        <Input type="password" placeholder={"Password"}/>
                    </div>
                    <div className="flex justify-center mt-[50px] px-[40px]">
                        <Button className="w-[400px]">Login</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}