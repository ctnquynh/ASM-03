"use strict";

// khai báo dữ liệu
const submitEmail = document.querySelector(".submit-email");
const infoGroup = document.querySelector(".info-group");
const submit = document.querySelector(".submit");
const closeInfo = document.querySelector(".close-info");
const inputChange = document.getElementById("email");
const errorEmail = document.getElementById("error-email");
// kiểm tra tính hợp lệ của email
const validay = (email) => {
  return email.match(
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
};
// bắt sự kiện click nút submit
submit.addEventListener("click", function () {
  const emailValue = document.getElementById("email").value;
  if (validay(emailValue)) {
    infoGroup.style.display = "block";
    submitEmail.style.display = "none";
  } else {
    errorEmail.textContent = "Sai định dạng email hãy nhập lại cho đúng";
    errorEmail.style.color = "red";
    inputChange.focus();
  }
});
// bắt sự kiện phím Enter = click nút submit
inputChange.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    submit.click();
  }
});
// bắt sự kiện click nút close email để trở lại như lúc đầu
const btnCloseInfo = function () {
  const emailValueNew = document.getElementById("email");
  infoGroup.style.display = "none";
  submitEmail.style.display = "block";
  emailValueNew.value = "";
  emailValueNew.focus();
  errorEmail.textContent = "Hãy nhập email để xác thực";
  errorEmail.style.color = "black";
};
closeInfo.addEventListener("click", btnCloseInfo);

// bắt sự kiện phím Esc = click nút close
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    btnCloseInfo();
  }
});

// js từ phần kinh nghiệm --> sở thích

// js kinh nghiệm
function handleClickKn() {
  const kinhNghiem = document.getElementById("Kinh-nghiem");
  const btnKn = document.getElementById("btnKn");

  if (btnKn.classList.value.includes("view-more")) {
    kinhNghiem.style.display = "block";

    btnKn.classList.remove("view-more");
    btnKn.classList.add("view-less");
    btnKn.innerHTML = "▲ VIEW LESS";
  } else {
    kinhNghiem.style.display = "none";

    btnKn.classList.remove("view-less");
    btnKn.classList.add("view-more");
    btnKn.innerHTML = "&#x25BC; VIEW MORE";
  }
}
//js kỹ năng
function handleClickKyNang() {
  const kyNang = document.getElementById("ky-nang");
  const btnKyNang = document.getElementById("btn-ky-nang");

  if (btnKyNang.classList.value.includes("view-more")) {
    kyNang.style.display = "block";

    btnKyNang.classList.remove("view-more");
    btnKyNang.classList.add("view-less");
    btnKyNang.innerHTML = "▲ VIEW LESS";
  } else {
    kyNang.style.display = "none";

    btnKyNang.classList.remove("view-less");
    btnKyNang.classList.add("view-more");
    btnKyNang.innerHTML = "&#x25BC; VIEW MORE";
  }
}
// js ngôn ngữ
function handleClickNgonNgu() {
  const ngonNgu = document.getElementById("ngon-ngu");
  const btnNgonNgu = document.getElementById("btn-ngon-ngu");

  if (btnNgonNgu.classList.value.includes("view-more")) {
    ngonNgu.style.display = "block";

    btnNgonNgu.classList.remove("view-more");
    btnNgonNgu.classList.add("view-less");
    btnNgonNgu.innerHTML = "▲ VIEW LESS";
  } else {
    ngonNgu.style.display = "none";

    btnNgonNgu.classList.remove("view-less");
    btnNgonNgu.classList.add("view-more");
    btnNgonNgu.innerHTML = "&#x25BC; VIEW MORE";
  }
}
// js hoạt động
function handleClickHoatDong() {
  const hoatDong = document.getElementById("hoat-dong");
  const btnHd = document.getElementById("btn-hoat-dong");

  if (btnHd.classList.value.includes("view-more")) {
    hoatDong.style.display = "block";

    btnHd.classList.remove("view-more");
    btnHd.classList.add("view-less");
    btnHd.innerHTML = "▲ VIEW LESS";
  } else {
    hoatDong.style.display = "none";

    btnHd.classList.remove("view-less");
    btnHd.classList.add("view-more");
    btnHd.innerHTML = "&#x25BC; VIEW MORE";
  }
}
// js học vấn
function handleClickHocVan() {
  const hocVan = document.getElementById("hoc-van");
  const btnHv = document.getElementById("btn-hoc-van");

  if (btnHv.classList.value.includes("view-more")) {
    hocVan.style.display = "block";

    btnHv.classList.remove("view-more");
    btnHv.classList.add("view-less");
    btnHv.innerHTML = "▲ VIEW LESS";
  } else {
    hocVan.style.display = "none";

    btnHv.classList.remove("view-less");
    btnHv.classList.add("view-more");
    btnHv.innerHTML = "&#x25BC; VIEW MORE";
  }
}
// js sở thích
function handleClickSoThich() {
  const soThich = document.getElementById("so-thich");
  const btnSt = document.getElementById("btn-so-thich");

  if (btnSt.classList.value.includes("view-more")) {
    soThich.style.display = "block";

    btnSt.classList.remove("view-more");
    btnSt.classList.add("view-less");
    btnSt.innerHTML = "▲ VIEW LESS";
  } else {
    soThich.style.display = "none";

    btnSt.classList.remove("view-less");
    btnSt.classList.add("view-more");
    btnSt.innerHTML = "&#x25BC; VIEW MORE";
  }
}
