// window.onload=function(){
//     let alist=document.getElementsByTagName('a');
//     let imglist=document.getElementsByTagName('img');
//     // for(var i=0;i<alist.length;i++){
//     //     alist[i].index=i;
//     //     alist[i].onclick=function(){
//     //         for(var  j=0;j<alist.length;j++){
//     //             imglist[j].style.display='none'
//     //         }
//     //         imglist[this.index].style.display='block'
//     //     }
//     // }
//     for(let i=0;i<alist.length;i++){        
//         alist[i].onclick=function(){
//             for(var  j=0;j<alist.length;j++){
//                 imglist[j].style.display='none'
//             }
//             imglist[i].style.display='block'
//         }
//     }
// }

$(function(){    
        // $.each($('a'),function(index,val){
        //     val.index=index
        //     $(val).click(function(){
        //         $('img').eq(val.index).css('display','block').siblings().css('display','none')
        //     })
        // })

        // $('a').click(function(){
        //     let i=$(this).index();
        //     $('img').eq(i).fadeIn(500).css('display','block').siblings().fadeOut(500).css('display','none')
        // })

        
        
        // var alinks=$('a');
        // for(var i=0;i<alinks.length;i++){
        //     alinks.eq(i).css({
        //         'background':'red',
        //         'border':'5px solid yellow',
        //         'color':'#fff'
        //     }).html('<i>七彩云南'+i+'</i>')
        //     // .text('云南旅游'+i)
        // }


        $('a').click(function(){
            $('img').eq($(this).index()).css({'opacity':'1'}).siblings().css({'opacity':'0'})
        })
})