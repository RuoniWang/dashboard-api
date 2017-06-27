import Person from '../models/person_model';

// add a member
export const addMember = (req, res) => {
  const p = new Person();
  p.name = req.body.name;
  p.iconUrl = req.body.iconUrl;
  p.url = req.body.url;
  p.message = req.body.message;
  p.lat_long = req.body.lat_long;
  p.projects = req.body.projects;
  p.save().then((result) => {
    res.json({ message: 'Member added!' });
  })
   .catch((error) => {
     res.status(500).json({ error });
   });
};

// get all students info
export const getAll = (req, res) => {
  Person.find().then((result) => {
    res.json(result);
  });
};

// get the group of students doing a particular project
export const getSome = (req, res) => {
  Person.find({ project: req.body.projects }).then((result) => {
    res.json(result);
  },
).catch((error) => {
  res.status(500).json({ error });
});
};
