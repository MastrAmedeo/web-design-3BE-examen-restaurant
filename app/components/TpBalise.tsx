import {ReactNode} from "react";
import Link from "next/link";

type BaliseProps = {
    href : string
    children : ReactNode
}

export default function TpBalise(props: BaliseProps) {
    return (
        <Link href = {props.href} className="inline-flex items-center rounded-md bg-[#313727]/80 px-5 py-3 text-m font-medium bg-[#21231d] inset-ring inset-ring-gray-400/20">
            {props.children}
        </Link>
    )
}