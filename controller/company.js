const { Model } = require('mongoose');


const store =   (req, res) => {
    const company = new Model({
      name : req.body.name,
      head_office: req.body.head_office,
      phone: req.body.phone,
      email: req.body.email,
      employees: req.body.employees,
      category: req.body.category,
      description: req.body.description,

    
  })

  try {
    const dataToSave = company.save();
    res.status(200).json(dataToSave)
}
catch (error) {
    res.status(400).json({message: error.message})
}
}
