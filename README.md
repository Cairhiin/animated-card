# Animated Border HoC
A higher order component with animated border for React. Simply wrap your component you want to add have an animated border.

## Installation instructions
```
git clone https://github.com/Cairhiin/animated-card.git
npm install
npm run dev
```

## Examples
![image](https://user-images.githubusercontent.com/21054780/236259737-98193214-f0f5-467a-9509-db818c9b3526.png)

## Usage
Pass your component to withAnimatedBorder and pass the props you want to change.
You may change any or none of the props as all have a default fallback.

Available Props:

```
borderColor1: string
default: "blue"

borderColor2: string
default: "white"

animationDuration: string
default: "5s"

backgroundColor: string
default: "#111"

borderWith: string
default: "1px"```

## TODO
- Add support for customizable border radius (requires changing border-image as it is always square)
- Add support for customizable boxshadow
- Add a non TS version
