<section class="py-16 bg-doatkolom-gray-100">
    <div class="container max-w-screen-xl">
        <div class="md:flex space-y-9 md:space-y-0 md:space-x-7">
            
            <!-- related blog post start -->
            <div class="md:w-1/3">
                <h2 class="font-lato uppercase text-base text-doatkolom-black-800 font-semibold mb-6">RELATED BLOG POST</h2>
                <?php get_template_part( 'template-parts/recent', 'post'); ?>
            </div>

            <!-- popular blog post start -->
            <div class="md:w-2/3">
                <h2 class="font-lato uppercase text-base text-doatkolom-black-800 font-semibold mb-6">POPULAR BLOG POST</h2>
                <?php get_template_part( 'template-parts/popular', 'post'); ?>
            </div>

        </div>
    </div>
</section>