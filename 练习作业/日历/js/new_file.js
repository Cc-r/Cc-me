window.onload = function(){
	/*
      1. 一个月有多少天  生成span
      2. 一个月的1号周几 开始生成占位的span
      3. 总的格子数 6X7 = 42;
    */
   	//根据总天数生成span
    var dateNums = document.querySelector('.date-nums')//声明每天几号的父级   
    //声明年月
    var curMonth = document.querySelector('.cur-month')
    var contDate = document.querySelector('.cont-date')
    
    //上一月
    var prev = document.querySelector('.prev')
    //下一月
    var next = document.querySelector('.next')
    //上一年
    var prevYear = document.querySelector('.prevYear')
    //下一年
    var nextYear = document.querySelector('.nextYear')
    
    //声明一个对象用来存年月日
    var current = {};//根据current存的年月日，生成结构
    
    var now = new Date();
    
    current.year = now.getFullYear();//2018
    current.month = now.getMonth()+1;//1
    current.date = now.getDate();//23   
    
    console.log(current)
    
    //获取上一月的点击事件
    prev.onclick = function(){
    	current.month--;
    	init(current);
    	console.log(123)
    }
    //获取下一个月的点击事件
    next.onclick = function(){
    	current.month++;
    	init(current);
    }
    //获取上一年的点击事件
    prevYear.onclick = function(){
    	current.year--;
    	init(current);
    }
    //获取下一年的点击事件
    nextYear.onclick = function(){
    	current.year++;
    	init(current);
    }
    //
    //初始化年月日结构，默认当前系统时间为准
    init(current);
    function init(setTime){
    	// 声明年月日
	    var d = new Date();
	    //设置
	    d.setFullYear(setTime.year)//设置年
	    d.setMonth(setTime.month-1)//设置月
	    d.setDate(setTime.date)//设置日
	    
	    var year = d.getFullYear();//年
	    var month = d.getMonth()+1;//月
	    var date = d.getDate();//日
	    
	    
	    //更新current年月日对象，为了让它跟视图保持一致
	    current.year = year;//2018
    	current.month = month;//1
   		current.date = date;//23
   		
	    //一个月的总天数
	    var totalDeat = getMonthDate(year,month);
	    //console.log(totalDeat)//31
	    
	    //每个月1号周几
	    var week = getOneWeek(year,month);
	    //console.log(week)//根据系统时间同步是周一
	    
	    //拼接年月
	    curMonth.innerHTML = year + '年' + month + '月';
	    
	    //上一个月的总天数
	    var prevDate = getMonthDate(year,month-1);
	    
	    //剩下格子 = 总数-总天数-每月1号周几
	    var endNums = 42 - totalDeat - week;
	    
 		// 根据总天数生成span
	    dateNums.innerHTML = createStartSpans(week) + createSpans(totalDeat,date) + createEndSpans(endNums);
	    
	    // 找到class为start的span
	   	var startSpans = dateNums.querySelectorAll('.start');

        for( var i = startSpans.length-1; i >= 0; i-- ){//剩余的span格子
          startSpans[i].innerHTML = prevDate-- ;
        }
	    //拼接年月日
	    contDate.innerHTML = year + '年' + month + '月' + date + '日'    
    }
    //生成剩下的span
    function createEndSpans(nums){
    	var endNumshtml = '';
	    for(var i = 1; i <= nums; i++){
	    	endNumshtml += '<span class="color">'+i+'</span>'
	    }
	    return endNumshtml;
    }
    //时间
    time();
    function time(){
    	var d = new Date();
    	var h = d.getHours();//时
		var m = d.getMinutes();//分
		var s = d.getSeconds();//秒
    	var contHours = document.querySelector('.cont-Hours')
    	function addZero(n){
			return n < 10 ? "0"+n : n;
		}
    	//拼接时分秒
	    contHours.innerHTML = addZero(h)+':'+addZero(m)+':'+addZero(s);
    };
	setInterval(time,1000)
    
    //占位，根据1号周几就占几个位置，生成span
    function createStartSpans(week){
    	var html = '';
	    for(var i = 0; i < week; i++){
	    	html += '<span class="start color"></span>'
	    }
	    return html;
    }

    //根据总天数生成中间结构
    function createSpans(totalDeat,currentDate){//总天数   、当前日期
    	var dateNumshtml = '';
	    for(var i = 1; i <= totalDeat;i++){
	    	if(i === currentDate){//当i === 系统当前日期加上一个背景颜色突出
	    		dateNumshtml += '<span class = "blue">'+i+'</span>'
	    	}else{
	    		dateNumshtml += '<span>'+i+'</span>'
	    	}
	    	
	    }
	    return dateNumshtml;
    }
    
   // 1号周几
    function getOneWeek(y,m){
      var d = new Date();
      d.setFullYear(y)
      d.setMonth(m-1)
      d.setDate(1);
      return d.getDay();
    }
    
    // 一个月多少天
    function getMonthDate(y,m){
      var d = new Date();
      d.setFullYear(y)
      d.setMonth(m)  // 设置到下一个月
      d.setDate(0)  // 把日期设置为0，上一个月的最后一天
      return d.getDate();
    }
}
