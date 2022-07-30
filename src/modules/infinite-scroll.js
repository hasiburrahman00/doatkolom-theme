import Helper from "../utils/Helper";
const $ = window.jQuery;

export default class InfiniteScroll {
    
    constructor() {
        const self          = this;
        self.$root          = $('#doatkolom-photo-gallery-root');
        self.currentPage    = 0;
        self.totalPage      = 5;
        self.version        = doatkolom_object.api_version;
        self.base           = doatkolom_object.wp_json;
        self.prefix         = doatkolom_object.prefix;
        self.api_url        = self.base + self.prefix + '/' + self.version + '/settings/galleries';
        self.data           = [];

        $.ajax( self.api_url, {
            success( data, status, xhr ) {
                self.data = data.data;
                
                if( self.$root.length > 0 ) {
                    self.loadNextBatch();
                    Helper.onScroll(()=> {
                        const end = (self.$root.outerHeight() + self.$root.offset().top) - (innerHeight * 1.5);
                        if ( scrollY < end || self.currentPage >= self.totalPage ) return;
                            self.loadNextBatch();
                    })
                }
            },

            error(xhr) {
                console.log(xhr)
                console.log('error')
            },

            complete() {
                self.$root.find('#gallery-loader').remove();
            }
        })

        
    }

    // call api
    loadNextBatch(batchSize = 10) {
        const self = this;
        self.currentPage++

        const start = (self.currentPage - 1) * batchSize;
        const end   = (self.currentPage * batchSize) - 1;

        for( let i = start; i <= end; i++ ) {
            if( self.data[i] ) {
                const element = self.getElement(self.data[i]);
                self.$root.append(element);
            }
        }
    }

    // prepare gallery single image
    getElement( data ) {
        const element = document.createElement("div");
        element.className = "element-list__item";
        element.innerHTML = `
            <picture>
                <img width="250" height="250" class="w-full h-full max-h-[120px] sm:max-h-[180px] md:max-h-[250px] object-cover border border-solid border-border rounded-md lazyload" data-src="${data.image_url}" alt="gallery image"/>
            </picture>
        `
        return element;
    }
}
