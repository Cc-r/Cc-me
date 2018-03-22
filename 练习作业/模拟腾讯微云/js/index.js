window.onload = function(){
    var data = {
        "0": {
            "id": 0,
            "pid": -1,
            "title": "微云",
            "type": "file"
        },
        "1": {
            "id": 1,
            "pid": 0,
            "title": "我的文档",
            "type": "file"
        },
        "2": {
            "id": 2,
            "pid": 0,
            "title": "我的音乐"
        },
        "3": {
            "id": 3,
            "pid": 2,
            "title": "周杰伦"
        },
        "4": {
            "id": 4,
            "pid": 3,
            "title": "发如雪"
        },
        "600": {
            "id": 600,
            "pid": 3,
            "title": "夜曲"
        },
        "2999": {
            "id": 2999,
            "pid": 1,
            "title": "js程序设计"
        },
        "4000": {
            "id": 4000,
            "pid": 3,
            "title": "稻香"
        },
        "23333": {
            "id": 23333,
            "pid": 2,
            "title": "王杰"
        },
        "29000": {
            "id": 29000,
            "pid": 1,
            "title": "js权威指南"
        },
        "244444": {
            "id": 244444,
            "pid": 2,
            "title": "张国荣"
        }
    }
    //自适应宽高
    var content = document.querySelector(".content");
    var head = document.querySelector(".head");
    var cont = document.querySelector(".cont");
    function resize(){
        //可视区的高
        var chientH = document.documentElement.clientHeight;
        //console.log(chientH)
        content.style.height = chientH - head.offsetHeight - cont.offsetHeight + "px";
    }
    window.onresize = resize;
    resize();
    //-------------------渲染------------------------------------
    //封装操作数据
    //通过指定id，找到这个id的所有子级
    function getDataById(id){
        var arr = [];
        for(var attr in data){
            if(data[attr].pid == id){
                arr.push(data[attr])
            }
        }
        return arr;       
    }
    //console.log(data)
    // ---------------------渲染树形菜单---------------------
    //获取元素
    var contentMenu = document.querySelector(".content-left");
    var currentId = 0;
    //定义一个初始的id，找到这个id的所有子级
    var initId = -1;
    //封装函数，给定义的一个id，返回的值是定义id下的子级结构生成
    function createMenuHtml(id,level){
        //找到指定id下的所有子级
        var childs = getDataById(id);
        level++;
        var menuHtml = "";
        if(childs.length > 0){
            menuHtml += '<ul>'
            for(var i = 0; i < childs.length; i++){
                var childsHtml = createMenuHtml(childs[i].id,level);
                var classImg1 = childsHtml === '' ? '' : 'img1';
				var classImg2 = childsHtml === '' ? '' : 'img2';
                menuHtml += `
                    <li>
                        <div class="content-title"  data-id="${childs[i].id}" style="padding-left:${level*25}px;">
                            <span class="${classImg1}"></span>
                            <span class="${classImg2}"></span>
                            <a href="javascript:;">${childs[i].title}</a>
                        </div>
                        ${childsHtml}
                    </li>
                `
            }
            menuHtml += '</ul>'
        }
        return menuHtml;
    }
    contentMenu.innerHTML = createMenuHtml(initId,-1)

    //------------------------渲染文件夹路径导航地址------------------------------------
    //先给定一个id 并找到这个id的所有祖先级；
    var navId = 2999;
    //先找到指定id 的数据，然后拿到pid，遍历数据
    function getPathById(id){
        var arr = [];
        //声明一个变量存数据里的所有id
        var currentData = data[id];
        //判断当id和pid相同就推到数组里
        if(currentData){
            arr.push(currentData);
            //把新数组和就数组里的数据加在一起
            arr = arr.concat(getPathById(currentData.pid));
        }
        return arr;
    }
    //console.log(data)
    //获取导航栏元素
    var path = document.querySelector(".path")
    function createPathHtml(id){
        var parentNav = getPathById(id).reverse();
       // console.log(parentNav)
        var pathHtml = "";
        for(var i = 0; i < parentNav.length - 1;i++){
            pathHtml += `<a href="javascript:;" data-id="${parentNav[i].id}">${parentNav[i].title}</a>`
        }
        pathHtml += `<span>${parentNav[parentNav.length-1].title}</span>`
        return pathHtml;
        //console.log(parentNav)
    }
    path.innerHTML = createPathHtml(0);

    //-----------------------------渲染文件夹区域-----------------------------------

    var folders = document.querySelector(".folders");
    var fempty = document.querySelector(".f-empty");
    var folderItem = document.getElementsByClassName("folder-item");
    function foldersHtml(id){
        var foldersData = getDataById(id);
        var foldersHtml = "";
        for(var i = 0; i < foldersData.length; i++){
            foldersHtml += `
                <div class="folder-item" data-id="${foldersData[i].id}">
                    <i data-check="false"></i>
                    <div class="img"></div>
                    <span class="title">${foldersData[i].title}</span>
                    <input type="text" class="txt">
                </div>
            `
        }
        return foldersHtml;
    }
    folders.innerHTML = foldersHtml(0)

    //----------------------------菜单栏背景高亮-------------------------------------------------
	
	 function menuColor(id,color){
	 	//传入哪个参数就按传入的那个参数走
	 	color = color || contentMenu;
       	//记录上次点击的
       	if(color.targetDiv){
           color.targetDiv.classList.remove("active")
      	}
        var treeTargetDiv = color.querySelector(`div[data-id="${id}"]`);
        treeTargetDiv.classList.add("active");
        //自定义一个属性存已经有背景颜色的
        color.targetDiv = treeTargetDiv;
    }
    menuColor(0)
	
    //----------------------------菜单栏点击事件-----------------------------------------
	
	function render(id){
        //然后重新渲染结构
        path.innerHTML = createPathHtml(id);
        var fileHtml = foldersHtml(id)
      	//判断当前点击的id里面有没有子目录，没有就提示，有就把提示隐藏子目录渲染出来
       	if(fileHtml === ""){
           fempty.style.display = "block"
           folders.innerHTML = "";
      	}else{
           fempty.style.display = "none"
           folders.innerHTML = fileHtml;
       	}
      	//菜单栏背景颜色高亮
        menuColor(id)  
        checKed.classList.remove("checked")
        n = 0;
        currentId = id;
    }
	
	
    
    t.on(contentMenu,"click",function(ev){
        var target = ev.target;       
        //判断当点击到每个元素后的做法
        if(target.nodeName === "UL") return;
        if(target.classList.contains("content-left")) return;
        //当点击到span或者a标签的时候就找他的父级
        if(target.nodeName === "SPAN" || target.nodeName === "A"){
            target = target.parentNode;
        }else if(target.nodeName === "LI"){//点击到li的时候就找他的第一个子节点
            target = target.firstElementChild
        }
       // console.log(target)
        //找到这个id
        var id = target.dataset.id;
        render(id);
    })
 
 	//------------------------文件夹路径点击事件-----------------------------------
 	
 	t.on(path,"click",function(ev){
 		var target = ev.target;
 		if(target.nodeName === "A"){
 			var id = target.dataset.id;
 			render(id);
 		}
 	})
 	
 	//-----------------------文件夹点击事件--------------------------------------------
 	
 	t.on(folders,"click",function(ev){
 		var target = ev.target;
 		if(target.classList.contains("folders")) return;
 		//判断当点击这些元素的时候就找他的父级
 		if(target.classList.contains("img") || target.nodeNome === "SPAN"){
 			target = target.parentNode;
         }
        if(target.nodeName === "INPUT") return;
 		if(target.nodeName === "I") return;
 		var id = target.dataset.id;
        render(id);
 	})
 	
 	//---------------------单选框全选框点击事件-----------------------------------
 	var checKed = document.querySelector(".checKed .checkeD")//全选框
 	var checkedall = document.getElementsByTagName("i")//单选框
 	console.log(checkedall)
    var n = 0;//全选单选判断用
     
 	t.on(folders,"click",function(ev){
 		var target = ev.target;
 		if(target.nodeName === "I"){
             var bl = target.classList.toggle("checked");
             //console.log(bl)
 			//console.log(bl)
 			if(bl){
                target.parentNode.classList.add("active");
 				n++
 			}else{
                target.parentNode.classList.remove("active");
 				n--;
 			}
 			//console.log(n,checkedall.length)
 			if(n == checkedall.length){
 				checKed.classList.add("checked");
 			}else{
 				checKed.classList.remove("checked");
 			}
 		}
     })
     
 	//--------------------全选点击事件-----------------------------------
   	t.on(checKed,"click",function(){   		
   		var bl = this.classList.toggle("checked");   		
   		if(bl){
   			for(var i = 0; i < checkedall.length;i++){
   				checkedall[i].classList.add("checked");
   				checkedall[i].parentNode.classList.add("active")
   			}
   			n = checkedall.length;
   		}else{
   			for(var i = 0; i < checkedall.length;i++){
   				checkedall[i].classList.remove("checked");
   				checkedall[i].parentNode.classList.remove("active")
   			}
   			n = 0;
   		}
   	})
   	
   	//----------------------框选------------------------------------
   	t.on(folders,"mousedown",function(ev){
        if(ev.target.nodeName === "INPUT") return;
   		var div = document.createElement("div");
   		div.classList.add("region");
   		//document.body.appendChild(div)
   		var x = ev.clientX;
        var y = ev.clientY;
        div.style.left = ev.clientX - x;
        div.style.top = ev.clientY - y;

        folders.isAppend = false;//标识没有把div推进body里去
        //移动的函数
        function moveFn(ev){
            //当摁下后鼠标移动超出指定的范围后开始出现框选 
            //假如已经把div放进body中就不需要在放了
            var put = Math.abs(ev.clientX - x) > 10 || Math.abs(ev.clientY - y) > 10;          
            if(put && !folders.isAppend){
                //console.log("我超了")
                document.body.appendChild(div);
                folders.isAppend = true;
            }

            div.style.width = Math.abs(ev.clientX - x) + "px";
            div.style.height = Math.abs(ev.clientY - y) + "px";
            //左右最小值
            div.style.left = Math.min(ev.clientX,x) + "px";
            div.style.top = Math.min(ev.clientY,y) + "px";


            //判断框选碰撞文件夹元素后选中
            if(put){
                for(var i = 0; i < folderItem.length; i++){
                    //console.log(t.isDung(div,folderItem[i]))
                    //判断当框选碰上了元素，元素的样式全部显示
                    if(t.isDung(div,folderItem[i])){
                    	//alert(1)
                        folderItem[i].classList.add("active")
                        checkedall[i].classList.add("checked")
                    }else{//没有碰上就删除
                        folderItem[i].classList.remove("active")
                        checkedall[i].classList.remove("checked")
                    }
                }
                var c = 0; //记录选中几个
                for(var i = 0; i < checkedall.length; i++){
                    if(checkedall[i].classList.contains("checked")){
                        c++;
                        console.log(c)
                    }
                }
                //判断当选中的等于总数全选框就加checked
                if(c == checkedall.length){
                    checKed.classList.add("checked")
                    n = checkedall.length;
                    
                }else{
                    checKed.classList.remove("checked")
                    n = c;
                    console.log(n)
                }
            }
        }
        //抬起的函数
        function upFn(ev){
            t.off(document,"mousemove",moveFn);
            t.off(document,"mouseup",upFn);
            div.remove();
        }
        t.on(document,"mousemove",moveFn)
        t.on(document,"mouseup",upFn)
        //清除浏览器默认样式
        ev.preventDefault();
   	})
   	//---------------------------删除-------------------------------------------
    var del = document.querySelector("#del");
    
    //找到指定id下的子级
    //找子孙
    function delData(id){
        //建立一个数组
        var arr = [];
        //for循环所有id
        for(var attr in data){
            //当指定pid等于他父级的id就找到了他的子级
            if(data[attr].pid == id){
                //把他推到数组里
                arr.push(data[attr])
                //再找子级下的子级
               arr = arr.concat(delData(data[attr].id))
            }            
        }
        //把值return出去
        return arr;
    }
    //找自身
    function getdelData(id){
        return [].concat(data[id],delData(id))
    }
   //添加删除点击事件
    var conf = document.querySelector(".conf");//删除确认弹框
    t.on(del,"click",function(ev){
    	var delChecked = seekI();
    	if(delChecked.length === 0){
    		timeInfo();
    		info.innerHTML = "请选中要删除的文件夹"
    	}else{
    		zhez.style.display = "block";
    		conf.style.display = "block";    		
    		//判断只绑定一次事件
    		if(!conf.isClick){
    			conf.isClick = true;    			
    			var ensure = conf.querySelector(".ensure")//确认
    			var cancel = conf.querySelector(".cancel")//取消
    			var closeIco = conf.querySelector(".close-ico");//x
    			//确认按钮点击事件
    			ensure.onclick = function(){
    				zhez.style.display = "none";
    				conf.style.display = "none";
    				delFiles();
    			}
    			//取消点击事件
    			cancel.onclick = function(){
    				zhez.style.display = "none";
    				conf.style.display = "none";
    			};
    			//xx关闭点击事件
    			closeIco.onclick = function(){
    				zhez.style.display = "none";
    				conf.style.display = "none";
    			}
    		}
    	}     
    })
    //操作删除
    function delFiles(){
    	var delChecked = seekI();
    	//循环找到对应的id删除
    	for(var i = 0; i < delChecked.length; i++){
    		var id = delChecked[i].dataset.id;
    		delete data[id];
    		//删除所有的子级及子孙级
    		var arr = delData(id);
    		for(var j = 0; j < arr.length; j++){
    			delete data[arr[j].id] 
    		}
    	}
    	//删除完重新渲染结构
        render(currentId);
        contentMenu.innerHTML = createMenuHtml(-1,-1);
        menuColor(currentId);        
    }

    //---------------------------新建文件夹---------------------------------------------------
    /*
			新建：
				1. 新建成功一个之后，才能新建下一个
				2. 同一级的名字不能重复

			步骤：
				1. 点击新建之后，文件区域出现新建的文件，
					显示输入框，自动获取焦点

				2. 在页面任何地方down下去，决定是否新建成功
					a. 不输入内容，新建不成功  
					b. 和同级重名，新建不成功  
					c. 否则成功
						要向数据中添加一项 对
						重新渲染树形菜单 对
	*/
    var create = document.querySelector("#create");//新建文件
    //新建文件夹click点击事件
    t.on(create,"mouseup",function(){
        //空文件夹提示隐藏
        fempty.style.display = "none";
        var newDiv = document.createElement("div");
        newDiv.className = "folder-item";
        //渲染新建文件夹结构
        newDiv.innerHTML = `
            <div class="img"></div>
            <span class="title">新建文件夹</span>
            <input type="text" class="txt"/>
            <i></i>
        `
        folders.insertBefore(newDiv,folders.firstElementChild);

        //获取元素
        var title = newDiv.querySelector(".title");//文件夹名称
        var txt = newDiv.querySelector(".txt")//文本框
        
        //点击新建文件夹让文件夹名称隐藏，文本框显示
        title.style.display = "none";
        txt.style.display = "block";

        //文本框获取焦点
        txt.focus();
        //定义一个标识代表是否在新建状态
        create.isId = true;
    })
    //用来判断是否和同级的文件夹重名
    function titleAlike(id,name){
        //找到所有的id的子级
        var childs = getDataById(id);
        //判断指定id下的子级有没有指定的name
        for(var i = 0; i < childs.length; i++){
            if(childs[i].title === name){
                return true;
            }
            
        }
        return false;
    }
    //在当前文档区域点击任何地方判断是否新建文件夹成功
    function downFn(ev){
        if(create.isId){
            //获取当前区域第一个文件夹
            var first = folders.firstElementChild;
            var title = first.querySelector(".title");
            var txt = first.querySelector(".txt");
            var value = txt.value.trim();
            //在down的时候点击到文本框后不让他做任何操作
            if(ev.target === txt && !ev.keyCode) return;
            //判断当文本框的value值为空down下的时候就创建不成功
            if(!value){             
                first.remove();  
                timeInfo();
                info.innerHTML = "新建文件夹名称为空，创建不成功，请重新创建"       
            }else if(titleAlike(currentId,value)){//同级重名也不能创建
                first.remove();
                timeInfo();
                info.innerHTML = "已有同名文件夹，请重新创建"  
            }else{
                title.style.display = "block";
                txt.style.display = "none";
                title.innerHTML = value;
                //给新建的创建一个对象放到data里面去
                var id = Date.now();//id根据系统时间生成
                var obj = {
                    id:id,
                    pid:currentId,
                    title: value
                }
                data[id] = obj;
                //重新渲染菜单栏结构
                contentMenu.innerHTML = createMenuHtml(-1,-1);
                //菜单栏背景高亮
                menuColor(currentId);  
                
                first.setAttribute("data-id",id);
            }
            //不管成没成功，都要把标识设置为false
        	create.isId = false;
        }
		
        
    }
    t.on(document,"mousedown",downFn)
    //键盘enter键创建新文件夹点击事件
    t.on(document,"keydown",function(ev){
        //判断当等于13enter键，就执行上面函数代码
        if(ev.keyCode === 13){
            downFn(ev)
        }
    })

    //--------------------------------重命名-------------------------------------------
    /*
        1. 重命名
        点击重命名
        a. 选中的是多项，提醒“不能重命名多个文件”
        b. 没有选中，提醒 “请选中要能重命名的文件”
        c. 选中了一项
                标题元素要隐藏
                编辑框要先显示，编辑框显示标题元素的文本
                编辑框的文本选中

        d. 鼠标在任意地方down的时候，判断是否重命名成功
            1. 编辑框为空，会到以前的文本
            2. 编辑框和同级重名，会到以前的文本
            3. 重名成功
                改变数据中的title
    */
    var Rename = document.querySelector("#Rename");//重命名
    
    

    //提示框
    var info = document.querySelector(".info");//提示
    function timeInfo(){       
        info.style.display = "block";
        info.innerHTML = "";
        var timer = setTimeout(function(){
            info.style.display = "none";
        },1000)
    }
    //封装 单选框找父级
    function seekI(){
        var arr = [];
        for(var i = 0; i < checkedall.length; i++){
            if(checkedall[i].classList.contains("checked")){
                arr.push(checkedall[i].parentNode);
            }
            
        }
        return arr;
    }
    t.on(Rename,"click",function(){
        //找到选中的I
        var checkedF = seekI();
        //判断当选中的大于1提示不能重命名多个文件
        if(checkedF.length > 1){
            timeInfo()
            info.innerHTML = "不能重命名多个文件"
        }else if(checkedF.length == 0){//没有选中一个提示选中要重命名的文件
            timeInfo()
            info.innerHTML = "请选中要重命名的文件"
        }else{
            //找到第一个
            var file = checkedF[0];
            var title = file.querySelector(".title");//标题
            var txt = file.querySelector(".txt");//文本框
            //文本框显示
            txt.style.display = "block";
            //标题隐藏
            title.style.display = "none";
            //把标题赋值给文本框显示
            txt.value = title.innerHTML.trim();
            //文本框的字选中状态
            txt.select();
            //用来做判断
            Rename.isRename = true;
        }
    })
    function RenameFn(ev){
        if(ev.target.nodeName === "INPUT") return;
        //alert(1)
        if(Rename.isRename){
            //找到选中的I
            var checkedF = seekI();
            //找到第一个
            var file = checkedF[0];           
            var title = file.querySelector(".title");//标题
            var txt = file.querySelector(".txt");//文本框
            var value = txt.value.trim();
            console.log(value)
            //判断当value值为空或者如果和同级文件夹同名标题显示，文本框消失
            if(!value || titleAlike(currentId,value)){
                title.style.display = "block";
                txt.style.display = "none";
                //提示
                timeInfo()
                info.innerHTML = "你重命名的名称已存在，所有命名失败"
            }else{
                title.style.display = "block";
                txt.style.display = "none";
                //重命名成功后标题改为对应的值
                title.innerHTML = value;
                var id = file.dataset.id;
                data[id].title = value;
                //重新渲染菜单栏结构
                contentMenu.innerHTML = createMenuHtml(-1,-1);
                //菜单栏背景高亮
                menuColor(currentId);  
                //重命名成功后的提示
                timeInfo()
                info.innerHTML = "恭喜你重命名成功";
            }
            //把状态改为false
            Rename.isRename = false;
        }
    }
    t.on(document,"mousedown",RenameFn);
    //键盘enter键重命名成功点击事件
    t.on(document,"keydown",function(ev){
        //判断当等于13enter键，就执行上面函数代码
        if(ev.keyCode === 13){
            RenameFn(ev)
        }
    })

    //--------------------------------------------移动到别的文件夹------------------------------------------
    //移动菜单目录渲染
    var MoveCont = document.querySelector(".Move-cont");//菜单栏
    var hint = document.querySelector(".hint")//提示
    
    var move = document.querySelector("#move")//移动到点击
    var zhez = document.querySelector(".zhez")//遮罩
    var Move = document.querySelector(".Move")//容器
    var close = document.querySelector(".close")//小xx
    var btn1 = Move.querySelector(".btn1");//确认
    var btn2 = Move.querySelector(".btn2");//取消
    var iscont = true;//默认可以移动
    var moveid = 0;
    // 移动到文件夹点击事件
    t.on(move,"click",function(){
    	//选中的文件夹i
    	var moveChecked = seekI();
    	if(moveChecked.length === 0){
    		timeInfo()
            info.innerHTML = "请选中要移动的文件夹";
    	}else{
    		Move.style.display = "block";
    		zhez.style.display = "block";
    		MoveCont.innerHTML = createMenuHtml(-1,-1);
    		menuColor(0,MoveCont)
    	}
    })
    //弹框菜单栏点击事件
    t.on(MoveCont,"click",function(ev){
    	var target = ev.target;       
        //判断当点击到每个元素后的做法
        if(target.nodeName === "UL") return;
        if(target.classList.contains("Move-cont")) return;
        //当点击到span或者a标签的时候就找他的父级
        if(target.nodeName === "SPAN" || target.nodeName === "A"){
            target = target.parentNode;
        }else if(target.nodeName === "LI"){//点击到li的时候就找他的第一个子节点
            target = target.firstElementChild
        }
        //找到id
        //选中的弹框菜单
        var id = target.dataset.id;
        //选中的文件夹i
        var moveChecked = seekI();
        moveid = id; //记录一下id
        menuColor(id,MoveCont);
        
        //点击菜单如果是选中文件的父级，提醒文件已经在该文件下
        //点击菜单是选中文件自身或者子级子孙级，提醒不能讲文件移动到自身及其子文件夹下
        iscont = true;
    	var fileId = moveChecked[0].dataset.id;
    	//判断当选中的文件夹的pid 等于菜单栏的id就是父级要提醒
    	if(data[fileId].pid == id){    		
    		hint.innerHTML = "文件已经在该目录下,不能移动,请选择别的目录";
    		iscont = false;
    		return;
    	}else{//不是父级不是自身不是子孙级就说明可以移动
    		hint.innerHTML = "";
    		iscont = true;
    	}	
    	//找到文件的所有子级及子孙级
    	for(var i = 0; i < moveChecked.length; i++){
    		var fileID = moveChecked[0].dataset.id;
    		var childs = getdelData(fileID);
    		//找到选中的文件每一项并找到他们的id
	    	var lens = childs.filter(function(item){
	    		return item.id == id
	    	});
	    	//判断选中的文件是否在选中菜单多有的子级及子孙级中
	    	if(lens.length){
	    		hint.innerHTML = "不能将文件移动到自身及其子文件夹下";
	    		iscont = false;
	    		break;
	    	}
    	}
    })
    //确定点击事件
    t.on(btn1,"click",function(){
    	var txt = hint.innerHTML.trim();
		if(iscont){
			//选中的文件的父级改成菜单中的id
        	var moveChecked = seekI();
        	//找到每个id
        	moveChecked = moveChecked.map(function(node){
        		return node.dataset.id;
        	})
        	console.log(moveChecked);
        	var isAllCont = true;
        	moveChecked.forEach(function(item){
        		if(titleAlike(moveid,data[item].title)){
        			isAllCont = false;
        			return;
        		}
        		data[item].pid = moveid;
        	})
			if(!isAllCont){
				timeInfo();
				info.innerHTML = "部分文件夹移动失败"
            }	
            console.log(createMenuHtml)		
			contentMenu.innerHTML = createMenuHtml(-1,-1);
			render(currentId);
			menuColor(currentId);
			Move.style.display = "none";
			zhez.style.display = "none";
		}
	})
    
    //取消按钮关闭
    t.on(btn2,"click",function(){
		Move.style.display = "none";
		zhez.style.display = "none";
	})
    //小xx关闭
    t.on(close,"click",function(){
    	Move.style.display = "none";
		zhez.style.display = "none";
    })
}