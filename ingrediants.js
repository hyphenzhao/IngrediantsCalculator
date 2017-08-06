function addNewItem(){
	var table = document.getElementById("ingrediants_table");
	table.innerHTML = table.innerHTML + "<tr> <td><input type='text' value='item" + n + "' /></td><td><input type='text' onchange='expectationChanged(this)' id='e"+ n +"'/>g</td><td><input type='text' onchange='actualValueChanged(this)' id='a" + n +"'/>g</td> </tr>";
	n++;
}
function expectationChanged(element){
	var eid = element.id;
	var etd = document.getElementById(eid).value;
	var aid = "a" + eid.substring(1);
	var atd = document.getElementById(aid).value;
	
	if(etd!="" && !isNaN(etd)){
		for(i = 0; i < n; i++) {
			var taid = "a" + i;
			var teid = "e" + i;
			if(taid != aid){
				var tatd = document.getElementById(taid).value;
				var tetd = document.getElementById(teid).value;
				if(tatd!="" && tetd!="" && !isNaN(tatd) && !isNaN(tetd)) {
					//alert(atd + " " + etd + " " + tetd + " ");
					document.getElementById(aid).value = tatd * etd / tetd;
					return;
				}
			}
		}
	}	
}
function actualValueChanged(element){
	var aid = element.id;
	var atd = document.getElementById(aid).value;
	var eid = "e" + aid.substring(1);
	var etd = document.getElementById(eid).value;
	if(atd!="" && etd!="" && !isNaN(atd) && !isNaN(etd)) {
		for(i = 0; i < n; i++){
			var taid = "a" + i;
			var teid = "e" + i;
			if(taid != aid){
				var taele = document.getElementById(taid);
				var teele = document.getElementById(teid);
				var tatd = taele.value;
				var tetd = teele.value;
			
				if(tetd != "" && !isNaN(tetd)) {
					taele.value = atd * tetd / etd;
				}
			}
		}
	}
}

var n = 0;
