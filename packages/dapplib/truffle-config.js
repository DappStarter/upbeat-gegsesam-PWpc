require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/wallet-provider');


let mnemonic = 'install loan off seed drift recipe night unveil grace only forget gasp'; 
let testAccounts = [
"0xbd00cba2fee3570944e19697797bee6194a4adbb91a936e3fc71f2159ed6ba6a",
"0xf09b42d9aaa190fdd9803c3542ee4133328ee692d61206f37d6b5ba82f9e9bb5",
"0x8b4a4412da9220de00d1ff495b77e1236930874ac889271c72678c272450bd8a",
"0x4b8e19f2c462024b6e4473a840c213777851ddadf27ead6ca360965973f35ee4",
"0x7a287f87071810175a4d812eb9971485f4c191954475dc698d0a85d292aeaff7",
"0x70b6a65688a038b7c8921dd6cc1659b50782c43ac066436a33df6ee9d734606d",
"0x7b6c8e1f92ff8659268484a0c873b276a3ed04667e5812475a264704d730c951",
"0x288ed12e1278432588bf99b476b970bd37a8d00b144df5382ce0165d042e5be3",
"0xbec300143322907539342cddbf7e11104757e7d32564fee173aa03e3a31f764c",
"0x1493b811bd503628b0a27404b8b34c6d7fb2772b58a31a54499cef4e353094c7"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


