const express = require("express");
const app = express();
const port = 9090;

const trainees = [
  { name: "Maziar", region: "north-west" },
  { name: "Shimen", region: "north-west" },
  { name: "Zaw", region: "north-west" },
  { name: "Azin", region: "london" },
  { name: "Chioma", region: "london" },
  { name: "Pakize", region: "london" },
];

app.get("/", function (request, response) {
  // console.log(request);
  console.log("You are in  my IPA");
  response.send("Hello word You are getting a response from my server");
});
/*  Ana dizine git ve aşağıdaki işlemi gerçekleştir:
    İstek ve yanıt nesnelerini al.
    Şu an için yanıt nesnesi üzerinde çalış ve şunu yazdır: "Hello   */

/*   http://localhost:3000/trainees
    http://localhost:3000/trainees?region=north-west */
app.get("/trainees", function (request, response) {
  console.log(request.query.region, "<----- request.query.region ");

  console.log("Recieved a  requests. trainees endpoint!");
  response.send({ trainees });
});

// http://localhost:9090/chocolate?amount=3
app.get("/chocolate", (req, res) => {
  console.log(req.query.amount);
  res.send(`Gimme ${amount} chocolates!`);
});

// /node endpoint
app.get("/node", function (request, response) {
  response.send("This is the Node.js endpoint!");
});

// /codeyourfuture endpoint
app.get("/codeyourfuture", function (request, response) {
  response.send("Welcome to CodeYourFuture!");
});

app.listen(port, () => {
  console.log("Server is listening on port 9090. Ready to accept requests!");
});
/* Express modülünü al ve 9090 numaralı portta dinlemeye başla; 
istekleri kabul etmeye hazır olduğumuzda su   mesajı yazdır."
'Server 3000 numaralı portta dinleniyor,İstekleri kabul etmeye hazır!' */

/* Require the Express module and start listening on port 3000;  
when we are ready to accept requests print:  'Server is listening on port 3000.
 Ready to accept requests!'" */

/*  corresponding URL:
For the root endpoint (/):
URL: http://localhost:3000/
For the /chocolate endpoint:
URL: http://localhost:3000/chocolate
For the /node endpoint:
URL: http://localhost:3000/node
For the /codeyourfuture endpoint:
URL: http://localhost:3000/codeyourfuture */
