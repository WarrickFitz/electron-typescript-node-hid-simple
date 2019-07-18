import * as HID from 'node-hid';

export class HidMaster {
    public getDevices(): any {
        return HID.devices();
    }
}
