// DeviceInfoModule.m
#import "DeviceInfoModule.h"
#import <UIKit/UIKit.h>

@implementation DeviceInfoModule


RCT_EXPORT_METHOD(getDeviceInfo:(RCTResponseSenderBlock)callback)
{
  UIDevice *device = [UIDevice currentDevice];

  // Define y obtiene los valores para las variables deviceModel,
  NSString *uniqueID = [[[UIDevice currentDevice] identifierForVendor] UUIDString];



  NSDictionary *deviceInfo = @{
                               @"model": deviceModel,
                               @"osVersion": osVersion,
                               @"batteryLevel": @(batteryLevel)
                              };

  callback(@[[NSNull null], deviceInfo]);
}

@end
