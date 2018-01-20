$(document).ready(function() {
let managerIds = [ 
1234,
2584,
3524,
1874
];

let inputID;


$("#letsSeeWhoYouBe").click(function() {
	inputID=$("#creds").val();
  //alert("Handler for .click() called.");
  console.log(inputID)
  for (let i= 0; i<managerIds.length; i++) {
  	if (inputID == managerIds[i]){
  		document.location.href = "trial11.html"
  	}
   }
});
});