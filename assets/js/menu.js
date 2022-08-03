jQuery(document).ready(function ($) {
  const wrapper = $("#toplevel_page_doatkolom-theme-settings");
  const topMenu = $("a.toplevel_page_doatkolom-theme-settings.menu-top");
  wrapper.find(".wp-first-item").css({ display: "none" });
  topMenu.attr(
    "href",
    doatkolom_contact_admin.admin_url +
      "admin.php?page=doatkolom-theme-settings"
  );
  wrapper
    .find(".wp-submenu-wrap")
    .find(
      `a[href="${window.location.href.replace(
        doatkolom_contact_admin.admin_url,
        ""
      )}"]`
    )
    .closest("li")
    .addClass("current");
});
