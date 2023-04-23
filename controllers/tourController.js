
const fs = require('fs')
const data = JSON.parse(fs.readFileSync(`${__dirname}/../dev-data/data.json`))

exports.getAllTours = (req, res) => {
    res.status(200).json({
        status: 'success',
        results: data.length,
        data: { data }
    })
}

exports.createTour = (req, res) => {

    const newId = data[data.length - 1]._id + 1
    const newItem = Object.assign({ _id: newId }, req.body)
    data.push(newItem)

    fs.writeFile(`${__dirname}/dev-data/data.json`, JSON.stringify(data), (err) => {
        if (err) throw err
        res.status(201).json({
            status: "success",
            data: {
                data: newItem
            }
        })
    })
}

exports.getTour = (req, res) => {
    const id = req.params.id
    const singleData = data.find((item) => item._id === Number(id))

    if (!singleData) {
        return res.status(404).json({
            status: "faild",
            message: "invalid Id"
        })
    }

    res.status(200).json({
        status: 'success',
        data: { singleData }
    })
}


exports.updateTour = (req, res) => {
    const id = req.params.id
    const singleData = data.find((item) => item._id === Number(id))

    if (!singleData) {
        return res.status(404).json({
            status: "faild",
            message: "invalid Id"
        })
    }

    res.status(200).json({
        status: 'success',
        data: '<Updates here>'
    })
}

exports.deleteTour = (req, res) => {
    // const id = Number(req.params.id)
    res.status(204).json({
        status: 'success',
        data: null
    })
}
