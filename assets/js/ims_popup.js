window.onload = function () {
  let closeButton = document.getElementById('ims_popup__close');
  let popup = document.querySelector('.ims_popup');

  closeButton.addEventListener('click', function(event) {
    event.preventDefault();
    popup.classList.add('close')
  });
};


(function (Drupal, drupalSettings) {
  Drupal.behaviors.popupNewBehavior = {
    attach: function (context, settings) {
      once('popupNewBehavior', '#ims_popup', context).forEach(function () {
        const popupTimer = drupalSettings.ims_popup.ims_popup_timer * 1000;

        setTimeout(function () {
          const popupElement = document.getElementById('ims_popup');
          if (popupElement) {
            popupElement.style.display = 'flex';
          } else {
            console.error("Popup element not found.");
          }
        }, popupTimer);
      });
    }
  };
})(Drupal, drupalSettings);

