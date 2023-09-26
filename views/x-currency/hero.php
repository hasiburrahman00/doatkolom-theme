<?php

use Doatkolom\Doatkolom;
use Doatkolom\App\Icons;
?>

<section class="lg:bg-banner bg-cover md:py-8">
    <div class="container">
        <!-- header banner (1.1) -->
        <div class="lg:w-[840px] mx-auto text-center pt-16 pb-8 md:py-16">
            <h5 class="text-black md:text-[#637381] font-extrabold uppercase mb-4 md:mb-2">
                X - Currency
            </h5>
            <h1 class="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.45] mb-8">
                Enhance Your <br> WooCommerce Store with <span class="text-primary">Multi-Currency</span> Switcher
            </h1>
            <p class="text-secondary text-[18px] lg:w-[590px] mx-auto mb-8">
                Achieve a reliable experience and take your website to a new heights by installing our fast and
                powerful <strong class="text-[#222121]"> WordPress Plugins.</strong>
            </p>
            <div class="md:flex space-x-3 justify-center hidden  ">
                <a class="btn text-white shadow-btn bg-primary w-[253px] " href="#" aria-level="try free now">Try For
                    Free Now</a>
                <a class="btn bg-white border-[1px] border-primary text-primary w-[253px]" href="#" aria-level="try demo ">Try Demo</a>
            </div>
            <div class="block md:hidden ">
                <a class="btn text-white shadow-btn bg-primary mx-auto w-full" href="#" aria-level="try free now">Check Out Our Plugins</a>
            </div>
        </div>

        <!-- screenshot part (1.2) -->
        <div class="flex justify-center ">
            <picture>
                <source media="(max-width:640px)" srcset="<?php echo esc_url(Doatkolom::url('assets/images/x-currency/hero-demo-mobile.webp')) ?>">
                <img height="646" width="991" loading="lazy" class="rounded-lg" src="<?php echo esc_url(Doatkolom::url('assets/images/x-currency/hero-demo.webp')) ?>" alt="x-currency screechoot proof">
            </picture>
        </div>

        <!-- counter part (1.3)-->
        <div class="lg:w-[840px] mx-auto md:flex md:justify-around space-y-8 md:space-y-0 pt-5 pb-20">
            <div class="md:flex  items-center gap-x-3 ">
                <div class=" text-center drop-shadow-counter bg-[#F8FAFB] p-4 rounded-full h-16 w-16 mx-auto md:mx-0 text-[#F03EC4]">
                    <?php Icons::happyIcon() ?>
                </div>
                <div class="text-center md:text-start mt-3 md:mt-0">
                    <h2 class="text-3xl font-extrabold">99%</h2>
                    <p class="text-[#999] mt-1">Customer Satisfaction</p>
                </div>
            </div>

            <div class="md:flex items-center gap-x-3">
                <div class="drop-shadow-counter bg-[#F8FAFB] p-4 rounded-full h-16 w-16 mx-auto md:mx-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                        <path d="M20.8 12.8V3.19995H11.2V12.8H3.2L16 25.6L28.8 12.8H20.8ZM0 28.8H32V32H0V28.8Z" fill="#2ABE78"></path>
                    </svg>
                </div>
                <div class="text-center md:text-start mt-3 md:mt-0">
                    <h2 class="text-3xl font-extrabold">3.5+ K </h2>
                    <p class="text-[#999] mt-1">Total Downloads</p>
                </div>
            </div>

            <div class="md:flex items-center gap-x-3">
                <div class="drop-shadow-counter bg-[#F8FAFB] p-4 rounded-full h-16 w-16 mx-auto md:mx-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
                        <path d="M18 3C9.729 3 3 9.729 3 18V24.2145C3 25.7505 4.3455 27 6 27H7.5C7.89782 27 8.27936 26.842 8.56066 26.5607C8.84196 26.2794 9 25.8978 9 25.5V17.7855C9 17.3877 8.84196 17.0061 8.56066 16.7248C8.27936 16.4435 7.89782 16.2855 7.5 16.2855H6.138C6.972 10.4805 11.967 6 18 6C24.033 6 29.028 10.4805 29.862 16.2855H28.5C28.1022 16.2855 27.7206 16.4435 27.4393 16.7248C27.158 17.0061 27 17.3877 27 17.7855V27C27 28.6545 25.6545 30 24 30H21V28.5H15V33H24C27.309 33 30 30.309 30 27C31.6545 27 33 25.7505 33 24.2145V18C33 9.729 26.271 3 18 3Z" fill="#7059FE"></path>
                    </svg>
                </div>
                <div class="text-center md:text-start mt-3 md:mt-0">
                    <h2 class="text-3xl font-extrabold">24/7</h2>
                    <p class="text-[#999] mt-1">Customer Support</p>
                </div>
            </div>
        </div>

    </div>
</section>