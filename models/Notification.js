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
    url: {
      type: String,
      default: "",
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
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: function () {
        return this.category === "Orders";
      },
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    expiresAt: {
      type: Date,
      required: false,
      default: function () {
        // Default expiration: 30 days from creation
        return new Date(Date.now() + 30 * 24 * 60 * 60 * 1000);
      },
    },
    readBy: [
     {
      type: mongoose.Schema.Types.ObjectId, 
      ref: "User",
     }
    ],
  },

  {
    timestamps: true, // Adds `createdAt` and `updatedAt` fields automatically
  }
);

// Add a TTL index for automatic deletion of expired notifications
// notificationSchema.index({ expiresAt: 1 }, { expireAfterSeconds: 0 });

// Create the model
const Notification =
  mongoose.models.Notification ||
  mongoose.model("Notification", notificationSchema);

module.exports = Notification;
