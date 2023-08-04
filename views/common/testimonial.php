<?php 
use Doatkolom\Doatkolom;

$data = array(
  [
    'image' => Doatkolom::url('assets/images/testimonial/valerie.webp'),
    'name' => 'Andrea',
    'designation' => 'Websites San Diego',
    'feedback' => "I've never seen such prompt and helpful customer care from a plug-in and it's rare to see pretty much anywhere these days. I'm thrilled Chaty is working exactly as advertised!"
  ],
  [
    'image' => Doatkolom::url('assets/images/testimonial/valerie.webp'),
    'name' => 'Andrea',
    'designation' => 'Websites San Diego',
    'feedback' => "I've never seen such prompt and helpful customer care from a plug-in and it's rare to see pretty much anywhere these days. I'm thrilled Chaty is working exactly as advertised! I've never seen such prompt and helpful customer care from a plug-in and it's rare to see pretty much anywhere these days. I'm thrilled Chaty is working exactly as advertised!"
  ],
  [
    'image' => Doatkolom::url('assets/images/testimonial/valerie.webp'),
    'name' => 'Andrea',
    'feedback' => "I've never seen such prompt and helpful customer care from a plug-in and it's rare to see pretty much anywhere these days. I'm thrilled Chaty is working exactly as advertised!"
  ],
  [
    'image' => Doatkolom::url('assets/images/testimonial/valerie.webp'),
    'name' => 'Andrea',
    'designation' => 'Websites San Diego',
    'feedback' => "I've never seen such prompt and helpful customer care from a plug-in and it's rare to see pretty much anywhere these days. I'm thrilled Chaty is working exactly as advertised! I've never seen such prompt and helpful customer care from a plug-in and it's rare to see pretty much anywhere these days. I'm thrilled Chaty is working exactly as advertised!"
  ],
  [
    'image' => Doatkolom::url('assets/images/testimonial/valerie.webp'),
    'name' => 'Andrea',
    'designation' => 'Websites San Diego',
    'feedback' => "I've never seen such prompt and helpful customer care from a plug-in and it's rare to see pretty much anywhere these days. I'm thrilled Chaty is working exactly as advertised!"
  ],
  [
    'image' => Doatkolom::url('assets/images/testimonial/valerie.webp'),
    'name' => 'Andrea',
    'feedback' => "I've never seen such prompt and helpful customer care from a plug-in and it's rare to see pretty much anywhere these days. I'm thrilled Chaty is working exactly as advertised! I've never seen such prompt and helpful customer care from a plug-in and it's rare to see pretty much anywhere these days. I'm thrilled Chaty is working exactly as advertised!"
  ],
  [
    'image' => Doatkolom::url('assets/images/testimonial/valerie.webp'),
    'name' => 'Andrea',
    'feedback' => "I've never seen such prompt and helpful customer care from a plug-in and it's rare to see pretty much anywhere these days. I'm thrilled Chaty is working exactly as advertised!"
  ],
  [
    'image' => Doatkolom::url('assets/images/testimonial/valerie.webp'),
    'name' => 'Andrea',
    'feedback' => "I've never seen such prompt and helpful customer care from a plug-in and it's rare to see pretty much anywhere these days. I'm thrilled Chaty is working exactly as advertised!"
  ],
)

?>



<div class="bg-slate-50 py-4 md:py-8 px-3 sm:px-0">
 <div class="swiper">
  <div class="swiper-wrapper py-14">
      <?php foreach( $data as $item ): ?>
        <div class="swiper-slide max-w-sm lg:max-w-md h-auto">
          <div class="border border-solid bg-white border-slate-200 p-6 flex flex-col justify-between rounded-lg h-full">
            <p><?php echo esc_html($item['feedback']) ?></p>
            <div class="flex items-center justify-start gap-3 pt-4">
              <picture>
                <img 
                  class="rounded-md transform -rotate-6 shadow-md"
                  src="<?php echo esc_url($item['image']) ?>" 
                  loading="lazy" 
                  draggable="false" 
                  width="42" 
                  height="42"
                >
              </picture>
              <div>
                <h2 class="font-bold text-base"><?php echo esc_html($item['name']) ?></h2>
                <?php if( isset($item['designation']) ): ?>
                  <p class="text-sm"><?php echo esc_html($item['designation']) ?></p>
                <?php endif; ?>
              </div>
            </div>
          </div>
        </div>
      <?php endforeach; ?>
    </div>
    <!-- If we need pagination -->
    <div class="swiper-pagination"></div>
 </div>
</div>