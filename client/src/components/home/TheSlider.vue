<template>
  <div class="slideshow-container">
    <div class="mySlides fade">
      <div class="numbertext">1 / 6</div>
      <img src="../../assets/slider/Banner1.jpg" style="width: 100%" />
    </div>

    <div class="mySlides fade">
      <div class="numbertext">2 / 6</div>
      <img src="../../assets/slider/Banner2.jpg" style="width: 100%" />
    </div>

    <div class="mySlides fade">
      <div class="numbertext">3 / 6</div>
      <img src="../../assets/slider/Banner3.jpg" style="width: 100%" />
    </div>

    <div class="mySlides fade">
      <div class="numbertext">4 / 6</div>
      <img src="../../assets/slider/Banner4.jpg" style="width: 100%" />
    </div>

    <div class="mySlides fade">
      <div class="numbertext">5 / 6</div>
      <img src="../../assets/slider/Banner5.jpg" style="width: 100%" />
    </div>

    <div class="mySlides fade">
      <div class="numbertext">6 / 6</div>
      <img src="../../assets/slider/Banner6.jpg" style="width: 100%" />
    </div>

    <a class="prev" @click="plusSlides(-1)">❮</a>
    <a class="next" @click="plusSlides(1)">❯</a>
  </div>
  <br />

  <div style="text-align: center">
    <span
      v-for="(_, index) in sliderItems"
      :key="index"
      class="dot"
      @click="currentSlide(index + 1)"
    ></span>
  </div>
</template>
<script>
export default {
  data() {
    return {
      slideIndex: 1,
      interval: null,
      sliderItems: [
        { img: "Banner1.jpg" },
        { img: "Banner2.jpg" },
        { img: "Banner3.jpg" },
        { img: "Banner4.jpg" },
        { img: "Banner5.jpg" },
        { img: "Banner6.jpg" },
      ],
    };
  },
  mounted() {
    this.showSlides(this.slideIndex);
    this.interval = window.setInterval(this.continueChangeSlide, 4500);
  },
  beforeUnmount() {
    window.clearInterval(this.interval);
  },
  methods: {
    continueChangeSlide() {
      this.slideIndex++;
      this.slideIndex %= 6;
      this.showSlides(this.slideIndex);
    },
    plusSlides(n) {
      this.showSlides((this.slideIndex += n));
    },
    currentSlide(n) {
      this.showSlides((this.slideIndex = n));
    },
    showSlides(n) {
      let i;
      let slides = document.getElementsByClassName("mySlides");
      let dots = document.getElementsByClassName("dot");
      if (n > slides.length) {
        this.slideIndex = 1;
      }
      if (n < 1) {
        this.slideIndex = slides.length;
      }
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
      }
      slides[this.slideIndex - 1].style.display = "block";
      dots[this.slideIndex - 1].className += " active";
    },
  },
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}
body {
  font-family: Verdana, sans-serif;
  margin: 0;
}
.mySlides {
  display: none;
}
img {
  vertical-align: middle;
}

/* Slideshow container */
.slideshow-container {
  /*max-width: 1000px;*/
  position: relative;
  margin: auto;
}

/* Next & previous buttons */
.prev,
.next {
  cursor: pointer;
  position: absolute;
  top: 50%;
  width: auto;
  padding: 16px;
  margin-top: -22px;
  color: white;
  font-weight: bold;
  font-size: 18px;
  transition: 0.6s ease;
  border-radius: 0 3px 3px 0;
  user-select: none;
}

/* Position the "next button" to the right */
.next {
  right: 0;
  border-radius: 3px 0 0 3px;
}

/* On hover, add a black background color with a little bit see-through */
.prev:hover,
.next:hover {
  background-color: rgba(0, 0, 0, 0.8);
}

/* Caption text */
.text {
  color: #f2f2f2;
  font-size: 15px;
  padding: 8px 12px;
  position: absolute;
  bottom: 8px;
  width: 100%;
  text-align: center;
}

/* Number text (1/3 etc) */
.numbertext {
  color: #f2f2f2;
  font-size: 12px;
  padding: 8px 12px;
  position: absolute;
  top: 0;
}

/* The dots/bullets/indicators */
.dot {
  cursor: pointer;
  height: 15px;
  width: 15px;
  margin: 0 2px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
  transition: background-color 0.6s ease;
}

.active,
.dot:hover {
  background-color: #717171;
}

/* Fading animation */
.fade {
  animation-name: fade;
  animation-duration: 1.5s;
}

@keyframes fade {
  from {
    opacity: 0.4;
  }
  to {
    opacity: 1;
  }
}

/* On smaller screens, decrease text size */
@media only screen and (max-width: 300px) {
  .prev,
  .next,
  .text {
    font-size: 11px;
  }
}
</style>
