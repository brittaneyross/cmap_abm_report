function updateworkdata(origin, destination) {
    d3.csv("data/csv4_chord_dropdown.csv", function(data) {
        var observed = data.filter(function(d) {
            return (d.root == origin) & (d.node == destination) & (d.Category == "Survey");
        });

        var modeled = data.filter(function(d) {
            return (d.root == origin) & (d.node == destination) & (d.Category == "Model");
        });
    
    $("#wflowinfo").empty()
    $("#wflowinfo2").empty()

    d3.select("#wflowinfo").html(
        "</p></b><p style='color:rgb(28, 78, 128); font-size: 30px; margin-bottom: 0px;'>" + d3.formatPrefix(".2s",1e5)(modeled[0].count) +
        "</p><p style='color:grey; font-size: 12px;'> modeled" 
        )
        .style("left", 200 + "px")
        .style("top",  100 + "px");    

    d3.select("#wflowinfo2").html(
        "</p></b><p style='color:rgb(166, 186, 206); font-size: 30px; margin-bottom: 0px;'>" + d3.formatPrefix(".2s",1e5)(observed[0].count) +
        "</p><p style='color:grey; font-size: 12px;'> observed" 
        )
        .style("left", 200 + "px")
        .style("top",  100 + "px");   
    });
}

var setorigin = 'CBD'
var setdestination = 'CBD'
updateworkdata(setorigin, setdestination);


$("#workfrom ul.dropdown-menu a").click(function () {
    $('#WorkFrom').text($(this).text());
    setorigin = ($(this).text())
    updateworkdata(setorigin, setdestination);
});

$("#workto ul.dropdown-menu a").click(function () {
    $('#WorkTo').text($(this).text());
    setdestination = ($(this).text())
    updateworkdata(setorigin, setdestination);
});


$('#transitname').text('Distance')
$('#surveytransit').text('1.491M')
$("#catTranDist").click(function () {
    $('#transitname').text($(this).val())
    if ($(this).val() == 'Distance'){
        $('#surveytransit').text('1.491M')
    }
    if ($(this).val() == 'Income'){
        $('#surveytransit').text('1.411M')
    }
    }
)