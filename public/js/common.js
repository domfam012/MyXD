$(function(){
    $('a[href="#"]').on('click', function(e) {
        e.preventDefault();
    });


    // api test

    $.get("../board/list", function(data){
        console.log(data);
    });

    // $.ajax("url",


});
