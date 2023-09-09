<?php
    use Doatkolom\App\View;
    if (!defined('ABSPATH')) exit;
?>

<div class="inline-flex gap-x-2 items-center">
    <a href="<?php echo get_author_posts_url( get_the_author_meta( 'ID' ) ); ?>">
        <?php echo get_avatar( get_the_author_meta( 'ID' ), 42, null, null, [
            'class' => 'rounded-full overflow-hidden min-w-[42px] min-h-[42px] max-w-[42px] max-h-[42px]',
            'width' => 42,
            'height' => 42
        ] ); ?>
    </a>
    <div class="grid">
        <a 
            href="<?php echo get_author_posts_url( get_the_author_meta( 'ID' ) ); ?>" 
            class="block leading-none text-base font-semibold text-secondary hover:underline capitalize">
            <?php echo esc_html( get_the_author_meta( 'display_name' ) ); ?>
        </a>
        <div class="flex items-center gap-x-3">
            <?php View::date() ?> 
            <span class="text-[#C7C7C7]">|</span>
            <?php View::duration() ?>
        </div>
    </div>
</div>