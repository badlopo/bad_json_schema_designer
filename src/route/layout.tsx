import { Outlet } from "react-router-dom";
import { Tooltip } from "react-tooltip";

const RootLayout = () => {
    return (
        <>
            <Tooltip id={ 'tooltip-common' }/>

            <Outlet/>
        </>
    )
}

export {
    RootLayout,
}
