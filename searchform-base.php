<form action="/" method="get" id="search-form__base">
        <div class="search_input_wrapper">
            <div class="search_input_container">
                <input type="text" name="s" class="search_input" placeholder="サイト内検索" value="<?php the_search_query(); ?>" />
                <i class="search-form__icon fa fa-search px-2" aria-hidden="true" aria-hidden="true"></i>
            </div>
        </div>
</form>