//标准json格式 key和value都是双引号,不可以用单引号

let json={"name":"json","age":18}

console.log(JSON.stringify(json));


let jsonstr='{"name":"json","age":"12"}';
console.log(JSON.parse(jsonstr));
