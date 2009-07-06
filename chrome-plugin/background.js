// Executes within scope of current loaded
// page.
getPageUrl( );

window.addEventListener( "focus", getPageUrl );

function getPageUrl( ) {
    if( window == top ) {
        chrome.extension.connect( ).postMessage({
            "url" : window.location.href,
        });
    }
}
