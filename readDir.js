const fs = require('fs');
// fs.readdir("E:/MEAN_Stack/TypeScript/6762052",function(err,results){
// console.log(results);
// var abc = fs.statSync("E:/MEAN_Stack/TypeScript/6762070/WebHD_480.mp4");
// console.log(abc.mtime.getTime());
// });

var dir = "E:/MEAN_Stack/Videos/Python/"; // your directory
var constVar = '/WebHD_480.mp4';
var files = fs.readdirSync(dir);
files.sort(function(a, b) {
               return fs.statSync(dir + a + constVar).mtime.getTime() - 
                      fs.statSync(dir + b + constVar).mtime.getTime();
           });
console.log(files[0]);
for(var i = 0,j=1000;i<files.length ;i++,j++){
    
    fs.createReadStream(dir + files[i] + constVar).pipe(fs.createWriteStream('E:/MEAN_Stack/Videos/PythonVideos/WebHD_'+j+".mp4"));
}
