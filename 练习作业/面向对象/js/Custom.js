function Custom(){
    this.tellBooks = {};
}
//订阅(记录)
Custom.prototype.on = function(metre,tell){
    //判断有没有存入电话信息等
    if(!this.tellBooks[metre]){
        this.tellBooks[metre] = [];
    }
    //没有就记录到tellBooks
    if(this.tellBooks[metre].indexOf(tell) === -1){
        this.tellBooks[metre].push(tell)
    }            
}
//发布
Custom.prototype.emit = function(metre,...params){
    let metres = this.tellBooks[metre];               
    if(metres){
        //循环所有的电话信息，有电话就通知
        for(var i = 0; i < metres.length; i++){
            metres[i](...params);
        }
    }
}
//取消
Custom.prototype.off = function(metre,...params){
    let metres = this.tellBooks[metre];  
    for(var i = 0; i < metres.length; i++){
        if(metres[i] === tell){
            metres[i].splice(i,1)
        }
    } 
}