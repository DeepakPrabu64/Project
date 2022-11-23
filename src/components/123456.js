function myFunction() {
    var copyText = document.getElementById("myInput");
    // copyText.select();
    copyText.setSelectionRange(0, 99999); 
    navigator.clipboard.writeText(copyText.value);
    alert("Your coupon code is copied to your clipboard ");
  }
  export default myFunction;