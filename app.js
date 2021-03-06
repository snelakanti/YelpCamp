var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

app.get("/", function(req,res){
    res.render('landing');
});

var campgrounds = [
    {name: "Salmon Creek", image: "https://cdn.pixabay.com/photo/2016/11/21/15/14/camping-1845906__480.jpg"},
    {name: "Granite Hill", image: "https://farm2.staticflickr.com/1424/1430198323_c26451b047.jpg"},
    {name: "Mountain Goat's Rest", image: "https://cdn.pixabay.com/photo/2016/11/22/23/08/adventure-1851092__480.jpg"}
]

app.get("/campgrounds", function(req,res){

    res.render('campgrounds', {campgrounds: campgrounds});
});

app.get("/campgrounds/new", function(req, res){
    res.render("new.ejs");
})

app.post("/campgrounds", function(req,res){
    //get data from form and add to campgrounds array
    var name = req.body.name;
    var image = req.body.image;
    var newCampground = {name: name, image: image}
    campgrounds.push(newCampground);
    //redirect back to campgrounds page
    res.redirect("/campgrounds");
} );

app.listen(process.env.PORT || 3000, process.env.IP, function(){
console.log("yelpcamp server started");
} ) ;