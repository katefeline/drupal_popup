window.onload = function () {
  let closeButton = document.getElementById('ims_popup__close');
  let popup = document.querySelector('.ims_popup');

  closeButton.addEventListener('click', function(event) {
    event.preventDefault();
    popup.classList.add('close')
  });
};


(function (Drupal, drupalSettings) {
  Drupal.behaviors.popupImsBehavior = {
    attach: function (context, settings) {
      once('popupImsBehavior', '#ims_popup', context).forEach(function () {
        const popupTimer = drupalSettings.ims_popup.ims_popup_timer * 1000;
        console.log(popupTimer);

        setTimeout(function () {
          const popupElement = document.getElementById('ims_popup');
          console.log(popupTimer);
          console.log(popupElement);
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

// window.onload = function () {
//   (function (Drupal, drupalSettings) {
//     Drupal.behaviors.popupNewBehavior = {
//       attach: function (context, settings) {
//         once('popupNewBehavior', '#ims_popup', context).forEach(function () {
//           const popupTimer = drupalSettings.ims_popup.ims_popup_timer * 1000;
//
//           setTimeout(function () {
//             const popupElement = document.getElementById('ims_popup');
//             if (popupElement) {
//               popupElement.style.display = 'flex';
//               console.log("Popup element is now visible.");
//             } else {
//               console.error("Popup element not found.");
//             }
//           }, popupTimer);
//         });
//       }
//     };
//   })(Drupal, drupalSettings);
// };

// window.onload = function () {
//   // Simulate getting a timer value from Drupal settings
//   const popupTimer = 5000; // Set your desired popup delay in milliseconds (e.g., 5000ms = 5 seconds)
//
//   setTimeout(function () {
//     const popupElement = document.getElementById('ims_popup');
//     if (popupElement) {
//       popupElement.style.display = 'flex';
//       console.log("Popup element is now visible.");
//     } else {
//       console.error("Popup element not found.");
//     }
//   }, popupTimer);
// };
