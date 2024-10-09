import { LoaderFunctionArgs } from "react-router-dom";

const DesignPage = () => {
    return (
        <div>
            xxx
        </div>
    )
}

DesignPage.loader = ({ params }: LoaderFunctionArgs) => {
    console.log('DesignPage.loader', params)
    return null
}

export {
    DesignPage,
}
