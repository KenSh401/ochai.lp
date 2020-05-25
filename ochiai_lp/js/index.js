// こちらではonclickイベント発生時に対象の説明テキストを表示させる処理を行う
function displayChange (indexNo) {
    // 表示処理のターゲットとなる説明テキスト要素を取得。配列として返ってくる。
    var targetElements = this.document.getElementsByClassName("timeline-sentense");

    // 複数要素の配列から引数をインデックスにしてターゲットを取得する
    var target = targetElement[indexNo];

    // 引数のindexNoを配列のインデックスとして使用し、表示設定を変更する。
    if (target.style.display == "block") {
        // 既に対象エリアが表示されている状態でタイトル押下の場合、非表示
        target.style.display = "none"; 
    }else if (target.style.display == "none") {
        // 非表示の状態でタイトル押下の場合、表示
        target.style.display = "block";
    }
}
