import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const ProductSchema = new Schema(
  {
    price: {
      type: mongoose.Types.Decimal128,
    },
    expense: {
      type: mongoose.Types.Decimal128,
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
