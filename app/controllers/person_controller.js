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

export const getOne = (req, res) => {
  Person.findOne({ _id: req.query._id }).then((result) => {
    console.log(result);
    res.json(result);
  },
).catch((err) => {
  res.status(500).json({ err });
});
};

// get the group of students doing a particular project
export const getSome = (req, res) => {
  Person.find({ projects: req.query.project }).then((results) => {
    const info = results.map((result) => {
      return { name: result.name, _id: result.id, iconUrl: result.iconUrl };
    });

    res.json(info);
  },
).catch((error) => {
  res.status(500).json({ error });
});
};
