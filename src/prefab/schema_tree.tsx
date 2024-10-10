import { SchemaNode, SchemaRoot } from "@/declare";
import { IconAdd, IconCheck, IconCreateSub, IconRemove } from "@/component/icons.tsx";
import { useRefresher } from "@/hook.ts";
import { v4 } from "uuid";
import { Input } from "@/component/input.tsx";
import { Select } from "@/component/select.tsx";

// OPTIMIZE: build-in + customize
const TYPE_CANDIDATES = {
    'String': 'string',
    'Number': 'number',
    'Boolean': 'boolean',
    'Object': 'object',
    'Array': 'array',
}

const SchemaTreeHeader = () => {
    return (
        <div className={ 'w-full h-8 text-gray-500 text-[12px] flex items-center' }>
            <div className={ 'w-5' }/>
            <div className={ 'flex-1' }>变量名</div>
            <div className={ 'w-40 ml-2' }>变量类型</div>
            <div className={ 'w-8 ml-2 text-center' }>必需</div>
            <div className={ 'w-4 ml-2' }/>
            <div className={ 'w-4 ml-2' }/>
        </div>
    )
}

type SchemaTreeNodeProps = {
    depth: number
    node: SchemaNode
    onRemoveClick: () => void
}

const SchemaTreeNode = ({ depth = 0, node, onRemoveClick }: SchemaTreeNodeProps) => {
    const refresh = useRefresher()

    const children = !!node.properties ? Object.entries(node.properties) : null

    const modifyName = (name: string) => {
        node.name = name
        refresh()
    }

    const modifyType = (type: string) => {
        node.type = type

        // clear properties if type is not object
        if(type !== 'object') node.properties = undefined

        refresh()
    }

    const modifyRequired = () => {
        node.required = !node.required
        refresh()
    }

    const handleCreateSub = () => {
        if(!node.properties) node.properties = {}

        node.properties[v4()] = {
            name: '',
            type: 'string',
            comment: '',
        }
        refresh()
    }

    const removeProperty = (key: string) => {
        delete node.properties![key]
        refresh()
    }

    return (
        <>
            <div className={ 'w-full h-8 mb-2 flex items-center' }>
                {/* indent */ }
                { depth > 0 && <div style={ { width: depth * 8 } }/> }

                {/* dot & link */ }
                <div className={ 'w-3 mr-2' }>
                    {
                        depth > 0 ? (
                            <div
                                className={ 'relative w-3 h-10 border-l border-b rounded-bl border-gray-300 -translate-y-1/2' }>
                                <div
                                    className={ 'absolute -top-[3px] -left-[3px] w-[6px] h-[6px] rounded-full bg-gray-700' }/>
                            </div>
                        ) : null
                    }
                </div>

                <Input
                    className={ 'flex-1 h-full' } placeholder={ '请输入变量名' }
                    value={ node.name } onChange={ modifyName }/>

                <Select className={ 'w-40 h-8 ml-2' } items={ TYPE_CANDIDATES }
                        value={ node.type } onChange={ modifyType }/>

                <div
                    className={ 'w-8 h-8 ml-2 text-gray-700 text-[14px] border rounded bg-white cursor-pointer flex items-center justify-center' }
                    onClick={ modifyRequired }>
                    { node.required ? <IconCheck/> : null }
                </div>

                <div className={ 'w-4 ml-2' }
                     data-tooltip-id={ 'tooltip-common' }
                     data-tooltip-content={ '新增子项' }>
                    {
                        node.type === 'object' ? (
                            <IconCreateSub
                                className={ 'text-[16px] text-gray-500' }
                                onClick={ handleCreateSub }/>
                        ) : null
                    }
                </div>

                <div
                    className={ 'w-4 ml-2' }
                    data-tooltip-id={ 'tooltip-common' }
                    data-tooltip-content={ '移除' }>
                    <IconRemove className={ 'text-[16px] text-gray-500' } onClick={ onRemoveClick }/>
                </div>
            </div>
            {
                children?.map(([ k, v ]) => {
                    return <SchemaTreeNode
                        key={ k } depth={ depth + 1 } node={ v }
                        onRemoveClick={ () => removeProperty(k) }/>
                })
            }
        </>
    )
}

const SchemaTree = ({ tree }: { tree: SchemaRoot }) => {
    const refresh = useRefresher()

    const handleCreateSub = () => {
        tree.properties[v4()] = {
            name: '',
            type: 'string',
            comment: '',
        }
        refresh()
    }

    const handleRemove = (key: string) => {
        delete tree.properties[key]
        refresh()
    }

    return (
        <>
            <SchemaTreeHeader/>
            {
                Object.entries(tree.properties)
                    .map(([ k, v ]) => {
                        return <SchemaTreeNode
                            key={ k } depth={ 0 } node={ v }
                            onRemoveClick={ () => handleRemove(k) }/>
                    })
            }
            <div className={ 'h-8 flex items-center' }>
                <div className={ 'w-3 mr-2' }/>

                <button
                    className={ 'h-8 px-2 border rounded bg-white hover:bg-gray-50 text-gray-700 text-[12px] leading-3 flex items-center' }
                    onClick={ handleCreateSub }>
                    <IconAdd className={ 'mr-1' }/>
                    <span>新增</span>
                </button>
            </div>
        </>
    )
}

export {
    SchemaTree,
}
