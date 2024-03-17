const createError= require('http-errors')// gives build-in error handler
// 404 not found Handler

function notFoundHandler(req, res, next){
    next(createError(404, "Your requested content was not found!"))
}

function errorhandler(err, req, res, next){
    //res.locals.title= 'Error page'
    // res.render('error',{ // to link with ejs file
    //     title: 'Error Page'
    // })

    res.locals.error= process.env.NODE_ENV === 'development'? err : {message: err.message}

    res.status(err.status|| 500)
    if(res.locals.html){
        res.render('error',{
            title: 'Error Page'
        })
    }else{
        res.json(res.locals.error)
    }
}

module.exports= {
    notFoundHandler,
    errorhandler
}