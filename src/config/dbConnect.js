import mongoose from "mongoose";

mongoose.connect("mongodb+srv://nodetest:123@node-test.pt6r2.mongodb.net/alura-node");

let db = mongoose.connection;

export default db;