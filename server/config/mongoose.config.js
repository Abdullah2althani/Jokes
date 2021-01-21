const mongoose = require('mongoose');

const db_name = "mongoose_jokes"
mongoose
.connect(`mongodb://localhost/${db_name}`,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

.then(()=> {console.log(`DB is connected to ${db_name}`)})
.catch((error) =>{console.log(`DB not connected to ${db_name}`),error})
