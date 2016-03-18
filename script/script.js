// Code goes here

$(function() {
  $("[data-html-src]").each(function(i, el) {
    var interval = +$(el).data("reload");
    var updateEl = function updateEl() {
      $(el).load($(el).data("html-src"));
    };
    
    if(isNaN(interval)) {
      updateEl();
    } else {
      setInterval(updateEl, interval*1000);
      updateEl();
    }
  });
    $("[data-img-src]").each(function(i, el) {
    var interval = +$(el).data("reload");
    var updateEl = function updateEl() {
      var url = $(el).data("img-src");
      url += (url.indexOf("?") > -1 ? "&" : "?")+(+new Date());
      $(el).attr("src", url);
    };
    
    if(isNaN(interval)) {
      updateEl();
    } else {
      setInterval(updateEl, interval*1000);
      updateEl();
    }
  });
})