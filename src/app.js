const mongodb = require ('mongodb')
const mongoClient = mongodb.MongoClient
const connectionUrl =  'mongodb://127.0.0.1:27017'
const dbname = "Task1-db"

mongoClient.connect(connectionUrl , (error,res)=>{
    if(error){
        return console.log('error has occured')
    }
    console.log('All perfect')

    const db = res.db(dbname)

    //////////////////////////////////////////////////
  db.collection('users').insertOne({
        name : 'Mohamed',
        age : 30
    },(error, data) =>{
        if(error){
            console.log('unable to insert Data')
        }
        console.log(data.insertedId)
    }) 

    db.collection('users').insertOne({
        name : 'Ali',
        age : 25
    },(error, data) =>{
        if(error){
            console.log('unable to insert Data')
        }
        console.log(data.insertedId)
    })  

///////////////////////////////////////////////////////////////////////
   db.collection('users').insertMany(
    [
    {
        name: 'ola',
        age: 27
    },
    {
        name:'Adel',
        age: 30
    },
    {
        name: 'Ahmed',
        age:  27
    },
    {
        name: 'Reem',
        age: 35
    },
    {
        name: 'Aya',
        age: 27
    },
    {
        name: 'tasnem',
        age: 40
    },
    {
        name: 'salem',
        age: 27
    },
    {
        name: 'Alia',
        age: 25
    },
    {
        name: 'Mostafa',
        age: 20
    },
    {
        name: 'haneen',
        age: 27
    }
   ]   , (error,data)=> {
    if(error){
        console.log('unable to insert data ')
    }
    console.log(data.insertedCount)
   }
)   
///////////////////////////////////////////////////////////////

   db.collection('users').find({age:27}).toArray((error , users)=>{
    if(error){
        return console.log('error has occured')
    }
    console.log(users)
 })  

   db.collection('users').find({age:27}).limit(3).toArray((error , users)=>{
    if(error){
        return console.log('error has occured')
    }
    console.log(users)
 })  
//////////////////////////////////////////////////////////////////////
 db.collection("users").updateOne({_id:mongodb.ObjectId("6601f288363b6ef5fae38247")},{     
    $set:{name : "Amin"},
 }).then((data1)=> console.log(data1.modifiedCount))
   .catch((error)=> {console.log(error)}) 


  db.collection("users").updateOne({_id:mongodb.ObjectId("6601f288363b6ef5fae38248")},{     
    $set:{name : "salah"},
 }).then((data1)=> console.log(data1.modifiedCount))
   .catch((error)=> {console.log(error)})  


  db.collection("users").updateOne({_id:mongodb.ObjectId("6601f288363b6ef5fae38249")},{     
    $set:{name : "Amina"},
 }).then((data1)=> console.log(data1.modifiedCount))
   .catch((error)=> {console.log(error)}) 


 db.collection("users").updateOne({_id:mongodb.ObjectId("6601f288363b6ef5fae3824a")},{     
    $set:{name : "islam"},
 }).then((data1)=> console.log(data1.modifiedCount))
   .catch((error)=> {console.log(error)}) 

/////////////////////////////////////////////////////////////////////////
db.collection("users").find({ age: 27 }).limit(4).toArray()
   .then(users => {
       const userIdsToUpdate = users.map(user => user._id);

db.collection("users").updateMany(
         { _id: { $in: userIdsToUpdate } },
         { $inc: { age: 4 } }
 )
 .then((data1)=> {console.log(data1.modifiedCount)})
 .catch(()=> console.log(error))
})  

///////////////////////////////////////////////////////////////////
 db.collection("users").updateMany({},{
    $inc : {age :10}
 })
 .then((data1)=> {console.log(data1.modifiedCount)})
 .catch(()=> console.log(error)) 
//////////////////////////////////////////////////////
 db.collection("users").updateOne({_id:mongodb.ObjectId("6601f288363b6ef5fae3824e")},{     
    $inc : {age :5},
 }).then((data1)=> console.log(data1.modifiedCount))
   .catch((error)=> {console.log(error)})
/////////////////////////////////////////////////////
  db.collection("users").deleteMany({age:41})
 .then((data1)=> {console.log(data1.deletedCount)})
 .catch(()=> console.log(error))  

})
