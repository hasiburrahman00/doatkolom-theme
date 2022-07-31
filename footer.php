<!-- Site footer markup goes here -->
<?php
    use DoatKolom\FooterWalker;
    use DoatKolom\Icons;
    if ( !defined( 'ABSPATH' ) ) {
        exit;
    }

?>
<footer class="bg-footer pb-8 lg:pb-0">
    <!-- footer cta -->
    <div class="max-w-screen-lg px-5 sm:px-10 mx-auto relative -top-20 mt-20">
        <?php get_template_part( 'template-parts/doatkolom-footer', 'cta' )?>
    </div>
    <!-- footer middle -->
    <div class="px-5 max-w-screen-xl mx-auto grid md:grid-cols-2 gap-5">
        <?php get_template_part( 'template-parts/doatkolom-footer', 'menu' )?>
        <div class="grid sm:grid-cols-2 gap-5">
            <div>
                <h4 class="text-xl mb-5 font-weight_tertiary font-primary text-title"><?php esc_html_e( 'Institution Resource', 'doatkolom' )?></h4>
                <?php
                    wp_nav_menu( [
                        'menu'            => 'secondary',
                        'theme_location'  => 'secondary',
                        'menu_class'      => 'doatkolom-footer-menu',
                        'container_class' => 'doatkolom-footer-menu-container',
                        'items_wrap'      => '<ul id="doatkolom-footer-menu" class="%2$s list-none grid gap-3">%3$s</ul>',
                        'depth'           => 3,
                        'walker'          => new FooterWalker(),
                        'fallback_cb'     => false
                    ] );
                ?>
            </div>
            <div>
                <h4 class="text-xl mb-5 font-weight_tertiary font-primary text-title"><?php esc_html_e( 'Address', 'doatkolom' )?></h4>
                <p class="text-base font-secondary font-weight_primary text-black">
                    <?php echo esc_html( get_doatkolom_theme_setting( 'full_address' ) ); ?>
                </p>
                <p class="text-base font-secondary text-black mt-5"><?php echo esc_html( get_doatkolom_theme_setting( 'official_email' ) . ', ' . get_doatkolom_theme_setting( 'official_phone' ) ) ?></p>
            </div>
        </div>
    </div>
    <!-- footer bottom -->
    <div class="mt-16 hidden lg:block px-5">
       <div class="max-w-screen-xl mx-auto md:flex justify-between items-center py-4 border-t border-solid border-x-0 border-b-0 border-t-gray">
            <div class="flex items-center space-x-3">
                <a href="<?php echo esc_url( DOATKOLOM_SITE_URL ) ?>">
                    <picture>
                        <img width="64" height="64" class="w-auto h-auto max-h-[80px] lazyload" data-src="<?php echo esc_url(DOATKOLOM_LOGO) ?>"/>
                    </picture>
                </a>
                <div>
                    <h3 class="font-weight_tertiary text-xl font-primary text-title mb-0"><?php echo esc_html( get_doatkolom_theme_setting( 'site_title' ) ) ?></h3>
                    <p class="text-sm font-secondary font-weight_primary text-title_description"><?php echo esc_html( get_doatkolom_theme_setting( 'site_description' ) ) ?></p>
                </div>
            </div>
            <div>
                <p class="text-base font-weight_primary font-secondary text-black">&copy;
                    <?php echo esc_html( date( "Y" ) ); ?> 
                    <?php echo esc_html( get_doatkolom_theme_setting( 'site_title' ) ) ?>
                    | <?php esc_html_e( 'Developed By', 'doatkolom' )?>
                    <a class="underline text-base font-secondary text-primary" target="_blank"
                        href="//about.doatkolom.com/"><?php esc_html_e( 'DoatKolom', 'doatkolom' )?>
                    </a>
                </p>
            </div>
            <div class="flex items-center space-x-5">
                <?php if ( !empty( get_doatkolom_theme_setting( 'whatsapp' ) ) ): ?>
                <a
                    href="<?php echo esc_url( get_doatkolom_theme_setting( 'whatsapp' ) ) ?>" target="_blank"
                    class="w-8 h-8 duration-200 transition ease-in rounded-sm flex justify-center items-center bg-primary_light hover:bg-primary text-primary hover:text-white">
                    <span class="w-4 h-4 inline-block"><?php echo Icons::whatsapp() ?></span>
                </a>
                <?php endif;?>
<?php if ( !empty( get_doatkolom_theme_setting( 'facebook' ) ) ): ?>
                <a
                    href="<?php echo esc_url( get_doatkolom_theme_setting( 'facebook' ) ) ?>" target="_blank"
                    class="w-8 h-8 duration-200 transition ease-in rounded-sm flex justify-center items-center bg-primary_light hover:bg-primary text-primary hover:text-white">
                    <span class="w-4 h-4 inline-block"><?php echo Icons::facebookF() ?></span>
                </a>
                <?php endif;?>
<?php if ( !empty( get_doatkolom_theme_setting( 'youtube' ) ) ): ?>
                <a
                href="<?php echo esc_url( get_doatkolom_theme_setting( 'youtube' ) ) ?>" target="_blank"
                    class="w-8 h-8 duration-200 transition ease-in rounded-sm flex justify-center items-center bg-primary_light hover:bg-primary text-primary hover:text-white">
                    <span class="w-4 h-4 inline-block"><?php echo Icons::youtubePlay() ?></span>
                </a>
                <?php endif;?>
            </div>
       </div>
    </div>
</footer>
<?php get_template_part( 'templates/partials/document-close' );
