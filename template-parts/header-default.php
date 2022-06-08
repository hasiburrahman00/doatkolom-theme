<?php 
    use DoatKolom\NavWalker;
    use DoatKolom\Icons;
?>

<section class="bg-primary text-white font-secondary text-lg">
    <div class="max-w-screen-xl mx-auto px-5 flex justify-between items-center">
        <div>
            <a class="text-white font-secondary no-underline hover:text-secondary" href="mailto:support@sghs.com">support@sghs.com</a> |
            <a class="text-white font-secondary no-underline hover:text-secondary" href="address">Dakkhin Para, Savar, Dhaka.1340</a>
        </div>
        <div class="space-x-6">
            <a class="text-white font-secondary no-underline hover:text-secondary" target="_blank" href="https://doatkolom.com">Login/Register</a>
            <a class="text-white font-secondary no-underline hover:text-primary bg-secondary inline-block py-2 px-4" href="<?php echo esc_url( DOATKOLOM_HOME_URL . 'notice-board' ) ?>">Notice Board</a>
        </div>
    </div>
</section>

<header class="py-2 bg-white">
    <nav class="max-w-screen-xl mx-auto px-5 flex justify-between items-center">
        <a href="<?php echo esc_url( DOATKOLOM_HOME_URL ); ?>" class="bg-white shadow-md px-2 rounded-xl inline-block">
            <picture>
                <img width="80" height="80" src="<?php echo esc_url( DOATKOLOM_LOGO ) ?>" alt="main logo"/>
            </picture>
        </a>

        <?php
            wp_nav_menu([
                'menu'            => 'primary',
                'theme_location'  => 'primary',
                'menu_class'      => 'doatkolom-nav list-none inline-flex gap-x-8',
                'container_class' => 'doatkolom-nav-container',
                'items_wrap'      => '<ul id="doatkolom-nav-menu" class="%2$s">%3$s</ul>',
                'depth'           => 3,
                'walker'          => new NavWalker(),
                'fallback_cb'     => false,
            ]);
        ?>
    </nav>
</header>