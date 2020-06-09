/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

#import "AppDelegate.h"
#import "RNFirebaseNotifications.h"

#import <React/RCTBridge.h>
#import <React/RCTBundleURLProvider.h>
#import <React/RCTRootView.h>
#import <Firebase.h>
// @import GoogleMobileAds;

@implementation AppDelegate

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
  [FIRApp configure];
  [RNFirebaseNotifications configure];
  RCTBridge *bridge = [[RCTBridge alloc] initWithDelegate:self launchOptions:launchOptions];
  RCTRootView *rootView = [[RCTRootView alloc] initWithBridge:bridge
                                                   moduleName:@"IA_VIPCHATTING_APP"
                                            initialProperties:nil];

  rootView.backgroundColor = [[UIColor alloc] initWithRed:1.0f green:1.0f blue:1.0f alpha:1];

  self.window = [[UIWindow alloc] initWithFrame:[UIScreen mainScreen].bounds];
  UIViewController *rootViewController = [UIViewController new];
  rootViewController.view = rootView;
  self.window.rootViewController = rootViewController;
  // [GADMobileAds configureWithApplicationID:@"ca-app-pub-4348467959160099~9161989550"];
  [self.window makeKeyAndVisible];
  return YES;
}

- (void)application:(UIApplication *)application didReceiveLocalNotification:(UILocalNotification *)notification {
  [[RNFirebaseNotifications instance] didReceiveLocalNotification:notification];
}

// 아래 두개 (void)applica~ 캡쳐 방지
- (void)applicationWillResignActive:(UIApplication *)application {
  // fill screen with our own colour
  UIView *colourView = [[UIView alloc]initWithFrame:self.window.frame];
  colourView.backgroundColor = [UIColor whiteColor];
  colourView.tag = 1234;
  colourView.alpha = 0;
  [self.window addSubview:colourView];
  [self.window bringSubviewToFront:colourView];

  // fade in the view
  [UIView animateWithDuration:0.5 animations:^{
    colourView.alpha = 1;
  }];
}

- (void)applicationDidBecomeActive:(UIApplication *)application {
  // grab a reference to our coloured view
  UIView *colourView = [self.window viewWithTag:1234];
  // fade away colour view from main view
  [UIView animateWithDuration:0.5 animations:^{
    colourView.alpha = 0;
  } completion:^(BOOL finished) {
    // remove when finished fading
    [colourView removeFromSuperview];
  }];
}

- (NSURL *)sourceURLForBridge:(RCTBridge *)bridge
{
#if DEBUG
  return [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index" fallbackResource:nil];
#else
  return [[NSBundle mainBundle] URLForResource:@"main" withExtension:@"jsbundle"];
#endif
}

@end
