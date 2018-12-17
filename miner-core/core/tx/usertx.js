let db = require("../drive/database");
let sha256 = require("js-sha256").sha256;

function createUser(res, uname, password, power) {
    let passwordHash = sha256(password);
    let sql = "INSERT INTO user (uname, password, power) VALUES(?, ?, ?)";
    let params = [uname, passwordHash, power];
    db.exec(sql, params, (err, result) => {
        if (err) {
            console.log('[DB INSERT ERROR] - ', err.message);
            res.json({
                status: 500,
                data: '[DB INSERT ERROR] - ' + err.message
            });
        } else {
            res.json({
                status: 200,
                data: result
            });
        }
    });
}

function listUsers(res) {
    let sql = "SELECT * FROM user";
    db.exec(sql, (err, result) => {
        if (err) {
            console.log('[DB QUERY ERROR] - ', err.message);
            res.json({
                status: 500,
                data: '[DB QUERY ERROR] - ' + err.message
            });
            return;
        }
        res.json({
            status: 200,
            data: result
        });


    });
}
function checkPassword(res, uname, password) {
    let passwordHash = sha256(password);
    let sql = "SELECT * FROM user WHERE uname = ? AND password = ?";
    let params = [uname, passwordHash];

    db.exec(sql, params, (err, result) => {
        if (err) {
            console.log('[DB QUERY ERROR] - ', err.message);
            res.json({
                status: 500,
                data: '[DB QUERY ERROR] - ' + err.message
            });
            return;
        }
        if(result.length > 0){
            res.json({
                status: 200,
                data: "success"
            });
        }else{
            res.json({
                status: 200,
                data: "failed"
            });
        }

    });
}

function changePassword(res, uname, oldPassword, newPassword) {
    let oldPasswordHash = sha256(oldPassword);
    let newPasswordHash = sha256(newPassword);
    let sql = "UPDATE user SET user.password = ? WHERE uname = ? AND password = ?";
    let params = [newPasswordHash, uname, oldPasswordHash];
    console.log("old:", oldPasswordHash);
    console.log("new:", newPasswordHash);
    db.exec(sql, params, (err, result) => {
        if (err) {
            console.log('[DB UPDATE ERROR] - ', err.message);
            res.json({
                status: 500,
                data: '[DB UPDATE ERROR] - ' + err.message
            });
        } else {
            if(result.changedRows > 0){
                res.json({
                    status: 200,
                    data: "success"
                });
            }else{
                res.json({
                    status: 200,
                    data: "failed"
                });
            }
        }
    });
}

function updateUserName(res, uname, newuname) {
    let sql = "UPDATE user SET user.uname = ? WHERE uname = ?";
    let params = [newuname, uname];
    db.exec(sql, params, (err, result) => {
        if (err) {
            console.log('[DB UPDATE ERROR] - ', err.message);
            res.json({
                status: 500,
                data: '[DB UPDATE ERROR] - ' + err.message
            });
        } else {
            if(result.changedRows > 0){
                res.json({
                    status: 200,
                    data: "success"
                });
            }else{
                res.json({
                    status: 200,
                    data: "failed"
                });
            }
        }
    });
}

function updateUserPower(res, uname, power) {
    let sql = "UPDATE user SET user.power = ? WHERE uname = ?";
    let params = [power, uname];
    db.exec(sql, params, (err, result) => {
        if (err) {
            console.log('[DB UPDATE ERROR] - ', err.message);
            res.json({
                status: 500,
                data: '[DB UPDATE ERROR] - ' + err.message
            });
        } else {
            if(result.changedRows > 0){
                res.json({
                    status: 200,
                    data: "success"
                });
            }else{
                res.json({
                    status: 200,
                    data: "failed"
                });
            }
        }
    });
}

exports.CreateUser = createUser;
exports.CheckPassword = checkPassword;
exports.ChangePassword = changePassword;
exports.UpdateUserName = updateUserName;
exports.UpdateUserPower = updateUserPower;
exports.ListUsers = listUsers;