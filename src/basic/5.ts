enum DayOfWeek {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday,
}

const weekend = {
    day: DayOfWeek.Saturday | DayOfWeek.Sunday,
};

const isWeekend = (day: DayOfWeek) => {
    return weekend.day === day;
};
