function go(){

    if (document.form.password.value===''){ 
           alert("El campo Clave es Obligatorio")
        } 
        else if(document.form.login.value===''){ 
             alert("El campo Usuario es Obligatorio"); 
        } else if(!document.form.login.value.includes("@")){
            alert("El campo Usuario No contiene @"); 
        } else{
            document.form.submit(); 
        }
    } 