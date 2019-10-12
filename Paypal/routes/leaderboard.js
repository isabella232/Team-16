const express = require("express");
const router = express.Router();
const leaderBoardServices = require("../models/user");


router.get("/allfriends/", function(req, res){
    const {id} = req.body;
    leaderBoardServices.getUsers(id, function(err, data){
        if(err){
            res.status(400).send(err);
        }else{
            res.status(200).send(data);
        }
    });

});
router.get("/points/", function(req, res){
    const{id} = req.body;
    leaderBoardServices.getPoints(id, function(err, data){
        if(err){
            res.status(400).send(err);
        }else{
            res.status(200).send(data);
        }
    })
});
router.put("/addFriend/", function(req, res){
    const {id, friendId} = req.body;
    leaderBoardServices.addFriend(id, friendId, function(err){
        if(err){
            res.status(400).send("Friend not addded");
        }else{
            res.status(200).send("Added Friend");
        }
        
    })
})

module.exports = router;
