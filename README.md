# rainbow-console-log 🌈

Put some joy into your console.log (web browser console panel)

## install ##
```
yarn add rainbow-console-log
```
or
```
npm i rainbow-console-log
```

## init ##

```
import rainbowConsoleLog from 'rainbow-console-log';

rainbowConsoleLog();
```

## usage ##
Once inited, your `console.log` function is **overwritten**, no need to change your code :
```
console.log('hello joy');
```

## demo ##

[Live example](https://rainbow-console-log.herokuapp.com/)

[<img src="example/screenshot.png" width="350" alt=""/>](https://rainbow-console-log.herokuapp.com/)


### What happens to other types ? ###
When you log a value that is not a `string` (object, number...) it will be displayed as usual (not colored).
If you log several values in the same came, it will not just add spaces between each as usual but it will create a new line for each for more colors 🌈
