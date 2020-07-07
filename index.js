require("dotenv").config();

const server = require("./server");

const PORT = process.env.PORT || 4000;
server.listen(PORT, () => {
  console.log(`\n** server is listening on port ${PORT} **\n`);
});
