require("dotenv").config();
const express = require("express");
const db = require("./db");

const app = express();
const morgan = require("morgan");

// middlewares
app.use(express.json());

// Get all restaurants
app.get("/api/v1/restaurants", async (req, res) => {
    try {
        const results = await db.query("SELECT * FROM restaurants");

        console.log(results)
        res.status(200).json({
            status: "success",
            results: results.rows.length,
            data: {
                restaurant: results.rows
            }
        });
    } catch (error) {
        console.log(error);
    }
    
});

// Get a restaurant
app.get("/api/v1/restaurants/:id", (req, res) => {
    console.log(req.params.id);
    res.status(200).json({
        status: "success",
        data: {
            restaurant: ["McDonalds", "Wendys"]
        }
    });
});

// Create a restaurant
app.post("/api/v1/restaurants", (req, res) => {
    console.log(req.body);
    res.status(201).json({
        status: "success",
        data: {
            restaurant: ["McDonalds", "Wendys"]
        }
    });
});

// Update a restaurant
app.put("/api/v1/restaurants/:id", (req, res) => {
    console.log(req.params.id);
    console.log(req.body);
    res.status(200).json({
        status: "success",
        data: {
            restaurant: ["McDonalds", "Wendys"]
        }
    });
});

// Delete a restaurant
app.delete("/api/v1/restaurants/:id", (req, res) => {
    res.status(204).json({
        status: "success",
    });
});

const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`Server is up and listening on port ${port}`);
});