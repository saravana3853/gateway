const express = require("express")
const {setupLogging} = require("./logging");
const {setupProxies} = require("./proxy");
const {setupRateLimit} = require("./ratelimiters");
const {ROUTES} = require("./routes");


const app = express()
const port = 5230;


setupLogging(app);
setupProxies(app, ROUTES);
setupRateLimit(app, ROUTES);

app.get('/hello', (req, resp) => {
    return resp.send('HELLO WORLD!');
})
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

