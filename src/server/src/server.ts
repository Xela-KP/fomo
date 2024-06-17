import { AddressInfo } from 'net';
import app from './app.js';
import connectDatabase from './config/database.config.js';

await connectDatabase();
const server = app.listen(app.get('port'), () => {
    try {
        if (!server.address) throw new Error('Cannot retrieve Server Address');
        const address: AddressInfo = server.address() as AddressInfo;
        console.log(`Listening on port: ${address.port}`);
    } catch (error) {
        console.log(error);
    }
});
