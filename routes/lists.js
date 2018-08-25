const express = require('express');
const router = express.Router();
const User = require('../models/user')
const List = require('../models/list')
// const { 
//     createList, 
//     createListSMS,
//     selectListSMS,
//     viewListsNamesSMS, 
//     viewListsItemsSMS, 
//     addItemSMS, 
//     removeItemSMS,
//     removeListSMS,
//     testingDB,
//     createUserSMS      
//   } = require(' ../handlers/lists');


router.get('/lists', function(req,res){
    console.log('get hit');
    res.send("lists get route");
});

router.get('/lists', function(req,res){
    console.log('post hit');
    res.send("lists post route");
});
module.exports = router;