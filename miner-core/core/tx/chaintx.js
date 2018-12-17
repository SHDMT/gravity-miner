
let rpc = require("../drive/grpc");

function getinfo(res){
    rpc.getClient().GetBlockChainInfo({}, (err, info)=>{
        if(err){
            res.json({
                status: 500,
                data: err
            });
            return;
        }
        rpc.getClient().IsCommittee({}, (err, committee) => {
            if(err){
                res.json({
                    status: 500,
                    data: err
                });
                return;
            }
            res.json({
                status: 200,
                data: {
                    info,
                    isCommittee: committee.result
                }
            });
        });
        
    });
    
}

exports.Getinfo = getinfo;