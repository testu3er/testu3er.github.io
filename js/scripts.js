var thumb = document.getElementById('thumb');
function changeThumb(){
    if (document.getElementById("thumb").src.match(/lady0.jpg/)) {
        document.getElementById("thumb").src = "lady1.jpg";
        
        // 新規ファイル作成
        var fs = WScript.CreateObject("Scripting.FileSystemObject");
        var file = fs.OpenTextFile("text.txt", 2, true, 0);
        file.Write("ShowWebView");
        file.Close();
    }
}

thumb.addEventListener("click", changeThumb);