const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  status: String,
  amount: Number
});

const Order = mongoose.model('Order', orderSchema);

(async () => {
  await mongoose.connect('mongodb://localhost:27017/app');

  await Order.deleteMany({});
  await Order.insertMany([
    { status: 'pending', amount: 100 },
    { status: 'pending', amount: 50 },
    { status: 'completed', amount: 200 }
  ]);

  const result = await Order.aggregate([
    { $group: { _id: '$status', total: { $sum: '$amount' } } }
  ]);

  console.log(result);

  await mongoose.disconnect();
})();