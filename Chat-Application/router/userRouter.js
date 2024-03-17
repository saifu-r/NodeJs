// external imports
const express=  require('express')
const router= express.Router()

// internal imports
const {getUser}= require('../controller/userController')
const decorateHtmlResponse= require('../middlewares/common/decorateHtmlResponse')

// login page
router.get('/', decorateHtmlResponse('User'), getUser)

module.exports= router