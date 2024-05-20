import dayjs from "dayjs";

const formatDate = (date) => dayjs(date, "DD.MM.YYYY").format("DD/MM/YYYY");

export { formatDate }