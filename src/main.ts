import express, { Request, Response } from 'express';

const app = express();
const port = 2000;

app.use(express.json());

app.get('/hello', (req: Request, res: Response) => {
  res.json({ message: 'Hello from TS API' });
});

app.post('/echo', (req: Request, res: Response) => {
  res.json({ youSent: req.body });
});

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});