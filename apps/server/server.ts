import { createServer } from 'http';
import app from './app';

const server = createServer(app.callback());

server.listen(4000, () => console.log('Server listening to port 3000'));
