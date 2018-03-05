window.onload = function(){
	var list = document.getElementById('list'); //ul
	var head1 = document.getElementById('head');//a
	var img1 = document.getElementById('img1');//img图片
	var txt = document.getElementById('txt-text');//输入文本
	var btn = document.getElementById('btn'); //发送
	
	var abc = 1;
	
	head1.onclick = function(){
//		img1.src = 'img/icot-2.png';
		if(abc == 1){
			img1.src = 'img/icot-2.png'
			abc = 2
		}else{
			img1.src = 'img/icot-1.png'
			abc = 1
		}
		
	}
//	btn.onclick = function(){
//		list.innerHTML = list.innerHTML+'<li class="item-txt"><a href="" class="item-tx">'+head.innerHTML+'</a><div>'+txt.value+'</div></li>';
//		txt.value = '';		
//	}
//	btn.onclick = function(){
//		list.innerHTML = list.innerHTML+'<li class="txt-item"><a href="" class="list-tx">'+head.innerHTML+'</a><div>'+txt.value+'</div></li>';
//		txt.value = '';		
	btn.onclick = function(){
		if(abc == 1){
			list.innerHTML = list.innerHTML+'<li class="item-txt"><a href="" class="item-tx">'+head.innerHTML+'</a><div>'+txt.value+'</div></li>';
			txt.value = '';
		}else{
			list.innerHTML = list.innerHTML+'<li class="txt-item"><a href="" class="list-tx">'+head.innerHTML+'</a><div>'+txt.value+'</div></li>';
			txt.value = '';
		}
	}
}
