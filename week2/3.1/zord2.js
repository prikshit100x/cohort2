const express =require("express")
const zod = require("zod")
const app =express()

//
// {
//     email -> string ->zod.number
//     password -> atleast 8 lttr
//     country :"in" "us"
// }

const schema =  zod.object({
    email: zod.string().email(),
    password : zod.string().min(8),
    country : z.literal("IN").or(z.literal('US'))
    

})