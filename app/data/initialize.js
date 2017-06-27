import Person from '../models/person_model';
import Project from '../models/project_model';

Const loadProject = () => {
  const projects = require('./projects.json');
  const savePromises = projects.map((project) => {
    const p = new Project();
    p.name = project.name;
    p.description = project.description;
    p.cover_url = project.cover_url;
    return p.save();
  });
  return Promise.all(savePromises);
};

Const loadPeople = () => {
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
  return Promise.all(savePromises);
};

export const checkData = ()=>{
  
}
