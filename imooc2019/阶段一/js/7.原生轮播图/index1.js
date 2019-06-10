window.onload=function(){
    //  声明全局变量
    var index=0;//当前显示图片的索引，默认值为0；
    var prev=byId('prev'), //上一张
        timer=null,
        main=byId('main')
        next=byId('next'), //下一张
        pics=byId('banner').getElementsByTagName("div"),
        dots=byId('dots').getElementsByTagName("span"),
        banner=byId('banner'),
        menuContent=byId("menu-content"),
        menuItems=menuContent.getElementsByClassName('menu-item'),
        subMenu=byId('sub-menu'),
        innerBox=subMenu.getElementsByClassName('inner-box'),
        size=pics.length
        console.log(size);
        
        


    //封装getElementById()
    function byId(id){
        return typeof(id)==="string"?document.getElementById(id):id
    }
    //封装通用事件绑定方法
    //element绑定事件的dom元素
    //事件名
    //事件处理程序
    function addHandler(element,type,handler){
        //非IE浏览器
        if(element.addEventListener){
            element.addEventListener(type,handler,true)
        //IE浏览器支持DOM2
        }else if(element.attachEvent){
            element.attachEvent('on'+type,handler)
        //IE浏览器不支持DOM2级
        }else{
            element["on"+type]=handler
        }
    }

    //清除定时器，停止自动轮播
    function stopAutoPlay(){
        if(timer){
            clearInterval(timer)
        }
    }


    //开启自动轮播
    function startAutoPlay(){
        timer=setInterval(function(){
            index++;
            if(index>=size)index=0;
            changeImg()
        },3000)
    }

    //切换图片
    function changeImg(){
        //遍历所有图片，将图片隐藏，将圆点上的类清除
        for(var i=0;i<size;i++){
            pics[i].style.display="none";
            dots[i].className=""
        }
        //显示当前图片
        pics[index].style.display="block";
        //当前圆点高亮显示
        dots[index].className="active"
    }

    //点击下一张按钮显示下一张图片
    addHandler(next,'click',function(e){
        e.preventDefault();        
        index++;
        if(index>=size) index=0
        // console.log(index);
        changeImg()
    })

    //点击上一张按钮显示上一张图片
    addHandler(prev,'click',function(e){
        e.preventDefault();        
        index--;
        if(index<0) index=size-1
        // console.log(index); 
        changeImg()       
    })

    //点击圆点索引切换图片
    for(var d=0;d<size;d++){
        dots[d].index=d
        addHandler(dots[d],'click',function(){
            index=this.index
            // alert(index)
            changeImg()
            
        })
    }
    //鼠标滑过主菜单
    for(var m=0,mlen=menuItems.length;m<mlen;m++){
        menuItems[m].index=m
        addHandler(menuItems[m],'mouseover',function(){
            //显示子菜单所在的背景
            subMenu.className="sub-menu"
            //给所有主菜单定义属性，表明它的索引
            //遍历所有子菜单innerBox，将它们隐藏
            for(var i=0;i<mlen;i++){
                //隐藏所有子菜单
                innerBox[i].style.display="none";
                //所有主菜单取消背景
                menuItems[i].style.background='none'
            }
            //找到当前子菜单，让其显示出来
            innerBox[this.index].style.display='block';
            menuItems[this.index].style.background="rgba(0,0,0,0.1)"
        })
    }
    //鼠标离开banner，隐藏子菜单
    addHandler(banner,'mouseout',function(){
            subMenu.className="sub-menu hide"
    })

    //鼠标离开主菜单menuContent，隐藏子菜单
    addHandler(menuContent,'mouseout',function(){
        subMenu.className="sub-menu hide"
    })
    
    //鼠标滑入子菜单时，子菜单显示
    addHandler(subMenu,'mouseover',function(){
        this.className="sub-menu"
    })

    //鼠标离开子菜单，子菜单隐藏
    addHandler(subMenu,'mouseout',function(){
        this.className="sub-menu hide"
    })


    //鼠标滑入main，停止轮播
    addHandler(main,'mouseover',stopAutoPlay)

    //鼠标离开main，继续轮播
    addHandler(main,'mouseout',startAutoPlay)


    //自动开启轮播
    startAutoPlay()

}