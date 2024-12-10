const express = require('express');

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log("Listening on: ", PORT);
});

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