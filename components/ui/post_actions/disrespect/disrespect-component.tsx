import Image from "next/image";

export interface DisrespectProps {
}

export default function Disrespect({
}: DisrespectProps) {
    return <Image
        alt='disrespect'
        src="/disrespect.svg"
        width={0}
        height={0}
        sizes="100vw"
        style={{ height: '22px', width: 'auto' }}
    />
}