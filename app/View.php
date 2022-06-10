<?php

namespace Doatkolom;

class View {

	public static $view_dir = '';

	/**
	 * Render View Template With Data
	 *
	 * Locates a view template and includes it within the same scope as a data object/array. This makes it possible to
	 * access raw data in the template.
	 *
	 * Note: Any data passed into this function will be casted as an array and then as an object. The final data available
	 * within a template is in the form of an object with the variable name $data.
	 *
	 * e.g.
	 *
	 *      array('name' => 'Bob', 'age' => 42)
	 *
	 * Will be converted to an object to be used as;
	 *
	 *      $data->name
	 *      $data->age
	 *
	 * @param string|null $name A named variation for the template. This is in the form {$name}.php. Can include directories, where necessary.
	 * @param object|array $data An associative array or object to use inside the template.
	 * @param string $suffix The file suffix.
	 *
	 * @return  string
	 */
	public static function prepare( $name, $data = [], $suffix = '.php' ) {

		$markup = '';
		$path = self::get_full_path( $name . $suffix );

		if ( $t = self::view_template_exists( $path ) ) {
			$data = self::prepare_data( $data );
			ob_start();
			include $path;
			$markup = ob_get_clean();
		}

		return $markup;
	}

	/**
	 * Use this to echo out templates
	 *
	 * @param $name
	 * @param array $data
	 * @param string $suffix
	 */
	public static function render( $name, $data = [], $suffix = '.php' ) {
		echo self::prepare( $name, $data, $suffix );
	}

	public static function page_title( string $title ) {
		add_filter( 'pre_get_document_title', function () use ($title) {
        	return $title;
		}, 900, 1);
	}

	/**
	 * Casts data to an object for use int the template
	 *
	 * @param $data
	 *
	 * @return object
	 */
	private static function prepare_data( $data ) {

		// if data is not already an object, cast as object
		if ( ! is_object( $data ) ) {
			$data = (object) (array) $data;
		}

		return $data;
	}

	/**
	 * Making sure the template exists
	 *
	 * @param $name
	 *
	 * @return bool
	 */
	private static function view_template_exists( $name ) {
		return file_exists( $name );
	}

	/**
	 * Pieces together the full path to the file
	 *
	 * @param $name
	 *
	 * @return string
	 */
	private static function get_full_path( $name ) {
		return trailingslashit( self::$view_dir ) . ltrim( $name, '/' );
	}

	/**
	 * 
	 * show article title
	 * 
	 */
	public static function article_title( string $classes = '', $title_length = 10 ) {
		?>
		<a href="<?php the_permalink(); ?>" class="<?php echo esc_attr($classes) ?>">
			<?php
				echo wp_trim_words( get_the_title(), $title_length, null ) 
			?>
		</a>  
		<?php
	}

	/**
	 * 
	 * print author name
	 * @since 1.0.0
	 * 
	 */
	public static function author_name ( string $classes = '' ) {
		?>
			<a 
				href="<?php echo esc_url( get_author_posts_url( get_the_author_meta( 'ID' ) ) ) ?>"
				class="<?php echo esc_attr( $classes ) ?>"
			>
				<?php echo esc_html( get_the_author())  ?>
			</a>
		<?php 
	}

	/**
	 * 
	 * 
	 * pritn the categories 
	 * 
	 */ 

	 public static function categories( $limit = false ) {

		$category_list = get_the_category();
		
		if( $limit === false ) {
			$limit = count( $category_list );
		}

		foreach( $category_list as $k => $cat ):
			if( $k < $limit ) {
				?>
				<a href="<?php echo esc_url(get_category_link($cat->term_id)) ?>">
					<?php 
						echo esc_html( $cat->name );
						echo $k === $limit - 1 ? '' :  esc_html(','); 
					?>
				</a>
				<?php 
			} 
		endforeach;
	}

	public static function date ( string $classes = '' ) {
		if( get_post_type() === 'post' ) : 
		echo get_the_date();
		endif;
	}

	/**
	 * 
	 * Show attachment of a post
	 * It by default thumbnail will be grab. In case the thumbnail is not available then first attachment will be grabed
	 * 
	 */

	public static function attachment( int $num = 1 ) {
		$output = '';
		if( has_post_thumbnail() && $num == 1 ): 
			$output = wp_get_attachment_url( get_post_thumbnail_id( get_the_ID( ) ));
		else: 
			$attachments = get_children([
				'post_type'			=> 'attachment',
				'posts_per_page'	=> $num,
				'post_mime_type' 	=> 'image',
				'post_parent'		=> get_the_ID(),
			]);

			if( $attachments && $num == 1 ):
				foreach( $attachments as $attachment ):
					$output = wp_get_attachment_url( $attachment->ID );
				endforeach;
			elseif ( $attachments && $num > 1 ):
				$output = $attachments;
			endif;

			wp_reset_postdata();
		endif;
		
		return $output;
	}

	public static function thumbnail( $attr = '', $size = 'post-thumbnail' ) {
		if(  has_post_thumbnail() ) {
			echo get_the_post_thumbnail( null, $size, $attr );
		}
	}

	public static function getPremioPostViews( $postID ){
		$count_key = 'post_views_count';
		$count = get_post_meta($postID, $count_key, true);
		if( $count == '' ) {
			delete_post_meta($postID, $count_key);
			add_post_meta($postID, $count_key, '0');
			return "0 View";
		}
		return $count.' Views';
	}

	public static function setPremioPostViews($postID) {
		$count_key = 'post_views_count';
		$count = get_post_meta($postID, $count_key, true);
		if($count==''){
			$count = 0;
			delete_post_meta($postID, $count_key);
			add_post_meta($postID, $count_key, '0');
		}else{
			$count++;
			update_post_meta($postID, $count_key, $count);
		}
	}
	 

}