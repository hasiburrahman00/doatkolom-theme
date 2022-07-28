<?php 
    $data = [
        "title" => "Explore DoatKolom",
        "menus" => array(
            [
                "text"=> "eLearning School",
                "href"=> "#",
                "badge"=> "New Feature"
            ],
            [
                "text"=> "Privacy Policy",
                "href"=> "#"
            ],
            [
                "text"=> "Courses",
                "href"=> "#"
            ],
            [
                "text"=> "Become A Teacher",
                "href"=> "#"
            ],
            [
                "text"=> "Blog",
                "href"=> "#"
            ],
            [
                "text"=> "All Courses",
                "href"=> "#"
            ],
            [
                "text"=> "Web Development",
                "href"=> "#"
            ],
            [
                "text"=> "General Education",
                "href"=> "#"
            ],
            [
                "text"=> "Digital Marketing",
                "href"=> "#"
            ],
            [
                "text"=> "Web Design",
                "href"=> "#"
            ]
        )
    ];
?>

<div>
    <h4 class="text-xl mb-5 font-weight_secondary font-primary text-primary"><?php echo esc_html($data['title']) ?></h4>  
    <ul class="grid sm:grid-cols-2 gap-3 list-none">
        <?php foreach( $data['menus'] as $menu ): ?>
        <li>
            <a class="no-underline text-base text-primary hover:underline" href="<?php echo esc_url($menu['href']) ?>">
                <?php echo esc_html($menu['text']) ?>
            </a>
        </li>
        <?php endforeach; ?>
    </ul>
</div>