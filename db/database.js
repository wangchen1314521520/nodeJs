const mongoose = require("mongoose");

//连接数据库
const db_url = "mongodb://127.0.0.1/xa1901";

mongoose.connect(db_url);


module.exports = {
    mongoose
}