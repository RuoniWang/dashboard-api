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

// add the details of a particular project
export const getOne = (req, res) => {
  Project.findOne({ name: req.body._id }).then((result) => {
    res.json(result);
  }).catch((error) => {
    res.status(500).json({ error });
  });
};

export const getAll = (req, res) => {
  Project.find().then((result) => {
    res.json(result);
  }).catch((error) => {
    res.status(500).json({ error });
  });
};
