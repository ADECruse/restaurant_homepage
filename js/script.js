const home = "<h1>Julia's Pasta Palace</h1><img src='images/pasta.jpeg' alt='pasta'><p>Julia loves Pasta and you will love her Pasta too! Come eat at the Pasta Palace today!</p>"
const menu = "<p>Chicken and Mushroom Cream Spaghetti</p><p>Gnocchi</p><p>Tomato Penne</p>"
const contact = "<p>Julia Sommer</p> <p>81 Tasty street</p> <p>Nudelberg</p> <p>Germany</p> <p>11-111-111-111</p>"
function main() {
  $('#content').append(home);

  $("a[href='#home']").on('click', function(){
    $('a').removeClass("active");
    $(this).addClass("active");
    $('#content').empty();
    $('#content').append(home)
  });

  $("a[href='#contact']").on('click', function(){
    $('a').removeClass("active");
    $(this).addClass("active");
    $('#content').empty();
    $('#content').append(contact)
  });

  $("a[href='#menu']").on('click', function(){
    $('a').removeClass("active");
    $(this).addClass("active");
    $('#content').empty();
    $('#content').append(menu)
  });
}

$(document).ready(main);
