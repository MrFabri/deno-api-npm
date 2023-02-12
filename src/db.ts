import mongoose from 'npm:mongoose';
import env from './config.ts';

try {
    const db = await mongoose.connect(env.MONGO_URI);
    console.log('Database is connected', db.connection.name);
} catch (error) {
    console.log(error);
}
