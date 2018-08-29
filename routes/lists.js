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


router.get('/', (req,res) => {
    console.log('api/lists hit')
    List.find()
    .then(lists => {
        res.status(201).json(lists);
    })
    .catch(err => {res.addHeader("Access-Control-Allow-Origin", "*"); res.send(err)});
});

router.post('/', (req, res) => {
    List.create(req.body)
    .then((newList) => {
        res.json(newList);

    })
    .catch(err => {
        console.log('err: ' + err);
        res.send(err);
    })
});

router.get('/:listID', (req, res) => {
    List.findById(req.params.listID)
    .then(foundList => res.json(foundList))
    .catch(err => res.send(err));
});

router.get('/lists', function(req,res){
    console.log('post hit');
    res.send("lists post route");
});

router.put('/:listID', (req, res) => {
    List.findOneAndUpdate({_id: req.params.listID}, req.body, {new: true})
    .then( list => {
        res.json(list);
    })
});

router.delete('/:listID', (req, res) => {
    List.remove({_id: req.params.listID})
    .then(() => {
        res.json({message: "list deleted"});
    })
    .catch(err => {
        res.send(err);
    })
});


module.exports = router;