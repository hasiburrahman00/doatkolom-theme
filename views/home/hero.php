<?php 
use Doatkolom\Doatkolom;
use Doatkolom\App\Icons;
?>

<section class="bg-banner-pattern bg-repeat bg-banner-size lg:bg-contain">
    <div class="bg-banner-overlay-mobile md:bg-banner-overlay py-8 pb-16 md:py-20 lg:py-24">
        <div class="container grid lg:grid-cols-2 xl:grid-cols-[600px_1fr] items-center">
            <div class="text-center lg:text-left max-w-md lg:max-w-none mx-auto">
                <h2 class="text-3xl lg:text-4xl xl:text-5xl font-bold text-secondary leading-[1.2_!important]">Grow Your Business with Our Awesome Products</h2>
                <p class="pt-3 pb-8 lg:pb-6 max-w-md xl:max-w-none">Achieve a reliable experience and take your website to a new heights by installing our fast, powerful and secure <strong>WordPress Plugins.</strong></p>
                
                <div class="btn-group justify-center lg:justify-start">
                    <a 
                        href="#"
                        aria-label="check our plugins"
                        class="btn w-56 sm:w-auto primary">Check Our Plugins
                    </a>
                    <a 
                        href="#"
                        aria-label="see our pricing plan"
                        class="btn w-56 sm:w-auto secondary"
                    >
                        <span>Pricing Plan</span>
                        <?php Icons::longArrowRight() ?>    
                    </a>
                </div>
            </div>
            <div class="-order-1 lg:order-1">
                <img 
                    width="642"
                    height="342"
                    loading="lazy"
                    class="w-full" 
                    src="<?php echo esc_url(Doatkolom::url('assets/images/home/banner.webp')) ?>" 
                    alt="doatkolom hero area"
                >
            </div>
        </div>
    </div>
</section>