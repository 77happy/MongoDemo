var express = require('express');
const { StudentModel } = require('../model');
var router = express.Router();

var model = require('../model')
/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });
router.get('/test',function(req,res,next){
  console.log('请求携带的参数为',req.query)
  res.send(测试接口);
});

router.get('/addStudent',function(req,res,next){
  console.log('请求携带的参数为',req.query)
  let query = req.query;
  //这里接到请求后会打印 query就是你地址后携带的数据
  //req.query的结构自定义，在地址后携带
  //向数据库中插入一个文档
  // 需要两个参数 StudentModel.create({doc(s)},callback()}
  // 用来创建一个或多个文档并添加到数据库中 
  // 参数：doc(s)可以是一个文档对象，也可以是一个文档对象的数组
  // callback是当操作完成后调用的回调函数
  StudentModel.create({
    name:query.name,
    age:query.age
  },function(err){
    if(!err){
      console.log('数据库操作成功')
      res.send(`新增学生成功！姓名为${query.name}`);
    }
  })
});

router.get('/removeStudent',function(req,res,next){
  console.log('请求携带的参数为',req.query)
  let query = req.query
  StudentModel.find(query,(err,docs)=>{
    if(!err){
      console.log('数据库操作成功')
      console.log('查询',docs)
      res.send('查询成功'+docs)
    }
  })
});
router.get('/removeStudent',function(req,res,next){
  console.log('请求的参数为',req.query)
  let query = req.query
  StudentModel.remove(query,(err,docs)=>{
    if(!err){
      console.log('数据库操作成功')
      res.send('删除成功')
    }
  })
})


module.exports = router;
