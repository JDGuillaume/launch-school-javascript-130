/* eslint-disable max-lines-per-function */
class Meetup {
  constructor(year, month) {
    this.month = month;
    this.year = year;
  }

  static DAYS = {
    0: 'sunday',
    1: 'monday',
    2: 'tuesday',
    3: 'wednesday',
    4: 'thursday',
    5: 'friday',
    6: 'saturday',
  };

  _getPotentialDates(weekday) {
    const dates = [];
    let day = 1;
    let start = new Date(`${this.month}, ${day}, ${this.year}`);

    while (start.getMonth() + 1 === this.month) {
      if (Meetup.DAYS[start.getDay()] === weekday) dates.push(start.toString());
      day++;
      start.setDate(day);
    }

    return dates;
  }

  day(weekday, schedule) {
    schedule = schedule.toLowerCase();
    weekday = weekday.toLowerCase();
    const potentialDates = this._getPotentialDates(weekday);

    switch (schedule) {
      case 'first':
        return potentialDates[0];
      case 'second':
        return potentialDates[1];
      case 'third':
        return potentialDates[2];
      case 'fourth':
        return potentialDates[3];
      case 'fifth':
        return potentialDates[4] ?? null;
      case 'last':
        return potentialDates[potentialDates.length - 1];
      case 'teenth':
        return potentialDates.filter(date =>
          date.slice(8, 10).match('1[3-9]')
        )[0];
    }
  }
}

module.exports = Meetup;
