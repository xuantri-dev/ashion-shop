/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

/*===== Menu Show =====*/
/* Validate if constant exists */
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

/*===== Hide Show =====*/
/* Validate if constant exists */
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/*=============== IMAGE GALLERY ===============*/
function imgGallery() {
  const mainImg = document.querySelector(".details__img"),
    smallImg = document.querySelectorAll(".details__small-img");

  smallImg.forEach((img) => {
    img.addEventListener("click", function () {
      mainImg.src = this.src;
    });
  });
}
imgGallery();

/*=============== SWIPER CATEGORIES ===============*/
var swiperCategories = new Swiper(".categories__container", {
  spaceBetween: 24,
  loop: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    350: {
      slidesPerView: 2,
      spaceBetween: 24,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 24,
    },
    992: {
      slidesPerView: 4,
      spaceBetween: 24,
    },
    // 1200: {
    //     slidesPerView: 5,
    //     spaceBetween: 24,
    // },
    // 1400: {
    //     slidesPerView: 6,
    //     spaceBetween: 24,
    // },
  },
});

/*=============== SWIPER PRODUCTS ===============*/
var swiperProducts = new Swiper(".new__container", {
  spaceBetween: 24,
  loop: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    764: {
      slidesPerView: 2,
      spaceBetween: 24,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 44,
    },
    1400: {
      slidesPerView: 4,
      spaceBetween: 24,
    },
  },
});

/*=============== PRODUCTS TABS ===============*/
const tabs = document.querySelectorAll("[data-target]"),
  tabContents = document.querySelectorAll("[content]");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.target);
    tabContents.forEach((tabContent) => {
      tabContent.classList.remove("active-tab");
    });

    target.classList.add("active-tab");

    tabs.forEach((tab) => {
      tab.classList.remove("active-tab");
    });

    tab.classList.add("active-tab");
  });
});

/*=============== SLIDER IMAGES ===============*/
function slider() {
  var list = document.querySelector(".slider__content");
  var items = document.querySelectorAll(".slider__item");
  var dots = document.querySelectorAll(".slider__dots li");
  var prev = document.querySelector(".slider__btn-prev");
  var next = document.querySelector(".slider__btn-next");
  var lengthItems = items.length - 1;
  var active = 0;

  // Khi click chuột vào nút next thì sẽ chạy function
  next.onclick = function () {
    // nếu vị trí của active + 1 lớn hơn số lượng items thì cho active về lại 0
    if (active + 1 > lengthItems) {
      active = 0;
    } else {
      // ngược lại thì
      // tăng active lên 1 (thay đổi vị trí active hiện tại của item lên vị trí tiếp theo)
      active += 1;
    }
    // chạy funtion reloadSlider
    reloadSlider();
  };

  // Khi click chuột vào nút prev thì sẽ chạy function
  prev.onclick = function () {
    // nếu vị trí active - 1 nhỏ hơn 0
    if (active - 1 < 0) {
      // lấy vị trí cuối cùng làm vị trí của active
      active = lengthItems;
    } else {
      // ngược lại thì
      // lấy vị trí active hiện tại trừ 1
      active = active - 1;
    }
    // chạy funtion reloadSlider
    reloadSlider();
  };

  // hàm refreshSlider sau 3s tự động click vào button next
  let refreshSlider = setInterval(() => {
    next.click();
  }, 5000);

  // hàm reloadSlider chạy ảnh slide từ trái qua phải
  function reloadSlider() {
    // khoảng cách từ mép bên trái đến mép bên của item có class active (item đang active)
    let checkLeft = items[active].offsetLeft;
    // dịch chuyển item từ phải sang trái nên có dấu âm
    list.style.left = -checkLeft + "px";
    // lấy item active trước khi bấm vào button
    let lastActiveDot = document.querySelector(
      ".slider__dots li.slider__dots-active"
    );
    // xóa class active của item đó
    lastActiveDot.classList.remove("slider__dots-active");
    // thêm class active vào cho dot của item đang active
    dots[active].classList.add("slider__dots-active");
    // nếu người dùng bấm vào bất kì button vào thì refreshSlider sẽ bị ngưng
    clearInterval(refreshSlider);
    // chạy lại hàm refreshSlider
    refreshSlider = setInterval(() => {
      next.click();
    }, 5000);
  }

  // chạy vòng lặp forEach duyệt qua tất cả các thẻ li của mảng dots
  dots.forEach((li, key) => {
    // khi click vào thẻ li sẽ chạy function
    li.addEventListener("click", function () {
      // cho active của img bằng key của li hiện tại
      active = key;
      // chạy funtion reloadSlider
      reloadSlider();
    });
  });
}
// slider();

/*=============== PRODUCT SORT LISTLIST ===============*/
function productSortList() {
  const sortContainer = document.querySelector(".sort__container");
  const sortHeader = document.getElementById("sortHeader");
  const sortList = document.getElementById("sortList");
  const sortItems = sortList.querySelectorAll("li"); // Lấy tất cả thẻ li trong sortList

  if (sortContainer && sortList && sortHeader) {
    // Hiển thị sortList khi hover vào sortContainer
    sortContainer.addEventListener("mouseover", () => {
      sortList.classList.remove("hidden"); // Hiển thị sortList
      sortList.classList.add("show"); // Thêm lớp show
      sortHeader.querySelector(".arrow").style.transform = "rotate(180deg)"; // Xoay mũi tên
    });

    // Ẩn sortList khi chuột rời khỏi sortContainer
    sortContainer.addEventListener("mouseout", () => {
      sortList.classList.add("hidden"); // Ẩn sortList
      sortList.classList.remove("show"); // Xóa lớp show
      sortHeader.querySelector(".arrow").style.transform = "rotate(0)"; // Đặt lại mũi tên
    });

    // Ẩn sortList khi click vào bất kỳ thẻ li
    sortItems.forEach((item) => {
      item.addEventListener("click", () => {
        sortList.classList.add("hidden"); // Ẩn sortList
        sortList.classList.remove("show"); // Xóa lớp show
        sortHeader.querySelector(".arrow").style.transform = "rotate(0)"; // Đặt lại mũi tên
      });
    });
  }
}
// productSortList();

document.addEventListener("DOMContentLoaded", () => {
  // Kiểm tra xem phần tử có tồn tại trước khi chạy hàm
  if (document.querySelector(".slider__content")) {
    slider(); // Chạy slider nếu phần tử tồn tại
  }

  if (document.querySelector(".sort__container")) {
    productSortList(); // Chạy productSortList nếu phần tử tồn tại
  }
});

window.addEventListener("scroll", function () {
  // Ghi lại vị trí cuộn hiện tại
  // console.log("ScrollY:", window.scrollY);

  // Chọn phần tử chính và ghi lại offsetTop của nó
  const mainElement = document.querySelector(".main");
  if (mainElement) {
    const offsetTop = mainElement.offsetTop;
    // console.log("OffsetTop:", offsetTop);

    // Kiểm tra nếu vị trí cuộn lớn hơn hoặc bằng offsetTop và kích thước màn hình lớn hơn hoặc bằng 1024px
    if (window.scrollY >= offsetTop && window.innerWidth >= 1024) {
      // console.log("fixed menu");
      document.querySelector(".nav").classList.add("fixed-top");
      document.querySelector("header").classList.add("dummy-padding-top");
    } else {
      // console.log("normal menu");
      document.querySelector(".nav").classList.remove("fixed-top");
      document.querySelector("header").classList.remove("dummy-padding-top");
    }
  } else {
    console.log("Main element not found");
  }
});

/*=============== NAVIGATION LINK ===============*/
function navLink() {
  const navLinks = document.querySelectorAll(".nav__link");

  navLinks.forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault(); // Ngăn chặn hành vi mặc định của thẻ a

      const parentItem = this.parentElement;
      const subMenu = parentItem.querySelector(".nav__item-sub");

      // Đóng tất cả các menu con khác
      document.querySelectorAll(".nav__item").forEach((item) => {
        if (item !== parentItem) {
          item.classList.remove("nav__active");
        }
      });

      // Bật/tắt menu con của phần tử hiện tại
      parentItem.classList.toggle("nav__active");
    });
  });
  // Đóng menu con khi click vào bất kỳ phần tử nào khác trên trang web
  document.addEventListener("click", function (event) {
    const isClickInsideNav = event.target.closest(".nav__item");
    if (!isClickInsideNav) {
      document.querySelectorAll(".nav__item").forEach((item) => {
        item.classList.remove("nav__active");
      });
    }
  });
}
navLink();

var menuItems = document.querySelectorAll(".menu-item");
menuItems.forEach(function (item) {
  item.addEventListener("click", function (event) {
    event.preventDefault();
    var submenuId = this.getAttribute("data-submenu");
    var submenu = document.getElementById(submenuId);
    if (submenu.classList.contains("show")) {
      submenu.classList.remove("show");
    } else {
      submenu.classList.add("show");
    }
  });
});

// JavaScript để hiển thị form và overlay khi bấm vào button "Thêm Sản Phẩm"
document.getElementById("addProductBtn").addEventListener("click", function () {
  document.getElementById("productForm").style.display = "block";
  document.getElementById("overlay").style.display = "block";
});

// JavaScript để ẩn form và overlay khi bấm vào button "X"
document.getElementById("closeFormBtn").addEventListener("click", function () {
  document.getElementById("productForm").style.display = "none";
  document.getElementById("overlay").style.display = "none";
});
