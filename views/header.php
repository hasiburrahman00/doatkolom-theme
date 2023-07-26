<?php 
use Doatkolom\Doatkolom;
?>

<doatkolom-header>
    <header class="bg-white py-2 lg:py-5">
        <div class="container mx-auto max-w-7xl px-4">
            <a href="<?php echo Doatkolom::site_url() ?>" aria-label="doatkolom home page">
                <picture>
                    <source 
                        srcset="<?php echo Doatkolom::url('assets/images/logos/doatkolom.svg') ?>"
                        media="(max-width: 575px)"
                        width="50"
                        height="50"
                    />
                    <img
                        loading="lazy"
                        src="<?php echo Doatkolom::url('assets/images/logos/doatkolom-full.svg') ?>"
                        width="206"
                        height="42px"
                    />
                </picture>
            </a>
            <h1>Navbar Menu</h1>
        </div>
    </header>
</doatkolom-header>