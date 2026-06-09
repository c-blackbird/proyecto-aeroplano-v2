import express from 'express';
import cors from 'cors';
import { Helice } from './models/Helice';
import { TrenAterrizaje } from './models/TrenAterrizaje';
import { Alas } from './models/Alas';
import { Cubierta } from './models/Cubierta';

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.get('/api/test/helice', (req, res) => {
    const helice = new Helice(3);
    res.json({
        toString: helice.toString(),
        toJSON: helice.toJSON()
    });
});

app.get('/api/test/tren', (req, res) => {
    const tren = new TrenAterrizaje(2, 3, true);
    res.json({
        toString: tren.toString(),
        toJSON: tren.toJSON()
    });
});

app.get('/api/test/alas', (req, res) => {
    const alas = new Alas(2, 1);
    res.json({
        toString: alas.toString(),
        toJSON: alas.toJSON()
    });
});

app.get('/api/test/cubierta', (req, res) => {
    const cubierta = new Cubierta(true, true, true, 4, 4);
    res.json({
        toString: cubierta.toString(),
        toJSON: cubierta.toJSON()
    });
});

app.get('/api/aeroplanos', (req, res) => {
    res.json({ message: 'API de Aeroplanos funcionando' });
});

app.listen(PORT, () => {
    console.log(`Backend running on http://localhost:3000`);
});
