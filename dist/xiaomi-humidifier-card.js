function t(t,e,i,r){var o,n=arguments.length,s=n<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,r);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(n<3?o(s):n>3?o(e,i,s):o(e,i))||s);return n>3&&s&&Object.defineProperty(e,i,s),s}"function"==typeof SuppressedError&&SuppressedError;const e=globalThis,i=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,r=Symbol(),o=new WeakMap;let n=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==r)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(i&&void 0===t){const i=void 0!==e&&1===e.length;i&&(t=o.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&o.set(e,t))}return t}toString(){return this.cssText}};const s=(t,...e)=>{const i=1===t.length?t[0]:e.reduce((e,i,r)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[r+1],t[0]);return new n(i,t,r)},a=i?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new n("string"==typeof t?t:t+"",void 0,r))(e)})(t):t,{is:c,defineProperty:d,getOwnPropertyDescriptor:l,getOwnPropertyNames:h,getOwnPropertySymbols:u,getPrototypeOf:m}=Object,p=globalThis,g=p.trustedTypes,f=g?g.emptyScript:"",_=p.reactiveElementPolyfillSupport,y=(t,e)=>t,v={toAttribute(t,e){switch(e){case Boolean:t=t?f:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},b=(t,e)=>!c(t,e),w={attribute:!0,type:String,converter:v,reflect:!1,useDefault:!1,hasChanged:b};Symbol.metadata??=Symbol("metadata"),p.litPropertyMetadata??=new WeakMap;let $=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=w){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),r=this.getPropertyDescriptor(t,i,e);void 0!==r&&d(this.prototype,t,r)}}static getPropertyDescriptor(t,e,i){const{get:r,set:o}=l(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get:r,set(e){const n=r?.call(this);o?.call(this,e),this.requestUpdate(t,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??w}static _$Ei(){if(this.hasOwnProperty(y("elementProperties")))return;const t=m(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(y("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(y("properties"))){const t=this.properties,e=[...h(t),...u(t)];for(const i of e)this.createProperty(i,t[i])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,i]of e)this.elementProperties.set(t,i)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const i=this._$Eu(t,e);void 0!==i&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(a(t))}else void 0!==t&&e.push(a(t));return e}static _$Eu(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((t,r)=>{if(i)t.adoptedStyleSheets=r.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const i of r){const r=document.createElement("style"),o=e.litNonce;void 0!==o&&r.setAttribute("nonce",o),r.textContent=i.cssText,t.appendChild(r)}})(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ET(t,e){const i=this.constructor.elementProperties.get(t),r=this.constructor._$Eu(t,i);if(void 0!==r&&!0===i.reflect){const o=(void 0!==i.converter?.toAttribute?i.converter:v).toAttribute(e,i.type);this._$Em=t,null==o?this.removeAttribute(r):this.setAttribute(r,o),this._$Em=null}}_$AK(t,e){const i=this.constructor,r=i._$Eh.get(t);if(void 0!==r&&this._$Em!==r){const t=i.getPropertyOptions(r),o="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:v;this._$Em=r;const n=o.fromAttribute(e,t.type);this[r]=n??this._$Ej?.get(r)??n,this._$Em=null}}requestUpdate(t,e,i){if(void 0!==t){const r=this.constructor,o=this[t];if(i??=r.getPropertyOptions(t),!((i.hasChanged??b)(o,e)||i.useDefault&&i.reflect&&o===this._$Ej?.get(t)&&!this.hasAttribute(r._$Eu(t,i))))return;this.C(t,e,i)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(t,e,{useDefault:i,reflect:r,wrapped:o},n){i&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,n??e??this[t]),!0!==o||void 0!==n)||(this._$AL.has(t)||(this.hasUpdated||i||(e=void 0),this._$AL.set(t,e)),!0===r&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,i]of t){const{wrapped:t}=i,r=this[e];!0!==t||this._$AL.has(e)||void 0===r||this.C(e,void 0,i,r)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(e)):this._$EM()}catch(e){throw t=!1,this._$EM(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(t){}firstUpdated(t){}};$.elementStyles=[],$.shadowRootOptions={mode:"open"},$[y("elementProperties")]=new Map,$[y("finalized")]=new Map,_?.({ReactiveElement:$}),(p.reactiveElementVersions??=[]).push("2.1.1");const x=globalThis,k=x.trustedTypes,A=k?k.createPolicy("lit-html",{createHTML:t=>t}):void 0,S="$lit$",E=`lit$${Math.random().toFixed(9).slice(2)}$`,C="?"+E,T=`<${C}>`,M=document,O=()=>M.createComment(""),P=t=>null===t||"object"!=typeof t&&"function"!=typeof t,L=Array.isArray,D="[ \t\n\f\r]",H=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,z=/-->/g,N=/>/g,U=RegExp(`>|${D}(?:([^\\s"'>=/]+)(${D}*=${D}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),F=/'/g,I=/"/g,B=/^(?:script|style|textarea|title)$/i,R=(t=>(e,...i)=>({_$litType$:t,strings:e,values:i}))(1),j=Symbol.for("lit-noChange"),K=Symbol.for("lit-nothing"),W=new WeakMap,q=M.createTreeWalker(M,129);function V(t,e){if(!L(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==A?A.createHTML(e):e}const Q=(t,e)=>{const i=t.length-1,r=[];let o,n=2===e?"<svg>":3===e?"<math>":"",s=H;for(let e=0;e<i;e++){const i=t[e];let a,c,d=-1,l=0;for(;l<i.length&&(s.lastIndex=l,c=s.exec(i),null!==c);)l=s.lastIndex,s===H?"!--"===c[1]?s=z:void 0!==c[1]?s=N:void 0!==c[2]?(B.test(c[2])&&(o=RegExp("</"+c[2],"g")),s=U):void 0!==c[3]&&(s=U):s===U?">"===c[0]?(s=o??H,d=-1):void 0===c[1]?d=-2:(d=s.lastIndex-c[2].length,a=c[1],s=void 0===c[3]?U:'"'===c[3]?I:F):s===I||s===F?s=U:s===z||s===N?s=H:(s=U,o=void 0);const h=s===U&&t[e+1].startsWith("/>")?" ":"";n+=s===H?i+T:d>=0?(r.push(a),i.slice(0,d)+S+i.slice(d)+E+h):i+E+(-2===d?e:h)}return[V(t,n+(t[i]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),r]};class X{constructor({strings:t,_$litType$:e},i){let r;this.parts=[];let o=0,n=0;const s=t.length-1,a=this.parts,[c,d]=Q(t,e);if(this.el=X.createElement(c,i),q.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(r=q.nextNode())&&a.length<s;){if(1===r.nodeType){if(r.hasAttributes())for(const t of r.getAttributeNames())if(t.endsWith(S)){const e=d[n++],i=r.getAttribute(t).split(E),s=/([.?@])?(.*)/.exec(e);a.push({type:1,index:o,name:s[2],strings:i,ctor:"."===s[1]?tt:"?"===s[1]?et:"@"===s[1]?it:Z}),r.removeAttribute(t)}else t.startsWith(E)&&(a.push({type:6,index:o}),r.removeAttribute(t));if(B.test(r.tagName)){const t=r.textContent.split(E),e=t.length-1;if(e>0){r.textContent=k?k.emptyScript:"";for(let i=0;i<e;i++)r.append(t[i],O()),q.nextNode(),a.push({type:2,index:++o});r.append(t[e],O())}}}else if(8===r.nodeType)if(r.data===C)a.push({type:2,index:o});else{let t=-1;for(;-1!==(t=r.data.indexOf(E,t+1));)a.push({type:7,index:o}),t+=E.length-1}o++}}static createElement(t,e){const i=M.createElement("template");return i.innerHTML=t,i}}function G(t,e,i=t,r){if(e===j)return e;let o=void 0!==r?i._$Co?.[r]:i._$Cl;const n=P(e)?void 0:e._$litDirective$;return o?.constructor!==n&&(o?._$AO?.(!1),void 0===n?o=void 0:(o=new n(t),o._$AT(t,i,r)),void 0!==r?(i._$Co??=[])[r]=o:i._$Cl=o),void 0!==o&&(e=G(t,o._$AS(t,e.values),o,r)),e}class J{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,r=(t?.creationScope??M).importNode(e,!0);q.currentNode=r;let o=q.nextNode(),n=0,s=0,a=i[0];for(;void 0!==a;){if(n===a.index){let e;2===a.type?e=new Y(o,o.nextSibling,this,t):1===a.type?e=new a.ctor(o,a.name,a.strings,this,t):6===a.type&&(e=new rt(o,this,t)),this._$AV.push(e),a=i[++s]}n!==a?.index&&(o=q.nextNode(),n++)}return q.currentNode=M,r}p(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class Y{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,r){this.type=2,this._$AH=K,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=G(this,t,e),P(t)?t===K||null==t||""===t?(this._$AH!==K&&this._$AR(),this._$AH=K):t!==this._$AH&&t!==j&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>L(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==K&&P(this._$AH)?this._$AA.nextSibling.data=t:this.T(M.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:i}=t,r="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=X.createElement(V(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===r)this._$AH.p(e);else{const t=new J(r,this),i=t.u(this.options);t.p(e),this.T(i),this._$AH=t}}_$AC(t){let e=W.get(t.strings);return void 0===e&&W.set(t.strings,e=new X(t)),e}k(t){L(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,r=0;for(const o of t)r===e.length?e.push(i=new Y(this.O(O()),this.O(O()),this,this.options)):i=e[r],i._$AI(o),r++;r<e.length&&(this._$AR(i&&i._$AB.nextSibling,r),e.length=r)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class Z{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,r,o){this.type=1,this._$AH=K,this._$AN=void 0,this.element=t,this.name=e,this._$AM=r,this.options=o,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=K}_$AI(t,e=this,i,r){const o=this.strings;let n=!1;if(void 0===o)t=G(this,t,e,0),n=!P(t)||t!==this._$AH&&t!==j,n&&(this._$AH=t);else{const r=t;let s,a;for(t=o[0],s=0;s<o.length-1;s++)a=G(this,r[i+s],e,s),a===j&&(a=this._$AH[s]),n||=!P(a)||a!==this._$AH[s],a===K?t=K:t!==K&&(t+=(a??"")+o[s+1]),this._$AH[s]=a}n&&!r&&this.j(t)}j(t){t===K?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class tt extends Z{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===K?void 0:t}}class et extends Z{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==K)}}class it extends Z{constructor(t,e,i,r,o){super(t,e,i,r,o),this.type=5}_$AI(t,e=this){if((t=G(this,t,e,0)??K)===j)return;const i=this._$AH,r=t===K&&i!==K||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,o=t!==K&&(i===K||r);r&&this.element.removeEventListener(this.name,this,i),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class rt{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){G(this,t)}}const ot=x.litHtmlPolyfillSupport;ot?.(X,Y),(x.litHtmlVersions??=[]).push("3.3.1");const nt=globalThis;class st extends ${constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{const r=i?.renderBefore??e;let o=r._$litPart$;if(void 0===o){const t=i?.renderBefore??null;r._$litPart$=o=new Y(e.insertBefore(O(),t),t,void 0,i??{})}return o._$AI(t),o})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return j}}st._$litElement$=!0,st.finalized=!0,nt.litElementHydrateSupport?.({LitElement:st});const at=nt.litElementPolyfillSupport;at?.({LitElement:st}),(nt.litElementVersions??=[]).push("4.2.1");const ct={attribute:!0,type:String,converter:v,reflect:!1,hasChanged:b},dt=(t=ct,e,i)=>{const{kind:r,metadata:o}=i;let n=globalThis.litPropertyMetadata.get(o);if(void 0===n&&globalThis.litPropertyMetadata.set(o,n=new Map),"setter"===r&&((t=Object.create(t)).wrapped=!0),n.set(i.name,t),"accessor"===r){const{name:r}=i;return{set(i){const o=e.get.call(this);e.set.call(this,i),this.requestUpdate(r,o,t)},init(e){return void 0!==e&&this.C(r,void 0,t,e),e}}}if("setter"===r){const{name:r}=i;return function(i){const o=this[r];e.call(this,i),this.requestUpdate(r,o,t)}}throw Error("Unsupported decorator location: "+r)};function lt(t){return(e,i)=>"object"==typeof i?dt(t,e,i):((t,e,i)=>{const r=e.hasOwnProperty(i);return e.constructor.createProperty(i,t),r?Object.getOwnPropertyDescriptor(e,i):void 0})(t,e,i)}function ht(t){return lt({...t,state:!0,attribute:!1})}const ut=s`
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
`;const mt={en:{common:{unavailable:"Unavailable",on:"On",off:"Off",target:"Target"},modes:{Low:"Low",Medium:"Medium",High:"High",Humidity:"Auto",Auto:"Auto",Silent:"Silent",Strong:"Strong",Favorite:"Favorite",Nature:"Nature",Sleep:"Sleep",Fan:"Fan",Level1:"Level 1",Level2:"Level 2",Level3:"Level 3",Level4:"Level 4"},switches:{led:"LED",led_light:"LED",buzzer:"Buzzer",child_lock:"Lock",dry:"Dry",overwet_protect:"Protect",learn_mode:"Learn",auto_detect:"Auto Detect",oscillate:"Oscillate",ptc:"PTC",display:"Display",anion:"Ionizer",gestures:"Gestures"},sensors:{temperature:"Temp",humidity:"Humidity",water_level:"Water",motor_speed:"Speed",use_time:"Time",aqi:"AQI",pm25:"PM2.5",tvoc:"TVOC",co2:"CO2",filter_life_remaining:"Filter",filter_hours_used:"Filter Hours",filter_left_time:"Filter Left",clean_area:"Clean Area",clean_time:"Clean Time",illuminance:"Light",illuminance_lux:"Lux",fan_level:"Fan Level",favorite_level:"Fav Level",average_aqi:"Avg AQI",purify_volume:"Purify Vol",motor2_speed:"Motor 2",filter_rfid_product_id:"Filter ID",filter_rfid_tag:"Filter Tag",power:"Power",voltage:"Voltage",current:"Current",water_shortage:"Water Shortage",depth:"Depth",actual_speed:"Act Speed",fault:"Fault"},numbers:{favorite_level:"Favorite Level",fan_level:"Fan Level",volume:"Volume",target_humidity:"Target Humidity",angle:"Oscillation Angle",delay_off_countdown:"Delay Off"},selects:{led_brightness:"LED Brightness",display_orientation:"Display",ptc_level:"PTC Level",mode:"Mode"},buttons:{reset_filter:"Reset Filter",filters_cleaned:"Filters Cleaned"},status:{water_tank_ok:"Tank OK",water_tank_missing:"No Tank",water_shortage:"Add Water",no_water:"No Water"},editor:{entity:"Entity (required)",name:"Name (optional)",show_name:"Show name",show_state:"Show state",show_target_humidity:"Show target humidity",show_mode:"Show mode buttons",show_sensors:"Show sensors",show_switches:"Show switches",show_numbers:"Show sliders",show_selects:"Show dropdowns",show_buttons:"Show action buttons",compact:"Compact mode"}},ru:{common:{unavailable:"Недоступно",on:"Вкл",off:"Выкл",target:"Цель"},modes:{Low:"Низкий",Medium:"Средний",High:"Высокий",Humidity:"Авто",Auto:"Авто",Silent:"Тихий",Strong:"Сильный",Favorite:"Любимый",Nature:"Природа",Sleep:"Сон",Fan:"Вентилятор",Level1:"Уровень 1",Level2:"Уровень 2",Level3:"Уровень 3",Level4:"Уровень 4"},switches:{led:"LED",led_light:"LED",buzzer:"Звук",child_lock:"Блок",dry:"Сушка",overwet_protect:"Защита",learn_mode:"Обуч",auto_detect:"Авто",oscillate:"Вращ",ptc:"PTC",display:"Дисплей",anion:"Ионы",gestures:"Жесты"},sensors:{temperature:"Темп",humidity:"Влажн",water_level:"Вода",motor_speed:"Скор",use_time:"Время",aqi:"AQI",pm25:"PM2.5",tvoc:"TVOC",co2:"CO2",filter_life_remaining:"Фильтр",filter_hours_used:"Часы фильтра",filter_left_time:"Ост. фильтр",clean_area:"Площадь",clean_time:"Время уборки",illuminance:"Свет",illuminance_lux:"Люкс",fan_level:"Уровень",favorite_level:"Любим",average_aqi:"Сред AQI",purify_volume:"Очищено",motor2_speed:"Мотор 2",filter_rfid_product_id:"ID фильтра",filter_rfid_tag:"Тег фильтра",power:"Мощность",voltage:"Напряж",current:"Ток",water_shortage:"Нет воды",depth:"Глуб",actual_speed:"Скорость",fault:"Ошибка"},numbers:{favorite_level:"Любимый уровень",fan_level:"Уровень вентилятора",volume:"Громкость",target_humidity:"Целевая влажность",angle:"Угол вращения",delay_off_countdown:"Таймер выкл"},selects:{led_brightness:"Яркость LED",display_orientation:"Ориентация",ptc_level:"Уровень PTC",mode:"Режим"},buttons:{reset_filter:"Сбросить фильтр",filters_cleaned:"Фильтр очищен"},status:{water_tank_ok:"Бак ОК",water_tank_missing:"Нет бака",water_shortage:"Долейте воду",no_water:"Нет воды"},editor:{entity:"Объект (обязательно)",name:"Название (опционально)",show_name:"Показывать название",show_state:"Показывать состояние",show_target_humidity:"Показывать целевую влажность",show_mode:"Показывать кнопки режимов",show_sensors:"Показывать сенсоры",show_switches:"Показывать переключатели",show_numbers:"Показывать слайдеры",show_selects:"Показывать выпадающие списки",show_buttons:"Показывать кнопки действий",compact:"Компактный режим"}}};function pt(t,e="en"){const i=mt[e]||mt.en,r=t.split(".");let o=i;for(const e of r){if(!o||"object"!=typeof o||!(e in o)){o=mt.en;for(const e of r){if(!o||"object"!=typeof o||!(e in o))return t;o=o[e]}break}o=o[e]}return"string"==typeof o?o:t}function gt(t){if(t?.language){const e=t.language.split("-")[0].toLowerCase();if(e in mt)return e}return"en"}const ft={buzzer:{icon:"mdi:volume-high",name:"Buzzer"},led:{icon:"mdi:led-on",name:"LED"},led_light:{icon:"mdi:led-on",name:"LED Light"},child_lock:{icon:"mdi:lock",name:"Child Lock"},dry:{icon:"mdi:water-off",name:"Dry Mode"},learn_mode:{icon:"mdi:school",name:"Learn Mode"},auto_detect:{icon:"mdi:auto-fix",name:"Auto Detect"},oscillate:{icon:"mdi:rotate-3d-variant",name:"Oscillation"},ptc:{icon:"mdi:radiator",name:"PTC Heater"},overwet_protect:{icon:"mdi:water-alert",name:"Overwet Protection"},display:{icon:"mdi:monitor",name:"Display"},anion:{icon:"mdi:atom",name:"Ionizer"},gestures:{icon:"mdi:gesture-tap",name:"Gesture Control"}},_t={aqi:{icon:"mdi:air-filter",name:"Air Quality Index",unit:"AQI"},pm25:{icon:"mdi:blur",name:"PM2.5",unit:"µg/m³"},pm10:{icon:"mdi:blur-linear",name:"PM10",unit:"µg/m³"},average_aqi:{icon:"mdi:air-filter",name:"Average AQI",unit:"AQI"},tvoc:{icon:"mdi:molecule",name:"TVOC",unit:"µg/m³"},co2:{icon:"mdi:molecule-co2",name:"CO2",unit:"ppm"},temperature:{icon:"mdi:thermometer",name:"Temperature",unit:"°C"},humidity:{icon:"mdi:water-percent",name:"Humidity",unit:"%"},temperature_outside:{icon:"mdi:thermometer",name:"Outside Temperature",unit:"°C"},filter_life_remaining:{icon:"mdi:air-filter",name:"Filter Life",unit:"%"},filter_hours_used:{icon:"mdi:clock-outline",name:"Filter Hours Used",unit:"h"},filter_left_time:{icon:"mdi:calendar-clock",name:"Filter Days Left",unit:"d"},filter_type:{icon:"mdi:air-filter",name:"Filter Type"},dust_filter_life_remaining:{icon:"mdi:air-filter",name:"Dust Filter Life",unit:"%"},dust_filter_life_remaining_days:{icon:"mdi:calendar-clock",name:"Dust Filter Days Left",unit:"d"},upper_filter_life_remaining:{icon:"mdi:air-filter",name:"Upper Filter Life",unit:"%"},upper_filter_life_remaining_days:{icon:"mdi:calendar-clock",name:"Upper Filter Days Left",unit:"d"},motor_speed:{icon:"mdi:fan",name:"Motor Speed",unit:"rpm"},motor2_speed:{icon:"mdi:fan",name:"Motor 2 Speed",unit:"rpm"},use_time:{icon:"mdi:clock-outline",name:"Use Time",unit:"s"},purify_volume:{icon:"mdi:air-purifier",name:"Purify Volume",unit:"m³"},water_level:{icon:"mdi:water",name:"Water Level",unit:"%"},target_humidity:{icon:"mdi:water-percent",name:"Target Humidity",unit:"%"},battery:{icon:"mdi:battery",name:"Battery",unit:"%"},speed:{icon:"mdi:speedometer",name:"Speed"},natural_speed:{icon:"mdi:weather-windy",name:"Natural Speed"},direct_speed:{icon:"mdi:fan",name:"Direct Speed"},angle:{icon:"mdi:rotate-3d-variant",name:"Oscillation Angle",unit:"°"},favorite_speed:{icon:"mdi:speedometer",name:"Favorite Speed",unit:"rpm"},control_speed:{icon:"mdi:speedometer",name:"Control Speed",unit:"rpm"},mode:{icon:"mdi:information-outline",name:"Mode"},illuminance:{icon:"mdi:brightness-6",name:"Illuminance",unit:"lx"},volume:{icon:"mdi:volume-high",name:"Volume",unit:"%"}},yt={favorite_level:{icon:"mdi:heart",name:"Favorite Level",min:0,max:16,step:1},fan_level:{icon:"mdi:fan",name:"Fan Level",min:1,max:3,step:1},volume:{icon:"mdi:volume-medium",name:"Volume",min:0,max:100,step:1,unit:"%"},target_humidity:{icon:"mdi:water-percent",name:"Target Humidity",min:30,max:80,step:10,unit:"%"},angle:{icon:"mdi:angle-acute",name:"Oscillation Angle",min:30,max:120,step:30,unit:"°"},delay_off_countdown:{icon:"mdi:timer-off",name:"Delay Off",min:0,max:480,step:1,unit:"min"}},vt={led_brightness:{icon:"mdi:brightness-6",name:"LED Brightness",options:["bright","dim","off"]},display_orientation:{icon:"mdi:rotate-3d-variant",name:"Display Orientation",options:["forward","left","right"]},ptc_level:{icon:"mdi:radiator",name:"PTC Level",options:["low","medium","high"]},mode:{icon:"mdi:tune",name:"Mode"}},bt={reset_filter:{icon:"mdi:air-filter",name:"Reset Filter"},filters_cleaned:{icon:"mdi:check-circle",name:"Mark Filters Cleaned"}};class wt{constructor(t,e){this._relatedEntities=new Map,this._hass=t,this._config=e,this._entityId=e.entity;const i=this._entityId.split(".")[1];this._baseId=i.replace(/_fan$/,"").replace(/_humidifier$/,"").replace(/_air_humidifier$/,""),this._findRelatedEntities()}get entity(){return this._hass?.states[this._entityId]}get entityId(){return this._entityId}get baseId(){return this._baseId}_findRelatedEntities(){this._relatedEntities.clear();for(const t of Object.keys(this._hass.states)){const e=t.split("."),i=e[1];if(i.startsWith(this._baseId+"_")||i===this._baseId){const r=e[0],o=i===this._baseId?"":i.replace(this._baseId+"_","");this._relatedEntities.set(`${r}.${o}`,t)}}}findEntityByKey(t,e){const i=`${t}_entity`;if(this._config[i]){const t=this._hass?.states[this._config[i]];if(t)return t}const r=`${e}.${t}`,o=this._relatedEntities.get(r);if(o)return this._hass?.states[o];for(const[i,r]of this._relatedEntities)if(i===`${e}.${t}`||i.endsWith(`.${t}`)){const t=this._hass?.states[r];if(t&&t.entity_id.split(".")[0]===e)return t}}findEntity(t){for(const e of t){const t=e.split(".");if(2===t.length){const e=this.findEntityByKey(t[1],t[0]);if(e)return e}else for(const t of["sensor","switch","number","select","button","binary_sensor"]){const i=this.findEntityByKey(e,t);if(i)return i}}}getCurrentHumidity(){const t=this.entity?.attributes;if(this._config.humidity_entity){const t=this._hass?.states[this._config.humidity_entity];if(t&&"unavailable"!==t.state&&"unknown"!==t.state)return Number(t.state)}if(void 0!==t?.humidity&&null!==t.humidity)return Number(t.humidity);if(void 0!==t?.current_humidity&&null!==t.current_humidity)return Number(t.current_humidity);if(void 0!==t?.relative_humidity&&null!==t.relative_humidity)return Number(t.relative_humidity);const e=this.findEntityByKey("humidity","sensor");return e&&"unavailable"!==e.state&&"unknown"!==e.state?Number(e.state):void 0}getTargetHumidity(){const t=this.entity?.attributes;if(void 0!==t?.target_humidity)return Number(t.target_humidity);const e=this.findEntityByKey("target_humidity","number");return e?Number(e.state):void 0}getTemperature(){const t=this.entity?.attributes;if(void 0!==t?.temperature)return Number(t.temperature);const e=this.findEntityByKey("temperature","sensor");return e&&"unavailable"!==e.state&&"unknown"!==e.state?Number(e.state):void 0}getCurrentMode(){const t=this.entity?.attributes;if(t?.preset_mode)return String(t.preset_mode);if(t?.mode)return String(t.mode);const e=this.findEntityByKey("mode","select");return e?e.state:void 0}getAvailableModes(){const t=this.entity?.attributes;if(t?.preset_modes&&Array.isArray(t.preset_modes))return t.preset_modes;const e=this.findEntityByKey("mode","select");return e?.attributes?.options&&Array.isArray(e.attributes.options)?e.attributes.options:["Low","Medium","High","Humidity"]}isOn(){const t=this.entity?.state;return"on"===t||"true"===t}isUnavailable(){const t=this.entity?.state;return"unavailable"===t||"unknown"===t||!t}getSwitches(){if(!1===this._config.show_switches)return[];const t=[],e=new Set;for(const[i,r]of Object.entries(ft)){const o=this.findEntityByKey(i,"switch");o&&!e.has(o.entity_id)&&"unavailable"!==o.state&&(e.add(o.entity_id),t.push({id:i,entity:o,name:r.name,icon:r.icon}))}return t}getSensors(){if(!1===this._config.show_sensors)return[];const t=[],e=new Set;for(const[i,r]of Object.entries(_t)){if("humidity"===i||"temperature"===i||"target_humidity"===i||"mode"===i)continue;const o=this.findEntityByKey(i,"sensor");o&&"unavailable"!==o.state&&"unknown"!==o.state&&!e.has(o.entity_id)&&(e.add(o.entity_id),t.push({id:i,entity:o,name:r.name,icon:r.icon,unit:r.unit}))}return t}getNumbers(){if(!1===this._config.show_numbers)return[];const t=[],e=new Set;for(const[i,r]of Object.entries(yt)){if("target_humidity"===i)continue;const o=this.findEntityByKey(i,"number");o&&"unavailable"!==o.state&&!e.has(o.entity_id)&&(e.add(o.entity_id),t.push({id:i,entity:o,name:r.name,icon:r.icon,min:Number(o.attributes.min??r.min),max:Number(o.attributes.max??r.max),step:Number(o.attributes.step??r.step),unit:r.unit}))}return t}getSelects(){if(!1===this._config.show_selects)return[];const t=[],e=new Set;for(const[i,r]of Object.entries(vt)){if("mode"===i)continue;const o=this.findEntityByKey(i,"select");if(o&&"unavailable"!==o.state&&!e.has(o.entity_id)){e.add(o.entity_id);const n=o.attributes.options||r.options||[];t.push({id:i,entity:o,name:r.name,icon:r.icon,options:n})}}return t}getButtons(){if(!1===this._config.show_buttons)return[];const t=[],e=new Set;for(const[i,r]of Object.entries(bt)){const o=this.findEntityByKey(i,"button");o&&"unavailable"!==o.state&&!e.has(o.entity_id)&&(e.add(o.entity_id),t.push({id:i,entity:o,name:r.name,icon:r.icon}))}return t}getWaterStatus(){const t=this.entity?.attributes;if(t){if("no_water"in t&&!0===t.no_water)return{id:"no_water",isOn:!0,icon:"mdi:water-off"};if("water_tank_detached"in t&&!0===t.water_tank_detached)return{id:"water_tank_detached",isOn:!0,icon:"mdi:cup-off-outline"};if("water_shortage"in t&&!0===t.water_shortage)return{id:"water_shortage",isOn:!0,icon:"mdi:water-alert"};if("no_water"in t||"water_tank_detached"in t||"water_shortage"in t)return{id:"water_ok",isOn:!1,icon:"mdi:water-check"}}const e=this.findEntityByKey("no_water","binary_sensor");if(e&&"unavailable"!==e.state&&"on"===e.state)return{id:"no_water",isOn:!0,icon:"mdi:water-off"};const i=this.findEntityByKey("water_shortage","binary_sensor");if(i&&"unavailable"!==i.state&&"on"===i.state)return{id:"water_shortage",isOn:!0,icon:"mdi:water-alert"};const r=this.findEntityByKey("water_tank","binary_sensor");return r&&"unavailable"!==r.state&&"off"===r.state?{id:"water_tank_detached",isOn:!0,icon:"mdi:cup-off-outline"}:e||i||r?{id:"water_ok",isOn:!1,icon:"mdi:water-check"}:null}}class $t extends st{setConfig(t){this._config=t}_valueChanged(t){if(!this._config||!this.hass)return;const e=t.target,i=e.dataset.configKey;if(!i)return;let r=e.value;"checkbox"===e.type&&(r=e.checked);const o={...this._config,[i]:r},n=new CustomEvent("config-changed",{detail:{config:o},bubbles:!0,composed:!0});this.dispatchEvent(n)}_getEntities(t){return this.hass?Object.keys(this.hass.states).filter(e=>e.startsWith(`${t}.`)).sort():[]}render(){if(!this.hass||!this._config)return R``;const t=gt(this.hass),e=[...this._getEntities("fan"),...this._getEntities("humidifier")].sort();return R`
      <div class="form">
        <div class="row">
          <label>${pt("editor.entity",t)}</label>
          <select
            data-config-key="entity"
            .value=${this._config.entity||""}
            @change=${this._valueChanged}
          >
            <option value="">-- Select entity --</option>
            ${e.map(t=>R`
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
    `}}var xt,kt;$t.styles=s`
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
  `,t([lt({attribute:!1})],$t.prototype,"hass",void 0),t([ht()],$t.prototype,"_config",void 0),xt="xiaomi-humidifier-card-editor",kt=$t,customElements.get(xt)||customElements.define(xt,kt);class At extends st{constructor(){super(...arguments),this.showTarget=!0,this._isDragging=!1,this._tempTarget=null}render(){const t=2*Math.PI*80,e=t-(void 0!==this.humidity?this.humidity/100*t:0),i=null!==this._tempTarget?this._tempTarget:this.targetHumidity,r=void 0!==i?(i/100*360-90)*(Math.PI/180):0,o=void 0!==i?100+80*Math.cos(r):0,n=void 0!==i?100+80*Math.sin(r):0,s=gt(this.hass);return R`
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
            stroke-dasharray="${t}"
            stroke-dashoffset="${e}"
          />
          ${void 0!==i&&this.showTarget?R`
            <circle
              class="target-indicator ${this._isDragging?"dragging":""}"
              cx="${o}"
              cy="${n}"
              r="10"
            />
          `:K}
        </svg>
        <div class="center-content">
          <ha-icon class="humidity-icon" icon="mdi:water-percent"></ha-icon>
          <div class="current-humidity">
            ${void 0!==this.humidity?this.humidity:"--"}
            <span class="humidity-unit">%</span>
          </div>
          ${void 0!==i&&this.showTarget?R`
            <div class="target-humidity ${this._isDragging?"dragging":""}">
              ${pt("common.target",s)}: ${i}%
            </div>
          `:K}
        </div>
      </div>
    `}_handleDragStart(t){this.showTarget&&this.onTargetChange&&(this._isDragging=!0,this._updateTargetFromEvent(t))}_handleDrag(t){this._isDragging&&(t.preventDefault(),this._updateTargetFromEvent(t))}_handleDragEnd(){this._isDragging&&(this._isDragging=!1,null!==this._tempTarget&&this.onTargetChange&&(this.onTargetChange(this._tempTarget),this._tempTarget=null))}_updateTargetFromEvent(t){const e=t.currentTarget.querySelector("svg");if(!e)return;const i=e.getBoundingClientRect(),r=i.left+i.width/2,o=i.top+i.height/2;let n,s;"touches"in t?(n=t.touches[0].clientX,s=t.touches[0].clientY):(n=t.clientX,s=t.clientY);let a=180*Math.atan2(s-o,n-r)/Math.PI+90;a<0&&(a+=360);let c=Math.round(a/360*100);c=Math.max(30,Math.min(80,c)),c=5*Math.round(c/5),this._tempTarget=c}}At.styles=s`
    :host {
      display: block;
    }

    .humidity-circle {
      position: relative;
      width: 200px;
      height: 200px;
      margin: 0 auto 16px;
      cursor: pointer;
      touch-action: none;
    }

    .humidity-circle svg {
      width: 100%;
      height: 100%;
      transform: rotate(-90deg);
    }

    .arc-background {
      fill: none;
      stroke: var(--disabled-text-color, #e0e0e0);
      stroke-width: 8;
      stroke-linecap: round;
    }

    .arc-progress {
      fill: none;
      stroke: var(--primary-color, #03a9f4);
      stroke-width: 8;
      stroke-linecap: round;
      transition: stroke-dashoffset 0.3s ease;
    }

    .target-indicator {
      fill: var(--primary-color, #03a9f4);
      stroke: var(--ha-card-background, var(--card-background-color, #fff));
      stroke-width: 3;
      cursor: grab;
      transition: r 0.2s ease, fill 0.2s ease;
      transform-origin: center;
    }

    .target-indicator:hover {
      r: 12;
    }

    .target-indicator.dragging {
      r: 14;
      fill: var(--secondary-color, #4fc3f7);
      cursor: grabbing;
    }

    .center-content {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      text-align: center;
    }

    .humidity-icon {
      font-size: 1.5em;
      color: var(--primary-color, #03a9f4);
      margin-bottom: 4px;
    }

    .current-humidity {
      font-size: 2.5em;
      font-weight: 500;
      color: var(--primary-text-color, #212121);
      line-height: 1;
    }

    .humidity-unit {
      font-size: 0.8em;
      color: var(--secondary-text-color, #727272);
    }

    .target-humidity {
      font-size: 1em;
      color: var(--secondary-text-color, #727272);
      margin-top: 4px;
    }

    .target-humidity.dragging {
      color: var(--primary-color, #03a9f4);
      font-weight: 500;
    }

    @media (max-width: 400px) {
      .humidity-circle {
        width: 160px;
        height: 160px;
      }

      .current-humidity {
        font-size: 2em;
      }
    }

    @media (min-width: 600px) {
      .humidity-circle {
        width: 240px;
        height: 240px;
      }

      .current-humidity {
        font-size: 3em;
      }
    }
  `,t([lt({attribute:!1})],At.prototype,"hass",void 0),t([lt({type:Number})],At.prototype,"humidity",void 0),t([lt({type:Number})],At.prototype,"targetHumidity",void 0),t([lt({type:Boolean})],At.prototype,"showTarget",void 0),t([lt({attribute:!1})],At.prototype,"onTargetChange",void 0),t([ht()],At.prototype,"_isDragging",void 0),t([ht()],At.prototype,"_tempTarget",void 0),customElements.get("humidity-circle")||customElements.define("humidity-circle",At);const St={Low:"mdi:fan-speed-1",Mid:"mdi:fan-speed-2",Medium:"mdi:fan-speed-2",High:"mdi:fan-speed-3",Humidity:"mdi:water-percent",Auto:"mdi:fan-auto",Silent:"mdi:volume-off",Strong:"mdi:weather-windy",Favorite:"mdi:heart",Nature:"mdi:leaf",Sleep:"mdi:sleep",Fan:"mdi:fan",Level1:"mdi:numeric-1-circle",Level2:"mdi:numeric-2-circle",Level3:"mdi:numeric-3-circle",Level4:"mdi:numeric-4-circle"};class Et extends st{constructor(){super(...arguments),this.modes=[],this.lang="en"}render(){return R`
      <div class="mode-buttons">
        ${this.modes.map(t=>R`
          <div
            class="mode-button ${this.currentMode===t?"active":""}"
            @click=${()=>this._handleClick(t)}
          >
            <ha-icon icon="${this._getModeIcon(t)}"></ha-icon>
            <span class="mode-name">${pt(`modes.${t}`,this.lang)||t}</span>
          </div>
        `)}
      </div>
    `}_getModeIcon(t){return St[t]||"mdi:fan"}_handleClick(t){this.onModeChange&&this.onModeChange(t)}}Et.styles=s`
    :host {
      display: block;
    }

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
      background: var(--primary-color, #03a9f4);
      color: white;
    }

    .mode-button:hover ha-icon {
      color: white;
    }

    .mode-button.active {
      background: var(--primary-color, #03a9f4);
      color: white;
      border-color: var(--primary-color, #03a9f4);
    }

    .mode-button.active ha-icon {
      color: white;
    }

    .mode-button ha-icon {
      margin-bottom: 4px;
      color: var(--primary-text-color, #212121);
      transition: color 0.2s ease;
    }

    .mode-name {
      font-size: 0.75em;
      text-transform: uppercase;
    }

    @media (max-width: 400px) {
      .mode-buttons {
        gap: 4px;
      }

      .mode-button {
        padding: 6px 12px;
        min-width: 50px;
      }
    }
  `,t([lt({type:Array})],Et.prototype,"modes",void 0),t([lt({type:String})],Et.prototype,"currentMode",void 0),t([lt({type:String})],Et.prototype,"lang",void 0),t([lt({attribute:!1})],Et.prototype,"onModeChange",void 0),customElements.get("mode-buttons")||customElements.define("mode-buttons",Et);console.info("%c XIAOMI-HUMIDIFIER-CARD %c 1.2.1 ","color: white; background: #03a9f4; font-weight: bold;","color: #03a9f4; background: white; font-weight: bold;"),window.customCards=window.customCards||[],window.customCards.find(t=>"xiaomi-humidifier-card"===t.type)||window.customCards.push({type:"xiaomi-humidifier-card",name:"Xiaomi Humidifier Card",description:"Thermostat-style card for Xiaomi humidifiers",preview:!0});class Ct extends st{setConfig(t){if(!t.entity)throw new Error("Entity is required");this._config={show_name:!0,show_state:!0,show_current_humidity:!0,show_target_humidity:!0,show_mode:!0,show_power:!0,show_sensors:!0,show_switches:!0,show_numbers:!0,show_selects:!0,show_buttons:!0,compact:!1,...t}}getCardSize(){return this._config?.compact?3:5}willUpdate(t){super.willUpdate(t),t.has("hass")&&this.hass&&this._config&&(this._entityFinder=new wt(this.hass,this._config))}render(){if(!this._config||!this.hass||!this._entityFinder)return R``;const t=gt(this.hass),e=this._entityFinder;if(e.isUnavailable())return R`
        <ha-card>
          <div class="unavailable-message">
            <ha-icon icon="mdi:alert-circle-outline"></ha-icon>
            <div>${pt("common.unavailable",t)}</div>
          </div>
        </ha-card>
      `;const i=this._config.name||e.entity?.attributes?.friendly_name||"Humidifier",r=e.getCurrentHumidity(),o=e.getTargetHumidity(),n=e.getTemperature(),s=e.isOn();return R`
      <ha-card>
        ${function(t,e,i,r,o,n,s){return R`
    <div class="card-header">
      <div>
        ${i?R`<div class="name">${t}</div>`:K}
        ${r?R`
          <div class="state">
            ${pt(e?"common.on":"common.off",n)}
          </div>
        `:K}
      </div>
      ${o?R`
        <ha-icon-button
          class="power-button ${e?"on":""}"
          @click=${s}
        >
          <ha-icon icon="mdi:power"></ha-icon>
        </ha-icon-button>
      `:K}
    </div>
  `}(i,s,!1!==this._config.show_name,!1!==this._config.show_state,!1!==this._config.show_power,t,()=>this._handlePowerToggle())}

        <humidity-circle
          .hass=${this.hass}
          .humidity=${r}
          .targetHumidity=${o}
          .showTarget=${!1!==this._config.show_target_humidity}
          .onTargetChange=${t=>this._handleTargetHumidityChange(t)}
        ></humidity-circle>

        ${this._config.show_mode?R`
          <mode-buttons
            .modes=${e.getAvailableModes()}
            .currentMode=${e.getCurrentMode()}
            .lang=${t}
            .onModeChange=${t=>this._handleModeChange(t)}
          ></mode-buttons>
        `:K}

        ${function(t,e,i){return 0===t.length?K:R`
    <div class="switches-row">
      ${t.map(t=>R`
        <div
          class="switch-item ${"on"===t.entity.state?"on":""}"
          @click=${()=>i(t.entity.entity_id,t.entity.state)}
        >
          <ha-icon icon="${t.icon}"></ha-icon>
          <span class="switch-name">${pt(`switches.${t.id}`,e)||t.name}</span>
        </div>
      `)}
    </div>
  `}(e.getSwitches(),t,(t,e)=>this._handleSwitchToggle(t,e))}
        ${function(t,e,i){return 0===t.length?K:R`
    <div class="numbers-row">
      ${t.map(t=>R`
        <div class="number-item">
          <div class="number-header">
            <span class="number-name">
              <ha-icon icon="${t.icon}"></ha-icon>
              ${pt(`numbers.${t.id}`,e)||t.name}
            </span>
            <span class="number-value">${t.entity.state}${t.unit||""}</span>
          </div>
          <div class="number-control">
            <input
              type="range"
              min="${t.min}"
              max="${t.max}"
              step="${t.step}"
              .value="${t.entity.state}"
              @change=${e=>i(t.entity.entity_id,Number(e.target.value))}
            />
          </div>
        </div>
      `)}
    </div>
  `}(e.getNumbers(),t,(t,e)=>this._handleNumberChange(t,e))}
        ${function(t,e,i){return 0===t.length?K:R`
    <div class="selects-row">
      ${t.map(t=>R`
        <div class="select-item">
          <div class="select-header">
            <ha-icon icon="${t.icon}"></ha-icon>
            <span class="select-name">${pt(`selects.${t.id}`,e)||t.name}</span>
          </div>
          <select
            .value="${t.entity.state}"
            @change=${e=>i(t.entity.entity_id,e.target.value)}
          >
            ${t.options.map(i=>R`
              <option value="${i}" ?selected=${i===t.entity.state}>
                ${pt(`select_options.${i}`,e)||i}
              </option>
            `)}
          </select>
        </div>
      `)}
    </div>
  `}(e.getSelects(),t,(t,e)=>this._handleSelectChange(t,e))}
        ${function(t,e,i){return 0===t.length?K:R`
    <div class="buttons-row">
      ${t.map(t=>R`
        <div
          class="button-item"
          @click=${()=>i(t.entity.entity_id)}
        >
          <ha-icon icon="${t.icon}"></ha-icon>
          <span class="button-name">${pt(`buttons.${t.id}`,e)||t.name}</span>
        </div>
      `)}
    </div>
  `}(e.getButtons(),t,t=>this._handleButtonPress(t))}
        ${function(t,e){return 0===t.length&&void 0===e?K:R`
    <div class="sensors-row">
      ${void 0!==e?R`
        <div class="sensor-item">
          <ha-icon icon="mdi:thermometer"></ha-icon>
          <span class="sensor-value">${e}</span>
          <span class="sensor-unit">°C</span>
        </div>
      `:K}
      ${t.map(t=>R`
        <div class="sensor-item">
          <ha-icon icon="${t.icon}"></ha-icon>
          <span class="sensor-value">${t.entity.state}</span>
          ${t.unit?R`<span class="sensor-unit">${t.unit}</span>`:K}
        </div>
      `)}
    </div>
  `}(e.getSensors(),n)}
        ${function(t,e){if(!t)return K;let i="ok",r="water_tank_ok";"no_water"===t.id?(i="error",r="no_water"):"water_tank_detached"===t.id?(i="warning",r="water_tank_missing"):"water_shortage"===t.id&&(i="error",r="water_shortage");const o=pt(`status.${r}`,e);return R`
    <div class="status-indicators">
      <div class="status-indicator ${i}">
        <ha-icon icon="${t.icon}"></ha-icon>
        <span>${o}</span>
      </div>
    </div>
  `}(e.getWaterStatus(),t)}
      </ha-card>
    `}async _handlePowerToggle(){if(!this.hass||!this._entityFinder)return;const t=this._entityFinder.entityId,e=t.split(".")[0],i=this._entityFinder.isOn()?"turn_off":"turn_on";await this.hass.callService(e,i,{},{entity_id:t})}async _handleModeChange(t){if(!this.hass||!this._entityFinder)return;const e=this._entityFinder.entityId;if("fan"===e.split(".")[0])return void await this.hass.callService("fan","set_preset_mode",{preset_mode:t},{entity_id:e});const i=this._entityFinder.findEntity(["select.mode","mode_select"]);i&&await this.hass.callService("select","select_option",{option:t},{entity_id:i.entity_id})}async _handleTargetHumidityChange(t){if(!this.hass||!this._entityFinder)return;const e=this._entityFinder.findEntity(["number.target_humidity","target_humidity"]);e?await this.hass.callService("number","set_value",{value:t},{entity_id:e.entity_id}):await this.hass.callService("humidifier","set_humidity",{humidity:t},{entity_id:this._entityFinder.entityId})}async _handleSwitchToggle(t,e){if(!this.hass)return;const i="on"===e?"turn_off":"turn_on";await this.hass.callService("switch",i,{},{entity_id:t})}async _handleNumberChange(t,e){this.hass&&await this.hass.callService("number","set_value",{value:e},{entity_id:t})}async _handleSelectChange(t,e){this.hass&&await this.hass.callService("select","select_option",{option:e},{entity_id:t})}async _handleButtonPress(t){this.hass&&await this.hass.callService("button","press",{},{entity_id:t})}static getConfigElement(){return document.createElement("xiaomi-humidifier-card-editor")}static getStubConfig(){return{type:"custom:xiaomi-humidifier-card",entity:""}}}Ct.styles=ut,t([lt({attribute:!1})],Ct.prototype,"hass",void 0),t([ht()],Ct.prototype,"_config",void 0),customElements.get("xiaomi-humidifier-card")||customElements.define("xiaomi-humidifier-card",Ct);export{Ct as XiaomiHumidifierCard};
