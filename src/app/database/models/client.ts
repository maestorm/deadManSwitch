// models/client.js
import mongoose from 'mongoose';

const { Schema } = mongoose;

const clientSchema = new Schema({
    _id: String,
    name: String,
    email: String
});

const Client = mongoose.models || mongoose.model('Client', clientSchema);

export const createRecord = async (id, name, email) => {
    try {
        const newClient = new Client.create({
            _id: id,
            name,
            email
        });
        const savedClient = await newClient.save();
        console.log('Client stored successfully.', savedClient);
    } catch(err) {
        console.log('Record was not stored.');
    }
};

export default Client;