const mongoose = require("mongoose");

const ticketSchema = new mongoose.Schema({
    subtotal: {
        type: Number,
        default: 0
    },
    taxes: {
        type: Number,
        default: 0
    },
    total: {
        type: Number,
        default: 0
    },
    products: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Products",
        required: true
    }]
});

const Tickets = mongoose.model("Tickets", ticketSchema);

module.exports = Tickets;