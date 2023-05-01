import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const monthSchema = new Schema(
  {
    month: String,
    revenue: {
      type: mongoose.Types.Decimal128,
      get: (v) => parseFloat(v),
    },
    expenses: {
      type: mongoose.Types.Decimal128,
      get: (v) => parseFloat(v),
    },
    operationalExpenses: {
      type: mongoose.Types.Decimal128,
      get: (v) => parseFloat(v),
    },
    nonOperationalExpenses: {
      type: mongoose.Types.Decimal128,
      get: (v) => parseFloat(v),
    },
  },
  { toJSON: { getters: true } }
);

const daySchema = new Schema(
  {
    date: String,
    revenue: {
      type: mongoose.Types.Decimal128,
      get: (v) => parseFloat(v),
    },
    expenses: {
      type: mongoose.Types.Decimal128,
      get: (v) => parseFloat(v),
    },
  },
  { toJSON: { getters: true } }
);

const KPISchema = new Schema(
  {
    totalProfit: {
      type: mongoose.Types.Decimal128,
      get: (v) => parseFloat(v),
    },
    totalRevenue: {
      type: mongoose.Types.Decimal128,
      get: (v) => parseFloat(v),
    },
    totalExpenses: {
      type: mongoose.Types.Decimal128,
      get: (v) => parseFloat(v),
    },
    expensesByCategory: {
      type: Map,
      of: {
        type: mongoose.Types.Decimal128,
        get: (v) => parseFloat(v),
      },
    },
    monthlyData: [monthSchema],
    dailyData: [daySchema],
  },
  { timestamps: true, toJSON: { getters: true } }
);

const KPI = mongoose.model('KPI', KPISchema);

export default KPI;
