// TODO: CAMBIO DE VISTA AL SELECCIONAR UNA OPCION DEL NAVBAR



function ClickNav(idButton) {
  
  var perfil = document.getElementById('perfil');
  var experiencia = document.getElementById('experiencia'); 
  var educacion = document.getElementById('educacion');
  var contactame = document.getElementById('contactame');
  var Logo1 = document.getElementById('LogoSeccion-1');
  var Logo2 = document.getElementById('LogoSeccion-2');
  var opcion1 = document.getElementById('opcion1');
  var opcion2 = document.getElementById('opcion2');
  var opcion3 = document.getElementById('opcion3');
  var opcion4 = document.getElementById('opcion4');
  var opcion5 = document.getElementById('opcion5');
  
    switch (idButton) {

        case 1:
          perfil.style.display = 'flex';
          Logo2.style.display = 'none';
          Logo1.style.display = 'flex';
          experiencia.style.display = 'none';
          educacion.style.display= 'none';
          contactame.style.display= 'none';
          opcion1.style.color = '#41aea9';
          opcion2.style.color = '#e8ffff';
          opcion3.style.color = '#e8ffff';
          opcion4.style.color = '#e8ffff';
          opcion5.style.color = '#e8ffff';

          break;

        case 2:
          perfil.style.display = 'none';
          Logo1.style.display = 'none';
          Logo2.style.display = 'flex';
          experiencia.style.display = 'flex';
          educacion.style.display= 'none';
          contactame.style.display= 'none';
          opcion1.style.color = '#e8ffff';
          opcion2.style.color = '#41aea9';
          opcion3.style.color = '#e8ffff';
          opcion4.style.color = '#e8ffff';
          opcion5.style.color = '#e8ffff';
          experiencia.scrollTop= '0';
          
          break;

        case 3:
          perfil.style.display = 'none';
          Logo1.style.display = 'none';
          Logo2.style.display = 'flex';
          experiencia.style.display = 'none';
          educacion.style.display= 'flex';
          contactame.style.display= 'none';
          opcion1.style.color = '#e8ffff';
          opcion2.style.color = '#e8ffff';
          opcion3.style.color = '#41aea9';
          opcion4.style.color = '#e8ffff';
          opcion5.style.color = '#e8ffff';
          break;

        case 4:
          perfil.style.display = 'none';
          Logo1.style.display = 'flex';
          Logo2.style.display = 'none';
          experiencia.style.display = 'none';
          educacion.style.display= 'none';
          contactame.style.display= 'flex';
          opcion1.style.color = '#e8ffff';
          opcion2.style.color = '#e8ffff';
          opcion3.style.color = '#e8ffff';
          opcion4.style.color = '#41aea9';
          opcion5.style.color = '#e8ffff';
          break;
      
        case 5:
          perfil.style.display = 'none';
          Logo1.style.display = 'flex';
          Logo2.style.display = 'none';
          experiencia.style.display = 'none';
          educacion.style.display= 'none';
          contactame.style.display= 'none';
          opcion1.style.color = '#e8ffff';
          opcion2.style.color = '#e8ffff';
          opcion3.style.color = '#e8ffff';
          opcion4.style.color = '#e8ffff';
          opcion5.style.color = '#41aea9';

      
      }
}