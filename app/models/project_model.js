import mongoose, { Schema } from 'mongoose';

// create a PostSchema with a title field
const ProjectSchema = new Schema({
  name: String,
  description: String,
  team: Array,
  cover_url: String,
}, {
  toJSON: {
    virtuals: true,
  },
});
// create PostModel class from schema
const ProjectModel = mongoose.model('Project', ProjectSchema);

export default ProjectModel;
