"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[75442],{74789:(e,t,o)=>{o.r(t),o.d(t,{comp:()=>a,data:()=>s});var i=o(6254);const n={},a=(0,o(39583).A)(n,[["render",function(e,t){const o=(0,i.g2)("RouteLink");return(0,i.uX)(),(0,i.CE)("div",null,[t[8]||(t[8]=(0,i.Lk)("h1",{id:"smartwings-wm25l-z",tabindex:"-1"},[(0,i.Lk)("a",{class:"header-anchor",href:"#smartwings-wm25l-z"},[(0,i.Lk)("span",null,"Smartwings WM25L-Z")])],-1)),(0,i.Lk)("table",null,[t[6]||(t[6]=(0,i.Lk)("thead",null,[(0,i.Lk)("tr",null,[(0,i.Lk)("th"),(0,i.Lk)("th")])],-1)),(0,i.Lk)("tbody",null,[t[2]||(t[2]=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"Model"),(0,i.Lk)("td",null,"WM25L-Z")],-1)),(0,i.Lk)("tr",null,[t[1]||(t[1]=(0,i.Lk)("td",null,"Vendor",-1)),(0,i.Lk)("td",null,[(0,i.bF)(o,{to:"/supported-devices/#v=Smartwings"},{default:(0,i.k6)((()=>t[0]||(t[0]=[(0,i.eW)("Smartwings")]))),_:1})])]),t[3]||(t[3]=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"Description"),(0,i.Lk)("td",null,"Roller shade")],-1)),t[4]||(t[4]=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"Exposes"),(0,i.Lk)("td",null,"cover (state, position), battery, linkquality")],-1)),t[5]||(t[5]=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"Picture"),(0,i.Lk)("td",null,[(0,i.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/WM25L-Z.png",alt:"Smartwings WM25L-Z"})])],-1))])]),t[9]||(t[9]=(0,i.Fv)('<h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes"><span>Notes</span></a></h2><h3 id="pairing" tabindex="-1"><a class="header-anchor" href="#pairing"><span>Pairing</span></a></h3><p>Press and hold the button on the motor head for 6 seconds until the motor feedback twice then release the button. The red led light on indicate to enter the pairing mode.</p><h3 id="end-position" tabindex="-1"><a class="header-anchor" href="#end-position"><span>End Position</span></a></h3><p>The roller blind maximum extension can be set by moving the blind to the desired position and then double pressing the up or down button. To reset the end position so you can define a newer more extended end position, open the blind fully. Then double press the up or down button. You can now set the blind extension again.</p><h3 id="open-close-behavior" tabindex="-1"><a class="header-anchor" href="#open-close-behavior"><span>Open/Close Behavior</span></a></h3><p>If the unit is shipped with the open and close actions swapped (where OPEN causes the shade to lengthen instead of shorten?), it can be reversed with the included remote. To reverse the open/close behavior:</p><ol><li>open the back of the remote and press the P (program buttom) once - the motor will activate once briefly</li><li>press and hold the UP and DOWN arrow buttons on the remote briefly until you hear the motor activate once briefly</li><li>the open/close behavior should now be reversed</li></ol><h2 id="options" tabindex="-1"><a class="header-anchor" href="#options"><span>Options</span></a></h2>',9)),(0,i.Lk)("p",null,[(0,i.Lk)("em",null,[(0,i.bF)(o,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,i.k6)((()=>t[7]||(t[7]=[(0,i.eW)("How to use device type specific configuration")]))),_:1})])]),t[10]||(t[10]=(0,i.Fv)('<ul><li><p><code>invert_cover</code>: Inverts the cover position, false: open=100,close=0, true: open=0,close=100 (default false). The value must be <code>true</code> or <code>false</code></p></li><li><p><code>cover_position_tilt_disable_report</code>: Do not publish set cover target position as a normal &#39;position&#39; value (default false). The value must be <code>true</code> or <code>false</code></p></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="cover" tabindex="-1"><a class="header-anchor" href="#cover"><span>Cover</span></a></h3><p>The current state of this cover is in the published state under the <code>state</code> property (value is <code>OPEN</code> or <code>CLOSE</code>). To control this cover publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state&quot;: &quot;OPEN&quot;}</code>, <code>{&quot;state&quot;: &quot;CLOSE&quot;}</code>, <code>{&quot;state&quot;: &quot;STOP&quot;}</code>. It&#39;s not possible to read (<code>/get</code>) this value. To change the position publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;position&quot;: VALUE}</code> where <code>VALUE</code> is a number between <code>0</code> and <code>100</code>.</p><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric"><span>Battery (numeric)</span></a></h3><p>Remaining battery in %, can take up to 24 hours before reported. Value can be found in the published state on the <code>battery</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric"><span>Linkquality (numeric)</span></a></h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',8))])}]]),s=JSON.parse('{"path":"/devices/WM25L-Z.html","title":"Smartwings WM25L-Z control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Smartwings WM25L-Z control via MQTT","description":"Integrate your Smartwings WM25L-Z via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2022-03-03T21:28:38.000Z"},"headers":[{"level":2,"title":"Notes","slug":"notes","link":"#notes","children":[{"level":3,"title":"Pairing","slug":"pairing","link":"#pairing","children":[]},{"level":3,"title":"End Position","slug":"end-position","link":"#end-position","children":[]},{"level":3,"title":"Open/Close Behavior","slug":"open-close-behavior","link":"#open-close-behavior","children":[]}]},{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Cover","slug":"cover","link":"#cover","children":[]},{"level":3,"title":"Battery (numeric)","slug":"battery-numeric","link":"#battery-numeric","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1733258031000},"filePathRelative":"devices/WM25L-Z.md"}')}}]);