const fs= require ('fs')

// const dataBuffer=fs.readFileSync
const book= {
    title:'ego is the enemy',
    author:'Ryan Holiday'
}
const bookJSon= JSON.stringify(book)
fs.writeFileSync('1-json.json', bookJSon)