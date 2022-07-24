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
    
    static blockScopeHandler() {
        window.doatkolomGutenbergInit = callback => {
            jQuery(function($){
                callback( $ );
                if( window.wp && window.wp.element ) return;
                $('.doatkolom-block-wrap').each((index, item) => {
                    const $item = $(item);
                    const type  = $item.data('type');
                    $(window).trigger( type, [ $item ] );
                })
            })
        }
    }

    static buildThresholdList( numSteps = 20 ) {
        let thresholds = [];

        for (let i=1.0; i<=numSteps; i++) {
          let ratio = i/numSteps;
          thresholds.push(ratio);
        }
      
        thresholds.push(0);
        return thresholds;
    }

    static onScroll( fn ) {
        const dom = document.querySelector('.interface-interface-skeleton__content') || document;
        dom.addEventListener('scroll', (ev) => {
            fn( ev.target.scrollTop || scrollY )
        })
    }

    static stringHighlight( str  = '' ) {
        str  = str.replace(/{{.+?}}/g, function(target){
            target = target.replace('{{', '<span class="doatkolom-highlight">');
            target = target.replace('}}', '</span>');
            return target
        });
        return str;
    }

}