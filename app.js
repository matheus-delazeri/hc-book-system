const books = require('./database')
const readline = require('readline-sync')

var f_input = readline.question("Deseja buscar um livro? S/N")

switch (f_input){
    case "S":
        var categories = Array.from(new Set(books.map(book=>book.category)))
        console.log(`Categories available: ${categories}`)
        var cat = readline.question("Type the desired category: ")
        var books_in_cat = books.filter(book => book.category === cat) 
        console.table(books_in_cat)
        break
    default:
        console.log("All books registered")
        console.table(books.sort((a,b) => a.pages - b.pages))
}