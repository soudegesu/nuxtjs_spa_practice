import * as Express from 'express';

const router = Express.Router();

// Mock Users
const users = [
  { name: 'Alexandre' },
  { name: 'Pooya' },
  { name: 'Sébastien' }
];

/* GET users listing. */
router.get('/users', (req, res, next) => {
  res.json(users)
});

/* GET user by ID. */
router.get('/users/:id', (req, res, next) => {
  const id = parseInt(req.params.id)
  if (id >= 0 && id < users.length) {
    res.json(users[id])
  } else {
    res.sendStatus(404)
  }
});

export default router;