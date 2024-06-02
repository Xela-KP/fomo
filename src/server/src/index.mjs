import bodyParser from 'body-parser';
import express from 'express';
import mongoose from 'mongoose';
import { MongoClient, ServerApiVersion } from 'mongodb';
import cors from 'cors';

const app = express();
app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());

const PORT = process.env.PORT;
const URI = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PWD}@maritescluster.f0kk2lm.mongodb.net/?retryWrites=true&w=majority&appName=MaritesCluster`;
const CLIENT = new MongoClient(URI, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    },
});

async function run() {
    try {
        await CLIENT.connect();
        await CLIENT.db('admin').command({ ping: 1 });
        console.log(
            'Pinged your deployment. You successfully connected to MongoDB!'
        );
    } finally {
        await CLIENT.close();
    }
}

run().catch(console.dir);
