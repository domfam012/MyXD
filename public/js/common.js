$(function(){
    $('a[href="#"]').on('click', function(e) {
        e.preventDefault();
    });


    // api test

    // $.get("https://firestore.googleapis.com/v1/projects/myxd-247f4/databases/(default)/documents/P-Test", function(data){
    //     console.log(data);
    // });

    // $.get("https://firestore.googleapis.com/v1/projects/myxd-247f4/databases/(default)/documents/P-Test/3MIkzOj7BaaMo5cru4Sj\n", function(data){
    //     console.log(data);
    // });

    // $.post("https://firestore.googleapis.com/v1/projects/myxd-247f4/databases/(default)/documents/P-Test/documentId=abcdefg\n", function(data){
    //     console.log(data);
    // });

    // var reqData = {a:1, b:2}

    // $.post("https://firestore.googleapis.com/v1/projects/myxd-247f4/databases/(default)/documents/P-Test", reqData, function(data){
    //     console.log('posted');
    //     console.log(data);
    // })

    // $.ajax({
    //     url:"https://firestore.googleapis.com/v1/projects/myxd-247f4/databases/(default)/documents/collectionGroups/Posts/fields/*",
    //     type: "PATCH",
    //     dataType: "json",
    //     data: reqData,
    // }).done(function(result){
    //     console.log(result);
    // });

});
