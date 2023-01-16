import mongoose from 'npm:mongoose@^6.7';
import env from './config.ts';

try {
    const db = await mongoose.connect(env.MONGO_URI);
    console.log('Database is connected', db.connection.name);
} catch (error) {
    console.log(error);
}