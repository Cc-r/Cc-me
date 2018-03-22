// 工具函数

/*
    封装绑定事件处理函数的工具函数
        addEventListener
*/
var t = (function (){
    //事件处理函数
    function on(element,evName,evFn){
        element.addEventListener(evName,evFn);
    }
    //事件处理解绑函数
    function off(element,evName,evFn){
        element.removeEventListener(evName,evFn)
    }
    //--------------碰撞检测函数---------------------
    function getRect (element){           
        return element.getBoundingClientRect();
    }
	function isDung(box1,box2){
        var getBox1Rect = getRect(box1);
        var getBox2Rect = getRect(box2);
        if(
            //拖拽元素box1的右边 小于 被碰撞元素的左边
            getBox1Rect.right < getBox2Rect.left ||
            //拖拽元素box1的左边 小于 被碰撞元素的右边
            getBox1Rect.bottom < getBox2Rect.top ||
            //拖拽元素box1的上边 大于 被碰撞元素的下边
            getBox1Rect.left > getBox2Rect.right ||
            //拖拽元素box1的下边 大于 被碰撞元素的上边
            getBox1Rect.top > getBox2Rect.bottom
        ){
            return false;//没碰上
        }else{
            return true;//碰上了
            
            
        }
    }
    return {
        on:on,
        off:off,
        getRect:getRect,
        isDung:isDung
    }
})()