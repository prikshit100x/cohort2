const exp = require("constants")
const express =require("express")

const app =express()
app.use(express.json())
app.post('/helath-checkup',function(req,res){
    const kidneys = req.body.kidneys
    const kidneysLength = kidneys.length;
     
    res.send("your kidney length is " + kidneysLength)

})

// global catches
app.use(function(err,req,res,next){
    res.json({
        "msg" :"sorry something is wrong"
    }
    )
})
app.listen(3001)