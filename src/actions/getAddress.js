
require("dotenv").config();
const { initClient } = require("../utils");

async function getAddress() {
  console.log("Client initialization");

  if (!process.env.MNEMONIC) {
    throw new Error("Mnemonic not specified.");
  }

  const client = initClient();
  const { wallet } = client;

  console.log("Get the first address");

  const account = await wallet.getAccount();
  const address = account.getUnusedAddress().address;

  console.log(`Address: ${address}`);

  await client.disconnect();
}

getAddress().catch(console.error);
