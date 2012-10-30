var imgurl='../IMG/Projects/';
var banner=["panorama.png"];
var HM1=["HM01nuoc.jpg"];
var HM2=["HM02a.jpg","HM02b.jpg","HM02c.jpg","HM02channuoi.jpg","HM02d.jpg","HM02e.jpg","HM02f.jpg"];
var HM3=["HM03.jpg","HM04.jpg"];
var HM4=["HM04.jpg"];
var HM5=["HM05.jpg"];

var BD1=["BD01.jpg","BD01ga.jpg"];
var BD2=["BD02.jpg"];
var BD3=["BD03heo.jpg","BD03a.jpg","BD03b.jpg","BD03c.jpg"];
var BD4=["BD04.jpg"];
var BD5=["BD05.jpg"];

var BT=["BT.jpg"];
var CL1=["Q201.jpg"];
var CL2=["Q201a.jpg"];

var DN1=["DN01.jpg","DN01nhanh15.jpg"];
var DN2=["DN02.jpg","DN02nhanh6.jpg"];

var DDA=["DDA.jpg"];
var NBG=["NBG01.jpg"];
var PH=["Privates houses.jpg"];
var SH=["services houses.jpg"];
var SR=["services road.jpg"];
var VT=["VT01.jpg"];
var index=0;
var currentproject;
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

function displayProject(project)
{
	currentproject = project;
	index=0;
	displayImage();
	setArrowVisibility();
}

function displayImage()
{
	var imgsrc = imgurl + currentproject[index];
	$('#loading').show();
	$('#imgBanner').parent().hide();
	$('#imgBanner').attr('src',imgsrc);
	$('#imgBanner').load(function(){
  		// hide/remove the loading image
  		$('#loading').hide();
  		$('#imgBanner').parent().show();
	});
}
function nextImage(next)
{
	if (next)
		index++;
	else index--;	
	displayImage();
	setArrowVisibility();
}

function setArrowVisibility()
{
	var size=currentproject.length;
	var prev=false;
	var next=false;
	if (index > 0)
		prev=true;
	if(index < size-1)
		next=true;
	displayArrowImage(prev,next);
}
function displayArrowImage(prev,next)
{
	if(prev)
		$('.prev-image').css('display','block');
	else
		$('.prev-image').css('display','none');
	if(next)
		$('.next-image').css('display','block');
	else
		$('.next-image').css('display','none');
}
