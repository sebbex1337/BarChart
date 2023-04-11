"use strict";

window.addEventListener("load", initApp);

const queueArray = Array(40);

function initApp() {
    document.querySelector(".chart").addEventListener("animationiteration", barChart);
}

function getNumberOfCustomers() {
    return Math.floor(Math.random() * 32);
}

function barChart() {
    if (queueArray.length === 40) {
        queueArray.shift();
    }
    queueArray.push(getNumberOfCustomers());
    displayQueue();
    console.log(queueArray);
}

function displayQueue() {
    for (let i = 0; i < queueArray.length; i++) {
        const num = queueArray[i];
        const chart = document.querySelectorAll(".chart")[i];

        chart.style.height = num + "vh";
    }
}