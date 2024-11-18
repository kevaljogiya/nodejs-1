const http = require("http");
const port =8000;

const portHandler =(req,res)=>{
    res.write("<h1>Welcome To Our Server</h1>");
    res.end();
};

const Server = http.createServer(portHandler);

Server.listen(port,(err)=>{
    err ? console.log(err): console.log("server started on port"+port);
});