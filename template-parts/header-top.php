<?php 
  use DoatKolom\Icons;
  if ( ! defined( 'ABSPATH' ) ) exit; 
?>
<section class="bg-primary text-white font-secondary text-base hidden md:block nav-menu-top">
    <div class="max-w-screen-xl mx-auto px-5 flex justify-between items-center">
        <div>
            <a class="text-white font-secondary no-underline hover:text-secondary" href="mailto:support@sghs.com">support@sghs.com</a> |
            <a class="text-white font-secondary no-underline hover:text-secondary" href="address">Dakkhin Para, Savar, Dhaka.1340</a>
        </div>
        <div class="space-x-6 flex items-center">
            <a class="inline-flex items-center space-x-2 text-white font-secondary no-underline hover:text-secondary" target="_blank" href="https://doatkolom.com">
                <?php echo Icons::login() ?> <span>Login/Register</span>
            </a>
            <a class="text-white font-secondary no-underline hover:text-primary bg-secondary inline-block py-2 px-4" href="<?php echo esc_url( DOATKOLOM_HOME_URL . 'notice-board' ) ?>">Notice Board</a>
        </div>
    </div>
</section>