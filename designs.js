// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

const table=$("#pixel_canvas");
var color=$("#colorPicker").val();
    function makeGrid(height,width){
        var height=$("#input_height").val();//takes the value of row
        var width=$("#input_width").val();//takes the value of column

        $("#pixel_canvas").html('');
        for (var i=0;i<height;i++){
        $("#pixel_canvas").append("<tr></tr>");
            }//adds row

        $("tr").each(function(){
            for (var j=0;j<width;j++){
            $(this).append("<td></td>");
            $(this).addClass(".col");
            }
        });//adds column
    };
    $(document).ready(function() {
        $('#sizePicker').on('submit', function (event){
            makeGrid();
            event.preventDefault();
        });
        $('[data-toggle="tooltip"]').tooltip();//shows info
    });

    table.on('click','td',function (){
        var color=$("#colorPicker").val();
        $(this).attr("bgcolor",color);
    });//fill the box with the user color
    
    table.on('dblclick','td',function (){
      $(this).attr("bgcolor","white");
    });//double click to make the box white again

    $("#reset").on('click',function(){
        $("td").attr("bgcolor","white");
    });//make the canvas empty
