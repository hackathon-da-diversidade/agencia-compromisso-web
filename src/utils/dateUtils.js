import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';

dayjs.extend(customParseFormat);

export const calculateAge = (date) =>
  dayjs().diff(dayjs(date, 'DD/MM/YYYY'), 'year');

export const isUnderage = (birthday) => {
  const parseDate = dayjs(birthday, 'DD/MM/YYYY');
  return dayjs().diff(parseDate, 'year') < 18;
};

export const isInvalid = (date) => !dayjs(date, 'DD/MM/YYYY').isValid();
