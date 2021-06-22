(function($) {
    $.fn.myPlugin = function() {

      $( ".controls" ).append( "<button type=\"button\" id=\"ia\">IA</button>" );

      $('#currentPlayer').html('Joueur 1');
      var currentPlayer = 1;

      $( ".cell" ).each(function( index ) {
        $(this).attr('id', index);
      });

      $(document).on('click', '#ia', function() {
        if (currentPlayer == 1) {
          return;
        }
        var con = 'true';
        while (con == 'true') {
          var x = Math.floor((Math.random() * 10));
          var target = $( "#" + x );
          if (!($(target).hasClass('j1')) || (!($(target).hasClass('j2')))) {
            con = 'false';
            $(target).trigger("click");
          }
        }
      });


      $(document).on('click', '.cell', function() {
        if ($(this).hasClass('j1') || $(this).hasClass('j2')) {
          return;
        }
        if (currentPlayer == 1) {
          $(this).css('background-color', 'BurlyWood');
          $(this).html('X');

          $(this).addClass('j1');
          test_win(this);
          currentPlayer = 2;
          $('#currentPlayer').html('Joueur 2');
        }
        else {
          $(this).css('background-color', 'CadetBlue');
          $(this).addClass('j2');
          $(this).html('O');

          test_win(this);
          currentPlayer = 1;
          $('#currentPlayer').html('Joueur 1');
        }
      });

      $(document).on('click', '#replay', function() {
        rinit();
        $('#playerOne').html('0');
        $('#playerTwo').html('0');
        currentPlayer = 1;
        $('#currentPlayer').html('Joueur 1');
        console.clear();
      });

      function end(index){
        var end = 0;
        $( ".cell" ).each(function( index ) {
          if ($(this).hasClass('j1')) {
            end++;
          }
          else if ($(this).hasClass('j2')) {
            end++;
          }
        });
        if (end == 9) {
          alert('Partie nul');
          rinit();
        }
      }

      function rinit(){
        $( ".cell" ).each(function( index ) {
          $(this).removeClass('j1');
          $(this).removeClass('j2');
          $(this).css('background-color', '');
          $(this).html('');
        });
      }

      function win(score , str, id){
        $('#'+str).html(score);
        alert('joueur ' + id + ' a gagner');
        rinit();
      }

      function test_win(index){
        var id_cell = index.id;
        var i = 0;
        if (currentPlayer == 1) {
          var str_spam = 'playerOne';
          var score_actual = $('#'+str_spam).html();
          var id_player = 1;
        }
        if (currentPlayer == 2) {
          var str_spam = 'playerTwo';
          var score_actual = $('#'+str_spam).html();
          var id_player = 2;
        }
        if (id_cell == 0) {
          if ($('#1').hasClass('j' + id_player)) {
            if ($('#2').hasClass('j' + id_player)) {
              win(++score_actual, str_spam, id_player);
              return;
            }
          }
          if ($('#3').hasClass('j' + id_player)) {
            if ($('#6').hasClass('j' + id_player)) {
              win(++score_actual, str_spam, id_player);
              return;
            }
          }
          if ($('#4').hasClass('j' + id_player)) {
            if ($('#8').hasClass('j' + id_player)) {
              win(++score_actual, str_spam, id_player);
              return;
            }
          }
        }
        else if (id_cell == 1) {
          if ($('#0').hasClass('j' + id_player)) {
            if ($('#2').hasClass('j' + id_player)) {
              win(++score_actual, str_spam, id_player);
              return;
            }
          }
          if ($('#4').hasClass('j' + id_player)) {
            if ($('#7').hasClass('j' + id_player)) {
              win(++score_actual, str_spam, id_player);
              return;
            }
          }
        }
        else if (id_cell == 2) {
          if ($('#0').hasClass('j' + id_player)) {
            if ($('#1').hasClass('j' + id_player)) {
              win(++score_actual, str_spam, id_player);
              return;
            }
          }
          if ($('#4').hasClass('j' + id_player)) {
            if ($('#6').hasClass('j' + id_player)) {
              win(++score_actual, str_spam, id_player);
              return;
            }
          }
          if ($('#5').hasClass('j' + id_player)) {
            if ($('#8').hasClass('j' + id_player)) {
              win(++score_actual, str_spam, id_player);
              return;
            }
          }
        }
        else if (id_cell == 3) {
          if ($('#0').hasClass('j' + id_player)) {
            if ($('#6').hasClass('j' + id_player)) {
              win(++score_actual, str_spam, id_player);

              return;
            }
          }
          if ($('#4').hasClass('j' + id_player)) {
            if ($('#5').hasClass('j' + id_player)) {
              win(++score_actual, str_spam, id_player);

              return;
            }
          }
        }
        else if (id_cell == 4) {
          if ($('#1').hasClass('j' + id_player)) {
            if ($('#7').hasClass('j' + id_player)) {
              win(++score_actual, str_spam, id_player);
              return;
            }
          }
          if ($('#3').hasClass('j' + id_player)) {
            if ($('#5').hasClass('j' + id_player)) {
              win(++score_actual, str_spam, id_player);
              return;
            }
          }
          if ($('#0').hasClass('j' + id_player)) {
            if ($('#8').hasClass('j' + id_player)) {
              win(++score_actual, str_spam, id_player);
              return;
            }
          }
          if ($('#2').hasClass('j' + id_player)) {
            if ($('#6').hasClass('j' + id_player)) {
              win(++score_actual, str_spam, id_player);
              return;
            }
          }
        }
        else if (id_cell == 5) {
          if ($('#2').hasClass('j' + id_player)) {
            if ($('#8').hasClass('j' + id_player)) {
              win(++score_actual, str_spam, id_player);
              return;
            }
          }
          if ($('#4').hasClass('j' + id_player)) {
            if ($('#3').hasClass('j' + id_player)) {
              win(++score_actual, str_spam, id_player);
              return;
            }
          }
        }
        else if (id_cell == 6) {
          if ($('#3').hasClass('j' + id_player)) {
            if ($('#0').hasClass('j' + id_player)) {
              win(++score_actual, str_spam, id_player);
              return;
            }
          }
          if ($('#7').hasClass('j' + id_player)) {
            if ($('#8').hasClass('j' + id_player)) {
              win(++score_actual, str_spam, id_player);
              return;
            }
          }
        }
        else if (id_cell == 7) {
          if ($('#4').hasClass('j' + id_player)) {
            if ($('#1').hasClass('j' + id_player)) {
              win(++score_actual, str_spam, id_player);
              return;
            }
          }
          if ($('#6').hasClass('j' + id_player)) {
            if ($('#8').hasClass('j' + id_player)) {
              win(++score_actual, str_spam, id_player);
              return;
            }
          }
        }
        else if (id_cell == 8) {
          if ($('#5').hasClass('j' + id_player)) {
            if ($('#2').hasClass('j' + id_player)) {
              win(++score_actual, str_spam, id_player);
              return;
            }
          }
          if ($('#7').hasClass('j' + id_player)) {
            if ($('#6').hasClass('j' + id_player)) {
              win(++score_actual, str_spam, id_player);
              return;
            }
          }
          if ($('#4').hasClass('j' + id_player)) {
            if ($('#0').hasClass('j' + id_player)) {
              win(++score_actual, str_spam, id_player);
              return;
            }
          }
        }
        end();
      };
    };
})(jQuery);


$('.grille').myPlugin();
