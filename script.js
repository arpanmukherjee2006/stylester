

const testimonialsContainer = document.querySelector(".testimonials-container");
const testimonial = document.querySelector(".testimonial");
const userImage = document.querySelector(".user-image");
const username = document.querySelector(".username");
const role = document.querySelector(".role");

const testimonials = [
  {
    name: "Miyah Myles",
    position: "Marketing",
    photo:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=707b9c33066bf8808c934c8ab394dff6",
    text:
      "I've worked with literally hundreds of HTML/CSS developers and I have to say the top spot goes to this guy. This guy is an amazing developer. He stresses on good, clean code and pays heed to the details. I love developers who respect each and every aspect of a throughly thought out design and do their best to put it in code. He goes over and beyond and transforms ART into PIXELS - without a glitch, every time."
  },
  {
    name: "June Cha",
    position: "Software Engineer",
    photo: "https://randomuser.me/api/portraits/women/44.jpg",
    text:
      "This guy is an amazing frontend developer that delivered the task exactly how we need it, do your self a favor and hire him, you will not be disappointed by the work delivered. He will go the extra mile to make sure that you are happy with your project. I will surely work again with him!"
  },
  {
    name: "Iida Niskanen",
    position: "Data Entry",
    photo: "https://randomuser.me/api/portraits/women/68.jpg",
    text:
      "This guy is a hard worker. Communication was also very good with him and he was very responsive all the time, something not easy to find in many freelancers. We'll definitely repeat with him."
  },
  {
    name: "Renee Sims",
    position: "Receptionist",
    photo: "https://randomuser.me/api/portraits/women/65.jpg",
    text:
      "This guy does everything he can to get the job done and done right. This is the second time I've hired him, and I'll hire him again in the future."
  },
  {
    name: "Jonathan Nunfiez",
    position: "Graphic Designer",
    photo: "https://randomuser.me/api/portraits/men/43.jpg",
    text:
      "I had my concerns that due to a tight deadline this project can't be done. But this guy proved me wrong not only he delivered an outstanding work but he managed to deliver 1 day prior to the deadline. And when I asked for some revisions he made them in MINUTES. I'm looking forward to work with him again and I totally recommend him. Thanks again!"
  },
  {
    name: "Sasha Ho",
    position: "Accountant",
    photo:
      "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?h=350&auto=compress&cs=tinysrgb",
    text:
      "This guy is a top notch designer and front end developer. He communicates well, works fast and produces quality work. We have been lucky to work with him!"
  },
  {
    name: "Veeti Seppanen",
    position: "Director",
    photo: "https://randomuser.me/api/portraits/men/97.jpg",
    text:
      "This guy is a young and talented IT professional, proactive and responsible, with a strong work ethic. He is very strong in PSD2HTML conversions and HTML/CSS technology. He is a quick learner, eager to learn new technologies. He is focused and has the good dynamics to achieve due dates and outstanding results."
  }
];

let idx = 1;

function updateTestimonial() {
  const { name, position, photo, text } = testimonials[idx];

  testimonial.innerHTML = text;
  userImage.src = photo;
  username.innerHTML = name;
  role.innerHTML = position;

  idx++;

  if (idx > testimonials.length - 1) {
    idx = 0;
  }
}


let mobileWidth = 640;
let tabWidth = 1080;
let  deskWidth = 1220;
let pWidth, pHeight, screenWidth, screenHeight;
let index = document.getElementsByClassName("quote-column");
let pTransition = 3;
let activeShow = "col-active";
const arrowIcon = "<div class='arrow left-arrow ' onclick='arrowControl(-1)'><i class='arrow-icon'><i></div><div class='arrow right-arrow' onclick='arrowControl(1)'><i class='arrow-icon'><i></div>"
const ArrowParent = document.createElement("div");
ArrowParent.classList.add("arrows-wrap");
ArrowParent.innerHTML = arrowIcon;
let arrowEnabled = false;
let activeQuoteHeight = 400;

getElem();
function getElem() {
    let hAndW;
    let targetElem;
    index[0].parentElement.style.minHeight = (index.length / 2) * 140 + "px";// assign row element height

    for (let i = 0; i < index.length; i++) {
        targetElem = index[i];
        pWidth = targetElem.parentElement.offsetWidth;
        pHeight = targetElem.parentElement.offsetHeight;

        //When viewing on desktop
        if (screenWidth > tabWidth) {
            hAndW = randomPos(60, (screenHeight / (index.length / 1.5))) + 'px';//Lets make the height and width variables randomly

            // lets devide all the elements by less then 2 and positioning them left and right not in the middle;
            //this is for left side
            if (i < index.length / 1.9) {
                targetElem.style.left = randomPos(100, targetElem.parentElement.offsetWidth / 3 - 100) + 'px'; // X position left
                targetElem.style.top = (targetElem.parentElement.offsetHeight / (index.length / 2)) * (i - 1) + 'px'; //Y position left
            }
            // this is for right side
            else if (i > index.length / 1.9) {
                targetElem.style.right = randomPos(100, targetElem.parentElement.offsetWidth / 3 - 100) + 'px'; // X position right
                targetElem.style.left = 'auto'; // X position right
                targetElem.style.top = (targetElem.parentElement.offsetHeight / (index.length / 2)) * ((index.length - 1) - i) + 'px'; //Y position right
            }
            if (arrowEnabled) ArrowParent.style.display = "block";// When arrow added make them visible
            else ArrowParent.style.display = "none";// When arrow added make them hidden
        }

        //When viewing on tab
        if (screenWidth <= tabWidth && screenWidth >= mobileWidth) {
            hAndW = randomPos(30, (screenHeight / (index.length / 1.5))) + 'px';
            targetElem.parentElement.style.minHeight = "70vh";
            targetElem.style.bottom = '0px'; //Y position
            targetElem.style.left = (targetElem.parentElement.offsetWidth) / (index.length - 1) * (i - 1) + 'px'; // X position left
            targetElem.style.zIndex = '100'; //Y position
            targetElem.style.top = 'auto'; //Y position
            if (arrowEnabled) ArrowParent.style.display = "block";// When arrow added make them visible
            else ArrowParent.style.display = "none";// When arrow added make them visible
        }

        //When viewing on mobile
        if (screenWidth < mobileWidth) {
            targetElem.style.left = '50%'; // X position left
            ArrowParent.style.display = "block";// When arrow added make them visible
        }
        else if (!arrowEnabled) ArrowParent.style.display = "none";// otherwise hidden

        //after all the work done lets sizing the element
        targetElem.style.width = hAndW;
        targetElem.style.height = hAndW;
        //and the active one position default
        if (i != 0) {
            targetElem.addEventListener('click', quoteShow, false); //So we dont need click event on the active one
        }
        targetElem.classList.add("moves");
    }
    setTimeout(() => {
        for (let i = 0; i < index.length; i++) {
            //     targetElem.style.transition = "0s";
        }
    }, 2000);
}


let clickCheck = true, showClear, showClear2;
function quoteShow(evt) {
  const style = getComputedStyle(this);
  console.log(style);
    if (clickCheck) {
        clickCheck = false;
        clearTimeout(showClear2);
        let activeQuote = document.getElementsByClassName(activeShow);
        let aq;
        for (let j = 0; j < activeQuote.length; j++) {
            aq = activeQuote[j];
            aq.classList.remove("show");
            aq.style.transition = "0.4s";
        }
        this.style.transition = "0.4s";
        setTimeout(() => {
            aq.style.top = this.offsetTop + "px";
            aq.style.left = this.offsetLeft + "px";
            aq.style.width = this.offsetWidth + "px";
            aq.style.height = this.offsetHeight + "px";
            aq.addEventListener('click', quoteShow, false);
            aq.classList.remove(activeShow);
        }, 600);

        setTimeout(() => {
            this.classList.add(activeShow);
            this.removeEventListener("click", quoteShow, false);
        }, 1200);

        showClear2 = setTimeout(() => {
            this.classList.toggle("show");
            aq.style.transition = "";
            this.style.transition = "";
            clickCheck = true;
        }, 1800);
    }
}

let arrowClicked = true; nowActive = 0;


function arrowControl(val) {
    // else nowActive += val;
    if (arrowClicked) {
        arrowClicked = false;
        for (let i = 0; i < index.length; i++) {
            index[nowActive].classList.remove("show");
            index[nowActive].style.transition = ".4s";
            index[nowActive].addEventListener('click', quoteShow, false);
        }
        setTimeout(() => {
            for (let j = 0; j < index.length; j++) {
                index[j].classList.remove(activeShow);
            }
            nowActive += val;
            if (nowActive > index.length - 1) nowActive = 0;
            else if (nowActive < 0) nowActive = index.length - 1;
        }, 600);

        setTimeout(() => {
            index[nowActive].classList.add(activeShow);
            index[nowActive].removeEventListener("click", quoteShow, false);
        }, 610);

        setTimeout(() => {
            index[nowActive].classList.toggle("show");
            index[nowActive].style.transition = "";
            arrowClicked = true
        }, 1800);
    }
}

function randomPos(min, max) {
    return ranNum = Math.floor(Math.random() * (max - min + 1)) + min;
}

function getScreenSize() {
    screenWidth = window.innerWidth;
    screenHeight = window.innerHeight;
    getElem();
}

window.onresize = getScreenSize;
window.addEventListener('resize', getScreenSize);
window.addEventListener('load', function () {
    getScreenSize();
    getElem();
}, true);

function arrowFunc() {
    try {
        index[0].parentElement.appendChild(ArrowParent);// try insert arrow element for slide control
    } catch (error) { }
}
arrowFunc();




//Flaoting animation class;
class MoveAnim {
    constructor(max, tm) {
        this.time = tm;
        if (Math.random() > .5) this.uDVal = max; else this.uDVal = 0;
        if (Math.random() > .5) this.lRVal = max; else this.lRVal = 0;
        this.max = max;
        if (Math.random() > .5) this.uD = false; else this.uD = true;
        if (Math.random() > .5) this.lR = false; else this.lR = true;
        this.upDown(this.max);
        this.leftRight(this.max);
        this.scale = .01;
    }

    upDown() {
        setInterval(() => {
            if (!this.uDVal) {
                if (this.uD >= this.max) { this.uDVal = true; }
                if (this.uD < this.max) { this.uD += this.scale; }
            }
            else if (this.uDVal) {
                if (this.uD <= -this.max) { this.uDVal = false; }
                if (this.uD >= -this.max) { this.uD -= this.scale; }
            }
            return this.uD;
        }, this.time / 1000);
    }
    leftRight() {
        setInterval(() => {
            if (!this.lRVal) {
                if (this.lR >= this.max) { this.lRVal = true; }
                if (this.lR < this.max) { this.lR += this.scale; }
            }
            else if (this.lRVal) {
                if (this.lR <= -this.max) { this.lRVal = false; }
                if (this.lR >= -this.max) { this.lR -= this.scale; }
            }
            return this.lR;
        }, this.time / 1000);
    }

    letMove(el, ud = false, lr = false) {

        setInterval(() => {
            if (ud === true && lr === false) {
                el.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, " + 0 + "," + this.uD + ", 0, 1)";
            }
            else if (ud === false && lr === true) {
                el.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, " + this.lR + "," + 0 + ", 0, 1)";
            }
            else {
                el.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, " + this.lR + "," + this.uD + ", 0, 1)";
            }


        }, 1);
    }

    start(elem, ud, lr) {
        this.letMove(elem, ud, lr);
        this.upDown();
        this.leftRight();
    }
}

class ShowAnim {
    constructor(mElem, dist, times) {
        this.mElem = document.getElementsByClassName(mElem);
        this.pElem = mElem.parentElement;
        this.cElem = mElem.children;
        this.count = 0;
        this.max = dist;
        this.min = 10;
        this.times = times;
        this.randomCount(this.max);
    }
    randomCount(max) {
        return Math.floor(Math.random() * (max - this.min + 1)) + this.min;
    }
    show(ud, lr) {
        for (this.count = 0; this.count < this.mElem.length; this.count++) {
            this.moveanim = new MoveAnim(this.randomCount(this.max), this.times,);
            this.moveanim.start(this.mElem[this.count], ud, lr);
        }
    }
}


let animShow = new ShowAnim("moves", 40, 50);// Element, Max Distance, Times in milliseconds

//Start floating
animShow.show(true, true);// Up-Down, Left-Right;

