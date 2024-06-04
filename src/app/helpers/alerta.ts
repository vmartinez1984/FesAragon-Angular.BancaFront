import Swal from "sweetalert2";

export class Alerta {
    static datosRegistrados() {
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Datos registrados",
            showConfirmButton: false,
            timer: 1500
        });
    }
    static error() {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Valio pepino carnalito"
        });
    }
}