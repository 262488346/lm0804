/**
 * Created by Administrator on 2016/9/3.
 */
$(function(){
    var type = getQueryString("type");
    var html = [];
    $.each(jsonDate, function(i, list){
        document.title = list.model;
        if(type == list.href){
            html.push('<ul>');
            $.each(list.children, function(j, item){
                html.push('<li><a href="'+ list.href + "/" + item.childrenRank+'.html">'+ item.name +'</a><i></i></li>');
            });
            html.push('</ul>');
        }
    });
    $("#help-list").html(html.join(""));
});