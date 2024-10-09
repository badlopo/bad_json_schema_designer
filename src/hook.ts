import { useState } from "react";

const useRefresher = () => {
    const [ _, set ] = useState(false);
    return () => set(v => !v);
}

export {
    useRefresher,
}
