<?php 
    use Doatkolom\App\View;
    use Doatkolom\App\Icons;

    global $post;
    $user_posts		= get_author_posts_url( get_the_author_meta( 'ID' , $post->post_author));
    $author_email	= get_the_author_meta( 'email', $post->post_author );
    $author_name	= get_the_author_meta( 'display_name', $post->post_author );
    $auhor_desc		= get_the_author_meta( 'description', $post->post_author );
?>
<section class="pt-8 md:pt-16 pb-10 bg-white">
    <div class="container">
        <div class="flex items-start flex-col lg:flex-row gap-6 sm:gap-10">
            <?php 
                if( has_post_thumbnail() ) {
                    the_post_thumbnail('full', [
                        'class' => 'w-full rounded-lg w-full lg:max-w-[450px] xl:max-w-[533px]',
                    ]);
                }
            ?>
            <div>
                <?php View::categories() ?>
                <h1 class="text-2xl md:text-3xl xl:text-5xl font-extrabold uppercase xl:leading-[1.3] pt-2"><?php the_title()?></h1>
                <div class="flex items-center gap-x-4 xl:gap-x-10 pt-8 md:pt-12">
                    <div class="flex items-center gap-x-2">
                        <?php echo get_avatar( $author_email, '50', null, get_the_title(), [
                            'class' => 'rounded-full overflow-hidden min-w-[40px] min-h-[40px] max-w-[40px] max-h-[40px] sm:min-w-[50px] sm:min-h-[50px] sm:max-w-[50px] sm:max-h-[50px]'
                        ] ); ?>
                        <div>
                            <h2><a class="text-secondary capitalize font-semibold text-sm sm:text-base" href="<?php echo esc_url($user_posts) ?>"><?php echo esc_html($author_name) ?></a></h2>
                            <p class="text-xs sm:text-sm text-secondary"><?php echo $auhor_desc ?></p>
                        </div>
                    </div>
                    <span>|</span>
                    <div class="flex items-center gap-2 text-sm">
                        <?php 
                            Icons::calendarIcon();
                            View::date();
                        ?>
                    </div>
                    <span class="hidden sm:inline-block">|</span>
                    <div class="hidden sm:flex items-center gap-2">
                        <?php 
                            Icons::clockIcon();
                            View::duration();
                        ?>
                    </div>
                </div>

                <div class="flex items-center gap-x-4 md:gap-x-8 pt-8">
                    <!-- facebook share icon -->
                    <a class="text-[#757575] hover:text-[#0165E1] transition-colors" href="https://www.facebook.com/sharer/sharer.php?u=<?php echo urlencode(get_permalink()); ?>" target="_blank" rel="noopener noreferrer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="47" height="47" viewBox="0 0 47 47" fill="none">
                            <path d="M42.3199 23.0833C42.3199 12.465 33.7021 3.8472 23.0838 3.8472C12.4654 3.8472 3.84766 12.465 3.84766 23.0833C3.84766 32.3936 10.4649 40.1457 19.2365 41.9347V28.8541H15.3893V23.0833H19.2365V18.2743C19.2365 14.5617 22.2566 11.5416 25.9692 11.5416H30.7782V17.3125H26.931C25.873 17.3125 25.0074 18.1781 25.0074 19.2361V23.0833H30.7782V28.8541H25.0074V42.2232C34.7216 41.2614 42.3199 33.0669 42.3199 23.0833Z" fill="currentColor"/>
                        </svg>
                    </a>
                   <!-- linkedin share button -->
                    <a class="text-[#757575] hover:text-[#0077b5] transition-colors" href="https://www.linkedin.com/shareArticle?mini=true&url=<?php echo urlencode(get_permalink()); ?>&title=<?php echo urlencode(get_the_title()); ?>&summary=<?php echo urlencode(get_the_excerpt()); ?>&source=<?php echo urlencode(get_bloginfo('name')); ?>" target="_blank" rel="noopener noreferrer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="43" height="43" viewBox="0 0 47 47" fill="none">
                            <path d="M23.9178 0.924215C11.679 0.924215 1.75781 10.8454 1.75781 23.0842C1.75781 35.323 11.679 45.2442 23.9178 45.2442C36.1566 45.2442 46.0778 35.323 46.0778 23.0842C46.0778 10.8454 36.1566 0.924215 23.9178 0.924215ZM18.4932 32.2691H14.0058V17.8281H18.4932V32.2691ZM16.2218 16.0553C14.8045 16.0553 13.8881 15.0512 13.8881 13.8093C13.8881 12.5421 14.8322 11.5679 16.2795 11.5679C17.7269 11.5679 18.6133 12.5421 18.641 13.8093C18.641 15.0512 17.7269 16.0553 16.2218 16.0553ZM34.8824 32.2691H30.395V24.2661C30.395 22.4033 29.744 21.1383 28.1213 21.1383C26.8817 21.1383 26.1454 21.9947 25.8199 22.8188C25.6998 23.1119 25.6698 23.5274 25.6698 23.9406V32.2668H21.1801V22.4333C21.1801 20.6305 21.1224 19.1231 21.0624 17.8258H24.9612L25.1666 19.8318H25.2566C25.8476 18.89 27.2949 17.5004 29.7163 17.5004C32.6687 17.5004 34.8824 19.4786 34.8824 23.7305V32.2691Z" fill="currentColor"/>
                        </svg>
                    </a>
                    <!-- twitter share button -->
                    <a class="text-[#757575] hover:text-[#00acee] transition-colors" href="https://twitter.com/intent/tweet?text=<?php echo urlencode(get_the_title()); ?>&url=<?php echo urlencode(get_permalink()); ?>" target="_blank" rel="noopener noreferrer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="47" viewBox="0 0 48 47" fill="none">
                            <path d="M23.9714 2.8854C12.8174 2.8854 3.77344 11.9294 3.77344 23.0833C3.77344 34.2373 12.8174 43.2812 23.9714 43.2812C35.1253 43.2812 44.1693 34.2373 44.1693 23.0833C44.1693 11.9294 35.1253 2.8854 23.9714 2.8854ZM33.6781 18.1105C33.6916 18.3224 33.6916 18.5433 33.6916 18.7597C33.6916 25.3781 28.6511 33.0019 19.4403 33.0019C16.6 33.0019 13.9671 32.1769 11.7489 30.7567C12.1547 30.8018 12.5424 30.8198 12.9572 30.8198C15.3016 30.8198 17.4566 30.0263 19.1743 28.6828C16.9742 28.6377 15.1257 27.195 14.4946 25.2113C15.2655 25.324 15.9598 25.324 16.7533 25.1211C15.6204 24.891 14.6022 24.2757 13.8716 23.3799C13.1409 22.4841 12.743 21.3629 12.7453 20.2069V20.1438C13.408 20.518 14.188 20.7479 15.004 20.7795C14.318 20.3223 13.7554 19.7029 13.3661 18.9762C12.9769 18.2496 12.7729 17.4381 12.7723 16.6137C12.7723 15.6804 13.0158 14.8283 13.4531 14.0889C14.7105 15.6368 16.2796 16.9029 18.0583 17.8046C19.8371 18.7064 21.7857 19.2239 23.7775 19.3233C23.0697 15.9194 25.6124 13.1647 28.6692 13.1647C30.1119 13.1647 31.4103 13.7688 32.3255 14.7427C33.4572 14.5308 34.5392 14.107 35.504 13.5389C35.1298 14.6976 34.3453 15.6759 33.3039 16.2936C34.3138 16.1854 35.2876 15.9058 36.1893 15.5136C35.5085 16.5145 34.6564 17.4026 33.6781 18.1105Z" fill="currentColor"/>
                        </svg>
                    </a>
                    <!-- instagram share button -->
                    <a class="text-[#757575] hover:text-[#E1306C] transition-colors" href="https://www.instagram.com/sharer/sharer.php?u=<?php echo urlencode(get_permalink()); ?>" target="_blank" rel="noopener noreferrer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="47" viewBox="0 0 48 47" fill="none">
                            <path d="M26.0018 3.84957C27.4055 3.84418 28.8093 3.85829 30.2126 3.89189L30.5858 3.90535C31.0167 3.92074 31.4418 3.93998 31.9554 3.96306C34.0021 4.05924 35.3986 4.38241 36.624 4.85754C37.8936 5.34614 38.9631 6.00786 40.0326 7.07739C41.0105 8.03844 41.7674 9.20095 42.2505 10.4841C42.7257 11.7094 43.0488 13.1079 43.145 15.1546C43.1681 15.6663 43.1873 16.0934 43.2027 16.5242L43.2143 16.8974C43.2485 18.3001 43.2632 19.7032 43.2585 21.1063L43.2604 22.5413V25.0612C43.2652 26.465 43.2504 27.8687 43.2162 29.272L43.2047 29.6452C43.1893 30.0761 43.17 30.5012 43.1469 31.0148C43.0508 33.0615 42.7238 34.4581 42.2505 35.6834C41.769 36.9679 41.0119 38.1314 40.0326 39.0921C39.0707 40.0699 37.9076 40.8267 36.624 41.31C35.3986 41.7851 34.0021 42.1083 31.9554 42.2045C31.4418 42.2275 31.0167 42.2468 30.5858 42.2622L30.2126 42.2737C28.8093 42.3079 27.4055 42.3226 26.0018 42.3179L24.5668 42.3199H22.0488C20.645 42.3246 19.2413 42.3099 17.838 42.2756L17.4648 42.2641C17.0082 42.2475 16.5516 42.2283 16.0952 42.2064C14.0485 42.1102 12.6519 41.7832 11.4247 41.31C10.141 40.8278 8.9783 40.0708 8.01796 39.0921C7.03893 38.1308 6.28137 36.9675 5.79812 35.6834C5.32298 34.4581 4.99982 33.0615 4.90364 31.0148C4.88221 30.5584 4.86298 30.1018 4.84593 29.6452L4.83631 29.272C4.80085 27.8687 4.78481 26.465 4.78822 25.0612V21.1063C4.78285 19.7032 4.79696 18.3001 4.83054 16.8974L4.844 16.5242C4.85939 16.0934 4.87863 15.6663 4.90171 15.1546C4.99789 13.106 5.32106 11.7114 5.79619 10.4841C6.27973 9.20032 7.03878 8.03813 8.01989 7.07931C8.97957 6.09972 10.1416 5.34147 11.4247 4.85754C12.6519 4.38241 14.0466 4.05924 16.0952 3.96306L17.4648 3.90535L17.838 3.89574C19.2407 3.86029 20.6438 3.84426 22.0469 3.84765L26.0018 3.84957ZM24.0243 13.4676C22.75 13.4496 21.4847 13.685 20.3021 14.1603C19.1195 14.6355 18.0431 15.341 17.1356 16.2358C16.228 17.1306 15.5074 18.1969 15.0155 19.3727C14.5236 20.5484 14.2703 21.8102 14.2703 23.0847C14.2703 24.3592 14.5236 25.621 15.0155 26.7968C15.5074 27.9725 16.228 29.0388 17.1356 29.9336C18.0431 30.8284 19.1195 31.534 20.3021 32.0092C21.4847 32.4844 22.75 32.7198 24.0243 32.7018C26.5752 32.7018 29.0216 31.6885 30.8253 29.8848C32.6291 28.081 33.6424 25.6346 33.6424 23.0838C33.6424 20.5329 32.6291 18.0865 30.8253 16.2828C29.0216 14.479 26.5752 13.4676 24.0243 13.4676ZM24.0243 17.3148C24.7909 17.3007 25.5526 17.4395 26.2649 17.7231C26.9773 18.0066 27.626 18.4293 28.1731 18.9664C28.7203 19.5034 29.1549 20.1442 29.4517 20.8511C29.7484 21.558 29.9014 22.317 29.9015 23.0837C29.9016 23.8504 29.749 24.6095 29.4524 25.3165C29.1559 26.0236 28.7215 26.6644 28.1745 27.2017C27.6275 27.739 26.979 28.1618 26.2667 28.4456C25.5545 28.7294 24.7928 28.8685 24.0263 28.8546C22.4957 28.8546 21.0279 28.2466 19.9457 27.1644C18.8634 26.0821 18.2554 24.6143 18.2554 23.0838C18.2554 21.5532 18.8634 20.0854 19.9457 19.0032C21.0279 17.9209 22.4957 17.3129 24.0263 17.3129L24.0243 17.3148ZM34.1233 10.5822C33.5027 10.607 32.9158 10.871 32.4855 11.3189C32.0552 11.7668 31.8149 12.3637 31.8149 12.9848C31.8149 13.6059 32.0552 14.2028 32.4855 14.6507C32.9158 15.0986 33.5027 15.3626 34.1233 15.3874C34.761 15.3874 35.3726 15.1341 35.8235 14.6831C36.2745 14.2322 36.5278 13.6206 36.5278 12.9829C36.5278 12.3452 36.2745 11.7336 35.8235 11.2826C35.3726 10.8317 34.761 10.5784 34.1233 10.5784V10.5822Z" fill="currentColor"/>
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    </div>
</section>