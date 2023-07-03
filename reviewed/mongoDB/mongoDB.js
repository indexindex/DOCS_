// TODO: WHAT IS MONGODB?

/*
    * mongoDB is a noSQL database, it is a great database system
    * to build many types of modern, scalable and flexible web
    * applications.
*/

/*
    * Server commands for macOS Terminal:

    ? start mongoDB server
    > brew services start mongodb-community@6.0

    ? check if the server is running
    > brew services list

    ? stop mongoDB server
    > brew services stop mongodb-community@6.0

    ? start mongoDB (run in new Terminal)
    > mongosh

    ? stop mongoDB (run in "start mongoDB" Terminal)
    > quit()



    * Commands for mongoDB:

    ? show all databases
    > show dbs

    ? show all collections
    > show collections

    ? create new database (or if it exists then switch to that db)
    > use db

    ? create new document within new collection (or if collection exists then add to it)
    ? "db" points to current database
    ? ".name" will mark a collection (resource)
    ? ".insertOne({})" will add one or ".insertMany([{}, {}])" will add many new documents
    ? objects are valid with regular JS syntax, wrap strings in ""
    > db.name.insertOne({...})
    > db.name.insertMany([{...}, {...}])



    * Updating document data

    ? first parameter is the {...} data that we want to change
    ? second parameter is the {$set} operator, to set new data

    ? update document data (first match)
    > db.name.updateOne({...}, {$set:{...}})

    ? update document data (all matches)
    > db.name.updateMany({...}, {$set:{...}})



    * Replacing document data

    ? first parameter is the {...} data that we want to replace
    ? second parameter is the {$set} operator, to set new data

    ? replace document data (first match)
    > db.name.replaceOne({...}, {$set:{...}})

    ? replace document data (all matches)
    > db.name.replaceMany({...}, {$set:{...}})



    * Deleting document data

    ? delete document data (first match)
    > db.name.deleteOne({...})

    ? delete document data (all matches)
    > db.name.deleteMany({...})

    ? delete everything (pass in empty object)
    > db.name.deleteMany({})



    * Find document

    ? find all documents
    > db.name.find()

    ? find a document based on filter (returns all matched results)
    > db.name.find({...})



    * Query operators {$} (passed in objects and wrapped in object)

    ? $lt: less than
    > db.name.find({...: {$lt: 500}})

    ? $lte: less than or equal to
    > db.name.find({...: {$lte: 500}})

    ? $gt: greater than
    > db.name.find({...: {$gt: 500}})

    ? $gte: greater than or equal to
    > db.name.find({...: {$gte: 500}})

    ? OR operator (accepts an array of 2 objects)
    > db.name.find({$or [{...: {$lte: 500}}, {...: {$gte: 500}}]})
*/