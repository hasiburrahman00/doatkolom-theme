<?php 
    if (!defined('ABSPATH')) exit;
?>

<div  class="max-w-[700px] px-3 mx-auto text-center py-8 md:py-12 text-secondary">
    <h2 class="text-3xl md:text-6xl font-bold capitalize">No Search Result found</h2>
    <p class="max-w-lg pt-4 mx-auto text-secondary/70 pb-10">Sorry, we couldn't find the page you're looking for. Perhaps you've mistyped the URL? Be sure to check your spelling.</p>
    <a 
        class="inline-flex gap-1 primary-btn-bg text-white font-semibold px-10 py-4 text-base rounded-lg capitalize transition-opacity hover:opacity-95" 
        aria-label="visit doatkolom blog page" 
        href="<?php echo get_permalink( get_option( 'page_for_posts' ) ); ?>"
    >
        Go back to blog page
    </a>
</div>