/*	
	File: assignment5.html
	91.461 Assignment: 6
	Clayton K. Smith, UMass Lowell Computer Science, Clayton_Smith@student.uml.edu
	Copyright (c) 2014 by Clayton K. Smith.
	All rights reserved. May be freely copied or excerpted for any purpouse with
	credit to the author.
	
	Creation Date: 10/18/2014 (MM/DD/YYYY)
	
*/


$(document).ready(function() {
    
    $("#control").submit(function(){
	updateTable(
	    parseInt($("#minX").val()),
	    parseInt($("#minY").val()),
	    parseInt($("#maxX").val()),
	    parseInt($("#maxY").val()));
    })});


function updateTable(minX, minY, maxX, maxY){
    // var minX  = document.getElementById("minX").value;
    // var maxX  = document.getElementById("maxX").value;
    // var minY  = document.getElementById("minY").value;
    // var maxY  = document.getElementById("maxY").value;
    
    // Starts head of the table.
    var table = "<thead><tr><th></th>";
    
    // Builds head of the table.
    for( var i = minX; i <= maxX; i++){ table += "<th><h1>" + i +"</h1></th>"; }
    table += "</tr></thead><tbody>";
    
    // Builds body of the table.
    for( var i = minY; i <= maxY; i++){ 
        table += "<tr><td>" + i + "</td>";
        for( var j = minX; j <= maxX; j++){
	    table += "<td>" + i * j + "</td>";	    
	}
	table += "</tr>";
    }
    // Ends the table.
    table += "</tbody>";
    
    // Inserts the table into the page.
    document.getElementById("myTable").innerHTML = table ;
}
