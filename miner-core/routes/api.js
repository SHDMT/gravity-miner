var express = require('express');
let usertx = require('../core/tx/usertx');
let miningtx = require('../core/tx/miningtx');
let chaintx = require('../core/tx/chaintx');

var router = express.Router();

/* GET users listing. */

router.post('/register', (req, res) => {
    let uname = req.body.uname;
    let password = req.body.password;
    let power = req.body.power;
    usertx.CreateUser(res, uname, password, power);
});

router.post('/listusers', (req, res) => {
    usertx.ListUsers(res);
});

router.post('/login', (req, res) => {
    let uname = req.body.uname;
    let password = req.body.password;
    usertx.CheckPassword(res, uname, password);
});

router.post('/changepassword', (req, res) => {
    let uname = req.body.uname;
    let oldpassword = req.body.oldpassword;
    let newpassword = req.body.newpassword;
    usertx.ChangePassword(res, uname, oldpassword, newpassword);
});

router.post('/updateusername', (req, res) => {
    let uname = req.body.uname;
    let newuname = req.body.newuname;
    usertx.UpdateUserName(res, uname, newuname);
});

router.post('/updateuserpower', (req, res) => {
    let uname = req.body.uname;
    let power = req.body.power;
    usertx.UpdateUserPower(res, uname, power);
});

router.post('/listminingspeedrecord', (req, res) => {
    let startTime = req.body.startTime;
    let endTime = req.body.endTime;
    miningtx.ListMiningSpeedRecord(res, startTime, endTime);
});

router.post('/startmining', (req, res) => {
    let ncore = req.body.ncore;
    let address = req.body.address;
    miningtx.StartMining(res, ncore, address);
    
});

router.post('/stopmining', (req, res) => {
    miningtx.StopMining(res);
});

router.post('/getcurrentspeed', (req, res) => {
    miningtx.GetCurrentSpeed(res);
});

router.post('/ismining', (req, res) => {
    miningtx.IsMining(res);
});

router.post('/getinfo', (req, res) => {
    chaintx.Getinfo(res);
});

router.post('/getcommittee', (req, res) => {
    chaintx.Get
    res.json({
        status: 200,
        data: [
            "111111111111111111",
            "222222222222222222",
            "333333333333333333",
            "444444444444444444",
        ]
    });
})

router.post('/updateminingaddr', (req, res) => {
    let addr = req.body.address;
    miningtx.UpdateMiningAddr(res, addr);
});

router.post('/getminingaddr', (req, res) => {
    miningtx.GetMiningAddr(res);
});

module.exports = router;