module.exports = function(object, options){


  let createBoxShadow = function(i){
    // i = {"offsetX":0, "offsetY":0, "blurRadius":1, "spreadRadius":5, "color":[254,239,152,1]},
    const { offsetX, offsetY, blurRadius, spreadRadius, color } = i
    const [red, green, blue, alpha] = color;
    const cssColor = `rgba(${red}, ${green}, ${blue}, ${alpha})`
    return `${offsetX}px ${offsetY}px ${blurRadius}px ${spreadRadius}px ${cssColor}`;
  };

  let payload = object.shadows
  .map(i=>createBoxShadow(i))
  .join(", ") // list of 0 0 0px 10px rgba(255, 0, 0,1),
  const [red, green, blue, alpha] = object.background;
  let response = `.${options.name}-${object.id} { background: rgba(${red}, ${green}, ${blue}, ${alpha}); box-shadow: ${payload} }`

  return response;

}
