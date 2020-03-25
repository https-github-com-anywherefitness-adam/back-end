const server = require('./api/server')

const port = process.env.PORT || 4400
server.listen(port, () => console.log(`\n** No Errors on Port ${port} **`))