
const mongoose = require('mongoose')

const tourSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'A tour must have name'],
        unique: true
    },
    rating: {
        type: Number,
        default: 4.5
    },
    price: {
        type: Number,
        required: [true, 'A tour must have a price']
    }
})

const Tour = mongoose.model('Tour', tourSchema)

module.exports = Tour



// const testTour = new Tour({
//     name: "The Fordfsfsdfasfsest Hunter",
//     rating: 4.7,
//     price: 444
// })


// testTour.save().then(doc => {
//     console.log(doc);
// }).catch(err => {
//     console.log('Error💥', err);
// })


// const Product = mongoose.model('Product',tourSchema)

// const test = new Product({
//   name:"Samsung",
//   rating:4.2,
//   price:33999
// })

  // test.save().then(doc=>{
  //   console.log(doc);
  // }).catch(err=>{
  //   console.log("Error 💥", err);
  // })



  