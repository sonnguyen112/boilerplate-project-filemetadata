class ApiController{

    async fileanalyse(req, res){
        if (req.method == "POST"){
            var file = req.file
            res.json({
                name: file.originalname,
                type: file.mimetype,
                size: file.size
            })
        }
    }
}

module.exports = new ApiController