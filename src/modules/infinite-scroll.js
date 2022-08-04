import Helper from "../utils/Helper";

const $ = window.jQuery;
const worker = new Worker(doatkolom_object.uri + "/assets/js/image-worker.js");
export default class InfiniteScroll {
    
    constructor() {
        const self          = this;
        self.$root          = $('#doatkolom-photo-gallery-root');
        self.currentPage    = 0;
        self.totalPage      = 0;
        self.perPage        = 6;
        self.version        = doatkolom_object.api_version;
        self.base           = doatkolom_object.wp_json;
        self.prefix         = doatkolom_object.prefix;
        self.api_url        = self.base + self.prefix + '/' + self.version + '/settings/galleries';
        self.data           = [];
        self.loading        = false;

        if( self.$root.length === 0 ) return;

        $.ajax( self.api_url, {
            
            success( data, status, xhr ) {
                self.totalPage  = Math.ceil(data.data.length / self.perPage);
                self.data       = data.data;
                self.skeleton   = self.$root.find('#gallery-loader').clone();
                if( data.data.length > 0 ) {
                    self.loadNextBatch();
                }
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
            const end = self.getGalleryEnd.call(self);
            if ( self.loading || scrollY < end || self.currentPage >= self.totalPage ) return;
            self.loadNextBatch();
        })
    }


    //gallery end position
    getGalleryEnd() {
        return (this.$root.outerHeight() + this.$root.offset().top) - (innerHeight ) 
    }

    // call api
    loadNextBatch() {
        const self = this;
        self.currentPage++
        self.loading    = true;
        const start     = (self.currentPage - 1) * self.perPage;
        const end       = (self.currentPage * self.perPage) - 1;
        
        if( this.currentPage > 1 ) {
            self.$root.append( self.skeleton );
        }

        worker.postMessage({
            data: self.data, start, end
        });

        worker.onmessage = async (e) => {
            self.$root.find('#gallery-loader').remove();
            if( e.data.length > 0 ) {
                self.loading = false;
            }

            e.data.map( blobImage => {
                self.createImage( blobImage, img => {
                    self.$root.append(img);
                })
            })

           setTimeout(() => {
                const galleryEnd = self.getGalleryEnd.call(self);
                if( !self.loading && galleryEnd > 0 && scrollY > galleryEnd ) {
                    self.loadNextBatch();
                }
           }, 10);
            
        }
    }

    // prepare gallery single image
    createImage(url, afterloading) {
        const img = new Image();
        img.onload = () => {
            const div = document.createElement("div");
            const 
                picture = document.createElement("picture");
                picture.appendChild(img);
                div.appendChild(picture);
                afterloading(div);
        };
        
        img.src         = url;
        img.width       = 250
        img.height      = 280
        img.classList   = "w-full h-full max-h-[200px] sm:max-h-[280px] object-cover border border-solid border-border rounded-md";
        img.alt         = ""
    }
}
