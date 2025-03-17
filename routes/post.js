const express= require("express");
const router= express.Router();



//post

//route -posts
router.get("/", (req, res)=>{
    res.send("get for posts");
})
//show -posts
router.get("/:id", (req, res)=>{
    res.send("Get for show posts");
})


//post  posts (create Route)
router.post("/", (req, res)=>{
    res.send("POST for posts");
})
//DELETE
router.delete("/:id", (req, res)=>{
    res.send("Delete for user id");
})
module.exports=router;
