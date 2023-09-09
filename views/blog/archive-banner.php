<?php 
    use Doatkolom\App\View;
    $title = explode(':', get_the_archive_title());
?>

<section class="bg-white pt-8 md:pt-16">
    <div class="container px-0 grid">
        <p class="text-sm md:text-base font-extrabold text-[#637381] pb-2 px-3 uppercase">
            <?php 
                if( is_home() ) {
                    echo 'Resources';
                } 
                elseif( is_search() ) {
                    echo 'Search Result For: ';
                }
                else {
                    echo $title[0];
                }
            ?>
        </p>
        <h1 class="text-3xl md:text-4xl lg:text-6xl font-extrabold px-3 capitalize"><?php 
            if( is_home() ) {
                 echo 'Doatkolom Blog';
            } 
            elseif( is_search() ) {
                ?>
                    <div class="normal-case">
                        <?php echo get_search_query(); ?>
                        <?php 
                            // get total posts found with the search keyword 
                            $total_results = $wp_query->found_posts;
                            echo '<span class="text-[#C7C7C7] capitalize">(' . $total_results . ' results)</span>';
                        ?>
                    </div>
                <?php 
            }
            else {
                echo $title[1];
            }
        ?></h1>
        <?php 
            View::part('blog/archive-category');
        ?>
    </div>
</section>