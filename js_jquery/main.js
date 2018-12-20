$(document).ready(initializeApp);

function initializeApp(){
    console.log('Initializing App');

    function section1(){
        $('.box').css('border','4px solid #8e24aa');
    }
    section1();

    function section2(){
        $('#section2 .col-1').css('background-color', '#e3f2fd').click(shrinkCol);
        $('#section2 .col-2').css('background-color', '#bbdefb').click(shrinkCol);
        $('#section2 .col-3').css('background-color', '#90caf9').click(shrinkCol);
        $('#section2 .col-1').css('backgroundColor', '#e3f2fd').click(shrinkCol);
    }
    section2();

    function shrinkCol(){
        console.log('This is: ', this);
        var col = $(this);
        var colWidth = col.css('width');
        console.log('Col Width:', colWidth);
        var newWidth = parseInt(colWidth);
        console.log('New Width:', newWidth);
        var newWidth = newWidth - 40;
        col.css('width', newWidth);
    }
}