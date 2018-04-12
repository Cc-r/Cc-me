<template>
    <section class="main">
        <input class="toggle-all" type="checkbox" v-model="isCheckedAll"/>
        <ul class="todo-list">
             <!-- class="completed editing" -->
            <li 
                :key="index" 
                v-for="(item,index) in list"
                :class="{
                    completed: item.checked,
                    editing:item === editTitle
                }"
            >
                <div class="view">
                    <input 
                        class="toggle" 
                        type="checkbox" 
                        v-model="item.checked"
                    />
                    <label @dblclick="compileTitle(item,index)">{{item.title}}</label>
                    <button class="destroy" @click="isDelete(item)"></button>
                </div>
                <input class="edit"  ref="edit"
                    v-model="item.title"
                    @blur="compileItem(item)" 
                    @keyup.13="compileItem(item)"
                    @keyup.esc="complileCancel(item)"
                />
            </li>
        </ul>
    </section>
</template>
<script>
    export default{
        name:'todos-cont',
        data(){
            return{
                editTitle:'',
                beforeTitle:''
            }
        },
        props:{
            list:{
                type:Array,
                default(){
                    return []
                }
            }
        },
        methods:{
            upenter(){              
                this.$emit('up-enter')                
            },
            isDelete(obj){
                let index = this.list.findIndex(item =>item === obj);
                console.log(index)
                if(index !== -1){
                    this.list.splice(index,1)
                }
            },
            //编辑
            compileTitle(obj,index){
                this.editTitle = obj;
                console.log(this.list.editTitle)
                console.log(this.$refs)
                this.$nextTick(function(){
                    this.$refs.edit[index].focus();
                }) 
                // //记录title
                this.beforeTitle = obj.title          
                //console.log('双击了')
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
                    return this.list.every(item => item.checked)
                },
                set(newVal){
                     this.list.forEach(item => item.checked = newVal)
                }
            },
            checkedLength(){
                return this.list.filter(item => !item.checked).length
            }   
        }
    }
</script>