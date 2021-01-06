window.onload = () => {
    let summary = []
    let articlesWrapper = document.querySelector('.articles-wrapper')

    const getSummary = async() => {
        await fetch('../files-summary.json')
        .then(response => response.json())
        .then(data => summary.push(data))
    }

    const renderSummary = async() => {
    await getSummary()

    summary[0].forEach(article => {
        let element = document.createElement('article')
        element.classList.add('article-wrapper')

        let title = document.createElement('h2')
        title.innerHTML = article.title
        title.classList.add('article-title')

        let excerpt = document.createElement('p')
        excerpt.innerHTML = article.excerpt
        excerpt.classList.add('article-excerpt')

        let link = document.createElement('a')
        link.setAttribute('href', `./content/${article.filename}`)
        link.innerHTML = 'Leer más'

        element.appendChild(title)
        element.appendChild(excerpt)
        element.appendChild(link)
        articlesWrapper.appendChild(element)
    })
    }

    renderSummary()
}