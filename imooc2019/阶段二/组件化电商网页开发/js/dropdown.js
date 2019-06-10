(function($){
    'use strict'

    function dropdown(elem){
        var $elem=$(elem),
            activeClass=$elem.data('active')+'-active';
            $elem.hover(function(){
                $elem.addClass(activeClass)
            },function(){
                $elem.removeClass(activeClass)  
            })
    }

    $.fn.extend({
        dropdown:function(){
        //     return this.map(function(){
        //         dropdown(this)
            return this.each(function(){
            dropdown(this)               
            })
        // 
            // return $.each(this,function(i,val){
            //     dropdown(val)
            // })
        }
    })
    
    $('.dropdown').dropdown()
})(jQuery)