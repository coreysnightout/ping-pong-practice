$(document).ready(function() {
  $('.submit').submit(function(event){
    event.preventDefault();
    var value = $(".user-value").val();

    var divisibility = function(value){
      for (var i = 1; i <= value; i++) {
        if((i % 5 === 0) && (i % 3 === 0)) {
          $('.output').append('<li>pingpong</li>')
        } else if (i % 5 === 0)  {
          $('.output').append('<li>pong</li>')
        }  else if (i % 3 === 0) {
            $('.output').append('<li>ping</li>')
          } else {
            $('.output').append('<li>' + i +'</li>')
            $('.output').css("font-weight", "Bold")
            $('.output').css('color', 'red')
          }
        }
      }


    divisibility(value);
  });
});






// document.addEventListener('DOMContentLoaded', function() {
//   console.log('hi');
//
//   [].forEach.call(document.querySelectorAll('button'), function(el){
//     el.addEventListener('click', function() {
//       var value = document.getElementById('user-value').value;
//       for(var i = 1; i <= value; i ++){
//         if((i % 5 === 0) && (i % 3 === 0)) {
//           document.getElementById('output').insertAdjacentHTML('beforeend', '<li>pingpong</li>')
//         } else if (i % 5 === 0) {
//           document.getElementById('output').insertAdjacentHTML('beforeend', '<li>Pong</li>')
//         } else if (i % 3 === 0) {
//           document.getElementById('output').insertAdjacentHTML('beforeend', '<li>Ping</li>')
//         } else {
//           document.getElementById('output').insertAdjacentHTML('beforeend', '<li>' + i + '</li>')
//         }
//       }
//     })
//   })
// })
//
