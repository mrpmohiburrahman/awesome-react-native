"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3169],{3877:e=>{e.exports=JSON.parse('{"archive":{"blogPosts":[{"id":"bottom-sheet-v4","metadata":{"permalink":"/awesome-react-native/blog/bottom-sheet-v4","source":"@site/blog/2021-08-30-bottom-sheet-v4.mdx","title":"BottomSheet v4 is here!","description":"BottomSheet v4 comes with rewritten implementation to provide more stability, performance, and more features.","date":"2021-08-30T00:00:00.000Z","tags":[{"label":"v4","permalink":"/awesome-react-native/blog/tags/v-4"}],"readingTime":2.94,"hasTruncateMarker":false,"authors":[{"name":"Mo Gorhom","title":"Author","url":"https://github.com/gorhom","image_url":"https://github.com/gorhom.png","imageURL":"https://github.com/gorhom.png"}],"frontMatter":{"title":"BottomSheet v4 is here!","description":"BottomSheet v4 comes with rewritten implementation to provide more stability, performance, and more features.","slug":"bottom-sheet-v4","authors":[{"name":"Mo Gorhom","title":"Author","url":"https://github.com/gorhom","image_url":"https://github.com/gorhom.png","imageURL":"https://github.com/gorhom.png"}],"tags":["v4"],"keywords":["bottomsheet","bottom-sheet","bottom sheet","react-native","react native","ios","android","sheet","modal","presentation modal","reanimated"],"image":"/img/bottom-sheet-preview.gif","hide_table_of_contents":false},"unlisted":false},"content":"import useBaseUrl from \\"@docusaurus/useBaseUrl\\";\\nimport { Video } from \\"@site/components/video\\";\\n\\nToday I am releasing the `BottomSheet v4`, with a rewritten implementation to provide more stability, performance, and more features.\\n\\n## Features\\n\\nIn this release, I have rewritten the implementation to 100% utilize `Reanimated v2` hooks and variables instead of using the JS once. This allows for more customization and provides more stability overall.\\n\\n### Keyboard Handling\\n\\n<Video\\n  title=\\"React Native Bottom Sheet Keyboard Handling\\"\\n  url={useBaseUrl(\\"video/bottom-sheet-keyboard-handling-preview.mp4\\")}\\n/>\\n\\nKeyboard handling was released with `v3`, however, there were some issues that pushed this release. Now the keyboard handling is enabled by default and provides more options to customize the behavior, a new prop `android_keyboardInputMode` is introduced to handle the `Android` keyboard appearance config `windowSoftInputMode`.\\n\\nRead more about [Keyboard Handling](/keyboard-handling).\\n\\n### Pull to Refresh\\n\\n<Video\\n  title=\\"React Native Bottom Sheet Pull to Refresh\\"\\n  url={useBaseUrl(\\"video/bottom-sheet-pull-to-refresh-preview.mp4\\")}\\n/>\\n\\nOne of the earliest feature request that was submitted to repo [Pull to refresh](https://github.com/gorhom/react-native-bottom-sheet/issues/66) by [gudberg](https://github.com/gudberg). There was an attempt to implement it on `v3` & `v2` but I was hit with their limitations, until now.\\n\\nThis feature is enabled by default, users need to provide `refreshing` & `onRefresh` to any of the [Scrollables](/scrollables) and voila!\\n\\nRead more about [Pull to Refresh](/pull-to-refresh).\\n\\n### Detach Sheet / Modal\\n\\n<Video\\n  title=\\"React Native Bottom Sheet Detach Modal\\"\\n  url={useBaseUrl(\\"video/bottom-sheet-detach-preview.mp4\\")}\\n/>\\n\\nAnother powerful addition to `BottomSheet` & `BottomSheetModal` is the ability to detach the sheet from the bottom - so no more bottom sheet \ud83d\ude05 -, which allows users to come up with lots of creative choices and customization to the sheet position.\\n\\nRead more about [Detach Sheet / Modal](/detach-modal).\\n\\n### Footer Component\\n\\n<Video\\n  title=\\"React Native Bottom Sheet Custom Footer\\"\\n  url={useBaseUrl(\\"video/bottom-sheet-footer-preview.mp4\\")}\\n/>\\n\\nLastly, I have added a new prop `footerComponent` to `BottomSheet` & `BottomSheetModal` to allow users to stick their custom component to the bottom of the sheet even when the keyboard is shown.\\n\\nRead more about [Footer Component](/custom-footer).\\n\\n## Breaking changes\\n\\n#### Removed\\n\\n- Removed `animationEasing` from `BottomSheet` props.\\n- Removed `animationDuration` from `BottomSheet` props.\\n- Removed `closeOnPress` from `BottomSheetBackdrop` props.\\n- Removed `dismissOnClose` from `BottomSheetModal` props.\\n- Removed `enableFlashScrollableIndicatorOnExpand` from `BottomSheet` props.\\n\\n#### Changes\\n\\n- `snapPoints` prop is no longer accepting `0` as a value.\\n- `animateOnMount` props default value is `true`\\n\\n## Changelog\\n\\nHere are the highlight change log of `v4`\\n\\n#### Refactored\\n\\n- create one generic scrollable component ([`#442`](https://github.com/gorhom/react-native-bottom-sheet/pull/442)).\\n- converted all internal state/memoized variables to reanimated shared values. ([`#430`](https://github.com/gorhom/react-native-bottom-sheet/pull/430)).\\n- updated handling animated heights ([`#451`](https://github.com/gorhom/react-native-bottom-sheet/pull/451)).\\n\\n#### Added\\n\\n- added pull to refresh implementation ([016a01f](https://github.com/gorhom/react-native-bottom-sheet/commit/016a01f3705c83c9903a3e28c875e7b90424a128)).\\n- added enable pan down to close ([`#437`](https://github.com/gorhom/react-native-bottom-sheet/pull/437)).\\n- added snap to position ([`#443`](https://github.com/gorhom/react-native-bottom-sheet/pull/443)).\\n- added footer component ([`#457`](https://github.com/gorhom/react-native-bottom-sheet/pull/457)).\\n- added pre-integrated VirtualizedList component ([2d4d69d](https://github.com/gorhom/react-native-bottom-sheet/commit/2d4d69d8881a3cbe452f5e46157e2b9702528206)).\\n- added keyboard input mode for android ([069c4b6](https://github.com/gorhom/react-native-bottom-sheet/commit/069c4b6742630dc5fa7d4763a5c4dc6bfec439cc)).\\n- added detached bottom sheet ([`#487`](https://github.com/gorhom/react-native-bottom-sheet/pull/487)).\\n- added onClose callback to BottomSheet ([ee64545](https://github.com/gorhom/react-native-bottom-sheet/commit/ee64545ce0e7609fb383f1473773c8481a0bc7aa)).\\n- added backgroundStyle, handleStyle & handleIndicatorStyle to bottom sheet ([2211765](https://github.com/gorhom/react-native-bottom-sheet/commit/221176546fd59ed0c9d79fe7f0350eda24dd8550)).\\n- added forceClose to BottomSheet methods ([3dd5796](https://github.com/gorhom/react-native-bottom-sheet/commit/3dd5796eb722e4e579de7b2439d224a5e0238b55)).\\n\\n#### Fixed\\n\\n- fixed sheet positioning on modals ([ee573e9](https://github.com/gorhom/react-native-bottom-sheet/commit/ee573e9463836301d9736c3e5d86b2b363f9fb14)).\\n- fixed prevent animatedPosition from becoming undefined ([400d7b9](https://github.com/gorhom/react-native-bottom-sheet/commit/400d7b93caa0a46f678db2978e7e5f95cc87ee99)).\\n- fixed on mount flicker on fixed sheet ([48c4988](https://github.com/gorhom/react-native-bottom-sheet/commit/48c49888b95dc88abf320d4d7590f43806e0bd59)).\\n- fixed updated keyboard height in container calculation ([2599f6c](https://github.com/gorhom/react-native-bottom-sheet/commit/2599f6cf46af0f95812e34670de5a7cae5d44fd9)).\\n- fixed re-snap to current position when snap points get updated ([bb8e202](https://github.com/gorhom/react-native-bottom-sheet/commit/bb8e202af05dc6beeb108cfa1680401374ac58ad)).\\n- fixed handle initial closed sheet ([4bc40d9](https://github.com/gorhom/react-native-bottom-sheet/commit/4bc40d93da05dcff664ce939a9944416b9e91359)).\\n\\nRead the full [change log](https://github.com/gorhom/react-native-bottom-sheet/blob/master/CHANGELOG.md).\\n\\n## Special thanks\\n\\nThanks to all users for testing and reporting issues. Without your help, this library wouldn\'t progress this much \u2764\ufe0f\\n\\nSpecial thanks to [@kickbk](https://github.com/kickbk), [@vonovak](https://github.com/vonovak), [@likern](https://github.com/likern), [@nandorojo](https://github.com/nandorojo), [@axeldelafosse](https://github.com/axeldelafosse) & [@skdev24](https://github.com/skdev24) for testing & contributing to this release.\\n\\nFinally, thanks to [Software Mansion](http://swmansion.com/) for powering this library with `Reanimated` & `Gesture Handler`."}]}}')}}]);