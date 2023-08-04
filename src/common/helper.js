import moment from 'moment';

export const getDateFormat = (date, format) => {
    if(!date) return ''
    var locale = window.navigator.userLanguage || window.navigator.language;
    moment.locale(locale);
    const dateFormat = format ? format : 'DD/MM/YYYY hh:mm'
    return moment(date).format(dateFormat);
}