require('dotenv').config();// importanto o dotenv como algo que executa uma ação e não uma variável

const app = require("./src/app");

//connect();

const port = 3000;

app.listen(port, () => console.log(`Listening on port: ${port}`));