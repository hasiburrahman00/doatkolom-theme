<?php 
    use Doatkolom\App\View;
?>

<section class="bg-white pt-16">
    <div class="container grid">
        <p class="text-base font-extrabold text-[#637381] pb-2">Resources</p>
        <h1 class="text-6xl font-extrabold">Doatkolom Blog</h1>
        <?php 
            View::part('blog/archive-category');
        ?>
    </div>
</section>