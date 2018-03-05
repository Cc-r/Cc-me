window.onload = function(){
	var oBox = document.getElementById('box');
	
	var str = '';
	for(var i = 1; i < 10; i++){
		str += '<div>'; //每一行的div
		
		//把每一行的span拼接起来
		for(var j = 1; j <= i; j++){
			str += '<span>'+j+"X"+i+"="+j*i+'</span>' //j*i=j*i
		}
		str += '</div>';
	}
//	console.log(str)
	oBox.innerHTML = str;
}