const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://mongo:27017/TaskManager', { 
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Connected to MongoDB successfully :)");
}).catch((e) => {
    console.log("Error while attempting to connect to MongoDB");
    console.log(e);
});

// Remove or comment out this line
// mongoose.set('useCreateIndex', true);

// mongoose.set('useFindAndModify', false);

module.exports = {
    mongoose
};
