<?php if ( ! defined( 'ABSPATH' ) ) exit; ?>
<section class="bg-primary text-white font-secondary text-base hidden md:block nav-menu-top">
    <div class="max-w-screen-xl mx-auto px-5 flex justify-between items-center">
        <div>
            <?php if( !empty(get_doatkolom_theme_setting('official_email')) ): ?>
                <a class="text-white inline-block py-1.5 font-secondary no-underline hover:underline" href="mailto:<?php echo esc_html(get_doatkolom_theme_setting('official_email')) ?>"><?php echo esc_html(get_doatkolom_theme_setting('official_email')) ?></a> |
            <?php endif ?>
            <?php if( !empty(get_doatkolom_theme_setting('full_address')) ): ?>
                <a class="text-white inline-block py-1.5 font-secondary no-underline hover:underline" href="address"><?php echo esc_html(get_doatkolom_theme_setting('full_address')) ?></a>
            <?php endif ?>
        </div>
        <div class="space-x-6 flex items-center">
            <?php if( !empty(get_doatkolom_theme_setting('login_page')) ): ?>
                <a class="inline-flex py-1.5 items-center space-x-2 text-white font-secondary no-underline transition duration-200 hover:underline" target="_blank" href="<?php echo esc_url(get_doatkolom_theme_setting('login_page')) ?>">
                    <?php echo \DoatKolom\Icons::login() ?> <span><?php esc_html_e('Login/Register', 'doatkolom') ?></span>
                </a>
            <?php endif ?>
            <?php if( !empty(get_doatkolom_theme_setting('doatkolom_app_template')) ): ?>
                <a class="text-white transition duration-200 font-secondary no-underline hover:text-white bg-black hover:bg-secondary inline-block py-2 px-4" 
                    href="<?php echo esc_url( get_doatkolom_theme_setting('doatkolom_app_template') . '/#/notice-board' ) ?>">
                    <?php esc_html_e('Notice Board', 'doatkolom') ?>
                </a>
            <?php endif ?>
        </div>
    </div>
</section>