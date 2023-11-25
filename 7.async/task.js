class AlarmClock {
	constructor() {
		this.alarmCollection = [];
		this.intervalId = null;
	}

	addClock(time, callback) {
		if (!time || !callback) {
			throw new Error('Отсутствуют обязательные аргументы');
		}
		if (this.alarmCollection.find(alarm => alarm.time === time)) {
			console.warn('Уже присутствует звонок на это же время');
		}

		const newAlarm = {
			time,
			callback,
			canCall: true,
		};

		this.alarmCollection.push(newAlarm);
	}

	removeClock(time) {
		return (this.alarmCollection = this.alarmCollection.filter(alarm => alarm.time !== time));
	}

	getCurrentFormattedTime() {
		const currentTime = new Date();
		let hours = currentTime.getHours();
		let minutes = currentTime.getMinutes();
		hours = hours < 10 ? `0${hours}` : hours;
		minutes = minutes < 10 ? `0${minutes}` : minutes;
		return `${hours}:${minutes}`;
	}

	start() {
		if (this.intervalId !== null) {
			return;
		}

		this.intervalId = setInterval(() => {
			this.alarmCollection.forEach(alarm => {
				if (alarm.time === this.getCurrentFormattedTime() && alarm.canCall) {
					alarm.callback();
					alarm.canCall = false;
				}
			});
		}, 1000);
	}

	stop() {
		clearInterval(this.intervalId);
		this.intervalId = null;
	}

	resetAllCalls() {
		this.alarmCollection.forEach(alarm => (alarm.canCall = true));
	}

	clearAlarms() {
		this.stop();
		this.alarmCollection = [];
	}
}