const shapePreview = document.getElementById('shape-preview');
const cssValueDisplay = document.getElementById('css-value');

const rangeInputs = {
  topLeft: document.getElementById('top-left'),
  topRight: document.getElementById('top-right'),
  bottomRight: document.getElementById('bottom-right'),
  bottomLeft: document.getElementById('bottom-left'),
};

function updateShapeRadius() {
  const topLeft = rangeInputs.topLeft.value;
  const topRight = rangeInputs.topRight.value;
  const bottomRight = rangeInputs.bottomRight.value;
  const bottomLeft = rangeInputs.bottomLeft.value;

  const borderRadius = `${topLeft}% ${topRight}% ${bottomRight}% ${bottomLeft}%`;
  shapePreview.style.borderRadius = borderRadius;
  cssValueDisplay.textContent = `border-radius: ${borderRadius};`;
}

Object.values(rangeInputs).forEach(input => {
  input.addEventListener('input', updateShapeRadius);
});

updateShapeRadius();
