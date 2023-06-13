"use strict"

const btn = document.querySelectorAll(".btn")

btn.forEach((b) =>
  b.addEventListener("click", function (e) {
    e.preventDefault()
    const clicked = e.target.closest(".btn")

    clicked.classList.toggle("bg-[#87868b]")

    document
      .querySelector(`.content--${clicked.dataset.tab}`)
      .classList.toggle("scale-0")
  })
)
