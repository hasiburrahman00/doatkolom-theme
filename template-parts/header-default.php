<?php 
    use DoatKolom\NavWalker;
?>
<header class="py-1 lg:py-2 bg-white doatkolom-primary-header" data-show="0">
    <nav class="max-w-screen-xl mx-auto px-5 flex justify-between items-center">
        <a href="<?php echo esc_url( DOATKOLOM_HOME_URL ); ?>" class="bg-white lg:shadow-md lg:px-2 lg:rounded-xl inline-block">
            <picture>
                <img class="w-12 h-12 lg:w-20 lg:h-20 object-contain object-center doatkolom-nav-logo" width="80" height="80" src="<?php echo esc_url( DOATKOLOM_LOGO ) ?>" alt="main logo"/>
            </picture>
        </a>

        <?php
            wp_nav_menu([
                'menu'            => 'primary',
                'theme_location'  => 'primary',
                'menu_class'      => 'doatkolom-nav list-none flex flex-col lg:flex-row p-10 lg:p-0 lg:inline-flex items-baseline lg:gap-x-8 lg:flex-wrap',
                'container_class' => 'hidden lg:block doatkolom-main-nav',
                'items_wrap'      => '<ul id="doatkolom-nav-menu" class="%2$s">%3$s</ul>',
                'depth'           => 5,
                'walker'          => new NavWalker(),
                'fallback_cb'     => false,
            ]);
        ?>

        <button id="doatkolom-menu-button" class="bg-slate-200 rounded-full w-12 h-12 border-0 text-primary flex items-center justify-center cursor-pointer hover:bg-primary hover:text-white ease-linear duration-200">
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="22" height="22" x="0px" y="0px" viewBox="0 0 56 56">
                <g>
                    <path fill="currentColor" d="M8,40c-4.411,0-8,3.589-8,8s3.589,8,8,8s8-3.589,8-8S12.411,40,8,40z"/>
                    <path fill="currentColor" d="M28,40c-4.411,0-8,3.589-8,8s3.589,8,8,8s8-3.589,8-8S32.411,40,28,40z"/>
                    <path fill="currentColor" d="M48,40c-4.411,0-8,3.589-8,8s3.589,8,8,8s8-3.589,8-8S52.411,40,48,40z"/>
                    <path fill="currentColor" d="M8,20c-4.411,0-8,3.589-8,8s3.589,8,8,8s8-3.589,8-8S12.411,20,8,20z"/>
                    <path fill="currentColor" d="M28,20c-4.411,0-8,3.589-8,8s3.589,8,8,8s8-3.589,8-8S32.411,20,28,20z"/>
                    <path fill="currentColor" d="M48,20c-4.411,0-8,3.589-8,8s3.589,8,8,8s8-3.589,8-8S52.411,20,48,20z"/>
                    <path fill="currentColor" d="M8,0C3.589,0,0,3.589,0,8s3.589,8,8,8s8-3.589,8-8S12.411,0,8,0z"/>
                    <path fill="currentColor" d="M28,0c-4.411,0-8,3.589-8,8s3.589,8,8,8s8-3.589,8-8S32.411,0,28,0z"/>
                    <path fill="currentColor" d="M48,16c4.411,0,8-3.589,8-8s-3.589-8-8-8s-8,3.589-8,8S43.589,16,48,16z"/>
                </g>
            </svg>
        </button>

    </nav>
</header>