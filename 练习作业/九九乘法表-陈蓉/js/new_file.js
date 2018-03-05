window.onload = function(){
	var oBox = document.getElementById('box');
	
	//总共有9列
	//第1列   1*1~1*9
	//第2列   2*2~2*9
	//第3列   3*3~3*9
	//第4列   4*4~4*9
	//第5列   5*5~5*9
	//第6列   6*6~6*9
	//第7列   7*7~7*9
	//第8列   8*8~8*9
	//第9列   9*9
	var str = '';
	
	for(var i = 1; i < 10; i++){
		str += '<div>';   //  每一列的div
		
		//把每一列的span拼接起来
		for(var j = i; j < 10; j++){
			str += '<span>'+i+"X"+j+"=" +i * j+'</span>' //i*j=i*j
		}
		
		str += '</div>';
	}
	oBox.innerHTML = str;
	
}
