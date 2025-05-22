let product_img = $("#product-img");
let img_btn = $(".ctrl");

img_btn.eq(0).click(function () {
    product_img.attr("src", "Images/img2.jpg");
    img_btn.removeClass("active");
    $(this).addClass("active");
});

img_btn.eq(1).click(function () {
    product_img.attr("src", "Images/img1.jpg");
    img_btn.removeClass("active");
    $(this).addClass("active");
});

img_btn.eq(2).click(function () {
    product_img.attr("src", "Images/full.jpg");
    img_btn.removeClass("active");
    $(this).addClass("active");
});
