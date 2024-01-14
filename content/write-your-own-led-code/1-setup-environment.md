---
title: Setup environment
sortPosition: 1
---


In order to upload your own LED code to the Rainbow Clock, you'll need to install some software. This page will walk you through installing and setting up the software needed.


## 1. Download and install the Arduino IDE

Arduino IDE has two versions, Arduino IDE 2 and Legacy IDE (1.8.X). I recommend the newer version because it's nicer and fancier! But the newer one does have operating system requirements, so the old version is great too if your operating system is too outdated for the new one.
 
- [Arduino IDE 2 software download page](https://www.arduino.cc/en/software#future-version-of-the-arduino-ide) (recommended!)
  - Also if you want: [Arduino's step-by-step guide on downloading and installing Arduino IDE 2!](https://docs.arduino.cc/software/ide-v2/tutorials/getting-started/ide-v2-downloading-and-installing)
- [Legacy IDE (1.8.X) software download page](https://www.arduino.cc/en/software#legacy-ide-18x)

Once you have the Arduino IDE installed, start it, and it should look like this:

<img width="800" src="static/download-and-install.png" />


You now have the Arduino IDE installed!
 

## 2. Add the ESP32 board within the Arduino IDE

Now that you have the Arduino IDE, you'll need to install the ESP32 board add-on within the IDE. (An ESP32 is a microprocessor just like an Arduino. The IDE comes ready to upload code to Arduino boards, but the ESP32 boards are special and need to be added separately.)

The steps and screenshots below are copied directly from this guide: [Installing ESP32 Board in Arduino IDE 2](https://randomnerdtutorials.com/installing-esp32-arduino-ide-2-0/) except below I took all my own screenshots.

(If you have Legacy IDE 1.8.X, the steps are the exact same, but the screenshots won't quite match. Here's a guide specifically for Legacy IDE: [Installing ESP32 Board in Legacy Arduino IDE 1](https://randomnerdtutorials.com/installing-the-esp32-board-in-arduino-ide-windows-instructions/))

To add ESP32 to Arduino IDE:


### 2a. Open Preferences

Go to `File > Preferences` for Windows users. For Mac users: `Arduino IDE > Preferences`.

<img width="800" src="static/open-preferences.png" />


### 2b. Paste this link

Copy and paste the following line to the **Additional Boards Manager URLs** field. Press "OK" to confirm.

```
https://raw.githubusercontent.com/espressif/arduino-esp32/gh-pages/package_esp32_index.json
```

<img width="800" src="static/paste-link.png" />


_Note:_ if you already have the ESP8266 boards URL, you can separate the URLs with a comma, as follows:

```
http://arduino.esp8266.com/stable/package_esp8266com_index.json, https://raw.githubusercontent.com/espressif/arduino-esp32/gh-pages/package_esp32_index.json
```


### 2c. Open the Boards Manager

On the left side, click the Boards Manager icon. (Or you can go to `Tools > Board > Boards Manager...`)

<img width="800" src="static/open-boards-manager.png" />


### 2d. Search ESP32, Install

Type "ESP32" in the search field. Locate **esp32** by Espressif Systems. Click Install. (This screenshot has a "Remove" button because I already installed it.)

<img width="800" src="static/search-esp32.png" />

You now have the ESP32 board added!


## 3. Install LED and Time libraries from the Arduino libraries manager

The rainbow clock code uses two libraries:
- [FastLED](https://github.com/FastLED/FastLED): For controlling addressable LEDs.
- [ESP32Time](https://github.com/fbiego/ESP32Time): For setting and retrieving internal RTC (Real Time Clock) time on ESP32 boards.

Conveniently, you can install these libraries using the Arduino IDE!


### 3a. Open Arduino library manager

On the left side, click the Library Manager icon. (Or you can go to `Tools > Manage Libraries`.)

<img width="800" src="static/open-arduino-library-manager.png">


### 3b. Search for "FastLED". Find **FastLED** by **Daniel Garcia**. Click Install.

<img width="800" src="static/search-fastled.png" />


### 3c. Search for "ESP32Time". Find **ESP32Time** by **fbiego**. Click Install.

<img width="800" src="static/search-esp32time.png" />


## 4. Test uploading code to the Rainbow Clock

To make sure you have everything set up correctly, we'll upload some test code to the Rainbow Clock's ESP32 board. This test code prints the words "hello world!" every 1 second to the Serial monitor.

(Again, these steps and screenshots are copied from [this guide](https://randomnerdtutorials.com/installing-esp32-arduino-ide-2-0), except with different test code.)


### 4a. Paste this test code

In the main text area, delete all the pre-filled code, and paste the following.

```cpp
void setup() {
  Serial.begin(9600);
  delay(500);
}

void loop() {
  Serial.println("hello world!");
  delay(1000);
}
```


### 4b. Select your board

Make sure your Rainbow Clock is plugged into your computer. On the top drop-down menu, click the "Select Board" dropdown. Click **Select other board and port...**

<img width="800" src="static/select-your-board.png" />

A new window will open:

<img width="800" src="static/board-and-port-window.png" />

Under "BOARDS" on the left, type "esp32 dev module" to filter, and then select **ESP32 Dev Module**. 

Under "PORTS" on the right, select your board. It may have a different name other than `COM`, like `/dev/cu.SLAB_USBtoUART`, or `/dev/cu.usbserial-0001`. If you're not sure which one to select, unplug the Rainbow Clock from your computer, then plug it back in, and see which option appears.

Click "OK" to confim.


### 4c. Click the upload button

<img width="800" src="static/click-upload-button.png" />

At this step, your computer might prompt you to download and install python3. You'll need to allow it, as python is needed to upload to ESP32 boards. If you're getting stuck on this step, [this guide](https://exploreembedded.com/wiki/Arduino_Setup_for_ESP32) has more detailed steps regarding python.


### 4d. Open the serial monitor to see the output

Verify that the code is running on the Rainbow Clock's ESP32 by opening the Serial Monitor. `Tools > Serial Monitor`

<img width="800" src="static/open-serial-monitor.png">

(If you see text but it's random characters/jargon, make sure you select "9600 baud" on the bottom right of the serial monitor. 9600 should be the default.)

<img width="800" src="static/hello-world-output.png" />

If you see "hello world!" printing every 1 second in your Serial monitor, it's working! YOU DID IT! :) It might not be obvious, but this "hello world" code is running on your Rainbow Clock's ESP32. 

Now that you know how to upload code to the Rainbow Clock, you can start writing your more fun LED code!

Go to the next section! [Code simple LED grid patterns](https://github.com/michellesh/rainbow-clock/wiki/Code-simple-LED-grid-patterns)

