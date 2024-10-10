import { Select } from "@/component/select.tsx";
import { SchemaTree } from "@/prefab/schema_tree.tsx";
import { SchemaBuilder, SchemaRoot } from "@/utils";
import { useState } from "react";

const schema_example = {
    properties: {
        'p1': {
            name: 'name',
            type: 'string',
            comment: '',
            required: true
        },
        'p2': {
            name: 'age',
            type: 'number',
            comment: '',
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

const builder = new SchemaBuilder(schema_example)

function App() {
    const [ schema, setSchema ] = useState(builder.build())

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
                console.log(builder.build())
            } }>log it
            </button>

            <div className={ 'w-[600px] bg-gray-100' }>
                <SchemaTree tree={ builder.schema } onUpdated={ () => setSchema(builder.build()) }/>
            </div>

            <div className={ 'whitespace-pre' }>
                { JSON.stringify(schema, null, 4) }
            </div>
        </div>
    )
}

export default App
