const express= require("express");
const app= express();
const users= require("./routes/user.js");
const posts= require("./routes/post.js");
const session= require("express-session");
const flash= require("connect-flash");
const path= require("path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
// const cookieParser= require("cookie-parser");
app.listen(3000, ()=>{
    console.log("server is listening to 3000");
})
const sessionOption= {
    secret :"mysupersecretstring",
    resave : false,
    saveUninitialized:true,
};
app.use(session(sessionOption));
app.use(flash());
app.use((req, res, next)=>{
    res.locals.successMsg=req.flash("success");
    res.locals.errorMsg=req.flash("error");
    next();
})
app.get("/register", (req, res)=>{
    let {name= "anonymous"}= req.query;
    //console.log(req.session);
    req.session.name=name;
   // console.log(req.session.name);
    //res.send(name);
    if(name==="anonymous")
    {
        req.flash("error", "user not registered");
    }
    else{
    req.flash("success", "user registered successfully");
    }
    res.redirect("/hello");
        
    });

app.get("/hello", (req, res)=>{
    //res.send("hello");
    //res.send(`hello, ${req.session.name}`);
   // console.log(req.flash("success"));
//    res.locals.successMsg=req.flash("success");
//    res.locals.errorMsg= req.flash("error");
    res.render("page.ejs", { name: req.session.name});

});

// app.use(session ({secret:"mysupersecretstring",
//     resave: false,
//     saveUninitialized:true
// }));
// app.get("/reqcount", (req, res)=>{
//     //res.send(`you sent a request x times`);
//     //req.session.count=1;
//     if(req.session.count){
//         req.session.count++;

//     }
//     else
//     {
//     req.session.count=1;
//     }
//     res.send(`you sent a request ${req.session.count} times`);
// })


// app.use(session({secret: "mysupersecretkey"}));
// app.get("/test", (req, res)=>{
//     res.send("test successful");
// })


//app.use(cookieParser());
// app.use(cookieParser("secretcode"));

// app.get("/", (req, res)=>{
//     console.dir(req.cookies);
//     res.send("hi i am root !");
// })
// app.get("/getsignedcookie", (req, res)=>{
//     res.cookie("color", "red", {signed: true});
//     res.send("signed cookie sent");
// })
// app.get("/verify", (req, res)=>{
//     console.log(req.cookies);
//     console.log(req.signedCookies);
//     res.send("verified");
// })
// app.get("/greet", (req, res)=>{
//     let {name="anonymous"}= req.cookies;
//     res.send(`hi, ${name}`);
// })

// app.get("/getcookies", (req, res)=>{
//     res.cookie("greet", "namastey");
//     res.cookie("madein", "india");
//     res.send("sent you some cookies");
// })
// app.use("/users", users);
// app.use("/posts", posts);
