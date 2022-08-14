const bodyStyle = document.body.style;
const images = ["0.jpeg", "1.jpeg", "2.jpeg"];
const chosenImage = images[Math.floor(Math.random() * images.length)];

bodyStyle.backgroundImage = `url(img/${chosenImage})`;
bodyStyle.backgroundRepeat = "no-repeat";
console.log(`url(img/${chosenImage})`);

// const bgImage = document.createElement("img");

// bgImage.src = `img/${chosenImage}`;

// // document.body.prepend(bgImage);
// document.body.append(bgImage);