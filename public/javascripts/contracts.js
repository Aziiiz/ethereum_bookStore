

$("#wrapper").hide();

var currentContractAddress;
$(".block").on('click', "span.product-catagory", function() {
  var myId = $(this).attr('id');
  console.log(myId+"*************");
  currentContractAddress = $(this).text();
  console.log(currentContractAddress+"*********");


  loadContractDetail($(this).text());
});


function loadContractDetail(result) {


  $("#wrapper").show();

var newConfirmPurchaseEvent;
var newCancelEvent;
var newConfirmDeliverEvent;

    var checkbox = document.querySelector('input[type="checkbox"]');
      if(checkbox.checked) {




        var Purchase = EscrowPurchase.at(result);

        $("#purchaseButton").click(function(){
          Purchase.confirmPurchase({value: $("#purchaseButton").val()*1000000000000000000}, function(error, result){
            if(!error)
            {
              newConfirmPurchaseEvent = Purchase.PurchaseConfirmed();
              newConfirmPurchaseEvent.watch(function(error, result){
                if(!error)
                {
              //    loadContractDetail(currentContractAddress);
                }
                else {
                  console.log(error);
                }
              });
            }
            else {
              console.log(error);
            }
          });
        });

      $("#deliverButton").click(function() {
        Purchase.confirmReceived(function(error, result) {
          if(!error)
          {
            newConfirmDeliverEvent = Purchase.ItemReceived();
            newConfirmDeliverEvent.watch(function(error, result) {
              if(!error)
              {
                console.log("good");;
              }
              else {
                console.log(error);
              }
            })
          }
          else {
            console.log(error);
          }
        })
      })


      $("#cancelButton").click(function() {
        Purchase.cancel(function(error, result) {
          if(!error)
          {
            newCancelEvent = Purchase.Aborted();
            newCancelEvent.watch(function(error, result) {
              if(!error)
              {
                console.log("good");;
              }
              else {
                console.log(error);
              }
            })
          }
          else {
            console.log(error);
          }
        })
      })


        Purchase.price(function(error, result) {
          if(!error) {
           var g = result;
           console.log(g);
            $("#purchaseButton").val(result/1000000000000000000);
            $("#myPrice").html("price eth: " +result/1000000000000000000);


          }
          else {
            console.log(error);
          }
              })

      Purchase.image(function(error, result){
        if(!error) {
          $("#myImage").html("<img src=http://localhost:8080/ipfs/" + result+  ">");
        }
        else {
          console.log(error);
        }
      })


      Purchase.ipfsHash(function(error, result) {
        if(!error) {
           $("#preview").attr("href", "http://localhost:8080/ipfs/" + result);
        }
        else {
          console.log(erorr);
        }
      })


      Purchase.name(function(error, result) {
        if(!error)
        {
          $("#myBook").html(result);
        }
        else {
          console.log(error);
        }
      })
      Purchase.text(function(error, result){
        if(!error) {
          $("#myDescription").html(result);
        }
        else {
          console.log(error);
        }
      })


      Purchase.state(function(error, result){
      if(!error){
            //console.log(JSON.stringify(result));
            if (Number(result) === 0){
                $("#state").html('<span class="badge progress-bar-success">Created</span>');
                $("#purchaseButton").show();
                $("#getHash").hide();
            $("#deliverButton").hide();
            $("#cancelButton").hide();
            $("#soldout").hide();
            $("#getBook").hide();

              }
            else if (Number(result) === 1){
                $("#state").html('<span class="badge progress-bar-info">Locked</span>');
                $("#getBook").hide();
                $("#purchaseButton").hide();
            $("#deliverButton").show();
            $("#cancelButton").show();
            $("#soldout").hide();
              }
            else {
                $("#state").html('<span class="badge progress-bar-danger">Inactive</span>');
                  $("getHash").hide();
                $("#deliverButton").hide();
            $("#cancelButton").hide();
            $("#purchaseButton").hide();
            $("#soldout").show();


              }
          }
            else{
          console.error(error);
          }
    });

        }
      else {

        $("#getHash").hide();
        $("#deliverButton").hide();
        $("#cancelButton").hide();
        $("#soldout").hide();
        $("#getBook").hide();
        var Purchase = PurchaseContract.at(result);

        $("#purchaseButton").click(function(){
          Purchase.confrimReceived({value: $("#purchaseButton").val()*1000000000000000000}, function(error, result){
            if(!error)
            {
              newConfirmPurchaseEvent = Purchase.ItemReceived();
              newConfirmPurchaseEvent.watch(function(error, result){
                if(!error)
                {
                //  loadContractDetail(currentContractAddress);
                  $("#getHash").show();
                  $("#getBook").show();
                }
                else {
                  console.log(error);
                }
              });
            }
            else {
              console.log(error);
            }
          });
        });


        Purchase.price(function(error, result) {
          if(!error) {
           var g = result;
           console.log(g);
            $("#purchaseButton").val(result/1000000000000000000);
            $("#myPrice").html("price eth: " +result/1000000000000000000);


          }
          else {
            console.log(error);
          }
              })

      Purchase.cover(function(error, result){
        if(!error) {
          $("#myImage").html("<img src=http://localhost:8080/ipfs/" + result+  ">");
        }
        else {
          console.log(error);
        }
      })


      Purchase.preview(function(error, result) {
        if(!error) {
           $("#preview").attr("href", "http://localhost:8080/ipfs/" + result);
        }
        else {
          console.log(erorr);
        }
      })


      Purchase.name(function(error, result) {
        if(!error)
        {
          $("#myBook").html(result);
        }
        else {
          console.log(error);
        }
      })
      Purchase.text(function(error, result){
        if(!error) {
          $("#myDescription").html(result);
        }
        else {
          console.log(error);
        }
      })
      Purchase.ipfsHash(function(error, result) {
        if(!error) {
          $("#getBook").attr("href", "http://localhost:8080/ipfs/" + result);
        }
        else {
          console.log(error);
        }
      })

      }

  console.log(result);
  console.log("you pressed" + result);


}

  // this ABI is belongs to EscrowPurchase
var EscrowPurchase = web3.eth.contract(escrowPurchase);


      // this ABI for e-book

var PurchaseContract = web3.eth.contract(tradePurchase);
