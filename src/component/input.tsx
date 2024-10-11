type InputProps = {
    className?: string
    value: string
    placeholder?: string
    onChange: (value: string) => void
}

const Input = ({ className, value, placeholder, onChange }: InputProps) => {
    return (
        <input
            className={ `min-w-28 px-2 border focus:border-blue-700 rounded bg-white hover:bg-gray-50 text-gray-900 text-sm ${ className }` }
            type="text" value={ value } placeholder={ placeholder }
            onChange={ ev => onChange(ev.target.value) }/>
    )
}

export {
    Input,
}
