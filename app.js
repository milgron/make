var fs = require('fs');
require('dotenv').config()
var marked = require('marked')
var files = fs.readdirSync('./content/');
let newFiles = []
let blogName = process.env.BLOGNAME
let blogAuthor = process.env.AUTHOR
let blogContact = process.env.CONTACT
let blogDescription = process.env.DESCRIPTION
let darkMode = process.env.DARKMODE
let twitterUsername = process.env.TWITTER
let HTMLauthorTwitter = `<span class="author">Por <a href="https://twitter.com/${twitterUsername}" target="_blank">${blogAuthor}</a></span>`
let HTMLauthorWithoutTwitter = `<span class="author">Por ${blogAuthor}</span>`

files.forEach(file => {
  let content = fs.readFileSync(`./content/${file}`, 'utf8')
  
  let fileName = file.substring(0, file.length - 3);
  let data = content.split('---')
  
  let title = data[1].split('title: ')[1]
  let excerpt = data[2].split('excerpt: ')[1]
  let postContent = data[3]

  let mdFile = marked(postContent)
  
  let HTMLBeforeContent = `<!doctype html><html lang="es"><head><meta charset="utf-8"><title>${blogName} - ${title}</title><meta name="description" content="${blogDescription}"><meta name="author" content="${blogAuthor}"><link rel="stylesheet" href="./css/normalizer.css"><link rel="stylesheet" href="./css/styles.css"></head><body class="${darkMode == 'true' ? 'dark-mode' : ''}"><header><nav><a href="../"><h1>${blogName}</h1></a></nav>${twitterUsername != '' ? HTMLauthorTwitter : HTMLauthorWithoutTwitter}</header><section class="article-wrapper"><h1 class="post-title">${title}</h1><hr><article class="article-content">`
  let HTMLAfterContent = `</article></section><footer><a href="mailto:${blogContact}">${blogContact}</a></footer></body></html>`

  let HTMLFile = HTMLBeforeContent.concat(mdFile).concat(HTMLAfterContent)

  fs.writeFileSync(`./dist/${fileName}.html`, HTMLFile)

  let fileData = {
    filename: `${fileName}.html`,
    title,
    excerpt
  }

  newFiles.push(fileData)
})

let IndexHTML = `<!doctype html>

<!doctype html><html lang="es"><head><meta charset="utf-8"><title>${blogName}</title><meta name="description" content="${blogDescription}"><meta name="author" content="${blogAuthor}"><link rel="stylesheet" href="./css/normalizer.css"><link rel="stylesheet" href="./css/styles.css"></head>

<body class="${darkMode == 'true' ? 'dark-mode' : ''}">
<header><nav><h1>${blogName}</h1></nav>${twitterUsername != '' ? HTMLauthorTwitter : HTMLauthorWithoutTwitter}</header>
  <section class="articles-wrapper">
    <!-- Articles here -->
  </section>
  <footer><a href="mailto:${blogContact}">${blogContact}</a></footer>
  <script src="js/scripts.js"></script>
</body>
</html>`



let newFilesString = JSON.stringify(newFiles)
fs.writeFileSync('./dist/index.html', IndexHTML)
fs.writeFileSync('./dist/files-summary.json', newFilesString)