import { createHashRouter, replace, RouteObject } from "react-router-dom";
import { HomePage } from "@/page/home.tsx";
import { DesignPage } from "@/page/design.tsx";
import { RootLayout } from "@/route/layout.tsx";

const routes: RouteObject[] = [
    {
        element: <RootLayout/>,
        children: [
            {
                path: '/',
                loader: () => replace('/home'),
            },
            {
                path: '/home',
                loader: HomePage.loader,
                element: <HomePage/>,
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
            },
        ],
    },
]

const router = createHashRouter(routes)

export {
    router
}
