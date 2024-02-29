package com.seniortestmobile

import android.content.Context
import com.facebook.react.bridge.NativeModule
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import com.facebook.react.bridge.Callback
import android.os.Build
import android.os.BatteryManager
import com.facebook.react.bridge.Arguments
import com.facebook.react.bridge.WritableMap

class DeviceInfoModule(reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {
    override fun getName(): String {
        return "DeviceInfoModule"
    }

    @ReactMethod
    fun getDeviceInfo(callback: Callback) {
        val deviceModel = Build.MODEL
        val osVersion = Build.VERSION.RELEASE

        val batteryManager = reactApplicationContext.getSystemService(Context.BATTERY_SERVICE) as BatteryManager
        val batteryLevel = batteryManager.getIntProperty(BatteryManager.BATTERY_PROPERTY_CAPACITY)

        val deviceInfo: WritableMap = Arguments.createMap()
        deviceInfo.putString("model", deviceModel)
        deviceInfo.putString("osVersion", osVersion)
        deviceInfo.putInt("batteryLevel", batteryLevel)


        callback.invoke(null, deviceInfo)
    }
}