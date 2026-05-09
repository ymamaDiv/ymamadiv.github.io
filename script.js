let isArabic = false;

function toggleLanguage() {
  const btn = document.getElementById("langBtn");

  isArabic = !isArabic;

  if (isArabic) {

    // لغة عربي
    document.getElementById("title").innerText = "أهلاً، أنا يمامة 👋";
    document.getElementById("desc").innerText = "أنا أتعلم تطوير الواجهات الأمامية وأبني مواقع بسيطة";

    document.getElementById("btn").innerText = "عرض المشاريع";

    btn.innerText = "🌐 English";
    btn.classList.remove("left");
    btn.classList.add("right");

  } else {

    // إنجليزي
    document.getElementById("title").innerText = "Hi, I’m Yamamah 👋";
    document.getElementById("desc").innerText = "I’m learning Front-End Development and building simple websites.";

    document.getElementById("btn").innerText = "View Portfolio";

    btn.innerText = "🌐 العربية";
    btn.classList.remove("right");
    btn.classList.add("left");
  }
}