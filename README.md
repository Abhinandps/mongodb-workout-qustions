

# Complete MongoDB Study Material

    #SQL                    #MongoDB

    Database                Database
    Tables                  Collections
    Rows                    Documents
    Fields                  Columns

# COMMANDS
    

# DATABASE
    show all databases -> show dbs
    create database -> use db_name
    current database -> db
    delete a database -> db.dropDatabase()

# COLLECTIONS
    create collections -> db.createCollection('collection_name')

    show all collections -> show collections
    drop collection -> db.collection_name.drop()

# DOCUMENTS

    FIND document -> db.collection_name.find()
    FINDONE document -> db.collection_name.findOne()

    Projection
    Both find methods accept a second parameter called projection.

    This parameter is an object that describes which fields to include in the results.


    ' Notice that the _id field is also included. This field is always included unless specifically excluded. '

    ' We use a 1 to include a field and 0 to exclude a field. '

    INSERT Document -> db.collection_name.insertOne({})

    DISPLAY the document - > db.collection_name.find().pretty()

    INSERT MULTIPLE Documents -> db.collection_name.insertMany([{},{},{}])

    UPDATE document -> db.collection_name.update({select_key:value},{$set:{select_key:updated_value}})

    DELETE document -> db.collection_name.remove({select_key : value})

# QUERY DOCUMENT

    FIND one Document -> db.collection_name.find({select_key:value}).pretty()

    LIMITED Method -> db.collection_name.find().limit(2).skip(3).pretty()

# QUERY OPERATORS

    1. $eq -> db.collection_name.find({
        select_key : { $eq : value }
    })

    2. $gt -> db.collection_name.find({
        select_key : { $gt : value }
    })

    3. $gte -> db.collection_name.find({
        select_key : { $gte : value }
    })

    4. $lt -> db.collection_name.find({
        select_key : { $lt : value }
    })


    5. $lte -> db.collection_name.find({
        select_key : { $lte : value }
    })



    6. $in -> db.collection_name.find({
        select_key : { $in : [value1, value2,...] }
    })


    7. $ne -> db.collection_name.find({
        select_key : { $ne : value }
    })

# Unary Operators

    1. $type -> db.collection_name.aggregate([
        {$project:{
            select_key:1,
            select_key_2:{$type : "$key_name"}
        }}
    ])





# LOGICAL OPERATORS

    1. $and -> db.collection_name.find({$and: [
        {select_key: {$eq:value}},
        {select_key: {$eq:value}}
        ] })

    2. $or -> db.collection_name.find(
        {$or:[
            {select_key: {$eq:value}},
            {select_key: {$eq:value}}
        ]}
    )

    3. $nin(not in) -> db.collection_name.find(
        {select_key : {$nin:[
            value1,value2
        ]}
    })

# EVALUATION

    1. $regex -> db.collection.find({name: {$regex: "JS"}});

    2. $text -> db.collection.find({$text: {$search: "apple"}});


    3. $where -> db.collection.find({$where: "this.age > 18 && this.gender === 'male'"});

# Update Field Operator

    1. $inc -> db.collection.updateMany({},{$inc : {select_key:value}})

    2. $rename ->db.collection.updateMany({},{$rename:{"oldFieldName": "newFieldName" }})

    3. $set -> db.collection.updateMany({},{$set:{"newFieldName": value}})

    4. $unset -> db.collection.updateMany({},{$unset: {"oldName":""}})

    5. $currentDate

# Update Arrays

    1. $addToSet -> db.collection.updateMany({},{$addToSet:{select_key : value }})

    2. $pop -> db.collection.updateMany({},{$pop:{select_key:1}})

    @Note, 
        Delete From Front (select_Key:-1)
        Delete From End (select_Key:1)

    3. $pull -> db.collection.updateMany({},{$pull:{select_key:value}})

    4. $push -> db.collection.updateMany({},{$push:{select_key:value}})


# Aggregation Pipelines

    @Note, 

    Aggregation Pipelines Aggregation operations allow you to group, sort, perform calculations, analyze data, and much more.

    MongoDB provides three ways to perform aggregation

    Aggregation pipeline
    Map-reduce function
    Single-purpose aggregation

    I .Aggregation pipeline
    `
        The aggregation pipeline consists of stages and each stage transforms the document. Or in other words, the aggregation pipeline is a multi-stage pipeline, so in each state, the documents taken as input and produce the resultant set of documents now in the next stage(id available) the resultant documents taken as input and produce output, this process is going on till the last stage.
    `

# object to refer
$   {
        _id: ObjectId("643fba5bbffe248777285f21"),
        index: 9,
        name: 'Tina Barnett',
        isActive: true,
        registered: ISODate("2015-03-09T11:16:38.000Z"),
        age: 39,
        gender: 'female',
        eyeColor: 'blue',
        favoriteFruit: 'apple',
        company: {
        title: 'JETSILK',
        email: 'tinabarnett@jetsilk.com',
        phone: '+1 (963) 569-3905',
        location: { country: 'Germany', address: '514 Lefferts Avenue' }
        },
        tags: [ 'veniam', 'proident' ]
    } $


* Stages: Each stage starts from stage operators which are:

   # $match:-> 
   
   db.collection.aggregate([
        {$match: { select_key : {$size : 3 } } }
    ])

   # $project: -> 

    db.persons.aggregate([
... {$project:{
... _id:0,
...     index:1,
...     name:1,
...     info:{
...         eyes:"$eyeColor",
...         company:"$company.title",
...         coutry:"$company.location.country" }  
...     }}
... ])

   # $group: ->
    db.collection.aggregate([
        { $group : {_id: " $select_key " } }
    ])



# Nested field Group

    db.collection.aggregate([
        { $group: { _id:"$select_key.nested_key.nested_ladder" } }
    ])



# Multiple Field Group

    db.collection.aggregate([
        { $group : { _id: { select_key1:"$select_key1" },
        { select_key2:"$select_key2" },
        { select_key3:"$select_key3" }
         } }
    ])


# $match and $group

    db.collection.aggregate([

        { $match : {select_key:value} },
        { $group : _id: { select_key:"$select_key" }}
        
    ])


# $group and $match (pipeline)

    db.collection.aggregate([

        { $group : _id: { select_key:"$select_key" }},
        { $match : {"_id.select_key":value} }

    ])


 # $count
    
    db.collection.aggregate([
        { $count : "allDocumentsCount" }
    ])

    `$Different documents count method
    > toArray().length (client side)
    > itCount() (client side)
    > $count:"" (server side)`

# $match and $group and $count

    db.persons.aggregate([
... {$match: {age: {$gte:25}}},
... {$group: {_id: {eyeColor:"$eyeColor", age:"$age"}}},
... {$count: "eyeColorAndAge"}
... ])



#  $sort

    db.persons.aggregate([
... {$match : {eyeColor : {$ne:"blue"}}},
... {$group : {_id:{ eyeColor:"$eyeColor" ,             favoriteFruit:'$favoroteFruit' }}},
... {$sort : {"_id.eyeColor":1, "_id.favoriteFruit" : -1}}
... ])


    $skip: It is used to skip n number of documents and passes the remaining documents



#  $limit: 

   db.persons.aggregate([
    ... {$limit:100},
    ... {$match : {eyeColor : {$ne:"blue"}}},
    ... {$group : {_id:{ eyeColor:"$eyeColor" ,             favoriteFruit:'$favoroteFruit' }}}
    ... ])

#   $unwind:

     db.persons.aggregate([
... {$unwind : "$tags"},
... {$project: {name:1,index:1,tags:1}}
... ])

#   $unwind and Group

     db.persons.aggregate([
... {$unwind : "$tags"},
... {$group: {_id:"$tags"}}
... ])



# $out: 

    db.persons.aggregate([
... {$project:{
... name:1,
... tags:{$type :"$tags"},
... index:{$type :"$index"}
... }},
... {$out:"OutColl"}
... ])





    * Expressions: It refers to the name of the field in input documents for e.g. { $group : { _id : “$id“, total:{$sum:”$fare“}}} here $id and $fare are expressions.

#  Accumulators:
    - These are basically used in the group stage

#  sum

    db.persons.aggregate([
... {$group: {_id:"$age", count: {$sum:1}} },
... ])


# $sum , $unwind and $group

    db.persons.aggregate([
... {$unwind:"$tags"},
... {$group: {_id:"$tags", count: {$sum:1}}}
... ])

        count: It counts total numbers of documents
        
# avg


    db.persons.aggregate([
... { $group : {_id:"$company.location.country", avgAge: {$avg : "$age"}}}
... ])

        output
        ------
        [
        { _id: 'Italy', avgAge: 33.25 },
        { _id: 'Germany', avgAge: 39 },
        { _id: 'USA', avgAge: 29.5 },
        { _id: 'France', avgAge: 26 }
        ]

        min: It gets the minimum value from all the documents

        max: It gets the maximum value from all the documents

        first: It gets the first document from the grouping

        last: It gets the last document from the grouping


# allowDiskUse:true

    db.collection.aggregate([],{allowDiskUse:true})









    


   



