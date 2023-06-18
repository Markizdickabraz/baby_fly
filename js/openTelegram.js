const telegramLink = document.getElementById('telegram-link');
  
  telegramLink.addEventListener('click', function(event) {
    event.preventDefault();
    
    if (isTelegramAppInstalled()) {
      openTelegramApp();
    } else {
    //   openTelegramWeb();
    }
  });
  
  function isTelegramAppInstalled() {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    
    return userAgent.indexOf('Telegram') !== -1;
  }
  
  function openTelegramApp() {
    window.location.href = 'tg://k/#@nastya_17_08';
  }
  
//   function openTelegramWeb() {
//     window.location.href = 'https://web.telegram.org/k/#@nastya_17_08';
//   }

