import { Router } from 'express';
import * as Projects from './controllers/project_controller';
import * as People from './controllers/person_controller';


const router = Router();

router.get('/', (req, res) => {
  console.log(req.body);
  res.json({ message: 'welcome to the dashboard api!' });
});

// get all projects
router.route('/projects').get(Projects.getAll);
// get one project
router.route('/project/:id').get(Projects.getOne);
// add one project
router.route('/addproject').post(Projects.createProject);

// get all members
router.route('/members').get(People.getAll);
// get some group of members
router.route('/project_member').get(People.getSome);
// add one member
router.route('/add_member', Projects.addMember);

export default router;
