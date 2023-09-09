<?php 
    use Doatkolom\App\View;
    if (!defined('ABSPATH')) exit;

    $args = array(
        'posts_per_page' => 5,
        'meta_key' => 'is_featured_post',
        'meta_value' => 'yes'
    );

    $featured = new WP_Query($args);

    /**
     * generate class based on odd/event article
     * it helps to show article content in a proper grid system 
     */ 
    function getEvenClass( $number ) {
        $classes = 'bg-white rounded-lg overflow-hidden shadow-base ';

        if( has_post_thumbnail() ) {
            $classes .=  'flex flex-col md:grid items-center';
        }

        if( $number % 2 != 0 ) {
            $classes .= 'is-odd md:grid-cols-[1fr_1fr] lg:grid-cols-[550px_1fr]';
        } else {
            $classes .= 'is-even md:grid-cols-[1fr_1fr] lg:grid-cols-[1fr_550px]';
        }

        return $classes;
    }

    /**
     * show post thumbnail and add custom class for the image 
     */ 
    function getAttachment( $classes = '', $parentClass = '' ) {
        if( has_post_thumbnail() ):?>
            <a 
                href="<?php the_permalink(); ?>"
                aria-label="<?php the_title(); ?>" 
                rel="nofollow"
                class="<?php echo esc_attr($parentClass) ?>"
            >
                <?php the_post_thumbnail('custom-post-featured-image', [
                    'class' => 'w-full max-h-[210px] sm:max-h-[300px] md:max-h-[400px] object-cover ' . $classes,
                ]) ?>
            </a>
        <?php endif;
    }

    if ($featured->have_posts()):
?>


<section class="pt-8">
    <div class="container mx-auto">
        <div class="grid gap-y-8">
            <?php 
                $i = 1;
                while($featured->have_posts()): $featured->the_post();
                    ?>
                        <article id="post-<?php the_ID(); ?>" <?php post_class( getEvenClass($i) ); ?>>
                            <?php 
                                // show thumbnail in left side for even post number
                                if( $i % 2 == 0 ) {
                                    getAttachment('', 'w-full');
                                }
                            ?>
                            <div class="p-6 bg-post-pattern bg-repeat-round flex flex-col justify-between">
                                <div>
                                    <?php View::categories() ?>
                                    <h2 class="pb-4 block pt-2">
                                        <a 
                                            href="<?php the_permalink(); ?>"
                                            aria-label="<?php the_title(); ?>" 
                                            rel="nofollow"
                                            class="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold transition-colors duration-200 ease-linear hover:text-[#0446DE]"
                                        >
                                            <?php the_title()?>
                                        </a>
                                    </h2>
                                    <p class="text-base pb-6 lg:pb-10 text-[#282D3E]"><?php View::excerpt(21) ?></p>
                                </div>
                                <?php 
                                    View::part('blog/post-meta')
                                ?>
                            </div>
                            <?php 
                                // show thumbnail in right side for odd post number
                                if( $i % 2 != 0 ) {
                                    getAttachment('', '-order-10 md:order-10 w-full');
                                }
                            ?>
                        </article>
                    <?php 
                    $i++;
                endwhile; 
            ?>
        </div>
    </div>
</section>

<?php 
    endif;
    wp_reset_query();
?>