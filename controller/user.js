const { Model } = require('mongoose');
const UserModel = require('../models/UserModel')

const store =   async (req, res) => {
    const user = new UserModel({
        slackUsername : req.body.slackUsername,
        backend: req.body.backend,
        age: req.body.age,
        bio: req.body.bio

    
  })


  try {
    const userToSave = await user.save();
    const result = {
        bio: userToSave.bio,
        age: userToSave.age,
        backend:userToSave.backend,
        slackUsername:userToSave.slackUsername
        
      };
    res.status(200).json(result)
}
catch (error) {
    res.status(400).json({message: error.message})
}
}

const getAll = async (req, res) => {
    try{
        const user = await UserModel.find();

        const result = user
      .map(({ slackUsername, backend, age, bio}) => ({
        bio: bio,
        age: age,
        backend:backend,
        slackUsername:slackUsername
      }));

        res.json({data:result})
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
}

const getById =async (req, res) => {
    try{
        const user = await UserModel.findById(req.params.id);
        const result = {
            bio: user.bio,
            age: user.age,
            backend:user.backend,
            slackUsername:user.slackUsername
      };
        res.json(result)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
}

const update = async (req, res) => {
    try {
        const id = req.params.id;
        const updatedData = req.body;
        const options = { new: true };

        const updateduser = await UserModel.findByIdAndUpdate(
            id, updatedData, options
        )
        const result = updateduser
      .map(({ slackUsername, backend, age, bio}) => ({
        bio: bio,
        age: age,
        backend:backend,
        slackUsername:slackUsername
      }));

        res.send(result)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
}

const deleteUser = async (req, res) => {
    try {
        const id = req.params.id;
        const user = await UserModel.findByIdAndDelete(id)
        res.send(`Document with ${user.slackUsername} has been deleted..`)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
}

module.exports = 
{
    store,
    getAll,
    getById,
    update,
    deleteUser
}
