import mongoose from 'mongoose'

export let entrySchema = new mongoose.Schema({
    user: String,
    state: String,
    time: { type: Date, default: Date.now }
});

export let Entry = mongoose.model('entry', entrySchema);
