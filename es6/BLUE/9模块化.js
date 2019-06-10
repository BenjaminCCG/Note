import * as mod from './8模块化'; //引入所有成员

import mod from 'xxx'          //引入default 成员        

import {a,b as name} from 'xxx'  //引入指定成员
        //给B取别名             
        
import 'xxx'                        //只引入文件 不引入成员

//异步引入
let p=import("./mod1") 

console.log(mod.a,mod.b,mod.c);
