window.onload = function(){
	var prev = document.getElementById('prev')//上一组
	var next = document.getElementById('next')//下一组
	var img = document.getElementById('img')//左侧大图
	var txt = document.getElementById('text')//第几组第几张
	var open = document.getElementById('open')//1/4
	
	var cc = 1
	
	//下一组切换
	 next.onclick = function(){
	 	cc = cc+1
	 	if(cc > 4){
	 		cc = 1
	 	}
	 	img.src = "img/"+cc+".png"
	 }
	 
	 //上一组切换
	 prev.onclick = function(){
	 	cc = cc-1
	 	if(cc < 1){
	 		cc = 4
	 	}
	 	img.src = "img/"+cc+".png"
	 }
	 
	 //点击图片切换
	 img.onclick = function(){
	 	if(cc == 1){
	 		img.src = "img/2.png"
	 		cc = 2
	 	}else if(cc == 2){
	 		img.src = "img/3.png"
	 		cc = 3
	 	}else if(cc == 3){
	 		img.src = "img/4.png"
	 		cc = 4
	 	}else{
	 		img.src = "img/1.png"
	 		cc = 1
	 	}
	 }
}
