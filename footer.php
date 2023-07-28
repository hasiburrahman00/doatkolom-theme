<?php 
use \Doatkolom\Doatkolom;
use \Doatkolom\App\View;
use \Doatkolom\App\FooterWalker;
use \Doatkolom\App\Icons;
if (!defined('ABSPATH')) exit;
?>

<footer class="bg-[#0c131a] text-[#989ca0]">
    <div class="container mx-auto pt-12">
        <section class="company-info grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-y-12">
            <div>
                <h2 class="text-md font-semibold text-white mb-5">Company</h2>
                <?php
                    wp_nav_menu([
                        'menu'            => 'company',
                        'theme_location'  => 'company',
                        'menu_class'      => 'space-y-3',
                        'container_class' => 'footer-menu-container',
                        'items_wrap'      => '<ul class="%2$s">%3$s</ul>',
                        'depth'           => 3,
                        'walker'          => new FooterWalker(),
                        'fallback_cb'     => false,
                    ]);
                ?>
            </div>
            <div>
                <h2 class="text-md font-semibold text-white mb-5">Products</h2>
                <?php
                    wp_nav_menu([
                        'menu'            => 'products',
                        'theme_location'  => 'products',
                        'menu_class'      => 'space-y-3',
                        'container_class' => 'footer-menu-container',
                        'items_wrap'      => '<ul class="%2$s">%3$s</ul>',
                        'depth'           => 3,
                        'walker'          => new FooterWalker(),
                        'fallback_cb'     => false,
                    ]);
                ?>
            </div>
            <div>
                <h2 class="text-md font-semibold text-white mb-5">Supports</h2>
                <?php
                    wp_nav_menu([
                        'menu'            => 'supports',
                        'theme_location'  => 'supports',
                        'menu_class'      => 'space-y-3',
                        'container_class' => 'footer-menu-container',
                        'items_wrap'      => '<ul class="%2$s">%3$s</ul>',
                        'depth'           => 3,
                        'walker'          => new FooterWalker(),
                        'fallback_cb'     => false,
                    ]);
                ?>
            </div>
            <div>
                <h2 class="text-md font-bold text-white mb-5">Terms</h2>
                <?php
                    wp_nav_menu([
                        'menu'            => 'terms',
                        'theme_location'  => 'terms',
                        'menu_class'      => 'space-y-3',
                        'container_class' => 'footer-menu-container',
                        'items_wrap'      => '<ul class="%2$s">%3$s</ul>',
                        'depth'           => 3,
                        'walker'          => new FooterWalker(),
                        'fallback_cb'     => false,
                    ]);
                ?>
            </div>
            <div class="col-span-2">
                <h2 class="text-md font-bold text-white mb-5">NewsLetter</h2>
                <p class="w-10/12 mb-4">Don't miss any updates of our new templates and extensions and all the
                    astonishing offers we bring for you.</p>
                <div class="mt-8 flex max-w-md">
                    <input 
                        class="w-full outline-none bg-[#373a41] text-base transition-colors duration-200 border-[#373a41] text-[#b0b4b8] focus:bg-white focus:text-secondary px-4 capitalize py-3.5 rounded-l-lg" 
                        placeholder="Enter your Email" 
                        type="text"
                    >
                    <button
                        class="sm:px-5 py-2 transition-colors duration-300 px-2 bg-primary sm:font-semibold text-white rounded-r-lg hover:bg-primary-dark">Subscribe</button>
                </div>
            </div>
        </section>
    </div>

    <div class="py-5 mt-6 border-t border-white/10">
        <div class="container space-y-6 sm:space-y-0 sm:flex items-center justify-between">
            <div>
                <p class="text-white/80 w-full text-sm">
                    <?php echo sprintf( '© %s ' . esc_html__('Doatkolom. All rights reserved.', 'doatkolom'), date("Y")) ?>
                </p>
                <div class="pt-1 space-x-2">
                    <a 
                        class="text-sm transition-colors duration-200 hover:text-white"
                        target="_blank"
                        aria-label="visit doatkolom facebook"
                        href="https://www.facebook.com/doatkolomofficial">
                        Facebook
                    </a>
                    <a 
                        class="text-sm transition-colors duration-200 hover:text-white"
                        target="_blank"
                        aria-label="visit doatkolom linkedin"
                        href="https://www.linkedin.com/company/doatkolom">
                        LinkedIn
                    </a>
                </div>
            </div>
            <div>
                <div class="flex items-center md:justify-end">
                    <img 
                        src="<?php echo Doatkolom::url('assets/images/icons/secure.webp') ?>" 
                        class="mr-2" 
                        alt="secure icon"
                        width="18"
                        height="18"
                        loading="lazy"
                    >
                    <h5 class="text-right">Secure Payments</h5>
                </div>
                <div class="flex gap-2 mt-2 justify-end text-white/70 w-full min-w-[230px] max-w-[250px]">
                    <?php 
                        Icons::paypal();
                        Icons::masterCard();
                        Icons::amex();
                        Icons::visa();
                        Icons::discover();
                    ?>
                </div>
            </div>
        </div>
    </div>
</footer>

<?php 
View::part('document-close');