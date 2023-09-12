<?php 
    use Doatkolom\App\View;
?>
<section class="pt-16 pb-10 bg-white">
    <div class="container">
        <div class="flex items-start gap-10">
            <?php 
                if( has_post_thumbnail() ) {
                    the_post_thumbnail('large', [
                        'class' => 'w-full rounded-lg max-w-[533px]',
                    ]);
                }
            ?>
            <div>
                <?php View::categories() ?>
                <h1><?php the_title()?></h1>
                <?php 
                    View::part('blog/post-meta')
                ?>
            </div>
        </div>
    </div>
</section>