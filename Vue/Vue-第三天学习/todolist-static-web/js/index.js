let data = JSON.parse(localStorage.getItem('cc')) || [];
let vm = new Vue({
    el:'.todoapp',
    data:{
        data,
        todo:'',
        editTitle:'', //记录编辑对象
        beforeTitle:'',
        hash:'all'
    },
    watch:{
        data:{
            deep: true,
            handler(){
                localStorage.setItem('cc',JSON.stringify(this.data))
            }
        }
    },
    methods:{
        //添加数据
        upenter(){
            // if(ev.keyCode === 13){
            //     this.data.push({
            //         title:ev.target.value
            //     })
            // }
            // console.log(ev.keyCode);
            // console.log(ev.target.value)
            console.log(this.todo)
            if(this.todo.trim() === ""){
                return
            }
            this.data.push({
                title: this.todo
            })
            this.todo = '';            
        },//删除数据
        isDelete(obj){//传入一个对象  找到他的下标
            let index = this.data.findIndex(item =>item === obj);
            console.log(index)
            if(index !== -1){
                this.data.splice(index,1)
            }
            
        },//编辑
        compileTitle(obj,index){
            this.editTitle = obj;
            //console.log(this.editTitle)
            this.$nextTick(function(){
                // let editInputs = document.querySelectorAll(".edit")
                // console.log(editInputs[index])
                // editInputs[index].focus()
                this.$refs.edit[index].focus();
            }) 
            //记录title
            this.beforeTitle = obj.title          
        },//编辑完成
        compileItem(obj){
            this.editTitle = '';
            if(obj.title.trim() === ''){
                this.isDelete(obj)
            }
            this.beforeTitle = '';
        },//还原编辑之前的状态
        complileCancel(obj){
            this.editTitle = '';
            obj.title = this.beforeTitle;
            this.beforeTitle = '';
        }
    },
    computed:{
        isCheckedAll:{
            get(){
                return this.data.every(item => item.checked)
            },
            set(newVal){
                return this.data.forEach(item => item.checked = newVal)
            }
        },
        checkedLength(){
            return this.data.filter(item => !item.checked).length
        },//根据data中的hash过滤list
        filterData(){
            if(this.hash === 'all'){//全部
                return this.data
            }else if(this.hash === 'active'){//未完成
                return this.data.filter(item => !item.checked)
            }else if(this.hash === 'completed'){//已完成
                return this.data.filter(item => item.checked)
            }
        }
    }
})
//hash值
let hashMap = {
    all:true,
    active:true,
    completed:true
}
function gethash(){
    let hash = window.location.hash;
    console.log(hash)
    if(hash){
        hash = hash.slice(2);
        if(!hashMap[hash]){
            hash = 'all'
            window.location.hash = '';
        }
    }else{
        hash = 'all'
    }
    vm.hash = hash;
    console.log(vm.hash)
}
gethash();
window.onhashchange = gethash;