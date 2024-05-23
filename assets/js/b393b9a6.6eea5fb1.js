"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6753],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=c(n),d=r,h=m["".concat(s,".").concat(d)]||m[d]||u[d]||a;return n?o.createElement(h,l(l({ref:t},p),{},{components:n})):o.createElement(h,l({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[m]="string"==typeof e?e:r,l[1]=i;for(var c=2;c<a;c++)l[c]=n[c];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4225:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var o=n(7462),r=(n(7294),n(3905));const a={id:"bottomsheetscrollview",title:"BottomSheetScrollView",description:"a pre-integrated React Native ScrollView with BottomSheet gestures.",image:"/img/bottom-sheet-preview.gif",slug:"/components/bottomsheetscrollview"},l=void 0,i={unversionedId:"components/bottomsheetscrollview",id:"components/bottomsheetscrollview",title:"BottomSheetScrollView",description:"a pre-integrated React Native ScrollView with BottomSheet gestures.",source:"@site/docs/components/bottomsheetscrollview.md",sourceDirName:"components",slug:"/components/bottomsheetscrollview",permalink:"/awesome-react-native/components/bottomsheetscrollview",draft:!1,editUrl:"https://github.com/gorhom/react-native-bottom-sheet/edit/website/docs/components/bottomsheetscrollview.md",tags:[],version:"current",frontMatter:{id:"bottomsheetscrollview",title:"BottomSheetScrollView",description:"a pre-integrated React Native ScrollView with BottomSheet gestures.",image:"/img/bottom-sheet-preview.gif",slug:"/components/bottomsheetscrollview"},sidebar:"packages",previous:{title:"BottomSheetView",permalink:"/awesome-react-native/components/bottomsheetview"},next:{title:"BottomSheetFlatList",permalink:"/awesome-react-native/components/bottomsheetflatlist"}},s={},c=[{value:"Props",id:"props",level:2},{value:"<code>focusHook</code>",id:"focushook",level:3},{value:"Ignored Props",id:"ignored-props",level:2},{value:"Example",id:"example",level:2}],p={toc:c},m="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"A pre-integrated ",(0,r.kt)("inlineCode",{parentName:"p"},"React Native")," ScrollView with ",(0,r.kt)("inlineCode",{parentName:"p"},"BottomSheet")," gestures."),(0,r.kt)("h2",{id:"props"},"Props"),(0,r.kt)("p",null,"Inherits ",(0,r.kt)("inlineCode",{parentName:"p"},"ScrollViewProps")," from ",(0,r.kt)("inlineCode",{parentName:"p"},"react-native"),"."),(0,r.kt)("h3",{id:"focushook"},(0,r.kt)("inlineCode",{parentName:"h3"},"focusHook")),(0,r.kt)("p",null,"This needed when bottom sheet used with multiple scrollables to allow bottom sheet detect the current scrollable ref, especially when used with React Navigation. You will need to provide ",(0,r.kt)("inlineCode",{parentName:"p"},"useFocusEffect")," from ",(0,r.kt)("inlineCode",{parentName:"p"},"@react-navigation/native"),"."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"type"),(0,r.kt)("th",{parentName:"tr",align:null},"default"),(0,r.kt)("th",{parentName:"tr",align:null},"required"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"function"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"React.useEffect")),(0,r.kt)("td",{parentName:"tr",align:null},"NO")))),(0,r.kt)("h2",{id:"ignored-props"},"Ignored Props"),(0,r.kt)("p",null,"These props will be ignored if they were passed, because of the internal integration that uses them."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"scrollEventThrottle")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"decelerationRate")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"onScrollBeginDrag"))),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import React, { useCallback, useRef, useMemo } from "react";\nimport { StyleSheet, View, Text, Button } from "react-native";\nimport BottomSheet, { BottomSheetScrollView } from "@gorhom/bottom-sheet";\n\nconst App = () => {\n  // hooks\n  const sheetRef = useRef<BottomSheet>(null);\n\n  // variables\n  const data = useMemo(\n    () =>\n      Array(50)\n        .fill(0)\n        .map((_, index) => `index-${index}`),\n    []\n  );\n  const snapPoints = useMemo(() => ["25%", "50%", "90%"], []);\n\n  // callbacks\n  const handleSheetChange = useCallback((index) => {\n    console.log("handleSheetChange", index);\n  }, []);\n  const handleSnapPress = useCallback((index) => {\n    sheetRef.current?.snapToIndex(index);\n  }, []);\n  const handleClosePress = useCallback(() => {\n    sheetRef.current?.close();\n  }, []);\n\n  // render\n  const renderItem = useCallback(\n    (item) => (\n      <View key={item} style={styles.itemContainer}>\n        <Text>{item}</Text>\n      </View>\n    ),\n    []\n  );\n  return (\n    <View style={styles.container}>\n      <Button title="Snap To 90%" onPress={() => handleSnapPress(2)} />\n      <Button title="Snap To 50%" onPress={() => handleSnapPress(1)} />\n      <Button title="Snap To 25%" onPress={() => handleSnapPress(0)} />\n      <Button title="Close" onPress={() => handleClosePress()} />\n      <BottomSheet\n        ref={sheetRef}\n        index={1}\n        snapPoints={snapPoints}\n        onChange={handleSheetChange}\n      >\n        <BottomSheetScrollView contentContainerStyle={styles.contentContainer}>\n          {data.map(renderItem)}\n        </BottomSheetScrollView>\n      </BottomSheet>\n    </View>\n  );\n};\n\nconst styles = StyleSheet.create({\n  container: {\n    flex: 1,\n    paddingTop: 200,\n  },\n  contentContainer: {\n    backgroundColor: "white",\n  },\n  itemContainer: {\n    padding: 6,\n    margin: 6,\n    backgroundColor: "#eee",\n  },\n});\n\nexport default App;\n')))}u.isMDXComponent=!0}}]);