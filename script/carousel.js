class ImageSlider {
    constructor(sliderId) {
        this.sliderId = sliderId;
        this.currentIndex = 0;

        this.slider = document.getElementById(sliderId);
        this.track = this.slider.querySelector('.slider-track');
        this.items = this.slider.querySelectorAll('.slider-item');
        this.totalItems = this.items.length;

        this.startX = 0;
        this.currentTranslate = 0;
        this.previousTranslate = 0;
        this.isDragging = false;

        this.updateVisibleItems();
        window.addEventListener('resize', () => this.updateVisibleItems());

        this.track.addEventListener('mousedown', this.startDrag.bind(this));
        this.track.addEventListener('touchstart', this.startDrag.bind(this), { passive: true });
        this.track.addEventListener('mousemove', this.drag.bind(this));
        this.track.addEventListener('touchmove', this.drag.bind(this), { passive: true });
        this.track.addEventListener('mouseup', this.endDrag.bind(this));
        this.track.addEventListener('touchend', this.endDrag.bind(this));
        this.track.addEventListener('mouseleave', this.endDrag.bind(this));

        this.showSlide(this.currentIndex);
    }

    updateVisibleItems() {
        if (window.innerWidth <= 480) {
            this.itemsToShow = 1;
        } else if (window.innerWidth <= 768) {
            this.itemsToShow = 2;
        } else {
            this.itemsToShow = 3;
        }
        this.maxIndex = this.totalItems - this.itemsToShow;
        this.showSlide(this.currentIndex);
    }

    showSlide(index) {
        if (index > this.maxIndex) {
            this.currentIndex = 0;
        } else if (index < 0) {
            this.currentIndex = this.maxIndex;
        } else {
            this.currentIndex = index;
        }

        const newTransformValue = -this.currentIndex * (100 / this.itemsToShow);
        this.track.style.transform = `translateX(${newTransformValue}%)`;
    }

    startDrag(event) {
        this.isDragging = true;
        this.startX = this.getPositionX(event);
        this.track.style.transition = 'none';
    }

    drag(event) {
        if (!this.isDragging) return;
        const currentX = this.getPositionX(event);
        this.currentTranslate = this.previousTranslate + currentX - this.startX;
        this.track.style.transform = `translateX(${this.currentTranslate}px)`;
    }

    endDrag() {
        if (!this.isDragging) return;
        this.isDragging = false;

        const movedBy = this.currentTranslate - this.previousTranslate;
        const threshold = 50;

        if (movedBy < -threshold) {
            this.showSlide(this.currentIndex + 1);
        } else if (movedBy > threshold) {
            this.showSlide(this.currentIndex - 1);
        } else {
            this.showSlide(this.currentIndex);
        }

        this.previousTranslate = -this.currentIndex * this.track.offsetWidth / this.itemsToShow;
        this.track.style.transition = 'transform 0.5s ease-in-out';
    }

    getPositionX(event) {
        return event.type.includes('mouse') ? event.pageX : event.touches[0].clientX;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const imageSlider = new ImageSlider('imageCarousel');
});
