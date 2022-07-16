<?php 
    use DoatKolom\Icons;
    //**** DO NOT APPLY ANY STYLE INTO THIS <sidebar> TAG

    $data = array(
        [
            "icon" => "noticeBoard",
            "label" => "Notice Board"
        ],
        [
            "icon" => "eventsColor",
            "label" => "Upcoming Events"
        ],
        [
            "icon" => "resultColor",
            "label" => "Exam Result"
        ],
        [
            "icon" => "syllabusColor",
            "label" => "Syllabus"
        ],
        [
            "icon" => "classRoutineColor",
            "label" => "Class Routine"
        ],
        [
            "icon" => "examRoutineColor",
            "label" => "Exam Routine"
        ],
        [
            "icon" => "galleryColor",
            "label" => "Photo Gallery"
        ],
        [
            "icon" => "chatColor",
            "label" => "Applications/Support"
        ],
        [
            "icon" => "institutionColor",
            "label" => "Our Teachers"
        ]
    );
?>
<sidebar id="doatkolom-quick-menu" class="hidden bg-white rounded-md border border-solid border-primary-10 shadow-xl" style="width: 600px;">
    <div class="hidden lg:block px-5 py-10">
        <ul class="grid grid-cols-3 gap-10 list-none">
            <?php foreach( $data as $item ): ?>
            <li>
                <a href="#" class="flex font-secondary space-y-3 hover:text-secondary items-center justify-center flex-col no-underline text-primary text-base">
                    <?php echo call_user_func(array('DoatKolom\Icons', $item['icon'])) ?>
                    <span><?php echo esc_html($item['label']) ?></span>
                </a>
            </li>
            <?php endforeach; ?>
        </ul>
    </div>
</sidebar>