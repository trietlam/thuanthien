function selectTabMenu(parentId,menuId,toogledId) {
    var id = '#' + menuId;
    var parentId = '#'+ parentId;
    $(id).parent().parent().find('a').removeClass('selected');
    $(id).addClass('selected');
    animatedcollapse.toggle(toogledId);
}

function selectCategoryMenu(toogledId)
{
	var id = '#' + toogledId;
    $(id).parent().find('.menu-background-3').removeClass('selected');
    $(id).prev().addClass('selected');
    animatedcollapse.toggle(toogledId);
}
function selectMainMenu(menuId, toogledId) {
    var id = '#' + menuId;
    if ($(id).hasClass('selected')) {
        $(id).removeClass('selected');
    } else $(id).addClass('selected');
    animatedcollapse.toggle(toogledId);
 }
