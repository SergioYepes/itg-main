import axios from "axios";

export type Form =
  | "comercial"
  | "trabajaconnosotros"
  | "comercial-en"
  | "trabajaconnosotros-en";

export const postEmail = (
  typeForm: Form,
  cvFile: File | string,
  captcha: string,
  email: string,
  name: string,
  phone: string,
  tellus: string,
  role: string,
  services: string,
  company: string,
  notifications: string,
  context: string
) => {
  const formData = new FormData();
  const contextMessge =
    context === "es" ? "Gracias por contactarnos" : "Thanks for contacting us";
  const contextErrorMessge =
    context === "es"
      ? "Algo salio mal, recarga la pagina y reenvia el formulario"
      : "something went wrong, please reload the page and try again";

  formData.append("form", typeForm);
  formData.append("_token", captcha);
  formData.append("email", email);
  formData.append("cv", cvFile);
  formData.append("name", name);
  formData.append("phone", phone);
  formData.append("tellUs", tellus);
  formData.append("role", role);
  formData.append("services", services);
  formData.append("company", company);
  formData.append("notifications", notifications);
  const config = {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  };
  axios
    .post(
      "https://wukcv5ak96.execute-api.us-east-1.amazonaws.com",
      formData,
      config
    )
    .then((response) => {
      alert(contextMessge);
    })
    .catch((error) => {
      alert(contextErrorMessge);
    });
};

export const postEmailWithUs = (
  typeForm: Form,
  cvFile: File | string,
  captcha: string,
  email: string,
  name: string,
  phone: string,
  tellus: string,
  context: string
) => {
  const formData = new FormData();
  const contextMessge =
    context === "es" ? "Gracias por contactarnos" : "Thanks for contacting us";
  const contextErrorMessge =
    context === "es"
      ? "Algo salio mal, recarga la pagina y reenvia el formulario"
      : "something went wrong, please reload the page and try again";

  formData.append("form", typeForm);
  formData.append("_token", captcha);
  formData.append("email", email);
  formData.append("cv", cvFile);
  formData.append("name", name);
  formData.append("phone", phone);
  formData.append("tellUs", tellus);
  const config = {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  };
  axios
    .post(
      "https://wukcv5ak96.execute-api.us-east-1.amazonaws.com",
      formData,
      config
    )
    .then((response) => {
      alert(contextMessge);
    })
    .catch((error) => {
      alert(contextErrorMessge);
    });
};
