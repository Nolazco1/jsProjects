function show_slides() {
    let images = ["images/image1.jpg", "images/image2.jpg", "images/image3.jpg", "images/image4.jpg", "images/image5.jpg", "images/image6.jpg", "images/image7.jpg", "images/image8.jpg"],
        captions = ["Minimal Abstract Art", "Colorful Abstract Art", "Pink Desk Setup", "Apple Watch", "Developer Desk", "Making Music", "Office Space", "Cozy Kitchen"],
        dispimage = document.getElementById("image"),
        dispcaption = document.getElementById("caption");
    let rand_int = Math.floor(Math.random() * 8);
    dispimage.src = images[rand_int];
    dispcaption.innerHTML = captions[rand_int];
}
setInterval(show_slides, 2000);