var fs = require('fs');
var marked = require('marked')
var files = fs.readdirSync('./files/content/');
let newFiles = []

files.forEach(file => {
  let content = fs.readFileSync(`./files/content/${file}`, 'utf8')
  
  let fileName = file.substring(0, file.length - 3);
  let data = content.split('---')
  
  let title = data[1].split('title: ')[1]
  let excerpt = data[2].split('excerpt: ')[1]
  let postContent = data[3]

  let mdFile = marked(postContent)
  
  let HTMLBeforeContent = '<!doctype html><html lang="es"><head><meta charset="utf-8"><title>la gran mesa</title><meta name="description" content="Donde suceden muchas cosas."><meta name="author" content="Tomás Milgron"><link rel="stylesheet" href="../css/normalizer.css"><link rel="stylesheet" href="../css/styles.css"></head><body><header><nav><a href="/"><h1>la gran mesa</h1></a></nav><span class="author">Por <a href="https://twitter.com/_milgron">Tomás Milgron</a></span><section class="search-bar-wrapper"><section class="search-hook">Buscar</section><section class="search-bar disabled"><button class="close-search-bar">X</button><input class="search-bar-input" type="text" placeholder="¿Qué buscás?"><button class="search-submit-button">Buscar</button></section></section></header><section class="article-wrapper">'
  let HTMLAfterContent = '</section><footer><a href="mailto:contacto@lagranmesa.org">contacto@lagranmesa.org</a></footer><script src="../js/searchbar.js"></script></body></html>'

  let HTMLFile = HTMLBeforeContent.concat(mdFile).concat(HTMLAfterContent)

  fs.writeFileSync(`./content/${fileName}.html`, HTMLFile)

  let fileData = {
    filename: `${fileName}.html`,
    title,
    excerpt
  }

  newFiles.push(fileData)
})

let newFilesString = JSON.stringify(newFiles)
fs.writeFileSync('./files-summary.json', newFilesString)