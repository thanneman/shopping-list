function shoppingList () {

    // Add items to the list
    $('#js-shopping-list-form').submit(event => {
        event.preventDefault();

        const newItem = $(this).find('#shopping-list-entry').val();

        $('.shopping-list').append(`<li><span class="shopping-item">${newItem}</span><div class="shopping-item-controls"><button class="shopping-item-toggle"><span class="button-label">check</span></button> <button class="shopping-item-delete"><span class="button-label">delete</span></button></div></li>`);
    });

    // Check an item on the list
    $(".shopping-list").on("click", ".shopping-item-toggle", function(event) {
        $(this).closest("li").find(".shopping-item").toggleClass("shopping-item__checked");
    });

    // Remove item from the list
    $('.shopping-list').on('click', '.shopping-item-delete', function(event) {
        $(this).closest('li').remove();
    });
}
$(shoppingList);