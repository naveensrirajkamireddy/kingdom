import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

export function raiseSuccessAlert(message: any) {
  withReactContent(Swal).fire({
    title: message,
    icon: "success",
    timer: 2000,
    showConfirmButton: false,
  });
}

export function raiseErrorAlert(message: any) {
  withReactContent(Swal).fire({
    title: message,
    icon: "error",
    timer: 2000,
    showConfirmButton: false,
  });
}

export function confirmAlert() {
  return withReactContent(Swal)
    .fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    })
    .then((result) => result.isConfirmed);
}