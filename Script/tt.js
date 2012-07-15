function selectMenu(menuId,toogledId) {
    var id = '#' + menuId;
    $('.MainMenu').removeclass('selected');
    $(id).addClass('selected');
    animatedcollapse.toggle(toogledId);
}

function selectMainMenu(menuId, toogledId) {
    var id = '#' + menuId;
    if ($(id).hasClass('selected')) {
        $(id).removeClass('selected');
    } else $(id).addClass('selected');
    animatedcollapse.toggle(toogledId);
 }
