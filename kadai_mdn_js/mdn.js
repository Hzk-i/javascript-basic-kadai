// 本日の日付を取得して新しいオブジェクトに定義する
const today = new Date();

// 定数month, day, year に値を代入する
const [month, day, year] = [
    today.getMonth() + 1,
    today.getDate(),
    today.getFullYear(),
];

// 本日の日付の値を出力する
console.log(year + '年' + month + '月' + day + '日');