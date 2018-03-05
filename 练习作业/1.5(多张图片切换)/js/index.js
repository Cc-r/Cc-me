window.onload = function (){
	//获取元素
	var oBox = document.querySelector('#box');
	var aImg = oBox.querySelectorAll('img');
	var oPrev = document.querySelector('#prev');
	var oNext = document.querySelector('#next');
	//设置参考值
	var n = 0;
	
	//初始化：将所有img设置为隐藏，然后将第一个img显示
	for(var i = 0; i < aImg.length; i++){
			aImg[i].style.display = 'none';
		}
	aImg[n].style.display = 'block';
	
	//上一张点击事件
	oPrev.onclick = function (){
		n--;
		//临界处理
		if(n < 0){
			n = aImg.length - 1;
		}
		//清空所有img的显示
		for(var i = 0; i < aImg.length; i++){
			aImg[i].style.display = 'none';
		}
		//设置当前img显示
		aImg[n].style.display = 'block';
	}
	//下一张点击事件
	oNext.onclick = function (){
		n++;
		//临界处理
		if(n > aImg.length - 1){
			n = 0;
		}
		//清空所有img的显示
		for(var i = 0; i < aImg.length; i++){
			aImg[i].style.display = 'none';
		}
		//设置当前img显示
		aImg[n].style.display = 'block';
	}
}
