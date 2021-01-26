const express = require('express');
const app = express();
const router = require('../route/routes');

const cors = require('cors');

const port = 5555;

app.use(cors());
app.use(express.json());
app.use(router);

app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});