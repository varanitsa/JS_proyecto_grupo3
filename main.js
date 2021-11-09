
$( document ).ready(function() {


$(document).on('click', 'input:checkbox', getCheckedBox);

getCheckedBox();

function getCheckedBox() {
  
  let checkedBox = $.map($('input:checkbox:checked'), 
                         function(val, i) {
                            return val.value;
                         });
  console.clear();
  console.log(checkedBox);
}

$(".selectall").click(function(){
  $(".participante").prop("checked",$(this).prop("checked"));
  });
  

});