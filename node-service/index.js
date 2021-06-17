require('dotenv').config()
const Express = require('express')
const BodyParser = require('body-parser')
const unleash = require('unleash-client')

const app = Express()
app.use(BodyParser.urlencoded({extended: true}))
app.use(BodyParser.json())


unleash.initialize({
    url: process.env.UNLEASH_URL,
    appName: 'unleash-toggle',
    environment: process.env.APP_ENV,
    customHeaders: { Authorization: process.env.UNLEASH_TOKEN },
})


const context = {
  userId: 'sandis',
  remoteAddress: '192.168.1.1',
};

let i = 0;
setInterval(() => {
  if (unleash.isEnabled('contoh-toggle', context)) {
    console.log(i++ +" "+unleash.isEnabled('contoh-toggle', context));
  } else {
    console.log(i++ +" "+unleash.isEnabled('contoh-toggle', context));
  }
}, 250);



// if (unleash.isEnabled('contoh-toggle')) {
//   //ketika dia enable maka fungsi ini akan dipake klo disable maka loss aja  
//   createUserFaskes();
// } else {
//     crateUser();
// }


app.get("/api/ping", (req, res) => {
    res.json({
        "ping" : "pong"
    })
})


app.listen(process.env.PORT, () =>{
    console.log(`Server Running on Port : ${process.env.PORT}`);
})