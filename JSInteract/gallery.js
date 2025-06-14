function upDate(previewPic) {
    // Check if event is triggering
    console.log("upDate triggered");
    // Log alt and src
    console.log("alt:", previewPic.alt);
    console.log("src:", previewPic.src);

    // Get the #image div
    const imageDiv = document.getElementById('image');
    // Change background image
    imageDiv.style.backgroundImage = `url('${previewPic.src}')`;
    // Change text to alt
    imageDiv.textContent = previewPic.alt;
}

function unDo() {
    // Check if event is triggering
    console.log("unDo triggered");

    // Get the #image div
    const imageDiv = document.getElementById('image');
    // Reset background image
    imageDiv.style.backgroundImage = "url('')";
    // Reset text
    imageDiv.textContent = "Hover over an image below to display here.";
}