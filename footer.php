<!-- Site footer markup goes here -->
<?php 
    use DoatKolom\Icons;
    use DoatKolom\FooterWalker;
    if ( ! defined( 'ABSPATH' ) ) exit; 
?> 
<footer class="bg-[#E7F4F6] pb-8 md:pb-0">
    <!-- footer cta -->
    <div class="max-w-screen-lg px-5 sm:px-10 mx-auto relative -top-20 mt-20">
        <?php get_template_part('template-parts/doatkolom-footer', 'cta') ?>
    </div>
    <!-- footer middle -->
    <div class="px-5 max-w-screen-xl mx-auto grid sm:grid-cols-2 gap-5">
        <?php get_template_part('template-parts/doatkolom-footer', 'menu') ?>
        <div class="grid sm:grid-cols-2 gap-5">
            <div>
                <h4 class="text-xl mb-5 font-weight_secondary font-primary text-primary">Institution Resource</h4>
                <?php 
                    wp_nav_menu([
                        'menu'            => 'secondary',
                        'theme_location'  => 'secondary',
                        'menu_class'      => 'doatkolom-footer-menu',
                        'container_class' => 'doatkolom-footer-menu-container',
                        'items_wrap'      => '<ul id="doatkolom-footer-menu" class="%2$s list-none grid gap-3">%3$s</ul>',
                        'depth'           => 3,
                        'walker'          => new FooterWalker(),
                        'fallback_cb'     => false,
                    ]);
                ?>
            </div>
            <div>
                <h4 class="text-xl mb-5 font-weight_secondary font-primary text-primary">Address</h4>
                <p class="text-base font-secondary text-primary">Dakkhin Para, Savar, Dhaka.1340-School Code: 1517 EIIN: 108409</p>
                <p class="text-base font-secondary text-primary mt-5">infoname@gmail.com , www.yourname.com</p>
            </div>
        </div>
    </div>
    <!-- footer bottom -->
    <div class="mt-16 hidden md:block px-5">
       <div class="max-w-screen-xl mx-auto md:flex justify-between items-center py-4 border-t border-solid border-x-0 border-b-0 border-t-primary/20">
            <div class="flex items-center space-x-3">
                <a href="<?php echo esc_url(DOATKOLOM_SITE_URL) ?>" class="bg-white shadow-md py-1 px-2 overflow-hidden rounded-lg">
                    <img class="w-16" src="<?php echo esc_url(DOATKOLOM_IMG . 'institution-logo.webp') ?>"/>
                </a>
                <div>
                    <h3 class="font-weight_secondary text-xl font-primary text-primary mb-1">Savar Girls` High School</h3>
                    <p class="text-sm font-secondary text-primary">School Code: 1517 EIIN: 108409</p>
                </div>
            </div>
            <div>
                <p class="text-base font-secondary text-primary">&copy; <?php echo esc_html(date("Y")); ?> All Rights Reserved by <a class="underline text-base font-secondary text-primary" href="about.doatkolom.com">DoatKolom</a>.</p>
            </div>
            <div class="flex items-center space-x-5">
                <a href="#" class="w-8 h-8 duration-200 transition ease-in rounded-sm flex justify-center items-center bg-green-600 hover:bg-primary text-white">
                    <span class="w-4 h-4 inline-block"><?php echo Icons::whatsapp() ?></span>
                </a>
                <a href="#" class="w-8 h-8 duration-200 transition ease-in rounded-sm flex justify-center items-center bg-blue-600 hover:bg-primary text-white">
                    <span class="w-4 h-4 inline-block"><?php echo Icons::facebookF() ?></span>
                </a>
                <a href="#" class="w-8 h-8 duration-200 transition ease-in rounded-sm flex justify-center items-center bg-red-600 hover:bg-primary text-white">
                    <span class="w-4 h-4 inline-block"><?php echo Icons::youtubePlay() ?></span>
                </a>
            </div>
       </div>
    </div>
</footer>
<?php get_template_part( 'templates/partials/document-close' );





