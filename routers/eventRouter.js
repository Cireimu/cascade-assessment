const express = require("express");
const Events = require("../models/eventModel");
const router = express.Router();

const { validateUserId } = require("../middleware/eventsMiddleware");

router.get("/failed-login", (req, res) => {
  Events.findByType("Failure")
    .then((failed_events) => {
      res.status(200).json(failed_events);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: "Failed to fetch events" });
    });
});

router.get("/:id/user_events", validateUserId, (req, res) => {
  const { id } = req.params;
  Events.findByUser(id)
    .then((user_events) => {
      res.status(200).json(user_events);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: "Failed to fetch events for this user" });
    });
});

router.get("/last-week", (req, res) => {
  Events.findEventsByWeek()
    .then((last_week_events) => {
      res.status(200).json(last_week_events);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: "Failed to fetch events" });
    });
});

router.get("/two-days-ago", (req, res) => {
  Events.findEventsTwoDaysAgo()
    .then((two_days_ago) => {
      if (two_days_ago.length > 0) {
        res.status(200).json(two_days_ago);
      } else {
        res.status(204).json({ message: "No events found for this date" });
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: "Failed to fetch events" });
    });
});

module.exports = router;
