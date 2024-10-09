import { createHashRouter, RouteObject } from "react-router-dom";
import App from "@/page/App.tsx";
import { DesignPage } from "@/page/design.tsx";

const routes: RouteObject[] = [
    {
        path: '/',
        element: <App/>,
    },
    {
        // design a json schema with interactive UI
        // - create a new schema
        // - load a schema from a file and edit it
        path: '/design/:id?',
        loader: DesignPage.loader,
        element: <DesignPage/>,
    },
    {
        // predict a json schema from json data
        path: '/predict',
        element: <div>predict</div>,
    }
]

const router = createHashRouter(routes)

export {
    router
}
