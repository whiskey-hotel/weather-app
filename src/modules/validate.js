class Validate {
  constructor(form) {
    this.form = form;
    this.searchBar = form.elements.searchBar;
  }

  isMissing(err) {
    if (this.searchBar.validity.valueMissing) {
      err.push('Must input a location');
    }
    return err;
  }

  get city() {
    const errorArray = [];
    this.isMissing(errorArray);
    if (errorArray.length < 0) {
      return this.searchBar.value;
    }
    return errorArray;
  }
}

export default Validate;
