<?php 
    $data = [
        "title" => "Explore DoatKolom",
        "menus" => array(
            [
                "text"=> "Dummy URL A",
                "href"=> "//about.doatkolom.com",
                "badge"=> "New Feature"
            ],
            [
                "text"=> "Privacy Policy",
                "href"=> "//about.doatkolom.com"
            ],
            [
                "text"=> "DEMO URL",
                "href"=> "//about.doatkolom.com"
            ],
            [
                "text"=> "Become A Teacher",
                "href"=> "//about.doatkolom.com"
            ],
            [
                "text"=> "Blog",
                "href"=> "//about.doatkolom.com"
            ],
            [
                "text"=> "All Subjects Demo",
                "href"=> "//about.doatkolom.com"
            ],
            [
                "text"=> "Web Development",
                "href"=> "//about.doatkolom.com"
            ],
            [
                "text"=> "General Education",
                "href"=> "//about.doatkolom.com"
            ],
            [
                "text"=> "Digital",
                "href"=> "//about.doatkolom.com"
            ],
            [
                "text"=> "Web Design",
                "href"=> "//about.doatkolom.com"
            ]
        )
    ];
?>

<div>
    <h4 class="text-xl mb-5 font-weight_tertiary font-primary text-title"><?php echo esc_html($data['title']) ?></h4>  
    <ul class="grid sm:grid-cols-2 gap-3 list-none">
        <?php foreach( $data['menus'] as $menu ): ?>
        <li>
            <a target="_blank" class="no-underline font-secondary font-weight_primary text-base text-black hover:underline" href="<?php echo esc_url($menu['href']) ?>">
                <?php echo esc_html($menu['text']) ?>
            </a>
        </li>
        <?php endforeach; ?>
    </ul>
</div>