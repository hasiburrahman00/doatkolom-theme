<?php 
use Doatkolom\Doatkolom;
use Doatkolom\App\Icons;
?>

<section class="py-16 md:py-24 bg-[#0c131a]">
    <div class="container">
        <div class="container space-y-6 md:space-y-8">
            <h2 class="text-3xl md:text-5xl font-extrabold text-white leading-[1.25_!important]">Amazing Must Have <br/><span class="text-primary">Plugins</span> for Your Website</h2>
            <h5 class="text-base md:text-lg font-extrabold text-white ps-6 border-primary border-l-4 uppercase">SECURE and optimized</h5>
        </div>
        <!-- products -->
        <div class="grid md:grid-cols-2 gap-6 mt-12">
            <div class="bg-gradient-to-r from-primary/10  flex flex-col justify-between py-8 px-4 sm:p-8 rounded-md text-white transition-colors duration-300 border border-primary/10 hover:border-primary/10">
                <div class="grid grid-cols-[70px_1fr] lg:grid-cols-[100px_1fr] gap-4 sm:gap-6">
                    <img 
                        src="<?php echo Doatkolom::url('assets/images/logos/x-currency.svg') ?>" 
                        alt="x-currency"
                    >
                    <div>
                        <a href="#">
                            <h2 class="text-2xl sm:text-3xl lg:text-4xl font-bold transition-colors duration-300 hover:text-white">X-Currency</h2>
                        </a>
                        <p class="pt-3 opacity-80">The Ultimate WooCommerce currency switcher for a smoother shopping experience</p>
                    </div>
                </div>

                <div class="flex items-center justify-between mt-12 flex-wrap gap-3">
                    <p class="inline-block">20000+ active users</p>
                    <a href="#" aria-label="visit x-currency" class="inline-flex items-center gap-x-1.5 text-primary font-semibold transition-colors duration-300 hover:text-white">
                        <span>Learn more</span>
                        <?php Icons::arrowRight() ?>
                    </a>
                </div>
            </div>
            
            <div class="bg-gradient-to-r from-yellow-200/10 flex flex-col justify-between py-8 px-4 border border-yellow-400/10 rounded-md text-white transition-colors duration-300 hover:border-yellow-400/10">
                <div class="grid grid-cols-[70px_1fr] lg:grid-cols-[100px_1fr] gap-4 sm:gap-6">
                    <img 
                        src="<?php echo Doatkolom::url('assets/images/logos/superdocs.png') ?>" 
                        alt="x-currency"
                    >
                    <div>
                        <a href="#">
                            <h2 class="text-2xl sm:text-3xl lg:text-4xl font-bold transition-colors duration-300 hover:text-white">SuperDocs</h2>
                        </a>
                        <p class="pt-3 opacity-80">The Knowledge Base WordPress Plugin is an easy-to-use tool for creating a comprehensive knowledge base for your website</p>
                    </div>
                </div>

                <div class="flex items-center justify-between mt-12 flex-wrap gap-3">
                    <p class="inline-block">20000+ active users</p>
                    <a href="#" aria-label="visit x-currency" class="inline-flex items-center gap-x-1.5 text-yellow-400 font-semibold transition-colors duration-300 hover:text-white">
                        <span>Learn more</span>
                        <?php Icons::arrowRight() ?>
                    </a>
                </div>
            </div>

        </div>
    </div>
    
</section>