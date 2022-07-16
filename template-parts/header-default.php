<?php 
    use DoatKolom\NavWalker;
    use DoatKolom\Icons;
?>
<header class="py-1 lg:py-2 bg-white doatkolom-primary-header" data-show="0">
    <nav class="max-w-screen-xl mx-auto px-5 flex justify-between items-center">
        <a href="<?php echo esc_url( DOATKOLOM_HOME_URL ); ?>" class="bg-white lg:shadow-md lg:px-2 lg:rounded-xl inline-block">
            <picture>
                <img class="object-contain object-center doatkolom-nav-logo" width="80" height="80" src="<?php echo esc_url( DOATKOLOM_LOGO ) ?>" alt="main logo"/>
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

        <button id="doatkolom-menu-button" class="bg-transparent lg:bg-slate-200 rounded-full w-12 h-12 border-0 text-primary flex items-center justify-center cursor-pointer ease-linear duration-200">
            <?php Icons::gridDots() ?>
        </button>

    </nav>
</header>