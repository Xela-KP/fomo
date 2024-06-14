import app from './app.js';
import connectDatabase from './config/database.js';

await connectDatabase();
const server = app.listen(app.get('port'), () =>
    console.log(`Listening on port: ${server.address().port}`)
);
