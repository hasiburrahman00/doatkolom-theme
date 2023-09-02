<?php 
    use Doatkolom\App\View;
?>

<section class="bg-white pt-8 md:pt-16">
    <div class="container px-0 grid">
        <p class="text-sm md:text-base font-extrabold text-[#637381] pb-2 px-3 uppercase">Resources</p>
        <h1 class="text-3xl md:text-4xl lg:text-6xl font-extrabold px-3">Doatkolom Blog</h1>
        <?php 
            View::part('blog/archive-category');
        ?>
    </div>
</section>