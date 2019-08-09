export default {
  props: {
    errors: Array,
    type: String
  },

  methods: {
    alertClass() {
      return ['alert', `alert-${this.type}`].join(' ')
    }
  },

  render() {
    return(
      this.errors.length > 0 &&
      <div class={this.alertClass()} role="alert">
        <ul class="list-group list-group-flush">
          {this.errors.map((error) => (
            <li class="list-group-item">
              { error }
            </li>
          ))}
        </ul>
      </div>
    )
  }
}
