export function handleInputName (value) {
    var letters = /^[A-Za-z]*$/;
    if (value.match(letters)) {
      this.props.addChanges('name', value.toUpperCase());
    }
}


export function handleInputLastName(value) {
  var letters = /^[A-Za-z]*$/;
  if (value.match(letters)) {
    this.props.addChanges('last_name', value.toUpperCase());
  }
}


export function handleInputAgeOfBirth(value) {
  this.props.addChanges('age_of_birth', value);
}


export function handleInputPhone(value) {
  this.props.addChanges('phone', value);
}


export function handleInputEmail(value) {
  this.props.addChanges('email', value);
}


export function handleInputCpf(value) {
  this.props.addChanges('cpf', value);
}


export function handleInputIdenty(value) {
  this.props.addChanges('identy', value);
}


export function handleInputZipCode(value) {
  this.props.addChanges('zip_code', value);
}


export function handleInputAddress(value) {
  var letters = /^[A-Za-z0-9]*$/;
  if (value.match(letters)) {
    this.props.addChanges('address', value.toUpperCase());
  }
}


export function handleInputState(value) {
  var letters = /^[A-Za-z\s]*$/;
  if (value.match(letters)) {
    this.props.addChanges('state', value.toUpperCase());
  }
}


export function handleInputCity(value) {
  var letters = /^[A-Za-z]*$/;
  if (value.match(letters)) {
    this.props.addChanges('city', value.toUpperCase());
  }
}