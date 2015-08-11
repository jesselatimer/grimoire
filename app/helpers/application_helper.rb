module ApplicationHelper
  def auth_token
    html = <<-HTML
      <input type="hidden"
             name="authenticity_token"
             value="#{ form_authenticity_token }">
    HTML
    html.html_safe
  end
end
