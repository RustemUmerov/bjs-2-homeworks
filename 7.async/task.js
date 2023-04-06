class AlarmClock {
  constructor() {
    this.alarmCollection = [];
    this.intervalId = null;
  }

  addClock(time, callback, id) {
    if (!time || !callback) {
      throw new Error('Отсутствуют обязательные аргументы');
    }
    if (this.alarmCollection.some(alarm => alarm.id === id)) {
      console.warn('Уже присутствует звонок с таким id');
      return;
    }
    this.alarmCollection.push({ id, time, callback, canCall: true });
  }

  removeClock(id) {
    const lengthBefore = this.alarmCollection.length;
    this.alarmCollection = this.alarmCollection.filter(alarm => alarm.id !== id);
    const lengthAfter = this.alarmCollection.length;
    return lengthBefore !== lengthAfter;
  }

  getCurrentFormattedTime() {
    const date = new Date();
    let hours = date.getHours().toString();
    if (hours.length < 2) {
      hours = '0' + hours;
    }
    let minutes = date.getMinutes().toString();
    if (minutes.length < 2) {
      minutes = '0' + minutes;
    }
    return hours + ':' + minutes;
  }

  start() {
    if (this.intervalId !== null) {
      return;
    }
    this.intervalId = setInterval(() => {
      const currentTime = this.getCurrentFormattedTime();
      this.alarmCollection.forEach(alarm => {
        if (alarm.time === currentTime && alarm.canCall) {
          alarm.canCall = false;
          alarm.callback();
        }
      });
    }, 1000);
  }

  stop() {
    clearInterval(this.intervalId);
    this.intervalId = null;
  }

  resetAllCalls() {
    this.alarmCollection.forEach(alarm => {
      alarm.canCall = true;
    });
  }

  clearAlarms() {
    this.stop();
    this.alarmCollection = [];
  }
}
