AOS.init({
  anchorPlacement: "bottom-center",
  once: true,
});

const counters = document.querySelectorAll("[data-counter]");

counters.forEach((cnt) => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const intersecting = entry.isIntersecting;
      intersecting &&
        cnt.dataset.counter != +cnt.innerHTML &&
        counter(cnt.dataset.counter, cnt);
    });
  });
  observer.observe(cnt);
});

function counter(count, element) {
  let prevCount = 0;
  let interval;

  interval = setInterval(() => {
    element.innerHTML = Math.round(prevCount);
    if (prevCount == count || prevCount > count) {
      element.innerHTML = count;
      clearInterval(interval);
    }
    prevCount += count / 100;
  }, 20);
}
