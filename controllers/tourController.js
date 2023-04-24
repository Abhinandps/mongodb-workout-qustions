

const Tour = require('../models/tourModel')


exports.getAllTours = async (req, res) => {
    try {
        const tours = await Tour.find()
        res.status(200).json({
            status: 'success',
            results: tours.length,
            data: { tours }
        })
    } catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err
        })
    }
}

exports.createTour = async (req, res) => {
    try {
        //Method 1
        // const newTour = new Tour({})
        // newTour.save()

        // Method 2
        const newTour = await Tour.create(req.body)

        res.status(201).json({
            status: "success",
            data: {
                data: newTour
            }
        })
    } catch (err) {
        res.status(400).json({
            status: 'fail',
            message: err
        })
    }
}

exports.getTour = async (req, res) => {
    try {
        const tour = await Tour.findById(req.params.id)
        // findById - > Tour.findOne({_id:req.params.id})
        res.status(200).json({
            status: 'success',
            data: { tour }
        })
    } catch (err) {
        res.status(400).json({
            status: 'fail',
            message: err
        })
    }

}


exports.updateTour = async (req, res) => {

    try {
        const tour = await Tour.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        })
        // Tour.updateOne({_id:req.params.id},{$set:{price:req.body}})
        res.status(200).json({
            status: 'success',
            data: { tour }
        })
    } catch (err) {
        res.status(400).json({
            status: 'fail',
            message: err
        })
    }
}

exports.deleteTour = async (req, res) => {
    try {
        await Tour.findByIdAndDelete(req.params.id)
        // const id = Number(req.params.id)
        res.status(204).json({
            status: 'success',
            data: null
        })
    } catch (err) {
        res.status(400).json({
            status: 'fail',
            message: err
        })
    }
}
