<template>
  <html lang='ja'>
  <head></head>
  <body>
  <div class='chat'>
    <ul>
          <input v-model="chats" type="radio" value="chat" name="chat" id="chat">
          <label for="chat">チャット</label>
          <input v-model="questions" type="radio" value="question" name="chat" id="question">
          <label for="questions">質問</label>
          <br>
    </ul>
    <div class="th">
      <form id="submit">
          <p>タグ1：<input type="text" id="tag1"></p>
          <p>タグ2：<input type="text" id="tag2"></p>
          <p>タグ3：<input type="text" id="tag3"></p>
          <p>スレッド名：<textarea v-model="textArea" id="thread" rows=3 cols=30 wrap=soft></textarea></p>
          <button id="submit" type="submit"  @click="check" formaction="./newkeijibann.html" name="button_a" >作成</button> 
          <input type="reset" value="クリア">
      </form>    
    </div>
  </div>
  </body>
  </html>
</template>

<script>
export default {
      el:'#chat',
      data:function(){return {textArea:""};},
      methods:{check:function() {
        if (this.textArea == "" ){
            //条件に一致する場合(メールアドレスが空の場合)
            alert("入力が不十分です");    //エラーメッセージを出力
            return false;    //送信ボタン本来の動作をキャンセルします
        }else{
            return true;    //送信ボタン本来の動作を実行します
        }},
                jump:function(){ 

        }
    }
}

</script>

<style>
.chat{
      background: #42b983;
      color:#2c3e50;
      vertical-align:top;
      width: 510px;
      padding: 50px;
      text-align: center;
      margin: 30px auto;
      font-weight: bold;
            }
.th{
      vertical-align:top;
      background: #2c3e50;
      color:#42b983;
      width: 500px;
      padding: 1px;
      text-align: center;
      margin: 30px auto;
      font-weight: bold;}
#thread{text-align: center;
        vertical-align:top;}
        
</style>