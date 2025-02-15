const express = require('express')
const router = express.Router()

// require the Drone model here

router.get('/drones', (req, res, next) => {
  // Iteration #2: List the drones
  // ... your code here
})

router.post('/drones', (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
})

router.post('/drones/:id', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
})

router.delete('/drones/:id', (req, res, next) => {
  // Iteration #5: Delete the drone
  // ... your code here
})

module.exports = router
