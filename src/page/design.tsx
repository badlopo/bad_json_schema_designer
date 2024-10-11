import { LoaderFunctionArgs, replace, useLoaderData, useNavigate } from "react-router-dom";
import { SchemaBuilder } from "@/utils";
import { SchemaTree } from "@/prefab/schema_tree.tsx";
import { useEffect, useState } from "react";
import { v4 } from "uuid";

const DesignPage = () => {
    const navigator = useNavigate()
    const builder = useLoaderData() as SchemaBuilder
    const [ schema, setSchema ] = useState(builder.build())

    const handleUpdate = () => {
        if(!document.title.endsWith(' *')) {
            document.title += ' *'
        }

        setSchema(builder.build())
    }

    const handleExport = () => {
        builder.save()

        const blob = new Blob([ JSON.stringify(schema, null, 4) ], { type: 'application/json' })
        const url = URL.createObjectURL(blob)
        const a = document.createElement('a')
        a.href = url
        a.download = 'schema.json'
        a.click()
        URL.revokeObjectURL(url)
    }

    const handleReset = () => {
        builder.restore()
        setSchema(builder.build())
    }

    const handleExit = () => {
        navigator(-1)
    }

    const handleSave = () => {
        builder.save()
        document.title = document.title.replace(' *', '')
    }

    useEffect(() => {
        setSchema(builder.build())
    }, [ builder ])

    return (
        <div className={ 'w-full h-full' }>
            <div className={ 'w-full h-[calc(100%-48px)] flex items-start' }>
                <div className={ 'flex-1 h-full px-4 overflow-y-auto' }>
                    <SchemaTree tree={ builder.schema } onUpdated={ handleUpdate }/>
                </div>
                <div className={ 'flex-1 h-full px-4 overflow-auto' }>
                    <pre>{ JSON.stringify(schema, null, 4) }</pre>
                </div>
            </div>
            <div className={ 'w-full h-12 px-4 border-t text-[14px] flex items-center justify-end space-x-2' }>
                <button
                    className={ 'h-8 px-2 rounded bg-green-100 hover:bg-green-200 text-green-700' }
                    data-tooltip-id={ 'tooltip-common' }
                    data-tooltip-content={ '保存更改内容并导出当前 JSON Schema' }
                    onClick={ handleExport }>
                    导出
                </button>
                <button
                    className={ 'h-8 px-2 rounded bg-red-100 hover:bg-red-200 text-red-700' }
                    data-tooltip-id={ 'tooltip-common' }
                    data-tooltip-content={ '重置为上次保存的内容' }
                    onClick={ handleReset }>
                    重置
                </button>
                <button
                    className={ 'h-8 px-2 border rounded bg-gray-100 hover:bg-gray-200' }
                    data-tooltip-id={ 'tooltip-common' }
                    data-tooltip-content={ '忽略更改内容并退出编辑' }
                    onClick={ handleExit }>
                    退出
                </button>
                <button
                    className={ 'h-8 px-2 border rounded bg-blue-700 hover:bg-blue-800 text-white' }
                    data-tooltip-id={ 'tooltip-common' }
                    data-tooltip-content={ '将更改内容保存到本地' }
                    onClick={ handleSave }>
                    保存
                </button>
            </div>
        </div>
    )
}

DesignPage.loader = ({ params }: LoaderFunctionArgs) => {
    const id = params.id

    // if no id specified, automatically generate one for the new schema and redirect to the new url
    if(!id) return replace('/design/' + v4())

    // load the schema from the id (create a new builder if not found)
    return SchemaBuilder.fromId(id)
}

export {
    DesignPage,
}
