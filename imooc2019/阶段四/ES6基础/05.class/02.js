class Player{
    constructor(container){
        this.container=document.querySelector(container)
        this.songsList=[]; //歌单列表
        this.dom=null;  //用于存放dom
        this.audio=new Audio()
        this.getSongs()
    }

    getSongs(){
        this.songsList=[
            {
                cover:''
            }
        ]
    }
}