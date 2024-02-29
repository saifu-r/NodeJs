const mathLibrary= require('./math')
const quotesLibrary= require('./quotes')

const app= {}

app.config= {
    timeBetweenQuotes: 1000
}

app.printQuotes= function printQuotes(){

    const allQuotes= quotesLibrary.allQuotes()
    const numberOfQuotes= allQuotes.length
    const randomNumber= mathLibrary.getRandomNumber(1, numberOfQuotes)
    const quote= allQuotes[randomNumber-1]

    console.log(quote);
}

app.infiniteLoop= function infiniteLoop(){
    setInterval(app.printQuotes, app.config.timeBetweenQuotes)
}

app.infiniteLoop()

