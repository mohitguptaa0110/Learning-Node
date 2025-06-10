const { MongoClient } = require("mongodb");
const url =
  "mongodb+srv://Node:node@cluster0.e6rgux0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const client = new MongoClient(url);

const dbName = "HelloWorld";

async function main() {
  // Use connect method to connect to the server
  await client.connect();
  console.log("Connected successfully to server");
  const db = client.db(dbName);
  const collection = db.collection("User");

  const data = {
    firstName: "Akshit",
    lastName: "Bansal",
    city: "Patiala",
  };
  // Insert
  // const insertResult = await collection.insertOne(data);
  // console.log("Inserted documents =>", insertResult);

  const newdata = {
    firstName: "Akshit",
    lastName: "Bansal",
    city: "Amloh",
  };
  // Update
  // const updateResult = await collection.updateOne(data, { $set: newdata });
  // console.log("Updated documents =>", updateResult);

  //Delete
  // const deleteResult = await collection.deleteMany(data);
  // console.log("Deleted documents =>", deleteResult);

  // Read
  // const findResult = await collection.find({}).toArray();
  // console.log("Found documents =>", findResult);

  //Count documents
  const countData = await collection.countDocuments({});
  console.log("Number of documents in db are :", countData);

  return "done.";
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());
