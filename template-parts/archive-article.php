<!--
    画像のない、シンプルな記事リスト
    PC  https://user-images.githubusercontent.com/38336128/78311838-f4229600-758c-11ea-845c-44ba9c40084b.png
    SP  https://user-images.githubusercontent.com/38336128/78311835-f258d280-758c-11ea-8e8d-820b3a5e9664.png
-->
<a href="<?php echo esc_html(the_permalink());?>" class="text-decoration-none">
    <article class="pl-0 py-3 border-top border-gray-500 d-lg-flex text-dark">
        <time class="pl-0 col-12 col-md-3 align-items-center top-time_info d-lg-flex" datetime=""><?php the_time('Y年m月d日');?></time>
        <h3 class="pl-0 col-12 col-md-9 align-items-center top-heading_info d-lg-flex"><?php the_title();?><i class="fa fa-angle-right text-primary ml-2"></i></h3>
    </article>
</a>