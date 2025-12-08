function t(t,e,i,r){var n,s=arguments.length,o=s<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,i,r);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(o=(s<3?n(o):s>3?n(e,i,o):n(e,i))||o);return s>3&&o&&Object.defineProperty(e,i,o),o}"function"==typeof SuppressedError&&SuppressedError;const e=globalThis,i=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,r=Symbol(),n=new WeakMap;let s=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==r)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(i&&void 0===t){const i=void 0!==e&&1===e.length;i&&(t=n.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&n.set(e,t))}return t}toString(){return this.cssText}};const o=(t,...e)=>{const i=1===t.length?t[0]:e.reduce((e,i,r)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[r+1],t[0]);return new s(i,t,r)},a=i?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new s("string"==typeof t?t:t+"",void 0,r))(e)})(t):t,{is:c,defineProperty:d,getOwnPropertyDescriptor:l,getOwnPropertyNames:h,getOwnPropertySymbols:u,getPrototypeOf:m}=Object,p=globalThis,_=p.trustedTypes,f=_?_.emptyScript:"",g=p.reactiveElementPolyfillSupport,y=(t,e)=>t,v={toAttribute(t,e){switch(e){case Boolean:t=t?f:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},w=(t,e)=>!c(t,e),b={attribute:!0,type:String,converter:v,reflect:!1,useDefault:!1,hasChanged:w};Symbol.metadata??=Symbol("metadata"),p.litPropertyMetadata??=new WeakMap;let $=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=b){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),r=this.getPropertyDescriptor(t,i,e);void 0!==r&&d(this.prototype,t,r)}}static getPropertyDescriptor(t,e,i){const{get:r,set:n}=l(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get:r,set(e){const s=r?.call(this);n?.call(this,e),this.requestUpdate(t,s,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??b}static _$Ei(){if(this.hasOwnProperty(y("elementProperties")))return;const t=m(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(y("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(y("properties"))){const t=this.properties,e=[...h(t),...u(t)];for(const i of e)this.createProperty(i,t[i])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,i]of e)this.elementProperties.set(t,i)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const i=this._$Eu(t,e);void 0!==i&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(a(t))}else void 0!==t&&e.push(a(t));return e}static _$Eu(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((t,r)=>{if(i)t.adoptedStyleSheets=r.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const i of r){const r=document.createElement("style"),n=e.litNonce;void 0!==n&&r.setAttribute("nonce",n),r.textContent=i.cssText,t.appendChild(r)}})(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ET(t,e){const i=this.constructor.elementProperties.get(t),r=this.constructor._$Eu(t,i);if(void 0!==r&&!0===i.reflect){const n=(void 0!==i.converter?.toAttribute?i.converter:v).toAttribute(e,i.type);this._$Em=t,null==n?this.removeAttribute(r):this.setAttribute(r,n),this._$Em=null}}_$AK(t,e){const i=this.constructor,r=i._$Eh.get(t);if(void 0!==r&&this._$Em!==r){const t=i.getPropertyOptions(r),n="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:v;this._$Em=r;const s=n.fromAttribute(e,t.type);this[r]=s??this._$Ej?.get(r)??s,this._$Em=null}}requestUpdate(t,e,i){if(void 0!==t){const r=this.constructor,n=this[t];if(i??=r.getPropertyOptions(t),!((i.hasChanged??w)(n,e)||i.useDefault&&i.reflect&&n===this._$Ej?.get(t)&&!this.hasAttribute(r._$Eu(t,i))))return;this.C(t,e,i)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(t,e,{useDefault:i,reflect:r,wrapped:n},s){i&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,s??e??this[t]),!0!==n||void 0!==s)||(this._$AL.has(t)||(this.hasUpdated||i||(e=void 0),this._$AL.set(t,e)),!0===r&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,i]of t){const{wrapped:t}=i,r=this[e];!0!==t||this._$AL.has(e)||void 0===r||this.C(e,void 0,i,r)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(e)):this._$EM()}catch(e){throw t=!1,this._$EM(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(t){}firstUpdated(t){}};$.elementStyles=[],$.shadowRootOptions={mode:"open"},$[y("elementProperties")]=new Map,$[y("finalized")]=new Map,g?.({ReactiveElement:$}),(p.reactiveElementVersions??=[]).push("2.1.1");const x=globalThis,A=x.trustedTypes,S=A?A.createPolicy("lit-html",{createHTML:t=>t}):void 0,k="$lit$",E=`lit$${Math.random().toFixed(9).slice(2)}$`,C="?"+E,O=`<${C}>`,M=document,T=()=>M.createComment(""),P=t=>null===t||"object"!=typeof t&&"function"!=typeof t,D=Array.isArray,H="[ \t\n\f\r]",L=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,N=/-->/g,U=/>/g,z=RegExp(`>|${H}(?:([^\\s"'>=/]+)(${H}*=${H}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),I=/'/g,R=/"/g,j=/^(?:script|style|textarea|title)$/i,F=(t=>(e,...i)=>({_$litType$:t,strings:e,values:i}))(1),B=Symbol.for("lit-noChange"),W=Symbol.for("lit-nothing"),q=new WeakMap,V=M.createTreeWalker(M,129);function Q(t,e){if(!D(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==S?S.createHTML(e):e}const X=(t,e)=>{const i=t.length-1,r=[];let n,s=2===e?"<svg>":3===e?"<math>":"",o=L;for(let e=0;e<i;e++){const i=t[e];let a,c,d=-1,l=0;for(;l<i.length&&(o.lastIndex=l,c=o.exec(i),null!==c);)l=o.lastIndex,o===L?"!--"===c[1]?o=N:void 0!==c[1]?o=U:void 0!==c[2]?(j.test(c[2])&&(n=RegExp("</"+c[2],"g")),o=z):void 0!==c[3]&&(o=z):o===z?">"===c[0]?(o=n??L,d=-1):void 0===c[1]?d=-2:(d=o.lastIndex-c[2].length,a=c[1],o=void 0===c[3]?z:'"'===c[3]?R:I):o===R||o===I?o=z:o===N||o===U?o=L:(o=z,n=void 0);const h=o===z&&t[e+1].startsWith("/>")?" ":"";s+=o===L?i+O:d>=0?(r.push(a),i.slice(0,d)+k+i.slice(d)+E+h):i+E+(-2===d?e:h)}return[Q(t,s+(t[i]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),r]};class K{constructor({strings:t,_$litType$:e},i){let r;this.parts=[];let n=0,s=0;const o=t.length-1,a=this.parts,[c,d]=X(t,e);if(this.el=K.createElement(c,i),V.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(r=V.nextNode())&&a.length<o;){if(1===r.nodeType){if(r.hasAttributes())for(const t of r.getAttributeNames())if(t.endsWith(k)){const e=d[s++],i=r.getAttribute(t).split(E),o=/([.?@])?(.*)/.exec(e);a.push({type:1,index:n,name:o[2],strings:i,ctor:"."===o[1]?tt:"?"===o[1]?et:"@"===o[1]?it:Z}),r.removeAttribute(t)}else t.startsWith(E)&&(a.push({type:6,index:n}),r.removeAttribute(t));if(j.test(r.tagName)){const t=r.textContent.split(E),e=t.length-1;if(e>0){r.textContent=A?A.emptyScript:"";for(let i=0;i<e;i++)r.append(t[i],T()),V.nextNode(),a.push({type:2,index:++n});r.append(t[e],T())}}}else if(8===r.nodeType)if(r.data===C)a.push({type:2,index:n});else{let t=-1;for(;-1!==(t=r.data.indexOf(E,t+1));)a.push({type:7,index:n}),t+=E.length-1}n++}}static createElement(t,e){const i=M.createElement("template");return i.innerHTML=t,i}}function G(t,e,i=t,r){if(e===B)return e;let n=void 0!==r?i._$Co?.[r]:i._$Cl;const s=P(e)?void 0:e._$litDirective$;return n?.constructor!==s&&(n?._$AO?.(!1),void 0===s?n=void 0:(n=new s(t),n._$AT(t,i,r)),void 0!==r?(i._$Co??=[])[r]=n:i._$Cl=n),void 0!==n&&(e=G(t,n._$AS(t,e.values),n,r)),e}class J{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,r=(t?.creationScope??M).importNode(e,!0);V.currentNode=r;let n=V.nextNode(),s=0,o=0,a=i[0];for(;void 0!==a;){if(s===a.index){let e;2===a.type?e=new Y(n,n.nextSibling,this,t):1===a.type?e=new a.ctor(n,a.name,a.strings,this,t):6===a.type&&(e=new rt(n,this,t)),this._$AV.push(e),a=i[++o]}s!==a?.index&&(n=V.nextNode(),s++)}return V.currentNode=M,r}p(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class Y{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,r){this.type=2,this._$AH=W,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=G(this,t,e),P(t)?t===W||null==t||""===t?(this._$AH!==W&&this._$AR(),this._$AH=W):t!==this._$AH&&t!==B&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>D(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==W&&P(this._$AH)?this._$AA.nextSibling.data=t:this.T(M.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:i}=t,r="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=K.createElement(Q(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===r)this._$AH.p(e);else{const t=new J(r,this),i=t.u(this.options);t.p(e),this.T(i),this._$AH=t}}_$AC(t){let e=q.get(t.strings);return void 0===e&&q.set(t.strings,e=new K(t)),e}k(t){D(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,r=0;for(const n of t)r===e.length?e.push(i=new Y(this.O(T()),this.O(T()),this,this.options)):i=e[r],i._$AI(n),r++;r<e.length&&(this._$AR(i&&i._$AB.nextSibling,r),e.length=r)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class Z{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,r,n){this.type=1,this._$AH=W,this._$AN=void 0,this.element=t,this.name=e,this._$AM=r,this.options=n,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=W}_$AI(t,e=this,i,r){const n=this.strings;let s=!1;if(void 0===n)t=G(this,t,e,0),s=!P(t)||t!==this._$AH&&t!==B,s&&(this._$AH=t);else{const r=t;let o,a;for(t=n[0],o=0;o<n.length-1;o++)a=G(this,r[i+o],e,o),a===B&&(a=this._$AH[o]),s||=!P(a)||a!==this._$AH[o],a===W?t=W:t!==W&&(t+=(a??"")+n[o+1]),this._$AH[o]=a}s&&!r&&this.j(t)}j(t){t===W?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class tt extends Z{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===W?void 0:t}}class et extends Z{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==W)}}class it extends Z{constructor(t,e,i,r,n){super(t,e,i,r,n),this.type=5}_$AI(t,e=this){if((t=G(this,t,e,0)??W)===B)return;const i=this._$AH,r=t===W&&i!==W||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,n=t!==W&&(i===W||r);r&&this.element.removeEventListener(this.name,this,i),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class rt{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){G(this,t)}}const nt=x.litHtmlPolyfillSupport;nt?.(K,Y),(x.litHtmlVersions??=[]).push("3.3.1");const st=globalThis;class ot extends ${constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{const r=i?.renderBefore??e;let n=r._$litPart$;if(void 0===n){const t=i?.renderBefore??null;r._$litPart$=n=new Y(e.insertBefore(T(),t),t,void 0,i??{})}return n._$AI(t),n})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return B}}ot._$litElement$=!0,ot.finalized=!0,st.litElementHydrateSupport?.({LitElement:ot});const at=st.litElementPolyfillSupport;at?.({LitElement:ot}),(st.litElementVersions??=[]).push("4.2.1");const ct={attribute:!0,type:String,converter:v,reflect:!1,hasChanged:w},dt=(t=ct,e,i)=>{const{kind:r,metadata:n}=i;let s=globalThis.litPropertyMetadata.get(n);if(void 0===s&&globalThis.litPropertyMetadata.set(n,s=new Map),"setter"===r&&((t=Object.create(t)).wrapped=!0),s.set(i.name,t),"accessor"===r){const{name:r}=i;return{set(i){const n=e.get.call(this);e.set.call(this,i),this.requestUpdate(r,n,t)},init(e){return void 0!==e&&this.C(r,void 0,t,e),e}}}if("setter"===r){const{name:r}=i;return function(i){const n=this[r];e.call(this,i),this.requestUpdate(r,n,t)}}throw Error("Unsupported decorator location: "+r)};function lt(t){return(e,i)=>"object"==typeof i?dt(t,e,i):((t,e,i)=>{const r=e.hasOwnProperty(i);return e.constructor.createProperty(i,t),r?Object.getOwnPropertyDescriptor(e,i):void 0})(t,e,i)}function ht(t){return lt({...t,state:!0,attribute:!1})}const ut=o`
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

  /* Numbers row (sliders) */
  .numbers-row {
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding: 12px 0;
    border-top: 1px solid var(--divider-color, #e0e0e0);
  }

  .number-item {
    display: flex;
    flex-direction: column;
    gap: 4px;
    padding: 0 8px;
  }

  .number-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .number-name {
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: 0.85em;
    color: var(--text-secondary-color);
  }

  .number-name ha-icon {
    --mdc-icon-size: 18px;
  }

  .number-value {
    font-size: 0.9em;
    font-weight: 500;
    color: var(--text-color);
    min-width: 50px;
    text-align: right;
  }

  .number-control {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .number-control input[type="range"] {
    flex: 1;
    height: 4px;
    -webkit-appearance: none;
    background: var(--arc-background);
    border-radius: 2px;
    outline: none;
  }

  .number-control input[type="range"]::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: var(--primary-color);
    cursor: pointer;
    border: 2px solid var(--card-background);
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  }

  .number-control input[type="range"]::-moz-range-thumb {
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: var(--primary-color);
    cursor: pointer;
    border: 2px solid var(--card-background);
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  }

  /* Selects row (dropdowns) */
  .selects-row {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 12px;
    padding: 12px 0;
    border-top: 1px solid var(--divider-color, #e0e0e0);
  }

  .select-item {
    display: flex;
    flex-direction: column;
    gap: 4px;
    min-width: 120px;
  }

  .select-header {
    display: flex;
    align-items: center;
    gap: 6px;
  }

  .select-name {
    font-size: 0.85em;
    color: var(--text-secondary-color);
  }

  .select-name ha-icon {
    --mdc-icon-size: 18px;
  }

  .select-item select {
    padding: 6px 10px;
    border: 1px solid var(--divider-color, #e0e0e0);
    border-radius: 6px;
    background: var(--ha-card-background, var(--card-background-color, #fff));
    color: var(--text-color);
    font-size: 0.9em;
    cursor: pointer;
    outline: none;
    transition: border-color 0.2s ease;
  }

  .select-item select:hover {
    border-color: var(--primary-color);
  }

  .select-item select:focus {
    border-color: var(--primary-color);
    box-shadow: 0 0 0 1px var(--primary-color);
  }

  /* Buttons row (action buttons) */
  .buttons-row {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 8px;
    padding: 12px 0;
    border-top: 1px solid var(--divider-color, #e0e0e0);
  }

  .button-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
    padding: 8px 16px;
    border-radius: 8px;
    background: var(--ha-card-background, var(--card-background-color, #f5f5f5));
    border: 1px solid var(--divider-color, #e0e0e0);
    cursor: pointer;
    transition: all 0.2s ease;
  }

  .button-item:hover {
    background: var(--primary-color);
    color: white;
    border-color: var(--primary-color);
  }

  .button-item:hover ha-icon {
    color: white;
  }

  .button-item:active {
    transform: scale(0.95);
  }

  .button-item ha-icon {
    color: var(--primary-color);
    --mdc-icon-size: 24px;
    transition: color 0.2s ease;
  }

  .button-name {
    font-size: 0.75em;
    text-transform: uppercase;
    color: var(--text-secondary-color);
    transition: color 0.2s ease;
  }

  .button-item:hover .button-name {
    color: white;
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
`;const mt={en:{common:{unavailable:"Unavailable",on:"On",off:"Off",target:"Target"},modes:{Low:"Low",Medium:"Medium",High:"High",Humidity:"Auto",Auto:"Auto",Silent:"Silent",Strong:"Strong",Favorite:"Favorite",Nature:"Nature",Sleep:"Sleep",Fan:"Fan",Level1:"Level 1",Level2:"Level 2",Level3:"Level 3",Level4:"Level 4"},switches:{led:"LED",led_light:"LED",buzzer:"Buzzer",child_lock:"Lock",dry:"Dry",overwet_protect:"Protect",learn_mode:"Learn",auto_detect:"Auto Detect",oscillate:"Oscillate",ptc:"PTC",display:"Display",anion:"Ionizer",gestures:"Gestures"},sensors:{temperature:"Temp",humidity:"Humidity",water_level:"Water",motor_speed:"Speed",use_time:"Time",aqi:"AQI",pm25:"PM2.5",tvoc:"TVOC",co2:"CO2",filter_life_remaining:"Filter",filter_hours_used:"Filter Hours",filter_left_time:"Filter Left",clean_area:"Clean Area",clean_time:"Clean Time",illuminance:"Light",illuminance_lux:"Lux",fan_level:"Fan Level",favorite_level:"Fav Level",average_aqi:"Avg AQI",purify_volume:"Purify Vol",motor2_speed:"Motor 2",filter_rfid_product_id:"Filter ID",filter_rfid_tag:"Filter Tag",power:"Power",voltage:"Voltage",current:"Current",water_shortage:"Water Shortage",depth:"Depth",actual_speed:"Act Speed",fault:"Fault"},numbers:{favorite_level:"Favorite Level",fan_level:"Fan Level",volume:"Volume",target_humidity:"Target Humidity",angle:"Oscillation Angle",delay_off_countdown:"Delay Off"},selects:{led_brightness:"LED Brightness",display_orientation:"Display",ptc_level:"PTC Level",mode:"Mode"},buttons:{reset_filter:"Reset Filter",filters_cleaned:"Filters Cleaned"},status:{water_tank_ok:"Tank OK",water_tank_missing:"No Tank",water_shortage:"Add Water",no_water:"No Water"},editor:{entity:"Entity (required)",name:"Name (optional)",show_name:"Show name",show_state:"Show state",show_target_humidity:"Show target humidity",show_mode:"Show mode buttons",show_sensors:"Show sensors",show_switches:"Show switches",show_numbers:"Show sliders",show_selects:"Show dropdowns",show_buttons:"Show action buttons",compact:"Compact mode"}},ru:{common:{unavailable:"Недоступно",on:"Вкл",off:"Выкл",target:"Цель"},modes:{Low:"Низкий",Medium:"Средний",High:"Высокий",Humidity:"Авто",Auto:"Авто",Silent:"Тихий",Strong:"Сильный",Favorite:"Любимый",Nature:"Природа",Sleep:"Сон",Fan:"Вентилятор",Level1:"Уровень 1",Level2:"Уровень 2",Level3:"Уровень 3",Level4:"Уровень 4"},switches:{led:"LED",led_light:"LED",buzzer:"Звук",child_lock:"Блок",dry:"Сушка",overwet_protect:"Защита",learn_mode:"Обуч",auto_detect:"Авто",oscillate:"Вращ",ptc:"PTC",display:"Дисплей",anion:"Ионы",gestures:"Жесты"},sensors:{temperature:"Темп",humidity:"Влажн",water_level:"Вода",motor_speed:"Скор",use_time:"Время",aqi:"AQI",pm25:"PM2.5",tvoc:"TVOC",co2:"CO2",filter_life_remaining:"Фильтр",filter_hours_used:"Часы фильтра",filter_left_time:"Ост. фильтр",clean_area:"Площадь",clean_time:"Время уборки",illuminance:"Свет",illuminance_lux:"Люкс",fan_level:"Уровень",favorite_level:"Любим",average_aqi:"Сред AQI",purify_volume:"Очищено",motor2_speed:"Мотор 2",filter_rfid_product_id:"ID фильтра",filter_rfid_tag:"Тег фильтра",power:"Мощность",voltage:"Напряж",current:"Ток",water_shortage:"Нет воды",depth:"Глуб",actual_speed:"Скорость",fault:"Ошибка"},numbers:{favorite_level:"Любимый уровень",fan_level:"Уровень вентилятора",volume:"Громкость",target_humidity:"Целевая влажность",angle:"Угол вращения",delay_off_countdown:"Таймер выкл"},selects:{led_brightness:"Яркость LED",display_orientation:"Ориентация",ptc_level:"Уровень PTC",mode:"Режим"},buttons:{reset_filter:"Сбросить фильтр",filters_cleaned:"Фильтр очищен"},status:{water_tank_ok:"Бак ОК",water_tank_missing:"Нет бака",water_shortage:"Долейте воду",no_water:"Нет воды"},editor:{entity:"Объект (обязательно)",name:"Название (опционально)",show_name:"Показывать название",show_state:"Показывать состояние",show_target_humidity:"Показывать целевую влажность",show_mode:"Показывать кнопки режимов",show_sensors:"Показывать сенсоры",show_switches:"Показывать переключатели",show_numbers:"Показывать слайдеры",show_selects:"Показывать выпадающие списки",show_buttons:"Показывать кнопки действий",compact:"Компактный режим"}}};function pt(t,e="en"){const i=mt[e]||mt.en,r=t.split(".");let n=i;for(const e of r){if(!n||"object"!=typeof n||!(e in n)){n=mt.en;for(const e of r){if(!n||"object"!=typeof n||!(e in n))return t;n=n[e]}break}n=n[e]}return"string"==typeof n?n:t}function _t(t){if(t?.language){const e=t.language.split("-")[0].toLowerCase();if(e in mt)return e}return"en"}const ft={buzzer:{icon:"mdi:volume-high",name:"Buzzer"},led:{icon:"mdi:led-on",name:"LED"},led_light:{icon:"mdi:led-on",name:"LED Light"},child_lock:{icon:"mdi:lock",name:"Child Lock"},dry:{icon:"mdi:water-off",name:"Dry Mode"},learn_mode:{icon:"mdi:school",name:"Learn Mode"},auto_detect:{icon:"mdi:auto-fix",name:"Auto Detect"},oscillate:{icon:"mdi:rotate-3d-variant",name:"Oscillation"},ptc:{icon:"mdi:radiator",name:"PTC Heater"},overwet_protect:{icon:"mdi:water-alert",name:"Overwet Protection"},display:{icon:"mdi:monitor",name:"Display"},anion:{icon:"mdi:atom",name:"Ionizer"},gestures:{icon:"mdi:gesture-tap",name:"Gesture Control"}},gt={aqi:{icon:"mdi:air-filter",name:"Air Quality Index",unit:"AQI"},pm25:{icon:"mdi:blur",name:"PM2.5",unit:"µg/m³"},pm10:{icon:"mdi:blur-linear",name:"PM10",unit:"µg/m³"},average_aqi:{icon:"mdi:air-filter",name:"Average AQI",unit:"AQI"},tvoc:{icon:"mdi:molecule",name:"TVOC",unit:"µg/m³"},co2:{icon:"mdi:molecule-co2",name:"CO2",unit:"ppm"},temperature:{icon:"mdi:thermometer",name:"Temperature",unit:"°C"},humidity:{icon:"mdi:water-percent",name:"Humidity",unit:"%"},temperature_outside:{icon:"mdi:thermometer",name:"Outside Temperature",unit:"°C"},filter_life_remaining:{icon:"mdi:air-filter",name:"Filter Life",unit:"%"},filter_hours_used:{icon:"mdi:clock-outline",name:"Filter Hours Used",unit:"h"},filter_left_time:{icon:"mdi:calendar-clock",name:"Filter Days Left",unit:"d"},filter_type:{icon:"mdi:air-filter",name:"Filter Type"},dust_filter_life_remaining:{icon:"mdi:air-filter",name:"Dust Filter Life",unit:"%"},dust_filter_life_remaining_days:{icon:"mdi:calendar-clock",name:"Dust Filter Days Left",unit:"d"},upper_filter_life_remaining:{icon:"mdi:air-filter",name:"Upper Filter Life",unit:"%"},upper_filter_life_remaining_days:{icon:"mdi:calendar-clock",name:"Upper Filter Days Left",unit:"d"},motor_speed:{icon:"mdi:fan",name:"Motor Speed",unit:"rpm"},motor2_speed:{icon:"mdi:fan",name:"Motor 2 Speed",unit:"rpm"},use_time:{icon:"mdi:clock-outline",name:"Use Time",unit:"s"},purify_volume:{icon:"mdi:air-purifier",name:"Purify Volume",unit:"m³"},water_level:{icon:"mdi:water",name:"Water Level",unit:"%"},target_humidity:{icon:"mdi:water-percent",name:"Target Humidity",unit:"%"},battery:{icon:"mdi:battery",name:"Battery",unit:"%"},speed:{icon:"mdi:speedometer",name:"Speed"},natural_speed:{icon:"mdi:weather-windy",name:"Natural Speed"},direct_speed:{icon:"mdi:fan",name:"Direct Speed"},angle:{icon:"mdi:rotate-3d-variant",name:"Oscillation Angle",unit:"°"},favorite_speed:{icon:"mdi:speedometer",name:"Favorite Speed",unit:"rpm"},control_speed:{icon:"mdi:speedometer",name:"Control Speed",unit:"rpm"},mode:{icon:"mdi:information-outline",name:"Mode"},illuminance:{icon:"mdi:brightness-6",name:"Illuminance",unit:"lx"},volume:{icon:"mdi:volume-high",name:"Volume",unit:"%"}},yt={favorite_level:{icon:"mdi:heart",name:"Favorite Level",min:0,max:16,step:1},fan_level:{icon:"mdi:fan",name:"Fan Level",min:1,max:3,step:1},volume:{icon:"mdi:volume-medium",name:"Volume",min:0,max:100,step:1,unit:"%"},target_humidity:{icon:"mdi:water-percent",name:"Target Humidity",min:30,max:80,step:10,unit:"%"},angle:{icon:"mdi:angle-acute",name:"Oscillation Angle",min:30,max:120,step:30,unit:"°"},delay_off_countdown:{icon:"mdi:timer-off",name:"Delay Off",min:0,max:480,step:1,unit:"min"}},vt={led_brightness:{icon:"mdi:brightness-6",name:"LED Brightness",options:["bright","dim","off"]},display_orientation:{icon:"mdi:rotate-3d-variant",name:"Display Orientation",options:["forward","left","right"]},ptc_level:{icon:"mdi:radiator",name:"PTC Level",options:["low","medium","high"]},mode:{icon:"mdi:tune",name:"Mode"}},wt={reset_filter:{icon:"mdi:air-filter",name:"Reset Filter"},filters_cleaned:{icon:"mdi:check-circle",name:"Mark Filters Cleaned"}},bt={water_tank:{icon_on:"mdi:cup-water",icon_off:"mdi:cup-off-outline",name:"Water Tank"},water_shortage:{icon_on:"mdi:water-off",icon_off:"mdi:water",name:"Water Shortage"},no_water:{icon_on:"mdi:water-off",icon_off:"mdi:water",name:"No Water"}};class $t extends ot{setConfig(t){this._config=t}_valueChanged(t){if(!this._config||!this.hass)return;const e=t.target,i=e.dataset.configKey;if(!i)return;let r=e.value;"checkbox"===e.type&&(r=e.checked);const n={...this._config,[i]:r},s=new CustomEvent("config-changed",{detail:{config:n},bubbles:!0,composed:!0});this.dispatchEvent(s)}_getEntities(t){return this.hass?Object.keys(this.hass.states).filter(e=>e.startsWith(`${t}.`)).sort():[]}render(){if(!this.hass||!this._config)return F``;const t=_t(this.hass),e=[...this._getEntities("fan"),...this._getEntities("humidifier")].sort();return F`
      <div class="form">
        <div class="row">
          <label>${pt("editor.entity",t)}</label>
          <select
            data-config-key="entity"
            .value=${this._config.entity||""}
            @change=${this._valueChanged}
          >
            <option value="">-- Select entity --</option>
            ${e.map(t=>F`
              <option value="${t}" ?selected=${t===this._config.entity}>
                ${this.hass.states[t]?.attributes?.friendly_name||t}
              </option>
            `)}
          </select>
        </div>

        <div class="row">
          <label>${pt("editor.name",t)}</label>
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
          <label for="show_name">${pt("editor.show_name",t)}</label>
        </div>

        <div class="checkbox-row">
          <input
            type="checkbox"
            id="show_state"
            data-config-key="show_state"
            .checked=${!1!==this._config.show_state}
            @change=${this._valueChanged}
          />
          <label for="show_state">${pt("editor.show_state",t)}</label>
        </div>

        <div class="checkbox-row">
          <input
            type="checkbox"
            id="show_target_humidity"
            data-config-key="show_target_humidity"
            .checked=${!1!==this._config.show_target_humidity}
            @change=${this._valueChanged}
          />
          <label for="show_target_humidity">${pt("editor.show_target_humidity",t)}</label>
        </div>

        <div class="checkbox-row">
          <input
            type="checkbox"
            id="show_mode"
            data-config-key="show_mode"
            .checked=${!1!==this._config.show_mode}
            @change=${this._valueChanged}
          />
          <label for="show_mode">${pt("editor.show_mode",t)}</label>
        </div>

        <div class="checkbox-row">
          <input
            type="checkbox"
            id="compact"
            data-config-key="compact"
            .checked=${!0===this._config.compact}
            @change=${this._valueChanged}
          />
          <label for="compact">${pt("editor.compact",t)}</label>
        </div>
      </div>
    `}}var xt,At;$t.styles=o`
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
  `,t([lt({attribute:!1})],$t.prototype,"hass",void 0),t([ht()],$t.prototype,"_config",void 0),xt="xiaomi-humidifier-card-editor",At=$t,customElements.get(xt)||customElements.define(xt,At);console.info("%c XIAOMI-HUMIDIFIER-CARD %c 1.1.0 ","color: white; background: #03a9f4; font-weight: bold;","color: #03a9f4; background: white; font-weight: bold;"),window.customCards=window.customCards||[],window.customCards.find(t=>"xiaomi-humidifier-card"===t.type)||window.customCards.push({type:"xiaomi-humidifier-card",name:"Xiaomi Humidifier Card",description:"Thermostat-style card for Xiaomi humidifiers",preview:!0});class St extends ot{constructor(){super(...arguments),this._entityId="",this._relatedEntities=new Map,this._isDragging=!1,this._tempTarget=null}setConfig(t){if(!t.entity)throw new Error("Entity is required");this._config={show_name:!0,show_state:!0,show_current_humidity:!0,show_target_humidity:!0,show_mode:!0,show_power:!0,show_sensors:!0,show_switches:!0,show_numbers:!0,show_selects:!0,show_buttons:!0,compact:!1,...t},this._entityId=t.entity}getCardSize(){return this._config?.compact?3:5}get _entity(){return this.hass?.states[this._entityId]}_getRelatedEntities(){if(!this.hass||!this._entityId)return;const t=this._entityId.split(".")[1].replace(/_fan$/,"").replace(/_humidifier$/,"");this._relatedEntities.clear();for(const e of Object.keys(this.hass.states)){const i=e.split(".");if(i[1].startsWith(t)){const r=i[0],n=i[1].replace(t+"_","");this._relatedEntities.set(`${r}.${n}`,e)}}}_findEntity(t){for(const e of t){const t=`${e}_entity`;if(this._config[t]){const e=this.hass?.states[this._config[t]];if(e)return e}for(const[t,i]of this._relatedEntities)if(t.includes(e))return this.hass?.states[i];for(const t of Object.keys(this.hass?.states||{}))if(t.includes(e))return this.hass.states[t]}}get _currentHumidity(){const t=this._entity?.attributes;if(this._config.humidity_entity){const t=this.hass?.states[this._config.humidity_entity];if(t&&"unavailable"!==t.state&&"unknown"!==t.state)return Number(t.state)}if(void 0!==t?.humidity&&null!==t.humidity)return Number(t.humidity);if(void 0!==t?.current_humidity&&null!==t.current_humidity)return Number(t.current_humidity);const e=this._entityId.split(".")[1].replace(/_fan$/,"").replace(/_humidifier$/,"").replace(/_air_humidifier$/,"");for(const t of Object.keys(this.hass?.states||{}))if(t.startsWith("sensor.")&&t.includes(e)&&(t.endsWith("_humidity")||t.includes("humidity"))){const e=this.hass.states[t];if(e&&"unavailable"!==e.state&&"unknown"!==e.state&&!t.includes("target"))return Number(e.state)}}get _targetHumidity(){const t=this._entity?.attributes;if(void 0!==t?.target_humidity)return Number(t.target_humidity);const e=this._findEntity(["number.target_humidity","target_humidity"]);return e?Number(e.state):void 0}get _temperature(){const t=this._entity?.attributes;if(void 0!==t?.temperature)return Number(t.temperature);const e=this._findEntity(["sensor.temperature","temperature"]);return e?Number(e.state):void 0}get _currentMode(){const t=this._entity?.attributes;if(t?.preset_mode)return String(t.preset_mode);if(t?.mode)return String(t.mode);const e=this._findEntity(["select.mode","mode_select"]);return e?e.state:void 0}get _availableModes(){const t=this._entity?.attributes;if(t?.preset_modes&&Array.isArray(t.preset_modes))return t.preset_modes;const e=this._findEntity(["select.mode","mode_select"]);return e?.attributes?.options&&Array.isArray(e.attributes.options)?e.attributes.options:["Low","Medium","High","Humidity"]}get _isOn(){const t=this._entity?.state;return"on"===t||"true"===t}get _isUnavailable(){const t=this._entity?.state;return"unavailable"===t||"unknown"===t||!t}get _switches(){if(!1===this._config.show_switches)return[];const t=[],e=new Set;for(const[i,r]of Object.entries(ft)){const n=this._findEntity([`switch.${i}`,i]);n&&!e.has(n.entity_id)&&"unavailable"!==n.state&&(e.add(n.entity_id),t.push({id:i,entity:n,name:r.name,icon:r.icon}))}return t}get _sensors(){if(!1===this._config.show_sensors)return[];const t=[],e=new Set;for(const[i,r]of Object.entries(gt)){if("humidity"===i||"temperature"===i||"target_humidity"===i||"mode"===i)continue;const n=this._findEntity([`sensor.${i}`,i]);n&&"unavailable"!==n.state&&"unknown"!==n.state&&!e.has(n.entity_id)&&(e.add(n.entity_id),t.push({id:i,entity:n,name:r.name,icon:r.icon,unit:r.unit}))}return t}get _numbers(){if(!1===this._config.show_numbers)return[];const t=[],e=new Set;for(const[i,r]of Object.entries(yt)){if("target_humidity"===i)continue;const n=this._findEntity([`number.${i}`,i]);n&&"unavailable"!==n.state&&!e.has(n.entity_id)&&(e.add(n.entity_id),t.push({id:i,entity:n,name:r.name,icon:r.icon,min:Number(n.attributes.min??r.min),max:Number(n.attributes.max??r.max),step:Number(n.attributes.step??r.step),unit:r.unit}))}return t}get _selects(){if(!1===this._config.show_selects)return[];const t=[],e=new Set;for(const[i,r]of Object.entries(vt)){if("mode"===i)continue;const n=this._findEntity([`select.${i}`,i]);if(n&&"unavailable"!==n.state&&!e.has(n.entity_id)){e.add(n.entity_id);const s=n.attributes.options||r.options||[];t.push({id:i,entity:n,name:r.name,icon:r.icon,options:s})}}return t}get _buttons(){if(!1===this._config.show_buttons)return[];const t=[],e=new Set;for(const[i,r]of Object.entries(wt)){const n=this._findEntity([`button.${i}`,i]);n&&"unavailable"!==n.state&&!e.has(n.entity_id)&&(e.add(n.entity_id),t.push({id:i,entity:n,name:r.name,icon:r.icon}))}return t}get _waterStatus(){const t=this._entity?.attributes;if(t&&("no_water"in t||"water_tank_detached"in t||"water_shortage"in t))return!0===t?.no_water?{id:"no_water",isOn:!0,icon:"mdi:water-off"}:!0===t?.water_tank_detached?{id:"water_tank_detached",isOn:!0,icon:"mdi:cup-off-outline"}:!0===t?.water_shortage?{id:"water_shortage",isOn:!0,icon:"mdi:water-alert"}:{id:"water_ok",isOn:!1,icon:"mdi:water-check"};for(const[t,e]of Object.entries(bt)){const i=this._findEntity([`binary_sensor.${t}`,t]);if(i&&"unavailable"!==i.state){const r="on"===i.state;if(("no_water"===t||"water_shortage"===t)&&r)return{id:t,isOn:!0,icon:e.icon_on};if("water_tank"===t&&!r)return{id:"water_tank_detached",isOn:!0,icon:e.icon_off}}}return{id:"water_ok",isOn:!1,icon:"mdi:water-check"}}async _handlePowerToggle(){if(!this.hass||!this._entity)return;const t=this._entityId.split(".")[0],e=this._isOn?"turn_off":"turn_on";await this.hass.callService(t,e,{},{entity_id:this._entityId})}async _handleModeChange(t){if(!this.hass)return;if("fan"===this._entityId.split(".")[0])return void await this.hass.callService("fan","set_preset_mode",{preset_mode:t},{entity_id:this._entityId});const e=this._findEntity(["select.mode","mode_select"]);e&&await this.hass.callService("select","select_option",{option:t},{entity_id:e.entity_id})}async _handleTargetHumidityChange(t){if(!this.hass)return;const e=this._findEntity(["number.target_humidity","target_humidity"]);e?await this.hass.callService("number","set_value",{value:t},{entity_id:e.entity_id}):await this.hass.callService("humidifier","set_humidity",{humidity:t},{entity_id:this._entityId})}async _handleSwitchToggle(t,e){if(!this.hass)return;const i="on"===e?"turn_off":"turn_on";await this.hass.callService("switch",i,{},{entity_id:t})}async _handleNumberChange(t,e){this.hass&&await this.hass.callService("number","set_value",{value:e},{entity_id:t})}async _handleSelectChange(t,e){this.hass&&await this.hass.callService("select","select_option",{option:e},{entity_id:t})}async _handleButtonPress(t){this.hass&&await this.hass.callService("button","press",{},{entity_id:t})}willUpdate(t){super.willUpdate(t),t.has("hass")&&this._getRelatedEntities()}render(){if(!this._config||!this.hass)return F``;const t=_t(this.hass);if(this._isUnavailable)return F`
        <ha-card>
          <div class="unavailable-message">
            <ha-icon icon="mdi:alert-circle-outline"></ha-icon>
            <div>${pt("common.unavailable",t)}</div>
          </div>
        </ha-card>
      `;const e=this._config.name||this._entity?.attributes?.friendly_name||"Humidifier",i=this._currentHumidity,r=this._targetHumidity;return F`
      <ha-card>
        ${this._renderHeader(e,t)}
        ${this._renderHumidityCircle(i,r)}
        ${this._config.show_mode?this._renderModeButtons(t):W}
        ${this._renderSwitches(t)}
        ${this._renderNumbers(t)}
        ${this._renderSelects(t)}
        ${this._renderButtons(t)}
        ${this._renderSensors()}
        ${this._renderStatusIndicators(t)}
      </ha-card>
    `}_renderHeader(t,e){return F`
      <div class="card-header">
        <div>
          ${this._config.show_name?F`<div class="name">${t}</div>`:W}
          ${this._config.show_state?F`
            <div class="state">
              ${this._isOn?pt("common.on",e):pt("common.off",e)}
            </div>
          `:W}
        </div>
        ${this._config.show_power?F`
          <ha-icon-button
            class="power-button ${this._isOn?"on":""}"
            @click=${this._handlePowerToggle}
          >
            <ha-icon icon="mdi:power"></ha-icon>
          </ha-icon-button>
        `:W}
      </div>
    `}_renderHumidityCircle(t,e){const i=2*Math.PI*80,r=i-(void 0!==t?t/100*i:0),n=null!==this._tempTarget?this._tempTarget:e,s=void 0!==n?(n/100*360-90)*(Math.PI/180):0,o=void 0!==n?100+80*Math.cos(s):0,a=void 0!==n?100+80*Math.sin(s):0;return F`
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
          <circle class="arc-background" cx="100" cy="100" r="${80}" />
          <circle
            class="arc-progress"
            cx="100"
            cy="100"
            r="${80}"
            stroke-dasharray="${i}"
            stroke-dashoffset="${r}"
          />
          ${void 0!==n&&this._config.show_target_humidity?F`
            <circle
              class="target-indicator ${this._isDragging?"dragging":""}"
              cx="${o}"
              cy="${a}"
              r="10"
            />
          `:W}
        </svg>
        <div class="center-content">
          <ha-icon class="humidity-icon" icon="mdi:water-percent"></ha-icon>
          <div class="current-humidity">
            ${void 0!==t?t:"--"}
            <span class="humidity-unit">%</span>
          </div>
          ${void 0!==n&&this._config.show_target_humidity?F`
            <div class="target-humidity ${this._isDragging?"dragging":""}">
              ${pt("common.target",_t(this.hass))}: ${n}%
            </div>
          `:W}
        </div>
      </div>
    `}_handleDragStart(t){this._config.show_target_humidity&&(this._isDragging=!0,this._updateTargetFromEvent(t))}_handleDrag(t){this._isDragging&&(t.preventDefault(),this._updateTargetFromEvent(t))}_handleDragEnd(){this._isDragging&&(this._isDragging=!1,null!==this._tempTarget&&(this._handleTargetHumidityChange(this._tempTarget),this._tempTarget=null))}_updateTargetFromEvent(t){const e=t.currentTarget.querySelector("svg");if(!e)return;const i=e.getBoundingClientRect(),r=i.left+i.width/2,n=i.top+i.height/2;let s,o;"touches"in t?(s=t.touches[0].clientX,o=t.touches[0].clientY):(s=t.clientX,o=t.clientY);let a=180*Math.atan2(o-n,s-r)/Math.PI+90;a<0&&(a+=360);let c=Math.round(a/360*100);c=Math.max(30,Math.min(80,c)),c=5*Math.round(c/5),this._tempTarget=c}_renderModeButtons(t){const e=this._availableModes,i=this._currentMode;return F`
      <div class="mode-buttons">
        ${e.map(e=>F`
          <div
            class="mode-button ${i===e?"active":""}"
            @click=${()=>this._handleModeChange(e)}
          >
            <ha-icon icon="${this._getModeIcon(e)}"></ha-icon>
            <span class="mode-name">${pt(`modes.${e}`,t)||e}</span>
          </div>
        `)}
      </div>
    `}_getModeIcon(t){return{Low:"mdi:fan-speed-1",Mid:"mdi:fan-speed-2",Medium:"mdi:fan-speed-2",High:"mdi:fan-speed-3",Humidity:"mdi:water-percent",Auto:"mdi:fan-auto",Silent:"mdi:volume-off",Strong:"mdi:weather-windy"}[t]||"mdi:fan"}_renderSwitches(t){const e=this._switches;return 0===e.length?W:F`
      <div class="switches-row">
        ${e.map(e=>F`
          <div
            class="switch-item ${"on"===e.entity.state?"on":""}"
            @click=${()=>this._handleSwitchToggle(e.entity.entity_id,e.entity.state)}
          >
            <ha-icon icon="${e.icon}"></ha-icon>
            <span class="switch-name">${pt(`switches.${e.id}`,t)||e.name}</span>
          </div>
        `)}
      </div>
    `}_renderNumbers(t){const e=this._numbers;return 0===e.length?W:F`
      <div class="numbers-row">
        ${e.map(e=>F`
          <div class="number-item">
            <div class="number-header">
              <ha-icon icon="${e.icon}"></ha-icon>
              <span class="number-name">${pt(`numbers.${e.id}`,t)||e.name}</span>
            </div>
            <div class="number-control">
              <input
                type="range"
                min="${e.min}"
                max="${e.max}"
                step="${e.step}"
                .value="${e.entity.state}"
                @change=${t=>this._handleNumberChange(e.entity.entity_id,Number(t.target.value))}
              />
              <span class="number-value">${e.entity.state}${e.unit||""}</span>
            </div>
          </div>
        `)}
      </div>
    `}_renderSelects(t){const e=this._selects;return 0===e.length?W:F`
      <div class="selects-row">
        ${e.map(e=>F`
          <div class="select-item">
            <div class="select-header">
              <ha-icon icon="${e.icon}"></ha-icon>
              <span class="select-name">${pt(`selects.${e.id}`,t)||e.name}</span>
            </div>
            <select
              .value="${e.entity.state}"
              @change=${t=>this._handleSelectChange(e.entity.entity_id,t.target.value)}
            >
              ${e.options.map(i=>F`
                <option value="${i}" ?selected=${i===e.entity.state}>
                  ${pt(`select_options.${i}`,t)||i}
                </option>
              `)}
            </select>
          </div>
        `)}
      </div>
    `}_renderButtons(t){const e=this._buttons;return 0===e.length?W:F`
      <div class="buttons-row">
        ${e.map(e=>F`
          <div
            class="button-item"
            @click=${()=>this._handleButtonPress(e.entity.entity_id)}
          >
            <ha-icon icon="${e.icon}"></ha-icon>
            <span class="button-name">${pt(`buttons.${e.id}`,t)||e.name}</span>
          </div>
        `)}
      </div>
    `}_renderSensors(){const t=this._sensors,e=this._temperature;return 0===t.length&&void 0===e?W:F`
      <div class="sensors-row">
        ${void 0!==e?F`
          <div class="sensor-item">
            <ha-icon icon="mdi:thermometer"></ha-icon>
            <span class="sensor-value">${e}</span>
            <span class="sensor-unit">°C</span>
          </div>
        `:W}
        ${t.map(t=>F`
          <div class="sensor-item">
            <ha-icon icon="${t.icon}"></ha-icon>
            <span class="sensor-value">${t.entity.state}</span>
            ${t.unit?F`<span class="sensor-unit">${t.unit}</span>`:W}
          </div>
        `)}
      </div>
    `}_renderStatusIndicators(t){const e=this._waterStatus;if(!e)return W;let i="ok",r="water_tank_ok";"no_water"===e.id?(i="error",r="no_water"):"water_tank_detached"===e.id?(i="warning",r="water_tank_missing"):"water_shortage"===e.id&&(i="error",r="water_shortage");const n=pt(`status.${r}`,t);return F`
      <div class="status-indicators">
        <div class="status-indicator ${i}">
          <ha-icon icon="${e.icon}"></ha-icon>
          <span>${n}</span>
        </div>
      </div>
    `}static getConfigElement(){return document.createElement("xiaomi-humidifier-card-editor")}static getStubConfig(){return{type:"custom:xiaomi-humidifier-card",entity:""}}}St.styles=ut,t([lt({attribute:!1})],St.prototype,"hass",void 0),t([ht()],St.prototype,"_config",void 0),t([ht()],St.prototype,"_isDragging",void 0),t([ht()],St.prototype,"_tempTarget",void 0),((t,e)=>{customElements.get(t)||customElements.define(t,e)})("xiaomi-humidifier-card",St);export{St as XiaomiHumidifierCard};
