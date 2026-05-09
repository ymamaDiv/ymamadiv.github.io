let isArabic = false;

function toggleLanguage() {

  isArabic = !isArabic;

  const btn = document.getElementById("langBtn");

  if (isArabic) {

    // عربي
    document.getElementById("title").innerText = "أهلاً، أنا يمامة 👋";
    document.getElementById("desc").innerText = "أنا أتعلم تطوير الواجهات الأمامية وأبني مواقع بسيطة";
    document.getElementById("btn").innerText = "عرض المشاريع";

    btn.innerText = "🌐 English";

    // 📍 يتحول لليمين
    btn.classList.remove("left");
    btn.classList.add("right");

  } else {

    // إنجليزي
    document.getElementById("title").innerText = "Hi, I’m Yamamah 👋";
    document.getElementById("desc").innerText = "I’m learning Front-End Development and building simple websites.";
    document.getElementById("btn").innerText = "View Portfolio";

    btn.innerText = "🌐 العربية";

    // 📍 يتحول لليسار
    btn.classList.remove("right");
    btn.classList.add("left");
  }
}