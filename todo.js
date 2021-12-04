/*  function ajax(){
    var xhttp=new XMLHttpRequest();
    xhttp.onreadystatechange=function(){
        if(this.readystate==4&&this.status==200){
            var response=JSON.parse(this.responseText);
            var output="";
            for(var i=0; i<response.length ;i++){
                output+= "<li>" + response[i].title + "</li>";
            }
            document.getElementById("demo").innerHTML=output;
        };
    };
    
    xhttp.open("GET","https://jsonplaceholder.typicode.com/todos",true);
    xhttp.send();
}; */


/*   $(document).ready(function(){
    $("#btn1").click(function(){
        $("#demo").load("https://jsonplaceholder.typicode.com/todos");
    });
}) 
 */

var demo = $("div.demo");
$("#btn1").click(function () {
    $.ajax({
        type: "GET",
        url: "https://jsonplaceholder.typicode.com/todos",
        datatype: "JSON",
        success: function (data) {
            
            $("#demo").append("<tr><th>#</th><th>UserId</th><th>ID</th><th>Title</th><th>Completed</th></tr>");
            $.each(data, function (index, item) {
                $("#demo").append("<tr>");
                $("#demo").append('"<td> <input type="checkbox" onchange=validate() </td>');
                // console.log(index);
                // console.log(item);
                $.each(item, function (key, value) {
                    //console.log(key);
                    //console.log(value);
                    $("#demo").append("<td>" + value + "</td>");
                });
                $("#demo").append("</tr>");
            })
        }
    });

})

function validate() {
    var promise1= new Promise(function(resolve,reject){
    var inputElems = document.getElementsByTagName("input");
        count = 0;
    for (var i = 0; i < inputElems.length; i++) {
        if (inputElems[i].type === "checkbox" && inputElems[i].checked === true) {
            count++;
        }
    }
    if (count >= 5) {
    
        resolve(alert("Tasks have been successfully  completed"));
    }
    else{
        reject("Tasks are not completed");
    }
    })


 promise1
.then()
.catch(function(e){
    console.log(e);
  }) ;

}   

