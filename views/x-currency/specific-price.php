<?php

use Doatkolom\Doatkolom;
use Doatkolom\App\Icons;

?>


<div class="space-x-2 md:hidden flex justify-between tab-box">
    <button class="font-bold px-4 py-3 w-[125px] tab_btn_sm tab-btn active" data-tab="coupons">Coupons</button>
    <button class="font-bold px-4 py-3 w-[125px] tab_btn_sm tab-btn" data-tab="product">Product</button>
    <button class="font-bold px-4 py-3 w-[125px] tab_btn_sm tab-btn" data-tab="shipping">Shipping</button>
</div>

<section class="container bg-[#F8F7FE] md:px-10 py-16 rounded-3xl my-3 w-11/12 max-w-6xl mx-auto ">
    <!-- heading (2.1) -->
    <div class="text-center max-w-xl mx-auto lg:mb-14">
        <h5 class="text-[#7B68EE] font-bold uppercase mb-4">Specific Price</h5>
        <h2 class="text-3xl md:text-5xl font-extrabold text-[#333] mb-6">Simplify selling and get more revenue.</h2>
        <div class="hidden md:block md:tab mb-6">
            <button class="font-bold py-3 w-[125px] tab_btn tab-btn active" data-tab="coupons">Coupons</button>
            <button class="font-bold py-3 w-[125px] tab_btn tab-btn" data-tab="product">Product</button>
            <button class="font-bold py-3 w-[125px] tab_btn tab-btn" data-tab="shipping">Shipping</button>
        </div>
    </div>
    <!-- content (2.2) -->
    <div class="tab_content active">
        <div class="flex flex-col-reverse lg:flex-row items-center justify-center ">
            <div class="mt-7 mb:mt-0">
                <div class="flex gap-x-4 mb-12">
                    <div
                        class="bg-white p-3 h-12 w-12 rounded-lg drop-shadow-counter flex justify-center items-center text-[#7B68EE]">
                        <?php Icons::walletIcon() ?>
                    </div>
                    <div class="lg:pr-[22px]">
                        <h4 class="text-[#333] text-2xl font-extrabold mb-2">Feature One</h4>
                        <p class="text-[#161C24] capitalize ">Lorem ipsum dolor sit amet consectetur. Tortor felis
                            commodo tincidunt purus gravida
                            pellentesque. </p>
                    </div>
                </div>
                <div class="flex gap-x-4 mb-12">
                    <div
                        class="bg-white p-3 h-12 w-12 rounded-lg drop-shadow-counter flex justify-center items-center text-[#7B68EE]">
                        <?php Icons::walletIcon() ?>
                    </div>
                    <div class="lg:pr-[22px]">
                        <h4 class="text-[#333] text-2xl font-extrabold mb-2">Feature Two</h4>
                        <p class="text-[#161C24] capitalize">Lorem ipsum dolor sit amet consectetur. Tortor felis
                            commodo tincidunt purus gravida
                            pellentesque. </p>
                    </div>
                </div>
                <div class="flex gap-x-4">
                    <div
                        class="bg-white p-3 h-12 w-12 rounded-lg drop-shadow-counter flex justify-center items-center text-[#7B68EE]">
                        <?php Icons::walletIcon() ?>
                    </div>
                    <div class="lg:pr-[22px]">
                        <h4 class="text-[#333] text-2xl font-extrabold mb-2">Feature Three</h4>
                        <p class="text-[#161C24] capitalize">Lorem ipsum dolor sit amet consectetur. Tortor felis
                            commodo tincidunt purus gravida
                            pellentesque. </p>
                    </div>
                </div>
            </div>
            <img class="shadow-screenshot rounded-xl lg:max-w-md xl:max-w-full" height="440" width="660" loading="lazy"
                src="<?php echo esc_url(Doatkolom::url('assets/images/x-currency/showoff-banner.webp')) ?>"
                alt="specific price banner">
        </div>
    </div>
    <div class="tab_content">
        <div class="flex flex-col-reverse lg:flex-row items-center justify-center ">
            <div class="mt-7 mb:mt-0">
                <div class="flex gap-x-4 mb-12">
                    <div
                        class="bg-white p-3 h-12 w-12 rounded-lg drop-shadow-counter flex justify-center items-center text-[#7B68EE]">
                        <?php Icons::walletIcon() ?>
                    </div>
                    <div class="lg:pr-[22px]">
                        <h4 class="text-[#333] text-2xl font-extrabold mb-2">Feature One</h4>
                        <p class="text-[#161C24] capitalize ">Lorem ipsum dolor sit amet consectetur. Tortor felis
                            commodo tincidunt purus gravida
                            pellentesque. </p>
                    </div>
                </div>
                <div class="flex gap-x-4 mb-12">
                    <div
                        class="bg-white p-3 h-12 w-12 rounded-lg drop-shadow-counter flex justify-center items-center text-[#7B68EE]">
                        <?php Icons::walletIcon() ?>
                    </div>
                    <div class="lg:pr-[22px]">
                        <h4 class="text-[#333] text-2xl font-extrabold mb-2">Feature Two</h4>
                        <p class="text-[#161C24] capitalize">Lorem ipsum dolor sit amet consectetur. Tortor felis
                            commodo tincidunt purus gravida
                            pellentesque. </p>
                    </div>
                </div>
                <div class="flex gap-x-4">
                    <div
                        class="bg-white p-3 h-12 w-12 rounded-lg drop-shadow-counter flex justify-center items-center text-[#7B68EE]">
                        <?php Icons::walletIcon() ?>
                    </div>
                    <div class="lg:pr-[22px]">
                        <h4 class="text-[#333] text-2xl font-extrabold mb-2">Feature Three</h4>
                        <p class="text-[#161C24] capitalize">Lorem ipsum dolor sit amet consectetur. Tortor felis
                            commodo tincidunt purus gravida
                            pellentesque. </p>
                    </div>
                </div>
            </div>
            <img class="shadow-screenshot rounded-xl lg:max-w-md xl:max-w-full" height="440" width="660" loading="lazy"
                src="<?php echo esc_url(Doatkolom::url('assets/images/x-currency/showoff-banner.webp')) ?>"
                alt="specific price banner">
        </div>
    </div>
    <div class="tab_content">
        <div class="flex flex-col-reverse lg:flex-row items-center justify-center ">
            <div class="mt-7 mb:mt-0">
                <div class="flex gap-x-4 mb-12">
                    <div
                        class="bg-white p-3 h-12 w-12 rounded-lg drop-shadow-counter flex justify-center items-center text-[#7B68EE]">
                        <?php Icons::walletIcon() ?>
                    </div>
                    <div class="lg:pr-[22px]">
                        <h4 class="text-[#333] text-2xl font-extrabold mb-2">Feature One</h4>
                        <p class="text-[#161C24] capitalize ">Lorem ipsum dolor sit amet consectetur. Tortor felis
                            commodo tincidunt purus gravida
                            pellentesque. </p>
                    </div>
                </div>
                <div class="flex gap-x-4 mb-12">
                    <div
                        class="bg-white p-3 h-12 w-12 rounded-lg drop-shadow-counter flex justify-center items-center text-[#7B68EE]">
                        <?php Icons::walletIcon() ?>
                    </div>
                    <div class="lg:pr-[22px]">
                        <h4 class="text-[#333] text-2xl font-extrabold mb-2">Feature Two</h4>
                        <p class="text-[#161C24] capitalize">Lorem ipsum dolor sit amet consectetur. Tortor felis
                            commodo tincidunt purus gravida
                            pellentesque. </p>
                    </div>
                </div>
                <div class="flex gap-x-4">
                    <div
                        class="bg-white p-3 h-12 w-12 rounded-lg drop-shadow-counter flex justify-center items-center text-[#7B68EE]">
                        <?php Icons::walletIcon() ?>
                    </div>
                    <div class="lg:pr-[22px]">
                        <h4 class="text-[#333] text-2xl font-extrabold mb-2">Feature Three</h4>
                        <p class="text-[#161C24] capitalize">Lorem ipsum dolor sit amet consectetur. Tortor felis
                            commodo tincidunt purus gravida
                            pellentesque. </p>
                    </div>
                </div>
            </div>
            <img class="shadow-screenshot rounded-xl lg:max-w-md xl:max-w-full" height="440" width="660" loading="lazy"
                src="<?php echo esc_url(Doatkolom::url('assets/images/x-currency/showoff-banner.webp')) ?>"
                alt="specific price banner">
        </div>
    </div>


</section>