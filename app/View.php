<?php

namespace Doatkolom\App;
class View {

	public static function page_title( string $title ) {
		add_filter( 'pre_get_document_title', function () use ($title) {
        	return $title;
		}, 900, 1);
	}

	public static function part( $filename = '', $arg = [] ) {
		get_template_part('views/' . $filename, null, $arg);
	}

	public static function categories( $limit = false ) {

		$category_list = get_the_category();
		
		if( $limit === false ) {
			$limit = count( $category_list );
		}

		foreach( $category_list as $k => $cat ):
			if( $k < $limit ) {
				?>
				<a  class="text-primary uppercase font-semibold text-sm transition-colors duration-200 ease-out hover:underline" href="<?php echo esc_url(get_category_link($cat->term_id)) ?>">
					<?php 
						echo esc_html( $cat->name );
						echo $k === $limit - 1 ? '' :  esc_html(','); 
					?>
				</a>
				<?php 
			} 
		endforeach;
	}

	public static function excerpt( int $words = 16 ) {
		$excerpt		 = get_the_excerpt();
		$trimmed_content = wp_trim_words( $excerpt, $words );

		if( !empty( $trimmed_content ) ) {
			echo $trimmed_content;
		}

	}

	public static function duration() {
        // get the content
        $the_content = get_the_content();
        // count the number of words
        $words = str_word_count( strip_tags( $the_content ) );
        // rounding off and deviding per 200 words per minute
        $minute = floor( $words / 200 );
		$minute = $minute < 1 ? 1 : $minute;
        // calculate the amount of time needed to read
        $estimate = $minute . ' Min' . ( $minute == 1 ? '' : 's' ) 

        ?>
            <span class="inline-block font-primary text-sm text-[#2B2C34]">
				<?php echo sprintf( 
                    '%s' . esc_html__(' Read', 'chatway-theme'), $estimate ) 
                ?>
            </span>
        <?php 
    }

	public static function date () {
		if( get_post_type() === 'post' ) : 
			?>
				<span class="text-sm text-secondary font-primary">
					<?php echo get_the_date('M d, Y'); ?>
				</span>
			<?php 
		endif;
	}
}