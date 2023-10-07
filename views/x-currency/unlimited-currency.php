<?php

use Doatkolom\Doatkolom;
use Doatkolom\App\Icons;

?>


<section class="container px-0 md:px-16 py-14 lg:py-16 rounded-3xl bg-[#F3FCF9] w-11/12 max-w-6xl mx-auto mb-6 ">
    <!--section's heading  -->
    <div class="text-center max-w-xl lg:mx-auto mb-10">
        <h5 class="text-[#2BB083] font-bold mb-4 uppercase">Unlimited Currency</h5>
        <h2 class="text-3xl  lg:text-5xl font-extrabold text-[#333]">Configure your shop currency easily</h2>
    </div>
    <!-- section's content -->
    <div class="flex flex-col-reverse lg:flex-row lg:items-center xl:items-start gap-5">
        <div class="mt-5">

            <div class="currency-tab active">
                <div>
                    <div class="h-12 w-12 bg-white drop-shadow-counter flex items-center justify-center rounded-lg text-[#2BB083]">
                        <?php Icons::walletIcon() ?>
                    </div>
                </div>
                <div>
                    <h3 class="text-[20px] md:text-2xl font-extrabold capitalize mb-2">Custom currency</h3>
                    <p class="capitalize text-[#161C24]">Lorem ipsum dolor sit amet consectetur. Tortor felis
                        commodo
                        tincidunt purus gravida pellentesque. </p>
                </div>
            </div>
            <div class="currency-tab">
                <div>
                    <div class="h-12 w-12 bg-white drop-shadow-counter flex items-center justify-center rounded-lg text-[#2BB083]">
                        <?php Icons::walletIcon() ?>
                    </div>
                </div>
                <div>
                    <h3 class="text-[20px] md:text-2xl font-extrabold capitalize mb-2">Conditional Payment Gateway</h3>
                    <p class="capitalize text-[#161C24]">Lorem ipsum dolor sit amet consectetur. Tortor felis
                        commodo
                        tincidunt purus gravida pellentesque. </p>
                </div>
            </div>
        </div>
        <img class="lg:max-w-md xl:max-w-full currency_content active" width="662" height="440" loading="lazy"
            src="<?php echo esc_url(Doatkolom::url('assets/images/x-currency/showoff-banner.webp')) ?>"
            alt="configure shop screenshot">
        <img class="lg:max-w-md xl:max-w-full currency_content" width="662" height="440" loading="lazy"
            src="<?php echo esc_url(Doatkolom::url('assets/images/x-currency/showoff-banner.webp')) ?>" alt=" configure
            shop screenshot">
    </div>
</section>