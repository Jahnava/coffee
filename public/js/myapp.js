function set()
{
  //get all elements with the id "cssProperty" (all the dropdowns) and log them out in the console.
  let elements =
  document.getElementsByName('cssProperty');

  for( let index = 0; index < elements.length; index++
  )
  {
    let cssProperty = elements[ index ].getAttribute('id');

    let cssValue = elements[ index ].value;

    let div = document.getElementById('modify');

    div.style[ cssProperty ] = cssValue;
  }
}

//target button with id "set" and add event listener "click". so when it's clicked it sets.
document.getElementById('set').addEventListener('click', set)
