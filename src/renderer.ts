// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

    // import * as HID from 'node-hid';
    // // console.log("node-hid loaded: devices:", HID.devices());
    // console.log("node-hid loaded: devices: DUMMY");
    // // var HID = require('node-hid');
    // console.log("node-hid loaded: devices:", HID.devices());

    import {HidMaster}  from './HidMaster'
    let i = new HidMaster();
    console.log(i.getDevices());