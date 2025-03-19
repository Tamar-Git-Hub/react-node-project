const Lost =require('../models/Lost')

exports.getAllLosts=async(req,res)=>{
    try{
       const losts =await Lost.find()
       res.json(losts)
    }
    catch(error){
        console.error("Fail to get losts : ",error)
        res.status(500).json({message: "Fail to get losts"})
    };
     
}

exports.addLost=async(req,res)=>{
    const lost=await Lost.create(req.bady)
    res.json(lost)
}

exports.deleteLost=async(req,res)=>{
    const {id}=req.params
    try{
        const idLost=await Lost.findOneAndDelete({id:id})
        if(!idLost)
          return  res.status(404).json({message: "lost is not find"})
        res.json({message: "lost delete successfully"})
    }
    catch(error){
        console.error("Fail to delete lost : ",error)
        res.status(500).json({message: "Fail to delete lost"})
    };
}
exports.updateLost=async(req,res)=>{
    const{id}=req.params
    const{category,name,city,street,owner,date}=req.body
    try{
        const updateLost=await Lost.findOneAndUpdate(
            {id:id},
            {category,name,city,street,owner,date},
            {new:true}
        )
        if(!updateLost)
            return  res.status(404).json({message: "lost not found"})
          res.json({message: "lost update successfully"})
        res.json(updateLost)
    }
    catch(error){
        console.error("Fail to update lost : ",error)
        res.status(500).json({message: "Fail to update lost"})
    };
}

exports.getLostById =async(req,res)=>{
 const{id}=req.params
 try{
    const lost=await Lost.findOne({id:id})
    if(!lost){
        return res.street(404).json({message:"lost not find"})
    }
    res.json(lost)
 }
 catch(error){
    console.error("Fail to get lost : ",error)
    res.status(500).json({message: "Fail to get lost"})
};

}