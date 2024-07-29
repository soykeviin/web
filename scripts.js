document.addEventListener('DOMContentLoaded', () => {
    const videos = document.querySelectorAll('.video');

    videos.forEach(video => {
        video.addEventListener('click', () => {
            // Si el video está sonando, siléncialo
            if (!video.muted) {
                video.muted = true;
            } else {
                // Si el video está en silencio, silencia todos los videos primero
                videos.forEach(v => v.muted = true);
                // Luego activa el sonido solo en el video clicado
                video.muted = false;
            }
        });
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const viewer = document.getElementById('photo-viewer');
    const viewerImg = document.getElementById('photo-viewer-img');
    const closeBtn = document.querySelector('.photo-viewer .close');
    const thumbnails = document.querySelectorAll('.thumbnail');

    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', () => {
            viewerImg.src = thumbnail.src;
            viewer.style.display = 'block';
        });
    });

    closeBtn.addEventListener('click', () => {
        viewer.style.display = 'none';
    });

    viewer.addEventListener('click', (event) => {
        if (event.target !== viewerImg && event.target !== closeBtn) {
            viewer.style.display = 'none';
        }
    });
});
