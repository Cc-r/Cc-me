window.onload = function(){
	//声明变量
	var boxs = document.getElementById('box')////生成父级div变量
	var H3 = boxs.getElementsByTagName('h3')//生成h3变量
	var Ul = boxs.getElementsByTagName('ul')//生成ul变量
	var Li = document.getElementsByTagName('li')//生成li变量
	
	Ul[0].style.display = 'none'//初始化隐藏Ul下的所有li
	
	//获取事件
	for(var i = 0; i < H3.length; i++){
		H3[i].index = i;//定义一个属性，记录元素的下标
		H3[i].onclick = function(){//获取列表点击事件
			
			if(this.className == ''){//用h3的class当条件判断，为空的时候走if里面的
				for(var i = 0; i < Ul.length; i++){//利用for循环设置点击当前列表其他列表隐藏
					Ul[i].style.display = 'none'
					H3[i].className = ''//h3的背景颜色为初始颜色				
				}
				Ul[this.index].style.display = 'block'
				this.className = 'active'
				
			}else{//不为空的时候走这边
				Ul[this.index].style.display = 'none'
				this.className = ''
			}	
		}
	}
	//给li绑定事件
	for(var i = 0; i < Li.length; i++){
		Li[i].index = i;//定义一个属性记录当前元素
		Li[i].abc = '';//设置一个空的来判断
//		Li[i].onmouseover = function(){//获取鼠标移入li添加背景颜色事件
//			if(this.abc == ''){//判断当移入为空的时候背景颜色为灰色 
//				Li[this.index].style.backgroundColor = '#999999';	
//			}				
//		}
		Li[i].onclick = function(){//获取鼠标点击li添加背景颜色事件
			for(i = 0; i < Li.length; i++) {
				Li[i].style.background = "";//将li的背景颜色设置为空
			}
			Li[this.index].style.backgroundColor = 'red';//点击当前元素li为红色
			this.abc = 'red';//abc设为红色
		}
//		Li[i].onmouseout = function(){//鼠标移出背景颜色设置为空
//			if(this.abc == ''){ //判断当移入为空的时候背景颜色为空
//				Li[this.index].style.backgroundColor = '';
//			}	
//		}
	}

}
