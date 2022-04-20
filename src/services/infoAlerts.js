import Swal from "sweetalert2";

export default function infoAlerts(position, icon, text){
    Swal.fire({
        position: position,
        icon: icon,
        confirmButtonText:'Ok',
        confirmButtonColor: '#3085d6',
        text: text,  
      })
}