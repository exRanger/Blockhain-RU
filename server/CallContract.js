const MyContract=artifacts.require('MyContract');
const {log} = console;

module.exports = async function (callback) {
  try {
    const accounts = await web3.eth.getAccounts();
    const myContract = await MyContract.deployed();
    const contractOwner=await myContract.owner();
    console.log('Contract owner:', contractOwner);
    // Call a function on the contract
    const result = await myContract.Call();
    console.log('Result:', result);
    // Send a transaction to the contract
    const tx = await myContract.Call({ from: accounts[0], value: web3.utils.toWei('1', 'ether') });
    console.log('Transaction:', tx);
    callback();
  } catch (error) {
    console.error(error);
    callback(error);
  }
};
