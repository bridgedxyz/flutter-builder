# flutter-builder
flutter widget builder for nodejs
> flutter-builder uses *[dynamic](https://github.com/bridgedxyz/dynamic)* for handling dynamic configurable data such as button action handling.

## Installation
``` sh
yarn add flutter-builder
```

## How to use

```ts

const text = new Text("this is written in typescript", {textStyle: new TextStyle(color: Colors.black)})
console.log(text.build().toString())

// >>
// Text("this is written in typescript", textStyle: TextStyle(color: Colors.black))

```


## flutter code export

[Widget catalog](https://flutter.dev/docs/development/ui/widgets)

[widgets library](https://api.flutter.dev/flutter/widgets/widgets-library.html)

[Material Components widgets](https://flutter.dev/docs/development/ui/widgets/material)

widget supported

### Core

- Gradient
- RadialGradient
- Radius
- EdgeInsets
- ✅ Color
- ✅ Icon
- ✅ IconData
- Image → XImage

### Basics

- ✅ Container
    - ✅ BoxDecoration
- ✅ SizedBox
- ✅ Column
- ✅ Row
- Stack
- Positioned
- Align
- Text
    - DefaultTextStyle
- RichText
- Padding
- Center
- Clip
    - ClipRRect
    - ClipRect
    - ClipOval
    - ClipPath
- Expanded
- Flex
- Flexible
- Opacity
- GestureDetector
- Placeholder
- ✅ Spacer
- Transform
- Wrap

### Later

- FittedBox
- Form

### Interactive

- FormField

### Layouts

- ListView
    - horizontal
    - vertical
- GirdView
    - horizontal
    - vertical

### MISC

- ErrorWidget
- MediaQuery
