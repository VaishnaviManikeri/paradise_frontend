import mongoose from 'mongoose';

const reviewSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    role: { type: String, enum: ['parent', 'student'], required: true },
    rating: { type: Number, min: 1, max: 5, required: true },
    message: { type: String, required: true, trim: true },
    photoUrl: { type: String, trim: true }, // kept optional for future use
  },
  { timestamps: true }
);

const Review = mongoose.models.Review || mongoose.model('Review', reviewSchema);

export default Review;
