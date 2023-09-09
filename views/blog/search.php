<?php
    use Doatkolom\App\View;
    if (!defined('ABSPATH')) exit;
?>

<section class="pt-12 pb-16">
    <div class="container lg:max-w-[940px] mx-auto">
        <!-- when have posts -->
        <?php if( have_posts() ) : ?>
            <div class="grid gap-y-14 md:gap-y-8 gap-x-4">
                <?php 
                    while ( have_posts() ) : the_post();
                        ?>
                            <article id="post-<?php the_ID(); ?>" <?php post_class('md:bg-white sm:rounded-lg flex flex-col md:flex-row overflow-hidden'); ?>>
                                <?php if( has_post_thumbnail() ): ?>
                                    <a 
                                        href="<?php the_permalink(); ?>"
                                        aria-label="<?php the_title(); ?>" 
                                        rel="nofollow"
                                    >
                                        <?php the_post_thumbnail('medium', [
                                            'class' => 'w-full rounded-lg md:rounded-none h-[200px] md:h-[250px] 2xl:h-[290px] md:min-w-[380px] md:max-w-[380px] object-cover',
                                        ]) ?> 
                                    </a>
                                <?php endif; ?>
                                <div class="pt-6 md:p-6 md:bg-post-pattern bg-repeat-round flex flex-col grow justify-between gap-y-4 md:gap-y-8">
                                    <div>
                                        <?php View::categories() ?>
                                       
                                        <h2 class="pt-2">
                                            <a 
                                                href="<?php the_permalink(); ?>"
                                                aria-label="<?php the_title(); ?>" 
                                                rel="nofollow"
                                                class="block font-bold text-secondary text-lg md:text-xl transition-colors duration-200 ease-linear hover:text-primary uppercase"
                                            >
                                                <?php the_title()?>
                                            </a>
                                        </h2>
                                    </div>
                                    <?php 
                                        View::part('blog/post-meta')
                                    ?>
                                </div>
                            </article>
                        <?php 
                    endwhile;
                ?>
            </div>
            <div class="flex justify-end pt-8">
                <?php 
                   View::part('blog/pagination');
                ?>
            </div>
        <?php else: 
            View::part('blog/no-posts');
        endif; ?>
    </div>
</section>