    
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

    


   



