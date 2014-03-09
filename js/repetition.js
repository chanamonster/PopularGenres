// console.log(percents11)
console.log("moo jeffefefe");
factor = 9;

$(function () { 
    drawPop();
    drawHiphop();
    drawCountry();
    drawRnb();
    drawHiphouse();
    drawAltrock();
    drawEdm();
    drawIndiepop();
    drawSoul();
    drawIndiefolk();
    drawFolk();
    drawFunk();
    drawClub();
    drawRnr();
    drawSoftrock();
    drawIndierock();
    drawQuietstorm();
    drawKpop();

    var holder;

	$('body').on('mouseenter', 'img', function(){
		var info = $(this).attr('id');
		$('#data').html(info);
		holder = $(this).css('opacity');
		$(this).css('opacity', '1.0');
	})

	$('body').on('mouseout', 'img', function(){
		$(this).css('opacity', holder);
		$('#data').html('');
	})
});

function drawPop(){
	$.getJSON("genres/pop.json", function(data) {
		//111 items
		for (var i = 0; i < data.length; i++){
			str = "<img id='"+data[i].song+" by "+data[i].artist+"' src='salmon.png' width='10%' height='13px' style='opacity:"+data[i].percent+";border-color:white;border-width:1px'>"
			// console.log(data[i].song+" - "+data[i].percent);
			if ((i+1)%factor == 0){
				str += "<br>"
			}

			$('#pop').append(str);
		}

		// for (var i=0; i < 111; i++){
		// 	var str = "";
		// 	str += '<img id="'+data[i].song+' by '+data[i].artist+'"src="salmon.png" width="10px" height="'+data[i].percent*100+'px">'
		// 	$('#pop').append(str);
		// 	// $('#yr2011').append(percents12[i+1]+" -- "+data.results.collection1[i].SongTitle+"<br>");
		// }
	});
}

function drawHiphop(){
	$.getJSON("genres/hiphop.json", function(data) {
		//42 items
		for (var i = 0; i < data.length; i++){
			str = "<img id='"+data[i].song+" by "+data[i].artist+"' src='green.png' width='10%' height='13px' style='opacity:"+data[i].percent+"'>"
			// console.log(data[i].song+" - "+data[i].percent);
			if ((i+1)%factor == 0){
				str += "<br>"
			}

			$('#hiphop').append(str);
		}
	});
}

function drawCountry(){
	$.getJSON("genres/country.json", function(data) {
		//46 items
		for (var i = 0; i < data.length; i++){
			str = "<img id='"+data[i].song+" by "+data[i].artist+"' src='yellow.png' width='10%' height='13px' style='opacity:"+data[i].percent+"'>"
			// console.log(data[i].song+" - "+data[i].percent);
			if ((i+1)%factor == 0){
				str += "<br>"
			}

			$('#country').append(str);
		}
	});
}

function drawRnb(){
	$.getJSON("genres/rnb.json", function(data) {
		for (var i = 0; i < data.length; i++){
			str = "<img id='"+data[i].song+" by "+data[i].artist+"' src='purple.png' width='10%' height='13px' style='opacity:"+data[i].percent+"'>"
			if ((i+1)%factor == 0){
				str += "<br>"
			}

			$('#rnb').append(str);
		}
	});
}

function drawHiphouse(){
	$.getJSON("genres/hiphouse.json", function(data) {
		for (var i = 0; i < data.length; i++){
			str = "<img id='"+data[i].song+" by "+data[i].artist+"' src='blue.png' width='10%' height='13px' style='opacity:"+data[i].percent+"'>"
			if ((i+1)%factor == 0){
				str += "<br>"
			}

			$('#hiphouse').append(str);
		}
	});
}

function drawAltrock(){
	$.getJSON("genres/altrock.json", function(data) {
		for (var i = 0; i < data.length; i++){
			str = "<img id='"+data[i].song+" by "+data[i].artist+"' src='navy.png' width='10%' height='13px' style='opacity:"+data[i].percent+"'>"
			if ((i+1)%factor == 0){
				str += "<br>"
			}

			$('#altrock').append(str);
		}
	});
}

function drawEdm(){
	$.getJSON("genres/edm.json", function(data) {
		for (var i = 0; i < data.length; i++){
			str = "<img id='"+data[i].song+" by "+data[i].artist+"' src='pink.png' width='10%' height='13px' style='opacity:"+data[i].percent+"'>"
			if ((i+1)%factor == 0){
				str += "<br>"
			}

			$('#edm').append(str);
		}
	});
}

function drawIndiepop(){
	$.getJSON("genres/indiepop.json", function(data) {
		for (var i = 0; i < data.length; i++){
			str = "<img id='"+data[i].song+" by "+data[i].artist+"' src='blue.png' width='10%' height='13px' style='opacity:"+data[i].percent+"'>"
			if ((i+1)%factor == 0){
				str += "<br>"
			}

			$('#indiepop').append(str);
		}
	});
}

function drawSoul(){
	$.getJSON("genres/soul.json", function(data) {
		for (var i = 0; i < data.length; i++){
			str = "<img id='"+data[i].song+" by "+data[i].artist+"' src='evergreen.png' width='10%' height='13px' style='opacity:"+data[i].percent+"'>"
			if ((i+1)%factor == 0){
				str += "<br>"
			}

			$('#soul').append(str);
		}
	});
}

function drawIndiefolk(){
	$.getJSON("genres/indiefolk.json", function(data) {
		for (var i = 0; i < data.length; i++){
			str = "<img id='"+data[i].song+" by "+data[i].artist+"' src='evergreen.png' width='10%' height='13px' style='opacity:"+data[i].percent+"'>"
			if ((i+1)%factor == 0){
				str += "<br>"
			}

			$('#indiefolk').append(str);
		}
	});
}

function drawFunk(){
	$.getJSON("genres/funk.json", function(data) {
		for (var i = 0; i < data.length; i++){
			str = "<img id='"+data[i].song+" by "+data[i].artist+"' src='navy.png' width='10%' height='13px' style='opacity:"+data[i].percent+"'>"
			if ((i+1)%factor == 0){
				str += "<br>"
			}

			$('#funk').append(str);
		}
	});
}

function drawFolk(){
	$.getJSON("genres/folk.json", function(data) {
		for (var i = 0; i < data.length; i++){
			str = "<img id='"+data[i].song+" by "+data[i].artist+"' src='blue.png' width='10%' height='13px' style='opacity:"+data[i].percent+"'>"
			if ((i+1)%factor == 0){
				str += "<br>"
			}

			$('#folk').append(str);
		}
	});
}

function drawClub(){
	$.getJSON("genres/club.json", function(data) {
		for (var i = 0; i < data.length; i++){
			str = "<img id='"+data[i].song+" by "+data[i].artist+"' src='yellow.png' width='10%' height='13px' style='opacity:"+data[i].percent+"'>"
			if ((i+1)%factor == 0){
				str += "<br>"
			}

			$('#club').append(str);
		}
	});
}

function drawRnr(){
	$.getJSON("genres/rockandroll.json", function(data) {
		for (var i = 0; i < data.length; i++){
			str = "<img id='"+data[i].song+" by "+data[i].artist+"' src='green.png' width='10%' height='13px' style='opacity:"+data[i].percent+"'>"
			if ((i+1)%factor == 0){
				str += "<br>"
			}

			$('#rockandroll').append(str);
		}
	});
}

function drawSoftrock(){
	$.getJSON("genres/softrock.json", function(data) {
		for (var i = 0; i < data.length; i++){
			str = "<img id='"+data[i].song+" by "+data[i].artist+"' src='salmon.png' width='10%' height='13px' style='opacity:"+data[i].percent+"'>"
			if ((i+1)%factor == 0){
				str += "<br>"
			}

			$('#softrock').append(str);
		}
	});
}

function drawIndierock(){
	$.getJSON("genres/indierock.json", function(data) {
		for (var i = 0; i < data.length; i++){
			str = "<img id='"+data[i].song+" by "+data[i].artist+"' src='navy.png' width='10%' height='13px' style='opacity:"+data[i].percent+"'>"
			if ((i+1)%factor == 0){
				str += "<br>"
			}

			$('#indierock').append(str);
		}
	});
}

function drawQuietstorm(){
	$.getJSON("genres/quietstorm.json", function(data) {
		for (var i = 0; i < data.length; i++){
			str = "<img id='"+data[i].song+" by "+data[i].artist+"' src='purple.png' width='10%' height='13px' style='opacity:"+data[i].percent+"'>"
			if ((i+1)%factor == 0){
				str += "<br>"
			}

			$('#quietstorm').append(str);
		}
	});
}

function drawKpop(){
	$.getJSON("genres/kpop.json", function(data) {
		for (var i = 0; i < data.length; i++){
			str = "<img id='"+data[i].song+" by "+data[i].artist+"' src='pink.png' width='10%' height='13px' style='opacity:"+data[i].percent+"'>"
			if ((i+1)%factor == 0){
				str += "<br>"
			}

			$('#kpop').append(str);
		}
	});
}

