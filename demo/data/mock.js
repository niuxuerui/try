var data1 = require("./data1.json"),
    data2 = require("./data2.json");

//获取过来的数据直接是对象格式的


var dataobj = {
    "/show?id=0": data2['data']["xiang"][0],
    "/show?id=1": data2['data']["xiang"][1],
    "/show?id=2": data2['data']["xiang"][2],
    "/show?id=3": data2['data']["xiang"][3]
}

module.exports = function(url) {
    if (url) {
        return dataobj[url];
    } else {
        return { "err": "对不起获取数据报错了" }
    }
}