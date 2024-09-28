import { defineType } from "sanity";
export default defineType({
    name:"product",
    title:"Product",
    type:"document",
    fields:[{
        name:"product",
        title:"Product Name",
        type:"string"
    },
    {
        name:"price",
        title:"Product Price",
        type:"number"
    },
    
    {
        name:"description",
        title:"Product Description",
        type:"string"
    },
    {
        name:"image",
        title:"Product Image",
        type:"array",
        of:[
            {
                name:"image",
                title:"images",
                type:"image"
            }
        ]
    },
    {
        name:"category",
        title :"Category",
        type:"reference",
        to:[
            {
                type:"category"   
            }
        ]
    }
]
})