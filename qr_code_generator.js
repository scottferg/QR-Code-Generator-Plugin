jetpack.statusBar.append({
  html: <>
    <img src="http://www.androidandme.com/favicon.png"/>
      <span id="count" style="position:absolute;left:4px;top:8px;font-size:10px;cursor: pointer;background-color:rgba(255,255,255, .8);"></span>
  </>,
  onReady: function(widget){
    $(widget).click(function(){
      jetpack.tabs.open( 'http://chart.apis.google.com/chart?cht=qr&chs=125x125&chld=H|0&chl=' + escape( jetpack.tabs.focused.url ) )
      jetpack.tabs[ jetpack.tabs.length - 1 ].focus( );
    });
  },
  width: 15
});
