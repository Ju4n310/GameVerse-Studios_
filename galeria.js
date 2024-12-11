const gallery = document.getElementById('gallery');
const images = ['img1.jpg', 'img2.jpg', 'img3.jpg'];
images.forEach(img => {
    const imageElement = document.createElement('img');
    imageElement.src = `img/galeria/${img}`;
    gallery.appendChild(imageElement);
});
