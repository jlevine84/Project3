const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});


let myChart = $("#myChart")[0].getContext('2d');

let popChart = new Chart(myChart, {
    type: 'bar',
    data: {
        labels:['Boston', 'Worcester', 'Springield', 'Lowell', 'Cambridge', 'New Bedford'],
        datasets:[{
            label: 'Population',
            data: [
                234533,
                455435,
                123453,
                643554,
                122564,
                875576
            ]

        }]
    },
    options: {}
})