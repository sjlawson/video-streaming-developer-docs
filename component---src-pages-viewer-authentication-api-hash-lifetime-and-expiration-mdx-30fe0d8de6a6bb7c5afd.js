"use strict";(self.webpackChunkexample=self.webpackChunkexample||[]).push([[8399],{39654:function(e,t,n){n.r(t),n.d(t,{_frontmatter:function(){return h},default:function(){return c}});var a,i=n(63366),r=(n(67294),n(64983)),o=n(55602),s=["components"],h={},p=(a="InlineNotification",function(e){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",e)}),u={_frontmatter:h},l=o.Z;function c(e){var t=e.components,n=(0,i.Z)(e,s);return(0,r.kt)(l,Object.assign({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(p,{kind:"warning",mdxType:"InlineNotification"},(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Deprecation Warning:")," This API is deprecated and it is scheduled to be removed on 03/01/2022. Please use (or migrate to) the new version of the ",(0,r.kt)("a",{parentName:"p",href:"/viewer-authentication-api-v2-getting-started"},"Viewer Authentication"),".")),(0,r.kt)("p",null,"Once a hash is successfully validated by IBM Video Streaming, the player will store the hash in the end user’s browser. This lets the viewer resume watching the video when returning to the page without having authenticate again."),(0,r.kt)("p",null,"You can specify an expiration date for the hash. When the viewer returns to the page after the expiration date, they must authenticate again."),(0,r.kt)("p",null,"Expiration date must be"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Specified as UNIX timestamp in seconds"),(0,r.kt)("li",{parentName:"ul"},"Part of the hash by concatenating it to the rest of the parameters"),(0,r.kt)("li",{parentName:"ul"},"Included in the response object as “hashExpire”."),(0,r.kt)("li",{parentName:"ul"},"JSON encoded as part of the response")),(0,r.kt)("p",null,"Example script in PHP for specifying hash expiration date"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// We specify an expiration date as a UNIX timestamp\n// which is valid for one hour.\n$expiration = time()+3600;\n\n// We concatenate it to the rest of the parameters when creating the hash.\n$hash = md5(implode('|', $userData).'|'.$expiration.'|'.$SHARED_SECRET_KEY);\n\n// We include it in the response.\n$response = array_chunk(\n    array_merge($userData, [\"hashExpire\" => $expiration, \"hash\" => $hash]),\n    1,\n    true\n);\n\n// We encode the output into JSON format.\n$json = json_encode($response);\n\n")),(0,r.kt)("p",null,"When validating the authentication response the IBM Video Streaming infrastructure checks"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"If the expiration date is past"),(0,r.kt)("li",{parentName:"ul"},"If the expiration was hashed properly")),(0,r.kt)("p",null,"This way we can make sure that the expiration date comes from you and it has not been tampered with on the client side."))}c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-viewer-authentication-api-hash-lifetime-and-expiration-mdx-30fe0d8de6a6bb7c5afd.js.map