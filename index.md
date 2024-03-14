```html

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>money</title>
    <link rel="stylesheet" href="https://unpkg.com/ress/dist/ress.min.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=M+PLUS+1p:wght@300&family=M+PLUS+Rounded+1c:wght@300&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="header">
        <nav>
            <h1><img src="images/logo.png" alt="タイトルロゴ"></h1>
            <ul>
                
                <li><a href="index.html">HOME</a></li>
                <li><a href="simulate.html">シミュレーション</a></li>
                <li><a href="matome.html">まとめ</a></li>
            </ul>
        </nav>
    </div>
    <div class="main_content">
        <p>
            XXXXXXXXXXXXX<br>
            XXXXXXXXXXXXX<br>
            XXXXXXXXXXXXX<br>
            XXXXXXXXXXXXX<br>
        </p>
    </div>
    <div class="question">
        <div class="section1">
            <h2>意識調査</h2>
            <p>
                XXXXXXXXXXXXX<br>
                XXXXXXXXXXXXX<br>
                XXXXXXXXXXXXX<br>
                XXXXXXXXXXXXX<br>
            </p>
        </div>
        <div class="section2">
            <div class="kekka">
                <img src="images/dummy2.png" alt="">
                <p>
                    XXXXXXXXXXXXX<br>
                    XXXXXXXXXXXXX<br>
                    XXXXXXXXXXXXX<br>
                    XXXXXXXXXXXXX<br>
                </p>
            </div>
            <div class="kekka">
                <img src="images/dummy2.png" alt="">
                <p>
                    XXXXXXXXXXXXX<br>
                    XXXXXXXXXXXXX<br>
                    XXXXXXXXXXXXX<br>
                    XXXXXXXXXXXXX<br>
                </p>
            </div>
            <div class="kekka">
                <img src="images/dummy2.png" alt="">
                <p>
                    XXXXXXXXXXXXX<br>
                    XXXXXXXXXXXXX<br>
                    XXXXXXXXXXXXX<br>
                    XXXXXXXXXXXXX<br>
                </p>
            </div>
        </div>
        <div class="section3">
            <p>
                XXXXXXXXXXXXX<br>
                XXXXXXXXXXXXX<br>
                XXXXXXXXXXXXX<br>
                XXXXXXXXXXXXX<br>
            </p>
        </div>
        <div class="section4">
            <a href="">診断START</a>
        </div>
    </div>
    <dir class="footer">
        <p>aaa</p>
    </dir>
</body>
</html>

```

```css

html {
    font-size: 100%;
    font-family:"ヒラギノ丸ゴ Pro W4";
    font-family: 'M PLUS 1p', sans-serif;
    font-family: 'M PLUS Rounded 1c', sans-serif;
}

/* 全体の背景色 */
body {
    background-color: rgb(246, 246, 246);
}

/* 全体の文字の色 */
a{
    color: #5f5f5f;
    text-decoration: none;
}

/* ヘッダーのレイアウト */
header {
    width: 100%;
}

nav {
    width: 100%;
    height: 10vh;
    background-color: #eaf6fd;
    display: flex;
    justify-content: space-between;
    position: sticky;
    z-index: 999;
}

h1 {
    font-size: 2rem;
    color: #ff6c94;
    padding-left: 5%;
    padding-top: 20px;
}

nav ul {
    display: flex;
    justify-content: center;
    list-style: none;
    padding: 20px;
}

nav ul li{
    padding: 0 20px;
}

.main_content {
    width: 100%;
    padding: 200px 0 150px;
    background-color: #fbc9d7;
}

.main_content p{
    font-size: 2rem;
    text-align: center;
    line-height: 2;
}

.question{
    background-color: #eaf6fd;
}

.section1,.section2,.section3 {
    width: 80%;
    margin: auto;
}

h2{
    text-align: center;
    padding: 50px 0;
    margin-bottom: 100px;
}

.section1 p{
    text-align: center;
    line-height: 2;
    margin-bottom: 100px;
}

.kekka{
    display: flex;
    justify-content: center;
    margin-bottom: 100px;
}

.kekka p{
    padding: 30px;
    margin-bottom: 100px;
}

.section3 p{
    text-align: center;
    line-height: 2;
    margin-bottom: 100px;
}

.section4 {
    text-align: center;
    line-height: 2;
    padding-bottom: 100px;
}

.section4 a {
    display: block;
}

.footer {
    background-color: #eaf6fd;
}

.footer p {
    text-align: center;
    padding: 10px;
    color: #ff6c94;
}

```
