"use strict";(self.webpackChunkexample=self.webpackChunkexample||[]).push([[2630],{26168:function(a,n,e){e.r(n),e.d(n,{_frontmatter:function(){return o},default:function(){return u}});var t=e(63366),r=(e(67294),e(64983)),i=e(55602),l=["components"],o={},m={_frontmatter:o},s=i.Z;function u(a){var n=a.components,e=(0,t.Z)(a,l);return(0,r.kt)(s,Object.assign({},m,e,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",null,"Creating an event"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"POST https://api.video.ibm.com/v2/channels/CHANNEL_ID/events.json\n")),(0,r.kt)("p",null,"The parameters for the POST request:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"PARAMETER"),(0,r.kt)("th",{parentName:"tr",align:null},"TYPE"),(0,r.kt)("th",{parentName:"tr",align:null},"IMPORTANCE"),(0,r.kt)("th",{parentName:"tr",align:null},"DESCRIPTION"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"title")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"REQUIRED"),(0,r.kt)("td",{parentName:"tr",align:null},"Event title")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"description")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"REQUIRED"),(0,r.kt)("td",{parentName:"tr",align:null},"Event description")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"date")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"REQUIRED"),(0,r.kt)("td",{parentName:"tr",align:null},"Date in YYYY-MM-DD format. e.g. 2020-07-31")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"time")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"REQUIRED"),(0,r.kt)("td",{parentName:"tr",align:null},"Time in HH:MM format. e.g. 16:50")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"timezone")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"REQUIRED"),(0,r.kt)("td",{parentName:"tr",align:null},"See ",(0,r.kt)("a",{parentName:"td",href:"#list-of-supported-time-zones"},"supported timezones"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"repeat")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"OPTIONAL"),(0,r.kt)("td",{parentName:"tr",align:null},"One of “never”, “daily”, “weekly”. default “never”")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"repeat_days")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"OPTIONAL"),(0,r.kt)("td",{parentName:"tr",align:null},"Valid names: ",(0,r.kt)("inlineCode",{parentName:"td"},'"Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday"')," ",(0,r.kt)("strong",{parentName:"td"},"Required if repeat is “weekly”, days MUST be separated by commas"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"duration")),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"REQUIRED"),(0,r.kt)("td",{parentName:"tr",align:null},"Event duration in minutes. Valid values: 15, 30, 60, 90, 120, 180, 240")))),(0,r.kt)("h3",null,"Success response of Creating an event:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"HTTP/1.1 201 Created\nLocation: https://api.video.ibm.com/v2/channels/CHANNEL_ID/events/4552.json\n")),(0,r.kt)("p",null,"Possible error responses:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"HTTP response code"),(0,r.kt)("th",{parentName:"tr",align:null},"Error Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"403"),(0,r.kt)("td",{parentName:"tr",align:null},"Resource ownership mismatch")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"404"),(0,r.kt)("td",{parentName:"tr",align:null},"Resource not found")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"429"),(0,r.kt)("td",{parentName:"tr",align:null},"Too many requests (",(0,r.kt)("a",{parentName:"td",href:"/api-basics-rate-limits"},"Read more"),")")))),(0,r.kt)("h2",null,"Listing Events"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"GET https://api.video.ibm.com/v2/channels/CHANNEL_ID/events.json\n")),(0,r.kt)("p",null,"The query parameters for the Listing Events GET request:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"PARAMETER"),(0,r.kt)("th",{parentName:"tr",align:null},"TYPE"),(0,r.kt)("th",{parentName:"tr",align:null},"IMPORTANCE"),(0,r.kt)("th",{parentName:"tr",align:null},"DESCRIPTION"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"page")),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"OPTIONAL"),(0,r.kt)("td",{parentName:"tr",align:null},"Requested page number (value is 1 by default)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"pagesize")),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"OPTIONAL"),(0,r.kt)("td",{parentName:"tr",align:null},"Requested page size (value is 20 by default)")))),(0,r.kt)("p",null,"Upon success a response with HTTP status “200 OK” is returned with the following response:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "events": [\n        {\n            "id": 4552,\n            "title": "All hands",\n            "description": "Company all hands meeting",\n            "date": "2020-07-31",\n            "time": "14:47",\n            "timezone": "Europe/Budapest",\n            "start_ts": 1596199536,\n            "duration": 180,\n            "repeat": "never"\n        },\n        {\n            "id": 4554,\n            "title": "Town hall",\n            "description": "Company town hall meeting",\n            "date": "2020-07-31",\n            "time": "14:50",\n            "timezone": "Europe/Budapest",\n            "start_ts": 1596199836,\n            "duration": 60,\n            "repeat": "weekly",\n            "repeat_days": [\n                "Monday",\n                "Saturday"\n            ]\n        }\n    ],\n    "paging": {\n        "previous": "https://api.video.ibm.com/v2/channels/CHANNEL_ID/events.json?\npagesize=PAGE_SIZE&page=PREVIOUS_PAGE",\n        "next": "https://api.video.ibm.com/v2/channels/CHANNEL_ID/events.json?\npagesize=PAGE_SIZE&page=NEXT_PAGE",\n        "page_count": 8,\n        "item_count": 38\n    }\n}\n')),(0,r.kt)("p",null,"Possible error responses:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"HTTP response code"),(0,r.kt)("th",{parentName:"tr",align:null},"Error Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"403"),(0,r.kt)("td",{parentName:"tr",align:null},"Resource ownership mismatch")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"404"),(0,r.kt)("td",{parentName:"tr",align:null},"Resource not found")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"429"),(0,r.kt)("td",{parentName:"tr",align:null},"Too many requests (",(0,r.kt)("a",{parentName:"td",href:"/api-basics-rate-limits"},"Read more"),")")))),(0,r.kt)("h2",null,"Listing Specific Event"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"GET https://api.video.ibm.com/v2/channels/CHANNEL_ID/events/EVENT_ID.json\n")),(0,r.kt)("p",null,"Upon success a response with HTTP status “200 OK” is returned with the following response:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "event": {\n    "id": 769115,\n    "title": "Test Event Title",\n    "description": "Desc",\n    "date": "2020-12-09",\n    "time": "16:28",\n    "timezone": "Indian/Cocos",\n    "start_ts": 1607531280,\n    "duration": 60,\n    "repeat": "weekly",\n    "repeat_days": ["Monday", "Tuesday"]\n  }\n}\n')),(0,r.kt)("p",null,"Possible error responses:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"HTTP response code"),(0,r.kt)("th",{parentName:"tr",align:null},"Error Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"400"),(0,r.kt)("td",{parentName:"tr",align:null},"Field validation failed")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"403"),(0,r.kt)("td",{parentName:"tr",align:null},"Resource ownership mismatch")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"404"),(0,r.kt)("td",{parentName:"tr",align:null},"Resource not found")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"429"),(0,r.kt)("td",{parentName:"tr",align:null},"Too many requests (",(0,r.kt)("a",{parentName:"td",href:"/api-basics-rate-limits"},"Read more"),")")))),(0,r.kt)("h2",null,"Event deletion"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"DELETE https://api.video.ibm.com/v2/channels/CHANNEL_ID/events/EVENT_ID.json\n")),(0,r.kt)("h3",null,"Success response"),(0,r.kt)("p",null,"Upon success a response with HTTP status “200 OK” is returned."),(0,r.kt)("h3",null,"Error responses"),(0,r.kt)("p",null,"Possible error responses:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"HTTP response code"),(0,r.kt)("th",{parentName:"tr",align:null},"Error Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"403"),(0,r.kt)("td",{parentName:"tr",align:null},"Resource ownership mismatch")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"404"),(0,r.kt)("td",{parentName:"tr",align:null},"Resource not found")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"429"),(0,r.kt)("td",{parentName:"tr",align:null},"Too many requests (",(0,r.kt)("a",{parentName:"td",href:"/api-basics-rate-limits"},"Read more"),")")))),(0,r.kt)("h2",null,"Updating an event"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"PUT https://api.video.ibm.com/v2/channels/CHANNEL_ID/events/EVENT_ID.json\n")),(0,r.kt)("p",null,"The parameters for the POST request:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"PARAMETER"),(0,r.kt)("th",{parentName:"tr",align:null},"TYPE"),(0,r.kt)("th",{parentName:"tr",align:null},"IMPORTANCE"),(0,r.kt)("th",{parentName:"tr",align:null},"DESCRIPTION"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"title")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"REQUIRED"),(0,r.kt)("td",{parentName:"tr",align:null},"Event title")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"description")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"REQUIRED"),(0,r.kt)("td",{parentName:"tr",align:null},"Event description")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"date")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"REQUIRED"),(0,r.kt)("td",{parentName:"tr",align:null},"Date in YYYY-MM-DD format. e.g. 2020-07-31")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"time")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"REQUIRED"),(0,r.kt)("td",{parentName:"tr",align:null},"Time in HH:MM format. e.g. 16:50")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"timezone")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"REQUIRED"),(0,r.kt)("td",{parentName:"tr",align:null},"See ",(0,r.kt)("a",{parentName:"td",href:"#list-of-supported-time-zones"},"supported timezones"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"repeat")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"OPTIONAL"),(0,r.kt)("td",{parentName:"tr",align:null},"One of “never”, “daily”, “weekly”. default “never”")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"repeat_days")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"OPTIONAL"),(0,r.kt)("td",{parentName:"tr",align:null},"Valid names: ",(0,r.kt)("inlineCode",{parentName:"td"},'"Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday"')," ",(0,r.kt)("strong",{parentName:"td"},"Required if repeat is “weekly”, days MUST be separated by commas"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"duration")),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"REQUIRED"),(0,r.kt)("td",{parentName:"tr",align:null},"Event duration in minutes. Valid values: 15, 30, 60, 90, 120, 180, 240")))),(0,r.kt)("h3",null,"Success response"),(0,r.kt)("p",null,"Upon success a response with HTTP status “200 OK” is returned."),(0,r.kt)("h3",null,"Error responses"),(0,r.kt)("p",null,"Possible error responses:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"HTTP response code"),(0,r.kt)("th",{parentName:"tr",align:null},"Error Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"400"),(0,r.kt)("td",{parentName:"tr",align:null},"Field validation failed")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"403"),(0,r.kt)("td",{parentName:"tr",align:null},"Resource ownership mismatch")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"404"),(0,r.kt)("td",{parentName:"tr",align:null},"Resource not found")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"429"),(0,r.kt)("td",{parentName:"tr",align:null},"Too many requests (",(0,r.kt)("a",{parentName:"td",href:"/api-basics-rate-limits"},"Read more"),")")))),(0,r.kt)("h2",null,"Get list of upcoming events on a channel"),(0,r.kt)("p",null,"Returns data of upcoming events on a channel."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"GET https://api.video.ibm.com/channels/{channel_id}/upcoming-events.json\n")),(0,r.kt)("h3",null,"Parameters"),(0,r.kt)("p",null,"The query parameters for the GET request:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"PARAMETER"),(0,r.kt)("th",{parentName:"tr",align:null},"TYPE"),(0,r.kt)("th",{parentName:"tr",align:null},"IMPORTANCE"),(0,r.kt)("th",{parentName:"tr",align:null},"DESCRIPTION"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"page")),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"OPTIONAL"),(0,r.kt)("td",{parentName:"tr",align:null},"Requested page number (value is 1 by default)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"pagesize")),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"OPTIONAL"),(0,r.kt)("td",{parentName:"tr",align:null},"Requested page size (value is 50 by default, max. 50)")))),(0,r.kt)("h3",null,"Success response"),(0,r.kt)("p",null,"Upon success a response with HTTP status “200 OK” is returned with the following key-value pairs under an ",(0,r.kt)("inlineCode",{parentName:"p"},"events")," key."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"KEY"),(0,r.kt)("th",{parentName:"tr",align:null},"TYPE"),(0,r.kt)("th",{parentName:"tr",align:null},"DESCRIPTION"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"id")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Unique ID of the event")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"title")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Event title")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"description")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Event description")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"start")),(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null},"The date and time when the event starts (Unix timestamp)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"duration")),(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null},"Expected duration of the event in seconds")))),(0,r.kt)("p",null,"Example of a success response:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "events": [\n        {\n            "id": "111",\n            "title": "Title of the event",\n            "description": "Description of the event",\n            "start": 1399388736,\n            "duration": 900,\n        },\n        ...\n    ]\n}\n')),(0,r.kt)("p",null,"The paging information can be found under the ",(0,r.kt)("inlineCode",{parentName:"p"},"paging")," key. Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "paging": {\n    "previous": "https://api.video.ibm.com/CHANNEL_ID/upcoming-events.json?pagesize=PAGE_SIZE&page=PREVIOUS_PAGE",\n    "next": "https://api.video.ibm.com/channels/CHANNEL_ID/upcoming-events.json?pagesize=PAGE_SIZE&page=NEXT_PAGE"\n  }\n}\n')),(0,r.kt)("h3",null,"Error responses"),(0,r.kt)("p",null,"Possible error responses:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"HTTP RESPONSE CODE"),(0,r.kt)("th",{parentName:"tr",align:null},"ERROR VALUE"),(0,r.kt)("th",{parentName:"tr",align:null},"ERROR CONDITIONS"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"401 Unauthorized"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"invalid_token")),(0,r.kt)("td",{parentName:"tr",align:null},"The provided access token is missing, revoked, expired or malformed")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"404 Not Found"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"not_found")),(0,r.kt)("td",{parentName:"tr",align:null},"Channel was not found")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"503 Service Unavailable"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"There is a temporary error on the server which makes it impossible to serve the request")))),(0,r.kt)("h2",null,"List of supported time zones"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Africa/Abidjan\nAfrica/Accra\nAfrica/Addis_Ababa\nAfrica/Algiers\nAfrica/Asmara\nAfrica/Asmera\nAfrica/Bamako\nAfrica/Bangui\nAfrica/Banjul\nAfrica/Bissau\nAfrica/Blantyre\nAfrica/Brazzaville\nAfrica/Bujumbura\nAfrica/Cairo\nAfrica/Casablanca\nAfrica/Ceuta\nAfrica/Conakry\nAfrica/Dakar\nAfrica/Dar_es_Salaam\nAfrica/Djibouti\nAfrica/Douala\nAfrica/El_Aaiun\nAfrica/Freetown\nAfrica/Gaborone\nAfrica/Harare\nAfrica/Johannesburg\nAfrica/Kampala\nAfrica/Khartoum\nAfrica/Kigali\nAfrica/Kinshasa\nAfrica/Lagos\nAfrica/Libreville\nAfrica/Lome\nAfrica/Luanda\nAfrica/Lubumbashi\nAfrica/Lusaka\nAfrica/Malabo\nAfrica/Maputo\nAfrica/Maseru\nAfrica/Mbabane\nAfrica/Mogadishu\nAfrica/Monrovia\nAfrica/Nairobi\nAfrica/Ndjamena\nAfrica/Niamey\nAfrica/Nouakchott\nAfrica/Ouagadougou\nAfrica/Porto-Novo\nAfrica/Sao_Tome\nAfrica/Timbuktu\nAfrica/Tripoli\nAfrica/Tunis\nAfrica/Windhoek\nAmerica/Adak\nAmerica/Anchorage\nAmerica/Anguilla\nAmerica/Antigua\nAmerica/Araguaina\nAmerica/Argentina/Buenos_Aires\nAmerica/Argentina/Catamarca\nAmerica/Argentina/ComodRivadavia\nAmerica/Argentina/Cordoba\nAmerica/Argentina/Jujuy\nAmerica/Argentina/La_Rioja\nAmerica/Argentina/Mendoza\nAmerica/Argentina/Rio_Gallegos\nAmerica/Argentina/Salta\nAmerica/Argentina/San_Juan\nAmerica/Argentina/San_Luis\nAmerica/Argentina/Tucuman\nAmerica/Argentina/Ushuaia\nAmerica/Aruba\nAmerica/Asuncion\nAmerica/Atikokan\nAmerica/Atka\nAmerica/Bahia\nAmerica/Barbados\nAmerica/Belem\nAmerica/Belize\nAmerica/Blanc-Sablon\nAmerica/Boa_Vista\nAmerica/Bogota\nAmerica/Boise\nAmerica/Buenos_Aires\nAmerica/Cambridge_Bay\nAmerica/Campo_Grande\nAmerica/Cancun\nAmerica/Caracas\nAmerica/Catamarca\nAmerica/Cayenne\nAmerica/Cayman\nAmerica/Chicago\nAmerica/Chihuahua\nAmerica/Coral_Harbour\nAmerica/Cordoba\nAmerica/Costa_Rica\nAmerica/Cuiaba\nAmerica/Curacao\nAmerica/Danmarkshavn\nAmerica/Dawson\nAmerica/Dawson_Creek\nAmerica/Denver\nAmerica/Detroit\nAmerica/Dominica\nAmerica/Edmonton\nAmerica/Eirunepe\nAmerica/El_Salvador\nAmerica/Ensenada\nAmerica/Fortaleza\nAmerica/Fort_Wayne\nAmerica/Glace_Bay\nAmerica/Godthab\nAmerica/Goose_Bay\nAmerica/Grand_Turk\nAmerica/Grenada\nAmerica/Guadeloupe\nAmerica/Guatemala\nAmerica/Guayaquil\nAmerica/Guyana\nAmerica/Halifax\nAmerica/Havana\nAmerica/Hermosillo\nAmerica/Indiana/Indianapolis\nAmerica/Indiana/Knox\nAmerica/Indiana/Marengo\nAmerica/Indiana/Petersburg\nAmerica/Indiana/Tell_City\nAmerica/Indiana/Vevay\nAmerica/Indiana/Vincennes\nAmerica/Indiana/Winamac\nAmerica/Indianapolis\nAmerica/Inuvik\nAmerica/Iqaluit\nAmerica/Jamaica\nAmerica/Jujuy\nAmerica/Juneau\nAmerica/Kentucky/Louisville\nAmerica/Kentucky/Monticello\nAmerica/Knox_IN\nAmerica/La_Paz\nAmerica/Lima\nAmerica/Los_Angeles\nAmerica/Louisville\nAmerica/Maceio\nAmerica/Managua\nAmerica/Manaus\nAmerica/Marigot\nAmerica/Martinique\nAmerica/Mazatlan\nAmerica/Mendoza\nAmerica/Menominee\nAmerica/Merida\nAmerica/Mexico_City\nAmerica/Miquelon\nAmerica/Moncton\nAmerica/Monterrey\nAmerica/Montevideo\nAmerica/Montreal\nAmerica/Montserrat\nAmerica/Nassau\nAmerica/New_York\nAmerica/Nipigon\nAmerica/Nome\nAmerica/Noronha\nAmerica/North_Dakota/Center\nAmerica/North_Dakota/New_Salem\nAmerica/Panama\nAmerica/Pangnirtung\nAmerica/Paramaribo\nAmerica/Phoenix\nAmerica/Port-au-Prince\nAmerica/Porto_Acre\nAmerica/Porto_Velho\nAmerica/Port_of_Spain\nAmerica/Puerto_Rico\nAmerica/Rainy_River\nAmerica/Rankin_Inlet\nAmerica/Recife\nAmerica/Regina\nAmerica/Resolute\nAmerica/Rio_Branco\nAmerica/Rosario\nAmerica/Santarem\nAmerica/Santiago\nAmerica/Santo_Domingo\nAmerica/Sao_Paulo\nAmerica/Scoresbysund\nAmerica/Shiprock\nAmerica/St_Barthelemy\nAmerica/St_Johns\nAmerica/St_Kitts\nAmerica/St_Lucia\nAmerica/St_Thomas\nAmerica/St_Vincent\nAmerica/Swift_Current\nAmerica/Tegucigalpa\nAmerica/Thule\nAmerica/Thunder_Bay\nAmerica/Tijuana\nAmerica/Toronto\nAmerica/Tortola\nAmerica/Vancouver\nAmerica/Virgin\nAmerica/Whitehorse\nAmerica/Winnipeg\nAmerica/Yakutat\nAmerica/Yellowknife\nAntarctica/Casey\nAntarctica/Davis\nAntarctica/DumontDUrville\nAntarctica/Mawson\nAntarctica/McMurdo\nAntarctica/Palmer\nAntarctica/Rothera\nAntarctica/South_Pole\nAntarctica/Syowa\nAntarctica/Vostok\nArctic/Longyearbyen\nAsia/Aden\nAsia/Almaty\nAsia/Amman\nAsia/Anadyr\nAsia/Aqtau\nAsia/Aqtobe\nAsia/Ashgabat\nAsia/Ashkhabad\nAsia/Baghdad\nAsia/Bahrain\nAsia/Baku\nAsia/Bangkok\nAsia/Beirut\nAsia/Bishkek\nAsia/Brunei\nAsia/Calcutta\nAsia/Choibalsan\nAsia/Chongqing\nAsia/Chungking\nAsia/Colombo\nAsia/Dacca\nAsia/Damascus\nAsia/Dhaka\nAsia/Dili\nAsia/Dubai\nAsia/Dushanbe\nAsia/Gaza\nAsia/Harbin\nAsia/Hong_Kong\nAsia/Hovd\nAsia/Ho_Chi_Minh\nAsia/Irkutsk\nAsia/Istanbul\nAsia/Jakarta\nAsia/Jayapura\nAsia/Jerusalem\nAsia/Kabul\nAsia/Kamchatka\nAsia/Karachi\nAsia/Kashgar\nAsia/Kathmandu\nAsia/Katmandu\nAsia/Kolkata\nAsia/Krasnoyarsk\nAsia/Kuala_Lumpur\nAsia/Kuching\nAsia/Kuwait\nAsia/Macao\nAsia/Macau\nAsia/Magadan\nAsia/Makassar\nAsia/Manila\nAsia/Muscat\nAsia/Nicosia\nAsia/Novokuznetsk\nAsia/Novosibirsk\nAsia/Omsk\nAsia/Oral\nAsia/Phnom_Penh\nAsia/Pontianak\nAsia/Pyongyang\nAsia/Qatar\nAsia/Qyzylorda\nAsia/Rangoon\nAsia/Riyadh\nAsia/Saigon\nAsia/Sakhalin\nAsia/Samarkand\nAsia/Seoul\nAsia/Shanghai\nAsia/Singapore\nAsia/Taipei\nAsia/Tashkent\nAsia/Tbilisi\nAsia/Tehran\nAsia/Tel_Aviv\nAsia/Thimbu\nAsia/Thimphu\nAsia/Tokyo\nAsia/Ujung_Pandang\nAsia/Ulaanbaatar\nAsia/Ulan_Bator\nAsia/Urumqi\nAsia/Vientiane\nAsia/Vladivostok\nAsia/Yakutsk\nAsia/Yekaterinburg\nAsia/Yerevan\nAustralia/ACT\nAustralia/Adelaide\nAustralia/Brisbane\nAustralia/Broken_Hill\nAustralia/Canberra\nAustralia/Currie\nAustralia/Darwin\nAustralia/Eucla\nAustralia/Hobart\nAustralia/LHI\nAustralia/Lindeman\nAustralia/Lord_Howe\nAustralia/Melbourne\nAustralia/North\nAustralia/NSW\nAustralia/Perth\nAustralia/Queensland\nAustralia/South\nAustralia/Sydney\nAustralia/Tasmania\nAustralia/Victoria\nAustralia/West\nAustralia/Yancowinna\nEurope/Amsterdam\nEurope/Andorra\nEurope/Athens\nEurope/Belfast\nEurope/Belgrade\nEurope/Berlin\nEurope/Bratislava\nEurope/Brussels\nEurope/Bucharest\nEurope/Budapest\nEurope/Chisinau\nEurope/Copenhagen\nEurope/Dublin\nEurope/Gibraltar\nEurope/Guernsey\nEurope/Helsinki\nEurope/Isle_of_Man\nEurope/Istanbul\nEurope/Jersey\nEurope/Kaliningrad\nEurope/Kiev\nEurope/Lisbon\nEurope/Ljubljana\nEurope/London\nEurope/Luxembourg\nEurope/Madrid\nEurope/Malta\nEurope/Mariehamn\nEurope/Minsk\nEurope/Monaco\nEurope/Moscow\nEurope/Nicosia\nEurope/Oslo\nEurope/Paris\nEurope/Podgorica\nEurope/Prague\nEurope/Riga\nEurope/Rome\nEurope/Samara\nEurope/San_Marino\nEurope/Sarajevo\nEurope/Simferopol\nEurope/Skopje\nEurope/Sofia\nEurope/Stockholm\nEurope/Tallinn\nEurope/Tirane\nEurope/Tiraspol\nEurope/Uzhgorod\nEurope/Vaduz\nEurope/Vatican\nEurope/Vienna\nEurope/Vilnius\nEurope/Volgograd\nEurope/Warsaw\nEurope/Zagreb\nEurope/Zaporozhye\nEurope/Zurich\nIndian/Antananarivo\nIndian/Chagos\nIndian/Christmas\nIndian/Cocos\nIndian/Comoro\nIndian/Kerguelen\nIndian/Mahe\nIndian/Maldives\nIndian/Mauritius\nIndian/Mayotte\nIndian/Reunion\nPacific/Apia\nPacific/Auckland\nPacific/Chatham\nPacific/Easter\nPacific/Efate\nPacific/Enderbury\nPacific/Fakaofo\nPacific/Fiji\nPacific/Funafuti\nPacific/Galapagos\nPacific/Gambier\nPacific/Guadalcanal\nPacific/Guam\nPacific/Honolulu\nPacific/Johnston\nPacific/Kiritimati\nPacific/Kosrae\nPacific/Kwajalein\nPacific/Majuro\nPacific/Marquesas\nPacific/Midway\nPacific/Nauru\nPacific/Niue\nPacific/Norfolk\nPacific/Noumea\nPacific/Pago_Pago\nPacific/Palau\nPacific/Pitcairn\nPacific/Ponape\nPacific/Port_Moresby\nPacific/Rarotonga\nPacific/Saipan\nPacific/Samoa\nPacific/Tahiti\nPacific/Tarawa\nPacific/Tongatapu\nPacific/Truk\nPacific/Wake\nPacific/Wallis\nPacific/Yap\n")))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-channel-api-events-mdx-ba9678e1b97cf8da3231.js.map