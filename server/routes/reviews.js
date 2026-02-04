import express from 'express';
import Review from '../models/Review.js';

const router = express.Router();

// GET /api/reviews - list all reviews (newest first)
router.get('/', async (req, res) => {
  try {
    const reviews = await Review.find().sort({ createdAt: -1 });
    res.json(reviews);
  } catch (err) {
    console.error('Error fetching reviews:', err);
    res.status(500).json({ message: 'Failed to load reviews' });
  }
});

// POST /api/reviews - create a new review
router.post('/', async (req, res) => {
  try {
    const { name, role, rating, message } = req.body;

    if (!name || !role || !rating || !message) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const review = await Review.create({ name, role, rating, message });
    res.status(201).json(review);
  } catch (err) {
    console.error('Error creating review:', err);
    res.status(500).json({ message: 'Failed to submit review' });
  }
});

export default router;
