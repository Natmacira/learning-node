const getAsanas = (req, res, next) => {
    try {
        return res.send(asanas)
    } catch (error) {
        return next(error)
    }


}

    
const asanas = ["vriksana", "parvatasana", "setubandasana", "shavasana"];

module.exports = {getAsanas};