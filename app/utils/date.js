import moment from 'jalali-moment';

module.exports.ConvertDateToSimpleMode = (date) => {
  date = new Date(date);
  date = date.getFullYear() + "/" + (date.getMonth()) + "/" + date.getDate();
  date = moment(date, 'YYYY/MM/DD').locale('fa').format('YYYY/MM/DD');
  return date;
}