const express = require("express");

const books  = require("../../books");

const router = express.Router();

router.get("/", async(req, res)=> {
    try {
        const result = await books.getAll();
        res.json(result);
        
    } catch (error) {
        res.status(500).json({
            message:"Server error"
        })
    }
})

module.exports = router;