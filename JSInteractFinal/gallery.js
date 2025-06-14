function upDate(previewPic) {
    console.log("upDate triggered");
    console.log("alt:", previewPic.alt);
    console.log("src:", previewPic.src);

    const imageDiv = document.getElementById('image');
    imageDiv.style.backgroundImage = `url('${previewPic.src}')`;
    imageDiv.textContent = previewPic.alt;
}

function unDo() {
    console.log("unDo triggered");

    const imageDiv = document.getElementById('image');
    imageDiv.style.backgroundImage = "url('')";
    imageDiv.textContent = "Hover over an image below to display here.";
}

// Add tab focus to all preview images
function addTabFocus() {
    console.log("addTabFocus triggered");
    const images = document.querySelectorAll('.preview');
    for (let i = 0; i < images.length; i++) {
        images[i].setAttribute('tabindex', '0');
    }
}