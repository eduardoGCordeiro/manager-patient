export default function calculateDifferenceDate(date){
    return (parseInt((((((new Date().getTime() - date.getTime())/1000)/(60 * 60 * 24)))/365.25)));
};