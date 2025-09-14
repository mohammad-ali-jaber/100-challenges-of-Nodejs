const mongoose = require('mongoose');

async function runTx() {
const session = await mongoose.startSession();
session.startTransaction();
try {
  await User.create([{ name: "A" }], { session });
  await User.create([{ name: "B" }], { session });
  await session.commitTransaction();
} catch (e) {
  await session.abortTransaction();
}
session.endSession();
}