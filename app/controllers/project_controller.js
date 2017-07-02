import Project from '../models/project_model';

// create a project
export const createProject = (req, res) => {
  const p = new Project();
  p.name = req.body.name;
  p.description = req.body.description;
  p.team = req.body.team;
  p.cover_url = req.body.cover_url;
  p.save().then((result) => {
    res.json({ message: 'Project created!' });
  })
   .catch((error) => {
     res.status(500).json({ error });
   });
};

// get the details of a particular project
export const getOne = (req, res) => {
  Project.findOne({ _id: req.query._id }).then((result) => {
    res.json(result);
  }).catch((error) => {
    res.status(500).json({ error });
  });
};
// just return name and id
export const getAll = (req, res) => {
  Project.find().then((results) => {
    const nameAndId = results.map((result) => {
      return { name: result.name, _id: result.id };
    });
    res.json(nameAndId);
  }).catch((error) => {
    res.status(500).json({ error });
  });
};
