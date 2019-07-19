json.array! products do |product|
  json.partial! 'serializers/product', product: product
end
