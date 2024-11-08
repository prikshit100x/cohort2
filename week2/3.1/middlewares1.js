const express = require('express');
const app =express();

function userMiddleware(req,res,next){
    const username = req.headers.username
    const password = req.headers.password
    if(username!="prikshit" || password!="pass"
    ){
      return res.status(400).json({
          "msg" :"Something wrong with the inputs"
      })
    }
    else{
        next();
    }
}

function kidneyMiddleware(req,res,next){
    const kidneyId = req.query.kidneyId;
    if(kidneyId!=1 && kidneyId!=2
    ){
      return res.status(400).json({
          "msg" :"Something wrong with the kidney inputs"
      })
    }
    else{
        next();
    }
}

app.get('/health-checkup',userMiddleware,kidneyMiddleware,function(req,res){
     return res.send("your heart is fine")
})

app.get('/kidney-checkup',userMiddleware,kidneyMiddleware,function(req,res){
    return res.send("your kidney is fine")
})


app.listen(3000)


