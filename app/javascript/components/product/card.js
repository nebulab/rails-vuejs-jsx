export default {
  name: 'ProductCard',

  props: {
    product: Object
  },

  methods: {
    shortDescription() {
      let description = this.product.description
      if (description.length > 50) {
        return `${description.substr(0, 50)}...`
      } else {
        return description
      }
    }
  },

  render() {
    return(
      <div class="col-lg-4 col-sm-6 mb-4">
        <div class="card h-100">
          <a href={this.product.url}>
            <img src={this.product.image} class="card-img-top" alt="" />
          </a>
          <div class="card-body">
            <h4 class="card-title">
              <a href={this.product.url}>
                { this.product.name }
              </a>
            </h4>
            <p class="card-text">
              { this.shortDescription() }
            </p>
          </div>
        </div>
      </div>
    )
  }
}
