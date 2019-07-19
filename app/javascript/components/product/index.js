import ProductCard from './card'

export default {
  name: 'ProductList',

  props: {
    products: Array
  },

  render() {
    return(
      <div>
        <h1 class="my-4">
          Products catalog
        </h1>

        <div class="row">
          {this.products.map(product => (
            <ProductCard product={product} />
          ))}
        </div>
      </div>
    )
  }
}
