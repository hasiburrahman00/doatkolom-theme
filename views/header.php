<?php 
use Doatkolom\Doatkolom;
use Doatkolom\App\NavWalker;
use Doatkolom\App\Icons;
use Doatkolom\App\Helper;
?>

<doatkolom-header>
    <header id="doatkolom-theme-header" class="py-2">
        <div class="px-3 sm:px-4 flex items-center justify-between">
            <a 
                href="<?php echo Doatkolom::site_url() ?>" 
                aria-label="doatkolom home page"
                class="lg:min-w-[130px]"
            >
                <picture>
                    <source 
                        srcset="<?php echo Doatkolom::url('assets/images/logos/doatkolom.svg') ?>"
                        media="(max-width: 450px)"
                        width="45"
                        height="45"
                    />
                    <img
                        loading="lazy"
                        src="<?php echo Doatkolom::url('assets/images/logos/doatkolom-full.svg') ?>"
                        width="185"
                        height="42"
                    />
                </picture>
            </a>
            <?php
                wp_nav_menu([
                    'menu'            => 'primary',
                    'theme_location'  => 'primary',
                    'menu_class'      => 'doatkolom-nav-ul block lg:flex lg:items-center lg:gap-x-12',
                    'container_class' => 'doatkolom-nav top-[56px] hidden left-0 bg-white absolute rounded-br-md rounded-bl-md w-full lg:rounded-br-none lg:rounded-bl-none lg:static lg:w-auto lg:bg-transparent lg:block',
                    'items_wrap'      => '<ul class="%2$s">%3$s</ul>',
                    'depth'           => 2,
                    'walker'          => new NavWalker(),
                    'fallback_cb'     => false,
                ]);
            ?>
            <div class="lg:min-w-[130px] flex justify-end gap-x-5">
                <?php if( Helper::isBlog() ): ?>
                <doatkolom-search-input 
                    value="<?php echo get_search_query() ?>" 
                    action="<?php echo Doatkolom::site_url()  ?>">
                </doatkolom-search-input>
                <?php endif; ?>
                <a 
                    class="inline-flex gap-1 primary-btn-bg text-white text-sm font-semibold pl-4 pr-6 py-2 rounded-lg transition-opacity duration-200 hover:opacity-95" 
                    aria-label="visit sign in page" 
                    href="<?php echo Doatkolom::sign_in_url() ?>"
                >
                    <?php 
                        Icons::user();
                    ?>
                    Account
                </a>
                <button class="breadcrumb-btn inline-block lg:hidden" aria-label="Open menu">
                    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="14" viewBox="0 0 19 14" fill="none">
                        <rect y="6" width="19" height="2" rx="1" fill="currentColor"/>
                        <rect width="19" height="2" rx="1" fill="currentColor"/>
                        <rect id="last-hamburger-line" x="9" y="12" width="10" height="2" rx="1" fill="currentColor"/>
                    </svg>
                </button>
            </div>
        </div>
    </header>
    <div class="header-overlay fixed top-0 left-0 h-full w-full z-40 hidden"></div>
</doatkolom-header>