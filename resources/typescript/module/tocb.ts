const $ = window.jQuery;

export default class TOCB {
    /**
     * if url has valid has then scroll to it
     */
    hashStatus: 'pending' | 'completed' | 'empty' = 'empty';
    #hasStatusTimeoutId: null | ReturnType<typeof setTimeout> = null;
    $content?: JQuery<HTMLElement>;
    $toc?: JQuery<HTMLElement>;
    tocHeadingsId: string[] = [];
    constructor() {
        this.$content = $('.doatkolom-post-content');
        this.$toc = $('.tocb');

        if (
            this.$content &&
            this.$content.length &&
            this.$toc &&
            this.$toc.length
        ) {
            this.init();
        }
    }

    private init() {
        this.getElements();
        this.updateHashStatus();
        this.events();
    }

    private getElements() {
        const $tocHeadings = this.$toc?.find('a');
        if ($tocHeadings && $tocHeadings.length) {
            $tocHeadings.each((_index, element) => {
                const $element = $(element);
                const href = $element.attr('href');
                if (href) {
                    this.tocHeadingsId.push(href);
                }
            });
        }
    }

    private updateHashStatus() {
        const hash = window.location.hash;
        if (hash && this.tocHeadingsId.includes(hash)) {
            this.hashStatus = 'pending';
        }
    }

    private activeHeading(hashId = '', smooth = true) {
        if (hashId) {
            const $heading = this.$toc?.find(`a[href="${hashId}"]`);
            if ($heading && $heading.length) {
                this.$toc?.find('a').removeClass('active');
                $heading.addClass('active');

                if (!smooth) return;

                this.$content?.find(hashId)[0]?.scrollIntoView({
                    behavior: 'smooth',
                    block: 'center',
                });

                if (this.#hasStatusTimeoutId)
                    clearTimeout(this.#hasStatusTimeoutId);

                this.#hasStatusTimeoutId = setTimeout(() => {
                    this.hashStatus = 'completed';
                }, 1000);
            }
        }
    }

    private clickEventHadlder(event: JQuery.ClickEvent) {
        event.preventDefault();
        const $element = $(event.currentTarget);
        const href = $element.attr('href');
        if (href) {
            window.history.replaceState(null, '', href);
            this.updateHashStatus();
            this.activeHeading(href);
        }
    }

    private isVisible($element: JQuery<HTMLElement>) {
        if ($element && $element.length) {
            const elementTop = $element.offset()?.top || 0;
            const elementBottom = elementTop + ($element.outerHeight() || 0);
            const viewportTop = $(window).scrollTop();
            const viewportBottom = viewportTop + $(window).height();
            return elementBottom > viewportTop && elementTop < viewportBottom;
        }
        return false;
    }

    private scrollEventHadlder() {
        if (this.hashStatus !== 'pending') {
            let isAnyVisible = false;
            const rectList: Record<string, DOMRect> = {};
            const hasActiveClass = this.$toc?.find('a.active').length;

            this.tocHeadingsId.forEach((hashId) => {
                const $heading = this.$content?.find(hashId);
                if ($heading && $heading.length) {
                    const isVisible = this.isVisible($heading);
                    rectList[hashId] = $heading[0]?.getBoundingClientRect()!;

                    if (isVisible) {
                        this.activeHeading(hashId, false);
                        isAnyVisible = true;
                    }
                }
            });

            if (!isAnyVisible && !hasActiveClass) {
                const keys = Object.keys(rectList);
                let lastVisibleHeadingId: string | undefined;
                keys.forEach((hashId) => {
                    const rect = rectList[hashId]!;
                    if (rect.top <= 0) {
                        lastVisibleHeadingId = hashId;
                    }
                });

                if (lastVisibleHeadingId) {
                    setTimeout(() => {
                        this.activeHeading(lastVisibleHeadingId);
                    }, 300);
                    isAnyVisible = true;
                }
            }
        }
    }

    private events() {
        /**
         * on initial page load if url has valid hash then scroll to it
         */
        if (this.hashStatus === 'pending') {
            setTimeout(() => {
                this.activeHeading(window.location.hash);
            }, 300);
        }

        /**
         * on click update url hash without adding new history
         */
        this.$toc?.on('click', 'a', this.clickEventHadlder.bind(this));
        /**
         * on scroll update active heading
         */
        this.scrollEventHadlder();
        $(window).on('scroll', this.scrollEventHadlder.bind(this));
    }
}
