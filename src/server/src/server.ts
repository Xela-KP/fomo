import { Server } from 'http';
import app from './app';
import connectDatabase from 'config/database';

await connectDatabase();
const server: Server = app.listen(app.get('port'), () => {
    try {
        if (!server.address) throw new Error('Cannot retrieve Server Address');
        const address = server.address();
        console.log(`Listening on port: ${address}`);
    } catch (error) {
        console.log(error);
    }
});
