<?php 
    use Doatkolom\App\View;
    use Doatkolom\App\Icons;
    use SocialLinks\Page;

    global $post;
    $user_posts		= get_author_posts_url( get_the_author_meta( 'ID' , $post->post_author));
    $author_email	= get_the_author_meta( 'email', $post->post_author );
    $author_name	= get_the_author_meta( 'display_name', $post->post_author );
    $auhor_desc		= get_the_author_meta( 'description', $post->post_author );

    // https://github.com/oscarotero/social-links
    $page = new Page([
        'url' => get_permalink(),
        'title' => get_the_title(),
    ]);
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
                    <a class="text-[#757575] hover:text-[#0165E1] transition-colors" href="<?php echo esc_url($page->facebook->shareUrl) ?>" target="_blank" rel="noopener noreferrer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="47" height="47" viewBox="0 0 47 47" fill="none">
                            <path d="M42.3199 23.0833C42.3199 12.465 33.7021 3.8472 23.0838 3.8472C12.4654 3.8472 3.84766 12.465 3.84766 23.0833C3.84766 32.3936 10.4649 40.1457 19.2365 41.9347V28.8541H15.3893V23.0833H19.2365V18.2743C19.2365 14.5617 22.2566 11.5416 25.9692 11.5416H30.7782V17.3125H26.931C25.873 17.3125 25.0074 18.1781 25.0074 19.2361V23.0833H30.7782V28.8541H25.0074V42.2232C34.7216 41.2614 42.3199 33.0669 42.3199 23.0833Z" fill="currentColor"/>
                        </svg>
                    </a>
                   <!-- linkedin share button -->
                    <a class="text-[#757575] hover:text-[#0077b5] transition-colors" href="<?php echo esc_url($page->linkedin->shareUrl) ?>" target="_blank" rel="noopener noreferrer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="43" height="43" viewBox="0 0 47 47" fill="none">
                            <path d="M23.9178 0.924215C11.679 0.924215 1.75781 10.8454 1.75781 23.0842C1.75781 35.323 11.679 45.2442 23.9178 45.2442C36.1566 45.2442 46.0778 35.323 46.0778 23.0842C46.0778 10.8454 36.1566 0.924215 23.9178 0.924215ZM18.4932 32.2691H14.0058V17.8281H18.4932V32.2691ZM16.2218 16.0553C14.8045 16.0553 13.8881 15.0512 13.8881 13.8093C13.8881 12.5421 14.8322 11.5679 16.2795 11.5679C17.7269 11.5679 18.6133 12.5421 18.641 13.8093C18.641 15.0512 17.7269 16.0553 16.2218 16.0553ZM34.8824 32.2691H30.395V24.2661C30.395 22.4033 29.744 21.1383 28.1213 21.1383C26.8817 21.1383 26.1454 21.9947 25.8199 22.8188C25.6998 23.1119 25.6698 23.5274 25.6698 23.9406V32.2668H21.1801V22.4333C21.1801 20.6305 21.1224 19.1231 21.0624 17.8258H24.9612L25.1666 19.8318H25.2566C25.8476 18.89 27.2949 17.5004 29.7163 17.5004C32.6687 17.5004 34.8824 19.4786 34.8824 23.7305V32.2691Z" fill="currentColor"/>
                        </svg>
                    </a>
                    <!-- twitter share button -->
                    <a class="text-[#757575] hover:text-[#00acee] transition-colors" href="<?php echo esc_url($page->twitter->shareUrl) ?>" target="_blank" rel="noopener noreferrer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="47" viewBox="0 0 48 47" fill="none">
                            <path d="M23.9714 2.8854C12.8174 2.8854 3.77344 11.9294 3.77344 23.0833C3.77344 34.2373 12.8174 43.2812 23.9714 43.2812C35.1253 43.2812 44.1693 34.2373 44.1693 23.0833C44.1693 11.9294 35.1253 2.8854 23.9714 2.8854ZM33.6781 18.1105C33.6916 18.3224 33.6916 18.5433 33.6916 18.7597C33.6916 25.3781 28.6511 33.0019 19.4403 33.0019C16.6 33.0019 13.9671 32.1769 11.7489 30.7567C12.1547 30.8018 12.5424 30.8198 12.9572 30.8198C15.3016 30.8198 17.4566 30.0263 19.1743 28.6828C16.9742 28.6377 15.1257 27.195 14.4946 25.2113C15.2655 25.324 15.9598 25.324 16.7533 25.1211C15.6204 24.891 14.6022 24.2757 13.8716 23.3799C13.1409 22.4841 12.743 21.3629 12.7453 20.2069V20.1438C13.408 20.518 14.188 20.7479 15.004 20.7795C14.318 20.3223 13.7554 19.7029 13.3661 18.9762C12.9769 18.2496 12.7729 17.4381 12.7723 16.6137C12.7723 15.6804 13.0158 14.8283 13.4531 14.0889C14.7105 15.6368 16.2796 16.9029 18.0583 17.8046C19.8371 18.7064 21.7857 19.2239 23.7775 19.3233C23.0697 15.9194 25.6124 13.1647 28.6692 13.1647C30.1119 13.1647 31.4103 13.7688 32.3255 14.7427C33.4572 14.5308 34.5392 14.107 35.504 13.5389C35.1298 14.6976 34.3453 15.6759 33.3039 16.2936C34.3138 16.1854 35.2876 15.9058 36.1893 15.5136C35.5085 16.5145 34.6564 17.4026 33.6781 18.1105Z" fill="currentColor"/>
                        </svg>
                    </a>
                    <!-- instagram share button -->
                    <a class="text-[#757575] hover:text-[#25D366] transition-colors" href="<?php echo esc_url($page->whatsapp->shareUrl) ?>" target="_blank" rel="noopener noreferrer">
                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="currentColor" height="48" width="48" version="1.1" id="Layer_1" viewBox="0 0 308 308" xml:space="preserve">
                            <g id="XMLID_468_">
                                <path id="XMLID_469_" d="M227.904,176.981c-0.6-0.288-23.054-11.345-27.044-12.781c-1.629-0.585-3.374-1.156-5.23-1.156   c-3.032,0-5.579,1.511-7.563,4.479c-2.243,3.334-9.033,11.271-11.131,13.642c-0.274,0.313-0.648,0.687-0.872,0.687   c-0.201,0-3.676-1.431-4.728-1.888c-24.087-10.463-42.37-35.624-44.877-39.867c-0.358-0.61-0.373-0.887-0.376-0.887   c0.088-0.323,0.898-1.135,1.316-1.554c1.223-1.21,2.548-2.805,3.83-4.348c0.607-0.731,1.215-1.463,1.812-2.153   c1.86-2.164,2.688-3.844,3.648-5.79l0.503-1.011c2.344-4.657,0.342-8.587-0.305-9.856c-0.531-1.062-10.012-23.944-11.02-26.348   c-2.424-5.801-5.627-8.502-10.078-8.502c-0.413,0,0,0-1.732,0.073c-2.109,0.089-13.594,1.601-18.672,4.802   c-5.385,3.395-14.495,14.217-14.495,33.249c0,17.129,10.87,33.302,15.537,39.453c0.116,0.155,0.329,0.47,0.638,0.922   c17.873,26.102,40.154,45.446,62.741,54.469c21.745,8.686,32.042,9.69,37.896,9.69c0.001,0,0.001,0,0.001,0   c2.46,0,4.429-0.193,6.166-0.364l1.102-0.105c7.512-0.666,24.02-9.22,27.775-19.655c2.958-8.219,3.738-17.199,1.77-20.458   C233.168,179.508,230.845,178.393,227.904,176.981z"/>
                                <path id="XMLID_470_" d="M156.734,0C73.318,0,5.454,67.354,5.454,150.143c0,26.777,7.166,52.988,20.741,75.928L0.212,302.716   c-0.484,1.429-0.124,3.009,0.933,4.085C1.908,307.58,2.943,308,4,308c0.405,0,0.813-0.061,1.211-0.188l79.92-25.396   c21.87,11.685,46.588,17.853,71.604,17.853C240.143,300.27,308,232.923,308,150.143C308,67.354,240.143,0,156.734,0z    M156.734,268.994c-23.539,0-46.338-6.797-65.936-19.657c-0.659-0.433-1.424-0.655-2.194-0.655c-0.407,0-0.815,0.062-1.212,0.188   l-40.035,12.726l12.924-38.129c0.418-1.234,0.209-2.595-0.561-3.647c-14.924-20.392-22.813-44.485-22.813-69.677   c0-65.543,53.754-118.867,119.826-118.867c66.064,0,119.812,53.324,119.812,118.867   C276.546,215.678,222.799,268.994,156.734,268.994z"/>
                            </g>
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    </div>
</section>