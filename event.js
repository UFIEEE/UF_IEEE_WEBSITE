

     // ID of the Google Spreadsheet
var spreadsheetID = "1sxbm87xt8qLtqdeATXVekCIxcxobadw20c-ZFUsg-rk";

     // Make sure it is public or set to Anyone with link can view 
var url = "https://spreadsheets.google.com/feeds/list/1sxbm87xt8qLtqdeATXVekCIxcxobadw20c-ZFUsg-rk/od6/public/values?alt=json";

$.getJSON(url, function (data) {
    var entry = data.feed.entry;

    $(entry).each(function () {
        // Column names are name, age, etc.
        $('.slides-container').append('<li><div class="slider_area"><div id="slides"><ul class="slides-container"><li><div class="slider_overlay"></div><img src="img/technology2.jpg" alt="img"><div class="slider_caption"><h2>' + this.gsx$row1.$t + '</h2><p>' + this.gsx$age.$t + '</p></div></li>');
    
         
    });

});

