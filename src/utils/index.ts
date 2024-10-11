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

type SchemaRoot = {
    title?: string
    description?: string
    properties: { [pid: string]: SchemaNode }
}

const build_schema_segment = (node: SchemaNode) => {
    const segment: Record<string, any> = { type: node.type }
    if(node.comment) segment.$comment = node.comment

    if(node.type === 'object' && node.properties) {
        const properties = Object.values(node.properties)
        if(properties.length !== 0) {
            segment.properties = {}

            const required: string[] = []
            for (const property of properties) {
                if(property.name === '') continue

                segment.properties[property.name] = build_schema_segment(property)
                if(property.required) required.push(property.name)
            }
            if(required.length !== 0) segment.required = required
        }
    }

    return segment
}

class SchemaBuilder {
    /**
     * load schema from local storage with given id,
     * or create a new one if not found and save it to local storage
     */
    public static fromId(id: string) {
        const root = localStorage.getItem(`@schema/${ id }`)

        if(!!root) {
            try {
                return new SchemaBuilder(id, JSON.parse(root))
            } catch (err) {
                console.error('failed to parse cache:', err)
            }
        }

        const builder = new SchemaBuilder(id)
        builder.save()
        return builder
    }

    /**
     * load all schema from local storage
     */
    public static all() {
        return Object.entries(localStorage)
            .filter(([ key ]) => key.startsWith('@schema/'))
            .map(([ key, value ]) => {
                try {
                    return new SchemaBuilder(key.slice(8), JSON.parse(value))
                } catch (err) {
                    console.error('failed to parse cache:', err)
                    return null
                }
            })
            .filter(builder => !!builder)
    }

    /**
     * delete schema from local storage with given id
     */
    public static delete(id: string) {
        localStorage.removeItem(`@schema/${ id }`)
    }

    readonly #id: string

    public get id(): string {
        return this.#id
    }

    #schema: SchemaRoot

    public get schema(): SchemaRoot {
        return this.#schema
    }

    public get name() {
        return this.#schema.title
    }

    public get description() {
        return this.#schema.description
    }

    constructor(id: string, root?: SchemaRoot) {
        this.#id = id
        this.#schema = root || { properties: {} }
    }

    /**
     * build schema from current schema tree
     */
    public build() {
        const schema: Record<string, any> = {
            $schema: 'https://json-schema.org/draft/2020-12/schema',
            type: 'object',
        }

        if(this.#schema.title) schema.title = this.#schema.title
        if(this.#schema.description) schema.description = this.#schema.description

        const properties = Object.values(this.#schema.properties)
        if(properties.length !== 0) schema.properties = {}

        const required: string[] = []
        for (const property of properties) {
            if(property.name === '') continue

            schema.properties[property.name] = build_schema_segment(property)
            if(property.required) required.push(property.name)
        }
        if(required.length !== 0) schema.required = required

        return schema
    }

    /**
     * restore the schema from local storage, ignore all changes made
     */
    public restore() {
        const tree = localStorage.getItem(`@schema/${ this.#id }`)
        if(!!tree) {
            try {
                this.#schema = JSON.parse(tree)
                return true
            } catch (err) {
                console.error('failed to parse cache:', err)
            }
        }
        return false
    }

    /**
     * save the schema to local storage (overwrite if exists)
     */
    public save() {
        localStorage.setItem(`@schema/${ this.#id }`, JSON.stringify(this.#schema))
    }
}

export {
    type SchemaNode,
    type SchemaRoot,
    SchemaBuilder,
}
