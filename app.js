var fs = require('fs');
var marked = require('marked')
var files = fs.readdirSync('./files/content/');
let newFiles = []

files.forEach(file => {
  let content = fs.readFileSync(`./files/content/${file}`, 'utf8')
  let mdFile = marked(content)

  let fileName = file.substring(0, file.length - 3);
  fs.writeFileSync(`./content/${fileName}.html`, mdFile)

  newFiles.push(`${fileName}.html`)
})

let newFilesString = JSON.stringify(newFiles)
fs.writeFileSync('./files-summary.json', newFilesString)