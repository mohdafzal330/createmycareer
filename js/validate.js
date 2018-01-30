var input_name=0;
var input_email=0;
var input_phone=0;
var input_address=0;
var input_comment=0;
var input_amount=0;
function enable()
{
  if(input_name==1 && input_email==1 && input_phone==1 && input_address==1 && input_comment==1 && input_amount==1)
  {
    document.getElementById("pay").disabled = false;
  }
  else
  {
   document.getElementById("pay").disabled = true; 
  }
}


function showamount(amt)
{
    if(amt==0)
    {
        input_amount=0;
        document.getElementById("inp").placeholder="Enter Amount";
        document.getElementById("inp").value="";
        document.getElementById("amt").style.display='block';
        document.getElementById("inp").style.border="1px solid rgba(81, 203, 238, 1)";
        enable();
    }
    else
    { 
    input_amount=1;
    document.getElementById("inp").value=amt;
    document.getElementById("amt").style.display='block';
    document.getElementById("inp").style.border="3px solid lightgreen";  
    enable();
     } 
}



function validate_phone()
{
var num;
var phone_validator=/^[789]\d{9}$/;

num = document.getElementById("phone").value;
if (isNaN(num) || num.length<10 || !(phone_validator.test(num)))
{
  input_phone=0;
  if(num.length==0)
    {
        document.getElementById("phone").style.border="3px solid #FF3333";
    }
    document.getElementById("phone").style.border="3px solid #FF3333";
    document.getElementById("pay").disabled = true;
}
else
{  
  document.getElementById("phone").style.border="3px solid lightgreen";  
  input_phone=1;  
  enable();
}  
}


function validate_name()
{
var name_validator=/^[a-zA-Z ]+$/;
var name=document.getElementById("name").value;    
if (name==null || name=="" || name.length<3 || !(name_validator.test(name)))
{ 
  input_name=0;
  document.getElementById("name").style.border="3px solid #FF3333";  
  document.getElementById("vname").innerHTML="<font color='red'>Give a proper name please!</font>"; 
  document.getElementById("pay").disabled = true;  
}
else
{
    input_name=1;
    document.getElementById("vname").innerHTML="";
    document.getElementById("name").style.border="3px solid lightgreen";
    enable();
} 
}



function validate_address()
{
var address=document.getElementById("address").value;    
if (address==null || address=="" || address.length<4 )
{ 
  input_address=0;
  document.getElementById("address").style.border="3px solid #FF3333";
  document.getElementById("pay").disabled = true;  
}
else
{
    input_address=1;
    document.getElementById("address").style.border="3px solid lightgreen";
    enable();
} 
}


function validate_comment()
{
    var comment=document.getElementById("comment").value;    
    if (comment==null || comment=="")
    { 
      input_comment=0;
      document.getElementById("comment").style.border="3px solid #FF3333";  
      document.getElementById("pay").disabled = true;
    }
    else
    {
        input_comment=1;
        document.getElementById("comment").style.border="3px solid lightgreen";
        enable();
    } 

    
}

function validate_email()
{
    var x=document.getElementById("email").value;  
    var atposition=x.indexOf("@");  
    var dotposition=x.lastIndexOf(".");  
    if(x.length==0)
    {
        input_email=0;
        document.getElementById("vmail").innerHTML="Cannot be empty";
        document.getElementById("email").style.border="3px solid #FF3333";
        document.getElementById("pay").disabled = true; 
    }
    else if (atposition<1 || dotposition<atposition+2 || dotposition+2>=x.length)
    {
      input_email=0;
      document.getElementById("vmail").innerHTML="<font color='red'>Invalid Email!</font>";
      document.getElementById("email").style.border="3px solid #FF3333";    
      document.getElementById("pay").disabled = true;
    }
    else
    {
        input_email=1;
        document.getElementById("vmail").innerHTML="";
        document.getElementById("email").style.border="3px solid lightgreen"; 
        enable();
    }       
}

function validate_amount()
{
    var amount=document.getElementById("inp").value;
    if(isNaN(amount) || amount<=0)
    {
        input_amount=0;
        document.getElementById("inp").style.border="3px solid #FF3333";
        document.getElementById("pay").disabled = true;
    }
    else
    {
        input_amount=1;
        document.getElementById("inp").style.border="3px solid lightgreen"; 
        enable();   
    }
}
