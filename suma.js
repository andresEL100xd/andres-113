function sumatoria() { 
    var n= parseInt( document.getElementById("n").value); 
    s=0 
    e4=Math.pow(Math.PI,3)/32; 
    document.write("Valor de e4"+e4+"<br>") 
    for (i=0;i<=n;i++){ 
        e1=Math.pow(-1,i); 
        e2=(2*i) +1; 
        e3=Math.pow(e2,3); 
        s=s+(e1/e3); 
     
    } 
    document.write("Valor de la suma="+s+"<br>") 
    }