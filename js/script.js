function main() {
  $('#content').append("<h1>Julia's Pasta Palace</h1><img src='images/pasta.jpeg' alt='pasta'><p>Julia loves Pasta and you will love her Pasta too! Come eat at the Pasta Palace today!</p>");

  $("a[href='#home']").on('click', function(){
    $('a').removeClass("active");
    $(this).addClass("active");
    $('#content').empty();
    $('#content').append("<h1>Julia's Pasta Palace</h1><img src='images/pasta.jpeg' alt='pasta'><p>Julia loves Pasta and you will love her Pasta too! Come eat at the Pasta Palace today!</p>")
  });

  $("a[href='#contact']").on('click', function(){
    $('a').removeClass("active");
    $(this).addClass("active");
    $('#content').empty();
    $('#content').append("<p>Julia Sommer</p> <p>81 Tasty street</p> <p>Nudelberg</p> <p>Germany</p> <p>11-111-111-111</p>")
  });

  $("a[href='#menu']").on('click', function(){
    $('a').removeClass("active");
    $(this).addClass("active");
    $('#content').empty();
    $('#content').append("<p>chicken and mushroom cream spaghetti</p><p>gnocchi</p><p>tomato penne</p>")
  });
}

$(document).ready(main);
