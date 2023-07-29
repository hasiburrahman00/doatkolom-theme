<?php 
use Doatkolom\App\View;
View::page_title('Blog');

get_header();
View::part('home/hero');
View::part('home/products');
View::part('home/why-choose');
View::part('home/community');

get_footer();

?>