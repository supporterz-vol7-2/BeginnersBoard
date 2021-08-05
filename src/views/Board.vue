<template>
    <div>

        <ul v-for="user of users" v-bind:key="user.name">
            <div class="box2">
                <p class="name">{{ user.name }}</p>
                <p class="content"> {{ user.content }}</p>
                <p class="good"> いいね：{{ user.good }}</p>
                <p class="space">  a</p>
                
            </div>
            <child :replys="user.replys"></child>
            
        </ul>
    </div>
</template>

<script>
import Child from './reply.vue';

 export default {
    data: function() {
        return {
            users: [
            { name: '太郎',content :"ギターこれからするのでコツ教えて！" ,good:4,
            replys:[
                { name: '二郎' ,content :"弦をはじくと音が出るぜ" ,good:13},
                { name: 'ああああ' ,content :"いい感じに弾こう" ,good:8},
            ]},
            
            { name: '近所のおばちゃん' ,content :"ギター楽しいね" ,good:9,replys:[]}
            ]
        }
    },
    components: {
        Child
    }


 }

</script>

<style>

.box2{
margin: 2em auto;
padding: 1em;
width: 100%;
color: #606060;
border: 2px solid #a3703e;
background-color: #fff;
box-shadow: -2px 5px 5px #ceb4a5;
border-radius: 15px;
}
.box_reply{
margin: 2em auto;
padding: 1em;
width: 100%;
color: #606060;
border: 2px solid #0fd499;
background-color: #fff;
box-shadow: -2px 5px 5px #ceb4a5;
border-radius: 15px;
}


.name {
    text-align: left;
    color: black;
    font-size: 120%;
    text-decoration: none;
}



.content {
    text-align: center;
    color: black;
    font-size: 200%;
    text-decoration: none;
}

.good {
    text-align: right;
    color: black;
    float: right;
    line-height: -400%;
}
.space {
    text-align: left;
    color: rgb(255, 255, 255);
    font-size: 120%;
    text-decoration: none;
}



</style>

