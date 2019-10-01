const crypto = require('crypto');

const verifyHash = (req, res) => {

    const {hash} = req.params;
    res.json({result: hash === process.env.USERNAME_PASS_COMBO_HASH});

};

const login = (req, res) => {

    const {username, password} = req.body;
    const usernamePassCombo = username + '_' + password;
    const hash = crypto.createHash('md5').update(usernamePassCombo).digest("hex");

    res.json({result: hash === process.env.USERNAME_PASS_COMBO_HASH, hash});

};

module.exports = {
    verifyHash,
    login
};