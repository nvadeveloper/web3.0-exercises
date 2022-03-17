// https://eth-ropsten.alchemyapi.io/v2/dTlV-LLNwYgiZHlGakWShEQ7vIH3coMl

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/dTlV-LLNwYgiZHlGakWShEQ7vIH3coMl',
      accounts: ['de0bba47c723f0380f4dd58462c77f9bbf2f8754f3ea5c153cd97ebf3967d4b8']
    }
  }
}