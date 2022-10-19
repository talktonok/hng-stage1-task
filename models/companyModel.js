const mongoose = require('mongoose');


const companySchema = new mongoose.Schema(
  {
    name: { type: String},
    head_office: { type: String},
    phone: { type: Number},
    email: { type: String},
    employees: { type: String },
    category: { type: String },
    description: { type: String },
  }
);

const company = mongoose.model('business', companySchema);
module.exports = company;
