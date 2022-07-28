<?php 
  use DoatKolom\Icons;
  if ( ! defined( 'ABSPATH' ) ) exit; 
?>
<section class="bg-primary text-white font-secondary text-base hidden md:block nav-menu-top">
    <div class="max-w-screen-xl mx-auto px-5 flex justify-between items-center">
        <div>
            <?php if( !empty(INFO['official_email']) ): ?>
                <a class="text-white font-secondary no-underline hover:underline" href="mailto:<?php echo esc_html(INFO['official_email']) ?>"><?php echo esc_html(INFO['official_email']) ?></a> |
            <?php endif ?>
            <?php if( !empty(INFO['full_address']) ): ?>
                <a class="text-white font-secondary no-underline hover:underline" href="address"><?php echo esc_html(INFO['full_address']) ?></a>
            <?php endif ?>
        </div>
        <div class="space-x-6 flex items-center">
            <?php if( !empty(INFO['login_page']) ): ?>
                <a class="inline-flex items-center space-x-2 text-white font-secondary no-underline transition duration-200 hover:underline" target="_blank" href="<?php echo esc_url(INFO['login_page']) ?>">
                    <?php echo Icons::login() ?> <span><?php esc_html_e('Login/Register', 'doatkolom') ?></span>
                </a>
            <?php endif ?>
            <a class="text-white transition duration-200 font-secondary no-underline hover:text-white bg-black hover:bg-secondary inline-block py-2 px-4" 
                href="<?php echo esc_url( INFO['doatkolom_app_template'] . '/#/notice-board' ) ?>">
                <?php esc_html_e('Notice Board', 'doatkolom') ?>
            </a>
        </div>
    </div>
</section>