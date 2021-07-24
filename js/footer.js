/**
 * course页面.
 */
var footer = function(){
            init = function(){}
}
 var footer = (
    function(){
        var html =
        '<div class="bottom">'+
            '<div class="container clearfix">'+
            '<div class="left bottom_link">'+
            '<ul class="ln_our clear clearfix">'+
                '<li><a href="#" target="_blank">网站首页</a></li>'+
                '<li> <a href="#" target="_blank">联系我们</a></li>'+
                '<li><a href="#" target="_blank">关于我们</a></li>'+
                '<li> <a href="#" target="_blank">意见反馈</a></li>'+
                '<li> <a href="#" target="_blank">友情链接</a></li>'+
            '</ul>'+
        '<p class="clear ln_copy">Copyright 2021 LBDS All Rights Reserved | 鄂ICP备 xxxxxxxx号-1</p>'+
        '</div>'+
        '<div class="right bottom_netlink">'+
        '<div class="ln_copy_ewm"></div>'+
        '<ul class="ln_bottom_ewm">'+
            '<li><a href="#" class="ln_bottom_weixin"></a></li>'+
            '<li><a href="#" class="ln_bottom_weibo_content"></a></li>'+
            '<li><a href="#" class="ln_bottom_qq"></a></li>'+
        '</ul>'+
        '</div>'+
        '</div>'+
        '</div>', config={},init,createDom,bindEvents;
        init = function($container,json){
            config['$container'] = $container;
            config['json'] = json;
            createDom();
            bindEvents();
        };
        createDom = function(){
            config.$container.html(html);
        };
        bindEvents = function(){

              $('.ln_bottom_weixin').on('mouseover',function(){
                $('.ln_copy_ewm').fadeIn();
            })
            $('.ln_bottom_weixin').on('mouseout',function(){
                $('.ln_copy_ewm').fadeOut();
            })
        };
        return{init:init};

    }
)()