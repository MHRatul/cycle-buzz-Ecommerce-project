export default{
    name: 'product',
    title: 'Product',
    type: 'document',
    fields: [
        
        {
            name: 'name',
            title: 'Product Name',
            type: 'string'
        },
        {
            name: 'description',
            title: 'Product Descripcion',
            type: 'string'

        },
        {
            name: 'price',
            title: 'Product Price',
            type: 'number'

        },
        {
            name: 'price_id',
            title: 'Stripe Product Price ID',
            type: 'string'

        },
        {
            name: 'images',
            title: 'Product Images',
            type: 'array',
            of: [{type:'image'}],

        },
        {
            name: 'category',
            title: 'Categories',
            type: 'array',
            of: [{type: 'reference', to: {type: 'category'}}],
        },
    ],
}