jetpack.statusBar.append({
  html: <>
    <img src="http://github.com/scottferg/QR-Code-Jetpack-Plugin/raw/0a0e141263c7c468efbd293a83858369203e899b/logo.png"/>
  </>,
  onReady: function(widget){
    $(widget).click(function(){
      jetpack.tabs.open( 'http://chart.apis.google.com/chart?cht=qr&chs=225x225&chl=' + escape( jetpack.tabs.focused.url ) )
      jetpack.tabs[ jetpack.tabs.length - 1 ].focus( );
    });
  },
  width: 15
});
