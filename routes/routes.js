const express = require('express');
const router = express.Router();
const companyModel = require('../models/companyModel')

router.post('/company', async (req, res) => {
    const company = new companyModel({
      name : req.body.name,
      head_office: req.body.head_office,
      phone: req.body.phone,
      email: req.body.email,
      employees: req.body.employees,
      category: req.body.category,
      description: req.body.description,

    
  })

  try {
    const companyToSave = await company.save();
    res.status(200).json(companyToSave)
}
catch (error) {
    res.status(400).json({message: error.message})
}
});



router.get('/company', async (req, res) => {
    try{
        const company = await companyModel.find();
        res.json(company)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
});


//Get by ID Method
router.get('/company/:id', async (req, res) => {
    try{
        const company = await companyModel.findById(req.params.id);
        res.json(company)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
});

//Update by ID Method
router.patch('/company/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const updatedData = req.body;
        const options = { new: true };

        const updatedCompany = await companyModel.findByIdAndUpdate(
            id, updatedData, options
        )

        res.send(updatedCompany)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
});


//Delete by ID Method
router.delete('/company/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const company = await companyModel.findByIdAndDelete(id)
        res.send(`Document with ${company.name} has been deleted..`)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})


module.exports = router;