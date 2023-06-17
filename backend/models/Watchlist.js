const mongoose= require('mongoose');

const watchList=new mongoose.Schema({
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    coinname:{
        type: String,
        required: true,
        
    }

});
module.exports = mongoose.model('Watchlist', watchList);