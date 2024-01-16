---
title: Code simple LED grid patterns
---


This page will walk you through how to code some basic LED patterns, starting with turning on a single LED. Each pattern adds a layer of complexity onto the last, while calling out essential utility functions like `map()` and `delay()`.


## Prerequisites

- [Setup environment](write-your-own-led-code/setup-environment) steps completed (ie. you can successfully upload code to an ESP32)
  - Arduino IDE installed
  - ESP32 board added to Arduino IDE
  - FastLED library installed
- Starter code (see next section)


## Starter code

To get the starter code, go to: [rainbow-clock/starter-code.zip](https://github.com/michellesh/rainbow-clock/blob/main/starter-code.zip) and click the download icon on the far right:

<img width="800" alt="starter-code-download" src="static/starter-code-download.png" />

This will download a zip which contains two files. Once unzipped, open the folder. There should be two files in the folder: `LEDGrid.h` and `starter-code.ino`. Open the `.ino` file in the Arduino IDE.

<img width="800" alt="starter-code-ide" src="static/starter-code-ide.png" />
  
###
 
**The rest of the examples on this page will assume that all of this surrounding starter code is present. When you paste code from each example below, paste below the comment:  
`// ... code here ...` (highlighted in the above screenshot)  
Don't delete any of the other surrounding code.**

(You don't have to understand all this surrounding code to start coding some LED patterns!)

### Loop structure

The `loop()` function runs over and over forever. This loop function we're using here follows this flow: 
1. clear all the LEDs
2. run code to compute what the LEDs look like on one iteration
3. tell FastLED to send that data to the physical LEDs

```cpp
void loop() {
  FastLED.clear(); // Set all LEDs to black

  // ... code here ...

  FastLED.show(); // Tell FastLED to show your data
}
```

Assume this loop structure in all the following examples, unless otherwise specified.

## Static patterns

### Turn on one LED

<img width="500" alt="turn-on-one-led" src="static/turn-on-one-led.jpeg" />

```cpp
leds(0, 0) = CRGB::Red;
```
Paste the above code into the Arduino IDE editor where you see the comment `// ... code here ...`. (It doesn't matter if the tabs/spacing is messed up, but if you want it to look pretty, you can press `ctrl-t` on Windows or `cmd-t` on Mac to auto-format.) Then click the upload icon!

This code sets a single pixel at the (x, y) coordinate (0, 0) to Red. `CRGB::Red` is one of many pre-defined colors in the FastLED library. [See the full list of FastLED predefined colors.](http://fastled.io/docs/struct_c_r_g_b.html) Try changing `CRGB::Red` to `CRGB::Blue` or `CRGB::Green`!

> [!info] NOTE
> If the pixel that turned on is not at the bottom left, you probably need to change the `START_PIXEL` variable towards the top of the file.
> ```cpp
> #define START_PIXEL LEDGrid::TOP_LEFT // change to LEDGrid::BOTTOM_LEFT, or vice versa
> ```
> See [LED grid layout](about-the-rainbow-clock/led-grid-layout) for more details.


### Challenge!

<img width="500" alt="challenge-pattern" src="static/challenge-pattern.jpeg" />

```cpp
???
```

Now you know how to turn on a single LED at an (x, y) coordinate. Can you make the pattern in the image above? Solution [here](https://github.com/michellesh/rainbow-clock/blob/main/challenge-solution.ino).


### Turn on a row of LEDs

<img width="500" alt="turn-on-row-of-leds" src="static/turn-on-row-of-leds.jpeg" />

```cpp
for (int x = 0; x < WIDTH; x++) {
  leds(x, 2) = CRGB::Red;
}
```
  
This code loops through every value of `x` from 0 to `WIDTH` (which is 16) and sets the LED in row **2** at that x-coordinate to Red. (Detailed explanation of a `for` loop [here](https://www.arduino.cc/reference/en/language/structure/control-structure/for/).)

> [!tip] TIP
> It doesn’t matter if the tabs/spacing gets messed up, but if you want it to look pretty, you can press `ctrl-t` on Windows or `cmd-t` on Mac to auto-format, or go to Edit > Auto Format.


### Turn on every LED

<img width="500" alt="turn-on-every-led" src="static/turn-on-every-led.jpeg" />

```cpp
for (int x = 0; x < WIDTH; x++) {
  for (int y = 0; y < HEIGHT; y++) {
    leds(x, y) = CRGB::Red;
  }
}
```

A _double_ `for` loop! This one still loops through every value of x, and for each value of x, loop through every value of y from 0 to `HEIGHT` (which is 5). You can also think of `x` as column and `y` as row.


### Make up your own colors

In addition to predefined colors like `CRGB::Red`, FastLED also allows you to set colors using two color models: RGB, and HSV (aka HSL). You can define these with the respective functions `CRGB(red, green, blue)` ([CRGB documentation](http://fastled.io/docs/struct_c_r_g_b.html)) and `CHSV(hue, saturation, value)` ([CHSV documentation](http://fastled.io/docs/struct_c_h_s_v.html)).

[colorpicker.me](https://colorpicker.me) is a useful and fun tool for understanding how colors are defined and for discovering new colors! Also keep in mind that not all colors map perfectly to LEDs. For instance you might find a nice light purple on colorpicker.me, try to send its RGB values to the LEDs, and get a boring dim white-ish color.

#### RGB

Here we define three variables `red`, `green`, and `blue` and set their values between 0-255. The following code sets all LEDs to the RGB color `(9, 105, 218)` ([a rich blue color](https://colorpicker.me/#0969da))

```cpp
int red = 9;
int green = 105;
int blue = 218;
for (int x = 0; x < WIDTH; x++) {
  for (int y = 0; y < HEIGHT; y++) {
    leds(x, y) = CRGB(red, green, blue);
  }
}
```

#### HSV

`hue`, `saturation`, and `value` are all values between 0-255 in FastLED, but a typical HSV color has different ranges. Hue is usually a value 0-360 (as in 360 degrees on a color wheel), and saturation and value are usually percentages 0-100. To get the same blue color we got above as an RGB, we take the hue from [colorpicker.me](https://colorpicker.me/#0969da), which is 212 and we convert it from the 0-360 range to the 0-255 range: `212 * 255 / 360`. Similarly we take the saturation and value `92%` and `85%` and convert them to the 0-255 range: `92 * 255 / 100` and `85 * 255 / 100`.

```cpp
int hue = 212 * 255 / 360;
int saturation = 92 * 255 / 100;
int value = 85 * 255 / 100;
for (int x = 0; x < WIDTH; x++) {
  for (int y = 0; y < HEIGHT; y++) {
    leds(x, y) = CHSV(hue, saturation, value);
  }
}
```

(Note that these RGB and HSV blues might be slightly different. The RGB <> HSV conversion is not perfect. You can see this for yourself in [colorpicker.me](https://colorpicker.me) if you try increasing or decreasing the "G" or "B" values by one, sometimes the HSV stays the same. So there could be multiple RGBs for a single HSV.)


### Make a horizontal rainbow gradient

<img width="500" alt="horizontal-rainbow-gradient" src="static/horizontal-rainbow-gradient.jpeg" />

```cpp
for (int x = 0; x < WIDTH; x++) {
  for (int y = 0; y < HEIGHT; y++) {
    int hue = map(x, 0, WIDTH, 0, 255);
    leds(x, y) = CHSV(hue, 255, 255);
  }
}
```

#### How it works

This one sets each pixel to a custom `CHSV` color instead of a pre-defined color like Red. The HSV color model takes the arguments `(hue, saturation, value)`. `saturation` and `value` are both at their max of 255. We calculate the `hue` as a function of `x`. We do this with the `map()` function.

#### `map()` function

```cpp
map(value, fromLow, fromHigh, toLow, toHigh)
```

The Arduino `map()` function is a handy [built-in Arduino function](https://www.arduino.cc/reference/en/language/functions/math/map/) that lets you convert a value **from** a starting range **to** a destination range.

```cpp
int hue = map(x, 0, WIDTH, 0, 255);
```

Here, we're mapping the `x` value from it's range `0`-`WIDTH` (which is 16) to the range of a hue `0`-`255`. For example, when `x` is 2, `hue` will calculate to 32.


## Dynamic patterns

### Make one LED blink

<img width="500" alt="make-one-led-blink" src="static/make-one-led-blink.gif" />

```cpp
leds(0, 0) = CRGB::Red;   // Set the pixel to Red
FastLED.show();           // Tell FastLED to show your data
delay(1000);              // Wait 1 second (1000 milliseconds)

leds(0, 0) = CRGB::Black; // Turn the pixel off
FastLED.show();           // Tell FastLED to show your data
delay(1000);              // Wait 1 second (1000 milliseconds)
```
_NOTE_ When you paste this into the starter code under `// ...code here...` , you'll notice `FastLED.show()` gets called again after the pasted code. You can just leave that extra call in there. In this example, it doesn't need to be called again after the last `delay(1000)`, but it doesn't hurt, and it's easier to keep the same loop structure in place.

This code sets a single pixel to Red, tells FastLED to show that pixel, then uses the `delay()` function to pause for one second, then turns that LED to Black (off), show, pause.

#### `delay()` function

```cpp
delay(milliseconds)
```

The [Arduino built-in delay function](https://www.arduino.cc/reference/en/language/functions/time/delay/) pauses the program for a specified number of milliseconds before running the next line of code.


### Make a scrolling rainbow

<img width="500" alt="make-scrolling-rainbow" src="static/make-scrolling-rainbow.gif" />

```cpp
int sinBeat = beatsin8(30, 0, 255);   // 30 beats per minute, range 0-255

for (int x = 0; x < WIDTH; x++) {
  for (int y = 0; y < HEIGHT; y++) {
    int hue = map(x, 0, WIDTH, 0, 255);  // map the current x from 0-WIDTH to a hue in the range 0-255
    leds(x, y) = CHSV(sinBeat + hue, 255, 255);  // add a sine wave to hue to make it oscillate
  }                                                                                         
}   
```

#### How it works

This one creates a sine wave using `beatsin8()` to get a value that oscillates between a given range over "time" (ie. as the loop gets called over and over). It uses that sine wave to offset the hue, so that the hue at a given column is changing, creating the illusion that the whole picture is moving back and forth.


#### `beatsin8()` function

```cpp
int sinBeat = beatsin8(30, 0, 255);   // 30 beats per minute, range 0-255 
```

The `beatsin8` function is a [FastLED beat generator](https://github.com/FastLED/FastLED/blob/master/src/lib8tion.h#L353-L367) which returns a sine wave in a specified Beats Per Minute, and with a specified low and high range for the output. The `8` stands for an 8-bit value, meaning the number can range from as low as 0 to as high as 255. The range of a hue is also 0-255 so we will utilize that whole range.


#### 8-bit integers

```cpp
CHSV(sinBeat + hue, 255, 255);
```

Let's talk about why this `sinBeat + hue` part works. 
- The `sinBeat` variable we've already defined as a number oscillating in the range 0-255
- The `hue` variable is calculated as a function of `x` and converted to a number in the range 0-255. So when `x` is 2, `hue` is 32 ([red-ish-orange](https://colorpicker.me/#ff8800)) 
- The sum `sinBeat + hue` is passed into the first argument of the `CHSV` function. According to the [documentation](http://fastled.io/docs/struct_c_h_s_v.html), the hue variable is a type `uint8_t` - an 8-bit number from 0-255. (Unlike an `int` variable which can be anywhere in the range -2,147,483,648 to 2,147,483,647) So what happens if we pass in 256? It will wrap around to the beginning and turn into 0. This will always happen when you set any `uint8_t` variable to 256. Similarly 257 will be 1, 258 will be 2, etc.
- Example: if we look at only the 3rd column of the grid, where `x` = 2, `hue` becomes 32 ([red-ish-orange](https://colorpicker.me/#ff8800)), then we add `sinBeat` which oscillates between 0-255, making the sum oscillate between 32-287, but 287 wraps around to 32. So the color at that columns is oscillating from red-ish-orange, to the end of the rainbow, wraps to the beginning, then to 32, then reverses all the way back.



## What's next

I believe the best way to learn programming is to try changing the code, running it, and seeing what happens. Get curious about what would happen if you change this variable to that, move this line of code there, etc. And see what happens! Sometimes it looks terrible! Sometimes it turns out different than expected, and sometimes that even leads to a new idea. :) What designs can you create? What colors did you make up? What’s the RGB code for your favorite color? Can you make some animations?

**I would LOVE to see your creations. Post them on Instagram and tag [@mickymakes.art!](https://www.instagram.com/mickymakes.art/)**


## Troubleshooting & FAQ

I've compiled a few issues on the [Troubleshooting & FAQ](more/troubleshooting-faq) page, and I'll add to that page over time as I collect feedback about issues users run into!


## How to re-upload the original clock code

If you've uploaded your own code to the Rainbow Clock and you want to go back to using it as a clock, this page will walk you through how to upload the original clock code: [How to re-upload the original clock code](write-your-own-led-code/how-to-re-upload-the-original-clock-code)
