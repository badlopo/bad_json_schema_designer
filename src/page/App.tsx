import { useState } from 'react'

function App() {
    const [ count, setCount ] = useState(0)

    return (
        <div className={ 'text-red-50' }>
            hi there
        </div>
    )
}

export default App
