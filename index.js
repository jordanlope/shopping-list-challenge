
function addItem() {
    $("#js-shopping-list-form").submit(function(event) {
        event.preventDefault();
        const userTextElement = $(this).find('#shopping-list-entry');
 
        $("ul").append(
            "<li>"
            + "<span class='shopping-item'>" + userTextElement.val() + "</span>"
            + "<div class='shopping-item-controls'>"
            +   "<button class='shopping-item-toggle'>"
            +       "<span class='button-label'>check</span>"
            +   "</button>"
            +   "<button class='shopping-item-delete'>"
            +       "<span class='button-label'>delete</span>"
            +   "</button>"
            + "</div>"
            + "</li>"
        )

        userTextElement.val("");
    });
}

function removeItem() {
    $("ul").on('click', 'li .shopping-item-delete', function(event) {
        this.closest('li').remove();
    });
}

function checkItem() {
    $("ul").on('click', 'li .shopping-item-toggle', function(event) {
        $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked')
    });
}

$(checkItem)
$(addItem)
$(removeItem)