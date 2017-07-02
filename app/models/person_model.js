import mongoose, { Schema } from 'mongoose';

// create a PostSchema with a title field
const PersonSchema = new Schema({
  name: String,
  iconUrl: String,
  url: String,
  message: String,
  lat_long: Array,
  terms_on: Array,
  projects: Array,
}, {
  toJSON: {
    virtuals: true,
  },
});
// create PostModel class from schema
const PersonModel = mongoose.model('Person', PersonSchema);

export default PersonModel;
