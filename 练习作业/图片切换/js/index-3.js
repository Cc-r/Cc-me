window.onload = function(){
	var icotLeft = document.getElementById('icot-left'); //左
	var icotRig = document.getElementById('icot-rig'); //右
	var img = document.getElementById('imgs'); //图
	var span1 = document.getElementById('span1'); //1/4
	var title = document.getElementById('title'); //标题
	var cir = document.getElementById('cir') //循环切换
	var order = document.getElementById('order'); //顺序切换
	var txt = document.getElementById('txt');
	
	var c = 0;
	
	var a = 1;
	
	var arrImgs = ['img/1.png','img/2.png','img/3.png','img/4.png'];
	var arrText = ['图片1','图片2','图片3','图片4'];
	
	cir.className = 'ctu1';
	order.className = 'ctu2';
	
	function n(){
		span1.innerHTML = c+1+'/'+arrText.length;
		img.src = arrImgs[c];
		title.innerHTML = arrText[c];
		txt.innerHTML = '图片可以从最后一张跳转到第一张循环切换';
	}
	n()
	//循环切换
	cir.onclick = function(){
		console.log(n)
		txt.innerHTML = '图片可以从最后一张跳转到第一张循环切换';
		cir.className = 'ctu1';
		order.className = 'ctu2';
		a = 1
	}
	//顺序切换
	order.onclick = function(){
		txt.innerHTML = '图片只能到最后一张或只能到第一张切换';
		cir.className = 'ctu2';
		order.className = 'ctu1';
		a = 2
	}
	//切换点击事件
	icotLeft.onclick = function(){
		if(a == 1){
			c--;
			if(c < 0){
				c = arrImgs.length-1
			}
		}else if(a == 2){
			c--;
			if(c < 0){
				alert('已经是第一张了')
				c = 0;
			}	
		}
		n();
	}
	icotRig.onclick = function(){
		if(a == 1){
			c++;
			if(c > arrImgs.length-1){
				c = 0
			}
		}else if(a == 2){
			c++;
			if(c > arrImgs.length-1){
				alert('已经是最后一张了')
				c = arrImgs.length - 1
			}
		}
		n();
	}
	//顺序切换
//	icotLeft.onclick = function(){
//		if(a == 2){
//			c--;
//			if(c < 0){
//				alert('已经是第一张了')
//				c = 0;
//			}
//			//img.src = arrImgs[c];
//			n();
//		}
//	}
//	icotRig.onclick = function(){
//		if(a == 2){
//			c++;
//			if(c > arrImgs.length-1){
//				alert('已经是最后一张了')
//				c = arrImgs.length - 1
//			}
//			//img.src = arrImgs[c];
//			n();
//		}
//	}
}
