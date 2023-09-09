<?php 
namespace Doatkolom\App;

class Helper {
    public static function isBlog() {
        return is_archive() || is_author() || is_category() || is_home() || is_single() || is_tag() || is_search();
    }
}