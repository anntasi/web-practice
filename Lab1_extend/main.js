// window.onload = function(){
//     // document.write("Hello JS");
// }
let imageUrlArray = [
    "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/collage-1636443427.jpg?crop=0.484xw:0.967xh;0.507xw,0.00977xh&resize=640:*",
    "https://fairylolita.com/wp-content/uploads/2020/10/DSCF8136.jpg",
    "https://linky.tw/wp-content/uploads/2018/06/57eca2287749c_1024-1000x600.jpg",
    "https://cdn2.ettoday.net/images/6295/6295532.jpg"
]

$(function () {
    let old;
    $("input").on("click", function () {
        // alert("Hiiiii");

        var numberOfListItem = $("li").length;
        // 3
        // 0 ~ 1 => 0 ~ 3
        var randomChildNumber = Math.floor(Math.random() * numberOfListItem);


        while (old == randomChildNumber) {
            //console.log(randomChildNumber);
            randomChildNumber = Math.floor(Math.random() * numberOfListItem);
            console.log("randomChildNumber: " + randomChildNumber);
        }
        console.log("old: " + old);
        old = randomChildNumber;
        $("h1").text($("li").eq(randomChildNumber).text());
        $("img").attr("src", imageUrlArray[randomChildNumber]);
        // Console可以看到結果
    });
});
