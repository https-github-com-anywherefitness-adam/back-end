const router = require('express').Router();

const User = require('./user-model');
const restricted = require('../auth/restricted-middleware');

//GET
router.get('/', restricted, checkRole('user', 'admin'), (req, res) => {
    
    User.find()
    .then(user => {
        res.json(user);
    })
    .catch(err => res.send(err));
});

//GET BY ID
router.get('/:id', restricted, (req, res) => {
    const { id } = req.params;

    User.findById(id)
    .then(user => {
        if(user){
            res.json(user);
        } else {
            res.status(404).json({ message: 'could not find user with that id'})
        }
    })
    .catch(err => {
        res.status(500).json({ message: "Failed to get user"})
    });
});

//POST
router.post('/', (req, res) => {
    const userData = req.body;

    User.add(userData)
    .then(user => {
        res.status(201).json(user);
    })
    .catch(err => {
        res.status(500).json({ message: "Failed to create new user"})
    });
});


//PUT
router.put('/:id', (req, res) => {
    const { id } = req.params;
    const changes = req.body;

    User.findById(id)
    .then(user => {
        if(user){
            User.update(changes, id)
            .then(updatedUser => {
                res.json(updatedUser);
            });
        } else {
            res.status(404).json({ message: "Could not find a user with given id"})
        }
    })
    .catch(err => {
        res.status(500).json({ message: "Failed to update user"})
    });
});

//DELETE
router.delete('/:id', (req, res) => {
    const { id } = req.params;

    User.remove(id)
    .then(deleted => {
        if(deleted){
            res.json({ removed: deleted });
        } else {
            res.status(404).json({ message: "Could not find a user with given id"})
        }
    })
    .catch(err => {
        res.status(500).json({ message: "Failed to delete user"})
    });
});

module.exports = router;

//check role
function checkRole(roles){
    return function (req, res, next){
        if(roles.includes(req.decodedJwt.role)){
            next();
        } else {
            res.status(403).json({ message: "You do not have the correct role for access"})
        }
    }
}