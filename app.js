const express=require('express');
const path=require('path');
const app=express();

var bodyParser = require('body-parser')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended:true
}))

app.use(express.static(__dirname+'/dist/adminApp'));

const youthRouter=require('./public/src/routers/youthRouter.js');


app.use('/addData',youthRouter);

// app.get('/*',function(req,res){
//     res.sendFile(path.join(__dirname+'/dist/myApp/index.html'));
// });

app.listen(process.env.PORT||3000, function () {  
   
     console.log("Example app listening at http://%s:%s",3000);  
});
