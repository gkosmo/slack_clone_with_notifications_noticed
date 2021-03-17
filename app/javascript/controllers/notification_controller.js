import { Controller } from "stimulus"
import notif_subscription from "../channels/notification_channel";

export default class extends Controller {
  static targets = [ "notification" ]
  static classes = [ "dNone" ]


  connect() {
    console.log("connected notification")
  }

  markAsRead(e) {
    console.log("clicked")
    let ids = []
    this.notificationTargets.forEach((div) => {
      ids.push(div.dataset.id)
      div.classList.add(this.dNoneClass)
    })
    notif_subscription.mark_as_read(ids)

  }

}
