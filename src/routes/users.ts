import * as express from 'express';
import constants from '../constants';
import { usersController } from '../controllers';
const { ROUTES } = constants;
const router = express.Router();
router.post(`${ROUTES.PATHS.USERS}`, (req, res) =>
  usersController.createUsers(req, res)
);

router.put(`${ROUTES.PATHS.USERS}/:${ROUTES.PARAMETERS.USER}`, (req, res) =>
  usersController.updateUsers(req, res)
);

router.put(`${ROUTES.PATHS.USERS}${ROUTES.PATHS.HOBBIES}/:${ROUTES.PARAMETERS.USER}`, (req, res) =>
  usersController.updateHobbies(req, res)
);

router.get(`${ROUTES.PATHS.USERS}/:${ROUTES.PARAMETERS.USER}`, (req, res) =>
  usersController.fetchUsers(req, res)
);

router.delete(`${ROUTES.PATHS.USERS}/:${ROUTES.PARAMETERS.USER}`, (req, res) =>
  usersController.deleteUsers(req, res)
);
export const usersRoute = router;
