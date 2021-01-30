 //ticket calculation
 function ticketCount(ticket , isIncrease){
    const firstInput=  document.getElementById(ticket + "Input");
    const plusIn = parseInt(firstInput.value);
     let newInput = plusIn;
     if(isIncrease ==true){
      newInput= plusIn + 1; 
     }
     if(isIncrease ==false && plusIn>0){
     newInput = plusIn - 1; 
     }
    firstInput.value = newInput ;
    let ticketTotal = 0;
    if(ticket == "first"){
      ticketTotal=  newInput *150;
    } 
    if(ticket == "second"){
      ticketTotal=  newInput *100;
    } 
    document.getElementById(ticket + "-total").innerText = "$"+ticketTotal
    calculateTotal()
      }
  //total calculation
  function calculateTotal(){
    const firstCount= getValue ("first");
    const secondCount = getValue ("second");
    const totalPrice = firstCount*150 + secondCount*100;
    document.getElementById("total-price").innerText = "$"+totalPrice;
    //tax calculation 
    const tax = totalPrice *10/100 ;
    document.getElementById("tax-amount").innerText = "$"+tax;
    const grandTotal = totalPrice+tax;
    document.getElementById("total-amount").innerText = "$"+grandTotal
  }
  function getValue (ticket){
    const ticketInput= document.getElementById(ticket +"Input");
    const ticketCount = parseInt(ticketInput.value);
    return ticketCount;
  }
//popup message
  document.getElementById("book-now").addEventListener("click" , function(){
  document.getElementById("book-hide").style.display = "none"
  document.getElementById("pop-message").style.display = "block"
 })
     document.getElementById("ok-btn").addEventListener("click" , function(){
     document.getElementById("book-hide").style.display = "block"
     document.getElementById("pop-message").style.display = "none"
 })