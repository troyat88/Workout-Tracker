const router = require("express").Router();
const path = require("path");
const Workout = require("../models/Workout")

// router.post("/api/workouts", ({ body }, res) => {
//     Workout.create(body)
//       .then(Workout => {
//         res.json(Workout);
//       })
//       .catch(err => {
//         res.status(400).json(err);
//       });
//   });

router.post('/api/workouts', (req, res) => {
    Workout.create({})
      .then((dbWorkout) => {
        res.json(dbWorkout);
      })
      .catch((err) => {
        res.json(err);
      });
  });

  router.get('/api/workouts', (req, res) => {
    Workout.find({})
      .then((dbWorkout) => {
        res.json(dbWorkout);
      })
      .catch((err) => {
        res.json(err);
      });
  });

  module.exports = router