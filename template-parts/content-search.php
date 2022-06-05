<?php 
    
    use Doatkolom\View;
    use Doatkolom\Icons;

    if (!defined('ABSPATH')) die('Direct access forbidden.');

?>

<article class="sm:p-4 md:p-7 rounded-md sm:bg-doatkolom-gray-100 sm:flex items-center">
    
    <a href="<?php the_permalink(); ?>" style="max-width: 260px;" class="group ease-linear duration-200">
        <figure class="relative rounded-md overflow-hidden border sm:border-0">
            <?php View::thumbnail(['class' => 'w-full']) ?>
            <figcaption class="absolute left-0 top-0 w-full h-full bg-doatkolom-black-800/80 flex justify-center items-center ease-linear duration-150 opacity-0 group-hover:opacity-100">
                <span class="bg-white font-lato text-doatkolom-black-800 py-2 px-4 inline-block text-md rounded-sm font-semibold">View Post</span>
            </figcaption>
        </figure>
    </a>
    
    <div class="flex flex-col-reverse sm:grid sm:ml-3 lg:ml-7 ease-linear duration-200 doatkolom-view-mode-content">
        <h2 class="doatkolom-article-title text-doatkolom-black-800 text-lg lg:text-2xl md:mb-4 mt-2 md:mt-0 font-lato font-semibold hover:text-doatkolom-purple-800 ease-linear duration-100"><?php View::article_title()?></h2>
        
        <div class="mt-3 md:mt-0 flex flex-wrap items-center space-x-4">
            <div class="flex items-center text-left">
                <span class="w-4 mr-1"><?php Icons::user(['fill' => '#28375a']); ?></span>
                <span class="text-doatkolom-black-800 text-sm"><?php View::author_name();?></span>
            </div>
            <div class="flex items-center text-left">
                <span class="w-4 mr-1"><?php Icons::folderOpen(['fill' => '#28375a']); ?></span>
                <span class="text-doatkolom-black-800 text-sm"><?php View::categories(1);?></span>
            </div>
            <div class="hidden md:flex items-center text-left doatkolom-meta-date">
                <span class="w-4 mr-1"><?php Icons::clock(['fill' => '#28375a']); ?></span>
                <span class="text-doatkolom-black-800 text-sm"><?php View::date();?></span>
            </div>
        </div>
    </div>

</article>