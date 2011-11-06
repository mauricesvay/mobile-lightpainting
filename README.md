# Mobile Light Painting

## Author

* Maurice Svay <maurice@svay.com>, [http://svay.com](http://svay.com)

## About

Mobile Light Painting is a javascript app for light painting in real-life and in your browser. The app isn't very accurate, but it's simple and does the trick. I'd love to see someone implement real physics in it.

## Requirements
To light paint in your browser, you need:

* 1 mobile phone with browser that supports the Device Motion API (without gravity). The iPhone with iOS5 is a great candidate.
* 1 browser with `<canvas>` support. It must also [work with Socket.io](http://socket.io/#browser-support).
* 1 node.js server (with socket.io and express) to make them communicate

## How to use
Launch the server:

    node lightpainting-server.js
It will then listen on the port 8080 (change to another port if it fails).

* On your mobile, open `http://your_ip_address:8080/` in your browser. You should see a yellow page, and start sending acceleration values to the server.
* On your desktop, open `http://your_ip_address:8080/viewer` in your browser.
* Now, the movement of the mobile phone should be transmitted to your desktop browser and __let you light paint!__



## Simplified BSD License

    Copyright 2011 Maurice Svay. All rights reserved.
    
    Redistribution and use in source and binary forms, with or without modification, are
    permitted provided that the following conditions are met:
    
       1. Redistributions of source code must retain the above copyright notice, this list of
          conditions and the following disclaimer.
    
       2. Redistributions in binary form must reproduce the above copyright notice, this list
          of conditions and the following disclaimer in the documentation and/or other materials
          provided with the distribution.
    
    THIS SOFTWARE IS PROVIDED BY Maurice Svay ''AS IS'' AND ANY EXPRESS OR IMPLIED
    WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND
    FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL Maurice Svay OR
    CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
    CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
    SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON
    ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
    NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF
    ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
    
    The views and conclusions contained in the software and documentation are those of the
    authors and should not be interpreted as representing official policies, either expressed
    or implied, of Maurice Svay.
