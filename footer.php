<?php 
use \Doatkolom\App\View;
if (!defined('ABSPATH')) exit;
?>

<footer class="bg-[#0c131a] text-[#989ca0]">
    <div style="border-bottom: 1px solid rgba(255,255,255,.06)">
        <div class="container max-w-7xl mx-auto md:flex justify-between py-8">
            <ul class="flex space-x-6 mb-8 md:mb-0">
                <li><a href=""><i class=" text-white fa-brands fa-facebook text-xl"></i></a></li>
                <li><a href=""><i class=" text-white fa-brands fa-twitter text-xl"></i></a></li>
                <li><a href=""><i class=" text-white fa-brands fa-youtube text-xl"></i></a></li>
                <li><a href=""><i class=" text-white fa-brands fa-linkedin text-xl"></i></a></li>
                <li><a href=""><i class=" text-white fa-brands fa-dribbble text-xl"></i></a></li>
            </ul>
            <ul class="flex space-x-3 md:space-x-7">
                <li><a class="hover:text-white duration-700 text-xs sm:text-sm" href="">Blog</a></li>
                <li><a class="hover:text-white duration-700 text-xs sm:text-sm" href="">Affiliates</a></li>
                <li><a class="hover:text-white duration-700 text-xs sm:text-sm" href="">Pricing</a></li>
                <li><a class="hover:text-white duration-700 text-xs sm:text-sm" href="">Downloads</a></li>
                <li><a class="hover:text-white duration-700 text-xs sm:text-sm" href="">LIve Demos</a></li>
            </ul>
        </div>
    </div>

    <div class=" container max-w-7xl mx-auto pt-12">
        <section class="company-info grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-y-12">
            <div>
                <h2 class="text-xl font-bold text-white mb-8">Company </h2>
                <ul class="space-y-4">
                    <li class="list-none capitalize hover:text-white duration-700 "><a href="">About</a></li>
                    <li class="list-none capitalize hover:text-white duration-700 "><a href="">Contact Form</a></li>
                </ul>
            </div>
            <div>
                <h2 class="text-xl font-bold text-white mb-8">Products</h2>
                <ul class="space-y-4">
                    <li class="list-none capitalize hover:text-white duration-700 "><a href="">Joomla template</a>
                    </li>
                    <li class="list-none capitalize hover:text-white duration-700 "><a href="">sp page builder</a>
                    </li>
                    <li class="list-none capitalize hover:text-white duration-700 "><a href="">joomla extensions</a>
                    </li>
                    <li class="list-none capitalize hover:text-white duration-700 "><a href="">Helix famework</a>
                    </li>
                </ul>
            </div>
            <div>
                <h2 class="text-xl font-bold text-white mb-8">Supports</h2>
                <ul class="space-y-4">
                    <li class="list-none capitalize hover:text-white duration-700 "><a href="">documentation</a>
                    </li>
                    <li class="list-none capitalize hover:text-white duration-700 "><a href="">forums</a></li>
                    <li class="list-none capitalize hover:text-white duration-700 "><a href="">FAQs</a></li>
                    <li class="list-none capitalize hover:text-white duration-700 "><a href="">Support policy</a>
                    </li>
                </ul>
            </div>
            <div>
                <h2 class="text-xl font-bold text-white mb-8">Terms</h2>
                <ul class="space-y-4">
                    <li class="list-none capitalize hover:text-white duration-700 "><a href="">terms of use</a></li>
                    <li class="list-none capitalize hover:text-white duration-700 "><a href="">copy right notice</a>
                    </li>
                    <li class="list-none capitalize hover:text-white duration-700 "><a href="">refound policy</a>
                    </li>
                    <li class="list-none capitalize hover:text-white duration-700 "><a href="">privacy policy</a>
                    </li>
                </ul>
            </div>
            <div class="col-span-2">
                <h2 class="text-xl font-bold text-white mb-8">NewsLetter</h2>
                <p class="w-10/12 mb-4">Don’t miss any updates of our new templates and extensions and all the
                    astonishing offers we bring for you.</p>
                <div class="mt-8 flex">
                    <input class="w-44 sm:w-auto outline-none bg-[#373a41] border-[#373a41] text-[#b0b4b8] sm:ps-4 ps-2 sm:pr-8 pr-2 capitalize py-4 rounded-l-lg" placeholder="Enter your Email" type="text" name="" id="">
                    <button style="margin-left: -5px" class="sm:py-4 sm:px-8 py-2  px-2 bg-primary font-semibold text-white rounded-r-lg mx--2">Subscribe</button>
                </div>
            </div>
        </section>
    </div>

    <div class="pt-12 pb-4 md:pb-0 text-[#b0b4b8]">
        <hr>
        <div class="container max-w-7xl mx-auto md:flex justify-between">
            <div>
                <h4 class="text-white text-sm sm:text-xl my-8">© 2010 -2023 Doatkolom. All Rights Reserved.</h4>
                <p class="text-xs">Doatkolom is not affiliated with or endorsed by Open Source Matters or the
                    Joomla! Project.
                </p>
            </div>
            <div class="my-8">
                <div class="flex items-center md:justify-end">
                    <img src="./images/secure.png" class="w-4 mr-2" alt="">
                    <h5 class="text-right"> Secure Payments
                    </h5>
                </div>
                <ul class="flex gap-2 mt-4 justify-end">
                    <i class="fa-brands fa-cc-paypal text-3xl "></i>
                    <i class="fa-brands fa-cc-stripe text-3xl"></i>
                    <i class="fa-brands fa-cc-visa text-3xl "></i>
                    <i class="fa-brands fa-cc-mastercard text-3xl"></i>
                    <i class="fa-brands fa-cc-amex text-3xl w-full"></i>
                </ul>
            </div>
        </div>
    </div>
</footer>

<?php 
View::part('document-close');