/**
 * 
 * @learn https://javascript.info/xmlhttprequest
 * 
 */ 
 export default class Api_Base {
    nonce   = doatkolom_object.nonce;
    version = doatkolom_object.api_version 
    base    = doatkolom_object.wp_json;
    prefix  = doatkolom_object.prefix;
    
    call_api({endpoint, method, body, custom}, callback) {

        const _self = this;
        const url = _self.base + _self.prefix + '/' + _self.version + '/admin-settings/' + endpoint;

        const xhttp  = new XMLHttpRequest();

        xhttp.onload  = function() {  
            callback( xhttp.responseText )
        };
        
        xhttp.onerror = function() {
            alert("Request failed");
        };

        xhttp.open( method, custom ? endpoint : url, true );
        xhttp.setRequestHeader( 'X-WP-Nonce' , _self.nonce)
        xhttp.send( body );
    }

}