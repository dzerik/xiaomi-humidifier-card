function t(t,e,i,s){var r,o=arguments.length,n=o<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,s);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(n=(o<3?r(n):o>3?r(e,i,n):r(e,i))||n);return o>3&&n&&Object.defineProperty(e,i,n),n}"function"==typeof SuppressedError&&SuppressedError;const e=globalThis,i=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s=Symbol(),r=new WeakMap;let o=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==s)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(i&&void 0===t){const i=void 0!==e&&1===e.length;i&&(t=r.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&r.set(e,t))}return t}toString(){return this.cssText}};const n=(t,...e)=>{const i=1===t.length?t[0]:e.reduce((e,i,s)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[s+1],t[0]);return new o(i,t,s)},a=i?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new o("string"==typeof t?t:t+"",void 0,s))(e)})(t):t,{is:c,defineProperty:d,getOwnPropertyDescriptor:h,getOwnPropertyNames:l,getOwnPropertySymbols:u,getPrototypeOf:p}=Object,m=globalThis,_=m.trustedTypes,g=_?_.emptyScript:"",f=m.reactiveElementPolyfillSupport,y=(t,e)=>t,v={toAttribute(t,e){switch(e){case Boolean:t=t?g:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},$=(t,e)=>!c(t,e),w={attribute:!0,type:String,converter:v,reflect:!1,useDefault:!1,hasChanged:$};Symbol.metadata??=Symbol("metadata"),m.litPropertyMetadata??=new WeakMap;let b=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=w){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(t,i,e);void 0!==s&&d(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){const{get:s,set:r}=h(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get:s,set(e){const o=s?.call(this);r?.call(this,e),this.requestUpdate(t,o,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??w}static _$Ei(){if(this.hasOwnProperty(y("elementProperties")))return;const t=p(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(y("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(y("properties"))){const t=this.properties,e=[...l(t),...u(t)];for(const i of e)this.createProperty(i,t[i])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,i]of e)this.elementProperties.set(t,i)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const i=this._$Eu(t,e);void 0!==i&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(a(t))}else void 0!==t&&e.push(a(t));return e}static _$Eu(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((t,s)=>{if(i)t.adoptedStyleSheets=s.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const i of s){const s=document.createElement("style"),r=e.litNonce;void 0!==r&&s.setAttribute("nonce",r),s.textContent=i.cssText,t.appendChild(s)}})(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ET(t,e){const i=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,i);if(void 0!==s&&!0===i.reflect){const r=(void 0!==i.converter?.toAttribute?i.converter:v).toAttribute(e,i.type);this._$Em=t,null==r?this.removeAttribute(s):this.setAttribute(s,r),this._$Em=null}}_$AK(t,e){const i=this.constructor,s=i._$Eh.get(t);if(void 0!==s&&this._$Em!==s){const t=i.getPropertyOptions(s),r="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:v;this._$Em=s;const o=r.fromAttribute(e,t.type);this[s]=o??this._$Ej?.get(s)??o,this._$Em=null}}requestUpdate(t,e,i){if(void 0!==t){const s=this.constructor,r=this[t];if(i??=s.getPropertyOptions(t),!((i.hasChanged??$)(r,e)||i.useDefault&&i.reflect&&r===this._$Ej?.get(t)&&!this.hasAttribute(s._$Eu(t,i))))return;this.C(t,e,i)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(t,e,{useDefault:i,reflect:s,wrapped:r},o){i&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,o??e??this[t]),!0!==r||void 0!==o)||(this._$AL.has(t)||(this.hasUpdated||i||(e=void 0),this._$AL.set(t,e)),!0===s&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,i]of t){const{wrapped:t}=i,s=this[e];!0!==t||this._$AL.has(e)||void 0===s||this.C(e,void 0,i,s)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(e)):this._$EM()}catch(e){throw t=!1,this._$EM(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(t){}firstUpdated(t){}};b.elementStyles=[],b.shadowRootOptions={mode:"open"},b[y("elementProperties")]=new Map,b[y("finalized")]=new Map,f?.({ReactiveElement:b}),(m.reactiveElementVersions??=[]).push("2.1.1");const x=globalThis,A=x.trustedTypes,E=A?A.createPolicy("lit-html",{createHTML:t=>t}):void 0,k="$lit$",S=`lit$${Math.random().toFixed(9).slice(2)}$`,C="?"+S,O=`<${C}>`,M=document,T=()=>M.createComment(""),P=t=>null===t||"object"!=typeof t&&"function"!=typeof t,H=Array.isArray,U="[ \t\n\f\r]",D=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,N=/-->/g,z=/>/g,R=RegExp(`>|${U}(?:([^\\s"'>=/]+)(${U}*=${U}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),I=/'/g,j=/"/g,L=/^(?:script|style|textarea|title)$/i,B=(t=>(e,...i)=>({_$litType$:t,strings:e,values:i}))(1),W=Symbol.for("lit-noChange"),q=Symbol.for("lit-nothing"),F=new WeakMap,V=M.createTreeWalker(M,129);function X(t,e){if(!H(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==E?E.createHTML(e):e}const K=(t,e)=>{const i=t.length-1,s=[];let r,o=2===e?"<svg>":3===e?"<math>":"",n=D;for(let e=0;e<i;e++){const i=t[e];let a,c,d=-1,h=0;for(;h<i.length&&(n.lastIndex=h,c=n.exec(i),null!==c);)h=n.lastIndex,n===D?"!--"===c[1]?n=N:void 0!==c[1]?n=z:void 0!==c[2]?(L.test(c[2])&&(r=RegExp("</"+c[2],"g")),n=R):void 0!==c[3]&&(n=R):n===R?">"===c[0]?(n=r??D,d=-1):void 0===c[1]?d=-2:(d=n.lastIndex-c[2].length,a=c[1],n=void 0===c[3]?R:'"'===c[3]?j:I):n===j||n===I?n=R:n===N||n===z?n=D:(n=R,r=void 0);const l=n===R&&t[e+1].startsWith("/>")?" ":"";o+=n===D?i+O:d>=0?(s.push(a),i.slice(0,d)+k+i.slice(d)+S+l):i+S+(-2===d?e:l)}return[X(t,o+(t[i]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),s]};class J{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let r=0,o=0;const n=t.length-1,a=this.parts,[c,d]=K(t,e);if(this.el=J.createElement(c,i),V.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(s=V.nextNode())&&a.length<n;){if(1===s.nodeType){if(s.hasAttributes())for(const t of s.getAttributeNames())if(t.endsWith(k)){const e=d[o++],i=s.getAttribute(t).split(S),n=/([.?@])?(.*)/.exec(e);a.push({type:1,index:r,name:n[2],strings:i,ctor:"."===n[1]?tt:"?"===n[1]?et:"@"===n[1]?it:Q}),s.removeAttribute(t)}else t.startsWith(S)&&(a.push({type:6,index:r}),s.removeAttribute(t));if(L.test(s.tagName)){const t=s.textContent.split(S),e=t.length-1;if(e>0){s.textContent=A?A.emptyScript:"";for(let i=0;i<e;i++)s.append(t[i],T()),V.nextNode(),a.push({type:2,index:++r});s.append(t[e],T())}}}else if(8===s.nodeType)if(s.data===C)a.push({type:2,index:r});else{let t=-1;for(;-1!==(t=s.data.indexOf(S,t+1));)a.push({type:7,index:r}),t+=S.length-1}r++}}static createElement(t,e){const i=M.createElement("template");return i.innerHTML=t,i}}function Y(t,e,i=t,s){if(e===W)return e;let r=void 0!==s?i._$Co?.[s]:i._$Cl;const o=P(e)?void 0:e._$litDirective$;return r?.constructor!==o&&(r?._$AO?.(!1),void 0===o?r=void 0:(r=new o(t),r._$AT(t,i,s)),void 0!==s?(i._$Co??=[])[s]=r:i._$Cl=r),void 0!==r&&(e=Y(t,r._$AS(t,e.values),r,s)),e}class Z{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,s=(t?.creationScope??M).importNode(e,!0);V.currentNode=s;let r=V.nextNode(),o=0,n=0,a=i[0];for(;void 0!==a;){if(o===a.index){let e;2===a.type?e=new G(r,r.nextSibling,this,t):1===a.type?e=new a.ctor(r,a.name,a.strings,this,t):6===a.type&&(e=new st(r,this,t)),this._$AV.push(e),a=i[++n]}o!==a?.index&&(r=V.nextNode(),o++)}return V.currentNode=M,s}p(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class G{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,s){this.type=2,this._$AH=q,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=Y(this,t,e),P(t)?t===q||null==t||""===t?(this._$AH!==q&&this._$AR(),this._$AH=q):t!==this._$AH&&t!==W&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>H(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==q&&P(this._$AH)?this._$AA.nextSibling.data=t:this.T(M.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:i}=t,s="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=J.createElement(X(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===s)this._$AH.p(e);else{const t=new Z(s,this),i=t.u(this.options);t.p(e),this.T(i),this._$AH=t}}_$AC(t){let e=F.get(t.strings);return void 0===e&&F.set(t.strings,e=new J(t)),e}k(t){H(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const r of t)s===e.length?e.push(i=new G(this.O(T()),this.O(T()),this,this.options)):i=e[s],i._$AI(r),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class Q{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,s,r){this.type=1,this._$AH=q,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=r,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=q}_$AI(t,e=this,i,s){const r=this.strings;let o=!1;if(void 0===r)t=Y(this,t,e,0),o=!P(t)||t!==this._$AH&&t!==W,o&&(this._$AH=t);else{const s=t;let n,a;for(t=r[0],n=0;n<r.length-1;n++)a=Y(this,s[i+n],e,n),a===W&&(a=this._$AH[n]),o||=!P(a)||a!==this._$AH[n],a===q?t=q:t!==q&&(t+=(a??"")+r[n+1]),this._$AH[n]=a}o&&!s&&this.j(t)}j(t){t===q?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class tt extends Q{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===q?void 0:t}}class et extends Q{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==q)}}class it extends Q{constructor(t,e,i,s,r){super(t,e,i,s,r),this.type=5}_$AI(t,e=this){if((t=Y(this,t,e,0)??q)===W)return;const i=this._$AH,s=t===q&&i!==q||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,r=t!==q&&(i===q||s);s&&this.element.removeEventListener(this.name,this,i),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class st{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){Y(this,t)}}const rt=x.litHtmlPolyfillSupport;rt?.(J,G),(x.litHtmlVersions??=[]).push("3.3.1");const ot=globalThis;class nt extends b{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{const s=i?.renderBefore??e;let r=s._$litPart$;if(void 0===r){const t=i?.renderBefore??null;s._$litPart$=r=new G(e.insertBefore(T(),t),t,void 0,i??{})}return r._$AI(t),r})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return W}}nt._$litElement$=!0,nt.finalized=!0,ot.litElementHydrateSupport?.({LitElement:nt});const at=ot.litElementPolyfillSupport;at?.({LitElement:nt}),(ot.litElementVersions??=[]).push("4.2.1");const ct={attribute:!0,type:String,converter:v,reflect:!1,hasChanged:$},dt=(t=ct,e,i)=>{const{kind:s,metadata:r}=i;let o=globalThis.litPropertyMetadata.get(r);if(void 0===o&&globalThis.litPropertyMetadata.set(r,o=new Map),"setter"===s&&((t=Object.create(t)).wrapped=!0),o.set(i.name,t),"accessor"===s){const{name:s}=i;return{set(i){const r=e.get.call(this);e.set.call(this,i),this.requestUpdate(s,r,t)},init(e){return void 0!==e&&this.C(s,void 0,t,e),e}}}if("setter"===s){const{name:s}=i;return function(i){const r=this[s];e.call(this,i),this.requestUpdate(s,r,t)}}throw Error("Unsupported decorator location: "+s)};function ht(t){return(e,i)=>"object"==typeof i?dt(t,e,i):((t,e,i)=>{const s=e.hasOwnProperty(i);return e.constructor.createProperty(i,t),s?Object.getOwnPropertyDescriptor(e,i):void 0})(t,e,i)}function lt(t){return ht({...t,state:!0,attribute:!1})}const ut=n`
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

  .humidity-circle .target-indicator {
    fill: var(--primary-color);
    stroke: var(--card-background);
    stroke-width: 3;
    cursor: grab;
    transition: r 0.2s ease, fill 0.2s ease;
    transform-origin: center;
  }

  .humidity-circle .target-indicator:hover {
    r: 12;
  }

  .humidity-circle .target-indicator.dragging {
    r: 14;
    fill: var(--secondary-color);
    cursor: grabbing;
  }

  .humidity-circle {
    cursor: pointer;
    touch-action: none;
  }

  .humidity-circle .target-humidity.dragging {
    color: var(--primary-color);
    font-weight: 500;
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
`;const pt={en:{common:{unavailable:"Unavailable",on:"On",off:"Off",target:"Target"},modes:{Low:"Low",Medium:"Medium",High:"High",Humidity:"Auto",Auto:"Auto",Silent:"Silent",Strong:"Strong"},switches:{led:"LED",led_light:"LED",buzzer:"Buzzer",child_lock:"Lock",dry:"Dry",overwet_protect:"Protect"},sensors:{temperature:"Temp",humidity:"Humidity",water_level:"Water",motor_speed:"Speed",use_time:"Time"},status:{water_tank_ok:"Tank OK",water_tank_missing:"No Tank",water_shortage:"Add Water",no_water:"No Water"},editor:{entity:"Entity (required)",name:"Name (optional)",show_name:"Show name",show_state:"Show state",show_target_humidity:"Show target humidity",show_mode:"Show mode buttons",compact:"Compact mode"}},ru:{common:{unavailable:"Недоступно",on:"Вкл",off:"Выкл",target:"Цель"},modes:{Low:"Низкий",Medium:"Средний",High:"Высокий",Humidity:"Авто",Auto:"Авто",Silent:"Тихий",Strong:"Сильный"},switches:{led:"LED",led_light:"LED",buzzer:"Звук",child_lock:"Блок",dry:"Сушка",overwet_protect:"Защита"},sensors:{temperature:"Темп",humidity:"Влажн",water_level:"Вода",motor_speed:"Скор",use_time:"Время"},status:{water_tank_ok:"Бак ОК",water_tank_missing:"Нет бака",water_shortage:"Долейте воду",no_water:"Нет воды"},editor:{entity:"Объект (обязательно)",name:"Название (опционально)",show_name:"Показывать название",show_state:"Показывать состояние",show_target_humidity:"Показывать целевую влажность",show_mode:"Показывать кнопки режимов",compact:"Компактный режим"}}};function mt(t,e="en"){const i=pt[e]||pt.en,s=t.split(".");let r=i;for(const e of s){if(!r||"object"!=typeof r||!(e in r)){r=pt.en;for(const e of s){if(!r||"object"!=typeof r||!(e in r))return t;r=r[e]}break}r=r[e]}return"string"==typeof r?r:t}function _t(t){if(t?.language){const e=t.language.split("-")[0].toLowerCase();if(e in pt)return e}return"en"}const gt={led:{icon:"mdi:led-on",name:"LED"},led_light:{icon:"mdi:led-on",name:"LED"},buzzer:{icon:"mdi:volume-high",name:"Buzzer"},child_lock:{icon:"mdi:lock",name:"Child Lock"},dry:{icon:"mdi:water-off",name:"Dry Mode"},overwet_protect:{icon:"mdi:water-alert",name:"Overwet Protect"}},ft={temperature:{icon:"mdi:thermometer",name:"Temperature",unit:"°C"},humidity:{icon:"mdi:water-percent",name:"Humidity",unit:"%"},water_level:{icon:"mdi:water",name:"Water Level",unit:"%"},motor_speed:{icon:"mdi:fan",name:"Motor Speed",unit:"rpm"},use_time:{icon:"mdi:clock-outline",name:"Use Time",unit:"h"}},yt={water_tank:{icon_on:"mdi:cup-water",icon_off:"mdi:cup-off-outline",name:"Water Tank"},water_shortage:{icon_on:"mdi:water-off",icon_off:"mdi:water",name:"Water Shortage"},no_water:{icon_on:"mdi:water-off",icon_off:"mdi:water",name:"No Water"}};class vt extends nt{setConfig(t){this._config=t}_valueChanged(t){if(!this._config||!this.hass)return;const e=t.target,i=e.dataset.configKey;if(!i)return;let s=e.value;"checkbox"===e.type&&(s=e.checked);const r={...this._config,[i]:s},o=new CustomEvent("config-changed",{detail:{config:r},bubbles:!0,composed:!0});this.dispatchEvent(o)}_getEntities(t){return this.hass?Object.keys(this.hass.states).filter(e=>e.startsWith(`${t}.`)).sort():[]}render(){if(!this.hass||!this._config)return B``;const t=_t(this.hass),e=[...this._getEntities("fan"),...this._getEntities("humidifier")].sort();return B`
      <div class="form">
        <div class="row">
          <label>${mt("editor.entity",t)}</label>
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
          <label>${mt("editor.name",t)}</label>
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
          <label for="show_name">${mt("editor.show_name",t)}</label>
        </div>

        <div class="checkbox-row">
          <input
            type="checkbox"
            id="show_state"
            data-config-key="show_state"
            .checked=${!1!==this._config.show_state}
            @change=${this._valueChanged}
          />
          <label for="show_state">${mt("editor.show_state",t)}</label>
        </div>

        <div class="checkbox-row">
          <input
            type="checkbox"
            id="show_target_humidity"
            data-config-key="show_target_humidity"
            .checked=${!1!==this._config.show_target_humidity}
            @change=${this._valueChanged}
          />
          <label for="show_target_humidity">${mt("editor.show_target_humidity",t)}</label>
        </div>

        <div class="checkbox-row">
          <input
            type="checkbox"
            id="show_mode"
            data-config-key="show_mode"
            .checked=${!1!==this._config.show_mode}
            @change=${this._valueChanged}
          />
          <label for="show_mode">${mt("editor.show_mode",t)}</label>
        </div>

        <div class="checkbox-row">
          <input
            type="checkbox"
            id="compact"
            data-config-key="compact"
            .checked=${!0===this._config.compact}
            @change=${this._valueChanged}
          />
          <label for="compact">${mt("editor.compact",t)}</label>
        </div>
      </div>
    `}}var $t,wt;vt.styles=n`
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
  `,t([ht({attribute:!1})],vt.prototype,"hass",void 0),t([lt()],vt.prototype,"_config",void 0),$t="xiaomi-humidifier-card-editor",wt=vt,customElements.get($t)||customElements.define($t,wt);console.info("%c XIAOMI-HUMIDIFIER-CARD %c 1.0.1 ","color: white; background: #03a9f4; font-weight: bold;","color: #03a9f4; background: white; font-weight: bold;"),window.customCards=window.customCards||[],window.customCards.find(t=>"xiaomi-humidifier-card"===t.type)||window.customCards.push({type:"xiaomi-humidifier-card",name:"Xiaomi Humidifier Card",description:"Thermostat-style card for Xiaomi humidifiers",preview:!0});class bt extends nt{constructor(){super(...arguments),this._entityId="",this._relatedEntities=new Map,this._isDragging=!1,this._tempTarget=null}setConfig(t){if(!t.entity)throw new Error("Entity is required");this._config={show_name:!0,show_state:!0,show_current_humidity:!0,show_target_humidity:!0,show_mode:!0,show_power:!0,compact:!1,...t},this._entityId=t.entity}getCardSize(){return this._config?.compact?3:5}get _entity(){return this.hass?.states[this._entityId]}_getRelatedEntities(){if(!this.hass||!this._entityId)return;const t=this._entityId.split(".")[1].replace(/_fan$/,"").replace(/_humidifier$/,"");this._relatedEntities.clear();for(const e of Object.keys(this.hass.states)){const i=e.split(".");if(i[1].startsWith(t)){const s=i[0],r=i[1].replace(t+"_","");this._relatedEntities.set(`${s}.${r}`,e)}}}_findEntity(t){for(const e of t){const t=`${e}_entity`;if(this._config[t]){const e=this.hass?.states[this._config[t]];if(e)return e}for(const[t,i]of this._relatedEntities)if(t.includes(e))return this.hass?.states[i];for(const t of Object.keys(this.hass?.states||{}))if(t.includes(e))return this.hass.states[t]}}get _currentHumidity(){const t=this._entity?.attributes;if(void 0!==t?.humidity)return console.debug("[xiaomi-humidifier-card] Found humidity in attrs:",t.humidity),Number(t.humidity);if(void 0!==t?.current_humidity)return console.debug("[xiaomi-humidifier-card] Found current_humidity in attrs:",t.current_humidity),Number(t.current_humidity);const e=this._entityId.split(".")[1].replace(/_fan$/,"").replace(/_humidifier$/,"").replace(/_air_humidifier$/,"");console.debug("[xiaomi-humidifier-card] Looking for humidity sensor, baseId:",e);for(const t of Object.keys(this.hass?.states||{}))if(t.startsWith("sensor.")&&t.includes(e)&&(t.endsWith("_humidity")||t.includes("humidity"))){const e=this.hass.states[t];if(e&&"unavailable"!==e.state&&"unknown"!==e.state&&!t.includes("target"))return console.debug("[xiaomi-humidifier-card] Found humidity sensor:",t,"=",e.state),Number(e.state)}for(const e of Object.keys(t||{}))if(e.toLowerCase().includes("humidity")&&!e.toLowerCase().includes("target")){const i=t?.[e];if("number"==typeof i||"string"==typeof i&&!isNaN(Number(i)))return console.debug("[xiaomi-humidifier-card] Found humidity in attr:",e,"=",i),Number(i)}console.debug("[xiaomi-humidifier-card] No humidity found. Entity attrs:",t)}get _targetHumidity(){const t=this._entity?.attributes;if(void 0!==t?.target_humidity)return Number(t.target_humidity);const e=this._findEntity(["number.target_humidity","target_humidity"]);return e?Number(e.state):void 0}get _temperature(){const t=this._entity?.attributes;if(void 0!==t?.temperature)return Number(t.temperature);const e=this._findEntity(["sensor.temperature","temperature"]);return e?Number(e.state):void 0}get _currentMode(){const t=this._entity?.attributes;if(t?.preset_mode)return String(t.preset_mode);if(t?.mode)return String(t.mode);const e=this._findEntity(["select.mode","mode_select"]);return e?e.state:void 0}get _availableModes(){const t=this._entity?.attributes;if(t?.preset_modes&&Array.isArray(t.preset_modes))return t.preset_modes;const e=this._findEntity(["select.mode","mode_select"]);return e?.attributes?.options&&Array.isArray(e.attributes.options)?e.attributes.options:["Low","Medium","High","Humidity"]}get _isOn(){const t=this._entity?.state;return"on"===t||"true"===t}get _isUnavailable(){const t=this._entity?.state;return"unavailable"===t||"unknown"===t||!t}get _switches(){const t=[],e=new Set;for(const[i,s]of Object.entries(gt)){const r=this._findEntity([`switch.${i}`,i]);r&&!e.has(r.entity_id)&&(e.add(r.entity_id),t.push({id:i,entity:r,name:s.name,icon:s.icon}))}return t}get _sensors(){const t=[],e=new Set;for(const[i,s]of Object.entries(ft)){if("humidity"===i||"temperature"===i)continue;const r=this._findEntity([`sensor.${i}`,i]);r&&"unavailable"!==r.state&&"unknown"!==r.state&&!e.has(r.entity_id)&&(e.add(r.entity_id),t.push({id:i,entity:r,name:s.name,icon:s.icon,unit:s.unit}))}return t}get _binarySensors(){const t=[];for(const[e,i]of Object.entries(yt)){const s=this._findEntity([`binary_sensor.${e}`,e]);if(s&&"unavailable"!==s.state){const r="on"===s.state;t.push({id:e,entity:s,name:i.name,isOn:r,icon:r?i.icon_on:i.icon_off})}}return t}async _handlePowerToggle(){if(!this.hass||!this._entity)return;const t=this._entityId.split(".")[0],e=this._isOn?"turn_off":"turn_on";await this.hass.callService(t,e,{},{entity_id:this._entityId})}async _handleModeChange(t){if(!this.hass)return;if("fan"===this._entityId.split(".")[0])return void await this.hass.callService("fan","set_preset_mode",{preset_mode:t},{entity_id:this._entityId});const e=this._findEntity(["select.mode","mode_select"]);e&&await this.hass.callService("select","select_option",{option:t},{entity_id:e.entity_id})}async _handleTargetHumidityChange(t){if(!this.hass)return;const e=this._findEntity(["number.target_humidity","target_humidity"]);e?await this.hass.callService("number","set_value",{value:t},{entity_id:e.entity_id}):await this.hass.callService("humidifier","set_humidity",{humidity:t},{entity_id:this._entityId})}async _handleSwitchToggle(t,e){if(!this.hass)return;const i="on"===e?"turn_off":"turn_on";await this.hass.callService("switch",i,{},{entity_id:t})}willUpdate(t){super.willUpdate(t),t.has("hass")&&this._getRelatedEntities()}render(){if(!this._config||!this.hass)return B``;const t=_t(this.hass);if(this._isUnavailable)return B`
        <ha-card>
          <div class="unavailable-message">
            <ha-icon icon="mdi:alert-circle-outline"></ha-icon>
            <div>${mt("common.unavailable",t)}</div>
          </div>
        </ha-card>
      `;const e=this._config.name||this._entity?.attributes?.friendly_name||"Humidifier",i=this._currentHumidity,s=this._targetHumidity;return B`
      <ha-card>
        ${this._renderHeader(e,t)}
        ${this._renderHumidityCircle(i,s)}
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
              ${this._isOn?mt("common.on",e):mt("common.off",e)}
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
    `}_renderHumidityCircle(t,e){const i=2*Math.PI*80,s=i-(void 0!==t?t/100*i:0),r=null!==this._tempTarget?this._tempTarget:e,o=void 0!==r?(r/100*360-90)*(Math.PI/180):0,n=void 0!==r?100+80*Math.cos(o):0,a=void 0!==r?100+80*Math.sin(o):0;return B`
      <div class="humidity-circle"
        @mousedown=${this._handleDragStart}
        @touchstart=${this._handleDragStart}
        @mousemove=${this._handleDrag}
        @touchmove=${this._handleDrag}
        @mouseup=${this._handleDragEnd}
        @touchend=${this._handleDragEnd}
        @mouseleave=${this._handleDragEnd}
      >
        <svg viewBox="0 0 200 200">
          <!-- Background arc -->
          <circle
            class="arc-background"
            cx="100"
            cy="100"
            r="${80}"
          />
          <!-- Current humidity arc -->
          <circle
            class="arc-progress"
            cx="100"
            cy="100"
            r="${80}"
            stroke-dasharray="${i}"
            stroke-dashoffset="${s}"
          />
          <!-- Target indicator -->
          ${void 0!==r&&this._config.show_target_humidity?B`
            <circle
              class="target-indicator ${this._isDragging?"dragging":""}"
              cx="${n}"
              cy="${a}"
              r="10"
            />
          `:q}
        </svg>
        <div class="center-content">
          <ha-icon class="humidity-icon" icon="mdi:water-percent"></ha-icon>
          <div class="current-humidity">
            ${void 0!==t?t:"--"}
            <span class="humidity-unit">%</span>
          </div>
          ${void 0!==r&&this._config.show_target_humidity?B`
            <div class="target-humidity ${this._isDragging?"dragging":""}">
              ${mt("common.target",_t(this.hass))}: ${r}%
            </div>
          `:q}
        </div>
      </div>
    `}_handleDragStart(t){this._config.show_target_humidity&&(this._isDragging=!0,this._updateTargetFromEvent(t))}_handleDrag(t){this._isDragging&&(t.preventDefault(),this._updateTargetFromEvent(t))}_handleDragEnd(){this._isDragging&&(this._isDragging=!1,null!==this._tempTarget&&(this._handleTargetHumidityChange(this._tempTarget),this._tempTarget=null))}_updateTargetFromEvent(t){const e=t.currentTarget.querySelector("svg");if(!e)return;const i=e.getBoundingClientRect(),s=i.left+i.width/2,r=i.top+i.height/2;let o,n;"touches"in t?(o=t.touches[0].clientX,n=t.touches[0].clientY):(o=t.clientX,n=t.clientY);let a=180*Math.atan2(n-r,o-s)/Math.PI+90;a<0&&(a+=360);let c=Math.round(a/360*100);c=Math.max(30,Math.min(80,c)),c=5*Math.round(c/5),this._tempTarget=c}_renderModeButtons(t){const e=this._availableModes,i=this._currentMode;return B`
      <div class="mode-buttons">
        ${e.map(e=>B`
          <div
            class="mode-button ${i===e?"active":""}"
            @click=${()=>this._handleModeChange(e)}
          >
            <ha-icon icon="${this._getModeIcon(e)}"></ha-icon>
            <span class="mode-name">${mt(`modes.${e}`,t)||e}</span>
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
            <span class="switch-name">${mt(`switches.${e.id}`,t)||e.name}</span>
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
        ${e.map(e=>{let i="ok",s="";"water_tank"===e.id?(i=e.isOn?"ok":"warning",s=e.isOn?"water_tank_ok":"water_tank_missing"):"water_shortage"===e.id?(i=e.isOn?"error":"ok",s=e.isOn?"water_shortage":"water_tank_ok"):"no_water"===e.id&&(i=e.isOn?"error":"ok",s=e.isOn?"no_water":"water_tank_ok");const r=mt(`status.${s}`,t);return B`
            <div class="status-indicator ${i}">
              <ha-icon icon="${e.icon}"></ha-icon>
              <span>${r||e.name}</span>
            </div>
          `})}
      </div>
    `}static getConfigElement(){return document.createElement("xiaomi-humidifier-card-editor")}static getStubConfig(){return{type:"custom:xiaomi-humidifier-card",entity:""}}}bt.styles=ut,t([ht({attribute:!1})],bt.prototype,"hass",void 0),t([lt()],bt.prototype,"_config",void 0),t([lt()],bt.prototype,"_isDragging",void 0),t([lt()],bt.prototype,"_tempTarget",void 0),((t,e)=>{customElements.get(t)||customElements.define(t,e)})("xiaomi-humidifier-card",bt);export{bt as XiaomiHumidifierCard};
