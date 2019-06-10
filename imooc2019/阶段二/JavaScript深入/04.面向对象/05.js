//混合模式 :构造+原型
function Blog(name,url,friend){
    this.name=name;
    this.url=url;
    this.friend=friend
}
Blog.prototype={
    test:'awt',
    showinfo:function(){
        console.log(this.name+'---'+this.friend);        
    }
}
