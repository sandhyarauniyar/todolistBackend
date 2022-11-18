const todoController = require('../controllers/todoController.js');

// router
const router = require('express').Router();

// routes
router.get('/list', todoController.showingList);

router.post('/addTask', todoController.addingTask);

router.put('/updatelist', todoController.updateList);

router.delete('/deletelist/:id', todoController.deleteList);

module.exports = router;