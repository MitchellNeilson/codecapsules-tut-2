const express = require('express')
const router = express.Router()
const {
    getItems
} = require('../controllers/memberController')
// const { create } = require('../models/Item')

// To get all items
router.get('/', getItems)

module.exports = router