let isArabic = false;

function toggleLanguage() {

  isArabic = !isArabic;

  const btn = document.getElementById("langBtn");

  if (isArabic) {

    // عربي
    document.getElementById("title").innerText = "أهلاً، أنا يمامة 👋";
    document.getElementById("desc").innerText = "خريجة تقنية معلومات، أركز بشكل متزايد على تطوير المواقع الإلكترونية وإنشاء المنتجات الرقمية ";
                      ";  أستمتع بتحويل الأفكار إلى تجارب عملية سهلة الاستخدام، مع الحرص على تطوير مهاراتي التقنية باستمرار, ";
                      "; هنا ستجدون مشاريع تعكس مسيرتي في مجال التكنولوجيا، وحل المشكلات، والتصميم الإبداعي. ";
     
    document.getElementById("btn").innerText = "عرض ملف الاعمال ";

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
