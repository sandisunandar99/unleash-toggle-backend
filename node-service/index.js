require('dotenv').config()
const Express = require('express')
const BodyParser = require('body-parser')
const unleash = require('unleash-client')

const app = Express()
app.use(BodyParser.urlencoded({extended: true}))
app.use(BodyParser.json())


unleash.initialize({
    url: process.env.UNLEASH_URL,
    appName: 'unleash-node-service',
    environment: process.env.APP_ENV,
    customHeaders: { Authorization: process.env.UNLEASH_TOKEN },
})

setInterval(() => {
  if (unleash.isEnabled('unleash-node-service')) {
    console.log('Toggle enabled');
  } else {
    console.log('Toggle disabled');
  }
}, 1000);

app.get("/api/ping", (req, res) => {
    res.json({
        "ping" : "pong"
    })
})


app.listen(process.env.PORT, () =>{
    console.log(`Server Running on Port : ${process.env.PORT}`);
})