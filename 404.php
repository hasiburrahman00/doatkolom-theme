<?php 
use Doatkolom\App\View;
use Doatkolom\Doatkolom;

if ( ! defined( 'ABSPATH' ) ) exit; // Exit if accessed directly
View::page_title('404');
get_header();
?>
 <main class="py-16 md:py-20">
    <div class="container mx-auto px-5">
        <div class="flex items-center flex-col justify-center py-12">
            <picture>
                <img 
                    src="<?php echo Doatkolom::url('assets/images/common/404.webp') ?>" 
                    loading="lazy" 
                    width="370" 
                    height="222" 
                    class="w-[280px]"
                >
            </picture>
            <h1 class="font-semibold text-2xl sm:text-3xl md:text-4xl pt-6">Page Not Found!</h1>
            <p class="pt-2 max-w-md mx-auto text-center">
                Oops! The page you're looking for couldn't be found. Please try one of these options:                
            </p>
            <div class="pt-5 grid w-full grid-cols-2 items-center gap-y-4 gap-x-2 max-w-md mx-auto">
                <!-- sign in -->
                <a 
                    aria-label="visit sign in page" 
                    class="px-2 py-3 w-full rounded-md text-sm font-semibold text-primary bg-primary/10 inline-block hover:bg-primary hover:text-white duration-200 ease-linear transition-colors text-center" 
                    href="<?php echo Doatkolom::sign_in_url() ?>"
                >
                    Sign in                    
                </a>
                <!-- homepage -->
                <a 
                    aria-label="visit homepage" 
                    class="px-2 py-3 w-full rounded-md text-sm font-semibold text-primary bg-primary/10 inline-block hover:bg-primary hover:text-white duration-200 ease-linear transition-colors text-center" 
                    href="<?php echo Doatkolom::site_url() ?>"
                >
                    Homepage                    
                </a>
            </div>
        </div>
    </div>
</main>
<?php
get_footer();
?>