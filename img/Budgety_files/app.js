



    var budgetController = (function() {
      //some code //










      })();



      var UIcontroller = (function() {
        //some code //






      
    })();


    var controller = (function(budgetCtrl, UIctrl){
    //some code //

    var ctrlAddItem = function() {

        var input = UIctrl.getinput();
        console.log(input);

        // 1. Get the field input data

    }

    document.querySelector('.add__btn').addEventListener('click', ctrlAddItem);

    document.addEventListener('keypress', function(event) {

        if (event.keyCode === 13 || event.which === 13) {
            ctrlAddItem();
        }
    });


  })(budgetController, UIcontroller);
