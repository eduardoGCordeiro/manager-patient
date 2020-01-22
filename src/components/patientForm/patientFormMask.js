export function handleInputName (value) {
    var letters = /^[A-Za-z]*$/;
    if (value.match(letters)) {
      this.setState({ name: value.toUpperCase() });
    }
}


export function handleInputLastName(value) {
  var letters = /^[A-Za-z]*$/;
  if (value.match(letters)) {
    this.setState({ last_name: value.toUpperCase() });
  }
}


export function handleInputAgeOfBirth(value) {
  this.setState({ age_of_birth: value});
}


export function handleInputPhone(value) {
  this.setState({ phone: value});
}


export function handleInputEmail(value) {
  this.setState({ email: value});
}


export function handleInputCpf(value) {
  this.setState({cpf: value});
}


export function handleInputIdenty(value) {
  this.setState({identy: value});
}


export function handleInputZipCode(value) {
  this.setState({zip_code: value});
}


export function handleInputAddress(value) {
  var letters = /^[A-Za-z0-9]*$/;
  if (value.match(letters)) {
    this.setState({ address: value.toUpperCase() });
  }
}


export function handleInputState(value) {
  var letters = /^[A-Za-z\s]*$/;
  if (value.match(letters)) {
    this.setState({ state: value.toUpperCase() });
  }
}


export function handleInputCity(value) {
  var letters = /^[A-Za-z]*$/;
  if (value.match(letters)) {
    this.setState({ city: value.toUpperCase() });
  }
}