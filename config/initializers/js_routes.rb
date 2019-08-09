# frozen_string_literal: true

JsRoutes.setup do |config|
  config.include = [
    /^api_comment$/,
    /^api_product_comments$/,
  ]
end
