after :products do
  Product.all.each_with_index do |product, index|
    downloaded_image = open("http://placekitten.com/700/400?image=#{index}")
    product.image.attach(io: downloaded_image, filename: "product_image_#{product.id}.jpeg")
  end
end
