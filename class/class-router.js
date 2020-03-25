const router = require('express').Router();

const Class = require('./class-model');

//GET
router.get('/', (req, res) => {
    
    Class.find()
    .then(classes => {
        res.json(classes);
    })
    .catch(err => res.send(err));
});

//GET BY ID
router.get('/:id', (req, res) => {
    const { id } = req.params;

    Class.findById(id)
    .then(classes => {
        if(classes){
            res.json(classes);
        } else {
            res.status(404).json({ message: 'could not find classes with that id'})
        }
    })
    .catch(err => {
        res.status(500).json({ message: "Failed to get classes"})
    });
});

//POST
router.post('/', (req, res) => {
    const classData = req.body;

    Class.add(classData)
    .then(classes => {
        res.status(201).json(classes);
    })
    .catch(err => {
        res.status(500).json({ message: "Failed to create new classes"})
    });
});


//PUT
router.put('/:id', (req, res) => {
    const { id } = req.params;
    const changes = req.body;

    Class.findById(id)
    .then(classes => {
        if(classes){
            Class.update(changes, id)
            .then(updatedClass => {
                res.json(updatedClass);
            });
        } else {
            res.status(404).json({ message: "Could not find a class with given id"})
        }
    })
    .catch(err => {
        res.status(500).json({ message: "Failed to update class"})
    });
});

//DELETE
router.delete('/:id', (req, res) => {
    const { id } = req.params;

    Class.remove(id)
    .then(deleted => {
        if(deleted){
            res.json({ removed: deleted });
        } else {
            res.status(404).json({ message: "Could not find a class with given id"})
        }
    })
    .catch(err => {
        res.status(500).json({ message: "Failed to delete class"})
    });
});

module.exports = router;
