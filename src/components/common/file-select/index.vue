<template>
    <div class="file-select" v-if="value">
        <div class="select-file-box-content">
            <header>
                <h3>{{local.selectFile}}</h3>
                <span class="close-button" @click="closeModal">+</span>
            </header>
            <section>
                <div class="left-menu">
                    <ul >                                    
                        <li class="follow" @click="getList(k)" v-for="(v,k) in menus" :key="k" :class="{activeTab: activeTab === k}">{{v}}</li> 
                    </ul>
                </div>
                <div class="right-content"> 
                    <div class="data-list">                                    
                        <div class="table">                                        
                            <div class="thead">                                            
                                <div class="tr">                                                
                                    <div class="td">{{local.filename}}</div>                                                
                                    <div class="td">{{local.size}}</div>                                                
                                    <div class="td">{{local.lastUpdatedBy}}</div>                                                
                                    <div class="td">{{local.lastUpdatedAt}}</div>                                            
                                </div>                                        
                            </div>                                        
                            <div class="tbody" v-if="dataList">
                                <div class="tr" v-for="(v,k) in dataList" :key="k">
                                    <div class="td" :title="v.title+'.'+v.fileext">
                                        <input type="checkbox" name="file-box-checkbox" :value="checked[k]" v-model="checked[k]" :id="v.fid">
                                        <label :for="v.fid" @click="selectFile(k)"></label>
                                        <span class="ellipsis fileName">{{v.title+'.'+v.fileext}}</span>
                                    </div>
                                    <div class="td">{{bytesToSize(v.filesize)}}</div>
                                    <div class="td" :title="v.fname">
                                        <span class="ellipsis author">{{v.name}}</span>
                                    </div>
                                    <div class="td">{{Utils.formatTime(v.updatetime*1000)}}</div>
                                </div>    
                            </div>                                    
                        </div>                                
                    </div>                                
                    <footer>                                    
                        <a href="javascript:;" class="button gray-button"  @click="closeModal">{{local.cancel}}</a>                                    
                        <a href="javascript:;" class="button red-button" @click="sureBtn">{{local.ok}}</a>                                
                    </footer>                            
                </div>
            </section>
        </div>
    </div>
</template>

<script>
import Config from '../../../config/config';
import Lang from '../../../assets/lang/index'
export default {
    name: 'fileSelect',
    props:{
        value:{
            type: Boolean,
            default: false
        },
        host:{
            type: String,
            default: 'http://web.api.chaoke.com:6062'//test,prevProduction,production
        },
        lang:{
            type: String,
            default:'zh_cn'
        }
    },
    data() {
        return {
            menus:[],
            activeTab:0,
            url:['file/listFileFollow','file/listFileUpload','file/listFileScreen'],
            dataList:[],
            selectedFiles:{},
            checked:[],
            local:{}
        }
    },
    watch: {
        value: function(newValue) { // 监听是否打开组件
            if(newValue){
                this.getList(0)
            }
        }
    },
    methods:{
        bytesToSize(bytes){
            if (bytes === 0){
                return '0 KB';
            }
            var k = 1000,
                sizes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'],
                i = Math.floor(Math.log(bytes) / Math.log(k));
           return (bytes / Math.pow(k, i)).toPrecision(3) + ' ' + sizes[i];
        },
        getList(type){
            this.activeTab = type;
            this.dataList = [];
            this.$http.get(`${this.host}/${this.url[type]}?v=1.0&count=99&qzid=0&page=1`).then((res) => {
                if(res&&res.data.code ===0 ){
                    this.dataList = res.data.data||[];
                    console.log(this.dataList,'this.dataList')
                    this.dataList.forEach((v,k)=>{
                        this.checked[k] = false;
                    })
                }
            }).catch(()=>{

            })
        },
        selectFile(index){
            this.checked[index] = !this.checked[index]
        },
        closeModal(){
            this.$emit('input', false)
        },
        sureBtn(){
            this.selectedFiles = {};
            this.dataList.forEach((v,k)=>{
                if(this.checked[k]){
                    this.selectedFiles[v.fid] = {
                        fileId: v.fid,
                        fileName: v.title,
                        fileExtend: v.fileext,
                        fileSize: v.filesize,
                        fileAuthor: v.name,
                        filePath: v.filepath
                    }
                }               
            })
            this.$emit('on-ok', this.selectedFiles)
            this.$emit('input', false)
        }
    },
    created() {
        this.local = Lang[this.lang].fileSelect;
        this.menus = [this.local['followed'],this.local['uploaded'],this.local['screenshots']]
    }
}
</script>

<style lang="less" scoped>
.file-select * {
    margin: 0;
    padding: 0;
    font-size: 12px;
    box-sizing: border-box;
}
.file-select{
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 3000;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    background: rgba(0, 0, 0, .5);
    margin: 0;
    padding: 0;
    font-size: 12px;
    .select-file-box-content{
        position: absolute;
        top: 50%;
        left: 50%;
        width: 720px;
        height: 440px;
        background: #fff;
        border-radius: 6px;
        font-size: 12px;
        transform: translate(-50%, -50%);
        header {
            height: 50px;
            line-height: 50px;
            padding: 0 10px;
            border-bottom: 1px solid #ededed;
            h3 {
                display: inline-block;
                font-size: 14px;
                margin: 0;
            }
            .close-button{
                float: right;
                cursor: pointer;
                user-select: none;
                transform: rotate(45deg) scale(2.4) translate(-3px, 3px);
            }
        }
        section {
            font-size: 12px;
            height: 390px;
            clear: both;
            .left-menu {
                float: left;
                width: 110px;
                height: 100%;
                font-size: 14px;
                border-right: 1px solid #ededed;
                ul {
                    list-style: none;
                    li {
                        height: 40px;
                        line-height: 40px;
                        text-align: center;
                        cursor: pointer;
                    }
                    .activeTab{
                        background: #efefef;
                    }
                }
            }
            .right-content {
                float: left;
                width: 610px;
                .data-list {
                    min-height: 340px;
                    max-height: 340px;
                    overflow-y: auto;
                    .table {
                        display: table;
                        width: 100%;
                        .thead {
                            display: table-header-group;
                            
                        }
                        .tbody {
                            display: table-row-group;
                            label {
                                position: relative;
                                width: 12px;
                                height: 12px;
                                border-radius: 2px;
                                border: 1px solid #bbb;
                                display: inline-block;
                                vertical-align: middle;
                            }
                            input[type="checkbox"] {
                                display: none;
                            }
                            input[type="checkbox"]:checked+label {
                                background: #FA4F52;
                                border-color: #FA4F52;
                            }
                            input[type="checkbox"]:checked + label:after {
                                content: '';
                                position: absolute;
                                left: 1px;
                                top: 2px;
                                display: inline-block;
                                width: 8px;
                                height: 4px;
                                border: 0;
                                border-top: 2px solid #fff;
                                border-right: 2px solid #fff;
                                transform: rotate(130deg);
                            }
                            .ellipsis {
                                display: inline-block;
                                overflow: hidden;
                                text-overflow: ellipsis;
                                white-space: nowrap;
                                vertical-align: middle;
                            }
                            .fileName {
                                max-width: 170px;
                            }
                            .author {
                                max-width: 100px;
                            }
                        }
                        .tr {
                            display: table-row;   
                            cursor: pointer;
                        }
                        .td {
                            height: 40px;
                            line-height: 40px;
                            display: table-cell;
                            padding-left: 10px;
                            border-bottom: 1px solid #ededed;
                        }
                    }
                }
                footer {
                    clear: both;
                    font-size: 0;
                    padding: 10px 10px;
                    text-align: right;
                    border-top: 1px solid #ededed;
                    .gray-button {
                        color: #474d54;
                        background: #e4e4e4;
                    }
                    .red-button {
                        color: #fff;
                        background: #e14c46;
                        margin-left: 10px;
                    }
                    .button {
                        display: inline-block;
                        height: 30px;
                        line-height: 30px;
                        text-decoration: none;
                        border-radius: 3px;
                        font-size: 12px;
                        padding: 0 20px;
                    }
                }
            }
        }
    }
}
</style>