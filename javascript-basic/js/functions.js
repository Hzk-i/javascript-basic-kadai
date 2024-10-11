// 朝の挨拶を出力する関数を定義する
const sayGoodMorning = () => {
    console.log('おはようございます！');
    console.log('昨日はよく眠れましたか？');
    console.log('今日も１日頑張りましょう！');
}

// 夜の挨拶を出力する関数を定義する
const sayGoodEvening = () => {
    console.log('こんばんは！');
    console.log('今日も１日お疲れさまでした。');
}

// 朝の挨拶を出力する関数を呼び出す
sayGoodMorning();

// 夜の挨拶を出力する関数を呼び出す
sayGoodEvening();

// 夜の挨拶を3回繰り返す
for (let i = 0; i <= 2; i++) {
    sayGoodEvening();
}