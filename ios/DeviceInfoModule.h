//
//  DeviceInfoModule.h
//  SeniorTestMobile
//
//  Created by Antonio Pertuz on 28/2/24.
//

#import <React/RCTBridgeModule.h>

@interface DeviceInfoModule : NSObject <RCTBridgeModule>
- (void) getDeviceInfo : (RCTResponseSenderBlock)callback;
@end


