const express = require("express")
const app =express();

app.use(express.json());
app.get('/health-checkup', function(req,res){

    const kidneyId = req.query.kidneyId;
    const username = req.headers.username
    const password = req.headers.password
    if(username!="prikshit" || password!="pass"
    ){
      return res.status(400).json({
          "msg" :"Something wrong with the inputs"
      })
    }

  if(kidneyId!=1 && kidneyId!=2){
    return res.status(400).json({

        "msg" :"something wrong with kidneys"
    })
  }
  res.json({
    "msg":"your kidney is fine"
})

})

app.listen(3001)