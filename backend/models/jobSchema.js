import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Please provide job title"],
        minlength: [3, "Job title must contain at least 3 characters"],
        maxLength: [50, "Job title cannot exceed 50 characters"],
    },
    description: {
        type: String,
        required: [true, "Please provide job description"],
        minlength: [50, "Job description must contain at least 50 characters"],
        maxLength: [350, "Job description cannot exceed 350 characters"],
    },
    category:{
        type: String,
        required: [true, "Job category is required!"],
    },
    country:{
        type: String,
        required: [true, "Job country is required!"],
    },
    city:{
        type: String,
        required: [true, "Job city is required!"],
    },
    location:{
        type: String,
        required: [true, "Please provide exact location!"],
        minLength: [50, "Job location must contain at least 50 charcters!"],
    },
    fixedSalary:{
        type: Number,
        minlength: [4, "Fixed Salary must contain at least 4 characters"],
        maxLength: [9, "Fixed Salary cannot exceed 9 characters"],
    },
    salaryFrom:{
        type: Number,
        minlength: [4, "salaryFrom must contain at least 4 characters"],
        maxLength: [9, "salaryFrom exceed 9 characters"],
    },
    salaryTo:{
        type: Number,
        minlength: [4, "salaryTo must contain at least 4 characters"],
        maxLength: [9, "salaryTo cannot exceed 9 characters"],
    },
    expired:{
        type: Boolean,
        default: false,
    },
    jobPostedOn: {
        type: Date,
        default: Date.now,
    },
    postedBy: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: true,
    },
});

export const Job = mongoose.model("Job", jobSchema);