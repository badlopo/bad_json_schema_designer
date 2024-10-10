type SchemaNode = {
    /**
     * key of the node
     */
    name: string

    /**
     * type of the node
     *
     * `type`
     */
    type: string

    /**
     * comment of the node
     *
     * `$comment`
     */
    comment?: string

    /**
     * if the node is required
     *
     * used when parent node's `type` is `object`
     * if `true`, the name of the node will be included in the parent node's `required` array
     */
    required?: boolean

    /**
     * properties of the node
     *
     * used when `type` is `object`
     *
     * `properties`
     *
     * ---
     *
     * here we use uuid as the key of the properties,
     * so that we can easily remove or add a property by its key,
     * and cost less when renaming a property
     */
    properties?: { [pid: string]: SchemaNode }
}

type SchemaRoot = { properties: { [pid: string]: SchemaNode } }

const build_schema_segment = (node: SchemaNode) => {
    const segment: Record<string, any> = { type: node.type }
    if(node.comment) segment.$comment = node.comment

    if(node.type === 'object' && node.properties) {
        const properties = Object.values(node.properties)
        if(properties.length !== 0) {
            segment.properties = {}

            const required: string[] = []
            for (const property of properties) {
                segment.properties[property.name] = build_schema_segment(property)
                if(property.required) required.push(property.name)
            }
            if(required.length !== 0) segment.required = required
        }
    }

    return segment
}

class SchemaBuilder {
    readonly #schema: SchemaRoot

    public get schema(): SchemaRoot {
        return this.#schema
    }

    constructor(root?: SchemaRoot) {
        this.#schema = root || { properties: {} }
    }

    /**
     * build the schema from config
     */
    public build() {
        // TODO: more meta data
        const schema: Record<string, any> = { properties: {} }

        const required: string[] = []
        for (const property of Object.values(this.#schema.properties)) {
            schema.properties[property.name] = build_schema_segment(property)
            if(property.required) required.push(property.name)
        }
        if(required.length !== 0) schema.required = required

        return schema
    }
}

export {
    type SchemaNode,
    type SchemaRoot,
    SchemaBuilder,
}
