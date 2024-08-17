const MyContract = artifacts.require('MyContract');
const {log, error} = console;

const loggerError = (error) => {
  error('CATHCHED', error);
}

module.exports = async function (callback) {
  try {
    const accounts = await web3.eth.getAccounts();
    const myContract = await MyContract.deployed();
    const contractOwner=await myContract.owner();
    log('Contract owner:', contractOwner);
    // Call a function on the contract
    const result = await myContract.Call();
    log('Result:', result);
    // Send a transaction to the contract
    const tx = await myContract.Call({ from: accounts[0], value: web3.utils.toWei('1', 'ether') });
    log('Transaction:', tx);
    callback();
  } catch (error) {
    loggerError(error)
    callback(error);
  }
};
