const API = 'https://api.giphy.com/v1/gifs/search?'
const key = 'api_key=gugmyvC4UXWeMbPCmOdbBJxlXOOYIB2T'
const limit = '&limit='
const params = '&q='
const form = document.querySelector('form')
const count = document.querySelector('#count')
const output = document.querySelector('#output')
const input = document.querySelector('#inp')
const option = document.querySelector('option')

const searchGiphy = async () => {
    let url = API + key + limit + count.value + params + input.value
    const req = await fetch(url)
    const res = await req.json()
    renderGIphy(res.data);
    input.value = ''

}

const renderGIphy = (data) => {
    output.innerHTML = ''
    data.length > 0 ?
        data.map(el => {
            // console.log(el);
            const card = document.createElement('div')
            const title = document.createElement('h2')
            const giff = document.createElement('iframe')
            title.textContent = el.title.length > 25 ? el.title.slice(0, 25) + '...' : el.title
            title.title = el.title
            giff.src = el.embed_url

            card.append(giff, title)
            output.append(card)



        })
        : output.innerHTML = `<h1>По запросу нечего не найдено</h1>`
}


form.addEventListener('submit', (e) => {
    e.preventDefault()
    searchGiphy()
})





