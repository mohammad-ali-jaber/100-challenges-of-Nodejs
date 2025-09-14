const { Queue, Worker } = require("bullmq");
const queue = new Queue("emails");

(async () => {
  await queue.add("send", { to: "user@test.com" });
})();

const worker = new Worker("emails", async job => {
  console.log("Sending email to", job.data.to);
}, { concurrency: 5 });