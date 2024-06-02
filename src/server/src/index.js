import express from 'express';
import dotenv from 'dotenv';
import { MongoClient, ServerApiVersion } from 'mongodb';

dotenv.config();
const app = express();

const PORT = process.env.PORT;
const URI = process.env.MONGO;
console.log(URI);
const CLIENT = new MongoClient(URI, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    },
});

const run = async () => {
    try {
        await CLIENT.connect();
        app.listen(process.env.PORT);
        await CLIENT.db('admin').command({ ping: 1 });
        console.log(
            'Pinged your deployment. You successfully connected to MongoDB!'
        );
    } catch (error) {
        console.error(error);
    } finally {
        await CLIENT.close();
    }
};

run().catch(console.dir);
