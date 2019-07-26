json.array! comments do |comment|
  json.partial! 'serializers/comment', comment: comment
end
