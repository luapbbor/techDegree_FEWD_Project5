
document.querySelector("#search").addEventListener("keyup", function () {
    let searchInput = "";
    let searchInputLower = "";
    let caption = "";
    let galleryLength = 0;
    let noImages;
    searchInput = document.querySelector("#search");
    searchInputLower = searchInput.value.toLowerCase();
    console.log(searchInputLower);
    
    // store each gallery item
    const galleryItems = document.querySelectorAll(".gallery a");
    for (let i = 0; i < galleryItems.length; i++){
    //  get the value from the data-title for each iteration throught he loop
     const caption = galleryItems[i].getAttribute("data-title").toLowerCase();
        if (caption.includes(searchInputLower)) {
            galleryItems[i].style.display = "block";

        } else {
            galleryItems[i].style.display = "none";
        }
        }
});

