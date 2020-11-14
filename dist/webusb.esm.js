import{LIBUSB_ENDPOINT_IN as e,on as t,removeListener as r,getDeviceList as n,LIBUSB_ENDPOINT_OUT as i,LIBUSB_TRANSFER_TYPE_BULK as s,LIBUSB_TRANSFER_TYPE_INTERRUPT as o,LIBUSB_RECIPIENT_DEVICE as c,LIBUSB_RECIPIENT_INTERFACE as a,LIBUSB_RECIPIENT_ENDPOINT as u,LIBUSB_RECIPIENT_OTHER as l,LIBUSB_REQUEST_TYPE_STANDARD as d,LIBUSB_REQUEST_TYPE_CLASS as h,LIBUSB_REQUEST_TYPE_VENDOR as f,LIBUSB_TRANSFER_STALL as v,LIBUSB_TRANSFER_OVERFLOW as p}from"usb";function m(){}function E(){E.init.call(this)}function g(e){return void 0===e._maxListeners?E.defaultMaxListeners:e._maxListeners}function b(e,t,r){if(t)e.call(r);else for(var n=e.length,i=N(e,n),s=0;s<n;++s)i[s].call(r)}function w(e,t,r,n){if(t)e.call(r,n);else for(var i=e.length,s=N(e,i),o=0;o<i;++o)s[o].call(r,n)}function _(e,t,r,n,i){if(t)e.call(r,n,i);else for(var s=e.length,o=N(e,s),c=0;c<s;++c)o[c].call(r,n,i)}function I(e,t,r,n,i,s){if(t)e.call(r,n,i,s);else for(var o=e.length,c=N(e,o),a=0;a<o;++a)c[a].call(r,n,i,s)}function D(e,t,r,n){if(t)e.apply(r,n);else for(var i=e.length,s=N(e,i),o=0;o<i;++o)s[o].apply(r,n)}function T(e,t,r,n){var i,s,o,c;if("function"!=typeof r)throw new TypeError('"listener" argument must be a function');if((s=e._events)?(s.newListener&&(e.emit("newListener",t,r.listener?r.listener:r),s=e._events),o=s[t]):(s=e._events=new m,e._eventsCount=0),o){if("function"==typeof o?o=s[t]=n?[r,o]:[o,r]:n?o.unshift(r):o.push(r),!o.warned&&(i=g(e))&&i>0&&o.length>i){o.warned=!0;var a=new Error("Possible EventEmitter memory leak detected. "+o.length+" "+t+" listeners added. Use emitter.setMaxListeners() to increase limit");a.name="MaxListenersExceededWarning",a.emitter=e,a.type=t,a.count=o.length,c=a,"function"==typeof console.warn?console.warn(c):console.log(c)}}else o=s[t]=r,++e._eventsCount;return e}function C(e,t,r){var n=!1;function i(){e.removeListener(t,i),n||(n=!0,r.apply(e,arguments))}return i.listener=r,i}function S(e){var t=this._events;if(t){var r=t[e];if("function"==typeof r)return 1;if(r)return r.length}return 0}function N(e,t){for(var r=new Array(t);t--;)r[t]=e[t];return r}m.prototype=Object.create(null),E.EventEmitter=E,E.usingDomains=!1,E.prototype.domain=void 0,E.prototype._events=void 0,E.prototype._maxListeners=void 0,E.defaultMaxListeners=10,E.init=function(){this.domain=null,E.usingDomains&&(void 0).active&&(void 0).Domain,this._events&&this._events!==Object.getPrototypeOf(this)._events||(this._events=new m,this._eventsCount=0),this._maxListeners=this._maxListeners||void 0},E.prototype.setMaxListeners=function(e){if("number"!=typeof e||e<0||isNaN(e))throw new TypeError('"n" argument must be a positive number');return this._maxListeners=e,this},E.prototype.getMaxListeners=function(){return g(this)},E.prototype.emit=function(e){var t,r,n,i,s,o,c,a="error"===e;if(o=this._events)a=a&&null==o.error;else if(!a)return!1;if(c=this.domain,a){if(t=arguments[1],!c){if(t instanceof Error)throw t;var u=new Error('Uncaught, unspecified "error" event. ('+t+")");throw u.context=t,u}return t||(t=new Error('Uncaught, unspecified "error" event')),t.domainEmitter=this,t.domain=c,t.domainThrown=!1,c.emit("error",t),!1}if(!(r=o[e]))return!1;var l="function"==typeof r;switch(n=arguments.length){case 1:b(r,l,this);break;case 2:w(r,l,this,arguments[1]);break;case 3:_(r,l,this,arguments[1],arguments[2]);break;case 4:I(r,l,this,arguments[1],arguments[2],arguments[3]);break;default:for(i=new Array(n-1),s=1;s<n;s++)i[s-1]=arguments[s];D(r,l,this,i)}return!0},E.prototype.addListener=function(e,t){return T(this,e,t,!1)},E.prototype.on=E.prototype.addListener,E.prototype.prependListener=function(e,t){return T(this,e,t,!0)},E.prototype.once=function(e,t){if("function"!=typeof t)throw new TypeError('"listener" argument must be a function');return this.on(e,C(this,e,t)),this},E.prototype.prependOnceListener=function(e,t){if("function"!=typeof t)throw new TypeError('"listener" argument must be a function');return this.prependListener(e,C(this,e,t)),this},E.prototype.removeListener=function(e,t){var r,n,i,s,o;if("function"!=typeof t)throw new TypeError('"listener" argument must be a function');if(!(n=this._events))return this;if(!(r=n[e]))return this;if(r===t||r.listener&&r.listener===t)0==--this._eventsCount?this._events=new m:(delete n[e],n.removeListener&&this.emit("removeListener",e,r.listener||t));else if("function"!=typeof r){for(i=-1,s=r.length;s-- >0;)if(r[s]===t||r[s].listener&&r[s].listener===t){o=r[s].listener,i=s;break}if(i<0)return this;if(1===r.length){if(r[0]=void 0,0==--this._eventsCount)return this._events=new m,this;delete n[e]}else!function(e,t){for(var r=t,n=r+1,i=e.length;n<i;r+=1,n+=1)e[r]=e[n];e.pop()}(r,i);n.removeListener&&this.emit("removeListener",e,o||t)}return this},E.prototype.removeAllListeners=function(e){var t,r;if(!(r=this._events))return this;if(!r.removeListener)return 0===arguments.length?(this._events=new m,this._eventsCount=0):r[e]&&(0==--this._eventsCount?this._events=new m:delete r[e]),this;if(0===arguments.length){for(var n,i=Object.keys(r),s=0;s<i.length;++s)"removeListener"!==(n=i[s])&&this.removeAllListeners(n);return this.removeAllListeners("removeListener"),this._events=new m,this._eventsCount=0,this}if("function"==typeof(t=r[e]))this.removeListener(e,t);else if(t)do{this.removeListener(e,t[t.length-1])}while(t[0]);return this},E.prototype.listeners=function(e){var t,r=this._events;return r&&(t=r[e])?"function"==typeof t?[t.listener||t]:function(e){for(var t=new Array(e.length),r=0;r<t.length;++r)t[r]=e[r].listener||e[r];return t}(t):[]},E.listenerCount=function(e,t){return"function"==typeof e.listenerCount?e.listenerCount(t):S.call(e,t)},E.prototype.listenerCount=S,E.prototype.eventNames=function(){return this._eventsCount>0?Reflect.ownKeys(this._events):[]};class y extends E{constructor(){super(...arguments),this.isEventListenerObject=e=>void 0!==e.handleEvent}addEventListener(e,t){if(t){const r=this.isEventListenerObject(t)?t.handleEvent:t;super.addListener(e,r)}}removeEventListener(e,t){if(t){const r=this.isEventListenerObject(t)?t.handleEvent:t;super.removeListener(e,r)}}dispatchEvent(e){return super.emit(e.type,e)}}class P{constructor(e){this.configurationValue=null,this.configurationName=null,this.interfaces=[],this.configurationValue=e.configurationValue,this.configurationName=e.configurationName,this.interfaces=e.interfaces}}class L{constructor(e){this.interfaceNumber=null,this.alternates=[],this._claimed=!1,this._currentAlternate=0,this._handle=null,this.interfaceNumber=e.interfaceNumber,this.alternates=e.alternates,this._handle=e._handle}get claimed(){return this._claimed}get alternate(){return this.alternates.find(e=>e.alternateSetting===this._currentAlternate)}selectAlternateInterface(e){return k.selectAlternateInterface(this._handle,this.interfaceNumber,e).then(()=>{this._currentAlternate=e})}claimInterface(){return k.claimInterface(this._handle,this.interfaceNumber).then(()=>{this._claimed=!0})}releaseInterface(){return k.releaseInterface(this._handle,this.interfaceNumber).then(()=>{this._claimed=!1})}reset(){this._currentAlternate=0}}class V{constructor(e){this.alternateSetting=null,this.interfaceClass=null,this.interfaceSubclass=null,this.interfaceProtocol=null,this.interfaceName=null,this.endpoints=[],this.alternateSetting=e.alternateSetting,this.interfaceClass=e.interfaceClass,this.interfaceSubclass=e.interfaceSubclass,this.interfaceProtocol=e.interfaceProtocol,this.interfaceName=e.interfaceName,this.endpoints=e.endpoints}}class O{constructor(e){this.endpointNumber=null,this.direction=null,this.type=null,this.packetSize=null,this.endpointNumber=e.endpointNumber,this.direction=e.direction,this.type=e.type,this.packetSize=e.packetSize}}class U{constructor(e){this.manufacturerName=null,this.productName=null,this.serialNumber=null,this._configurations=[],this._currentConfiguration=null,this.url=null,this._maxPacketSize=0,this._handle=null,this.usbVersionMajor=e.usbVersionMajor,this.usbVersionMinor=e.usbVersionMinor,this.usbVersionSubminor=e.usbVersionSubminor,this.deviceClass=e.deviceClass,this.deviceSubclass=e.deviceSubclass,this.deviceProtocol=e.deviceProtocol,this.vendorId=e.vendorId,this.productId=e.productId,this.deviceVersionMajor=e.deviceVersionMajor,this.deviceVersionMinor=e.deviceVersionMinor,this.deviceVersionSubminor=e.deviceVersionSubminor,this.manufacturerName=e.manufacturerName,this.productName=e.productName,this.serialNumber=e.serialNumber,this._configurations=e.configurations,this.url=e.url,this._maxPacketSize=e._maxPacketSize,this._handle=e._handle,this._currentConfiguration=e._currentConfiguration}get configurations(){return this._configurations}get configuration(){return this.configurations.find(e=>e.configurationValue===this._currentConfiguration)}get connected(){return k.getConnected(this._handle)}get opened(){return k.getOpened(this._handle)}getEndpoint(e,t){let r=null,n=null;return this.configuration.interfaces.some(i=>(r=i.alternate.endpoints.find(r=>r.endpointNumber===t&&r.direction===e),r&&(n=i),r)),{endpoint:r,iface:n}}setupInvalid(t){if("interface"===t.recipient){const e=255&t.index,r=this.configuration.interfaces.find(t=>t.interfaceNumber===e);if(!r)return"interface not found";if(!r.claimed)return"invalid state"}else if("endpoint"===t.recipient){const r=15&t.index,n=t.index&e?"in":"out",i=this.getEndpoint(n,r);if(!i.endpoint)return"endpoint not found";if(!i.iface.claimed)return"invalid state"}}open(){return new Promise((e,t)=>this.connected?this.opened?e():void k.open(this._handle).then(e).catch(e=>{t(new Error(`open error: ${e}`))}):t(new Error("open error: device not found")))}close(){return new Promise((e,t)=>{if(!this.connected)return t(new Error("close error: device not found"));if(!this.opened)return e();const r=this.configuration.interfaces.map(e=>this.releaseInterface(e.interfaceNumber));Promise.all(r).catch(e=>{}).then(()=>k.close(this._handle)).then(e).catch(e=>{t(new Error(`close error: ${e}`))})})}selectConfiguration(e){return new Promise((t,r)=>{if(e===this._currentConfiguration)return t();if(!this.connected)return r(new Error("selectConfiguration error: device not found"));return this.configurations.find(t=>t.configurationValue===e)?this.opened?void k.selectConfiguration(this._handle,e).then(()=>{this._currentConfiguration=e,this.configuration.interfaces.forEach(e=>e.reset()),t()}).catch(e=>{r(new Error(`selectConfiguration error: ${e}`))}):r(new Error("selectConfiguration error: invalid state")):r(new Error("selectConfiguration error: configuration not found"))})}claimInterface(e){return new Promise((t,r)=>{if(!this.connected)return r(new Error("claimInterface error: device not found"));const n=this.configuration.interfaces.find(t=>t.interfaceNumber===e);return n?this.opened?n.claimed?t():void n.claimInterface().then(t).catch(e=>{r(new Error(`claimInterface error: ${e}`))}):r(new Error("claimInterface error: invalid state")):r(new Error("claimInterface error: interface not found"))})}releaseInterface(e){return new Promise((t,r)=>{if(!this.connected)return r(new Error("releaseInterface error: device not found"));const n=this.configuration.interfaces.find(t=>t.interfaceNumber===e);return n?this.opened?n.claimed?void n.releaseInterface().then(t).catch(e=>{r(new Error(`releaseInterface error: ${e}`))}):t():r(new Error("releaseInterface error: invalid state")):r(new Error("releaseInterface error: interface not found"))})}selectAlternateInterface(e,t){return new Promise((r,n)=>{if(!this.connected)return n(new Error("selectAlternateInterface error: device not found"));const i=this.configuration.interfaces.find(t=>t.interfaceNumber===e);return i?this.opened&&i.claimed?void i.selectAlternateInterface(t).then(r).catch(e=>{n(new Error(`selectAlternateInterface error: ${e}`))}):n(new Error("selectAlternateInterface error: invalid state")):n(new Error("selectAlternateInterface error: interface not found"))})}controlTransferIn(e,t){return new Promise((r,n)=>{if(!this.connected)return n(new Error("controlTransferIn error: device not found"));if(!this.opened)return n(new Error("controlTransferIn error: invalid state"));const i=this.setupInvalid(e);if(i)return n(new Error(`controlTransferIn error: ${i}`));k.controlTransferIn(this._handle,e,t).then(r).catch(e=>{n(new Error(`controlTransferIn error: ${e}`))})})}controlTransferOut(e,t){return new Promise((r,n)=>{if(!this.connected)return n(new Error("controlTransferOut error: device not found"));if(!this.opened)return n(new Error("controlTransferOut error: invalid state"));const i=this.setupInvalid(e);if(i)return n(new Error(`controlTransferOut error: ${i}`));k.controlTransferOut(this._handle,e,t).then(r).catch(e=>{n(new Error(`controlTransferOut error: ${e}`))})})}clearHalt(e,t){return new Promise((r,n)=>{if(!this.connected)return n(new Error("clearHalt error: device not found"));const i=this.getEndpoint(e,t);return i.endpoint?this.opened&&i.iface.claimed?void k.clearHalt(this._handle,e,t).then(r).catch(e=>{n(new Error(`clearHalt error: ${e}`))}):n(new Error("clearHalt error: invalid state")):n(new Error("clearHalt error: endpoint not found"))})}transferIn(e,t){return new Promise((r,n)=>{if(!this.connected)return n(new Error("transferIn error: device not found"));const i=this.getEndpoint("in",e);return i.endpoint?"interrupt"!==i.endpoint.type&&"bulk"!==i.endpoint.type?n(new Error("transferIn error: invalid access")):this.opened&&i.iface.claimed?void k.transferIn(this._handle,e,t).then(r).catch(e=>{n(new Error(`transferIn error: ${e}`))}):n(new Error("transferIn error: invalid state")):n(new Error("transferIn error: endpoint not found"))})}transferOut(e,t){return new Promise((r,n)=>{if(!this.connected)return n(new Error("transferOut error: device not found"));const i=this.getEndpoint("out",e);return i.endpoint?"interrupt"!==i.endpoint.type&&"bulk"!==i.endpoint.type?n(new Error("transferOut error: invalid access")):this.opened&&i.iface.claimed?void k.transferOut(this._handle,e,t).then(r).catch(e=>{n(new Error(`transferOut error: ${e}`))}):n(new Error("transferOut error: invalid state")):n(new Error("transferOut error: endpoint not found"))})}isochronousTransferIn(e,t){return new Promise((r,n)=>{if(!this.connected)return n(new Error("isochronousTransferIn error: device not found"));const i=this.getEndpoint("in",e);return i.endpoint?"isochronous"!==i.endpoint.type?n(new Error("isochronousTransferIn error: invalid access")):this.opened&&i.iface.claimed?void k.isochronousTransferIn(this._handle,e,t).then(r).catch(e=>{n(new Error(`isochronousTransferIn error: ${e}`))}):n(new Error("isochronousTransferIn error: invalid state")):n(new Error("isochronousTransferIn error: endpoint not found"))})}isochronousTransferOut(e,t,r){return new Promise((n,i)=>{if(!this.connected)return i(new Error("isochronousTransferOut error: device not found"));const s=this.getEndpoint("out",e);return s.endpoint?"isochronous"!==s.endpoint.type?i(new Error("isochronousTransferOut error: invalid access")):this.opened&&s.iface.claimed?void k.isochronousTransferOut(this._handle,e,t,r).then(n).catch(e=>{i(new Error(`isochronousTransferOut error: ${e}`))}):i(new Error("isochronousTransferOut error: invalid state")):i(new Error("isochronousTransferOut error: endpoint not found"))})}reset(){return new Promise((e,t)=>this.connected?this.opened?void k.reset(this._handle).then(e).catch(e=>{t(new Error(`reset error: ${e}`))}):t(new Error("reset error: invalid state")):t(new Error("reset error: device not found")))}}const A=200,B=10,x={WEB_UUID:"3408b638-09a9-47a0-8bfd-a0768815b665",LIBUSB_DT_BOS:15,LIBUSB_DT_BOS_SIZE:5,LIBUSB_TRANSFER_TYPE_MASK:3,USB_VERSION:513,CAPABILITY_VERSION:256,URL_REQUEST_TYPE:192,URL_REQUEST_INDEX:2,CLEAR_FEATURE:1,ENDPOINT_HALT:0};class $ extends E{constructor(){super(),this.devices={};const e=e=>{this.loadDevice(e,B).then(e=>{if(e){const t=this.getDeviceHandle(e);this.devicetoUSBDevice(t).then(e=>{e&&this.emit($.EVENT_DEVICE_CONNECT,e)})}})},n=e=>{const t=this.getDeviceHandle(e);t&&this.devices[t]&&(delete this.devices[t],this.emit($.EVENT_DEVICE_DISCONNECT,t))};this.on("newListener",r=>{0===this.listenerCount(r)&&(r===$.EVENT_DEVICE_CONNECT?t("attach",e):r===$.EVENT_DEVICE_DISCONNECT&&t("detach",n))}),this.on("removeListener",t=>{0===this.listenerCount(t)&&(t===$.EVENT_DEVICE_CONNECT?r("attach",e):t===$.EVENT_DEVICE_DISCONNECT&&r("detach",n))})}getDeviceHandle(e){return null===e.busNumber||null===e.deviceAddress?null:`${e.busNumber}.${e.deviceAddress}`}serialPromises(e,t){return t.reduce(function(t,r){return t.then(t=>e.call(this,r).then(e=>(e&&t.push(e),t)))}.bind(this),Promise.resolve([]))}serialDevicePromises(e,t,r){return r.reduce(function(r,n){return r.then(r=>e.call(this,t,n).then(e=>(r.push(e),r)))}.bind(this),Promise.resolve([]))}delay(e=A){return new Promise((t,r)=>{setTimeout(t,e)})}retryPromise(e,t=0,r=A){return new Promise((n,i)=>{e().then(n).catch(s=>0===t?i(s):this.delay(r).then(()=>this.retryPromise(e,--t,r)).then(n).catch(e=>i(e)))})}loadDevices(e){this.devices={};let t=n();return e&&(t=this.preFilterDevices(t,e)),this.serialPromises(this.loadDevice,t)}preFilterDevices(e,t){return e.filter(e=>t.some(t=>(!t.vendorId||t.vendorId===e.deviceDescriptor.idVendor)&&(!t.productId||t.productId===e.deviceDescriptor.idProduct)))}loadDevice(e,t=0){try{e.configDescriptor,e.allConfigDescriptors,e.deviceDescriptor}catch(e){return Promise.resolve(null)}return this.getCapabilities(e,t).then(e=>this.getWebCapability(e)).then(t=>this.getWebUrl(e,t).then(t=>{const r=this.getDeviceHandle(e);return this.devices[r]={device:e,url:t},e}))}getCapabilities(e,t){return new Promise((r,n)=>{this.openDevice(e,t).then(()=>{e.getCapabilities((t,n)=>{try{e.close()}catch(e){}if(t)return r([]);r(n)})}).catch(e=>{r([])})})}getWebCapability(e){return e.filter(e=>5===e.type).find(e=>{const t=this.decodeUUID(e.data.slice(1,17)),r=e.data.readUInt16LE(17);return t===x.WEB_UUID&&r===x.CAPABILITY_VERSION})}decodeUUID(e){const t=`00000000${e.readUInt32LE(0).toString(16)}`.slice(-8),r=`0000${e.readUInt16LE(4).toString(16)}`.slice(-4),n=`0000${e.readUInt16LE(6).toString(16)}`.slice(-4),i=[];for(let t=8;t<10;t++)i.push(`00${e.readUInt8(t).toString(16)}`.slice(-2));const s=[];for(let t=10;t<16;t++)s.push(`00${e.readUInt8(t).toString(16)}`.slice(-2));return`${t}-${r}-${n}-${i.join("")}-${s.join("")}`}getWebUrl(e,t,r=!0){return new Promise((n,i)=>{if(!t||!t.data||t.data.byteLength<20)return n(null);const s=t.data.readUInt8(19),o=t.data.readUInt8(20);this.openDevice(e).then(()=>{e.controlTransfer(x.URL_REQUEST_TYPE,s,o,x.URL_REQUEST_INDEX,64,(t,s)=>{if(e.close(),t)return r?n(null):i(t);let o=s.toString("utf8",3);const c=s.readUInt8(2);0===c&&(o="http://"+o),1===c&&(o="https://"+o),n(o)})}).catch(e=>{n("")})})}devicetoUSBDevice(e){return new Promise((t,r)=>{const n=this.devices[e].device,i=this.devices[e].url;let s=null,o=null,c=null;try{o=n.configDescriptor,s=n.allConfigDescriptors,c=n.deviceDescriptor}catch(e){return t(null)}return s?this.serialDevicePromises(this.configToUSBConfiguration,n,s).then(e=>{if(!c)return t(new U({_handle:this.getDeviceHandle(n),url:i,configurations:e}));const r=this.decodeVersion(c.bcdDevice),s=this.decodeVersion(c.bcdUSB);let a=null,u=null;return this.getStringDescriptor(n,c.iManufacturer).then(e=>(a=e,this.getStringDescriptor(n,c.iProduct))).then(e=>(u=e,this.getStringDescriptor(n,c.iSerialNumber))).then(l=>{const d={_handle:this.getDeviceHandle(n),_maxPacketSize:c.bMaxPacketSize0,url:i,deviceClass:c.bDeviceClass,deviceSubclass:c.bDeviceSubClass,deviceProtocol:c.bDeviceProtocol,productId:c.idProduct,vendorId:c.idVendor,deviceVersionMajor:r.major,deviceVersionMinor:r.minor,deviceVersionSubminor:r.sub,usbVersionMajor:s.major,usbVersionMinor:s.minor,usbVersionSubminor:s.sub,manufacturerName:a,productName:u,serialNumber:l,configurations:e,_currentConfiguration:o.bConfigurationValue};return t(new U(d))})}).catch(e=>{t(null)}):t(null)})}decodeVersion(e){const t=`0000${e.toString(16)}`.slice(-4);return{major:parseInt(t.substr(0,2),null),minor:parseInt(t.substr(2,1),null),sub:parseInt(t.substr(3,1),null)}}getStringDescriptor(e,t){return new Promise(r=>{this.openDevice(e).then(()=>{e.getStringDescriptor(t,(t,n)=>{e.close(),r(t?"":n.toString())})}).catch(e=>{r("")})})}bufferToDataView(e){const t=new Uint8Array(e).buffer;return new DataView(t)}bufferSourceToBuffer(e){const t=ArrayBuffer.isView(e)?e.buffer.slice(e.byteOffset,e.byteOffset+e.byteLength):e;return Buffer.from(t)}getEndpoint(t,r,n){let s=null;const o=n|("in"===r?e:i);return t.interfaces.some(e=>{const t=e.endpoint(o);return!!t&&(s=t,!0)}),s}getInEndpoint(e,t){const r=this.getEndpoint(e,"in",t);if(r&&"in"===r.direction)return r}getOutEndpoint(e,t){const r=this.getEndpoint(e,"out",t);if(r&&"out"===r.direction)return r}endpointToUSBEndpoint(t){const r=t.bEndpointAddress&e?"in":"out";return new O({endpointNumber:t.bEndpointAddress^("in"===r?e:i),direction:r,type:(t.bmAttributes&x.LIBUSB_TRANSFER_TYPE_MASK)===s?"bulk":(t.bmAttributes&x.LIBUSB_TRANSFER_TYPE_MASK)===o?"interrupt":"isochronous",packetSize:t.wMaxPacketSize})}interfaceToUSBAlternateInterface(e,t){return this.getStringDescriptor(e,t.iInterface).then(e=>new V({alternateSetting:t.bAlternateSetting,interfaceClass:t.bInterfaceClass,interfaceSubclass:t.bInterfaceSubClass,interfaceProtocol:t.bInterfaceProtocol,interfaceName:e,endpoints:t.endpoints.map(this.endpointToUSBEndpoint)}))}interfacesToUSBInterface(e,t){return this.serialDevicePromises(this.interfaceToUSBAlternateInterface,e,t).then(r=>new L({_handle:this.getDeviceHandle(e),interfaceNumber:t[0].bInterfaceNumber,alternates:r}))}configToUSBConfiguration(e,t){return this.getStringDescriptor(e,t.iConfiguration).then(r=>{const n=t.interfaces||[];return this.serialDevicePromises(this.interfacesToUSBInterface,e,n).then(e=>new P({configurationValue:t.bConfigurationValue,configurationName:r,interfaces:e}))})}getDevice(e){return this.devices[e]?this.devices[e].device:null}controlTransferParamsToType(e,t){return("device"===e.recipient?c:"interface"===e.recipient?a:"endpoint"===e.recipient?u:l)|("standard"===e.requestType?d:"class"===e.requestType?h:f)|t}openDevice(e,t=0){return this.retryPromise(()=>new Promise((t,r)=>{try{e.open()}catch(e){return r(e)}t()}),t)}getConnected(e){return null!==this.getDevice(e)}getOpened(e){const t=this.getDevice(e);return!!t&&null!==t.interfaces}listUSBDevices(e){return this.loadDevices(e).then(()=>this.serialPromises(this.devicetoUSBDevice,Object.keys(this.devices)))}open(e){const t=this.getDevice(e);return this.openDevice(t)}close(e){return new Promise((t,r)=>{this.getDevice(e).close(),t()})}selectConfiguration(e,t){return new Promise((r,n)=>{this.getDevice(e).setConfiguration(t,e=>{if(e)return n(e);r()})})}claimInterface(e,t){return new Promise((r,n)=>{this.getDevice(e).interface(t).claim(),r()})}releaseInterface(e,t){return new Promise((r,n)=>{this.getDevice(e).interface(t).release(!0,e=>{if(e)return n(e);r()})})}selectAlternateInterface(e,t,r){return new Promise((n,i)=>{this.getDevice(e).interface(t).setAltSetting(r,e=>{if(e)return i(e);n()})})}controlTransferIn(t,r,n){return new Promise((i,s)=>{const o=this.getDevice(t),c=this.controlTransferParamsToType(r,e);o.controlTransfer(c,r.request,r.value,r.index,n,(e,t)=>{if(e)return e.errno===v?i({status:"stall"}):e.errno===p?i({status:"babble"}):s(e);i({data:this.bufferToDataView(t),status:"ok"})})})}controlTransferOut(e,t,r){return new Promise((n,s)=>{const o=this.getDevice(e),c=this.controlTransferParamsToType(t,i),a=r?this.bufferSourceToBuffer(r):new Buffer(0);o.controlTransfer(c,t.request,t.value,t.index,a,e=>{if(e)return e.errno===v?n({bytesWritten:0,status:"stall"}):s(e);n({bytesWritten:a.byteLength,status:"ok"})})})}clearHalt(t,r,n){return new Promise((s,o)=>{const c=this.getDevice(t),a=n|("in"===r?e:i);c.controlTransfer(u,x.CLEAR_FEATURE,x.ENDPOINT_HALT,a,0,e=>{if(e)return o(e);s()})})}transferIn(e,t,r){return new Promise((n,i)=>{const s=this.getDevice(e);this.getInEndpoint(s,t).transfer(r,(e,t)=>{if(e)return e.errno===v?n({status:"stall"}):e.errno===p?n({status:"babble"}):i(e);n({data:this.bufferToDataView(t),status:"ok"})})})}transferOut(e,t,r){return new Promise((n,i)=>{const s=this.getDevice(e),o=this.getOutEndpoint(s,t),c=this.bufferSourceToBuffer(r);o.transfer(c,e=>{if(e)return e.errno===v?n({bytesWritten:0,status:"stall"}):i(e);n({bytesWritten:c.byteLength,status:"ok"})})})}isochronousTransferIn(e,t,r){return new Promise((e,t)=>{t("isochronousTransferIn error: method not implemented")})}isochronousTransferOut(e,t,r,n){return new Promise((e,t)=>{t("isochronousTransferOut error: method not implemented")})}reset(e){return new Promise((t,r)=>{this.getDevice(e).reset(e=>{if(e)return r(e);t()})})}}$.EVENT_DEVICE_CONNECT="connect",$.EVENT_DEVICE_DISCONNECT="disconnect";const k=new $;class M{constructor(){this.bubbles=!1,this.cancelable=!1,this.cancelBubble=!1,this.composed=!1,this.defaultPrevented=!1,this.eventPhase=0,this.isTrusted=!0,this.returnValue=!0}composedPath(){return[]}initEvent(e,t,r){this.type=e,this.bubbles=t,this.cancelable=r}preventDefault(){this.defaultPrevented=!0}stopImmediatePropagation(){}stopPropagation(){}}class R extends M{constructor(e,t,r){super(),this.initEvent(t,r.bubbles,r.cancelable),this.target=e,this.device=r.device}}class j extends y{constructor(e){super(),this.allowedDevices=[],e=e||{},this.devicesFound=e.devicesFound;const t=e=>{if(this.replaceAllowedDevice(e)){const t=new R(this,"connect",{device:e});this.dispatchEvent(t),this.onconnect&&this.onconnect(t)}},r=e=>{const t=this.allowedDevices.find(t=>t._handle===e);if(t){const e=new R(this,"disconnect",{device:t});this.dispatchEvent(e),this.ondisconnect&&this.ondisconnect(e)}};this.on("newListener",e=>{0===this.listenerCount(e)&&("connect"===e?k.addListener($.EVENT_DEVICE_CONNECT,t):"disconnect"===e&&k.addListener($.EVENT_DEVICE_DISCONNECT,r))}),this.on("removeListener",e=>{0===this.listenerCount(e)&&("connect"===e?k.removeListener($.EVENT_DEVICE_CONNECT,t):"disconnect"===e&&k.removeListener($.EVENT_DEVICE_DISCONNECT,r))})}set onconnect(e){this._onconnect&&this.removeEventListener("connect",this._onconnect),this._onconnect=e,this.addEventListener("connect",this._onconnect)}set ondisconnect(e){this._ondisconnect&&this.removeEventListener("disconnect",this._ondisconnect),this._ondisconnect=e,this.addEventListener("disconnect",this._ondisconnect)}replaceAllowedDevice(e){for(const t in this.allowedDevices)if(this.isSameDevice(e,this.allowedDevices[t]))return this.allowedDevices[t]=e,!0;return!1}isSameDevice(e,t){return e.productId===t.productId&&e.vendorId===t.vendorId&&e.serialNumber===t.serialNumber}filterDevice(e,t){return e.filters.some(e=>{if(e.vendorId&&e.vendorId!==t.vendorId)return!1;if(e.productId&&e.productId!==t.productId)return!1;if(e.classCode){if(t.configuration.interfaces.some(t=>(!e.classCode||e.classCode===t.alternate.interfaceClass)&&((!e.subclassCode||e.subclassCode===t.alternate.interfaceSubclass)&&(!e.protocolCode||e.protocolCode===t.alternate.interfaceProtocol))))return!0}return(!e.classCode||e.classCode===t.deviceClass)&&((!e.subclassCode||e.subclassCode===t.deviceSubclass)&&((!e.protocolCode||e.protocolCode===t.deviceProtocol)&&(!e.serialNumber||e.serialNumber===t.serialNumber)))})}getDevices(){const e=this.allowedDevices.map(e=>({vendorId:e.vendorId||void 0,productId:e.productId||void 0,classCode:e.deviceClass||void 0,subclassCode:e.deviceSubclass||void 0,protocolCode:e.deviceProtocol||void 0,serialNumber:e.serialNumber||void 0}));return k.listUSBDevices(e).then(e=>{return e.filter(e=>{if(!e.connected)return!1;for(const t in this.allowedDevices)if(this.isSameDevice(e,this.allowedDevices[t]))return!0;return!1})})}requestDevice(e){return new Promise((t,r)=>{if(!e)return r(new TypeError("requestDevice error: 1 argument required, but only 0 present"));if(e.constructor!=={}.constructor)return r(new TypeError("requestDevice error: parameter 1 (options) is not an object"));if(!e.filters)return r(new TypeError("requestDevice error: required member filters is undefined"));if(e.filters.constructor!==[].constructor)return r(new TypeError("requestDevice error: the provided value cannot be converted to a sequence"));return e.filters.every(e=>e.protocolCode&&!e.subclassCode?(r(new TypeError("requestDevice error: subclass code is required")),!1):!(e.subclassCode&&!e.classCode)||(r(new TypeError("requestDevice error: class code is required")),!1))?k.listUSBDevices(e.filters).then(n=>{if(0===(n=n.filter(t=>this.filterDevice(e,t))).length)return r(new Error("requestDevice error: no devices found"));function i(e){this.replaceAllowedDevice(e)||this.allowedDevices.push(e),t(e)}return this.devicesFound?this.devicesFound(n).then(e=>(e||r(new Error("selected device not found")),i.call(this,e))):i.call(this,n[0])}).catch(e=>{r(new Error(`requestDevice error: ${e}`))}):void 0})}}const q=new j;export{j as USB,$ as USBAdapter,k as adapter,q as usb};
//# sourceMappingURL=webusb.esm.js.map
