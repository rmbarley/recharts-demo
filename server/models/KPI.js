import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const monthSchema = new Schema(
  {
    month: String,
    revenue: {
      type: mongoose.Types.Decimal128,
    },
    expenses: {
      type: mongoose.Types.Decimal128,
    },
    operationalExpenses: {
      type: mongoose.Types.Decimal128,
    },
    nonOperationalExpenses: {
      type: mongoose.Types.Decimal128,
    },
  },
  { toJSON: { getters: true } }
);

const daySchema = new Schema(
  {
    date: String,
    revenue: {
      type: mongoose.Types.Decimal128,
    },
    expenses: {
      type: mongoose.Types.Decimal128,
    },
  },
  { toJSON: { getters: true } }
);

const KPISchema = new Schema(
  {
    totalProfit: {
      type: mongoose.Types.Decimal128,
    },
    totalRevenue: {
      type: mongoose.Types.Decimal128,
    },
    totalExpenses: {
      type: mongoose.Types.Decimal128,
    },
    expensesByCategory: {
      type: Map,
      of: {
        type: mongoose.Types.Decimal128,
      },
    },
    monthlyData: [monthSchema],
    dailyData: [daySchema],
  },
  { timestamps: true, toJSON: { getters: true } }
);

const KPI = mongoose.model('KPI', KPISchema);

export default KPI;
