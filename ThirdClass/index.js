const express=require("express");

const app=express();

app.get("/",(req,res)=>{
    res.send("<h1>This is hom hello e page</h1>")
   
    
})

app.get("/about",(req,res)=>{
    res.send("<h1>This is about page</h1>")
})
app.get("/contact",(req,res)=>{
    res.send("<h1>This is contact j;jsfdkl;jsl;skdjf;j kjsfd;kghfgkhjkgdshj this is new page page</h1>")
})

app.listen(8080);