const controles = document.querySelector('#controles');
const cssText = document.querySelector('.css');
const btn = document.querySelector('.btn');
controles.addEventListener('change', handleChange)


const handleStyle = {
  element: btn,
  height(value) {
    this.element.style.height = value + 'px'
  },
  width(value) {
    this.element.style.width = value + 'px'
  },
  backgroundColor(value) {
    this.element.style.backgroundColor = value
  },
  texto(value) {
    this.element.innerText = value
  },
  border(value) {
    this.element.style.border = value
  },
  borderRadius(value) {
    this.element.style.borderRadius = value + '%'
  },
  fontSize(value) {
    this.element.style.fontSize = value + 'px'
  },
  color(value) {
    this.element.style.color = value
  },
  fontFamily(value) {
    this.element.style.fontFamily = value
  }
}






function handleChange(event) {
  const name = event.target.name;
  const value = event.target.value;

  handleStyle[name](value);

  showCss()
  saveValues(name, value)
}


function saveValues(name, value) {
  localStorage[name] = value
}
function setValues() {
  const properties = Object.keys(localStorage);
  properties.forEach(property => {
    handleStyle[property](localStorage[property])
    controles.elements[property].value = localStorage[property]
  })
  showCss();
}

setValues();



function showCss() {
  cssText.innerHTML = '<span>' + btn.style.cssText.split('; ').join('<span></span>')
}  