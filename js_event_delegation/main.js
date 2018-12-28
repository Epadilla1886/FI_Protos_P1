$(document).ready(initializeApp);

function initializeApp() {

    addButtonToList()
    addButtonToList()

    $('#add-btn').click(addButtonToList);
    $('.list-group').on('click', 'button', addDot);
    $('#clear-btn').click(clearList);
}

// ==== Place all code for prototype ABOVE this line ==== //
// ==== The below functions are just for you to use and will not need to be altered ==== //
function addDot(){
    $(this).next().append('<div class="dot"></div>');
}

function addButtonToList(){
    var number = $('.list-group-item').length + 1;
    var newListItem = $('<li class="list-group-item"><button class="btn btn-outline-info">Button #' + number + '</button><div class="dot-container"></div></li>');
    $('.list-group').append(newListItem);
}

function clearList(){
    $('.dot-container').empty();
    }
