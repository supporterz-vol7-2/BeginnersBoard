<template>
<html>
<head>
    
</head>
<body>

<div style="text-align:center;">
<ul>
        <input v-model="form" type="radio" value="chat" name="chat" id="chat" checked="checked">
        <labelfor="chat">'チャット'</label>

        <input v-model="form" type="radio" value="questions" name="questions" id="questions">
        <labelfor="questions">'質問'</label>
</ul>
</div>
<div style="text-align:center;">
    <form method="POST" action="./newkeijibann.html" name="js">
        <p>タグ1：<input type="text" name="tag1"></p>
        <p>タグ2：<input type="text" name="tag2"></p>
        <p>タグ3：<input type="text" name="tag3"></p>
        <p>スレッド名：<textarea name='thread' value='' rows=3 cols=30 wrap=soft></textarea></p>
        <button type="submit"  onclick="return check()" formaction="./newkeijibann.html" name="button_a" >作成</button> 
        <input type="reset" value="クリア">
    </form>    
</div>
</body>
</html>
</template>
<script type="text/javascript">
    function check(){
        if (js.thread.value == "" ){
            //条件に一致する場合(メールアドレスが空の場合)
            alert("入力が不十分です");    //エラーメッセージを出力
            return false;    //送信ボタン本来の動作をキャンセルします
        }else{
            return true;    //送信ボタン本来の動作を実行します
        }
    }
    
</script>
<style>
        body{
            background: #eeeeee;
            
        }
        textarea{
                vertical-align:top;
        }
        div {
            background: #008080;
            width: 500px;
            padding: 10px;
            text-align: center;
            margin: 30px auto;
            }

</style>