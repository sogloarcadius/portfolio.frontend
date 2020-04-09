
import { format } from "date-fns-tz";

export default date => {
  
  var timeZone = 'Europe/Berlin';
  var pattern = 'd.M.yyyy HH:mm:ss.SSS'

  if(date){
    return format(new Date(date), pattern, { timeZone });
  } else{
    return "";
  }
};