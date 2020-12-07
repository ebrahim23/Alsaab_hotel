$(document).ready(function () {
  $("#city").change(function () {
    var el = $(this);

    if (el.val() === "1") {
      $("#distnation").append(
        "<option>الورود</option> <option>المونسية</option> <option>المصيف</option> <option>المصيف</option> <option>المروج</option> <option>خريص</option> <option>الملز</option> <option>جابر</option> <option>الفيحاء</option> <option>القصر</option> <option>المجمعة</option> <option>الصحافة</option> <option>العليا</option> <option>الوادي</option>"
      );
    } else if (el.val() === "2") {
      $("#distnation").children().remove();
      $("#distnation").append(
        "<option>اختر وجهتك</option> <option>الكورنيش</option> <option>الشاطئ</option>"
      );
    } else if (el.val() === "3") {
      $("#distnation").children().remove();
      $("#distnation").append(
        "<option>اختر وجهتك</option> <option>جاردينيا</option>"
      );
    } else if (el.val() === "4") {
      $("#distnation").children().remove();
      $("#distnation").append(
        "<option>اختر وجهتك</option> <option>جراء</option> <option>التحلية</option>  <option>فلسطين</option>  <option>قريش</option>"
      );
    } else if (el.val() === "5") {
      $("#distnation").children().remove();
      $("#distnation").append(
        "<option>اختر وجهتك</option> <option>الطائف</option>"
      );
    } else if (el.val() === "6") {
      $("#distnation").children().remove();
      $("#distnation").append(
        "<option>اختر وجهتك</option> <option>بريدة</option>"
      );
    } else if (el.val() === "7") {
      $("#distnation").children().remove();
      $("#distnation").append(
        "<option>اختر وجهتك</option> <option>النخيل</option> <option>الفاخرية</option>"
      );
    } else if (el.val() === "8") {
      $("#distnation").children().remove();
      $("#distnation").append(
        "<option>اختر وجهتك</option> <option>الرس</option>"
      );
    } else if (el.val() === "9") {
      $("#distnation").children().remove();
      $("#distnation").append(
        "<option>اختر وجهتك</option> <option>البندقية</option>"
      );
    } else if (el.val() === "10") {
      $("#distnation").children().remove();
      $("#distnation").append(
        "<option>اختر وجهتك</option> <option>أبها</option>"
      );
    } else if (el.val() === "11") {
      $("#distnation").children().remove();
      $("#distnation").append(
        "<option>اختر وجهتك</option> <option>سيتي سنتر</option> <option>الميدان</option>"
      );
    } else if (el.val() === "12") {
      $("#distnation").children().remove();
      $("#distnation").append(
        "<option>اختر وجهتك</option> <option>محايل عسير</option>"
      );
    } else if (el.val() === "13") {
      $("#distnation").children().remove();
      $("#distnation").append(
        "<option>اختر وجهتك</option> <option>السالمية</option> <option>الفحيحل</option>"
      );
    }
  });
});
