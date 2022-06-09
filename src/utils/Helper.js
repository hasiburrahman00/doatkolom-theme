export default class Helper  {

    matchMediaView( width = 1024, callback = {} ) {
        if( Reflect.has( callback, 'before' ) && Reflect.has( callback, 'after' ) ) {
            const media = window.matchMedia(`(max-width: ${width}px)`);
            media.matches ? callback.before() : callback.after();
            media.addListener(function(){
                media.matches ? callback.before() : callback.after();
            });
        }
    }

}