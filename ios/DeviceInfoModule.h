//
//  DeviceInfoModule.h
//  SeniorTestMobile
//
//  Created by Antonio Pertuz on 28/2/24.
//

#ifndef DeviceInfoModule_h
#define DeviceInfoModule_h

import <React/RCTBridgeModule.h>
@interface DeviceInfoModule : NSOBject <RCTBridgeModule>

- (void) getDeviceInfo : (RCTResponseSenderBlock)callback;

@end

#endif /* DeviceInfoModule_h */
