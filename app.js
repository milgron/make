var fs = require('fs');
var files = fs.readdirSync('./files/content/');

files.forEach(file => {
  fs.readFile(`./files/content/${file}`, 'utf8', (err,data) => {
    if (err) throw err
    console.log(data)
  })
})