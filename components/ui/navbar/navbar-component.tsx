import navstyles from "@/components/ui/navbar/navbar.module.scss";
import Link from "next/link";
import Image from "next/image";
import globalConfig from "@/config";

export default function Navbar() {
    return <div className={navstyles.nav_bar}>
        <Link href='/'><Image src="/footer/home_icon.svg" width={24} height={22} alt=""/></Link>
        <Link href='/search'><Image src="/footer/search_icon.svg" width={24} height={22} alt=""/></Link>
        <Link href='#'><Image src="/footer/take_photo_icon.svg" width={24} height={22} alt=""/></Link>
        <Link href='#'><Image src="/footer/top_icon.svg" width={24} height={22} alt=""/></Link>
        <Link href={`/profile/${globalConfig.currentUsername}`}><Image src="/footer/profile_icon.svg" width={24} height={22} alt=""/></Link>
    </div>
}