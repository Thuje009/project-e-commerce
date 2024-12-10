const mongoose = require("mongoose");

// Define the schema for a notification
const notificationSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    details: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      enum: ["Promotions", "Orders"],
      required: true,
    },
    imageUrl: {
      type: String,
      required: false, // Optional field for images
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true, // Adds `createdAt` and `updatedAt` fields automatically
  }
);

// Create the model
const Notification =
  mongoose.models.Notification ||
  mongoose.model("Notification", notificationSchema);

module.exports = Notification;
