const path = require("path");
const {mnemonic, projectId } = require('./secrets.json');
const HDWalletProvider = require('@truffle/hdwallet-provider');

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  contracts_build_directory: path.join(__dirname, "client/src/contracts"),
  networks: {
    development: {
      network_id: "*",
      host: "127.0.0.1",
      // port: 7545, // for ganache gui
      port: 8545, // for ganache-cli
      // gas: 6721975,
      // gasPrice: 20000000000,
    },
    sepolia: {
      provider: () => new HDWalletProvider(mnemonic, `https://sepolia.infura.io/v3/${projectId}`),
      network_id: 11155111,
      gas: 5500000,
      confirmations: 2,
      timeoutBlocks: 200,
      skipDryRun: true,
    }
  },
};
