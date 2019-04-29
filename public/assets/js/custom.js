/* ------------------------------------------------------------------------------
*
*  # Custom JS code
*
*  Place here all your custom js. Make sure it's loaded after app.js
*
* ---------------------------------------------------------------------------- */

let successNotif = (title, text) => {
  let noticeSuc = new PNotify({
    title: '<strong>' + title + '</strong>',
    text: text,//'<strong>' + name.charAt(0).toUpperCase() + name.slice(1) + '</strong> successfully <strong>' + action + 'ed. </strong>',
    icon: 'icon-checkmark',
    type: 'success',
    styling: 'fontawesome',
    buttons: {
      sticker: false
    }
  });
  noticeSuc.get().click(function() {
    noticeSuc.remove();
  });
  return noticeSuc;
}

let errorNotif = (title, text) => {
  let noticeErr = new PNotify({
    title: '<strong>' + title + '</strong>',
    text: text,
    icon: 'icon-cross',
    type: 'error',
    styling: 'fontawesome',
    buttons: {
      sticker: false
    }
  });
  noticeErr.get().click(function() {
    noticeErr.remove();
  });
  return noticeErr;
}
