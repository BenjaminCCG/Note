//数组去重
let ary=[1,1,2,3,1,2,1,11,22,15,12,8]
function ubique(ary){
    return [...new Set(ary)]
    // return Array.frrom(new Set(ary))
}
let ary1=[1,3,5,7,8,9]
let ary2=[2,4,6,7,8,9]
//并集
function add(ary1,ary2){
   return[...new Set([...ary1,...ary2])]
}
console.log(add(ary1,ary2));


//交集
function same(ary1,ary2){
    return ary1.filter(item=>ary2.includes(item))
 }
 console.log(same(ary1,ary2));
//差集
function diff(ary1,ary2){
    return add(ary1,ary2).filter(item=>!same(ary1,ary2).includes(item))
 }
 console.log(diff(ary1,ary2));