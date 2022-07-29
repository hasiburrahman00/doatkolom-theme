<?php
    use DoatKolom\Icons;
    use DoatKolom\NavWalker;
?>
<header class="py-1 lg:py-2 bg-white doatkolom-primary-header" data-show="0">
    <nav class="max-w-screen-xl mx-auto px-5 flex justify-between items-center">
        <a href="<?php echo esc_url( DOATKOLOM_HOME_URL ); ?>" class="inline-block">
            <picture>
                <img class="doatkolom-nav-logo h-auto w-auto max-h-[80px]" width="80" height="80" src="<?php echo esc_url( DOATKOLOM_LOGO ) ?>" alt="main logo"/>
            </picture>
        </a>

        <?php
            wp_nav_menu( [
                'menu'            => 'primary',
                'theme_location'  => 'primary',
                'menu_class'      => 'doatkolom-nav list-none flex flex-col lg:flex-row p-10 lg:p-0 lg:inline-flex items-baseline lg:gap-x-4 lg:flex-wrap',
                'container_class' => 'hidden lg:block doatkolom-main-nav',
                'items_wrap'      => '<ul id="doatkolom-nav-menu" class="%2$s">%3$s</ul>',
                'depth'           => 5,
                'walker'          => new NavWalker(),
                'fallback_cb'     => false
            ] );
        ?>

        <button class="doatkolom-menu-button bg-transparent lg:hidden lg:bg-primary_light rounded-full w-12 h-12 border-0 text-black flex items-center justify-center cursor-pointer ease-linear duration-200">
            <?php Icons::gridDots()?>
        </button>

        <!-- show for school -->
        <?php if ( !empty( get_doatkolom_theme_setting( 'doatkolom_app_template' ) ) && get_doatkolom_theme_setting( 'institution_type' ) !== 'doatkolom' ): ?>
            <button class="doatkolom-menu-button bg-transparent lg:inline-block lg:bg-primary_light rounded-full w-12 h-12 border-0 text-black flex items-center justify-center cursor-pointer ease-linear duration-200">
                <?php Icons::gridDots()?>
            </button>
        <?php elseif ( get_doatkolom_theme_setting( 'institution_type' ) !== 'doatkolom' && !empty( get_doatkolom_theme_setting( 'call_btn_label' ) ) ): ?>
            <a class="lg:inline-block no-underline hidden bg-primary primary-shadow text-white py-2.5 px-5 rounded-lg font-secondary text-base transition duration-200 hover:bg-primary_dark"
                href="tel:<?php echo esc_attr( get_doatkolom_theme_setting( 'official_phone' ) ) ?>">
                <?php echo esc_html( get_doatkolom_theme_setting( 'call_btn_label' ) ) ?>
            </a>
        <?php else: ?>
            <button>DoatKolom</button>
        <?php endif;?>
        <button id="nav-close-btn" class="hidden cursor-pointer fixed lg:hidden top-4 md:top-8 right-5 text-white-90 hover:text-[#db231e] w-10 h-10 z-50 bg-transparent border-0">
            <?php Icons::remove()?>
        </button>

    </nav>
</header>