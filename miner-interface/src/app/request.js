import axios from "axios";
import qs from 'qs';

const server = "http://127.0.0.1:8000/api/";

function request(req, params, callback){
    if(params == null){
        axios.post(server + req).then(function(response) {
            callback(response.data);
        }).catch(function(error) {
            callback({status:500, data: error});
        });
        return;
    }
    axios.post(server + req, qs.stringify(params)).then(function(response) {
        callback(response.data);
    }).catch(function(error) {
        callback({status:500, data: error});
    });
}

export default request;
