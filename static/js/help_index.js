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
    });

    $(".search-area span").click(function(){
        $(".search_page").removeClass("sidebarshow").addClass("sidebarhide");
        $("body").removeClass("disablescroll");
        $("#search-txt").val("");
        $("#search-res-ul").html("");
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
                    console.log("name=", name);
                    name = name.replace(val,'<span>' + val + '</span>');
                    console.log("name2=", name );
                    htmlStr.push('<li><a href="'+ list.href + "/" + item.childrenRank + '.html">' + name + '</a></li>');
                }
                if((item.shortName).indexOf(val) >= 0){
                    var name = item.shortName;
                    console.log("name=", name);
                    name = name.replace(val,'<span>' + val + '</span>');
                    console.log("name2=", name );
                    htmlStr.push('<li><a href="'+ list.href + "/" + item.childrenRank + '.html">' + name + '</a></li>');
                }
            });
        });
        $("#search-res-ul").html(htmlStr.join(""));
    });
    $(".reset").click(function(){
        $("#search-txt").val("");
        $(".reset").hide();
    });
});
