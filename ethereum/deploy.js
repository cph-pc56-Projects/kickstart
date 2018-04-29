const HDWalletProvider = require("truffle-hdwallet-provider");
const Web3 = require("web3");
const compiledFactory = require("./build/CampaignFactory.json");

const provider = new HDWalletProvider(
  "kid garlic buzz manage acoustic keen jar mechanic upset flip drastic coast",
  "https://rinkeby.infura.io/rKknE3vDHLErMxmM7sqZ"
);

const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();
  console.log("Attempting to deploy from account: ", accounts[0]);

  const result = await new web3.eth.Contract(
    JSON.parse(compiledFactory.interface)
  )
    .deploy({ data: compiledFactory.bytecode })
    .send({ gas: "1000000", from: accounts[0] });

  console.log("Contract deployed to: ", result.options.address);
};
deploy();
// Contract Deployed to: 0xB994Cf1a575E8FC32Fd5aa89630F7846ebbCc371
