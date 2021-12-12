import 'dotenv/config';
import 'reflect-metadata';
import express from 'express';
import '../../containers';
import { routes } from '../http/routes';

const app = express();

app.use(express.json());

app.use(routes());

export { app };
