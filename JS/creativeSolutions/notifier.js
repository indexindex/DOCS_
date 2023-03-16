const notify = {
    notifications: ['download started', 'download finished', 'battery 20% left', 'battery 10% left'],
    pickNotification() {
        const { notifications } = this;
        const index = Math.floor(Math.random() * notifications.length);

        return notifications[index];
    },
    start() {
        this.timerId = setInterval(() => {
            console.log(this.pickNotification());
        }, 3000)
    },
    stop() {
        clearInterval(this.timerId);
        console.log('no more notifications!');
    }
}