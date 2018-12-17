const PROTO_PATH =__dirname+'/../proto/core.proto';
const grpc = require('grpc');
let packageName = grpc.load(PROTO_PATH).corerpc;
let cl;
let connect=(host,port)=>{
    cl = new packageName.CoreService(`${host}:${port}`, grpc.credentials.createInsecure());
    // 监听连接超时
    cl.waitForReady(Date.now() + 10000, error => {
        if (error) {
            console.error('transaction catched error', error);
        }
    });
};

let getClient = ()=>{
    return cl;
};

let client={
    connect,
    getClient,
}
module.exports =  client;