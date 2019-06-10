

        var xmScore=4;
        var xhScore=xmScore;
        xhScore++;
        console.log(xhScore);//5
        console.log(xmScore);//4  不受影响

        var xm={
            age:18,
            score:4
        }
        var xh=xm  //将引用内存地址赋值给xh，
        xh.score++;
        console.log(xh.score);//指向的是相同的内存
        console.log(xm.score);
