function action()
{
  var u = document.getElementById("uname").value;
  var e = document.getElementById("email").value;
  var m = document.getElementById("mobile").value;
  
  //for username
  if(u.length <= 0)
  {
    alert("Enter Username");
  }
  //for Email
  if (e.length <= 0)
  {
    alert("Enter Email");
  }
  else
  {
    var f = e.slice(e.length-10,e.length);
    if(f != "@gmail.com")
    {
      alert("Your Email must contain @gmail.com");
    }
  }

  //for mobile
  if (m.length != 10)
  {
    alert("Enter Valid Mobile Number");
  }

}
