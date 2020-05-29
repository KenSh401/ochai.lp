// こちらではonclickイベント発生時に対象の説明テキストを表示させる処理を行う
function displayChange (indexNo) {
    // 表示処理のターゲットとなる説明テキスト要素を取得。配列として返ってくる。
    var targetElements = this.document.getElementsByClassName("timeline-sentense");

    // 複数要素の配列から引数をインデックスにしてターゲットを取得する
    var target = targetElements[indexNo];

    // // classListのtoggleでクラス属性値の切り替えを行う
    target.classList.toggle("show");

    // // 引数のindexNoを配列のインデックスとして使用し、表示設定を変更する。
    // if (target.className == "timeline-sentense") {
    //     // 既に対象エリアが表示されている状態でタイトル押下の場合、非表示
    //     target.className = "timeline-sentense-show";
    // }else if (target.className == "timeline-sentense-show") {
    //     // 非表示の状態でタイトル押下の場合、表示
    //     target.className = "timeline-sentense";
    // }
}

//こちらではquoteエリアクリック時にモーダルウインドウ を表示させる処理を行う
function showModal(indexNo) {
    // ターゲットのモーダルウインドウ の要素を取得する
    var targetElements = this.document.getElementsByClassName("quote-modal");
    var target = targetElements[indexNo];

    // モーダルウインドウ を表示させる
    target.classList.toggle("is-show");
}

// こちらではモーダルウインドウ の閉じるボタンの押下時にモーダルウインドウ を閉じる処理を行う
function closeModal() {
    // ターゲットのモーダルウインドウ の要素を取得する
    var targetElements = this.document.getElementsByClassName("quote-modal is-show");
    var target = targetElements[0];

    // モーダルウインドウ を表示させる
    target.classList.toggle("is-show");
}