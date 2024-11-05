/*　制作の流れ
・ゴール：ボタンをクリックするとh2の文言が変わる

やること
・button id=btn を定数に代入する
・h2 id=text を定数に代入する

・buttonをクリックしたときにイベント処理を行う
・h2へ新しいテキストを代入する
*/


// idがbtnのbutton要素を、定数btnに代入する
const btn = document.getElementById('btn');

// idがtextのh2要素を、定数textに代入する
const text = document.getElementById('text');

// btnがクリックされたときにイベント処理を行う
btn.addEventListener('click', () => {
    // textのテキストを書き換える
    text.textContent = 'ボタンをクリックしました';
})