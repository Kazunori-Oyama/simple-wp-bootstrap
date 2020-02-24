<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <script src="https://kit.fontawesome.com/60a37afe1a.js" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="https://kit-free.fontawesome.com/releases/latest/css/free.min.css" media="all"><link rel="stylesheet" href="https://kit-free.fontawesome.com/releases/latest/css/free-v4-font-face.min.css" media="all">
    <link rel="stylesheet" href="https://kit-free.fontawesome.com/releases/latest/css/free-v4-shims.min.css" media="all">
    <?php wp_head();?>  
</head>
<body>
    <div class="body-container">
        <header class="header">
            <div class="header__button-wrap">
                <button class="header__button">
                    <span class="button__line button__line-1"></span>
                    <span class="button__line button__line-2"></span>
                </button>
            </div>
            <div class="header__logo">
                <a href="<?php echo esc_url(home_url());?>"><img src="https://placehold.jp/250x150.png?text=logo" alt="" class="header__logo-img"></a>
            </div>
            <nav class="header__main-nav-wrap">
                <?php wp_nav_menu(array('menu'=>'main-nav','container' => false,'menu_class'=>'header__main-nav')); ?>
                <?php wp_nav_menu(array('menu'=>'second-nav','container' => false,'menu_class'=>'header__second-nav')); ?>
                <nav class="header__sns-wrap">
                    <a href=""><i class="header__sns-icon fab fa-facebook-f"></i></a>
                    <a href=""><i class="header__sns-icon fab fa-twitter"></i></a>
                    <a href=""><i class="header__sns-icon fab fa-instagram"></i></a>
                    <a href=""><i class="header__sns-icon fab fa-youtube"></i></a>
                </nav>
            </nav>
        </header>