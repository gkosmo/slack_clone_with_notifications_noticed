# To deliver this notification:
#
# MessageNotification.with(post: @post).deliver_later(current_user)
# MessageNotification.with(post: @post).deliver(current_user)

class MessageNotification < Noticed::Base
  # Add your delivery methods
  #
  deliver_by :database
  deliver_by :action_cable, format: :to_action_cable
  # deliver_by :email, mailer: "UserMailer"
  # deliver_by :slack
  # deliver_by :custom, class: "MyDeliveryMethod"

  # Add required params
  #
  # param :post

  # Define helper methods to make rendering easier.
  #
  def message_to_html
    message = params[:message]
    ApplicationController.new.render_to_string(
      partial: "shared/notification",
      locals: { message: message, notification: record }
    )
  end

  def to_action_cable
    {
      notification_partial: message_to_html
    }
  end
  #
  # def url
  #   post_path(params[:post])
  # end
end
