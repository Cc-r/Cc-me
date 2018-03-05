window.onload = function(){
	var icotLeft = document.getElementById('icot-left'); //左
	var icotRig = document.getElementById('icot-rig'); //右
	var img = document.getElementById('imgs'); //图
	var span1 = document.getElementById('span1'); //1/4
	var title = document.getElementById('title'); //标题
	var order = document.getElementById('order'); //顺序切换
	
	var c = 0;
	
	var arrImgs = ['img/1.png','img/2.png','img/3.png','img/4.png'];
	var arrText = ['图片1','图片2','图片3','图片4'];
	
	console.log(arrImgs.length)
	
	order.onmouseover = function(){
		order.style.background = '#fff'
		order.style.color = '#000000'
	}
	
	function n(){
		span1.innerHTML = c+1+'/'+arrText.length;
		img.src = arrImgs[c];
		title.innerHTML = arrText[c];
	}
	n();
	//右顺序切换
	icotRig.onclick = function(){
		c++;
		if(c > arrImgs.length - 1){
			alert('已经是最后一张了')
			c = arrImgs.length - 1
		}
		//img.src = arrImgs[0]
		n()
	}
	//左顺序切换
	icotLeft.onclick = function(){
		c--;
		if(c < 0){
			alert('已经是第一张了')
			c = 0
		}
		//img.src = arrImgs[0]
		n()
	}
	
}
