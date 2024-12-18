// back-btnというidを持つHTML要素を取得し、定数に代入する
const backBtn = document.getElementById('back-btn');

window.addEventListener('scroll', () => {

    // 画面のスクロール量をpx（ピクセル）数で取得する
    const scrollValue = document.scrollingElement.scrollTop;

    //画面のスクロール数が300px以上であれば、「TOPに戻る」ボタンを表示する
    if (scrollValue >= 300) {
        backBtn.style.display = 'inline';
    }

    // 画面のスクロール量がそれ以外(300px未満)であれば、「TOPに戻る」ボタンを非表示にする
    else {
        backBtn.style.display = 'none';
    }
});