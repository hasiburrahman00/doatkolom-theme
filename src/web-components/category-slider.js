class CategorySlider extends HTMLElement {
    
    constructor() {
        super();
    }

    connectedCallback() {
        const self = this;
        jQuery(function($){
            self.$scope     = $(self);
            self.$nextBtn   = self.$scope.find('.next-btn');
            self.$prevBtn   = self.$scope.find('.prev-btn');
            self.$children  = self.$scope.children();
            self.innerHTML  = `<ul style="display:flex !important" class="doatkolom-cat-slider items-center list-none"></ul>`
            self.childrenHandler();
        })
    }

    childrenHandler() {

        this.$children
        .attr('class', 'text-center px-2')
        .find('a').attr('class', 'whitespace-nowrap px-3 py-2 rounded-full text-sm font-secondary no-underline inline-block bg-light_gray border border-solid border-border text-black hover:bg-primary_light hover:text-primary hover:border-primary');

        this.$scope.find('.doatkolom-cat-slider').html(this.$children)
        .slick({
            slidesToShow    : 4,
            slidesToScroll  : 1,
            autoplay        : true,
            nextArrow       : this.nextBtn(),
            prevArrow       : this.prevBtn(),
            centerMode      : true,
            autoplaySpeed   : 1500,
            centerPadding   : "0px",
            variableWidth   : true,
            responsive: [
                {
                  breakpoint: 992,
                  settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                  }
                },
                {
                  breakpoint: 768,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                  }
                },
                {
                  breakpoint: 576,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                  }
                }
            ]
        })
    }

    nextBtn() {
        return `<div class="px-1 py-1 bg-white">
                    <button class="bg-primary_light text-primary w-[40px] h-[40px] transition duration-200 ease-linear border-none rounded-full hover:bg-primary hover:text-white cursor-pointer">
                        <svg width="25" height="25" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M1171 960q0 13-10 23l-466 466q-10 10-23 10t-23-10l-50-50q-10-10-10-23t10-23l393-393-393-393q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l466 466q10 10 10 23z" fill="currentColor"/></svg>
                    </button>
                </div>`
    }

    prevBtn() {
        return `<div class="px-1 py-1 bg-white">
                    <button class="bg-primary_light text-primary w-[40px] h-[40px] transition duration-200 ease-linear border-none rounded-full hover:bg-primary hover:text-white cursor-pointer">
                    <svg width="25" height="25" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M1203 544q0 13-10 23l-393 393 393 393q10 10 10 23t-10 23l-50 50q-10 10-23 10t-23-10l-466-466q-10-10-10-23t10-23l466-466q10-10 23-10t23 10l50 50q10 10 10 23z" fill="currentColor"/></svg>
                    </button>
                </div>`
    }
    
}

if( !customElements.get( 'doatkolom-category-slider' ) ) {
    customElements.define('doatkolom-category-slider', CategorySlider);
}