import bodyParser from 'body-parser';
import express from 'express';
import mongoose from 'mongoose';
import { MongoClient, ServerApiVersion } from 'mongodb';
import cors from 'cors';

const mongoUser = `${process.env.MONGO_USER}:${process.env.MONGO_PWD}`;
const uri = `mongodb+srv://${mongoUser}@maritescluster.f0kk2lm.mongodb.net/?retryWrites=true&w=majority&appName=MaritesCluster`;

const app = express();
app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());
