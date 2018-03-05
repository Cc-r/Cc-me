window.onload = function(){
    //获取元素
    var divs = document.querySelectorAll("#picBox div");
    //console.log(divs)
    //记录最初位置
    var data = [];
    var arr = [];
    var Top = null;
    var Left = null;
    //for循环获取记录所有div最初的位值
    for(var i = 0; i < divs.length; i++){
        var obj = {};//声明一个对象记录初始位置
        obj.left = divs[i].offsetLeft;
        obj.top = divs[i].offsetTop;
        //把记录好的推到一个空数组里
        data.push(obj);
    }
    console.log(data)
    //把div的相对定位转换成绝对定位
    for(var i = 0; i < divs.length; i++){ 
        divs[i].style.position = "absolute";  
        divs[i].style.margin = 0;                         
        divs[i].style.left = data[i].left + "px";
        divs[i].style.top = data[i].top + "px";  
        //每个div调用拖拽函数
        drag(divs[i]);
    }
    //随机打乱
    var btn = document.querySelector("#btn")
    console.log(btn)
    //获取随机打乱点击事件
    btn.onclick = function(){
        console.log("123")
        data.sort(function(){
            console.log("456")
            return Math.random() - 0.5;
        })
        //调用运动函数
        for(var i = 0; i < divs.length; i++){
            animate(divs[i],"top","left",data[i].top,data[i].left,150,"linear")
        }
    }
    //拖拽
    function drag(el){
        //获取鼠标摁下事件
        el.onmousedown = function(ev){
            //储存被拖拽元素的left值和top值
            Top = el.offsetTop;
            Left = el.offsetLeft;
            //鼠标位置
            var disX = ev.clientX - el.offsetLeft;
            var disY = ev.clientY - el.offsetTop;
            //获取鼠标移动事件
            document.onmousemove = function(ev){
                
                //被拖拽元素的位置
                el.style.left = ev.clientX - disX + "px";
                el.style.top = ev.clientY - disY + "px";
                //清除浏览器默认行为
                return false;
            }
            //获取鼠标抬起事件
            document.onmouseup = function(){
                //存碰撞的元素
                arr = [];
                //通过for循环判断是否碰撞到元素
                for(var i = 0; i < divs.length; i++){
                    //当碰撞到的元素不等于自身拖拽
                    if(divs[i] != el){
                        crash(el,divs[i]);
                    }
                }
                //判断如果有元素被碰撞到
                if(arr.length > 0){
                    //设置最小值和变量存最小值
                    var min = Infinity;
                    var div = null;
                    for(var j = 0; j < arr.length; j++){
                        //将调用函数计算的中心点用变量存起来做判断
                        var num = centre(el,arr[j]);
                        //判断当num小于设置的最小值，最小值就等于num
                        if(num < min){
                            min = num;
                            div = arr[j];
                        }
                    }
                    //获取距离拖拽元素中心点距离最近的元素left和top值
                    var newLeft = div.offsetLeft;
                    var newTop = div.offsetTop;
                    //调用运动函数,把拖拽元素和被碰撞最近的元素交换位置
                    animate(div,"top","left",Top,Left,200,'linear')
                }else{
                    newLeft = Left;
                    newTop = Top;
                }
                //将新值赋值给拖拽元素
                animate(el,"top","left",newTop,newLeft,200,'linear')
                document.onmousemove = document.onmouseup = null;
            }
        }
    }

    //碰撞函数
    function crash(a1,a2){
        var Rect1 = a1.getBoundingClientRect();
        var Rect2 = a2.getBoundingClientRect();
        if(
            //拖拽元素的右边 小于 被碰撞元素的左边
            Rect1.right < Rect2.left ||
            //拖拽元素的左边 小于 被碰撞元素的右边
            Rect1.bottom < Rect2.top ||
            //拖拽元素的上边 大于 被碰撞元素的下边
            Rect1.left > Rect2.right ||
            //拖拽元素的下边 大于 被碰撞元素的上边
            Rect1.top > Rect2.bottom
        ){
            return;
        }else{
            arr.push(a2);
        }
    }
    //计算中心点位置
    function centre(a1,a2){
        var Rect1 = a1.getBoundingClientRect();
        var Rect2 = a2.getBoundingClientRect();

        var z = Math.pow(Rect1.left - Rect2.left,2) + Math.pow(Rect1.top - Rect2.top,2)
        return z;
    }
}