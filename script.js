fetch("match.json")
.then(res => res.json())
.then(data => {

document.getElementById("home").innerText = data.home;
document.getElementById("away").innerText = data.away;
document.getElementById("score").innerText = data.score;
document.getElementById("date").innerText = data.date;

});
