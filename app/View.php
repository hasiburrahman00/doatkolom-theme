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
}