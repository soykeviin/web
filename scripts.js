document.addEventListener('DOMContentLoaded', () => {
    const videos = document.querySelectorAll('.video-container video');
    const photoViewer = document.getElementById('photo-viewer');
    const photoViewerImg = document.getElementById('photo-viewer-img');
    const closeBtn = document.querySelector('.photo-viewer .close');
    const thumbnails = document.querySelectorAll('.thumbnail');
    const toggleMuteVideos = document.querySelectorAll('.video.toggle-mute');

    // Intersection Observer para videos
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const video = entry.target;
            if (entry.isIntersecting) {
                video.play();
            } else {
                video.pause();
            }
        });
    }, { threshold: 0.5 });

    videos.forEach(video => {
        observer.observe(video);
    });

    // Manejo de mute/unmute solo para videos específicos
    toggleMuteVideos.forEach(video => {
        video.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            
            // Alternar estado de mute
            video.muted = !video.muted;
            
            // Alternar clase para cambiar el ícono
            if (video.muted) {
                video.classList.remove('unmuted');
            } else {
                video.classList.add('unmuted');
            }
        });
    });

    // Manejo de imágenes
    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', () => {
            document.body.classList.add('no-scroll');
            photoViewerImg.src = thumbnail.src;
            photoViewer.style.display = 'block';
        });
    });

    // Cerrar visor de foto
    closeBtn.addEventListener('click', () => {
        document.body.classList.remove('no-scroll');
        photoViewer.style.display = 'none';
    });

    // Cerrar al hacer clic fuera de la imagen
    photoViewer.addEventListener('click', (e) => {
        if (e.target === photoViewer) {
            document.body.classList.remove('no-scroll');
            photoViewer.style.display = 'none';
        }
    });

    // Evitar que el clic en la imagen cierre el visor
    photoViewerImg.addEventListener('click', (e) => {
        e.stopPropagation();
    });
});
