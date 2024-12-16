
const notification = document.getElementById('notification');


function showNotification() {
  
  notification.style.display = 'block';

 
  notification.style.animation = 'slideDown 0.5s ease forwards';

  
  setTimeout(() => {
    notification.style.animation = 'slideUp 0.5s ease forwards';

    
    setTimeout(() => {
      notification.style.display = 'none';
    }, 500); 
  }, 3000); 
}


setInterval(showNotification, 60000);


showNotification();
