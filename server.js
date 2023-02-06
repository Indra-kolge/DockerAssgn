var exp=require("express");
var bp = require("body-parser");

var app= exp();
app.use(bp.urlencoded({extended: false}));

// login route
app.get('/login',function(req,res){
	res.sendFile(__dirname+'/login.html')	
})

//post route for /logincheck
app.post('/logincheck',function(req,res){
	console.log("name is: "+req.body.labeluid);
	console.log("pass is: "+req.body.pass);
	if((req.body.labeluid=='object') && (req.body.pass=='knowit')){
		res.send("success");
	}
	else
		res.send("failed");

})

//default route
app.all('*',function(req,res){
	res.send("<h1>Welcome to web app</h1>")	
});

//start server at 9000
app.listen(9000,function(){
	console.log("started");
});
