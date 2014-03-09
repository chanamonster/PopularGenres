// console.log(percents11)
console.log("moofefe")

function list2011(){
	$.getJSON("js/Top100of2011.json", function(data) {
		// for (var i=0; i < 100; i++){
		// 	var str = "";
		// 	str += data.results.collection1[i].Rank + ": ";
		// 	str += data.results.collection1[i].SongTitle;
		// 	str += "----" + (percents11[i+1]*100).toFixed(1) + "%<br>";

		// 	$('#data').append(str);
		// }
		var sum = 0;
		for (var i=0; i < 100; i++){
			var str = "";
			str += '<img src="salmon.png" width="10px" height="'+percents11[i+1]*100+'px">'
			$('#yr2011').append(percents11[i+1]+" -- "+data.results.collection1[i].SongTitle+"<br>");
			sum += percents11[i+1];
		}
		console.log("2011 sum: "+sum);
	});
}

function list2012(){
	$.getJSON("js/Top100of2012.json", function(data) {
		// for (var i=0; i < 100; i++){
		// 	var str = "";
		// 	str += data.results.collection1[i].Rank + ": ";
		// 	str += data.results.collection1[i].SongTitle;
		// 	str += "----" + (percents11[i+1]*100).toFixed(1) + "%<br>";

		// 	$('#data').append(str);
		// }
		var sum = 0;
		for (var i=0; i < 100; i++){
			var str = "";
			str += '<img src="yellow.png" width="10px" height="'+percents12[i+1]*100+'px">'
			// $('#yr2012').append(str);
			$('#yr2011').append(percents12[i+1]+" -- "+data.results.collection1[i].SongTitle+"<br>");
			sum += percents12[i+1];
		}
		console.log("2012 sum: "+sum);
	});
}

function list2013(){
	$.getJSON("js/Top100of2013.json", function(data) {
		// for (var i=0; i < 100; i++){
		// 	var str = "";
		// 	str += data.results.collection1[i].Rank + ": ";
		// 	str += data.results.collection1[i].SongTitle;
		// 	str += "----" + (percents11[i+1]*100).toFixed(1) + "%<br>";

		// 	$('#data').append(str);
		// }
		var sum = 0;
		for (var i=0; i < 100; i++){
			var str = "";
			str += '<img src="green.png" width="10px" height="'+percents13[i+1]*100+'px">'
			// $('#yr2013').append(str);
			$('#yr2011').append(percents13[i+1]+" -- "+data.results.collection1[i].SongTitle+"<br>");
			sum += percents13[i+1];
		}
		console.log("2013 sum: "+sum);
	});
}

list2011();
list2012();
list2013();