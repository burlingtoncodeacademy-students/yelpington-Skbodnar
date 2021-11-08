const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`server is listening on port ${port} `);
});

app.use(express.static("client/public"));

//Returns list of restaurants in JSON format
app.get("/api", (request, response) => {
  response.sendFile(__dirname + "/api/restaurant-id.json");
});


//Returns a single restaurant whose ID was used in JSON format
app.get("/api/:restaurantId", (request, response) => {
  console.log(request.params)
  response.sendFile(
    __dirname + "/api" + `/${request.params.restaurantId}.json`
  );
})

//To catch searches that don't exist
app.get("*", (request, response) => {
  response.send("Ooops! The page you're looking for doesn't exist!");
});
