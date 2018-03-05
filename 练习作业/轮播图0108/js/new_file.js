window.onload = function(){
	//声明变量
	var prev = document.getElementById('prev')//上一张
	var next = document.getElementById('next')//下一张
	var nav = document.querySelector('.nav')//声明span父级		
	
	var str = '';//设置一个空的变量
	var cc = '';//设置一个空的变量
	var c = 0; //记录切换到那张图片
	var arr = ['img/1.png','img/2.png','img/3.png','img/4.png','img/5.png']//声明图片数组
	var cont = document.querySelector('.content')//声明img父级
	for(var i = 0; i < arr.length; i++){//生成5个img
		str += '<div><img src="'+arr[i]+'"/></div>'
	}
	cont.innerHTML = str;//将生成的img赋值给父级cont
	var imgs = cont.querySelectorAll('img')//获取所有的img
	imgs[0].style.opacity = 1;//初始化将第一张图片显示
	function abc(m){
		for(var i = 0; i < imgs.length; i++){//循环所有图片
			imgs[i].style.opacity = 0;//隐藏所有图片显示
			spans[i].style.backgroundColor = '';//清空所有spans颜色
		}
		spans[m].style.backgroundColor = '#6cd2eb';//记录切换到当前图片显示对应的spans
		imgs[m].style.opacity = 1;//记录切换到当前图片显示
	};
	//获取点击事件（上一张）
	prev.onclick = function(){
		c--;
		if(c < 0){//判断当c小于0，c就等于图片长度-1
			c = arr.length-1
		}
		abc(c);
	}	
	//获取点击事件（下一张）
	next.onclick = function(){
		c++;
		if(c > arr.length-1){//判断当c大于图片长度-1，c就等于0
			c = 0
		}
		abc(c);
	}
	for(var i = 0; i < 5; i++){//生成5个span
		cc += '<span></span>'
	}
	nav.innerHTML = cc//将生成的span赋值给父级nav	
	var spans = nav.querySelectorAll('span')//获取5个span	
	spans[0].style.backgroundColor = '#6cd2eb'//初始化span的颜色	
	//添加span点击事件
	for(var i = 0; i <spans.length; i++){
		spans[i].index = i;//定义下标	
		spans[i].onmouseover = function(){
			c++;
			clearInterval(cc);
			abc(this.index);
		}
		spans[i].onmouseout = function(){
			time();
		}
    }
	var cc = null;
	function time(){
		cc = setInterval(function(){
			c++;
			if(c > arr.length-1){//判断当c大于图片长度-1，c就等于0
				c = 0
			}
			abc(c)
		},500)
	};
	time();
}
