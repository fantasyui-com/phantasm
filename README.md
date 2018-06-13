# phantasm
Opinionated box-shadow compiler for CSS Art. [CSS, Library]

## About
Conversion of JSON data into CSS is reusable in two major instances. The build tool and the CSS metadata library.

- Build tools are many, for example a HUE manipulation library will first alter
RGB information and then use phantasm to output the CSS code. Another build tool
may for example resize the color bands and yet another add more shadows.

- The package or repository storing the JSON data containing color information will
greatly benefit from containing a one line JSON to CSS function/feature that recompiles
the color data into CSS.

## Data and Scope

phantasm works on class level the code below will return .productname-a {...} CSS code.

```JavaScript

{
  "id": "a",
  "name": "neon",
  "shadows":[
    {"offsetX":0, "offsetY":0, "blurRadius":1, "spreadRadius":5, "color":[254,239,152,1]},
    {"offsetX":0, "offsetY":0, "blurRadius":1, "spreadRadius":5, "color":[186,1,44,1]},
    {"offsetX":0, "offsetY":0, "blurRadius":1, "spreadRadius":5, "color":[107,1,31,1]},
    {"offsetX":0, "offsetY":0, "blurRadius":1, "spreadRadius":5, "color":[78,2,25,1]},
    {"offsetX":0, "offsetY":0, "blurRadius":1, "spreadRadius":5, "color":[72,0,42,1]},
    {"offsetX":0, "offsetY":0, "blurRadius":1, "spreadRadius":5, "color":[97,7,55,1]},
    {"offsetX":0, "offsetY":0, "blurRadius":1, "spreadRadius":5, "color":[107,8,92,1]},
    {"offsetX":0, "offsetY":0, "blurRadius":1, "spreadRadius":5, "color":[108,12,149,1]},
    {"offsetX":0, "offsetY":0, "blurRadius":1, "spreadRadius":5, "color":[100,34,192,1]},
    {"offsetX":0, "offsetY":0, "blurRadius":1, "spreadRadius":5, "color":[98,30,194,1]}
  ]
}

```

Will result in similar output.

```CSS

.creamy-a {
  box-shadow: 0 0 0px 10px rgba(255, 0, 0,1), 0 0 0px 20px rgba(0, 255, 0,1), 0 0 0px 30px rgba(0, 0, 255,1); //...
}

```
