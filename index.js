import express from "express";

const app = express();
const port = 8080

app.get("/version", (req, res) => {
    const version = parseInt(process.env.version)
    res.status(200).send({ version });
});

app.listen(port, () => {
   console.log(`Server listening on port ${port}`);
});
