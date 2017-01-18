
 
 // ID of the Google Spreadsheet
 var spreadsheetID = "1sxbm87xt8qLtqdeATXVekCIxcxobadw20c-ZFUsg-rk";
 
 // Make sure it is public or set to Anyone with link can view 
 var url = "https://spreadsheets.google.com/feeds/list/" + spreadsheetID + "/od6/public/values?alt=json";
 
function loadData() {
  var url="https://docs.google.com/spreadsheet/pub?key=p_aHW5nOrj0VO2ZHTRRtqTQ&single=true&gid=0&range=A1&output=csv";
  
 $.getJSON(url, function(data) {
     var name = console.log(data.feed.entry['gsx$slider2']['$t']);
 $('#thirdSlide').append("testo" + console.log(data.feed.entry['gsx$slider2']['$t']));
  console.log(data);
 //loop
    
     //
 });
 
