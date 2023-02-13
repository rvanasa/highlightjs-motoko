const motokoGrammar = require('./languages/motoko.js');
const candidGrammar = require('./languages/candid.js');

module.exports = (hljs) => {
    hljs.registerLanguage('motoko', motokoGrammar);
    hljs.registerLanguage('candid', candidGrammar);
};

module.exports.motoko = motokoGrammar;
module.exports.candid = candidGrammar;
