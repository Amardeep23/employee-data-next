import mongoose, { Schema } from "mongoose";

const topicSchema = new Schema(
  {
    username: String,
    phone: String,
    email: String,
    emp_id: String,
    role: String,
    isActive: Boolean,
  },
  {
    timestamps: true,
  }
);

const Topic = mongoose.models.Topic || mongoose.model("Topic", topicSchema);

export default Topic;
