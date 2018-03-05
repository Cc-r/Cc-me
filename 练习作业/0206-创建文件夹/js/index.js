window.onload = function(){
    /*
        1. 新建文件夹
            a. 创建文件夹
            b. 鼠标移入，背景颜色变化，添加class为red
            c. 单选按钮要出现
            d. 点击单选按钮，鼠标移开背景颜色依然为red
            e. 单选按钮可以选中和不选中，不能使用checkbox，需要自定义
            f. 删除选中的文件夹
    */

    var New = document.querySelector(".new");//新建文件夹
    var remove = document.querySelector(".remove");//删除文件夹
    var list = document.querySelector("#list")
    New.onclick = function(){     
        var li = document.createElement("li")
        li.innerHTML = '<div class="oP"></div><img src="img/wenjian.png" /><span>新建文件夹</span>';
        list.appendChild(li);//给ul插入li节点
        var divs = li.querySelector(".oP")//获取li里的p标签
        li.stae = false;
        //获取移入事件
        li.onmouseover = function(){    
            //var n = ture;                    
            li.className = "bg";//移入的时候背景颜色出现
            li.firstElementChild.style.opacity = 1;//小白框出现
        }
        //获取li的点击事件
        li.onclick = function(){
            divs.classList.toggle("red")//点击li小白框勾选上颜色为红
            if(divs.className){
                li.stae = true;
            }else{
                li.stae = false;
            }
        } 
        li.onmouseout = function(){
            if(this.stae){
                return;
            }else{
                li.className = "";//移入的时候背景颜色出现
                li.firstElementChild.style.opacity = 0;//小白框出现
            }
        }              
    }
    //获取删除点击事件
    remove.onclick = function(){
        var li = document.querySelectorAll("li")//获取所有的li
        for(var i = 0; i < li.length; i++){
            if(li[i].stae){//通过判断，删除文件夹
                li[i].remove();
            }
        }
    }
    
}