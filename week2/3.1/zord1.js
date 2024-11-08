const exp = require("constants")
const express =require("express")
const zod = require("zod")
const app = express()

app.use(express.json())
const schema = zod.array(zod.number()) // structue of our schema
app.post('/health-checkup', function(req,res){


    const kidneys =req.body.kidneys
    const response = schema.safeParse(kidneys)
    if(!response.success){
        res.status(411).json({
            msg:"input is invalid"
        })
    }
    else{
        res.send({
            response
        })
    }
})

app.listen(3001)