const mongoose = require("mongoose");

const GradeSchema = new mongoose.Schema({
  schoolName: {
    type: String,
    required: true,
  },
  studentName: {
    type: String,
    required: true,
  },
  studentGrade: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.models.Grade || mongoose.model("Grade", GradeSchema);
