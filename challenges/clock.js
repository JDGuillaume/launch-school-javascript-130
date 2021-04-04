class Clock {
  constructor(hours, minutes) {
    this.hours = hours;
    this.minutes = minutes;
  }

  static MINUTES_IN_HOUR = 60;
  static MAX_MINUTES_IN_HOUR_ZERO_INDEX = 59;
  static HOURS_IN_A_DAY = 24;
  static MAX_HOURS_ZERO_INDEX = 23;

  static at(hours, minutes = 0) {
    const object = new Clock(hours, minutes);
    return object;
  }

  add(minutes) {
    const hoursToAdd = Math.floor(minutes / Clock.MINUTES_IN_HOUR);
    const minutesToAdd = minutes % Clock.MINUTES_IN_HOUR;

    this.hours += hoursToAdd;
    this.minutes += minutesToAdd;

    while (this.minutes > Clock.MAX_MINUTES_IN_HOUR_ZERO_INDEX) {
      this.hour += 1;
      this.minutes -= Clock.MINUTES_IN_HOUR;
    }

    while (this.hours > Clock.MAX_HOURS_ZERO_INDEX) {
      this.hours -= Clock.HOURS_IN_A_DAY;
    }

    return this;
  }

  subtract(minutes) {
    const hoursToSubtract = Math.floor(minutes / Clock.MINUTES_IN_HOUR);
    const minutesToSubtract = minutes % Clock.MINUTES_IN_HOUR;

    this.hours -= hoursToSubtract;
    this.minutes -= minutesToSubtract;

    while (this.minutes < 0) {
      this.hours -= 1;
      this.minutes += Clock.MINUTES_IN_HOUR;
    }

    while (this.hours < 0) {
      this.hours += Clock.HOURS_IN_A_DAY;
    }

    return this;
  }

  isEqual(clock2) {
    return this.hours === clock2.hours && this.minutes === clock2.minutes;
  }

  toString() {
    const hourString = String(this.hours);
    const minuteString = String(this.minutes);
    return `${hourString.padStart(2, '0')}:${minuteString.padStart(2, '0')}`;
  }
}

module.exports = Clock;
