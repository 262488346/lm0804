/**
 * Created by Administrator on 2016/9/3.
 */

$(function(){
    $(".search").click(function(){
        $(".search_page").show();
        $(".search_page").removeClass("sidebarhide").addClass("sidebarshow");
        $("body").addClass("disablescroll");
        $("#search-txt").val("");
        $("#search-res-ul").html("");
        $("#no-res").html("");
    });

    $(".search-area span").click(function(){
        $(".search_page").removeClass("sidebarshow").addClass("sidebarhide");
        $("body").removeClass("disablescroll");
        $("#search-txt").val("");
        $("#search-res-ul").html("");
    });
    $(".search-btn").click(function(){
        var val = $.trim($("#search-txt").val());
        if(val.length == 0){
            return;
        }
        if($("#search-res-ul").find("li").length <= 0){
            var noRes = [];
            noRes.push('<div class="no-res-bg"><span><i></i></span></div>');
            noRes.push('<p class="no-res-txt">没有搜索结果</p>');
            noRes.push('<p class="no-change-txt">您可以更换关键词重新搜索</p>');
            $("#no-res").html(noRes.join(""));
        }else{
            $("#no-res").html("");
        }
    });
    var html = [];
    $.each(jsonDate, function(i, item){
        html.push('<div class="model-'+ (i+1) +' model"><div class="left"><div class="img-bg"></div>');
        html.push('<span><a href="help_list.html?type=' + item.href + '">更多 <i></i></a></span></div><div class="right"><ul>');
        $.each(item.children, function(j, list){
            if(list.isShowIndex){
                html.push('<li><a href="'+ item.href +'/'+ list.childrenRank + '.html">'+ list.shortName +'</a></li>');
            }
        });
        html.push('</ul></div></div>');
    });
    $("#help-content").html(html.join(""));
    $("#search-txt").on("keyup input", function () {
        $("#no-res").html("");
        var _this = $(this);
        var val = $.trim(_this.val());
        if(val.length <= 0){
            $("#search-res-ul").html("");
            $(".reset").hide();
            return;
        }

        $(".reset").show();

        var htmlStr = [];
        $.each(jsonDate, function(i, list){
            $.each(list.children, function(j, item){
                if((item.name).indexOf(val) >= 0){
                    var name = item.name;
                    name = name.replace(val,'<span>' + val + '</span>');
                    htmlStr.push('<li><a href="'+ list.href + "/" + item.childrenRank + '.html">' + name + '</a></li>');
                }
                if((item.shortName).indexOf(val) >= 0){
                    var name = item.shortName;
                    name = name.replace(val,'<span>' + val + '</span>');
                    htmlStr.push('<li><a href="'+ list.href + "/" + item.childrenRank + '.html">' + name + '</a></li>');
                }
            });
        });
        $("#search-res-ul").html(htmlStr.join(""));
    });
    $(".reset").click(function(){
        $("#search-txt").val("");
        $(".reset").hide();
        $("#search-res-ul").html("");
    });
});
