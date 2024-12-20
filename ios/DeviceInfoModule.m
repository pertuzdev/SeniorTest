//
//  DeviceInfoModule.m
//  SeniorTestMobile
//
//  Created by Antonio Pertuz on 28/2/24.
//

#import <Foundation/Foundation.h>
#import "DeviceInfoModule.h"
#import <UIKit/UIKit.h>

@implementation DeviceInfoModule


RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(getDeviceInfo:(RCTResponseSenderBlock)callback) {
  UIDevice *device = [UIDevice currentDevice];
  NSString *deviceModel = [device model];
  NSString *osVersion = [device systemVersion];
  
  
  [device setBatteryMonitoringEnabled:YES];
  float batteryLevel = [device batteryLevel] * 100;
  
  
  NSDictionary *deviceInfo = @{
                               @"model": deviceModel,
                               @"osVersion": osVersion,
                               @"batteryLevel": @(batteryLevel)
                               };
  
  
  callback(@[[NSNull null], deviceInfo]);
}

@end
