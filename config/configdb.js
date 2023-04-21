const mongoose = require("mongoose");
async function main() {
  await mongoose.connect(process.env.DB_URL);
  console.log("Connection SuccessFull !!");
}
main().catch((error) => {
  console.log("Connection Not Success Full !!");
});
