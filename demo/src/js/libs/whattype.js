//判断是什么类型
function isType(obj, type) { //也可以传入两个值
    if (obj != "") { //没去空格
        console.log(Object.prototype.toString.call(obj));
        console.log(`[Object ${type}]`)
        return Object.prototype.toString.call(obj) == `[object ${type}]`;
    } else {
        alert("传入的值不能为空");
    }
}