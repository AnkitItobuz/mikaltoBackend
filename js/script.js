const leftScroll = document.querySelectorAll(".left-scroll");
const rightScroll = document.querySelectorAll(".right-scroll");
const slides = document.querySelectorAll(".slides");
const heroSection = document.querySelector(".hero-section");
const houseImage = document.querySelector(".house-image");
const poolImage = document.querySelector(".pool-image");
const house2Image = document.querySelector(".house2-image");

const standardRoom = document.querySelector(".standard-room");
const standardPrice = document.querySelector(".standard-room-price");
const standardBed = document.querySelector(".standard-bed");
const standardCapacity = document.querySelector(".standard-capacity");
const standardSize = document.querySelector(".standard-size");
const standardView = document.querySelector(".standard-view");

const luxaryRoom = document.querySelector(".luxary-room");
const luxaryPrice = document.querySelector(".luxary-room-price");
const luxaryBed = document.querySelector(".luxary-bed");
const luxaryCapacity = document.querySelector(".luxary-capacity");
const luxarySize = document.querySelector(".luxary-size");
const luxaryView = document.querySelector(".luxary-view");

const ordinaryRoom = document.querySelector(".ordinary-room");
const ordinaryPrice = document.querySelector(".ordinary-room-price");
const ordinaryBed = document.querySelector(".ordinary-bed");
const ordinaryCapacity = document.querySelector(".ordinary-capacity");
const ordinarySize = document.querySelector(".ordinary-size");
const ordinaryView = document.querySelector(".ordinary-view");

const swimmingPoll = document.querySelector(".swimming-pool-image");
const bambooHouse = document.querySelector(".home-image");

const massageImage = document.querySelectorAll(".massage-image");
const windowImage = document.querySelectorAll(".window-view");
const soapsImage = document.querySelectorAll(".soaps-image");
const wildImage = document.querySelectorAll(".wild-image");

const helloSection = document.querySelector(".hello-section");

const firstCustomerImage = document.querySelector(".first-customer-image");
const firstCustomerName = document.querySelector(".first-customer-name");
const firstCustomerdate = document.querySelector(".first-rating-date");
const firstCustomerHead = document.querySelector(".first-customer-head");
const firstCustomerReview = document.querySelector(".first-customer-review");

const secondCustomerImage = document.querySelector(".second-customer-image");
const secondCustomerName = document.querySelector(".second-customer-name");
const secondCustomerDate = document.querySelector(".second-rating-date");
const secondCustomerHead = document.querySelector(".second-customer-head");
const secondCustomerReview = document.querySelector(".second-customer-review");

const thirdCustomerImage = document.querySelector(".third-customer-image");
const thirdCustomerName = document.querySelector(".third-customer-name");
const thirdCustomerDate = document.querySelector(".third-rating-date");
const thirdCustomerHead = document.querySelector(".third-customer-head");
const thirdCustomerReview = document.querySelector(".third-customer-review");

const bridgeImage = document.querySelector(".bridge");
const catImage = document.querySelector(".cat-image");
const dogImage = document.querySelector(".dog-image");

// alert()
getImages();

async function getImages(){
    try{
        let data = await fetch('http://localhost:9400/').then((data) => data.json());
        heroSection.style.backgroundImage = `url(${data.heroSection.image})`;

        houseImage.src = data.welcomeSection.houseImage;
        poolImage.src = data.welcomeSection.poolImage;
        house2Image.src = data.welcomeSection.house2Image;

        standardRoom.src = data.roomsSection.standardRoom.img;
        standardPrice.innerHTML = data.roomsSection.standardRoom.price;
        standardBed.innerHTML = data.roomsSection.standardRoom.bed;
        standardCapacity.innerHTML = data.roomsSection.standardRoom.capacity;
        standardSize.innerHTML = data.roomsSection.standardRoom.roomSize;
        standardView.innerHTML = data.roomsSection.standardRoom.view;

        luxaryRoom.src = data.roomsSection.luxaryRoom.img;
        luxaryPrice.innerHTML = data.roomsSection.luxaryRoom.price;
        luxaryBed.innerHTML = data.roomsSection.luxaryRoom.bed;
        luxaryCapacity.innerHTML = data.roomsSection.luxaryRoom.capacity;
        luxarySize.innerHTML = data.roomsSection.luxaryRoom.roomSize;
        luxaryView.innerHTML = data.roomsSection.luxaryRoom.view;

      
        ordinaryRoom.src = data.roomsSection.ordinaryRoom.img;
        ordinaryPrice.innerHTML = data.roomsSection.ordinaryRoom.price;
        ordinaryBed.innerHTML = data.roomsSection.ordinaryRoom.bed;
        ordinaryCapacity.innerHTML = data.roomsSection.ordinaryRoom.capacity;
        ordinarySize.innerHTML = data.roomsSection.ordinaryRoom.roomSize;
        ordinaryView.innerHTML = data.roomsSection.ordinaryRoom.view;

        swimmingPoll.src = data.activitiesSection.swimmingPool;
        bambooHouse.src = data.activitiesSection.house;

        massageImage.forEach(element => {
          element.src = data.experienceSection.massageImage;
        });

        windowImage.forEach(element=>{
          element.src = data.experienceSection.windowView;
        })

        soapsImage.forEach(element=>{
          element.src = data.experienceSection.soapsImage;
        })

        wildImage.forEach(element=>{
          element.src = data.experienceSection.wildImage;
        })

        helloSection.style.backgroundImage = `url(${data.helloSection.backgroundImage})`;

        firstCustomerImage.src = data.ratingSection.firstCustomer.customerImage;
        firstCustomerName.innerHTML = data.ratingSection.firstCustomer.customerName;
        firstCustomerdate.innerHTML = data.ratingSection.firstCustomer.dateOfReview;
        firstCustomerHead.innerHTML = data.ratingSection.firstCustomer.reviewHead;
        firstCustomerReview.innerHTML = data.ratingSection.firstCustomer.reviewDetails;

        secondCustomerImage.src = data.ratingSection.secondCustomer.customerImage;
        secondCustomerName.innerHTML = data.ratingSection.secondCustomer.customerName;
        secondCustomerDate.innerHTML = data.ratingSection.secondCustomer.dateOfReview;
        secondCustomerHead.innerHTML = data.ratingSection.secondCustomer.reviewHead;
        secondCustomerReview.innerHTML = data.ratingSection.secondCustomer.reviewDetails;

        thirdCustomerImage.src = data.ratingSection.thirdCustomer.customerImage;
        thirdCustomerName.innerHTML = data.ratingSection.thirdCustomer.customerName;
        thirdCustomerDate.innerHTML = data.ratingSection.thirdCustomer.dateOfReview;
        thirdCustomerHead.innerHTML = data.ratingSection.thirdCustomer.reviewHead;
        thirdCustomerReview.innerHTML = data.ratingSection.thirdCustomer.reviewDetails;

        bridgeImage.src = data.joinUsSection.bridgeImage;
        catImage.src = data.joinUsSection.catImage;
        dogImage.src = data.joinUsSection.forestImage;
    }
    catch {
        console.log('error');
    }
}

let start = 0;
let end = slides.length - 1;
let mid = Math.round((start + end - start) / 2);

slides[mid].classList.remove("slides");

leftScroll.forEach((element) => {
  element.addEventListener("click", () => {
    if (mid > start) {
      slides[mid].classList.add("slides");

      mid = mid - 1;

      slides[mid].classList.remove("slides");
      console.log(mid);
    }
     else if (mid === start) {
      slides[mid].classList.add("slides");
      mid = end;
      slides[mid].classList.remove("slides");
    } 
    else {
      return;
    }
  });
});

console.log(slides);

rightScroll.forEach((element) => {
  element.addEventListener("click", () => {
    console.log(mid);
    if (mid < end) {
      slides[mid].classList.add("slides");
      mid = mid + 1;
      slides[mid].classList.remove("slides");
      console.log(mid);
    } 

    else if (mid === end) {
      slides[mid].classList.add("slides");
      mid = start;
      slides[mid].classList.remove("slides");
    } 

    else {
      return;
    }
  });
});
