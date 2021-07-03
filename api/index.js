import express from 'express';
import data from '../src/testData.json';
const router = express.Router();

const contests = data.contests.reduce((obj, contest) => {
  obj[contest.id] = contest;
  return obj;
}, {});

router.get('/contests', (req, res) => {
  res.send({ contests: contests });
});

router.get('/contests/:contestid', (req, res) => {
  //req.params.contestid
  let contest = contests[req.params.contestid];
  contest.description = 'test data';
  res.send(contest);
});

router.get('/test', (req, res) => {
  res.send({ test: [] });
});

export default router;
