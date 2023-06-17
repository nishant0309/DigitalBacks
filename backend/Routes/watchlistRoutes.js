const express = require('express');
const router = express.Router();
const WatchListItem= require('../models/Watchlist');
const authMiddleWare = require('./CreateUser');

router.post('/add', authMiddleWare, async (req,res)=>{
    try{
        const {coinname}=req.body;
        const{userId}=req.user;

        const existingcoin = await WatchListItem.findOne({userId,productId});

        if(existingcoin) {
            return res.status(400).json({ message: 'coin already in watchlist' });
        }

        const watchlistitem= new WatchListItem({userId,coinname});
        await watchlistitem.save();

        res.status(200).json({ message: 'coin added to watchlist' });


    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
      }
});

router.delete('/remove/:coinname', authMiddleWare, async(req,res)=>{
    try{
    const {coinname} =req.params;
    const {userId} = req.user;

    await WatchListItem.deleteOne({userId,coinname});
    res.status(200).json({ message: 'coin removed from watchlist' });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
      }

});

module.exports=router;