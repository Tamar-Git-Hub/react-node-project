const Found =require('../models/Found')

exports.getAllFounds=async(req,res)=>{
    try{
       const founds =await Found.find()
       res.json(founds)
    }
    catch(error){
        console.error("Fail to get founds : ",error)
        res.status(500).json({message: "Fail to get founds"})
    };
     
}

exports.addFound=async(req,res)=>{
    const found=await Found.create(req.body)
    res.json(found)
}

exports.deleteFounds = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedFound = await Found.findOneAndDelete({ _id: id }); // תיקון כאן
        if (!deletedFound) {
            return res.status(404).json({ message: "found is not find" });
        }
        res.json({ message: "found delete successfully" });
    } catch (error) {
        console.error("Fail to delete found : ", error);
        res.status(500).json({ message: "Fail to delete found" });
    }
};

exports.updateFound = async (req, res) => {
    const { id } = req.params;
    const { category, name, city, street, owner, date, identifying } = req.body;
    try {
        const updatedFound = await Found.findOneAndUpdate(
            { _id: id }, 
            { category, name, city, street, owner, date, identifying },
            { new: true }
        );
        if (!updatedFound) {
            return res.status(404).json({ message: "found not found" });
        }
        res.json({ message: "founds update successfully" });
        res.json(updatedFound);
    } catch (error) {
        console.error("Fail to update found : ", error);
        res.status(500).json({ message: "Fail to update found" });
    }
};
exports.getFoundById = async (req, res) => {
    const { id } = req.params;
    try {
        const found = await Found.findOne({ _id: id });
        if (!found) {
            return res.status(404).json({ message: "found not find" }); 
        }
        res.json(found);
    } catch (error) {
        console.error("Fail to get found : ", error);
        res.status(500).json({ message: "Fail to get found" });
    }
};