<?php

use Doatkolom\Doatkolom;

?>

<section class="py-20">
    <div class="container max-w-lg mx-auto text-center ">
        <img src="<?php echo esc_url(Doatkolom::url('assets/images/home/support-24-hours.svg')) ?>" alt="">
        <h2 class="text-[28px] md:text-4xl font-bold mb-2">
            Our support team is too active
        </h2>
        <p class="text-secondary mb-4">
            Test it out by clicking on the Chat with us button
        </p>
        <a class="btn bg-primary shadow-btn text-white inline-flex items-center mx-auto w-full md:w-64 justify-between"
            href="">
            Chat with Us
            <img class="ms-6" src="<?php echo esc_url(Doatkolom::url('assets/images/home/support.svg')) ?>"
                alt="24 hours support ">
        </a>
    </div>
</section>