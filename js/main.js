$(document).ready(function(){
    $nav = $('.nav');
    $toggleCollapse = $('.toggle-collapse')



    /*click evebt on toggle menu */
    $toggleCollapse.click(function(){
        $nav.toggleClass('collapse');
    })

});