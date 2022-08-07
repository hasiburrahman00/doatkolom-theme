<?php 
use DoatKolom\View;
use DoatKolom\Icons;
if (!defined('ABSPATH')) die('Direct access forbidden.');

?>
<article class="
    mb-4 
    <?php echo is_sticky() ? 'bg-primary_light rounded-xl p-3' : '' ?> 
    <?php echo !has_post_thumbnail() ? 'border border-solid border-border p-3 rounded-xl self-start' : '' ?>
">
    <?php if(has_post_thumbnail()): ?>
    <a href="<?php the_permalink(); ?>">
        <figure class="relative overflow-hidden">
            <?php View::thumbnail('w-full object-cover h-[200px] md:h-[250px] rounded-lg') ?>
            <div class="flex gap-2 absolute bottom-4 left-1">
                <?php View::categories('inline-block text-[12px] font-secondary no-underline odd:bg-primary opacity-90 hover:opacity-100 even:bg-[#972fff] text-white px-3 py-1 rounded-full', 2); ?>
            </div>
        </figure>
    </a>
    <?php else: ?>
        <div class="flex gap-2">
            <?php View::categories('inline-block text-[12px] font-secondary no-underline odd:bg-primary opacity-90 hover:opacity-100 even:bg-[#972fff] text-white px-3 py-1 rounded-full', 2); ?>
        </div>
    <?php endif; ?>
    <h2 class="m-0 p-0 mt-3 flex items-center">
        <?php 
            if( is_sticky() ) {
                ?>
                    <span class="min-w-[35px]">
                        <?php Icons::thumb_tack(30, 30); ?>
                    </span>
                <?php 
            }
        ?>
        <a 
            class="no-underline hover:text-primary transition duration-200 ease-linear font-primary text-gray-2 font-weight_secondary text-title text-[18px]" 
            href="<?php the_permalink(); ?>">
            <?php View::article_title()?>
        </a>
    </h2>
    <div class="font-secondary text-base text-paragraph mt-4">
        <?php View::excerpt(20); ?>
    </div>
</article>