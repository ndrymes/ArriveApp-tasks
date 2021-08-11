import * as express from 'express';
import constants from '../constants';
import { hobbiesController } from '../controllers';
const { ROUTES } = constants;
const router = express.Router();
router.post(`${ROUTES.PATHS.HOBBIES}`, (req, res) =>
  hobbiesController.createHobbies(req, res)
);

router.put(
  `${ROUTES.PATHS.HOBBIES}/:${ROUTES.PARAMETERS.HOBBIES}`,
  (req, res) => hobbiesController.updateHobbies(req, res)
);

router.get(
  `${ROUTES.PATHS.HOBBIES}/:${ROUTES.PARAMETERS.HOBBIES}`,
  (req, res) => hobbiesController.fetchHobbies(req, res)
);

router.delete(
  `${ROUTES.PATHS.HOBBIES}/:${ROUTES.PARAMETERS.HOBBIES}`,
  (req, res) => hobbiesController.deleteHobbies(req, res)
);

export const hobbiesRoute = router;
