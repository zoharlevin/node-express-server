import config from './environment/config';
import express from 'express';
import {routes} from './routes';

const app = express()
    .use('/api', routes)
    .use(express.static('./dist'));

app.listen(config.port, () => console.log(`Listening on port ${config.port}!`));

