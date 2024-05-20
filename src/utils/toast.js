import { Notyf } from "notyf";

const notyf = new Notyf();

const successAlert = (str) => {
    notyf.success({
        message: str,
        position: {
            x: "right",
            y: "top"
        }
    });
}

const errorAlert = (str) => {
    notyf.error({
        message: str,
        position: {
            x: "right",
            y: "top"
        }
    });
}

export { successAlert, errorAlert }