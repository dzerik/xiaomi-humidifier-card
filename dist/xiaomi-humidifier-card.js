function t(t,e,i,s){var o,r=arguments.length,n=r<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,s);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(n=(r<3?o(n):r>3?o(e,i,n):o(e,i))||n);return r>3&&n&&Object.defineProperty(e,i,n),n}"function"==typeof SuppressedError&&SuppressedError;const e=globalThis,i=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s=Symbol(),o=new WeakMap;let r=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==s)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(i&&void 0===t){const i=void 0!==e&&1===e.length;i&&(t=o.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&o.set(e,t))}return t}toString(){return this.cssText}};const n=(t,...e)=>{const i=1===t.length?t[0]:e.reduce((e,i,s)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[s+1],t[0]);return new r(i,t,s)},a=i?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new r("string"==typeof t?t:t+"",void 0,s))(e)})(t):t,{is:c,defineProperty:h,getOwnPropertyDescriptor:d,getOwnPropertyNames:l,getOwnPropertySymbols:u,getPrototypeOf:p}=Object,m=globalThis,_=m.trustedTypes,f=_?_.emptyScript:"",g=m.reactiveElementPolyfillSupport,y=(t,e)=>t,v={toAttribute(t,e){switch(e){case Boolean:t=t?f:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},$=(t,e)=>!c(t,e),w={attribute:!0,type:String,converter:v,reflect:!1,useDefault:!1,hasChanged:$};Symbol.metadata??=Symbol("metadata"),m.litPropertyMetadata??=new WeakMap;let b=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=w){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(t,i,e);void 0!==s&&h(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){const{get:s,set:o}=d(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get:s,set(e){const r=s?.call(this);o?.call(this,e),this.requestUpdate(t,r,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??w}static _$Ei(){if(this.hasOwnProperty(y("elementProperties")))return;const t=p(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(y("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(y("properties"))){const t=this.properties,e=[...l(t),...u(t)];for(const i of e)this.createProperty(i,t[i])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,i]of e)this.elementProperties.set(t,i)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const i=this._$Eu(t,e);void 0!==i&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(a(t))}else void 0!==t&&e.push(a(t));return e}static _$Eu(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((t,s)=>{if(i)t.adoptedStyleSheets=s.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const i of s){const s=document.createElement("style"),o=e.litNonce;void 0!==o&&s.setAttribute("nonce",o),s.textContent=i.cssText,t.appendChild(s)}})(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ET(t,e){const i=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,i);if(void 0!==s&&!0===i.reflect){const o=(void 0!==i.converter?.toAttribute?i.converter:v).toAttribute(e,i.type);this._$Em=t,null==o?this.removeAttribute(s):this.setAttribute(s,o),this._$Em=null}}_$AK(t,e){const i=this.constructor,s=i._$Eh.get(t);if(void 0!==s&&this._$Em!==s){const t=i.getPropertyOptions(s),o="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:v;this._$Em=s;const r=o.fromAttribute(e,t.type);this[s]=r??this._$Ej?.get(s)??r,this._$Em=null}}requestUpdate(t,e,i){if(void 0!==t){const s=this.constructor,o=this[t];if(i??=s.getPropertyOptions(t),!((i.hasChanged??$)(o,e)||i.useDefault&&i.reflect&&o===this._$Ej?.get(t)&&!this.hasAttribute(s._$Eu(t,i))))return;this.C(t,e,i)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(t,e,{useDefault:i,reflect:s,wrapped:o},r){i&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,r??e??this[t]),!0!==o||void 0!==r)||(this._$AL.has(t)||(this.hasUpdated||i||(e=void 0),this._$AL.set(t,e)),!0===s&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,i]of t){const{wrapped:t}=i,s=this[e];!0!==t||this._$AL.has(e)||void 0===s||this.C(e,void 0,i,s)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(e)):this._$EM()}catch(e){throw t=!1,this._$EM(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(t){}firstUpdated(t){}};b.elementStyles=[],b.shadowRootOptions={mode:"open"},b[y("elementProperties")]=new Map,b[y("finalized")]=new Map,g?.({ReactiveElement:b}),(m.reactiveElementVersions??=[]).push("2.1.1");const x=globalThis,A=x.trustedTypes,E=A?A.createPolicy("lit-html",{createHTML:t=>t}):void 0,S="$lit$",k=`lit$${Math.random().toFixed(9).slice(2)}$`,C="?"+k,O=`<${C}>`,H=document,P=()=>H.createComment(""),M=t=>null===t||"object"!=typeof t&&"function"!=typeof t,T=Array.isArray,U="[ \t\n\f\r]",z=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,N=/-->/g,R=/>/g,j=RegExp(`>|${U}(?:([^\\s"'>=/]+)(${U}*=${U}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),I=/'/g,L=/"/g,D=/^(?:script|style|textarea|title)$/i,B=(t=>(e,...i)=>({_$litType$:t,strings:e,values:i}))(1),W=Symbol.for("lit-noChange"),q=Symbol.for("lit-nothing"),V=new WeakMap,K=H.createTreeWalker(H,129);function X(t,e){if(!T(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==E?E.createHTML(e):e}const F=(t,e)=>{const i=t.length-1,s=[];let o,r=2===e?"<svg>":3===e?"<math>":"",n=z;for(let e=0;e<i;e++){const i=t[e];let a,c,h=-1,d=0;for(;d<i.length&&(n.lastIndex=d,c=n.exec(i),null!==c);)d=n.lastIndex,n===z?"!--"===c[1]?n=N:void 0!==c[1]?n=R:void 0!==c[2]?(D.test(c[2])&&(o=RegExp("</"+c[2],"g")),n=j):void 0!==c[3]&&(n=j):n===j?">"===c[0]?(n=o??z,h=-1):void 0===c[1]?h=-2:(h=n.lastIndex-c[2].length,a=c[1],n=void 0===c[3]?j:'"'===c[3]?L:I):n===L||n===I?n=j:n===N||n===R?n=z:(n=j,o=void 0);const l=n===j&&t[e+1].startsWith("/>")?" ":"";r+=n===z?i+O:h>=0?(s.push(a),i.slice(0,h)+S+i.slice(h)+k+l):i+k+(-2===h?e:l)}return[X(t,r+(t[i]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),s]};class J{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let o=0,r=0;const n=t.length-1,a=this.parts,[c,h]=F(t,e);if(this.el=J.createElement(c,i),K.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(s=K.nextNode())&&a.length<n;){if(1===s.nodeType){if(s.hasAttributes())for(const t of s.getAttributeNames())if(t.endsWith(S)){const e=h[r++],i=s.getAttribute(t).split(k),n=/([.?@])?(.*)/.exec(e);a.push({type:1,index:o,name:n[2],strings:i,ctor:"."===n[1]?tt:"?"===n[1]?et:"@"===n[1]?it:Y}),s.removeAttribute(t)}else t.startsWith(k)&&(a.push({type:6,index:o}),s.removeAttribute(t));if(D.test(s.tagName)){const t=s.textContent.split(k),e=t.length-1;if(e>0){s.textContent=A?A.emptyScript:"";for(let i=0;i<e;i++)s.append(t[i],P()),K.nextNode(),a.push({type:2,index:++o});s.append(t[e],P())}}}else if(8===s.nodeType)if(s.data===C)a.push({type:2,index:o});else{let t=-1;for(;-1!==(t=s.data.indexOf(k,t+1));)a.push({type:7,index:o}),t+=k.length-1}o++}}static createElement(t,e){const i=H.createElement("template");return i.innerHTML=t,i}}function Z(t,e,i=t,s){if(e===W)return e;let o=void 0!==s?i._$Co?.[s]:i._$Cl;const r=M(e)?void 0:e._$litDirective$;return o?.constructor!==r&&(o?._$AO?.(!1),void 0===r?o=void 0:(o=new r(t),o._$AT(t,i,s)),void 0!==s?(i._$Co??=[])[s]=o:i._$Cl=o),void 0!==o&&(e=Z(t,o._$AS(t,e.values),o,s)),e}class G{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,s=(t?.creationScope??H).importNode(e,!0);K.currentNode=s;let o=K.nextNode(),r=0,n=0,a=i[0];for(;void 0!==a;){if(r===a.index){let e;2===a.type?e=new Q(o,o.nextSibling,this,t):1===a.type?e=new a.ctor(o,a.name,a.strings,this,t):6===a.type&&(e=new st(o,this,t)),this._$AV.push(e),a=i[++n]}r!==a?.index&&(o=K.nextNode(),r++)}return K.currentNode=H,s}p(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class Q{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,s){this.type=2,this._$AH=q,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=Z(this,t,e),M(t)?t===q||null==t||""===t?(this._$AH!==q&&this._$AR(),this._$AH=q):t!==this._$AH&&t!==W&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>T(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==q&&M(this._$AH)?this._$AA.nextSibling.data=t:this.T(H.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:i}=t,s="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=J.createElement(X(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===s)this._$AH.p(e);else{const t=new G(s,this),i=t.u(this.options);t.p(e),this.T(i),this._$AH=t}}_$AC(t){let e=V.get(t.strings);return void 0===e&&V.set(t.strings,e=new J(t)),e}k(t){T(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const o of t)s===e.length?e.push(i=new Q(this.O(P()),this.O(P()),this,this.options)):i=e[s],i._$AI(o),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class Y{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,s,o){this.type=1,this._$AH=q,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=o,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=q}_$AI(t,e=this,i,s){const o=this.strings;let r=!1;if(void 0===o)t=Z(this,t,e,0),r=!M(t)||t!==this._$AH&&t!==W,r&&(this._$AH=t);else{const s=t;let n,a;for(t=o[0],n=0;n<o.length-1;n++)a=Z(this,s[i+n],e,n),a===W&&(a=this._$AH[n]),r||=!M(a)||a!==this._$AH[n],a===q?t=q:t!==q&&(t+=(a??"")+o[n+1]),this._$AH[n]=a}r&&!s&&this.j(t)}j(t){t===q?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class tt extends Y{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===q?void 0:t}}class et extends Y{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==q)}}class it extends Y{constructor(t,e,i,s,o){super(t,e,i,s,o),this.type=5}_$AI(t,e=this){if((t=Z(this,t,e,0)??q)===W)return;const i=this._$AH,s=t===q&&i!==q||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,o=t!==q&&(i===q||s);s&&this.element.removeEventListener(this.name,this,i),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class st{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){Z(this,t)}}const ot=x.litHtmlPolyfillSupport;ot?.(J,Q),(x.litHtmlVersions??=[]).push("3.3.1");const rt=globalThis;class nt extends b{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{const s=i?.renderBefore??e;let o=s._$litPart$;if(void 0===o){const t=i?.renderBefore??null;s._$litPart$=o=new Q(e.insertBefore(P(),t),t,void 0,i??{})}return o._$AI(t),o})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return W}}nt._$litElement$=!0,nt.finalized=!0,rt.litElementHydrateSupport?.({LitElement:nt});const at=rt.litElementPolyfillSupport;at?.({LitElement:nt}),(rt.litElementVersions??=[]).push("4.2.1");const ct=t=>(e,i)=>{void 0!==i?i.addInitializer(()=>{customElements.define(t,e)}):customElements.define(t,e)},ht={attribute:!0,type:String,converter:v,reflect:!1,hasChanged:$},dt=(t=ht,e,i)=>{const{kind:s,metadata:o}=i;let r=globalThis.litPropertyMetadata.get(o);if(void 0===r&&globalThis.litPropertyMetadata.set(o,r=new Map),"setter"===s&&((t=Object.create(t)).wrapped=!0),r.set(i.name,t),"accessor"===s){const{name:s}=i;return{set(i){const o=e.get.call(this);e.set.call(this,i),this.requestUpdate(s,o,t)},init(e){return void 0!==e&&this.C(s,void 0,t,e),e}}}if("setter"===s){const{name:s}=i;return function(i){const o=this[s];e.call(this,i),this.requestUpdate(s,o,t)}}throw Error("Unsupported decorator location: "+s)};function lt(t){return(e,i)=>"object"==typeof i?dt(t,e,i):((t,e,i)=>{const s=e.hasOwnProperty(i);return e.constructor.createProperty(i,t),s?Object.getOwnPropertyDescriptor(e,i):void 0})(t,e,i)}function ut(t){return lt({...t,state:!0,attribute:!1})}const pt=n`
  :host {
    --primary-color: var(--ha-card-primary-color, #03a9f4);
    --secondary-color: var(--ha-card-secondary-color, #4fc3f7);
    --text-color: var(--primary-text-color, #212121);
    --text-secondary-color: var(--secondary-text-color, #727272);
    --disabled-color: var(--disabled-text-color, #bdbdbd);
    --card-background: var(--ha-card-background, var(--card-background-color, #fff));
    --arc-color: var(--primary-color);
    --arc-background: var(--disabled-text-color, #e0e0e0);
  }

  ha-card {
    padding: 16px;
    box-sizing: border-box;
  }

  .card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 16px;
  }

  .card-header .name {
    font-size: 1.2em;
    font-weight: 500;
    color: var(--text-color);
  }

  .card-header .state {
    font-size: 0.9em;
    color: var(--text-secondary-color);
  }

  .power-button {
    --mdc-icon-button-size: 40px;
    color: var(--text-secondary-color);
  }

  .power-button.on {
    color: var(--primary-color);
  }

  /* Circular display */
  .humidity-circle {
    position: relative;
    width: 200px;
    height: 200px;
    margin: 0 auto 16px;
  }

  .humidity-circle svg {
    width: 100%;
    height: 100%;
    transform: rotate(-90deg);
  }

  .humidity-circle .arc-background {
    fill: none;
    stroke: var(--arc-background);
    stroke-width: 8;
    stroke-linecap: round;
  }

  .humidity-circle .arc-progress {
    fill: none;
    stroke: var(--arc-color);
    stroke-width: 8;
    stroke-linecap: round;
    transition: stroke-dashoffset 0.3s ease;
  }

  .humidity-circle .center-content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
  }

  .humidity-circle .current-humidity {
    font-size: 2.5em;
    font-weight: 500;
    color: var(--text-color);
    line-height: 1;
  }

  .humidity-circle .humidity-unit {
    font-size: 0.8em;
    color: var(--text-secondary-color);
  }

  .humidity-circle .target-humidity {
    font-size: 1em;
    color: var(--text-secondary-color);
    margin-top: 4px;
  }

  .humidity-circle .humidity-icon {
    font-size: 1.5em;
    color: var(--primary-color);
    margin-bottom: 4px;
  }

  /* Target humidity slider */
  .target-slider {
    display: flex;
    align-items: center;
    gap: 8px;
    margin: 16px 0;
    padding: 0 8px;
  }

  .target-slider ha-icon-button {
    --mdc-icon-button-size: 36px;
    color: var(--text-secondary-color);
  }

  .target-slider input[type="range"] {
    flex: 1;
    height: 4px;
    -webkit-appearance: none;
    background: var(--arc-background);
    border-radius: 2px;
    outline: none;
  }

  .target-slider input[type="range"]::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: var(--primary-color);
    cursor: pointer;
    border: 2px solid var(--card-background);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }

  .target-slider .value {
    min-width: 40px;
    text-align: center;
    font-weight: 500;
    color: var(--text-color);
  }

  /* Mode buttons */
  .mode-buttons {
    display: flex;
    justify-content: center;
    gap: 8px;
    flex-wrap: wrap;
    margin: 16px 0;
  }

  .mode-button {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 8px 16px;
    border-radius: 8px;
    background: var(--ha-card-background, var(--card-background-color, #f5f5f5));
    border: 1px solid var(--divider-color, #e0e0e0);
    cursor: pointer;
    transition: all 0.2s ease;
    min-width: 60px;
  }

  .mode-button:hover {
    background: var(--primary-color);
    color: white;
  }

  .mode-button.active {
    background: var(--primary-color);
    color: white;
    border-color: var(--primary-color);
  }

  .mode-button ha-icon {
    margin-bottom: 4px;
  }

  .mode-button .mode-name {
    font-size: 0.75em;
    text-transform: uppercase;
  }

  /* Switches row */
  .switches-row {
    display: flex;
    justify-content: center;
    gap: 16px;
    flex-wrap: wrap;
    padding: 12px 0;
    border-top: 1px solid var(--divider-color, #e0e0e0);
  }

  .switch-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
    padding: 8px;
    border-radius: 8px;
    transition: background 0.2s ease;
  }

  .switch-item:hover {
    background: rgba(0, 0, 0, 0.05);
  }

  .switch-item ha-icon {
    color: var(--disabled-color);
    transition: color 0.2s ease;
  }

  .switch-item.on ha-icon {
    color: var(--primary-color);
  }

  .switch-item .switch-name {
    font-size: 0.7em;
    color: var(--text-secondary-color);
    margin-top: 4px;
    text-align: center;
  }

  /* Sensors row */
  .sensors-row {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    gap: 8px;
    padding: 12px 0;
    border-top: 1px solid var(--divider-color, #e0e0e0);
  }

  .sensor-item {
    display: flex;
    align-items: center;
    gap: 4px;
    padding: 4px 8px;
  }

  .sensor-item ha-icon {
    color: var(--text-secondary-color);
    --mdc-icon-size: 18px;
  }

  .sensor-item .sensor-value {
    font-size: 0.9em;
    color: var(--text-color);
  }

  .sensor-item .sensor-unit {
    font-size: 0.8em;
    color: var(--text-secondary-color);
  }

  /* Status indicators */
  .status-indicators {
    display: flex;
    justify-content: center;
    gap: 16px;
    margin-top: 8px;
  }

  .status-indicator {
    display: flex;
    align-items: center;
    gap: 4px;
    font-size: 0.85em;
  }

  .status-indicator.warning {
    color: var(--warning-color, #ff9800);
  }

  .status-indicator.error {
    color: var(--error-color, #f44336);
  }

  .status-indicator.ok {
    color: var(--success-color, #4caf50);
  }

  /* Unavailable state */
  .unavailable {
    opacity: 0.5;
    pointer-events: none;
  }

  .unavailable-message {
    text-align: center;
    color: var(--text-secondary-color);
    padding: 20px;
  }

  /* Responsive styles */
  @media (max-width: 400px) {
    .humidity-circle {
      width: 160px;
      height: 160px;
    }

    .humidity-circle .current-humidity {
      font-size: 2em;
    }

    .mode-buttons {
      gap: 4px;
    }

    .mode-button {
      padding: 6px 12px;
      min-width: 50px;
    }

    .switches-row {
      gap: 8px;
    }

    .switch-item {
      padding: 4px;
    }
  }

  @media (min-width: 600px) {
    .humidity-circle {
      width: 240px;
      height: 240px;
    }

    .humidity-circle .current-humidity {
      font-size: 3em;
    }
  }
`;const mt={en:{common:{unavailable:"Unavailable",on:"On",off:"Off",target:"Target"},modes:{Low:"Low",Medium:"Medium",High:"High",Humidity:"Auto",Auto:"Auto",Silent:"Silent",Strong:"Strong"},switches:{led:"LED",led_light:"LED",buzzer:"Buzzer",child_lock:"Lock",dry:"Dry",overwet_protect:"Protect"},sensors:{temperature:"Temp",humidity:"Humidity",water_level:"Water",motor_speed:"Speed",use_time:"Time"},status:{water_tank_ok:"Tank OK",water_tank_missing:"No Tank",water_shortage:"Add Water",no_water:"No Water"},editor:{entity:"Entity (required)",name:"Name (optional)",show_name:"Show name",show_state:"Show state",show_target_humidity:"Show target humidity",show_mode:"Show mode buttons",compact:"Compact mode"}},ru:{common:{unavailable:"Недоступно",on:"Вкл",off:"Выкл",target:"Цель"},modes:{Low:"Низкий",Medium:"Средний",High:"Высокий",Humidity:"Авто",Auto:"Авто",Silent:"Тихий",Strong:"Сильный"},switches:{led:"LED",led_light:"LED",buzzer:"Звук",child_lock:"Блок",dry:"Сушка",overwet_protect:"Защита"},sensors:{temperature:"Темп",humidity:"Влажн",water_level:"Вода",motor_speed:"Скор",use_time:"Время"},status:{water_tank_ok:"Бак ОК",water_tank_missing:"Нет бака",water_shortage:"Долейте воду",no_water:"Нет воды"},editor:{entity:"Объект (обязательно)",name:"Название (опционально)",show_name:"Показывать название",show_state:"Показывать состояние",show_target_humidity:"Показывать целевую влажность",show_mode:"Показывать кнопки режимов",compact:"Компактный режим"}}};function _t(t,e="en"){const i=mt[e]||mt.en,s=t.split(".");let o=i;for(const e of s){if(!o||"object"!=typeof o||!(e in o)){o=mt.en;for(const e of s){if(!o||"object"!=typeof o||!(e in o))return t;o=o[e]}break}o=o[e]}return"string"==typeof o?o:t}function ft(t){if(t?.language){const e=t.language.split("-")[0].toLowerCase();if(e in mt)return e}return"en"}const gt={led:{icon:"mdi:led-on",name:"LED"},led_light:{icon:"mdi:led-on",name:"LED"},buzzer:{icon:"mdi:volume-high",name:"Buzzer"},child_lock:{icon:"mdi:lock",name:"Child Lock"},dry:{icon:"mdi:water-off",name:"Dry Mode"},overwet_protect:{icon:"mdi:water-alert",name:"Overwet Protect"}},yt={temperature:{icon:"mdi:thermometer",name:"Temperature",unit:"°C"},humidity:{icon:"mdi:water-percent",name:"Humidity",unit:"%"},water_level:{icon:"mdi:water",name:"Water Level",unit:"%"},motor_speed:{icon:"mdi:fan",name:"Motor Speed",unit:"rpm"},use_time:{icon:"mdi:clock-outline",name:"Use Time",unit:"h"}},vt={water_tank:{icon_on:"mdi:cup-water",icon_off:"mdi:cup-off-outline",name:"Water Tank"},water_shortage:{icon_on:"mdi:water-off",icon_off:"mdi:water",name:"Water Shortage"},no_water:{icon_on:"mdi:water-off",icon_off:"mdi:water",name:"No Water"}};let $t=class extends nt{setConfig(t){this._config=t}_valueChanged(t){if(!this._config||!this.hass)return;const e=t.target,i=e.dataset.configKey;if(!i)return;let s=e.value;"checkbox"===e.type&&(s=e.checked);const o={...this._config,[i]:s},r=new CustomEvent("config-changed",{detail:{config:o},bubbles:!0,composed:!0});this.dispatchEvent(r)}_getEntities(t){return this.hass?Object.keys(this.hass.states).filter(e=>e.startsWith(`${t}.`)).sort():[]}render(){if(!this.hass||!this._config)return B``;const t=ft(this.hass),e=[...this._getEntities("fan"),...this._getEntities("humidifier")].sort();return B`
      <div class="form">
        <div class="row">
          <label>${_t("editor.entity",t)}</label>
          <select
            data-config-key="entity"
            .value=${this._config.entity||""}
            @change=${this._valueChanged}
          >
            <option value="">-- Select entity --</option>
            ${e.map(t=>B`
              <option value="${t}" ?selected=${t===this._config.entity}>
                ${this.hass.states[t]?.attributes?.friendly_name||t}
              </option>
            `)}
          </select>
        </div>

        <div class="row">
          <label>${_t("editor.name",t)}</label>
          <input
            type="text"
            data-config-key="name"
            .value=${this._config.name||""}
            @input=${this._valueChanged}
          />
        </div>

        <div class="section-title">Display Options</div>

        <div class="checkbox-row">
          <input
            type="checkbox"
            id="show_name"
            data-config-key="show_name"
            .checked=${!1!==this._config.show_name}
            @change=${this._valueChanged}
          />
          <label for="show_name">${_t("editor.show_name",t)}</label>
        </div>

        <div class="checkbox-row">
          <input
            type="checkbox"
            id="show_state"
            data-config-key="show_state"
            .checked=${!1!==this._config.show_state}
            @change=${this._valueChanged}
          />
          <label for="show_state">${_t("editor.show_state",t)}</label>
        </div>

        <div class="checkbox-row">
          <input
            type="checkbox"
            id="show_target_humidity"
            data-config-key="show_target_humidity"
            .checked=${!1!==this._config.show_target_humidity}
            @change=${this._valueChanged}
          />
          <label for="show_target_humidity">${_t("editor.show_target_humidity",t)}</label>
        </div>

        <div class="checkbox-row">
          <input
            type="checkbox"
            id="show_mode"
            data-config-key="show_mode"
            .checked=${!1!==this._config.show_mode}
            @change=${this._valueChanged}
          />
          <label for="show_mode">${_t("editor.show_mode",t)}</label>
        </div>

        <div class="checkbox-row">
          <input
            type="checkbox"
            id="compact"
            data-config-key="compact"
            .checked=${!0===this._config.compact}
            @change=${this._valueChanged}
          />
          <label for="compact">${_t("editor.compact",t)}</label>
        </div>
      </div>
    `}};$t.styles=n`
    .form {
      display: flex;
      flex-direction: column;
      gap: 16px;
    }

    .row {
      display: flex;
      flex-direction: column;
      gap: 4px;
    }

    .row label {
      font-weight: 500;
      font-size: 0.9em;
      color: var(--primary-text-color);
    }

    .row input[type="text"],
    .row select {
      padding: 8px 12px;
      border: 1px solid var(--divider-color, #e0e0e0);
      border-radius: 4px;
      font-size: 1em;
      background: var(--card-background-color);
      color: var(--primary-text-color);
    }

    .checkbox-row {
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .checkbox-row input[type="checkbox"] {
      width: 18px;
      height: 18px;
    }

    .section-title {
      font-weight: 600;
      margin-top: 16px;
      margin-bottom: 8px;
      color: var(--primary-text-color);
    }
  `,t([lt({attribute:!1})],$t.prototype,"hass",void 0),t([ut()],$t.prototype,"_config",void 0),$t=t([ct("xiaomi-humidifier-card-editor")],$t);console.info("%c XIAOMI-HUMIDIFIER-CARD %c 1.0.0 ","color: white; background: #03a9f4; font-weight: bold;","color: #03a9f4; background: white; font-weight: bold;"),window.customCards=window.customCards||[],window.customCards.push({type:"xiaomi-humidifier-card",name:"Xiaomi Humidifier Card",description:"Thermostat-style card for Xiaomi humidifiers",preview:!0});let wt=class extends nt{constructor(){super(...arguments),this._entityId="",this._relatedEntities=new Map}setConfig(t){if(!t.entity)throw new Error("Entity is required");this._config={show_name:!0,show_state:!0,show_current_humidity:!0,show_target_humidity:!0,show_mode:!0,show_power:!0,compact:!1,...t},this._entityId=t.entity}getCardSize(){return this._config?.compact?3:5}get _entity(){return this.hass?.states[this._entityId]}_getRelatedEntities(){if(!this.hass||!this._entityId)return;const t=this._entityId.split(".")[1].replace(/_fan$/,"").replace(/_humidifier$/,"");this._relatedEntities.clear();for(const e of Object.keys(this.hass.states)){const i=e.split(".");if(i[1].startsWith(t)){const s=i[0],o=i[1].replace(t+"_","");this._relatedEntities.set(`${s}.${o}`,e)}}}_findEntity(t){for(const e of t){const t=`${e}_entity`;if(this._config[t]){const e=this.hass?.states[this._config[t]];if(e)return e}for(const[t,i]of this._relatedEntities)if(t.includes(e))return this.hass?.states[i];for(const t of Object.keys(this.hass?.states||{}))if(t.includes(e))return this.hass.states[t]}}get _currentHumidity(){const t=this._entity?.attributes;if(void 0!==t?.humidity)return Number(t.humidity);const e=this._findEntity(["sensor.humidity","humidity"]);return e?Number(e.state):void 0}get _targetHumidity(){const t=this._entity?.attributes;if(void 0!==t?.target_humidity)return Number(t.target_humidity);const e=this._findEntity(["number.target_humidity","target_humidity"]);return e?Number(e.state):void 0}get _temperature(){const t=this._entity?.attributes;if(void 0!==t?.temperature)return Number(t.temperature);const e=this._findEntity(["sensor.temperature","temperature"]);return e?Number(e.state):void 0}get _currentMode(){const t=this._entity?.attributes;if(t?.preset_mode)return String(t.preset_mode);if(t?.mode)return String(t.mode);const e=this._findEntity(["select.mode","mode_select"]);return e?e.state:void 0}get _availableModes(){const t=this._entity?.attributes;if(t?.preset_modes&&Array.isArray(t.preset_modes))return t.preset_modes;const e=this._findEntity(["select.mode","mode_select"]);return e?.attributes?.options&&Array.isArray(e.attributes.options)?e.attributes.options:["Low","Medium","High","Humidity"]}get _isOn(){const t=this._entity?.state;return"on"===t||"true"===t}get _isUnavailable(){const t=this._entity?.state;return"unavailable"===t||"unknown"===t||!t}get _switches(){const t=[];for(const[e,i]of Object.entries(gt)){const s=this._findEntity([`switch.${e}`,e]);s&&t.push({id:e,entity:s,name:i.name,icon:i.icon})}return t}get _sensors(){const t=[];for(const[e,i]of Object.entries(yt)){if("humidity"===e)continue;const s=this._findEntity([`sensor.${e}`,e]);s&&"unavailable"!==s.state&&"unknown"!==s.state&&t.push({id:e,entity:s,name:i.name,icon:i.icon,unit:i.unit})}return t}get _binarySensors(){const t=[];for(const[e,i]of Object.entries(vt)){const s=this._findEntity([`binary_sensor.${e}`,e]);if(s&&"unavailable"!==s.state){const o="on"===s.state;t.push({id:e,entity:s,name:i.name,isOn:o,icon:o?i.icon_on:i.icon_off})}}return t}async _handlePowerToggle(){if(!this.hass||!this._entity)return;const t=this._entityId.split(".")[0],e=this._isOn?"turn_off":"turn_on";await this.hass.callService(t,e,{},{entity_id:this._entityId})}async _handleModeChange(t){if(!this.hass)return;if("fan"===this._entityId.split(".")[0])return void await this.hass.callService("fan","set_preset_mode",{preset_mode:t},{entity_id:this._entityId});const e=this._findEntity(["select.mode","mode_select"]);e&&await this.hass.callService("select","select_option",{option:t},{entity_id:e.entity_id})}async _handleTargetHumidityChange(t){if(!this.hass)return;const e=this._findEntity(["number.target_humidity","target_humidity"]);e?await this.hass.callService("number","set_value",{value:t},{entity_id:e.entity_id}):await this.hass.callService("humidifier","set_humidity",{humidity:t},{entity_id:this._entityId})}async _handleSwitchToggle(t,e){if(!this.hass)return;const i="on"===e?"turn_off":"turn_on";await this.hass.callService("switch",i,{},{entity_id:t})}willUpdate(t){super.willUpdate(t),t.has("hass")&&this._getRelatedEntities()}render(){if(!this._config||!this.hass)return B``;const t=ft(this.hass);if(this._isUnavailable)return B`
        <ha-card>
          <div class="unavailable-message">
            <ha-icon icon="mdi:alert-circle-outline"></ha-icon>
            <div>${_t("common.unavailable",t)}</div>
          </div>
        </ha-card>
      `;const e=this._config.name||this._entity?.attributes?.friendly_name||"Humidifier",i=this._currentHumidity,s=this._targetHumidity;return B`
      <ha-card>
        ${this._renderHeader(e,t)}
        ${this._renderHumidityCircle(i,s)}
        ${this._config.show_target_humidity?this._renderTargetSlider(s):q}
        ${this._config.show_mode?this._renderModeButtons(t):q}
        ${this._renderSwitches(t)}
        ${this._renderSensors()}
        ${this._renderStatusIndicators(t)}
      </ha-card>
    `}_renderHeader(t,e){return B`
      <div class="card-header">
        <div>
          ${this._config.show_name?B`<div class="name">${t}</div>`:q}
          ${this._config.show_state?B`
            <div class="state">
              ${this._isOn?_t("common.on",e):_t("common.off",e)}
            </div>
          `:q}
        </div>
        ${this._config.show_power?B`
          <ha-icon-button
            class="power-button ${this._isOn?"on":""}"
            @click=${this._handlePowerToggle}
          >
            <ha-icon icon="mdi:power"></ha-icon>
          </ha-icon-button>
        `:q}
      </div>
    `}_renderHumidityCircle(t,e){const i=2*Math.PI*80;return B`
      <div class="humidity-circle">
        <svg viewBox="0 0 200 200">
          <circle
            class="arc-background"
            cx="100"
            cy="100"
            r="${80}"
          />
          <circle
            class="arc-progress"
            cx="100"
            cy="100"
            r="${80}"
            stroke-dasharray="${i}"
            stroke-dashoffset="${i-(void 0!==t?t/100*i:0)}"
          />
        </svg>
        <div class="center-content">
          <ha-icon class="humidity-icon" icon="mdi:water-percent"></ha-icon>
          <div class="current-humidity">
            ${void 0!==t?t:"--"}
            <span class="humidity-unit">%</span>
          </div>
          ${void 0!==e?B`
            <div class="target-humidity">
              ${_t("common.target",ft(this.hass))}: ${e}%
            </div>
          `:q}
        </div>
      </div>
    `}_renderTargetSlider(t){const e=t??50;return B`
      <div class="target-slider">
        <ha-icon-button @click=${()=>this._handleTargetHumidityChange(Math.max(30,e-5))}>
          <ha-icon icon="mdi:minus"></ha-icon>
        </ha-icon-button>
        <input
          type="range"
          min="30"
          max="80"
          step="5"
          .value=${String(e)}
          @change=${t=>this._handleTargetHumidityChange(Number(t.target.value))}
        />
        <ha-icon-button @click=${()=>this._handleTargetHumidityChange(Math.min(80,e+5))}>
          <ha-icon icon="mdi:plus"></ha-icon>
        </ha-icon-button>
        <span class="value">${e}%</span>
      </div>
    `}_renderModeButtons(t){const e=this._availableModes,i=this._currentMode;return B`
      <div class="mode-buttons">
        ${e.map(e=>B`
          <div
            class="mode-button ${i===e?"active":""}"
            @click=${()=>this._handleModeChange(e)}
          >
            <ha-icon icon="${this._getModeIcon(e)}"></ha-icon>
            <span class="mode-name">${_t(`modes.${e}`,t)||e}</span>
          </div>
        `)}
      </div>
    `}_getModeIcon(t){return{Low:"mdi:fan-speed-1",Medium:"mdi:fan-speed-2",High:"mdi:fan-speed-3",Humidity:"mdi:water-percent",Auto:"mdi:fan-auto",Silent:"mdi:volume-off",Strong:"mdi:weather-windy"}[t]||"mdi:fan"}_renderSwitches(t){const e=this._switches;return 0===e.length?q:B`
      <div class="switches-row">
        ${e.map(e=>B`
          <div
            class="switch-item ${"on"===e.entity.state?"on":""}"
            @click=${()=>this._handleSwitchToggle(e.entity.entity_id,e.entity.state)}
          >
            <ha-icon icon="${e.icon}"></ha-icon>
            <span class="switch-name">${_t(`switches.${e.id}`,t)||e.name}</span>
          </div>
        `)}
      </div>
    `}_renderSensors(){const t=this._sensors,e=this._temperature;return 0===t.length&&void 0===e?q:B`
      <div class="sensors-row">
        ${void 0!==e?B`
          <div class="sensor-item">
            <ha-icon icon="mdi:thermometer"></ha-icon>
            <span class="sensor-value">${e}</span>
            <span class="sensor-unit">°C</span>
          </div>
        `:q}
        ${t.map(t=>B`
          <div class="sensor-item">
            <ha-icon icon="${t.icon}"></ha-icon>
            <span class="sensor-value">${t.entity.state}</span>
            ${t.unit?B`<span class="sensor-unit">${t.unit}</span>`:q}
          </div>
        `)}
      </div>
    `}_renderStatusIndicators(t){const e=this._binarySensors;return 0===e.length?q:B`
      <div class="status-indicators">
        ${e.map(e=>{let i="ok";return e.id.includes("shortage")||e.id.includes("no_water")?i=e.isOn?"error":"ok":"water_tank"===e.id&&(i=e.isOn?"ok":"warning"),B`
            <div class="status-indicator ${i}">
              <ha-icon icon="${e.icon}"></ha-icon>
              <span>${_t(`status.${e.id}${e.isOn?"":"_missing"}`,t)||e.name}</span>
            </div>
          `})}
      </div>
    `}static getConfigElement(){return document.createElement("xiaomi-humidifier-card-editor")}static getStubConfig(){return{type:"custom:xiaomi-humidifier-card",entity:""}}};wt.styles=pt,t([lt({attribute:!1})],wt.prototype,"hass",void 0),t([ut()],wt.prototype,"_config",void 0),wt=t([ct("xiaomi-humidifier-card")],wt);export{wt as XiaomiHumidifierCard};
