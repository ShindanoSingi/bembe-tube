(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{128:function(e,t,a){e.exports=a(355)},135:function(e,t,a){},327:function(e,t,a){},353:function(e,t,a){},355:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),i=a(101),l=a.n(i),o=a(5),s=(a(135),a(7)),c=(a(79),a(20)),d=function(){return r.a.createElement("div",{className:"items-center flex flex-col justify-around py-12 md:py-8 h-screen welcome"},r.a.createElement("div",{className:"flex flex-column"},r.a.createElement("p",{className:"text-2xl text-center text-blue-500 md:text-5xl"},"Bembe-Tube"),r.a.createElement("p",{className:"text-base text-center text-blue-500 md:text-3xl"},'Click on "Go" button.')),r.a.createElement("img",{className:"object-center m-auto h-60 md:h-1/2",src:a(79),alt:"Home Page mage"}),r.a.createElement("div",{className:"w-[5rem] mx-auto bg-blue-500 flex justify-center rounded-md py-1"},r.a.createElement(c.b,{to:"/videoPlayer/:id"},r.a.createElement("button",{className:"text-2xl md:text-4xl"},"Go"))))};var m=function(e){var t=e.videos,a=e.getPlayedVideoInfo,i=e.getVideoObject,l=Object(n.useState)(null),c=Object(o.a)(l,2),d=(c[0],c[1],""),m=Object(s.g)().id;return t.filter(function(e){e.id===m&&i(e)}),":id"===m?(d="https://www.youtube.com/watch_popup?v=yKJVlADjpus",r.a.createElement("iframe",{src:d,className:"iframe",frameborder:"1",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})):(d="https://www.youtube.com/watch_popup?v=".concat(m),r.a.createElement("iframe",{title:"video",className:"iframe",src:d,frameBorder:"0",allowFullScreen:!0,getPlayedVideoInfo:a}))},u=a(398),g=function(){return n.createElement("div",{className:"absolute flex flex-col gap-4 items-center justify-center min-w-full min-h-screen bg-[#1E1E1E] place-content-center"},n.createElement("h1",{className:"text-xl text-white"},"Please wait..."),n.createElement(u.a,{disableShrink:!0}))},p=(a(139),a(327),function(e){var t=e.videos,a=e.viewsFunc;return t.length<1?r.a.createElement(g,null):r.a.createElement("div",{className:"cards-container "},t.map(function(e,t){return"video"===e.type&&r.a.createElement(c.b,{key:t+1,className:"link",to:"/videoPlayer/".concat(e.id)},r.a.createElement("div",{class:"grid w-[98vw] md:w-[48.5vw] xl:w-[30rem] mx-1 gap-2  rounded-lg md:border-none",key:t},r.a.createElement("div",{class:"flex h-[8rem] w-[96.5vw] single-card  gap-2 md:flex-row  rounded-lg lg:rounded-none bg-[#1E1E1E]"},r.a.createElement("img",{className:"w-[6rem] video-thumbnail h-[8rem] md:h-auto xl\xa0:w-[4rem] object-cover md:w-48 rounded-l-lg  lg:rounded-lg",src:e.thumbnail.url,alt:"",onClick:function(){document.getElementsByTagName("iframe")[0].src="https://www.youtube.com/watch_popup?v=".concat(e.channel.id)}}),r.a.createElement("div",{className:"flex flex-col gap-2 py-2"},r.a.createElement("p",{className:" ml-0.5 md:invisible visible display-none  lg:w-60 text-sm text-white"},e.title.charAt(0).toUpperCase()+e.title.substring(1,38)+"..."," "),r.a.createElement("div",{className:"flex gap-[0.1rem]"},r.a.createElement("div",{className:"flex flex-col justify-start channel-name"},r.a.createElement("img",{class:"w-8 rounded-full",src:e.channel.icon,alt:""}),r.a.createElement("div",{class:"mb-3 font-normal text-gray-700  text-xs dark:text-gray-400"},e.channel.name.substring(0,11)+"..."," ")),r.a.createElement("a",{className:"channel-id-player",href:"https://www.youtube.com/channel/".concat(e.channel.id),target:"_blabk"}),r.a.createElement("ul",{class:"flex flex-col md:flex  md:justify-between justify-between leading-normal"},r.a.createElement("li",{class:"mb-3 font-normal text-gray-700 text-xs dark:text-gray-400"},"Views: ",a(e.views)," "),r.a.createElement("li",{class:"mb-3 relative bottom-4 font-normal text-gray-700 text-xs dark:text-gray-400"},"Posted: ",e.uploadedAt," "),r.a.createElement("li",{class:"mb-3 font-normal relative bottom-8 text-gray-700 text-xs dark:text-gray-400"},"Duration: ",e.duration_formatted," ")))))))})," ")}),h=a(106),E=function(){return r.a.createElement("div",{className:"home-and-playlist-icons"},r.a.createElement(c.b,{to:"/"},r.a.createElement(h.a,{className:"text-xl md:text-3xl home-icon"}))," ")},f=a(58),v=function(e){var t=e.searchedString,a=e.handleSubmit,n=e.handleChange;return r.a.createElement("div",{className:"flex items-center search-icon-and-input-box"},r.a.createElement("form",{onSubmit:a,className:"form"},r.a.createElement("input",{autoFocus:!0,className:"pl-5 pr-6 w-[50vw] text-ellipsis overflow-hidden ... py-0.5 text-sm rounded-full md:rounded-full md:text-xl md:pr-10 md:pl-4  md:w-[25rem] md:py-0.5",placeholder:"Type your search",type:"text",name:"SearchString",onChange:n,value:t})),r.a.createElement(f.a,{className:"relative pt-1 text-lg lg:block md:text-2xl right-6 md:right-8 searchIcon ",onClick:a,type:"submit"}))},b=a(107);function w(e){e.forwardedRef;var t=e.userData;return console.log(t),r.a.createElement("div",{className:"flex items-center justify-between gap-1 md:gap-8 lg:gap-8 user-super-container"},r.a.createElement("div",{className:"register-login"},r.a.createElement("p",{className:"text-md md:text-2xl register-text"},"Login")),r.a.createElement("div",{className:"username-container"},r.a.createElement(b.a,{className:"text-lg md:text-2xl user-icon"})," "," "))}var y=function(e){var t=e.searchedString,a=e.handleSubmit,n=e.handleChange,i=e.forwardedRef,l=e.userData;e.getUserData;return r.a.createElement("div",{className:"flex items-center justify-around w-screen py-2 bg-orange-600 md:py-4"},r.a.createElement(E,null)," ",r.a.createElement(v,{searchedString:t,handleChange:n,handleSubmit:a}),r.a.createElement(w,{forwardedRef:i,userData:l}),r.a.createElement(f.b,{className:"text-lg md:text-3xl"}))},x=a(111),S=a.n(x);var A=function(e){var t=e.videoObject,a=e.viewsFunc;return e.getaddToPlaylist,"video"===t.type?r.a.createElement("div",{class:"flex text-white gap-2 p-1 mx-auto w-[50vw] cards"},r.a.createElement("div",{class:"flex rounded-lg md:gap-4 items-center"},r.a.createElement("div",{className:"w-[5rem] mt-2 "},r.a.createElement("img",{className:"w-8 rounded-full playing-video-avatar",src:t.channel.icon,alt:""}),r.a.createElement("p",{className:"text-xs md:text-sm playing-video-channel text-[#AAAAAA]"},t.channel.name.charAt(0)+t.channel.name.toLowerCase().substring(1,10)+"..."," ")),r.a.createElement("div",{class:"p-1 flex flex-col justify-start"},r.a.createElement("h5",{class:"text-xs videoTitle mb-2 md:text-lg w-[70vw]"},t.title.charAt(0)+t.title.substring(1,40)+"..."),r.a.createElement("ul",{className:"flex text-xs md:text-24 gap-4 text-[#AAAAAA]"},r.a.createElement("li",null,a(t.views)),r.a.createElement("li",null,t.uploadedAt.substring(0,t.uploadedAt.length-3)),r.a.createElement("li",null,t.duration_formatted))))):r.a.createElement("div",{class:"flex rounded-lg h-6 shadow-lg "})},C=a(43),N=a.n(C),M=a(108),P=a.n(M),O=function(e){var t=e.videoObject,a=e.viewsFunc,r=e.getaddToPlaylist,i=(e.videoId,e.userData);console.log(i.username);var l=Object(n.useState)(""),s=Object(o.a)(l,2),c=s[0],d=(s[1],Object(n.useState)("")),m=Object(o.a)(d,2),u=m[0];m[1];return n.createElement("div",{className:" bg-[#1E1E1E] flex mx-auto items-center gap-16"},n.createElement("div",null,n.createElement(A,{videoObject:t,viewsFunc:a,getaddToPlaylist:r})),n.createElement("div",{className:"flex gap-8"},n.createElement(P.a,{className:"scale-125 text-stone-400 playlistAddIcon",onClick:function(){!function(){var e={loginUsername:c,addVideoId:u};console.log("item",e),fetch("https://youtube-mate.herokuapp.com/api/user/addToPlaylist",{method:"PUT",headers:{Accept:"application/json","Content-type":"Application/json"},body:JSON.stringify(e)}).then(function(e){return e.json()}).then(function(e){return console.log(e)})}(),N()({method:"GET",headers:{Authorization:"Bearer ".concat(localStorage.getItem("token")),"Access-Control-Allow-Origin":"",Allow:"GET","Content-type":"Application/json"},withCredentials:!0,url:"https://youtube-mate.herokuapp.com/api/user/playlist"}).then(function(e){console.log(e)})}}),n.createElement(S.a,{className:" playlist text-stone-400"})))};var j=function(e){var t=e.videos,a=e.handleChange,i=e.handleSubmit,l=e.searchedString,s=e.userData,c=e.viewsFunc,d=e.getUserData,u=e.getaddToPlaylist,g=e.videoId,h=Object(n.useState)({}),E=Object(o.a)(h,2),f=E[0],v=E[1];return console.log(s),r.a.createElement("div",{className:"grid min-h-screen"},r.a.createElement("div",{className:"fixed flex flex-col min-h-full"},r.a.createElement(y,{handleChange:a,handleSubmit:i,searchedString:l,userData:s,getUserData:d})," ",r.a.createElement("div",{className:"iframe-and-cardsContainer"},r.a.createElement("div",null,r.a.createElement(m,{videos:t,getVideoObject:function(e){v(e),console.log(f)}}),r.a.createElement(O,{videoObject:f,viewsFunc:c,getaddToPlaylist:u,videoId:g,userData:s})),r.a.createElement("div",null,r.a.createElement(p,{videos:t,viewsFunc:c}))))," ")},D=a(399),k=a(396),T=a(392),I=a(395),B=a(393);function U(){var e=n.useState(!1),t=Object(o.a)(e,2),a=t[0],r=t[1];return n.createElement("div",{className:"onload"},n.createElement(B.a,{onClick:function(){return r(!0)}},"Please wait..."),n.createElement(T.a,{"aria-labelledby":"transition-modal-title","aria-describedby":"transition-modal-description",open:a,onClose:function(){return r(!1)},closeAfterTransition:!0,BackdropComponent:D.a},n.createElement(I.a,null,n.createElement(k.a,{className:"style"},"Please wait..."))))}var F=function(e){var t=e.videos;return t?r.a.createElement("div",{className:""},t.map(function(e,t){return"video"===e.type&&r.a.createElement(c.b,{className:"link",to:"/videoPlayer/".concat(e.id)},r.a.createElement("div",{key:t,className:"single-card"},r.a.createElement("img",{className:"image",src:e.thumbnail.url,height:"60",alt:"images",onClick:function(){document.getElementsByTagName("iframe")[0].src="https://www.youtube.com/watch_popup?v=".concat(e.channel.id)}}),r.a.createElement("div",{className:"video-description"},r.a.createElement("p",{className:"title",onClick:function(){document.getElementsByTagName("iframe")[0].src="https://www.youtube.com/watch_popup?v=".concat(e.id)}},"Title: ",e.title.charAt(0).toUpperCase(),e.title.substring(1).toLowerCase()," "),r.a.createElement("div",{className:"avatar-channelName"},r.a.createElement("img",{className:"avatar",src:e.channel.icon,alt:""}),r.a.createElement("a",{className:"channel-id",href:"https://www.youtube.com/channel/".concat(e.channel.id),target:"_blabk"},e.channel.name," ")),r.a.createElement("p",{className:"views views-text"},"Views: ",(a=e.views)<1e3?a:a>999&&a<1e6?(a=(a/1e3).toFixed(1))+"K":a>=1e6&&a<1e9?(a=(a/1e6).toFixed(1))+"M":a>1e9&&a<1e12?(a=(a/1e9).toFixed(1))+"B":void 0," "),r.a.createElement("p",{className:"views posted-text"},"Posted: ",e.uploadedAt," "),r.a.createElement("p",{className:"views duration-text"},"Duration: ",e.duration_formatted," "))));var a})," "):r.a.createElement(U,null)};var L=function(e){e.getIndex;var t=e.handleChange,a=e.handleSubmit,n=e.searchedString,i=e.videos,l=(e.userData,e.forwardedRef);return console.log(l),r.a.createElement("div",{className:"bg-black"},r.a.createElement(y,{handleChange:t,handleSubmit:a,searchedString:n,forwardedRef:l}),r.a.createElement("div",{className:"bg-black"},r.a.createElement(F,{videos:i})))},R=function(){return r.a.createElement("div",{className:"px-2 bg-light"},r.a.createElement("h1",{className:"text-3xl text-center"},"Shindano Singi"),r.a.createElement("h3",{className:"text-xl text-center"},"(207) 713-3345 \u2219 3327 Esters Rd, Apt. 1133, Irving, TX 75062 \u2219Shindanosingi1@gmail.com"," "," "),r.a.createElement("p",null,'\u2022 Computer Science | Electrical Engineer graduated in September 2021. Prepared to sit for FE. \u2022 Experience in electromechanical industry work (textiles) machine use and repair \u2022 Electrical Engineering skills: Systems Dynamics, Microprocessor Systems, Digital Logic, Robotics, Analog and Digital Signal and Systems Processing, Electronics Devices and Design, Micro Electro Mechanical Systems (MEMS), Analog Circuit Design, Electromagnetic Fields, Engineering Communications, PLC \u2022 Math Skills: Linear Algebra, and Calculus Sequence, and Differential Equations, Statistics \u2022 Languages / Software: Python, JAVA, Visual Basic Studio, SolidWorks, L-Edit, Matlab \u2022 Strong oral and written (technical writing) skills English. Bilingual: French & Swahili. EDUCATION \u2022 University of Southern Maine, Portland, ME B.S. (Electrical Engineering), Graduated in May 2020 \u2022 Central Maine Community College Associates Degree (Electromechanical Technology), Greduated in June 2015 \u2022 Institut de la Fraternit\xe9, Tanzania Diploma in Business and Administration, 2007 \u25cf Scholarships include: WEX; College Dean, Eagle Jackson, & Phi Theta Kappa Honor Society, Lewiston Auburn Metropolitan Chamber Scholarship Recipient, President\u2019s Honors List \u25cf Awards: Best 2nd Poster presented at ASEE 2019 conference at the University at Buffalo, Undergraduate Research Opportunity (UROP), Maine Space Grant Consortium (MSGC) PROFESSIONAL EXPERIENCE SIEMENS INC, Scarborough, ME. March 2020 - Present HVAC SYSTEMS DESIGN and CONTROL ENGINEER \u25cf Participate in turnover meetings \u25cf Do project labor plan in excel \u25cf Do valve schedule \u25cf Do damper schedule \u25cf Design HVAC systems (AHU, Hot Water Systems, Chilled Water Systems...) in Autocad, based on contract drawings, Div23, Div25 and Div26 requirements. \u25cf Draw wiring diagram of devices to controllers in Autocad. \u25cf Create controllers and points in Design Tools (DT) software. U.S. Citizen Shindano Singi (207) 713-3345 \u2219 78 Maple Street, Apt. 31, Lewiston, ME 04240 \u2219Shindanosingi1@gmail.com \u25cf Assign point addresses to devices such temperature sensors, valve actuators, damper actuators, VFDs, Boilers, fans... \u25cf Create Commissioning Tools (CT) database \u25cf Export points database from DT to CT. \u25cf Create a submittal for the PM. \u25cf Do Engineering Re-Estimate. Softwares \u25cf Use "Wrike" software for project management and communication \u25cf Use "Teams" for communication (chat, audio and video calls) \u25cf Use "BluBeam" for documents management \u25cf Use "Si-Quote" for sales estimates \u25cf Use "SAP" for time reporting \u25cf Use "DayForce" for time reporting \u25cf Use "ABT" software for DXR controllers management \u25cf Microsoft Outlook \u25cf Microsoft excel \u25cf Microsoft Word \u25cf Microsoft PowerPoint \u25cf Certification \u25cf I have have obtained a lot of certificates at Siemens: 1. HVAC 2. Valves selection 3. Damper selection 4. AHU 5. Siemens Controllers (PXCs and PXMs) 6. Siemens Controllers (DXRs) 7. OSHA ... Awards \u25cf I was awarded hard working and quick learner employee at Siemens ABB, Auburn, ME September 2019 \u2013 March 2020 LEAN Engineering Intern (September 2019 \u2013 March 2020) \u25cf Use LEAN tools such as GEMBA (Go and see how the job is done) on the production floor to identify what needs to be improved and find the solution \u25cf Provide support to machine operators in both Vertical Machining Center (VMC) and Weld Braze departments \u25cf Make shadow boards for both VMC and Wels Braze U.S. Citizen Shindano Singi (207) 713-3345 \u2219 78 Maple Street, Apt. 31, Lewiston, ME 04240 \u2219Shindanosingi1@gmail.com \u25cf Write Standard Operation Procedure (SOP) and organize tools to improve operators\u2019 safety and production flow \u25cf Design and assemble parts in Moonshine shop using various mechanical, electrical, hydraulic... tools such as Milling machine (Bridgeport), heat bender, shop saws, ... \u25cf Use hammer drill to drill holes in the concrete \u25cf Use 3D printer (Ender 3) to make plastic parts \u25cf Did PLC wiring on an automated machine \u25cf Wired a single-phase LEESON motor \u25cf Disconnected and wired 480V and 120V gang boxes, respectively \u25cf Lead solution team meeting for both VMC and Weld Braze departments \u25cf Made chip guards for all VMC machines \u25cf Added more features to an existing table to satisfy work flow needs \u25cf Made a table for box making \u25cf Successfully installed electrical, mechanical, hydraulic and air operated devices \u25cf Facilitate communication between management, employees and maintenance \u25cf Worked on individual Projects: o Anode light Nomenclature o Preventive Maintenance (PM) tracking o Weld Braze layout iteration \u25cf Worked on team projects and presented them to all leaders in the plant: o Printer Integration o Passivation Process o Deburr Relocation University of Southern Maine (USM), Portland, ME August 2018 \u2013 May 2020 Undergraduate Research Opportunities Program Project (May 2019 - May 2020) Design and Redesign of Micro Electro-Mechanical Systems (MEMS) Piezoelectric Vibration Energy and sensing devices using Finite Element Modeling softwares: Solidworks and ANSYS. Electronics Laboratory Technician, Electrical Engineering Department (January 2019 \u2013 Sept. 2019) Provided technical support to students performing electronics lab experiments. Maintained equipment. Undergraduate Research Opportunities Program Assistant (Aug 2018 \u2013 May 2019) Test the Micro Electro-Mechanical Systems (MEMS) device: Piezoelectric Vibration Energy Harvester, that I designed in the MEMS class. Catholic Charities of Maine, Interpreter, Portland, ME July 2019 \u2013 March 2020 Interpret (oral) and translate (written) English into/from French, Swahili, and Kibembe House of Languages, Interpreter, Portland, ME Aug. 2015 \u2013 Present Interpret (oral) and translate (written) English into/from French, Swahili, and Kibembe L.L. Bean Manufacturing, Brunswick, ME July 2013 \u2013 Oct. 2018 U.S. Citizen Shindano Singi (207) 713-3345 \u2219 78 Maple Street, Apt. 31, Lewiston, ME 04240 \u2219Shindanosingi1@gmail.com Bean\u2019s Boots Machine Operator: monogram textiles and maintain equipment(Oct. 2014 \u2013 Oct. 2018) Volunteer Stretch Break Leader: led 50 + employees on health breaks (Oct. 2014 \u2013 Oct. 2016) Embroidery Machine Operator: embroider textiles and maintain equipment (July 2013 \u2013 Oct. 2014). Central Maine Community College, Electrician Intern, Auburn, ME May 2015 \u2013 Jul. 2015 Assisted certified electricians with installing new electrical and electronic devices. Amani Yao Atelier de Couture, Tailor, Tanzania 2007 \u2013 2020 Designed, measured, cut, stitched, and hand-tailored shirts, pants and dresses.'))},V=(a(350),a(397)),H=a(391);var G=function(e){var t=e.getUserData,a=(e.videoId,e.getAddedVideoToPlaylistata,Object(n.useState)("")),i=Object(o.a)(a,2),l=i[0],s=i[1],d=Object(n.useState)(""),m=Object(o.a)(d,2),u=m[0],g=m[1],p=Object(n.useState)(null),h=Object(o.a)(p,2),E=(h[0],h[1]),f=Object(n.useState)(!1),v=Object(o.a)(f,2),b=v[0],w=v[1],y=function(){return w(!1)},x=function(){N()({method:"GET",headers:{Authorization:"Bearer ".concat(localStorage.getItem("token")),"Access-Control-Allow-Origin":"",Allow:"GET","Content-type":"Application/json"},withCredentials:!0,url:"https://youtube-mate.herokuapp.com/api/user/user"}).then(function(e){console.log(e),E(e.data)})};return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"login-button "},r.a.createElement(V.a,{variant:"primary login-button",onClick:function(){return w(!0)}},"Login/Register")),r.a.createElement(H.a,{className:"login-show",show:b,onHide:y},r.a.createElement(H.a.Header,{closeButton:!0},r.a.createElement(H.a.Title,null,"Login or Register")),r.a.createElement("div",{className:"inputs-buttons-container"},r.a.createElement(H.a.Body,null,r.a.createElement("div",{className:"input-container"},r.a.createElement("input",{placeholder:"username",onChange:function(e){s(e.target.value)}}),r.a.createElement("input",{placeholder:"password",type:"password",onChange:function(e){g(e.target.value)}})),r.a.createElement("div",{className:"buttons-container"},r.a.createElement("button",{onClick:function(){N()({method:"POST",data:{username:l,password:u},headers:{Authorization:"Bearer ".concat(localStorage.getItem("token")),"Access-Control-Allow-Origin":"",Allow:"GET","Content-type":"Application/json"},withCredentials:!0,url:"https://youtube-mate.herokuapp.com/api/user/login"}).then(function(e){t(e.data.user),console.log(e)}),x()}},"Login")))),r.a.createElement(H.a.Footer,null,r.a.createElement("div",{className:"modal-footer"},r.a.createElement(c.b,{to:"/videoPlayer/:id"},r.a.createElement(V.a,{variant:"secondary close-Button",onClick:y},"Close")),r.a.createElement(V.a,{variant:"secondary save-your-login-button",onClick:x},"Save Your Login")))))};var z=function(){var e=Object(n.useState)({}),t=Object(o.a)(e,2),i=t[0],l=t[1],c=Object(n.useState)([]),m=Object(o.a)(c,2),u=m[0],g=m[1],p=Object(n.useState)(""),h=Object(o.a)(p,2),E=h[0],f=h[1],v=Object(n.useState)(""),b=Object(o.a)(v,2),w=b[0],y=b[1],x=Object(n.useState)({}),S=Object(o.a)(x,2),A=(S[0],S[1]),C=function(e){f(e.target.value)};function N(e){l(e),console.log(i)}var M=Object(n.useRef)(null),P=function(e){e.preventDefault(),O(E),f("")};function O(e){var t=a(43);if(e.length<1)t.request({method:"GET",url:"https://simple-youtube-search.p.rapidapi.com/search",params:{query:"Harmonize"},headers:{"X-RapidAPI-Key":"4ba142e6d6msh81bf2ba816e43dcp19255ejsn91b51af83fa1","X-RapidAPI-Host":"simple-youtube-search.p.rapidapi.com"}}).then(function(e){g(e.data.results)}).catch(function(e){console.error(e)});else{var n={method:"GET",url:"https://simple-youtube-search.p.rapidapi.com/search",params:{query:e},headers:{"X-RapidAPI-Key":"4ba142e6d6msh81bf2ba816e43dcp19255ejsn91b51af83fa1","X-RapidAPI-Host":"simple-youtube-search.p.rapidapi.com"}};t.request(n).then(function(e){g(e.data.results),console.log(e.data)}).catch(function(e){console.error(e)})}}return Object(n.useEffect)(function(){O(E)},[]),console.log(i),r.a.createElement("div",{className:"bg-[#1E1E1E]"},r.a.createElement(s.c,null,r.a.createElement(s.a,{path:"/",element:r.a.createElement(d,null)}),r.a.createElement(s.a,{path:"/homePage",element:r.a.createElement(L,{handleChange:C,handleSubmit:P,searchedString:E,videos:u,getUserData:N,userData:i,forwardedRef:M})}),r.a.createElement(s.a,{path:"/about",element:r.a.createElement(R,null)}),r.a.createElement(s.a,{path:"/registerOrSignin",element:r.a.createElement(G,{getUserData:N,videoId:w,getAddedVideoToPlaylistata:function(e){A(e),console.log(e)}})}),r.a.createElement(s.a,{path:"/videoPlayer/:id",element:r.a.createElement(j,{userData:i,handleChange:C,handleSubmit:P,searchedString:E,videos:u,viewsFunc:function(e){return e<1e3?e:e>999&&e<1e6?(e=(e/1e3).toFixed(1))+"K":e>=1e6&&e<1e9?(e=(e/1e6).toFixed(1))+"M":e>1e9&&e<1e12?(e=(e/1e9).toFixed(1))+"B":void 0},getUserData:N,getaddToPlaylist:function(e){y(e),console.log(e)},videoId:w})})," "," "))},W=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,400)).then(function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,i=t.getLCP,l=t.getTTFB;a(e),n(e),r(e),i(e),l(e)})};a(353);l.a.createRoot(document.getElementById("root")).render(r.a.createElement(c.a,null,r.a.createElement(z,null))),W()},79:function(e,t,a){e.exports=a.p+"static/media/HomePage.cf48c242.png"}},[[128,1,2]]]);
//# sourceMappingURL=main.8830ce05.chunk.js.map