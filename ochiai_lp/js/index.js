// こちらではonclickイベント発生時に対象の説明テキストを表示させる処理を行う
function displayChange (indexNo) {
    // 表示処理のターゲットとなる説明テキスト要素を取得。配列として返ってくる。
    var targetElements = this.document.getElementsByClassName("timeline-sentense");
    // 引数のindexNoを配列のインデックスとして使用し、表示設定を変更する。
    targetElement[indexNo].style.display = "block";
}


// window.onload = function () {
    // // ページ読み込み後に年表コンテンツの説明テキストを非表示にする処理を行う
    // var targetElement = this.document.getElementsByClassName("timeline-sentense");
// 
//     // 取得した説明テキスト要素は複数あるので、一つずつ要素を非表示させるループ
//     // ここで非表示にした説明テキストを、年表のタイトル押下時に表示させる
//     for (var i = 0; i < targetElement.length; i++) {
//         targetElement[i].style.display = "none";
//     }
// };