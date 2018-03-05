window.onload = function(){
	//声明变量
	var spans = document.querySelectorAll('span')//5个星星
	var Info = document.getElementById('info')
	var Text = ['极差','一般','不错','推荐','力荐'];//声明信息数组
	
	var cc = -1;
	
	function abc(){//给5颗星定一个函数
		for(var i = 0; i < spans.length; i++){
			spans[i].className = '';
		}
	}
	abc()//函数引用
	//获取事件
	for(var i = 0; i < spans.length; i++){
		spans[i].n = i
		spans[i].onmouseover = function(){//鼠标移入事件	
			abc();
			Info.style = "display: block;"//移入星的时候对应的信息显示
			Info.innerHTML = Text[this.n]					
			for( var i = 0; i <= this.n; i++){
				if(this.n < 2){//判断当数组小于2的时候显示span1紫色
					spans[i].className = 'span1';
				}else {//如不是就显示span2红色
					spans[i].className = 'span2';
				}
			}
		}
		spans[i].onclick = function(){//鼠标点击事件
			abc();
			Info.style = "display: block;"
			Info.innerHTML = Text[this.n];
			for(var i = 0; i <= this.n; i++){
				if(this.n < 2){//判断当数组小于2的时候显示span1紫色
					spans[i].className = 'span1';
				}else {//如不是就显示span2红色
					spans[i].className = 'span2';
				}
			}
			cc = this.n;
		}
		spans[i].onmouseout = function(){//鼠标移出事件
			abc();
			Info.style = "display: none;"			
			if( cc > -1){
				Info.innerHTML = Text[cc];
				for(var i = 0; i <= cc; i++){
					if(cc < 2){
						spans[i].className = 'span1';
					}else {
						spans[i].className = 'span2';
					}
				}
			}
		}
	}
}
