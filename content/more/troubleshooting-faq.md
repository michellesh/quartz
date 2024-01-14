---
title: Troubleshooting & FAQ
sortPosition: 2
---


## Troubleshooting

### Searching for specific problems

There are tons of articles, forum posts, and videos out there about Arduino code and ESP32s. If you're running into a code problem try searching for the problem or error you're getting with the word "Arduino". (Even though we're uploading code to an ESP32, we're still writing in the "Arduino" programming language.)


### Code wont upload

- Try cycling power: Unplug and replug USB cable.
- Check that you have the ESP32 board selected in the Tools -> Port menu. If it is not showing up in the menu, see the next section.



### ESP32 not showing up in Port menu in Arduino IDE

- Try cycling power: Unplug and replug USB cable.
- Try a different USB cable. The cable that came with your clock should work, but strange things happen. Make sure the cable is not power-only and is data sync capable.
- The LEDs might be using too much power. Try disconnecting the LEDs from the board by opening the clock and disconnecting the plastic LED connector. Then unplug the USB from your computer and plug it back in. If this fixes it you might have uploaded code that was resulting in the LEDs using too much power, for example turning all the LEDs on white at full brightness. Try uploading new code that uses less power (eg. lower brightness, fewer LEDs on, or a lower power-consuming color like Red)
- Double check all the steps in this guide for installing the ESP32 on the Arduino IDE: [Installing ESP32 board in Arduino IDE 1](https://randomnerdtutorials.com/installing-the-esp32-board-in-arduino-ide-windows-instructions/) and [Installing ESP32 board in Arduino IDE 2](https://randomnerdtutorials.com/installing-esp32-arduino-ide-2-0/)
- You may need to install [ESP32 drivers](https://www.silabs.com/developers/usb-to-uart-bridge-vcp-drivers?tab=downloads).


### Pixels are flipped upside down or backwards

- If you are using the clock code in this repository, you might need to change the `START_PIXEL` variable from `LEDGrid::TOP_LEFT` to `LEDGrid::BOTTOM_LEFT` or vice versa. See [LED grid layout](about-the-rainbow-clock/led-grid-layout) for more details.
- You may need to open the clock and physically rotate the LED Grid. The start pixel should be on the top left or bottom left of the clock as you are looking at the front of the grid. 


## FAQ

### What programming language does Arduino use?

Arduino is its own programming language based on C and C++. The Arduino language has its own built-in functions that are specific to hardware coding like `delay()`, `pinMode()` ([see a full list of built-in functions](https://www.arduino.cc/reference/en/)) and Arduino programs must follow a specific code structure with two functions: `setup()` (which runs once at the beginning) and `loop()` (which runs over and over forever). For more details about the code structure visit this page: [Basic code and file structure](clock-code-breakdown/basic-code-and-file-structure)
