import {Request, Response, Router} from 'express';

const router: Router = Router();

router.get('/records', async (_: Request, res: Response) => {
    try {
        // do something
        const records = {};
        res.status(200).send(records);
    }
    catch (err) {
        console.log(`error fetching records: `, err);
        res.status(500).send();
    }
});

export const records = router;
