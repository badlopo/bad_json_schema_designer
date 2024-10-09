import { Select } from "@/component/select.tsx";
import { SchemaTree } from "@/prefab/schema_tree.tsx";
import { SchemaRoot } from "@/declare";
import { Input } from "@/component/input.tsx";
import { useState } from "react";

const schema_example = {
    properties: {
        'p1': {
            name: 'name',
            type: 'string',
            comment: 'name of the person',
            required: true
        },
        'p2': {
            name: 'age',
            type: 'number',
            comment: 'age of the person',
            required: true
        },
        'p3': {
            name: 'gender',
            type: 'boolean',
            comment: 'gender of the person',
        },
        'p4': {
            name: 'child',
            type: 'object',
            properties: {
                'p41': {
                    name: 'name',
                    type: 'string',
                    comment: 'name of the person',
                    required: true
                },
                'p42': {
                    name: 'age',
                    type: 'number',
                    comment: 'age of the person',
                    required: true
                },
                'p43': {
                    name: 'gender',
                    type: 'boolean',
                    comment: 'gender of the person',
                    required: true,
                },
            }
        }
    },
} satisfies SchemaRoot

function App() {
    const [ t, setT ] = useState('')

    return (
        <div className={ 'p-4' }>
            hi there <br/><br/>

            <div className={ 'w-28 h-8 truncate' }>
                lorem ipsum dolor sit amet consectetur adipisicing elit
            </div>

            <Select
                className={ 'w-20 h-8' }
                value={ 'b' }
                items={ {
                    'number': 'number',
                    'string': 'string',
                    'integer': 'integer',
                    'array<number>': 'array<number>',
                } }
                onChange={ (item) => {
                    console.log(item)
                } }/>

            <button onClick={ () => {
                console.log(schema_example)
            } }>log it
            </button>

            <br/>
            <br/>
            <span>{ t }</span>
            <br/>
            <br/>

            <br/>
            <Input className={ 'w-40 h-8 border rounded' } value={ t } placeholder={ '请输入名称' } onChange={ setT }/>
            <div className={ 'w-[500px] p-4 bg-gray-50' }>
                <br/>
                <SchemaTree tree={ schema_example }/>
            </div>
        </div>
    )
}

export default App
