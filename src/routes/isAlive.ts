import {Request, Response, Router} from 'express';

const router: Router = Router();

router.get('/isAlive', (_: Request, res: Response) => {
  res.status(200).send(true);
});

export const isAliveRouter = router;
