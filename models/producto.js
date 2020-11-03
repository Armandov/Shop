const mongoose = require ('mongoose')
const Schema = mongoose.Schema;

const ProductoSchema = new Schema ({
articulo : String,
precio : String,
status : {
    type : Boolean,
    default : false
}
});

module.exports = mongoose.model ('productos',ProductoSchema);


