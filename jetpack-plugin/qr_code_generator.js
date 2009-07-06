jetpack.statusBar.append({
  html: "<img src='http://www.stridesforshelter.com/content/logo.png' />",
  onReady: function(widget){
    $(widget).click(function(){
      jetpack.tabs.open( 'http://chart.apis.google.com/chart?cht=qr&chs=225x225&chl=' + escape( jetpack.tabs.focused.url ) )
      jetpack.tabs[ jetpack.tabs.length - 1 ].focus( );
    });
  },
  width: 15
});
