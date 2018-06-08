<template>
  <div class="hello" id='box'>
      <div id="views">
          <div id="scrollAD" :style="`font-size:${styleData[0].fontSize}px;color:${styleData[0].color};background:${styleData[0].background};margin:${styleData[0].margin}px 0px`" @click="selectIndex=0">scrollAD</div>
          <div id="List" :style="`font-size:${styleData[1].fontSize}px;color:${styleData[1].color};background:${styleData[1].background};margin:${styleData[1].margin}px 0px`" @click="selectIndex=1">List</div>
          <div id="List1" :style="`font-size:${styleData[2].fontSize}px;color:${styleData[2].color};background:${styleData[2].background};margin:${styleData[2].margin}px 0px`" @click="selectIndex=2">List1</div>
          <div id="List2" :style="`font-size:${styleData[3].fontSize}px;color:${styleData[3].color};background:${styleData[3].background};margin:${styleData[3].margin}px 0px`" @click="selectIndex=3">List2</div>
          <div id="List3" :style="`font-size:${styleData[4].fontSize}px;color:${styleData[4].color};background:${styleData[4].background};margin:${styleData[4].margin}px 0px`" @click="selectIndex=4">List3</div>
          <div id="List4" :style="`font-size:${styleData[5].fontSize}px;color:${styleData[5].color};background:${styleData[5].background};margin:${styleData[5].margin}px 0px`" @click="selectIndex=5">List4</div>
          <div id="List5" :style="`font-size:${styleData[6].fontSize}px;color:${styleData[6].color};background:${styleData[6].background};margin:${styleData[6].margin}px 0px`" @click="selectIndex=6">List</div>
      </div>



      <div id="edit">
        <div id="scrollAdE" v-if="selectIndex==0">
            <div class="fontSize">
                <p>字体大小(单位：px)</p>
                <el-slider style="width:500px;"
                  v-model="styleData[0].fontSize"
                  show-input>
                </el-slider>
            </div>


            <div class="margin">
                <p>上下边距(单位：px)</p>
                <el-slider style="width:500px;"
                  v-model="styleData[0].margin"
                  show-input>
                </el-slider>
            </div>


            <div class="color">
                <p>字体颜色</p>
                <el-color-picker v-model="styleData[0].color"></el-color-picker>
            </div>



              <div class="background">
                <p>背景颜色</p>
                <el-color-picker v-model="styleData[0].background"></el-color-picker>
            </div>
        </div>

        <div id="List" v-else-if="selectIndex==1">
            <div class="fontSize">
                <p>字体大小(单位：px)</p>
                <el-slider style="width:500px;"
                  v-model="styleData[1].fontSize"
                  show-input>
                </el-slider>
            </div>


            <div class="margin">
                <p>上下边距(单位：px)</p>
                <el-slider style="width:500px;"
                  v-model="styleData[1].margin"
                  show-input>
                </el-slider>
            </div>


            <div class="color">
                <p>字体颜色</p>
                <el-color-picker v-model="styleData[1].color"></el-color-picker>
            </div>



              <div class="background">
                <p>背景颜色</p>
                <el-color-picker v-model="styleData[1].background"></el-color-picker>
            </div>
        </div>

        <div id="List1" v-else-if="selectIndex==2">
            <div class="fontSize">
                <p>字体大小(单位：px)</p>
                <el-slider style="width:500px;"
                  v-model="styleData[2].fontSize"
                  show-input>
                </el-slider>
            </div>


            <div class="margin">
                <p>上下边距(单位：px)</p>
                <el-slider style="width:500px;"
                  v-model="styleData[2].margin"
                  show-input>
                </el-slider>
            </div>


            <div class="color">
                <p>字体颜色</p>
                <el-color-picker v-model="styleData[2].color"></el-color-picker>
            </div>



              <div class="background">
                <p>背景颜色</p>
                <el-color-picker v-model="styleData[2].background"></el-color-picker>
            </div>
        </div>

        <div id="List2" v-else-if="selectIndex==3">
            <div class="fontSize">
                <p>字体大小(单位：px)</p>
                <el-slider style="width:500px;"
                  v-model="styleData[3].fontSize"
                  show-input>
                </el-slider>
            </div>


            <div class="margin">
                <p>上下边距(单位：px)</p>
                <el-slider style="width:500px;"
                  v-model="styleData[3].margin"
                  show-input>
                </el-slider>
            </div>


            <div class="color">
                <p>字体颜色</p>
                <el-color-picker v-model="styleData[3].color"></el-color-picker>
            </div>



              <div class="background">
                <p>背景颜色</p>
                <el-color-picker v-model="styleData[3].background"></el-color-picker>
            </div>
        </div>

        <div id="List3" v-else-if="selectIndex==4">
            <div class="fontSize">
                <p>字体大小(单位：px)</p>
                <el-slider style="width:500px;"
                  v-model="styleData[4].fontSize"
                  show-input>
                </el-slider>
            </div>


            <div class="margin">
                <p>上下边距(单位：px)</p>
                <el-slider style="width:500px;"
                  v-model="styleData[4].margin"
                  show-input>
                </el-slider>
            </div>


            <div class="color">
                <p>字体颜色</p>
                <el-color-picker v-model="styleData[4].color"></el-color-picker>
            </div>



              <div class="background">
                <p>背景颜色</p>
                <el-color-picker v-model="styleData[4].background"></el-color-picker>
            </div>
        </div>

        <div id="List4" v-else-if="selectIndex==5">
            <div class="fontSize">
                <p>字体大小(单位：px)</p>
                <el-slider style="width:500px;"
                  v-model="styleData[5].fontSize"
                  show-input>
                </el-slider>
            </div>


            <div class="margin">
                <p>上下边距(单位：px)</p>
                <el-slider style="width:500px;"
                  v-model="styleData[5].margin"
                  show-input>
                </el-slider>
            </div>


            <div class="color">
                <p>字体颜色</p>
                <el-color-picker v-model="styleData[5].color"></el-color-picker>
            </div>



              <div class="background">
                <p>背景颜色</p>
                <el-color-picker v-model="styleData[5].background"></el-color-picker>
            </div>
        </div>

        <div id="List5" v-else-if="selectIndex==6">
            <div class="fontSize">
                <p>字体大小(单位：px)</p>
                <el-slider style="width:500px;"
                  v-model="styleData[5].fontSize"
                  show-input>
                </el-slider>
            </div>


            <div class="margin">
                <p>上下边距(单位：px)</p>
                <el-slider style="width:500px;"
                  v-model="styleData[6].margin"
                  show-input>
                </el-slider>
            </div>


            <div class="color">
                <p>字体颜色</p>
                <el-color-picker v-model="styleData[6].color"></el-color-picker>
            </div>



              <div class="background">
                <p>背景颜色</p>
                <el-color-picker v-model="styleData[6].background"></el-color-picker>
            </div>
        </div>



        <el-button type="primary" :loading="isLoaing" @click="submit()">加载中</el-button>





        




        





      </div>

  </div>
</template>

<script>
export default {

  data () {
    return {
        selectIndex:0,
        isLoaing:false,
        styleData:[
            {name:'ScrollAd',fontSize: 12,margin: 0,color: 'red',background: '#ccc',},
            {name:'List',fontSize: 12,margin: 0,color: 'red',background: '#409EFF',},
            {name:'List1',fontSize: 12,margin: 0,color: 'red',background: '#fff',},
            {name:'List2',fontSize: 12,margin: 0,color: 'red',background: '#409EFF',},
            {name:'List3',fontSize: 12,margin: 0,color: 'red',background: '#ccc',},
            {name:'List4',fontSize: 12,margin: 0,color: 'red',background: '#409EFF',},
            {name:'List5',fontSize: 12,margin: 0,color: 'red',background: '#fff',},
        ],


        

      
        
    }
  },
  created(){

  },
   methods: {
      submit(){
        this.isLoaing=true;
          // console.log(this.styleData[0])
          var obj={};
          obj.styleData=this.styleData;
          this.$http.post('/setData',obj).then((res)=>{
            this.isLoaing=false;
            console.log(res);
          })
      }
     
  },

  mounted(){ 
 


  },
  components:{
    
  }

}
</script>

<style>

  [v-cloak] {
    display: none;
  }

  #box{
    width:100%;
    display: flex;
    flex-flow: row nowrap;
  }
  #box #views{
      width: 375px;
      height: 667px;
      margin: 50px;
      overflow-y: scroll;
  }
  #box #views div{
    height: 100px;
    border-bottom: 1px solid #fff;
  }

  #box #edit{
    width: 800px;
    background: #ccc;

  }

</style>


