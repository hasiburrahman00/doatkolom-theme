import Helper from "../utils/Helper";
const $ = window.jQuery;

export default class InfiniteScroll {
    
    constructor() {
        const self          = this;
        self.$root          = $('#doatkolom-photo-gallery-root');
        self.currentPage    = 0;
        self.totalPage      = 5;

        if( self.$root.length > 0 ) {
            // call initial API
            self.loadNextBatch();
            // scroll handler
            Helper.onScroll(()=> {
                const end = (self.$root.outerHeight() + self.$root.offset().top) - (innerHeight * 1.5);
                if ( scrollY < end || self.currentPage >= self.totalPage ) return;
                    self.loadNextBatch();
            })
        }
    }

    // call api
    loadNextBatch(batchSize = 10) {
        const self = this;
        self.currentPage++

        const start = (self.currentPage - 1) * batchSize;
        const end   = (self.currentPage * batchSize) - 1;

        console.log('call api', self.currentPage)
        console.log('start', start)
        console.log('end', end)

        // loop through the data array
        while (batchSize--) {
          const element = self.getElement(batchSize);
          self.$root.append(element);
        }
    }

    // prepare gallery single image
    getElement(item) {
        const self = this;
        const element = document.createElement("div");
        element.className = "element-list__item";
        element.innerHTML = `
            <div>
                <p>page: ${self.currentPage}</p>
                <p>item: ${item}</p>
            </div>
        `
        return element;
    }
}
