<?php 
use Doatkolom\Doatkolom;
use Doatkolom\App\NavWalker;
?>

<doatkolom-header>
    <header class="bg-white py-2 lg:py-5 border-b border-slate-200">
        <div class="container mx-auto max-w-7xl px-3 sm:px-4 flex items-center justify-between">
            <a 
                href="<?php echo Doatkolom::site_url() ?>" 
                aria-label="doatkolom home page"
                class="lg:min-w-[130px]"
            >
                <picture>
                    <source 
                        srcset="<?php echo Doatkolom::url('assets/images/logos/doatkolom.svg') ?>"
                        media="(max-width: 400px)"
                        width="40"
                        height="40"
                    />
                    <img
                        loading="lazy"
                        src="<?php echo Doatkolom::url('assets/images/logos/doatkolom-full.svg') ?>"
                        width="206"
                        height="42px"
                    />
                </picture>
            </a>
            <?php
                wp_nav_menu([
                    'menu'            => 'primary',
                    'theme_location'  => 'primary',
                    'menu_class'      => 'doatkolom-nav-ul inline-flex items-center gap-x-6 xl:gap-x-10',
                    'container_class' => 'doatkolom-nav hidden lg:inline-block',
                    'items_wrap'      => '<ul class="%2$s">%3$s</ul>',
                    'depth'           => 2,
                    'walker'          => new NavWalker(),
                    'fallback_cb'     => false,
                ]);
            ?>
            <div class="lg:min-w-[130px] flex justify-end gap-x-5">
                <a 
                    class="text-sm px-3 py-1.5 md:px-5 md:py-2.5 border border-slate-300 lg:border-slate-500 text-slate-700 rounded-md transition-colors duration-300 hover:bg-primary/10 hover:text-primary hover:border-primary/30" 
                    aria-label="visit sign in page" 
                    href="<?php echo Doatkolom::sign_in_url() ?>"
                >
                    Account Login
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
</doatkolom-header>