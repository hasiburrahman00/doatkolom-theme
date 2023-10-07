<?php

use Doatkolom\Doatkolom;
use Doatkolom\App\Icons;

?>

<section class="max-w-6xl mx-auto py-12  md:py-24 container">
    <div class="text-center md:w-[580px] mx-auto mb-14 ">
        <h5 class="text-[#7B68EE] font-bold mb-2 md:mb-1  uppercase text-xs md:text-base">Our Team</h5>
        <h2 class="text-3xl md:text-5xl font-extrabold mb-4">Meet the awesome people behind Doatkolom</h2>
        <p class="text-secondary">Meet the talented team of designers, marketers, developers, and customer service
            reps that make Doatkolom possible</p>
    </div>
    <!-- md:flex flex-col md:flex-2 md:flex-row -->
    <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div class="px-2 pb-4 rounded-2xl shadow-employee bg-white">
            <div class="text-center pt-6 px-6 pb-4">
                <h4 class="mb-1 text-[#212B36] font-semibold">MD Al Amin</h4>
                <p class="text-[#637381] text-sm">Founder & CEO</p>
            </div>
            <img class="mb-4  mx-auto"
                src="<?php echo esc_url(Doatkolom::url('assets/images/about-us/team-member.webp')) ?>" alt="md al amin"
                loading="lazy" width="261" height="254">
            <ul class="flex justify-between items-center w-6/12 lg:w-9/12 mx-auto ">
                <li class=" h-12 w-12 rounded-full flex items-center justify-center text-[#637381]">
                    <a href="#">
                        <?php Icons::facebookIcon() ?>
                    </a>
                </li>
                <li class=" h-12 w-12 rounded-full flex items-center justify-center text-[#637381]">
                    <a href="#">
                        <?php Icons::instagramIcon() ?>
                    </a>
                </li>
                <li class=" h-12 w-12 rounded-full flex items-center justify-center">
                    <a href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 15 16" fill="none">
                            <path
                                d="M10.125 5.00003C8.83505 4.9956 7.59629 5.50436 6.68181 6.41415C5.76733 7.32394 5.25221 8.56007 5.25 9.85003V14.75C5.25 14.9489 5.32902 15.1397 5.46967 15.2804C5.61032 15.421 5.80109 15.5 6 15.5H7.75C8.16421 15.5 8.5 15.1642 8.5 14.75V9.85003C8.49967 9.39059 8.69483 8.95272 9.03672 8.64581C9.37861 8.33891 9.83493 8.19196 10.2917 8.2417C11.13 8.34728 11.7566 9.06347 11.75 9.90836V14.75C11.75 15.1642 12.0858 15.5 12.5 15.5H14.25C14.6642 15.5 15 15.1642 15 14.75V9.85003C14.9978 8.56007 14.4827 7.32394 13.5682 6.41415C12.6537 5.50436 11.415 4.9956 10.125 5.00003Z"
                                fill="#637381" />
                            <rect y="5.75" width="3.75" height="9.75" rx="0.9" fill="#637381" />
                            <circle cx="1.875" cy="2.375" r="1.875" fill="#637381" />
                        </svg>
                    </a>
                </li>
                <li class=" h-12 w-12 rounded-full flex items-center justify-center">
                    <a href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 21 20" fill="none">
                            <path
                                d="M7.23326 16.6667C9.72277 16.75 12.1402 15.823 13.9357 14.0965C15.7312 12.37 16.7522 9.99085 16.7666 7.5C17.3313 6.80117 17.7506 5.99652 17.9999 5.13333C18.0379 4.99402 17.9907 4.84537 17.8791 4.75364C17.7676 4.6619 17.6126 4.64416 17.4833 4.70833C16.8775 4.99994 16.1532 4.87251 15.6833 4.39166C15.0922 3.74444 14.2643 3.36413 13.3882 3.33744C12.5121 3.31075 11.6626 3.63995 11.0333 4.25C10.1657 5.09016 9.80204 6.32356 10.0749 7.5C7.28326 7.66666 5.3666 6.34166 3.83326 4.525C3.73914 4.4184 3.59089 4.37756 3.45545 4.4209C3.32001 4.46424 3.22302 4.58356 3.20826 4.725C2.61003 8.04347 4.13899 11.3839 7.0416 13.1C6.0913 14.1899 4.75677 14.8705 3.3166 15C3.15841 15.0262 3.03441 15.1501 3.00805 15.3083C2.98169 15.4665 3.05881 15.6239 3.19993 15.7C4.45286 16.3261 5.83262 16.6568 7.23326 16.6667Z"
                                fill="#637381" />
                        </svg>
                    </a>
                </li>
            </ul>
        </div>
        <div class="px-2 pb-4 rounded-2xl shadow-employee bg-white">
            <div class="text-center pt-6 px-6 pb-4">
                <h4 class="mb-1 text-[#212B36] font-semibold">Ashraf Mollah</h4>
                <p class="text-[#637381] text-sm">Co-Founder Lead Frontend</p>
            </div>
            <img class="mb-4  mx-auto"
                src="<?php echo esc_url(Doatkolom::url('assets/images/about-us/team-member.webp')) ?>"
                alt="Ashraf MOllah " loading="lazy" width="261" height="254">
            <ul class="flex justify-between items-center w-6/12 lg:w-9/12 mx-auto ">
                <li class=" h-12 w-12 rounded-full flex items-center justify-center text-[#637381]">
                    <a href="#">
                        <?php Icons::facebookIcon() ?>
                    </a>
                </li>
                <li class=" h-12 w-12 rounded-full flex items-center justify-center text-[#637381]">
                    <a href="#">
                        <?php Icons::instagramIcon() ?>
                    </a>
                </li>
                <li class=" h-12 w-12 rounded-full flex items-center justify-center">
                    <a href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 15 16" fill="none">
                            <path
                                d="M10.125 5.00003C8.83505 4.9956 7.59629 5.50436 6.68181 6.41415C5.76733 7.32394 5.25221 8.56007 5.25 9.85003V14.75C5.25 14.9489 5.32902 15.1397 5.46967 15.2804C5.61032 15.421 5.80109 15.5 6 15.5H7.75C8.16421 15.5 8.5 15.1642 8.5 14.75V9.85003C8.49967 9.39059 8.69483 8.95272 9.03672 8.64581C9.37861 8.33891 9.83493 8.19196 10.2917 8.2417C11.13 8.34728 11.7566 9.06347 11.75 9.90836V14.75C11.75 15.1642 12.0858 15.5 12.5 15.5H14.25C14.6642 15.5 15 15.1642 15 14.75V9.85003C14.9978 8.56007 14.4827 7.32394 13.5682 6.41415C12.6537 5.50436 11.415 4.9956 10.125 5.00003Z"
                                fill="#637381" />
                            <rect y="5.75" width="3.75" height="9.75" rx="0.9" fill="#637381" />
                            <circle cx="1.875" cy="2.375" r="1.875" fill="#637381" />
                        </svg>
                    </a>
                </li>
                <li class=" h-12 w-12 rounded-full flex items-center justify-center">
                    <a href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 21 20" fill="none">
                            <path
                                d="M7.23326 16.6667C9.72277 16.75 12.1402 15.823 13.9357 14.0965C15.7312 12.37 16.7522 9.99085 16.7666 7.5C17.3313 6.80117 17.7506 5.99652 17.9999 5.13333C18.0379 4.99402 17.9907 4.84537 17.8791 4.75364C17.7676 4.6619 17.6126 4.64416 17.4833 4.70833C16.8775 4.99994 16.1532 4.87251 15.6833 4.39166C15.0922 3.74444 14.2643 3.36413 13.3882 3.33744C12.5121 3.31075 11.6626 3.63995 11.0333 4.25C10.1657 5.09016 9.80204 6.32356 10.0749 7.5C7.28326 7.66666 5.3666 6.34166 3.83326 4.525C3.73914 4.4184 3.59089 4.37756 3.45545 4.4209C3.32001 4.46424 3.22302 4.58356 3.20826 4.725C2.61003 8.04347 4.13899 11.3839 7.0416 13.1C6.0913 14.1899 4.75677 14.8705 3.3166 15C3.15841 15.0262 3.03441 15.1501 3.00805 15.3083C2.98169 15.4665 3.05881 15.6239 3.19993 15.7C4.45286 16.3261 5.83262 16.6568 7.23326 16.6667Z"
                                fill="#637381" />
                        </svg>
                    </a>
                </li>
            </ul>
        </div>
        <div class="px-2 pb-4 rounded-2xl shadow-employee bg-white">
            <div class="text-center pt-6 px-6 pb-4">
                <h4 class="mb-1 text-[#212B36] font-semibold">Ashik Prottoy</h4>
                <p class="text-[#637381] text-sm">Designer</p>
            </div>
            <img class="mb-4  mx-auto"
                src="<?php echo esc_url(Doatkolom::url('assets/images/about-us/team-member.webp')) ?>"
                alt="Ashik Prottoy" loading="lazy" width="261" height="254">
            <ul class="flex justify-between items-center w-6/12 lg:w-9/12 mx-auto ">
                <li class=" h-12 w-12 rounded-full flex items-center justify-center text-[#637381]">
                    <a href="#">
                        <?php Icons::facebookIcon() ?>
                    </a>
                </li>
                <li class=" h-12 w-12 rounded-full flex items-center justify-center text-[#637381]">
                    <a href="#">
                        <?php Icons::instagramIcon() ?>
                    </a>
                </li>
                <li class=" h-12 w-12 rounded-full flex items-center justify-center">
                    <a href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 15 16" fill="none">
                            <path
                                d="M10.125 5.00003C8.83505 4.9956 7.59629 5.50436 6.68181 6.41415C5.76733 7.32394 5.25221 8.56007 5.25 9.85003V14.75C5.25 14.9489 5.32902 15.1397 5.46967 15.2804C5.61032 15.421 5.80109 15.5 6 15.5H7.75C8.16421 15.5 8.5 15.1642 8.5 14.75V9.85003C8.49967 9.39059 8.69483 8.95272 9.03672 8.64581C9.37861 8.33891 9.83493 8.19196 10.2917 8.2417C11.13 8.34728 11.7566 9.06347 11.75 9.90836V14.75C11.75 15.1642 12.0858 15.5 12.5 15.5H14.25C14.6642 15.5 15 15.1642 15 14.75V9.85003C14.9978 8.56007 14.4827 7.32394 13.5682 6.41415C12.6537 5.50436 11.415 4.9956 10.125 5.00003Z"
                                fill="#637381" />
                            <rect y="5.75" width="3.75" height="9.75" rx="0.9" fill="#637381" />
                            <circle cx="1.875" cy="2.375" r="1.875" fill="#637381" />
                        </svg>
                    </a>
                </li>
                <li class=" h-12 w-12 rounded-full flex items-center justify-center">
                    <a href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 21 20" fill="none">
                            <path
                                d="M7.23326 16.6667C9.72277 16.75 12.1402 15.823 13.9357 14.0965C15.7312 12.37 16.7522 9.99085 16.7666 7.5C17.3313 6.80117 17.7506 5.99652 17.9999 5.13333C18.0379 4.99402 17.9907 4.84537 17.8791 4.75364C17.7676 4.6619 17.6126 4.64416 17.4833 4.70833C16.8775 4.99994 16.1532 4.87251 15.6833 4.39166C15.0922 3.74444 14.2643 3.36413 13.3882 3.33744C12.5121 3.31075 11.6626 3.63995 11.0333 4.25C10.1657 5.09016 9.80204 6.32356 10.0749 7.5C7.28326 7.66666 5.3666 6.34166 3.83326 4.525C3.73914 4.4184 3.59089 4.37756 3.45545 4.4209C3.32001 4.46424 3.22302 4.58356 3.20826 4.725C2.61003 8.04347 4.13899 11.3839 7.0416 13.1C6.0913 14.1899 4.75677 14.8705 3.3166 15C3.15841 15.0262 3.03441 15.1501 3.00805 15.3083C2.98169 15.4665 3.05881 15.6239 3.19993 15.7C4.45286 16.3261 5.83262 16.6568 7.23326 16.6667Z"
                                fill="#637381" />
                        </svg>
                    </a>
                </li>
            </ul>
        </div>
        <div class="px-2 pb-4 rounded-2xl shadow-employee bg-white">
            <div class="text-center pt-6 px-6 pb-4">
                <h4 class="mb-1 text-[#212B36] font-semibold">Hasibur Rahman</h4>
                <p class="text-[#637381] text-sm">Intern Frontend Developer</p>
            </div>
            <img class="mb-4  mx-auto"
                src="<?php echo esc_url(Doatkolom::url('assets/images/about-us/team-member.webp')) ?>"
                alt="Hasibur Rahman" loading="lazy" width="261" height="254">
            <ul class="flex justify-between items-center w-6/12 lg:w-9/12 mx-auto ">
                <li class=" h-12 w-12 rounded-full flex items-center justify-center text-[#637381]">
                    <a href="#">
                        <?php Icons::facebookIcon() ?>
                    </a>
                </li>
                <li class=" h-12 w-12 rounded-full flex items-center justify-center text-[#637381]">
                    <a href="#">
                        <?php Icons::instagramIcon() ?>
                    </a>
                </li>
                <li class=" h-12 w-12 rounded-full flex items-center justify-center">
                    <a href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 15 16" fill="none">
                            <path
                                d="M10.125 5.00003C8.83505 4.9956 7.59629 5.50436 6.68181 6.41415C5.76733 7.32394 5.25221 8.56007 5.25 9.85003V14.75C5.25 14.9489 5.32902 15.1397 5.46967 15.2804C5.61032 15.421 5.80109 15.5 6 15.5H7.75C8.16421 15.5 8.5 15.1642 8.5 14.75V9.85003C8.49967 9.39059 8.69483 8.95272 9.03672 8.64581C9.37861 8.33891 9.83493 8.19196 10.2917 8.2417C11.13 8.34728 11.7566 9.06347 11.75 9.90836V14.75C11.75 15.1642 12.0858 15.5 12.5 15.5H14.25C14.6642 15.5 15 15.1642 15 14.75V9.85003C14.9978 8.56007 14.4827 7.32394 13.5682 6.41415C12.6537 5.50436 11.415 4.9956 10.125 5.00003Z"
                                fill="#637381" />
                            <rect y="5.75" width="3.75" height="9.75" rx="0.9" fill="#637381" />
                            <circle cx="1.875" cy="2.375" r="1.875" fill="#637381" />
                        </svg>
                    </a>
                </li>
                <li class=" h-12 w-12 rounded-full flex items-center justify-center">
                    <a href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 21 20" fill="none">
                            <path
                                d="M7.23326 16.6667C9.72277 16.75 12.1402 15.823 13.9357 14.0965C15.7312 12.37 16.7522 9.99085 16.7666 7.5C17.3313 6.80117 17.7506 5.99652 17.9999 5.13333C18.0379 4.99402 17.9907 4.84537 17.8791 4.75364C17.7676 4.6619 17.6126 4.64416 17.4833 4.70833C16.8775 4.99994 16.1532 4.87251 15.6833 4.39166C15.0922 3.74444 14.2643 3.36413 13.3882 3.33744C12.5121 3.31075 11.6626 3.63995 11.0333 4.25C10.1657 5.09016 9.80204 6.32356 10.0749 7.5C7.28326 7.66666 5.3666 6.34166 3.83326 4.525C3.73914 4.4184 3.59089 4.37756 3.45545 4.4209C3.32001 4.46424 3.22302 4.58356 3.20826 4.725C2.61003 8.04347 4.13899 11.3839 7.0416 13.1C6.0913 14.1899 4.75677 14.8705 3.3166 15C3.15841 15.0262 3.03441 15.1501 3.00805 15.3083C2.98169 15.4665 3.05881 15.6239 3.19993 15.7C4.45286 16.3261 5.83262 16.6568 7.23326 16.6667Z"
                                fill="#637381" />
                        </svg>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</section>