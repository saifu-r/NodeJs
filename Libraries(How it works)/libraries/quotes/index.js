const fs= require('fs')

const quotes= {}

quotes.allQuotes= function allQuotes(){
    const fileContents= fs.readFileSync(`${__dirname}/quotes.txt`, 'utf8')
    const arrayOfQuotes= fileContents.split(/\r?\n/) //Regex /[\r\n]+/ matches newlines with optional carriage return.

    return arrayOfQuotes
}

module.exports= quotes