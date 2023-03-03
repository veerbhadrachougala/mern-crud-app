import { User } from "../model/userSchema.js";

export const addUser = async (request, response) => {
    
    const user = request.body;
    const newUser = new User(user);
    try{
      await newUser.save();
      response.status(200).json(newUser);
    }catch(error){
        response.status(409).json({message: error.message});
    }

}

export const getUser = async (req, res) => {
    try{
     const users = await User.find({});
     res.status(200).json(users);
    }catch(err){
        res.status(404).json({message: err.message});
    }
}
