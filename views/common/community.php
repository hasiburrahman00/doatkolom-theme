<?php 
use Doatkolom\Doatkolom;
use Doatkolom\App\Icons;
?>

<section class="bg-[#0c1b1e]">
    <div class="container flex justify-start gap-x-2 relative">
        <div class="py-12 relative z-10">
            <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">DoatKolom Community</h2>
            <p class="text-[#C2C2C2] max-w-sm lg:max-w-none pt-2 pb-6">Ask questions and keep yourself up-to-date from the community </p>
            <a 
                class="btn bg-primary/10 text-primary font-semibold hover:bg-primary/20 px-5 py-3 rounded-md inline-block"
                href="https://www.facebook.com/groups/4339907419448960"
                target="_blank"
                aria-label="join doatkolom facebook community"
            >
                <span class="hidden md:inline-block">Join Our Facebook Community</span>
                <span class="inline-block md:hidden">Join Community</span>
                <?php Icons::longArrowRight() ?>
            </a>
        </div>
        <picture class="flex items-end absolute bottom-0 max-w-[200px] md:max-w-none right-0 opacity-50 md:opacity-100 md:static z-0">
            <img 
                width="400"
                height="223"
                loading="lazy" 
                src="<?php echo esc_url( Doatkolom::url('assets/images/home/community.webp') ) ?>" 
                alt="doatkolom community"
            >
        </picture>
    </div>
</section>