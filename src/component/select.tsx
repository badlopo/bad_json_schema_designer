import { useState } from "react";
import { DivX } from "@/component/divx.tsx";

type SelectProps<Value> = {
    className?: string,
    value?: Value,
    items: { [k: string]: Value }
    onChange: (item: Value) => void,
}

function Select<Value>({
    className = 'h-8 border rounded',
    value,
    items,
    onChange
}: SelectProps<Value>) {
    const [ fold, setFold ] = useState(true)
    const [ v, setV ] = useState<[ string, Value ]>(() => {
        const entries = Object.entries(items)
        for (const entry of entries) {
            if(entry[1] === value) return entry
        }

        return entries[0]
    })

    const handleSelect = (label: string, value: Value) => {
        onChange(value)
        setV([ label, value ])
        setFold(true)
    }

    return (
        <DivX className={ `relative ${ className }` } onClickOut={ () => setFold(true) }>
            <button
                className={ 'w-full h-full px-1 border rounded bg-white hover:bg-gray-50 text-gray-900 text-sm truncate' }
                title={ v[0] } onClick={ () => setFold(v => !v) }>
                { v[0] }
            </button>

            {
                fold ? null : (
                    <DivX
                        className={ `absolute z-10 top-full left-0 w-full mt-2 py-1 rounded bg-white shadow-lg ring-1 ring-black ring-opacity-5` }>
                        {
                            Object.entries(items).map(([ k, v ]) => {
                                return (
                                    <div key={ k }
                                         className={
                                             'w-full h-9 px-1 hover:bg-gray-100 cursor-pointer text-gray-700 text-sm text-center leading-[36px] truncate'
                                         }
                                         title={ k }
                                         onClick={ () => handleSelect(k, v) }>
                                        { k }
                                    </div>
                                )
                            })
                        }
                    </DivX>
                )
            }
        </DivX>
    )
}

export {
    type SelectProps,
    Select,
}
