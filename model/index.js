// mongoose 数据库连接
const mongoose = require('mongoose');
//1. 创建schema模式(约束)对象 是对集合进行约束的
//  mongoose.Schema赋值给Schema
var Schema = mongoose.Schema

mongoose.connect('mongodb://localhost/test',{
    useUnifiedTopology:true,
    useNewUrlParser:true
});
//使用connection监听数据库的状态
mongoose.connection.once('open',function(){
    console.log('数据库连接成功')
});
mongoose.connection.once('close',function(){
    console.log('数据库已断开')
});


//学生表的格式 约束信息
var studentSchema = new Schema({
	name: String,
	age: Number
});
//定义学生操作器
// 2.通过Model次才能对数据库进行操作（增删改查
// mongoose.model(modelName, Schema); modelName就是要映射的集合名
var StudentModel = mongoose.model('students', studentSchema);

module.exports={
	StudentModel
}

