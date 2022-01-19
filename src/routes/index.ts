import {Router} from 'express';
import {isAliveRouter} from './isAlive';
import {records} from './records';

const router: Router = Router();

router.use(isAliveRouter);
router.use(records);

export const routes = router;
