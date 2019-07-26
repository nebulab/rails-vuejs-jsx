json.id product.id
json.name product.name
json.description product.description
json.image url_for(product.image)
json.url product_path(product)
json.comments product.comments do |comment|
  json.partial! 'serializers/comment', comment: comment
end
