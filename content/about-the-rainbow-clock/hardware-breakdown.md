---
title: Hardware breakdown
---


![clock_hardware](static/wiring-photo.jpeg)


### Materials

- 3D printed hingebox (black) and screen (white)
- [ESP32](https://amzn.to/44QzE8E)
- [LED Matrix](https://amzn.to/3DmqTY9)
- [On/off switch](https://amzn.to/44wojKZ)
- [Button](https://amzn.to/3NY1wAT)
- [Data sync micro USB cable](https://amzn.to/3rvTiIy)


### Wiring Diagram

<p align="center">
  <img alt="schematic" src="static/wiring-diagram.jpeg"/>
</p>

| ESP32 | Button | LED Grid                  |
| ----- | ------ | ------------------------- |
| Vin   |        | Power (via on/off switch) |
| GND   |        | GND                       |
| GND   | pin 1  |                           |
| D13   |        | Data                      |
| D15   | pin 2  |                           |

> [!info] NOTE
> The on/off switch only turns off power to the LEDs, not the whole system. So if you turn the switch off and leave the USB cable plugged in, the ESP32 board will still be powered, and it will still keep accurate time.
