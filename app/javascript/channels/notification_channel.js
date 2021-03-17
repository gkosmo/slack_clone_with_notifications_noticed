import consumer from "./consumer"

const notif_subscription = consumer.subscriptions.create("Noticed::NotificationChannel", {
  connected() {
    // Called when the subscription is ready for use on the server
  },

  disconnected() {
    // Called when the subscription has been terminated by the server
  },

  received(data) {
    // Called when there's incoming data on the websocket for this channel
    console.log(data)
    let notif_container = document.querySelector("#notif-container")
    notif_container.insertAdjacentHTML('afterbegin', data.notification_partial)
  },
  mark_as_read(data) {
      this.perform("mark_as_read", { ids: [data] })
  }
});


export default notif_subscription;
