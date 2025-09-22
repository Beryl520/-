let yesButton = document.getElementById("yes");
let noButton = document.getElementById("no");
let questionText = document.getElementById("question");
let mainImage = document.getElementById("mainImage");

let clickCount = 0;

const noTexts = [
    "带你一起晒太阳~",
    "糖果分你一半呀",
    "带你吃炸鸡汉堡ovo",
    "让你撸撸我~",
    "我这么可爱你也忍心拒绝吗qaq"
];

noButton.addEventListener("click", function() {
    clickCount++;
    let yesSize = 1 + (clickCount * 1.2);
    yesButton.style.transform = `scale(${yesSize})`;
    let noOffset = clickCount * 50;
    noButton.style.transform = `translateX(${noOffset}px)`;
    let moveUp = clickCount * 25;
    mainImage.style.transform = `translateY(-${moveUp}px)`;
    questionText.style.transform = `translateY(-${moveUp}px)`;

    if (clickCount <= 5) {
        noButton.innerText = noTexts[clickCount - 1];
    }

    if (clickCount === 1) mainImage.src = "2.png";
    if (clickCount === 2) mainImage.src = "3.png";
    if (clickCount === 3) mainImage.src = "4.png";
    if (clickCount === 4) mainImage.src = "5.png";
    if (clickCount >= 5) mainImage.src = "6.png";
});

yesButton.addEventListener("click", function() {
    document.body.innerHTML = `
        <div class="yes-screen">
            <h1 class="yes-text">能和你成为朋友真是太棒啦！(≧∇≦)ﾉ ！</h1>
            <img src="7.png" alt="拥抱" class="yes-image">
        </div>
    `;
    document.body.style.overflow = "hidden";
});
