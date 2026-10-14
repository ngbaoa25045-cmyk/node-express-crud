const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://ngbaoa25045_db_user:Ks0i5wnvMyAjt0ZZ@cluster0.kufyhy7.mongodb.net/users_db?retryWrites=true&w=majority&appName=Cluster0');
        console.log('Kết nối MongoDB Atlas (Cloud) thành công!');
    } catch (err) {
        console.error('Lỗi kết nối MongoDB Atlas:', err);
        process.exit(1);
    }
};

module.exports = connectDB;