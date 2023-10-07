<!-- contact us  -->
<?php

use Doatkolom\Doatkolom;
use Doatkolom\App\Icons;

?>


<section class="container">
    <div class="md:max-w-xl mx-auto text-center py-24">
        <h5 class="text-[#000] md:text-[#637381] uppercase font-extrabold mb-2">contact us</h5>
        <h1 class="text-3xl md:text-6xl font-extrabold mb-6">Got a question?</h1>
        <p class="text-secondary text-lg">We’re here to help and answer any question you might have. We look forward
            to hearing from you</p>
    </div>

    <!-- <div class="lg:max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10 mb-20"> -->
    <div class="lg:max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 justify-between items-center gap-10 mb-20">
        <div>
            <div class="mb-4">
                <div class="bg-[#00AB55] rounded-lg h-12 w-12 text-white">
                    <?php Icons::bookIcon() ?>
                </div>
            </div>
            <h3 class="text-[#333] mb-2 text-2xl font-extrabold ">Knowledgebase
                <?php Icons::longArrowRight() ?>
            </h3>
            <p class="text-[#161C24] capitalize">Let us walk you through our products and services step-by-step.</p>
        </div>
        <div>
            <div class="mb-4">
                <div class="bg-[#36F] text-white h-12 w-12 rounded-lg">
                    <?php Icons::ticketIcon() ?>
                </div>
            </div>
            <h3 class="text-[#333] mb-2 text-2xl font-extrabold ">Submit ticket
                <?php Icons::longArrowRight() ?>
            </h3>
            <p class="text-[#161C24] capitalize">Need help? We’re ready to answer your questions 24/7.</p>
        </div>
        <div>
            <div class="mb-4">
                <div class="rounded-lg bg-[#0FA3F6] h-12 w-12  text-white">
                    <?php Icons::routeSqureIcon() ?>
                </div>
            </div>
            <h3 class="text-[#333] mb-2 text-2xl font-extrabold ">Leave feedback
                <?php Icons::longArrowRight() ?>
            </h3>
            <p class="text-[#161C24] capitalize">Help us make your experience better — we love being on our toes</p>
        </div>
        <div>
            <div class="mb-4">
                <div class="bg-[#B78103] rounded-lg text-white h-12 w-12">
                    <?php Icons::informationIcon() ?>
                </div>
            </div>
            <h3 class="text-[#333] mb-2 text-2xl font-extrabold ">Reporting abuse
                <?php Icons::longArrowRight() ?>
            </h3>
            <p class="text-[#161C24] capitalize">Find out how to report illegal activity or online abuse.</p>
        </div>
    </div>
</section>