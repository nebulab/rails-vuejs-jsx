Product.all.destroy_all

10.times.each do
  Product.create!(
    name: FFaker::Product.product_name,
    description: FFaker::Lorem.paragraph,
    price: rand(5.0..100.0).round(2),
  )
end
