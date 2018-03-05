window.onload = function(){
	var prev = document.getElementById('prev')//上一组
	var next = document.getElementById('next')//下一组
	var img = document.getElementById('img')//左侧大图
	var txt = document.getElementById('text')
	var open = document.getElementById('open')
	
	var arrUrl = ['img/1.png','img/2.png','img/3.png','img/4.png']
	var arrText = ['第一组第1张','第二组第2张','第三组第3张','第四组第4张']

	var cc = 0
	 
	function abc(){
		open.innerHTML = cc+1+'/'+arrText.length;
		img.src = arrUrl[cc];
		txt.innerHTML = arrText[cc];
	}
	abc();
	
	next.onclick = function(){
		cc ++;
	 	if(cc == arrText.length){
	 		cc = 0;
	 	}
	 	abc();
	}
	
	prev.onclick = function(){
		cc --;
	 	if(cc == -1){
	 		cc = arrText.length-1;
	 	}
	 	abc();
	}
}
