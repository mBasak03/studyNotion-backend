const Tag= require("../models/Tags")
exports.createtag= async(req, res)=>{
    try{
        const {name, description}= req.body;
        if(!name || !description){
            return res.status(400).json({
                success: false,
                message: "All fields are required",
            })
        }
        const tagDetails= await Tag.create({
            name: name,
            description: description
        })
        console.log(tagDetails);
        return res.status(200).json({
            success: true,
            message: "Tag is created successfully"
        })
    }
    catch(error){
        return res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

exports.showAllTags= async(req, res)=>{
    try{
        const allTags= await Tag.find({});
        return res.status(200).json({
            success: true,
            message: "all tags returned successfully",
            allTags
        })
    }
    catch(error){
        return res.status(500).json({
            success: false,
            message: error.message
        })
    }
}