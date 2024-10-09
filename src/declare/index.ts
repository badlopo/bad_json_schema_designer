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
    properties: { [pid: string]: SchemaNode }
}

export {
    type SchemaNode,
    type SchemaRoot,
}
