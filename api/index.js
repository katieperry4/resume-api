const express = require('express');

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log("Listening on: ", PORT);
});

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    next();
})

app.get("/contact", (request, response) => {
    const contact = 
    {
        "Name": "Katelynn Perry",
        "Email": "katelynn-perry@comcast.net",
        "Website": "https://www.katelynnperry.com",
        "GitHub": "https://www.github.com/katieperry4",
        "LinkedIn": "https://www.linkedin.com/in/katelynn-perry-6056ba204/"
    };
    response.send(contact);
});

app.get("/", (request, response) => {
    const greeting = {
        "Greeting": "Hello"
    }
    response.send(greeting);
})

app.get("/projects", (request, response) => {
    const projects = {
        "Tea App": {
            "Description" : "An app that allows you to track tea consumption",
            "Technologies" : "C#, ASP.NET Core MVC, SQLServer, Azure",
            "Link" : "www.katelynnperry.com/projects/teatimetracker"
        },
        "Term Tracker": {
            "Description" : "A mobile app for tracking school terms, classes, and assignments",
            "Technologies" : "C#, .NET MAUI, SQLite",
            "Link" : "www.katelynnperry.com/projects/termtracker" 
        },
        "Appointment Scheduler" : {
            "Description" : "A Winforms app for sheduling appointments",
            "Technologies" : "C#, Winforms, MySQL",
            "Link" : "www.katelynnperry.com/projects/appointments"
        },
        "Inventory Application" : {
            "Description" : "A Winforms app for tracking inverntory",
            "Technologies" : "C#, Winforms",
            "Link" : "www.katelynnperry.com/projects/inventory"
        },
        "Ombros do Montejunto" : {
            "Description" : "A React web app for a Portuguese winery",
            "Technologies" : "HTML, CSS, React, JS",
            "Link" : "www.katelynnperry.com/projects/ombros"
        }
    }
    response.send(projects);
});

app.get("/experience", (request, response) => {
    const experience = {
        "Ombros do Montejunto": {
            "Title" : "Web Developer",
            "Additional Title" : "Brand Designer",
            "Duration" : "< 1 year",
            "Skills" : "JavaScript, React.js, Git, "
        }
    }
    response.send(experience);
});

app.get("/hobbies", (request, response) => {
    const hobbies = {
        "1": "Baking",
        "2" : "Crochet",
        "3" : "Painting",
        "4" : "Horseback Riding"
    }
    response.send(hobbies);
})