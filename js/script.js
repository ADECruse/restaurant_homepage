function main() {
  $('#content').append("<h1>Julia's Pasta Palace</h1><img src='images/pasta.jpeg' alt='pasta'><p>Julia loves Pasta and you will love her Pasta too! Come eat at the Pasta Palace today!</p>");

  $('#home').on('click', function(){
    $('#content').empty();
    $('#content').append("<h1>Julia's Pasta Palace</h1><img src='images/pasta.jpeg' alt='pasta'><p>Julia loves Pasta and you will love her Pasta too! Come eat at the Pasta Palace today!</p>")
  });

  $('#contact').on('click', function(){
    $('#content').empty();
    $('#content').append("<p>Julia Sommer</p> <p>81 Tasty street</p> <p>Nudelberg</p> <p>Germany</p> <p>11-111-111-111</p>")
  });

  $('#menu').on('click', function(){
    $('#content').empty();
    $('#content').append("<p>chicken and mushroom cream spaghetti</p><p>gnocchi</p><p>tomato penne</p>")
  });
}

$(document).ready(main);
