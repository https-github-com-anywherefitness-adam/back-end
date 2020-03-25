const router = require('express').Router()

const bcrypt = require('bcryptjs')

// Create router variables
const authRouter = require('../auth/auth-router')
const userRouter = require('../user/user-router')
const classRouter = require('../class/class-router')

// Set variables to endpoints
router.use('/auth', authRouter)
router.use('/user', userRouter)
router.use('/class', classRouter)

router.get('/', (req, res) => {
    res.json({ api: "Anytime Fitness Server Up"})
})

router.post('/hash', (req, res) => {
    const password = req.body.password
    const hash = bcrypt.hashSync(password, 12)
    res.status(200).json({ password, hash })
})

module.exports = router
