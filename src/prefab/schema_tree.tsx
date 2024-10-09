import { SchemaNode, SchemaRoot } from "@/declare";
import { IconCreateSub, IconRemove } from "@/component/icons.tsx";
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

type SchemaTreeNodeProps = {
    depth: number
    node: SchemaNode
    onRemoveClick: () => void
}

const SchemaTreeNode = ({ depth = 0, node, onRemoveClick }: SchemaTreeNodeProps) => {
    const refresh = useRefresher()

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
                { depth > 0 && <div style={ { width: depth * 8 } }/> }

                {/* TODO: prefix arrow + link line */ }

                <Input className={ 'flex-1 h-full' } value={ node.name } onChange={ modifyName }/>

                <Select className={ 'w-40 h-8' } items={ TYPE_CANDIDATES }
                        value={ node.type } onChange={ modifyType }/>

                <div className={ 'w-4 mx-2' }>
                    {
                        node.type === 'object' ? (
                            <IconCreateSub className={ 'text-blue-700' } onClick={ handleCreateSub }/>) : null
                    }
                </div>

                <IconRemove className={ 'text-[16px] text-gray-700' } onClick={ onRemoveClick }/>
            </div>
            {
                node.properties ? (
                    Object.entries(node.properties).map(([ k, v ]) => {
                        return <SchemaTreeNode
                            key={ k } depth={ depth + 1 } node={ v }
                            onRemoveClick={ () => removeProperty(k) }/>
                    })
                ) : null
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
            {
                Object.entries(tree.properties)
                    .map(([ k, v ]) => {
                        return <SchemaTreeNode
                            key={ k } depth={ 0 } node={ v }
                            onRemoveClick={ () => handleRemove(k) }/>
                    })
            }
            <button className={
                'h-8 px-2 border rounded bg-white hover:bg-gray-50 text-gray-900 text-sm'
            } onClick={ handleCreateSub }>
                新增
            </button>
        </>
    )
}

export {
    SchemaTree,
}
