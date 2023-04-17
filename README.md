

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
    INSERT Document -> db.collection_name.insert()

    DISPLAY the document - > db.collection_name.find().pretty()

    INSERT MULTIPLE Documents -> db.collection_name.insert([{},{},{}])

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


    












    


   



