// $(document).ready(()=>{
//     //https://dataplaceholder.typicode.com/users
  
//     $.ajax({
//         url:"https://jsonplaceholder.typicode.com/users",
//         method:"GET",
//         success:(data)=>{
//             console.log("Data: "+data[0].name);

//            $("#empTable").css("display","block");
//             $("#empTable").append("<tbody>");
//             for (var counter = 0; counter < data.length; counter++) {
//                 $('#empTable').append("<tr><td>" + data[counter].id + "</td><td>"
//                 + data[counter].name + "</td><td>"
//                 + data[counter].username + "</td><td>"
//                 + data[counter].email + "</td><td>"
//                 +data[counter].phone+"</td><td>"
//                 +data[counter].website+"</td></tr>");
// 			}
// 			$('#empTable').append("</tbody>");
			


            
//         },
//         error:(e)=>{
//             alert("Error + ",e)
//         }
//     });
// }
 

  

  
// )

// $(document).ready(()=>{
//     $.ajax({
//         url: "https://jsonplaceholder.typicode.com/users",
//         method: "GET",
//         success:function(x){
//             console.log(x)
//             $('#empTable').DataTable({
//                 data:x,
//                 'columns':[
//                     { "data": "id" },
//                     { "data": "name" },
//                     { "data": "username" },
//                     { "data": "email" },
//                     { "data": "phone" },
//                     { "data": "website" }
//                 ]
//             })
//         }
       
//     })
    
// })

$(document).ready(function(){
    $.getJSON( "https://jsonplaceholder.typicode.com/users", function( data ) {
        $('#data-table').DataTable({
           "data" : data,
           columns : [
              { "data": "id" },
              { "data": "name" },
              { "data": "username" },
              { "data": "email" },
              { "data": "phone" },
              { "data": "website" }
           ]
      });
      });
       
       
       

  });