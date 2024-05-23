"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4211],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>u});var o=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},r=Object.keys(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var m=o.createContext({}),h=function(e){var t=o.useContext(m),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=h(e.components);return o.createElement(m.Provider,{value:t},e.children)},p="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,m=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=h(a),c=n,u=p["".concat(m,".").concat(c)]||p[c]||s[c]||r;return a?o.createElement(u,i(i({ref:t},d),{},{components:a})):o.createElement(u,i({ref:t},d))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,i=new Array(r);i[0]=c;var l={};for(var m in t)hasOwnProperty.call(t,m)&&(l[m]=t[m]);l.originalType=e,l[p]="string"==typeof e?e:n,i[1]=l;for(var h=2;h<r;h++)i[h]=a[h];return o.createElement.apply(null,i)}return o.createElement.apply(null,a)}c.displayName="MDXCreateElement"},5235:(e,t,a)=>{a.d(t,{n:()=>n});var o=a(7294);const n=e=>{let{title:t,url:a}=e;return o.createElement("video",{muted:!0,loop:!0,autoPlay:!0,controls:!1,playsInline:!0,title:t,width:"100%"},o.createElement("source",{src:a,type:"video/mp4"}))}},6598:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>m,default:()=>u,frontMatter:()=>l,metadata:()=>h,toc:()=>p});var o=a(7462),n=(a(7294),a(3905)),r=a(4996),i=a(5235);const l={title:"BottomSheet v4 is here!",description:"BottomSheet v4 comes with rewritten implementation to provide more stability, performance, and more features.",slug:"bottom-sheet-v4",authors:[{name:"Mo Gorhom",title:"Author",url:"https://github.com/gorhom",image_url:"https://github.com/gorhom.png"}],tags:["v4"],keywords:["bottomsheet","bottom-sheet","bottom sheet","react-native","react native","ios","android","sheet","modal","presentation modal","reanimated"],image:"/img/bottom-sheet-preview.gif",hide_table_of_contents:!1},m=void 0,h={permalink:"/awesome-react-native/blog/bottom-sheet-v4",source:"@site/blog/2021-08-30-bottom-sheet-v4.mdx",title:"BottomSheet v4 is here!",description:"BottomSheet v4 comes with rewritten implementation to provide more stability, performance, and more features.",date:"2021-08-30T00:00:00.000Z",formattedDate:"August 30, 2021",tags:[{label:"v4",permalink:"/awesome-react-native/blog/tags/v-4"}],readingTime:2.94,hasTruncateMarker:!1,authors:[{name:"Mo Gorhom",title:"Author",url:"https://github.com/gorhom",image_url:"https://github.com/gorhom.png",imageURL:"https://github.com/gorhom.png"}],frontMatter:{title:"BottomSheet v4 is here!",description:"BottomSheet v4 comes with rewritten implementation to provide more stability, performance, and more features.",slug:"bottom-sheet-v4",authors:[{name:"Mo Gorhom",title:"Author",url:"https://github.com/gorhom",image_url:"https://github.com/gorhom.png",imageURL:"https://github.com/gorhom.png"}],tags:["v4"],keywords:["bottomsheet","bottom-sheet","bottom sheet","react-native","react native","ios","android","sheet","modal","presentation modal","reanimated"],image:"/img/bottom-sheet-preview.gif",hide_table_of_contents:!1}},d={authorsImageUrls:[void 0]},p=[{value:"Features",id:"features",level:2},{value:"Keyboard Handling",id:"keyboard-handling",level:3},{value:"Pull to Refresh",id:"pull-to-refresh",level:3},{value:"Detach Sheet / Modal",id:"detach-sheet--modal",level:3},{value:"Footer Component",id:"footer-component",level:3},{value:"Breaking changes",id:"breaking-changes",level:2},{value:"Removed",id:"removed",level:4},{value:"Changes",id:"changes",level:4},{value:"Changelog",id:"changelog",level:2},{value:"Refactored",id:"refactored",level:4},{value:"Added",id:"added",level:4},{value:"Fixed",id:"fixed",level:4},{value:"Special thanks",id:"special-thanks",level:2}],s={toc:p},c="wrapper";function u(e){let{components:t,...a}=e;return(0,n.kt)(c,(0,o.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Today I am releasing the ",(0,n.kt)("inlineCode",{parentName:"p"},"BottomSheet v4"),", with a rewritten implementation to provide more stability, performance, and more features."),(0,n.kt)("h2",{id:"features"},"Features"),(0,n.kt)("p",null,"In this release, I have rewritten the implementation to 100% utilize ",(0,n.kt)("inlineCode",{parentName:"p"},"Reanimated v2")," hooks and variables instead of using the JS once. This allows for more customization and provides more stability overall."),(0,n.kt)("h3",{id:"keyboard-handling"},"Keyboard Handling"),(0,n.kt)(i.n,{title:"React Native Bottom Sheet Keyboard Handling",url:(0,r.Z)("video/bottom-sheet-keyboard-handling-preview.mp4"),mdxType:"Video"}),(0,n.kt)("p",null,"Keyboard handling was released with ",(0,n.kt)("inlineCode",{parentName:"p"},"v3"),", however, there were some issues that pushed this release. Now the keyboard handling is enabled by default and provides more options to customize the behavior, a new prop ",(0,n.kt)("inlineCode",{parentName:"p"},"android_keyboardInputMode")," is introduced to handle the ",(0,n.kt)("inlineCode",{parentName:"p"},"Android")," keyboard appearance config ",(0,n.kt)("inlineCode",{parentName:"p"},"windowSoftInputMode"),"."),(0,n.kt)("p",null,"Read more about ",(0,n.kt)("a",{parentName:"p",href:"/keyboard-handling"},"Keyboard Handling"),"."),(0,n.kt)("h3",{id:"pull-to-refresh"},"Pull to Refresh"),(0,n.kt)(i.n,{title:"React Native Bottom Sheet Pull to Refresh",url:(0,r.Z)("video/bottom-sheet-pull-to-refresh-preview.mp4"),mdxType:"Video"}),(0,n.kt)("p",null,"One of the earliest feature request that was submitted to repo ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/gorhom/react-native-bottom-sheet/issues/66"},"Pull to refresh")," by ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/gudberg"},"gudberg"),". There was an attempt to implement it on ",(0,n.kt)("inlineCode",{parentName:"p"},"v3")," & ",(0,n.kt)("inlineCode",{parentName:"p"},"v2")," but I was hit with their limitations, until now."),(0,n.kt)("p",null,"This feature is enabled by default, users need to provide ",(0,n.kt)("inlineCode",{parentName:"p"},"refreshing")," & ",(0,n.kt)("inlineCode",{parentName:"p"},"onRefresh")," to any of the ",(0,n.kt)("a",{parentName:"p",href:"/scrollables"},"Scrollables")," and voila!"),(0,n.kt)("p",null,"Read more about ",(0,n.kt)("a",{parentName:"p",href:"/pull-to-refresh"},"Pull to Refresh"),"."),(0,n.kt)("h3",{id:"detach-sheet--modal"},"Detach Sheet / Modal"),(0,n.kt)(i.n,{title:"React Native Bottom Sheet Detach Modal",url:(0,r.Z)("video/bottom-sheet-detach-preview.mp4"),mdxType:"Video"}),(0,n.kt)("p",null,"Another powerful addition to ",(0,n.kt)("inlineCode",{parentName:"p"},"BottomSheet")," & ",(0,n.kt)("inlineCode",{parentName:"p"},"BottomSheetModal")," is the ability to detach the sheet from the bottom - so no more bottom sheet \ud83d\ude05 -, which allows users to come up with lots of creative choices and customization to the sheet position."),(0,n.kt)("p",null,"Read more about ",(0,n.kt)("a",{parentName:"p",href:"/detach-modal"},"Detach Sheet / Modal"),"."),(0,n.kt)("h3",{id:"footer-component"},"Footer Component"),(0,n.kt)(i.n,{title:"React Native Bottom Sheet Custom Footer",url:(0,r.Z)("video/bottom-sheet-footer-preview.mp4"),mdxType:"Video"}),(0,n.kt)("p",null,"Lastly, I have added a new prop ",(0,n.kt)("inlineCode",{parentName:"p"},"footerComponent")," to ",(0,n.kt)("inlineCode",{parentName:"p"},"BottomSheet")," & ",(0,n.kt)("inlineCode",{parentName:"p"},"BottomSheetModal")," to allow users to stick their custom component to the bottom of the sheet even when the keyboard is shown."),(0,n.kt)("p",null,"Read more about ",(0,n.kt)("a",{parentName:"p",href:"/custom-footer"},"Footer Component"),"."),(0,n.kt)("h2",{id:"breaking-changes"},"Breaking changes"),(0,n.kt)("h4",{id:"removed"},"Removed"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Removed ",(0,n.kt)("inlineCode",{parentName:"li"},"animationEasing")," from ",(0,n.kt)("inlineCode",{parentName:"li"},"BottomSheet")," props."),(0,n.kt)("li",{parentName:"ul"},"Removed ",(0,n.kt)("inlineCode",{parentName:"li"},"animationDuration")," from ",(0,n.kt)("inlineCode",{parentName:"li"},"BottomSheet")," props."),(0,n.kt)("li",{parentName:"ul"},"Removed ",(0,n.kt)("inlineCode",{parentName:"li"},"closeOnPress")," from ",(0,n.kt)("inlineCode",{parentName:"li"},"BottomSheetBackdrop")," props."),(0,n.kt)("li",{parentName:"ul"},"Removed ",(0,n.kt)("inlineCode",{parentName:"li"},"dismissOnClose")," from ",(0,n.kt)("inlineCode",{parentName:"li"},"BottomSheetModal")," props."),(0,n.kt)("li",{parentName:"ul"},"Removed ",(0,n.kt)("inlineCode",{parentName:"li"},"enableFlashScrollableIndicatorOnExpand")," from ",(0,n.kt)("inlineCode",{parentName:"li"},"BottomSheet")," props.")),(0,n.kt)("h4",{id:"changes"},"Changes"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"snapPoints")," prop is no longer accepting ",(0,n.kt)("inlineCode",{parentName:"li"},"0")," as a value."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"animateOnMount")," props default value is ",(0,n.kt)("inlineCode",{parentName:"li"},"true"))),(0,n.kt)("h2",{id:"changelog"},"Changelog"),(0,n.kt)("p",null,"Here are the highlight change log of ",(0,n.kt)("inlineCode",{parentName:"p"},"v4")),(0,n.kt)("h4",{id:"refactored"},"Refactored"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"create one generic scrollable component (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/gorhom/react-native-bottom-sheet/pull/442"},(0,n.kt)("inlineCode",{parentName:"a"},"#442")),")."),(0,n.kt)("li",{parentName:"ul"},"converted all internal state/memoized variables to reanimated shared values. (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/gorhom/react-native-bottom-sheet/pull/430"},(0,n.kt)("inlineCode",{parentName:"a"},"#430")),")."),(0,n.kt)("li",{parentName:"ul"},"updated handling animated heights (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/gorhom/react-native-bottom-sheet/pull/451"},(0,n.kt)("inlineCode",{parentName:"a"},"#451")),").")),(0,n.kt)("h4",{id:"added"},"Added"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"added pull to refresh implementation (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/gorhom/react-native-bottom-sheet/commit/016a01f3705c83c9903a3e28c875e7b90424a128"},"016a01f"),")."),(0,n.kt)("li",{parentName:"ul"},"added enable pan down to close (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/gorhom/react-native-bottom-sheet/pull/437"},(0,n.kt)("inlineCode",{parentName:"a"},"#437")),")."),(0,n.kt)("li",{parentName:"ul"},"added snap to position (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/gorhom/react-native-bottom-sheet/pull/443"},(0,n.kt)("inlineCode",{parentName:"a"},"#443")),")."),(0,n.kt)("li",{parentName:"ul"},"added footer component (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/gorhom/react-native-bottom-sheet/pull/457"},(0,n.kt)("inlineCode",{parentName:"a"},"#457")),")."),(0,n.kt)("li",{parentName:"ul"},"added pre-integrated VirtualizedList component (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/gorhom/react-native-bottom-sheet/commit/2d4d69d8881a3cbe452f5e46157e2b9702528206"},"2d4d69d"),")."),(0,n.kt)("li",{parentName:"ul"},"added keyboard input mode for android (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/gorhom/react-native-bottom-sheet/commit/069c4b6742630dc5fa7d4763a5c4dc6bfec439cc"},"069c4b6"),")."),(0,n.kt)("li",{parentName:"ul"},"added detached bottom sheet (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/gorhom/react-native-bottom-sheet/pull/487"},(0,n.kt)("inlineCode",{parentName:"a"},"#487")),")."),(0,n.kt)("li",{parentName:"ul"},"added onClose callback to BottomSheet (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/gorhom/react-native-bottom-sheet/commit/ee64545ce0e7609fb383f1473773c8481a0bc7aa"},"ee64545"),")."),(0,n.kt)("li",{parentName:"ul"},"added backgroundStyle, handleStyle & handleIndicatorStyle to bottom sheet (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/gorhom/react-native-bottom-sheet/commit/221176546fd59ed0c9d79fe7f0350eda24dd8550"},"2211765"),")."),(0,n.kt)("li",{parentName:"ul"},"added forceClose to BottomSheet methods (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/gorhom/react-native-bottom-sheet/commit/3dd5796eb722e4e579de7b2439d224a5e0238b55"},"3dd5796"),").")),(0,n.kt)("h4",{id:"fixed"},"Fixed"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"fixed sheet positioning on modals (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/gorhom/react-native-bottom-sheet/commit/ee573e9463836301d9736c3e5d86b2b363f9fb14"},"ee573e9"),")."),(0,n.kt)("li",{parentName:"ul"},"fixed prevent animatedPosition from becoming undefined (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/gorhom/react-native-bottom-sheet/commit/400d7b93caa0a46f678db2978e7e5f95cc87ee99"},"400d7b9"),")."),(0,n.kt)("li",{parentName:"ul"},"fixed on mount flicker on fixed sheet (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/gorhom/react-native-bottom-sheet/commit/48c49888b95dc88abf320d4d7590f43806e0bd59"},"48c4988"),")."),(0,n.kt)("li",{parentName:"ul"},"fixed updated keyboard height in container calculation (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/gorhom/react-native-bottom-sheet/commit/2599f6cf46af0f95812e34670de5a7cae5d44fd9"},"2599f6c"),")."),(0,n.kt)("li",{parentName:"ul"},"fixed re-snap to current position when snap points get updated (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/gorhom/react-native-bottom-sheet/commit/bb8e202af05dc6beeb108cfa1680401374ac58ad"},"bb8e202"),")."),(0,n.kt)("li",{parentName:"ul"},"fixed handle initial closed sheet (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/gorhom/react-native-bottom-sheet/commit/4bc40d93da05dcff664ce939a9944416b9e91359"},"4bc40d9"),").")),(0,n.kt)("p",null,"Read the full ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/gorhom/react-native-bottom-sheet/blob/master/CHANGELOG.md"},"change log"),"."),(0,n.kt)("h2",{id:"special-thanks"},"Special thanks"),(0,n.kt)("p",null,"Thanks to all users for testing and reporting issues. Without your help, this library wouldn't progress this much \u2764\ufe0f"),(0,n.kt)("p",null,"Special thanks to ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/kickbk"},"@kickbk"),", ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/vonovak"},"@vonovak"),", ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/likern"},"@likern"),", ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/nandorojo"},"@nandorojo"),", ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/axeldelafosse"},"@axeldelafosse")," & ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/skdev24"},"@skdev24")," for testing & contributing to this release."),(0,n.kt)("p",null,"Finally, thanks to ",(0,n.kt)("a",{parentName:"p",href:"http://swmansion.com/"},"Software Mansion")," for powering this library with ",(0,n.kt)("inlineCode",{parentName:"p"},"Reanimated")," & ",(0,n.kt)("inlineCode",{parentName:"p"},"Gesture Handler"),"."))}u.isMDXComponent=!0}}]);