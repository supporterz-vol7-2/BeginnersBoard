<template>
    <div>
        <p class="board-title"> 掲示板一覧 </p>
        <ul v-for="item of items" v-bind:key="item.name">
            <div class="box9">
                <p class="title"><router-link to= ./board>{{ item.name }}</router-link></p>
                <a class="example">参加人数 : {{ item.num }}</a>
            </div>
        </ul>
    </div>
</template>

<script>
 export default {
    data: function() {
        return {
            items: [
            { name: 'ギター',num :50 },
            { name: '料理' ,num :10 },
            { name: 'ランニング' ,num :20 },
            { name: '究極のお味噌汁' ,num :30 }
        ]
        }
    }


 }

</script>

<style>

.box9 {
    padding: 0.5em 1em;
    margin: 2em 0;
    color: #000000;
    background: #e7e7e7;
    border-top: solid 10px #000000;
}


.title {
    text-align: left;
    color: black;
    font-size: 200%;
    text-decoration: none;
}



.title :hover {
    text-align: left;
    color: black;
    font-size: 120%;
    text-decoration: none;
    text-decoration: underline;
}

.example {
    text-align: right;
    color: black;
    float: right;
    height:50px;
}


</style>

