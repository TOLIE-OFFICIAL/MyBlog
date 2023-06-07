import moment from "moment";

export function formatDate(time: string) {
  return moment(time).format("YYYY-MM-DD HH:mm:ss");
};
export function GetNowDate() {
  return moment().format("YYYY-MM-DD HH:mm:ss");
}; 
