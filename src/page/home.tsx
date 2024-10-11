import { useLoaderData, useNavigate, useRevalidator } from "react-router-dom";
import { SchemaBuilder } from "@/utils";
import { IconAdd, IconDelete, IconEdit } from "@/component/icons.tsx";

function HomePage() {
    const schemas = useLoaderData() as SchemaBuilder[]

    const { revalidate } = useRevalidator()
    const navigate = useNavigate()

    const handleDelete = (schema_id: string) => {
        if(confirm('Are you sure to delete this schema?')) {
            SchemaBuilder.delete(schema_id)
            revalidate()
        }
    }

    return (
        <div className={ 'p-4' }>

            <table className={ 'w-full' }>
                <thead>
                <tr>
                    <th className={ 'w-24' }>
                        <button
                            className={ 'w-full h-8 border rounded bg-white hover:bg-gray-50 text-[14px] flex items-center justify-center' }
                            onClick={ () => navigate('/design') }>
                            <IconAdd className={ 'mr-1' }/>
                            <span>New</span>
                        </button>
                    </th>
                    <th className={ 'min-w-28' }>Schema ID</th>
                    <th className={ 'min-w-24' }>Name</th>
                    <th>Description</th>
                    <th className={ 'w-24' }>Actions</th>
                </tr>
                </thead>
                <tbody>
                {
                    schemas.map((schema, idx) => {
                        return (
                            <tr key={ idx }>
                                <td>{ idx + 1 }</td>
                                <td className={ 'italic text-gray-500 text-[14px]' }>{ schema.id }</td>
                                <td>{ schema.name }</td>
                                <td>{ schema.description }</td>
                                <td>
                                    <IconEdit
                                        className={ 'text-gray-700 inline-block' }
                                        onClick={ () => navigate(`/design/${ schema.id }`) }/>
                                    <IconDelete
                                        className={ 'ml-2 text-red-700 inline-block' }
                                        onClick={ () => handleDelete(schema.id) }/>
                                </td>
                            </tr>
                        )
                    })
                }
                </tbody>
            </table>
        </div>
    )
}

HomePage.loader = () => {
    return SchemaBuilder.all()
}

export {
    HomePage,
}
