import { Router } from 'express';
import * as Projects from './controllers/project_controller';
import * as People from './controllers/person_controller';
import dataTools from './data/initialize';

const router = Router();

router.get('/', (req, res) => {
  console.log(req.body);
  res.json({ message: 'welcome to the dashboard api!' });
});

// get all projects
router.route('/projects').get(Projects.getAll);
// get one project
router.route('/project').get(Projects.getOne);

// get all members
router.route('/members').get(People.getAll);
// get some group of members
router.route('/project_member').get(People.getSome);
router.route('/member').get(People.getOne);


router.route('/data/reload').get(dataTools.reload);

export default router;
