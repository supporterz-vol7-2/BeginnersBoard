<template>
    <div>

        <ul v-for="reply of replys" v-bind:key="reply.name">
            <div class="box_left">
                <div class="box_reply">
                    <p class="name">{{ reply.name }}</p>
                    <p class="content"> {{ reply.content }}</p>
                    <p class="good"> いいね：{{ reply.good }}</p>
                    <p class="space">  a</p>
                </div>
            </div>
            
            
        </ul>
    </div>
</template>

<script>
 export default {
    props :['replys'],
    setup(props) {
        console.log(props.replys) // コンソールに配列の内容が表示される
    },


 }

</script>

<style>


.box_left{
width: 60%;
height: 60%;
margin-left:auto;

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

