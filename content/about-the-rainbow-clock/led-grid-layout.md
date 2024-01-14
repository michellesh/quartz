---
title: LED grid layout
---


Since this grid was originally a [16x16 pixel matrix](https://amzn.to/3DmqTY9) that was cut into three 5x16 pixel sub-grids, one of the sub-grids has a different starting pixel and different arrangement of LEDs.

Original 16x16 Grid | LED Arrangement Diagram
:---:|:---:
<img src="static/led-subgrids-photo.jpeg" width="480"/>  |  <img src="static/led-subgrids-annotated-photo.jpeg" width="480"/>


### Set your starting pixel in the code

Your grid's starting pixel should be on either the **bottom left** or the **top left** (looking at the front of the pixels). You can open your clock to see which pixel the wires are soldered to. 

In the main file [rainbow-clock.ino](https://github.com/michellesh/rainbow-clock/blob/main/rainbow-clock/rainbow-clock.ino), there is a variable `START_PIXEL`. This variable needs to be set to `LEDGrid::BOTTOM_LEFT` or `LEDGrid::TOP_LEFT`

```cpp
#define START_PIXEL LEDGrid::BOTTOM_LEFT  // or LEDGrid::TOP_LEFT

LEDGrid leds(WIDTH, HEIGHT, START_PIXEL);
```


### Sub-grids with `BOTTOM_LEFT` start pixel

<p align="center">
  <img alt="subgrid_type2_diagram" src="static/subgrid-diagram-top.jpeg" width="800" />
</p>

Some grids have the wires soldered directly to the flat part on the back. These have the `BOTTOM_LEFT` start pixel. 

<p align="center">
  <img alt="subgrid_type1_diagram_back" src="static/subgrid-diagram-middle.jpeg" width="800" />
</p>



### Sub-grids with `TOP_LEFT` start pixel

<p align="center">
  <img alt="subgrid_type3_diagram" src="static/subgrid-diagram-bottom.jpeg" width="800" />
</p>
