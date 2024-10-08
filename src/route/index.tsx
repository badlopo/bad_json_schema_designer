import { createHashRouter, RouteObject } from "react-router-dom";
import App from "@/page/App.tsx";

const routes: RouteObject[] = [
    {
        path: '/',
        element: <App/>,
    },
]

const router = createHashRouter(routes)

export {
    router
}