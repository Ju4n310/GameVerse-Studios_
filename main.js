fetch('data/noticias.json')
    .then(response => response.json())
    .then(data => {
        const container = document.getElementById('news-container');
        data.forEach(noticia => {
            const noticiaDiv = document.createElement('div');
            noticiaDiv.className = 'noticia';
            noticiaDiv.innerHTML = `<h3>${noticia.titulo}</h3><p>${noticia.contenido}</p>`;
            container.appendChild(noticiaDiv);
        });
    });
