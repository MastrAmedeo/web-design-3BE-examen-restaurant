import {ReactNode} from "react";
import Link from "next/link";

type BaliseProps = {
    href : string
    children : ReactNode
}

export default function TpBalise(props: BaliseProps) {
    return (
        <Link href = {props.href} className="inline-flex items-center rounded-md bg-gray-400/10 px-2 py-1 text-xs font-medium text-gray-400 inset-ring inset-ring-gray-400/20">
            {props.children}
        </Link>
    )
}