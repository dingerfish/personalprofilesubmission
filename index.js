const express = require("express");
const app = express();

// send the homepage message
function sendHome(request, response) {
  response.send("Welcome to Camper Bot's homepage!");
}

// send the hobbies sentence
function sendHobbies(request, response) {
  response.send("I cycle, go boating, and play guitar.");
}

// send the skills sentence
function sendSkills(request, response) {
  response.send("JavaScript, Node.js, and Express.js!");
}

// send the profile as json
function sendProfile(request, response) {
  response.json({
    name: "Camper Bot",
    hobbies: ["cycling", "boating", "guitar"],
    skills: ["JavaScript", "Node.js", "Express.js"],
  });
}

app.get("/", sendHome);
app.get("/hobbies", sendHobbies);
app.get("/skills", sendSkills);
app.get("/api/profile", sendProfile);

app.listen(3000);
