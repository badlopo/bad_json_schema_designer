import { useState } from "react";
import { DivX } from "@/component/divx.tsx";
import { IconArrowDown, IconCheck } from "@/component/icons.tsx";

type SelectProps<Value> = {
    className?: string,
    value?: Value,
    items: { [k: string]: Value }
    onChange: (item: Value) => void,
}

function Select<Value>({
    className = 'w-full h-8',
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
            <div
                className={ 'w-full h-full px-2 border rounded bg-white hover:bg-gray-50 text-gray-900 text-sm cursor-pointer flex items-center' }
                title={ v[0] } onClick={ () => setFold(v => !v) }>
                <span className={ 'flex-1 truncate' }>{ v[0] }</span>
                <IconArrowDown className={ 'float-right' }/>
            </div>

            {
                fold ? null : (
                    <DivX
                        className={ `absolute z-10 top-full left-0 w-full mt-2 py-1 rounded bg-white shadow-lg ring-1 ring-black ring-opacity-5` }>
                        {
                            Object.entries(items).map(([ k, v ]) => {
                                return (
                                    <div key={ k }
                                         className={
                                             'w-full h-9 px-2 hover:bg-gray-100 cursor-pointer flex items-center'
                                         }
                                         title={ k } onClick={ () => handleSelect(k, v) }>
                                        <span className={ 'flex-1 text-gray-700 text-sm leading-[36px] truncate' }>
                                            { k }
                                        </span>
                                        { v === value ? <IconCheck className={ 'text-gray-700 text-[14px]' }/> : null }
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
