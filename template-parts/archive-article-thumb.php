<a href="<?php echo esc_html(the_permalink());?>" class="text-decoration-none">
    <article class="pl-0 py-3 border-top border-gray-500 d-lg-flex text-dark">
        <?php if(has_post_thumbnail()):?>
            <div class="">
                <?php $thumbnail = get_the_post_thumbnail(array('class'=>'img-fluid'));?>
            </div>
        <?php endif;?>
        <div class="">
            <time class="pl-0 col-12 col-md-3 align-items-center top-time_info d-lg-flex" datetime=""><?php the_time('Y年m月d日');?></time>
            <h3 class="pl-0 col-12 col-md-9 align-items-center top-heading_info d-lg-flex"><?php the_title();?><i class="fa fa-angle-right text-primary ml-2"></i></h3>
        </div>
    </article>
</a>