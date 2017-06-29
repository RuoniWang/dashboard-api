import mongoose from 'mongoose';
import Person from '../models/person_model';
import Project from '../models/project_model';


const Status = mongoose.model('Status', {
  _id: String,
  data_loaded: Boolean,
});

function reload(req, res) {
  if (req.query.key === 'reload') {
    loadData();
    res.json({ error: null, message: 'Reload success' });
  }
}

/**
 * Check whether data has been loaded
 */
function checkToLoadData() {
  Status.findOne({ _id: 'dashboard_status' }, (err, status) => {
    if (err) return false;
    else if (!status) {
      status = new Status();
      status._id = 'dashboard_status';
      status.data_loaded = false;

      status.save().then((result) => {
        loadData();
      }).catch((err) => {
        console.log(err);
        loadData();
      });
    } else if (!status.data_loaded) {
      loadData();
    }
    return true;
  });
}

function loadData() {
  Project.remove({}, (err) => {
    const projects = require('./projects.json');
    const savePromises = projects.map((project) => {
      const p = new Project();
      p.name = project.name;
      p.description = project.description;
      p.cover_url = project.cover_url;
      return p.save();
    });
    Promise.all(savePromises).then((values) => { loadPeople(); });
  });
}


function loadPeople() {
  Person.remove({}, (err) => {
    const people = require('./people.json');
    const savePromises = people.map((person) => {
      const p = new Person();
      p.name = person.name;
      p.iconUrl = person.iconUrl;
      p.url = person.url;
      p.message = person.message;
      p.lat_long = person.lat_long;
      p.projects = person.projects;
      return p.save();
    });
    Promise.all(savePromises).then((success) => {
      Status.update({ _id: 'dashboard_status' }, { $set: { data_loaded: true } });
    });
  });
}
export default {
  checkToLoadData,
  reload,
};
