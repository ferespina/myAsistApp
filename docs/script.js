function esCelular() {
    const plataforms = /Mobi|Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
    return plataforms.test(navigator.userAgent);
  }
 
function descarga(){  
    if (esCelular()) {
        document.getElementById("descargaQR").style.display = "none";
    } else {
        document.getElementById("descargaLink").style.display = "none";
    }
}