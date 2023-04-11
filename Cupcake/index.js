var kontrolEt = () => { 

    var cupcake1 = 10
    var cupcake2 = 14
    var cupcake3 = 18

    var total = (cupcake1 * document.getElementById("cupcake1").value) + (cupcake2 * document.getElementById("cupcake2").value) + (cupcake3 * document.getElementById("cupcake3").value)
    document.getElementById("total").innerText = total+"tl"
    
    if(NameForm.value == "" && LastNameForm.value == "" && EMailForm.value == "" && AdressForm.value == "")
    {
        alert("Lütfen Tüm Formu Doldurunuz")
        return false;
    }

    if(NameForm.value == '')
    {
        document.getElementById("OrderNowForm");
        alert("Lütfen isminizi girin.");
        return false;
    }
    if(LastNameForm.value == '')
    {
        document.getElementById("OrderNowForm");
        alert("Lütfen soyisminizi girin.");
        return false;
    }
    if(EMailForm.value == '')
    {
        document.getElementById("OrderNowForm");
        alert("Lütfen mail adresinizi girin.");
        return false;
    }
    if(AdressForm.value == '')
    {
        document.getElementById("OrderNowForm");
        alert("Lütfen adresinizi girin.");
        return false;
    }
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(EMailForm.value))
    {
      return (true)
    }
    else
    {
    alert("Lütfen geçerli bir mail adresi giriniz!")
    return (false)
    }

}