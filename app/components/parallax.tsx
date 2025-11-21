import {ReactNode} from "react";

type ParallaxProps = {
    children : ReactNode
}

export default function Parallax(props: ParallaxProps) {
    return (
        <div className = "bg-[#697851] py-3 rounded shadow-md text-center text-bold">
            {props.children}
        </div>
    )
}