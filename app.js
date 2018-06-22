var express = require("express");
var app = express();

app.set("view engine", "ejs");

app.get("/", function(req,res){
    res.render('landing');
});

app.get("/campgrounds", function(req,res){
    var campgrounds = [
        {name: "Salmon Creek", image: "https://pixabay.com/get/e83db40e28fd033ed1584d05fb1d4e97e07ee3d21cac104497f9c470a0e9bcb8_340.jpg"},
        {name: "Granite Hill", image: "https://pixabay.com/get/e83db50a21f4073ed1584d05fb1d4e97e07ee3d21cac104497f9c470a0e9bcb8_340.jpg"},
        {name: "Mountain Goat's Rest", image: "https://farm2.staticflickr.com/1424/1430198323_c26451b047.jpg"}
    ]

    res.render('campgrounds');
});

app.listen(process.env.PORT || 3000, process.env.IP, function(){
console.log("yelpcamp server started");
} ) ;