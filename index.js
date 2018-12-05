const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
// Connection url
const url = 'mongodb://localhost:27017';
// Database Name
const dbName = 'book';
// Connect using MongoClient
MongoClient.connect(url, {useNewUrlParser:true}, function(err, client) {
  // Create a collection we want to drop later
  const collection = client.db(dbName).collection('book');
  // 1、添加
  // collection.insertOne({title:'生命之花'})
  // collection.insertMany([{title:'再见理想'},{title:'飞船'}])
  // collection.insert([{title:'光辉岁月'},{title:'hello'}])
  // collection.save({title:'21'})
  // 2、修改
  // collection.updateMany({},{ $set: {artist:'adele'} });
  // collection.updateMany({title:'生命之花'}, { $set:{artist:'Beyond123'}})
  // 3、删除
  // collection.deleteOne({artist:'Beyond123'});
  // collection.remove({artist:'adele'},true)
  // collection.deleteMany({artist:'adele'})
  // collection.remove({})
  // 4、查询修改删除
  // collection.findAndModify({
  //   query: {age: {$gte: 25}}, 
  //   sort: {age: -1}, 
  //   update: {$set: {name: 'a2'}, $inc: {age: 2}},
  //   remove: true
  // });
  // collection.runCommand({ findandmodify : "users", 
  //     query: {age: {$gte: 25}}, 
  //     sort: {age: -1}, 
  //     update: {$set: {name: 'a2'}, $inc: {age: 2}},
  //     remove: true
  // });
  // 网址：https://blog.csdn.net/znysys520/article/details/81937284
  collection.find({}).toArray(function(err, docs) {
    assert.equal(err, null);
    console.log("Found the following records");
    console.log(docs)
  });
  client.close();
});