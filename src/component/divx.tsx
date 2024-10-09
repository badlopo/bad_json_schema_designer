import { HTMLAttributes, useEffect, useRef } from "react";

const DivX = ({ onClickOut, ...props }: HTMLAttributes<HTMLDivElement> & { onClickOut?: (ev: MouseEvent) => void }) => {
    const ref = useRef<HTMLDivElement>(null)
    const fn = (ev: MouseEvent) => {
        const el = ref.current!
        if(!ev.composedPath().includes(el)) onClickOut?.(ev)
    }

    useEffect(() => {
        window.addEventListener('click', fn)
        return () => window.removeEventListener('click', fn)
    }, [])

    return (
        <div ref={ ref } { ...props }/>
    )
}

export {
    DivX,
}
