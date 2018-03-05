window.onload = function(){
	var btn = document.querySelector('#btn')//生成按钮
			var oCont = document.querySelector('#cont'); //包5个div的容器
			var btns = document.querySelector('#btns');//变换按钮
		
			var str = '';
			
			var n = 1;
			
			for(var i = 0; i < 5; i++){
				str += '<div>'+(i+1)+'</div>'
			}//生成5个div		
			
			//将生成的div赋值给oCont
			oCont.innerHTML = str;
			
			a = oCont.querySelectorAll('div');//获取到5个div
			console.log(a)
			
			btn.onmouseover = function(){
				btn.style="background-color: #5ab1fd;color: #fff;"
			};
			btn.onmouseout = function(){
				btn.style="background-color: #fff;color: #58aefb;"
			};
			//获取点击事件
			btn.onclick = function(){
				btn.innerHTML="变换";
				if(n == 1){
					for(var i = 0; i < 5;i++){
						//设置所有div显示
						a[i].style.display= "block";
						//设置div的left值
						a[i].style.left = (i*50)+"px";
						if(i<3){//通过条件判断div的top值
							a[i].style.top = (i*50)+"px";		
						}else{
							a[i].style.top = (4-i)*50+'px';	
						}
					}
					n = 2
				}else if(n == 2){
					for(var i = 0; i < 5;i++){	
						//设置div的top值
						a[i].style.top = (i*50)+"px";
						if(i<3){//通过条件判断div的left值
							a[i].style.left = (i*50)+"px";		
						}else{
							a[i].style.left = (4-i)*50+'px';	
						}
					}	
					n = 3
				}else if(n == 3){
					for(var i = 0; i < 5;i++){	
						//设置div的left值
						a[i].style.left = (i*50)+"px";	
						//重复上一次变换的top值
						a[i].style.top = '';
						if(i<3){//通过条件判断div的bottom值
							a[i].style.bottom = (i*50)+"px";		
						}else{
							a[i].style.bottom = (4-i)*50+'px';	
						}
					}
					n = 4
				}else if(n == 4){
					for(var i = 0; i < 5;i++){	
						//设置div的top值
						a[i].style.top = (i*50)+"px";
						//重复上一次变换的left值
						a[i].style.left ='';
						if(i<3){//通过条件判断div的right值
							a[i].style.right = (i*50)+"px";		
						}else{
							a[i].style.right = (4-i)*50+'px';	
						}
					}
					n = 1
				}
			};
			
}
