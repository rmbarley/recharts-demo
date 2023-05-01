import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const ProductSchema = new Schema(
  {
    price: {
      type: mongoose.Types.Decimal128,
      get: (v) => parseFloat(v),
    },
    expense: {
      type: mongoose.Types.Decimal128,
      get: (v) => parseFloat(v),
    },
    transactions: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Transaction',
      },
    ],
  },
  { timestamps: true, toJSON: { getters: true } }
);

const Product = mongoose.model('Product', ProductSchema);

export default Product;
