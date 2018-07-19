$(function(){
 
	$('.tab').eq(0).siblings().hide();
	$('.body-left ul li').click(function(){
		$(this).addClass("select").siblings().removeClass("select");
		$('.tab').hide();
		$('.tab').eq($(this).index()).show().siblings().hide();
	});
	$('.del').click(function(){
		$('.addImg').remove();
     // $('.aaa').show();
	})	;
});
function preview(file) {
    var prevDiv = document.getElementById('preview');
    if (file.files && file.files[0]) {
      var reader = new FileReader();
      reader.onload = function(evt) {
        prevDiv.innerHTML = '<img class="addImg" src="' + evt.target.result + '" />';
      }
      reader.readAsDataURL(file.files[0]);
    } else {
      prevDiv.innerHTML = '<div class="img" style="filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=scale,src=\'' + file.value + '\'"></div>';
    }
  }

  
