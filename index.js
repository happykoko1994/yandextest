function runningLine(marqueeId, textId) {
  const marqueeText = document.getElementById(textId);
  marqueeText.innerHTML += marqueeText.innerHTML;

  const textWidth = marqueeText.offsetWidth;
  const containerWidth = document.getElementById(marqueeId).offsetWidth;
  const animationDuration = textWidth / 50 + "s";
  marqueeText.style.animationDuration = animationDuration;
}

document.getElementById("support-btn").addEventListener("click", function () {
  document
    .querySelector(".text-tournament")
    .scrollIntoView({ behavior: "smooth", block: "center" });
});

document.getElementById("more-info-btn").addEventListener("click", function () {
  document
    .querySelector(".right")
    .scrollIntoView({ behavior: "smooth", block: "center" });
});

runningLine("marquee1", "marqueeText1");
runningLine("marquee2", "marqueeText2");
