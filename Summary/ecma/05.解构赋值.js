//1.数组
let [a,b,c]=['orange','apple','pear']
console.log(a,b,c);

let [,,x]=['orange','apple','pear']
console.log(x);

let [...y]=['orange','apple','pear']
console.log(y);

let [,,[o,p,q]]=['orange','apple',[1,2,3]]
console.log(o,p,q);

//2.对象
const player={
    nickname:'MATA丶川',
    master:'东海龙王',
    skill:[{
        skillName:'龙吟',
        mp:'100',
        time:6000
    },{
        skillName:'龙卷雨击',
        mp:'400',
        time:3000  
    },{
        skillName:'龙腾',
        mp:'900',
        time:60000  
    }]
}

const {master}=player;
const {skill:[skila,{skillName},{skillName:sklName}]}=player
console.log(sklName);

//3.字符串
const str='hello world'
const arr=[...str]
console.log(arr);
