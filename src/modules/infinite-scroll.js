import Helper from "../utils/Helper";
const $ = window.jQuery;

export default class InfiniteScroll {
    
    constructor() {
        const self          = this;
        self.$root          = $('#doatkolom-photo-gallery-root');
        self.currentPage    = 0;
        self.totalPage      = 1;
        self.perPage        = 6;
        self.version        = doatkolom_object.api_version;
        self.base           = doatkolom_object.wp_json;
        self.prefix         = doatkolom_object.prefix;
        self.api_url        = self.base + self.prefix + '/' + self.version + '/settings/galleries';
        self.data           = [];
        self.loading        = new Set();

        if( self.$root.length === 0 ) return;

        $.ajax( self.api_url, {
            
            success( data, status, xhr ) {
                self.totalPage  = Math.ceil(data.data.length / self.perPage);
                self.data       = data.data;
                self.skeleton   = self.$root.find('#gallery-loader').clone();
                self.$root.find('#gallery-loader').remove();
                self.loadNextBatch();
            },

            error(xhr) {
                console.log(xhr)
                console.log('error')
            },

            complete() {
                window.scrollTo(0, 0);
            }
        })

        // load next after after scolling to the bottom
        Helper.onScroll(()=> {
            const end = self.getGalleryEnd.bind(self);
            if ( self.loading.size !== 0 || scrollY < end || self.currentPage >= self.totalPage ) return;
            self.loadNextBatch();
        })

    }

    //gallery end position
    getGalleryEnd() {
        return (this.$root.outerHeight() + this.$root.offset().top) - (innerHeight * 1.5)
    }

    // call api
    loadNextBatch() {
        const self = this;
        self.currentPage++

        const start = (self.currentPage - 1) * self.perPage;
        const end   = (self.currentPage * self.perPage) - 1;

        for( let i = start; i <= end; i++ ) {
            if( self.data[i] ) {
                self.loading.add( `img-${self.data[i].image_id}-${i}` );
                const element = self.getElement(self.data[i], i);
                self.$root.append(element);
            }
        }

        if( self.currentPage < self.totalPage ) {
            self.$root.append( self.skeleton );
        } else {
            self.$root.find('#gallery-loader').remove();
        }

        // load next batch after current image loading
        $('.doatkolom-gallery-image-item').on('load', function() {
                    
            this.classList.remove('lazyloading');
            this.classList.add('lazyloaded');
            self.loading.delete( this.dataset.id );

            const end = self.getGalleryEnd.bind(self);
            if( self.loading.size === 0 && scrollY > end ) {
                self.loadNextBatch();
            }
        })
    }

    // prepare gallery single image
    getElement( data, index ) {
        const element = document.createElement("div");

        element.innerHTML = `
            <picture>
                <img width="250" height="280" data-id="img-${data.image_id}-${index}" class="doatkolom-gallery-image-item lazyloading w-full h-full max-h-[200px] sm:max-h-[280px] object-cover border border-solid border-border rounded-md" src="${data.image_url}" alt="gallery image"/>
            </picture>
        `
        return element;
    }
}
