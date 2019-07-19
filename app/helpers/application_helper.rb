module ApplicationHelper
  def serialize(template, options = {})
    JbuilderTemplate
      .new(self) { |json| json.partial! template, options }.attributes!
  end
end
