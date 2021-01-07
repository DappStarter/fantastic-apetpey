require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid arena other seed dance cruise million promote idea close bright skull'; 
let testAccounts = [
"0xbd9ca601c089e33f5b1e0ae988b2bcf1a66560f769be6201c6faaa261d6da121",
"0x8d0e0fe320936152d97c56f2c3c57de00c2dc849bf88c519d4e945adae16351e",
"0x51160ddae4e15e428b6b1d154ea442987975cda7fc80116f25eb8ba79a953e71",
"0xa87c4db75674da09b1a44b6e19e013c6989889fb3550051b23e3631b282c251c",
"0x5c13b33024cac2a71364a2ff629ddb014c459835354194db56808dd554d576fa",
"0x2b38bcc89f3d16149ca9b7c8036c0bbea970422c7d98cadc19ebbf3c91134779",
"0x5e5dfc8f89fc03e37b1925310cb816922f68cb6fbc884dafdb0da9b37b1a4a66",
"0x45790c9f47941c4c849672197ff323425b9303aeed5337873300413bff62257b",
"0x95db72b40cd3470b32881930c7213da7e2bf39c041f6a87fd100b5d362b92905",
"0xfd17a4445933d0e4a62d15d041f5663f1d5b742c52546aa888a9af1f593c9752"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
