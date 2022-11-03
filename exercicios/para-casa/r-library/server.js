const app = require ('./app')

const port = 1313

app.listen(port, () => {
    console.log (`Server is listening on port ${port}`)
})