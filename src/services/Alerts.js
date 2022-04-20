import Swal from "sweetalert2";

export default function Alerts(position, icon, title, time){
   return Swal.fire({
        position: position,
        icon: icon,
        title:title,
        showConfirmButton: false,
        timer: time
      })
}