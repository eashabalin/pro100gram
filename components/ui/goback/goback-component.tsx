'use client'
import gobackStyle from "@/components/ui/goback/goback.module.scss"
import Link from "next/link";
import {useRouter} from "next/navigation";
import Image from 'next/image'
import React from "react";
export default function GoBack({children}: {children: React.ReactNode}) {
    const router = useRouter()

    return <div className={gobackStyle.goback}>
        <button className={gobackStyle.backButton} type={"button"} onClick={() => router.back()}>
            <Image src="/icons/goback-button.svg" alt={"назад"} width={10} height={18}/>
        </button>
        <span className={gobackStyle.text}>{children}</span>
    </div>
}