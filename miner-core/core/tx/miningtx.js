let db = require("../drive/database");
let rpc = require("../drive/grpc");

function listMiningSpeedRecord(res, startTime, endTime){
    let endTimeSql = endTime;
    if(endTime == null){
        endTimeSql = new Date();
    }
    let sql = `SELECT * FROM mining_record WHERE time between '${startTime}' AND '${endTimeSql}'  ORDER BY time DESC`;
    let params = [startTime, endTimeSql];
    db.exec(sql, (err, result) => {
        if (err) {
            console.log('[DB QUERY ERROR] - ', err.message);
            res.json({
                status: 500,
                data: '[DB QUERY ERROR] - ' + err.message
            });
        } else {
            res.json({
                status: 200,
                data: result
            });
        }
    });
}

function recordMiningSpeedSQL(speed, callback){
    let now = new Date();
    let sql = "INSERT INTO mining_record (time, speed) VALUES (?, ?)";
    let params = [now, speed];
    db.exec(sql, params, callback);
}

function updateMiningAddr(res, addr){
    let sql = "UPDATE mining_state SET mining_state.value = ? WHERE name = ?";
    let params = [addr, "address"];
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

function getMiningAddr(res){
    let sql = "SELECT * FROM mining_state WHERE name = ?";
    let params = ["address"];
    db.exec(sql, params, (err, result) => {
        if (err || result.length < 1) {
            console.log('[DB QUERY ERROR] - ', err.message);
            res.json({
                status: 500,
                data: '[DB QUERY ERROR] - ' + err.message
            });
        } else {
            res.json({
                status: 200,
                data: result[0].value
            });
        }
    });
}

function startMining(res, ncore, address){
    let params = {threadNum: parseInt(ncore), address: address};
    rpc.getClient().StartMining(params, (err, result)=>{
        if(err){
            res.json({
                status: 500,
                data: err
            });
            return;
        }
        res.json({
            status: 200,
            data: result
        });
    });
}

function stopMining(res){
    rpc.getClient().StopMining({}, (err, result)=>{
        if(err){
            res.json({
                status: 500,
                data: err
            });
            return;
        }
        res.json({
            status: 200,
            data: "success"
        });
    });
}

function getCurrentSpeed(res){
    rpc.getClient().MiningSpeed({}, (err, result)=>{
        if(err){
            console.log("Get mining speed error", err);
            return;
        }
        let speed = result.miningSpeed;
        res.json({
            status: 500,
            data: speed
        });
    });
}

function recordMiningSpeed(){
    rpc.getClient().IsMining({}, (err, result)=>{
        if(err || !result.result){
            return;
        }
        
        rpc.getClient().MiningSpeed({}, (err, result)=>{
            if(err){
                console.log("Get mining speed error", err);
                return;
            }
            let speed = result.miningSpeed;
            recordMiningSpeedSQL(speed, err => {
                if (err) {
                    console.log('[DB INSERT ERROR] - ', err.message);
                }
            });
        });
    });
}

function isMining(res){
    rpc.getClient().IsMining({}, (err, result)=>{
        if(err){
            res.json({
                status: 500,
                data: err
            });
            return;
        }
        res.json({
            status: 200,
            data: result.result
        });
    });
    
}

exports.RecordMiningSpeed = recordMiningSpeed;
exports.ListMiningSpeedRecord = listMiningSpeedRecord;
exports.UpdateMiningAddr = updateMiningAddr;
exports.GetMiningAddr = getMiningAddr;
exports.StartMining = startMining;
exports.StopMining = stopMining;
exports.IsMining = isMining;
exports.GetCurrentSpeed = getCurrentSpeed;