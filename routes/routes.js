const express = require('express');
const router = express.Router();

const companyController = require('../controller/company')

router.post('/company', companyController.store)


router.get('/company', companyController.getAll);


//Get by ID Method
router.get('/company/:id', companyController.getById);

//Update by ID Method
router.patch('/company/:id', companyController.update);


//Delete by ID Method
router.delete('/company/:id', companyController.deleteCompany)


module.exports = router;
//DATABASE_URL = mongodb+srv://nok:jiezcOtWFB6SSMUo@cluster0.1i4gfco.mongodb.net/?retryWrites=true&w=majority