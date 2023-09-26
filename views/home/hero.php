<?php

use Doatkolom\Doatkolom;
?>

<section class="bg-home-banner bg-cover">
    <div class="container flex pt-8 pb-16 lg:pt-24 lg:pb-36 flex-col-reverse lg:flex-row lg:space-x-8">
        <div class="lg:max-w-[516px]">
            <h4 class="uppercase font-extrabold">
                <span class="text-3xl">👋 </span>We make it happen
            </h4>
            <h1 class="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-8 leading-[1.45]">
                Find the <span class="text-primary">Perfect Plugin</span> for Your Next Website
            </h1>
            <p class="text-lg mb-8 text-secondary ps-6 border-l-4 border-primary">Achieve a reliable experience and
                take your website to a new heights by installing
                our fast and powerful <nobr class="text-black font-semibold">WordPress Plugins</nobr>.
            </p>
            <a class="btn bg-primary shadow-btn text-white block sm:w-[338px] text-center" href="#">
                check out our plugins
            </a>
            <img class="mt-8 w-full sm:w-[338px]" src="<?php echo esc_url(Doatkolom::url('assets/images/home/product-hunt.png')) ?>" alt="product of the day" loading="lazy">
        </div>
        <div class="">
            <picture class="md:w-2/3 mx-auto lg:w-full">
                <source media="(max-width:640px)" srcset="<?php echo esc_url(Doatkolom::url('assets/images/home/hero-mobile.webp')) ?>">
                <img height="551" width="735" loading="lazy" class="rounded-lg" src="<?php echo esc_url(Doatkolom::url('assets/images/home/hero.webp')) ?>" alt="doatkolom banner image">
            </picture>
        </div>
    </div>
</section>