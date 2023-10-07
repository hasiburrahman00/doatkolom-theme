<?php

use Doatkolom\Doatkolom;
use Doatkolom\App\Icons;

?>

<div class="space-x-2 md:hidden flex justify-between mt-6 mb-3">
    <button class="font-bold py-3 w-[125px] text-xs switcher_tab_sm tab-btn active" data-tab="sticky">Stricky
        Switcher</button>
    <button class="font-bold py-3 w-[125px] text-xs switcher_tab_sm tab-btn" data-tab="shortcode">Shortcode</button>
    <button class="font-bold py-3 w-[125px] text-xs switcher_tab_sm tab-btn" data-tab="responsive">Responsive</button>
</div>
<section class="container bg-[#F8F7FE] rounded-3xl lg:px-10 py-7 md:py-16 mb-6 lg:my-6 w-11/12 max-w-6xl mx-auto">
    <!-- heading section (5.1) -->
    <div class="text-center lg:w-[580px] mx-auto mb-10">
        <h5 class="text-[#7B68EE] font-extrabold uppercase mb-4 text-xs sm:text-base">Readymade Switcher Templates</h5>
        <h2 class="text-3xl lg:text-5xl font-extrabold text-[#333] mb-6">Start today with our readymade templates
        </h2>
        <div class="hidden md:block md:tab">
            <button class="font-bold py-3 w-[125px] switcher_tab tab-btn active" data-tab="sticky">Stricky
                Switcher</button>
            <button class="font-bold py-3 w-[125px] switcher_tab tab-btn" data-tab="shortcode">Shortcode</button>
            <button class="font-bold py-3 w-[125px] switcher_tab tab-btn" data-tab="responsive">Responsive</button>
        </div>
    </div>

    <!-- content section(5.2) -->
    <div class="switcher_content active">
        <div class="flex flex-col-reverse lg:flex-row items-start justify-center">
            <div class="mt-6 lg:mt-0">
                <h3 class="text-2xl mb-2 font-extrabold text-[#333]">Something about the template</h3>
                <p class="text-[#161C24]">Lorem ipsum dolor sit amet consectetur. Tortor felis commodo tincidunt
                    purus
                    gravida pellentesque.</p>
            </div>
            <img class="shadow-screenshot rounded-xl mx-auto lg:mx-0" height="440" width="662" loading="lazy"
                src="<?php echo esc_url(Doatkolom::url('assets/images/x-currency/showoff-banner.webp')) ?>"
                alt="readymade template screenshot">
        </div>
    </div>
    <div class="switcher_content">
        <div class="flex flex-col-reverse lg:flex-row items-start justify-center">
            <div class="mt-6 lg:mt-0">
                <h3 class="text-2xl mb-2 font-extrabold text-[#333]">Something about the template</h3>
                <p class="text-[#161C24]">Lorem ipsum dolor sit amet consectetur. Tortor felis commodo tincidunt
                    purus
                    gravida pellentesque.</p>
            </div>
            <img class="shadow-screenshot rounded-xl mx-auto lg:mx-0" height="440" width="662" loading="lazy"
                src="<?php echo esc_url(Doatkolom::url('assets/images/x-currency/showoff-banner.webp')) ?>"
                alt="readymade template screenshot">
        </div>
    </div>
    <div class="switcher_content">
        <div class="flex flex-col-reverse lg:flex-row items-start justify-center">
            <div class="mt-6 lg:mt-0">
                <h3 class="text-2xl mb-2 font-extrabold text-[#333]">Something about the template</h3>
                <p class="text-[#161C24]">Lorem ipsum dolor sit amet consectetur. Tortor felis commodo tincidunt
                    purus
                    gravida pellentesque.</p>
            </div>
            <img class="shadow-screenshot rounded-xl mx-auto lg:mx-0" height="440" width="662" loading="lazy"
                src="<?php echo esc_url(Doatkolom::url('assets/images/x-currency/showoff-banner.webp')) ?>"
                alt="readymade template screenshot">
        </div>
    </div>
</section>