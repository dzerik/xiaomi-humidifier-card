function t(t,e,i,r){var n,s=arguments.length,o=s<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,i,r);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(o=(s<3?n(o):s>3?n(e,i,o):n(e,i))||o);return s>3&&o&&Object.defineProperty(e,i,o),o}"function"==typeof SuppressedError&&SuppressedError;const e=globalThis,i=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,r=Symbol(),n=new WeakMap;let s=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==r)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(i&&void 0===t){const i=void 0!==e&&1===e.length;i&&(t=n.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&n.set(e,t))}return t}toString(){return this.cssText}};const o=(t,...e)=>{const i=1===t.length?t[0]:e.reduce((e,i,r)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[r+1],t[0]);return new s(i,t,r)},a=i?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new s("string"==typeof t?t:t+"",void 0,r))(e)})(t):t,{is:c,defineProperty:l,getOwnPropertyDescriptor:d,getOwnPropertyNames:h,getOwnPropertySymbols:u,getPrototypeOf:p}=Object,m=globalThis,g=m.trustedTypes,f=g?g.emptyScript:"",_=m.reactiveElementPolyfillSupport,y=(t,e)=>t,v={toAttribute(t,e){switch(e){case Boolean:t=t?f:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},b=(t,e)=>!c(t,e),w={attribute:!0,type:String,converter:v,reflect:!1,useDefault:!1,hasChanged:b};Symbol.metadata??=Symbol("metadata"),m.litPropertyMetadata??=new WeakMap;let $=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=w){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),r=this.getPropertyDescriptor(t,i,e);void 0!==r&&l(this.prototype,t,r)}}static getPropertyDescriptor(t,e,i){const{get:r,set:n}=d(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get:r,set(e){const s=r?.call(this);n?.call(this,e),this.requestUpdate(t,s,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??w}static _$Ei(){if(this.hasOwnProperty(y("elementProperties")))return;const t=p(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(y("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(y("properties"))){const t=this.properties,e=[...h(t),...u(t)];for(const i of e)this.createProperty(i,t[i])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,i]of e)this.elementProperties.set(t,i)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const i=this._$Eu(t,e);void 0!==i&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(a(t))}else void 0!==t&&e.push(a(t));return e}static _$Eu(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((t,r)=>{if(i)t.adoptedStyleSheets=r.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const i of r){const r=document.createElement("style"),n=e.litNonce;void 0!==n&&r.setAttribute("nonce",n),r.textContent=i.cssText,t.appendChild(r)}})(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ET(t,e){const i=this.constructor.elementProperties.get(t),r=this.constructor._$Eu(t,i);if(void 0!==r&&!0===i.reflect){const n=(void 0!==i.converter?.toAttribute?i.converter:v).toAttribute(e,i.type);this._$Em=t,null==n?this.removeAttribute(r):this.setAttribute(r,n),this._$Em=null}}_$AK(t,e){const i=this.constructor,r=i._$Eh.get(t);if(void 0!==r&&this._$Em!==r){const t=i.getPropertyOptions(r),n="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:v;this._$Em=r;const s=n.fromAttribute(e,t.type);this[r]=s??this._$Ej?.get(r)??s,this._$Em=null}}requestUpdate(t,e,i){if(void 0!==t){const r=this.constructor,n=this[t];if(i??=r.getPropertyOptions(t),!((i.hasChanged??b)(n,e)||i.useDefault&&i.reflect&&n===this._$Ej?.get(t)&&!this.hasAttribute(r._$Eu(t,i))))return;this.C(t,e,i)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(t,e,{useDefault:i,reflect:r,wrapped:n},s){i&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,s??e??this[t]),!0!==n||void 0!==s)||(this._$AL.has(t)||(this.hasUpdated||i||(e=void 0),this._$AL.set(t,e)),!0===r&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,i]of t){const{wrapped:t}=i,r=this[e];!0!==t||this._$AL.has(e)||void 0===r||this.C(e,void 0,i,r)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(e)):this._$EM()}catch(e){throw t=!1,this._$EM(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(t){}firstUpdated(t){}};$.elementStyles=[],$.shadowRootOptions={mode:"open"},$[y("elementProperties")]=new Map,$[y("finalized")]=new Map,_?.({ReactiveElement:$}),(m.reactiveElementVersions??=[]).push("2.1.1");const x=globalThis,k=x.trustedTypes,A=k?k.createPolicy("lit-html",{createHTML:t=>t}):void 0,E="$lit$",S=`lit$${Math.random().toFixed(9).slice(2)}$`,C="?"+S,T=`<${C}>`,M=document,O=()=>M.createComment(""),P=t=>null===t||"object"!=typeof t&&"function"!=typeof t,L=Array.isArray,D="[ \t\n\f\r]",H=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,R=/-->/g,N=/>/g,z=RegExp(`>|${D}(?:([^\\s"'>=/]+)(${D}*=${D}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),I=/'/g,F=/"/g,U=/^(?:script|style|textarea|title)$/i,j=t=>(e,...i)=>({_$litType$:t,strings:e,values:i}),B=j(1),K=j(2),W=Symbol.for("lit-noChange"),q=Symbol.for("lit-nothing"),V=new WeakMap,Q=M.createTreeWalker(M,129);function X(t,e){if(!L(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==A?A.createHTML(e):e}const G=(t,e)=>{const i=t.length-1,r=[];let n,s=2===e?"<svg>":3===e?"<math>":"",o=H;for(let e=0;e<i;e++){const i=t[e];let a,c,l=-1,d=0;for(;d<i.length&&(o.lastIndex=d,c=o.exec(i),null!==c);)d=o.lastIndex,o===H?"!--"===c[1]?o=R:void 0!==c[1]?o=N:void 0!==c[2]?(U.test(c[2])&&(n=RegExp("</"+c[2],"g")),o=z):void 0!==c[3]&&(o=z):o===z?">"===c[0]?(o=n??H,l=-1):void 0===c[1]?l=-2:(l=o.lastIndex-c[2].length,a=c[1],o=void 0===c[3]?z:'"'===c[3]?F:I):o===F||o===I?o=z:o===R||o===N?o=H:(o=z,n=void 0);const h=o===z&&t[e+1].startsWith("/>")?" ":"";s+=o===H?i+T:l>=0?(r.push(a),i.slice(0,l)+E+i.slice(l)+S+h):i+S+(-2===l?e:h)}return[X(t,s+(t[i]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),r]};class J{constructor({strings:t,_$litType$:e},i){let r;this.parts=[];let n=0,s=0;const o=t.length-1,a=this.parts,[c,l]=G(t,e);if(this.el=J.createElement(c,i),Q.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(r=Q.nextNode())&&a.length<o;){if(1===r.nodeType){if(r.hasAttributes())for(const t of r.getAttributeNames())if(t.endsWith(E)){const e=l[s++],i=r.getAttribute(t).split(S),o=/([.?@])?(.*)/.exec(e);a.push({type:1,index:n,name:o[2],strings:i,ctor:"."===o[1]?it:"?"===o[1]?rt:"@"===o[1]?nt:et}),r.removeAttribute(t)}else t.startsWith(S)&&(a.push({type:6,index:n}),r.removeAttribute(t));if(U.test(r.tagName)){const t=r.textContent.split(S),e=t.length-1;if(e>0){r.textContent=k?k.emptyScript:"";for(let i=0;i<e;i++)r.append(t[i],O()),Q.nextNode(),a.push({type:2,index:++n});r.append(t[e],O())}}}else if(8===r.nodeType)if(r.data===C)a.push({type:2,index:n});else{let t=-1;for(;-1!==(t=r.data.indexOf(S,t+1));)a.push({type:7,index:n}),t+=S.length-1}n++}}static createElement(t,e){const i=M.createElement("template");return i.innerHTML=t,i}}function Y(t,e,i=t,r){if(e===W)return e;let n=void 0!==r?i._$Co?.[r]:i._$Cl;const s=P(e)?void 0:e._$litDirective$;return n?.constructor!==s&&(n?._$AO?.(!1),void 0===s?n=void 0:(n=new s(t),n._$AT(t,i,r)),void 0!==r?(i._$Co??=[])[r]=n:i._$Cl=n),void 0!==n&&(e=Y(t,n._$AS(t,e.values),n,r)),e}class Z{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,r=(t?.creationScope??M).importNode(e,!0);Q.currentNode=r;let n=Q.nextNode(),s=0,o=0,a=i[0];for(;void 0!==a;){if(s===a.index){let e;2===a.type?e=new tt(n,n.nextSibling,this,t):1===a.type?e=new a.ctor(n,a.name,a.strings,this,t):6===a.type&&(e=new st(n,this,t)),this._$AV.push(e),a=i[++o]}s!==a?.index&&(n=Q.nextNode(),s++)}return Q.currentNode=M,r}p(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class tt{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,r){this.type=2,this._$AH=q,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=Y(this,t,e),P(t)?t===q||null==t||""===t?(this._$AH!==q&&this._$AR(),this._$AH=q):t!==this._$AH&&t!==W&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>L(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==q&&P(this._$AH)?this._$AA.nextSibling.data=t:this.T(M.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:i}=t,r="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=J.createElement(X(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===r)this._$AH.p(e);else{const t=new Z(r,this),i=t.u(this.options);t.p(e),this.T(i),this._$AH=t}}_$AC(t){let e=V.get(t.strings);return void 0===e&&V.set(t.strings,e=new J(t)),e}k(t){L(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,r=0;for(const n of t)r===e.length?e.push(i=new tt(this.O(O()),this.O(O()),this,this.options)):i=e[r],i._$AI(n),r++;r<e.length&&(this._$AR(i&&i._$AB.nextSibling,r),e.length=r)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class et{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,r,n){this.type=1,this._$AH=q,this._$AN=void 0,this.element=t,this.name=e,this._$AM=r,this.options=n,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=q}_$AI(t,e=this,i,r){const n=this.strings;let s=!1;if(void 0===n)t=Y(this,t,e,0),s=!P(t)||t!==this._$AH&&t!==W,s&&(this._$AH=t);else{const r=t;let o,a;for(t=n[0],o=0;o<n.length-1;o++)a=Y(this,r[i+o],e,o),a===W&&(a=this._$AH[o]),s||=!P(a)||a!==this._$AH[o],a===q?t=q:t!==q&&(t+=(a??"")+n[o+1]),this._$AH[o]=a}s&&!r&&this.j(t)}j(t){t===q?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class it extends et{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===q?void 0:t}}class rt extends et{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==q)}}class nt extends et{constructor(t,e,i,r,n){super(t,e,i,r,n),this.type=5}_$AI(t,e=this){if((t=Y(this,t,e,0)??q)===W)return;const i=this._$AH,r=t===q&&i!==q||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,n=t!==q&&(i===q||r);r&&this.element.removeEventListener(this.name,this,i),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class st{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){Y(this,t)}}const ot=x.litHtmlPolyfillSupport;ot?.(J,tt),(x.litHtmlVersions??=[]).push("3.3.1");const at=globalThis;class ct extends ${constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{const r=i?.renderBefore??e;let n=r._$litPart$;if(void 0===n){const t=i?.renderBefore??null;r._$litPart$=n=new tt(e.insertBefore(O(),t),t,void 0,i??{})}return n._$AI(t),n})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return W}}ct._$litElement$=!0,ct.finalized=!0,at.litElementHydrateSupport?.({LitElement:ct});const lt=at.litElementPolyfillSupport;lt?.({LitElement:ct}),(at.litElementVersions??=[]).push("4.2.1");const dt={attribute:!0,type:String,converter:v,reflect:!1,hasChanged:b},ht=(t=dt,e,i)=>{const{kind:r,metadata:n}=i;let s=globalThis.litPropertyMetadata.get(n);if(void 0===s&&globalThis.litPropertyMetadata.set(n,s=new Map),"setter"===r&&((t=Object.create(t)).wrapped=!0),s.set(i.name,t),"accessor"===r){const{name:r}=i;return{set(i){const n=e.get.call(this);e.set.call(this,i),this.requestUpdate(r,n,t)},init(e){return void 0!==e&&this.C(r,void 0,t,e),e}}}if("setter"===r){const{name:r}=i;return function(i){const n=this[r];e.call(this,i),this.requestUpdate(r,n,t)}}throw Error("Unsupported decorator location: "+r)};function ut(t){return(e,i)=>"object"==typeof i?ht(t,e,i):((t,e,i)=>{const r=e.hasOwnProperty(i);return e.constructor.createProperty(i,t),r?Object.getOwnPropertyDescriptor(e,i):void 0})(t,e,i)}function pt(t){return ut({...t,state:!0,attribute:!1})}const mt=o`
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
    align-items: flex-start;
    margin-bottom: 8px;
  }

  .header-left {
    display: flex;
    flex-direction: column;
    gap: 2px;
    min-width: 0;
    flex: 1;
  }

  .header-right {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 4px;
    flex-shrink: 0;
  }

  .card-header .name {
    font-size: 1.2em;
    font-weight: 500;
    color: var(--text-color);
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
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

  /* Header switches (vertical column under power button) */
  .header-switches {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 2px;
  }

  .header-switch {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    cursor: pointer;
    transition: all 0.2s ease;
    -webkit-tap-highlight-color: transparent;
  }

  .header-switch ha-icon {
    --mdc-icon-size: 18px;
    color: var(--disabled-color);
    transition: color 0.2s ease;
  }

  .header-switch:hover {
    background: rgba(0, 0, 0, 0.05);
  }

  .header-switch.on ha-icon {
    color: var(--primary-color);
  }

  /* Header status indicators (under state text) */
  .header-status {
    display: flex;
    align-items: center;
    gap: 4px;
    font-size: 0.8em;
    margin-top: 4px;
  }

  .header-status ha-icon {
    --mdc-icon-size: 16px;
  }

  .header-status.warning {
    color: var(--warning-color, #ff9800);
  }

  .header-status.error {
    color: var(--error-color, #f44336);
  }

  .header-status.ok {
    color: var(--success-color, #4caf50);
  }

  /* Circular display — styles are inside humidity-circle component */

  /* Mode buttons — styles are inside mode-buttons component */

  /* Legacy switches row (kept for compatibility) */

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

  /* Legacy status indicators (moved to header) */

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
    ha-card {
      padding: 12px;
    }

    .switches-row {
      gap: 8px;
    }

    .switch-item {
      padding: 4px;
    }
  }
`;const gt={en:{common:{unavailable:"Unavailable",on:"On",off:"Off",target:"Target"},modes:{Low:"Low",Medium:"Medium",High:"High",Humidity:"Auto",Auto:"Auto",Silent:"Silent",Strong:"Strong",Favorite:"Favorite",Nature:"Nature",Sleep:"Sleep",Fan:"Fan",Level1:"Level 1",Level2:"Level 2",Level3:"Level 3",Level4:"Level 4"},switches:{led:"LED",led_light:"LED",buzzer:"Buzzer",child_lock:"Lock",dry:"Dry",overwet_protect:"Protect",learn_mode:"Learn",auto_detect:"Auto Detect",oscillate:"Oscillate",ptc:"PTC",display:"Display",anion:"Ionizer",gestures:"Gestures"},sensors:{temperature:"Temp",humidity:"Humidity",water_level:"Water",motor_speed:"Speed",use_time:"Time",aqi:"AQI",pm25:"PM2.5",tvoc:"TVOC",co2:"CO2",filter_life_remaining:"Filter",filter_hours_used:"Filter Hours",filter_left_time:"Filter Left",clean_area:"Clean Area",clean_time:"Clean Time",illuminance:"Light",illuminance_lux:"Lux",fan_level:"Fan Level",favorite_level:"Fav Level",average_aqi:"Avg AQI",purify_volume:"Purify Vol",motor2_speed:"Motor 2",filter_rfid_product_id:"Filter ID",filter_rfid_tag:"Filter Tag",power:"Power",voltage:"Voltage",current:"Current",water_shortage:"Water Shortage",depth:"Depth",actual_speed:"Act Speed",fault:"Fault"},numbers:{favorite_level:"Favorite Level",fan_level:"Fan Level",volume:"Volume",target_humidity:"Target Humidity",angle:"Oscillation Angle",delay_off_countdown:"Delay Off"},selects:{led_brightness:"LED Brightness",display_orientation:"Display",ptc_level:"PTC Level",mode:"Mode"},buttons:{reset_filter:"Reset Filter",filters_cleaned:"Filters Cleaned"},status:{water_tank_ok:"Tank OK",water_tank_missing:"No Tank",water_shortage:"Add Water",no_water:"No Water"},editor:{entity:"Entity (required)",name:"Name (optional)",show_name:"Show name",show_state:"Show state",show_target_humidity:"Show target humidity",show_mode:"Show mode buttons",show_sensors:"Show sensors",show_switches:"Show switches",show_numbers:"Show sliders",show_selects:"Show dropdowns",show_buttons:"Show action buttons",compact:"Compact mode"}},ru:{common:{unavailable:"Недоступно",on:"Вкл",off:"Выкл",target:"Цель"},modes:{Low:"Низкий",Medium:"Средний",High:"Высокий",Humidity:"Авто",Auto:"Авто",Silent:"Тихий",Strong:"Сильный",Favorite:"Любимый",Nature:"Природа",Sleep:"Сон",Fan:"Вентилятор",Level1:"Уровень 1",Level2:"Уровень 2",Level3:"Уровень 3",Level4:"Уровень 4"},switches:{led:"LED",led_light:"LED",buzzer:"Звук",child_lock:"Блок",dry:"Сушка",overwet_protect:"Защита",learn_mode:"Обуч",auto_detect:"Авто",oscillate:"Вращ",ptc:"PTC",display:"Дисплей",anion:"Ионы",gestures:"Жесты"},sensors:{temperature:"Темп",humidity:"Влажн",water_level:"Вода",motor_speed:"Скор",use_time:"Время",aqi:"AQI",pm25:"PM2.5",tvoc:"TVOC",co2:"CO2",filter_life_remaining:"Фильтр",filter_hours_used:"Часы фильтра",filter_left_time:"Ост. фильтр",clean_area:"Площадь",clean_time:"Время уборки",illuminance:"Свет",illuminance_lux:"Люкс",fan_level:"Уровень",favorite_level:"Любим",average_aqi:"Сред AQI",purify_volume:"Очищено",motor2_speed:"Мотор 2",filter_rfid_product_id:"ID фильтра",filter_rfid_tag:"Тег фильтра",power:"Мощность",voltage:"Напряж",current:"Ток",water_shortage:"Нет воды",depth:"Глуб",actual_speed:"Скорость",fault:"Ошибка"},numbers:{favorite_level:"Любимый уровень",fan_level:"Уровень вентилятора",volume:"Громкость",target_humidity:"Целевая влажность",angle:"Угол вращения",delay_off_countdown:"Таймер выкл"},selects:{led_brightness:"Яркость LED",display_orientation:"Ориентация",ptc_level:"Уровень PTC",mode:"Режим"},buttons:{reset_filter:"Сбросить фильтр",filters_cleaned:"Фильтр очищен"},status:{water_tank_ok:"Бак ОК",water_tank_missing:"Нет бака",water_shortage:"Долейте воду",no_water:"Нет воды"},editor:{entity:"Объект (обязательно)",name:"Название (опционально)",show_name:"Показывать название",show_state:"Показывать состояние",show_target_humidity:"Показывать целевую влажность",show_mode:"Показывать кнопки режимов",show_sensors:"Показывать сенсоры",show_switches:"Показывать переключатели",show_numbers:"Показывать слайдеры",show_selects:"Показывать выпадающие списки",show_buttons:"Показывать кнопки действий",compact:"Компактный режим"}}};function ft(t,e="en"){const i=gt[e]||gt.en,r=t.split(".");let n=i;for(const e of r){if(!n||"object"!=typeof n||!(e in n)){n=gt.en;for(const e of r){if(!n||"object"!=typeof n||!(e in n))return t;n=n[e]}break}n=n[e]}return"string"==typeof n?n:t}function _t(t){if(t?.language){const e=t.language.split("-")[0].toLowerCase();if(e in gt)return e}return"en"}const yt={buzzer:{icon:"mdi:volume-high",name:"Buzzer"},led:{icon:"mdi:led-on",name:"LED"},led_light:{icon:"mdi:led-on",name:"LED Light"},child_lock:{icon:"mdi:lock",name:"Child Lock"},dry:{icon:"mdi:water-off",name:"Dry Mode"},learn_mode:{icon:"mdi:school",name:"Learn Mode"},auto_detect:{icon:"mdi:auto-fix",name:"Auto Detect"},oscillate:{icon:"mdi:rotate-3d-variant",name:"Oscillation"},ptc:{icon:"mdi:radiator",name:"PTC Heater"},overwet_protect:{icon:"mdi:water-alert",name:"Overwet Protection"},display:{icon:"mdi:monitor",name:"Display"},anion:{icon:"mdi:atom",name:"Ionizer"},gestures:{icon:"mdi:gesture-tap",name:"Gesture Control"}},vt={aqi:{icon:"mdi:air-filter",name:"Air Quality Index",unit:"AQI"},pm25:{icon:"mdi:blur",name:"PM2.5",unit:"µg/m³"},pm10:{icon:"mdi:blur-linear",name:"PM10",unit:"µg/m³"},average_aqi:{icon:"mdi:air-filter",name:"Average AQI",unit:"AQI"},tvoc:{icon:"mdi:molecule",name:"TVOC",unit:"µg/m³"},co2:{icon:"mdi:molecule-co2",name:"CO2",unit:"ppm"},temperature:{icon:"mdi:thermometer",name:"Temperature",unit:"°C"},humidity:{icon:"mdi:water-percent",name:"Humidity",unit:"%"},temperature_outside:{icon:"mdi:thermometer",name:"Outside Temperature",unit:"°C"},filter_life_remaining:{icon:"mdi:air-filter",name:"Filter Life",unit:"%"},filter_hours_used:{icon:"mdi:clock-outline",name:"Filter Hours Used",unit:"h"},filter_left_time:{icon:"mdi:calendar-clock",name:"Filter Days Left",unit:"d"},filter_type:{icon:"mdi:air-filter",name:"Filter Type"},dust_filter_life_remaining:{icon:"mdi:air-filter",name:"Dust Filter Life",unit:"%"},dust_filter_life_remaining_days:{icon:"mdi:calendar-clock",name:"Dust Filter Days Left",unit:"d"},upper_filter_life_remaining:{icon:"mdi:air-filter",name:"Upper Filter Life",unit:"%"},upper_filter_life_remaining_days:{icon:"mdi:calendar-clock",name:"Upper Filter Days Left",unit:"d"},motor_speed:{icon:"mdi:fan",name:"Motor Speed",unit:"rpm"},motor2_speed:{icon:"mdi:fan",name:"Motor 2 Speed",unit:"rpm"},use_time:{icon:"mdi:clock-outline",name:"Use Time",unit:"s"},purify_volume:{icon:"mdi:air-purifier",name:"Purify Volume",unit:"m³"},water_level:{icon:"mdi:water",name:"Water Level",unit:"%"},target_humidity:{icon:"mdi:water-percent",name:"Target Humidity",unit:"%"},battery:{icon:"mdi:battery",name:"Battery",unit:"%"},speed:{icon:"mdi:speedometer",name:"Speed"},natural_speed:{icon:"mdi:weather-windy",name:"Natural Speed"},direct_speed:{icon:"mdi:fan",name:"Direct Speed"},angle:{icon:"mdi:rotate-3d-variant",name:"Oscillation Angle",unit:"°"},favorite_speed:{icon:"mdi:speedometer",name:"Favorite Speed",unit:"rpm"},control_speed:{icon:"mdi:speedometer",name:"Control Speed",unit:"rpm"},mode:{icon:"mdi:information-outline",name:"Mode"},illuminance:{icon:"mdi:brightness-6",name:"Illuminance",unit:"lx"},volume:{icon:"mdi:volume-high",name:"Volume",unit:"%"}},bt={favorite_level:{icon:"mdi:heart",name:"Favorite Level",min:0,max:16,step:1},fan_level:{icon:"mdi:fan",name:"Fan Level",min:1,max:3,step:1},volume:{icon:"mdi:volume-medium",name:"Volume",min:0,max:100,step:1,unit:"%"},target_humidity:{icon:"mdi:water-percent",name:"Target Humidity",min:30,max:80,step:10,unit:"%"},angle:{icon:"mdi:angle-acute",name:"Oscillation Angle",min:30,max:120,step:30,unit:"°"},delay_off_countdown:{icon:"mdi:timer-off",name:"Delay Off",min:0,max:480,step:1,unit:"min"}},wt={led_brightness:{icon:"mdi:brightness-6",name:"LED Brightness",options:["bright","dim","off"]},display_orientation:{icon:"mdi:rotate-3d-variant",name:"Display Orientation",options:["forward","left","right"]},ptc_level:{icon:"mdi:radiator",name:"PTC Level",options:["low","medium","high"]},mode:{icon:"mdi:tune",name:"Mode"}},$t={reset_filter:{icon:"mdi:air-filter",name:"Reset Filter"},filters_cleaned:{icon:"mdi:check-circle",name:"Mark Filters Cleaned"}};class xt{constructor(t,e){this._relatedEntities=new Map,this._hass=t,this._config=e,this._entityId=e.entity;const i=this._entityId.split(".")[1];this._baseId=i.replace(/_fan$/,"").replace(/_humidifier$/,"").replace(/_air_humidifier$/,""),this._findRelatedEntities()}get entity(){return this._hass?.states[this._entityId]}get entityId(){return this._entityId}get baseId(){return this._baseId}_findRelatedEntities(){this._relatedEntities.clear();for(const t of Object.keys(this._hass.states)){const e=t.split("."),i=e[1];if(i.startsWith(this._baseId+"_")||i===this._baseId){const r=e[0],n=i===this._baseId?"":i.replace(this._baseId+"_","");this._relatedEntities.set(`${r}.${n}`,t)}}}findEntityByKey(t,e){const i=`${t}_entity`;if(this._config[i]){const t=this._hass?.states[this._config[i]];if(t)return t}const r=`${e}.${t}`,n=this._relatedEntities.get(r);if(n)return this._hass?.states[n];for(const[i,r]of this._relatedEntities)if(i===`${e}.${t}`||i.endsWith(`.${t}`)){const t=this._hass?.states[r];if(t&&t.entity_id.split(".")[0]===e)return t}}findEntity(t){for(const e of t){const t=e.split(".");if(2===t.length){const e=this.findEntityByKey(t[1],t[0]);if(e)return e}else for(const t of["sensor","switch","number","select","button","binary_sensor"]){const i=this.findEntityByKey(e,t);if(i)return i}}}getCurrentHumidity(){const t=this.entity?.attributes;if(this._config.humidity_entity){const t=this._hass?.states[this._config.humidity_entity];if(t&&"unavailable"!==t.state&&"unknown"!==t.state)return Number(t.state)}if(void 0!==t?.humidity&&null!==t.humidity)return Number(t.humidity);if(void 0!==t?.current_humidity&&null!==t.current_humidity)return Number(t.current_humidity);if(void 0!==t?.relative_humidity&&null!==t.relative_humidity)return Number(t.relative_humidity);const e=this.findEntityByKey("humidity","sensor");return e&&"unavailable"!==e.state&&"unknown"!==e.state?Number(e.state):void 0}getTargetHumidity(){const t=this.entity?.attributes;if(void 0!==t?.target_humidity)return Number(t.target_humidity);const e=this.findEntityByKey("target_humidity","number");return e?Number(e.state):void 0}getTemperature(){const t=this.entity?.attributes;if(void 0!==t?.temperature)return Number(t.temperature);const e=this.findEntityByKey("temperature","sensor");return e&&"unavailable"!==e.state&&"unknown"!==e.state?Number(e.state):void 0}getCurrentMode(){const t=this.entity?.attributes;if(t?.preset_mode)return String(t.preset_mode);if(t?.mode)return String(t.mode);const e=this.findEntityByKey("mode","select");return e?e.state:void 0}getAvailableModes(){const t=this.entity?.attributes;if(t?.preset_modes&&Array.isArray(t.preset_modes))return t.preset_modes;const e=this.findEntityByKey("mode","select");return e?.attributes?.options&&Array.isArray(e.attributes.options)?e.attributes.options:["Low","Medium","High","Humidity"]}isOn(){const t=this.entity?.state;return"on"===t||"true"===t}isUnavailable(){const t=this.entity?.state;return"unavailable"===t||"unknown"===t||!t}getSwitches(){if(!1===this._config.show_switches)return[];const t=[],e=new Set;for(const[i,r]of Object.entries(yt)){const n=this.findEntityByKey(i,"switch");n&&!e.has(n.entity_id)&&"unavailable"!==n.state&&(e.add(n.entity_id),t.push({id:i,entity:n,name:r.name,icon:r.icon}))}return t}getSensors(){if(!1===this._config.show_sensors)return[];const t=[],e=new Set;for(const[i,r]of Object.entries(vt)){if("humidity"===i||"temperature"===i||"target_humidity"===i||"mode"===i)continue;const n=this.findEntityByKey(i,"sensor");n&&"unavailable"!==n.state&&"unknown"!==n.state&&!e.has(n.entity_id)&&(e.add(n.entity_id),t.push({id:i,entity:n,name:r.name,icon:r.icon,unit:r.unit}))}return t}getNumbers(){if(!1===this._config.show_numbers)return[];const t=[],e=new Set;for(const[i,r]of Object.entries(bt)){if("target_humidity"===i)continue;const n=this.findEntityByKey(i,"number");n&&"unavailable"!==n.state&&!e.has(n.entity_id)&&(e.add(n.entity_id),t.push({id:i,entity:n,name:r.name,icon:r.icon,min:Number(n.attributes.min??r.min),max:Number(n.attributes.max??r.max),step:Number(n.attributes.step??r.step),unit:r.unit}))}return t}getSelects(){if(!1===this._config.show_selects)return[];const t=[],e=new Set;for(const[i,r]of Object.entries(wt)){if("mode"===i)continue;const n=this.findEntityByKey(i,"select");if(n&&"unavailable"!==n.state&&!e.has(n.entity_id)){e.add(n.entity_id);const s=n.attributes.options||r.options||[];t.push({id:i,entity:n,name:r.name,icon:r.icon,options:s})}}return t}getButtons(){if(!1===this._config.show_buttons)return[];const t=[],e=new Set;for(const[i,r]of Object.entries($t)){const n=this.findEntityByKey(i,"button");n&&"unavailable"!==n.state&&!e.has(n.entity_id)&&(e.add(n.entity_id),t.push({id:i,entity:n,name:r.name,icon:r.icon}))}return t}getWaterStatus(){const t=this.entity?.attributes;if(t){if("no_water"in t&&!0===t.no_water)return{id:"no_water",isOn:!0,icon:"mdi:water-off"};if("water_tank_detached"in t&&!0===t.water_tank_detached)return{id:"water_tank_detached",isOn:!0,icon:"mdi:cup-off-outline"};if("water_shortage"in t&&!0===t.water_shortage)return{id:"water_shortage",isOn:!0,icon:"mdi:water-alert"};if("no_water"in t||"water_tank_detached"in t||"water_shortage"in t)return{id:"water_ok",isOn:!1,icon:"mdi:water-check"}}const e=this.findEntityByKey("no_water","binary_sensor");if(e&&"unavailable"!==e.state&&"on"===e.state)return{id:"no_water",isOn:!0,icon:"mdi:water-off"};const i=this.findEntityByKey("water_shortage","binary_sensor");if(i&&"unavailable"!==i.state&&"on"===i.state)return{id:"water_shortage",isOn:!0,icon:"mdi:water-alert"};const r=this.findEntityByKey("water_tank","binary_sensor");return r&&"unavailable"!==r.state&&"off"===r.state?{id:"water_tank_detached",isOn:!0,icon:"mdi:cup-off-outline"}:e||i||r?{id:"water_ok",isOn:!1,icon:"mdi:water-check"}:null}}function kt(t,e,i,r,n,s,o,a=[],c=!0,l,d=null){return B`
    <div class="card-header">
      <div class="header-left">
        ${i?B`<div class="name">${t}</div>`:q}
        ${r?B`
          <div class="state">
            ${ft(e?"common.on":"common.off",s)}
          </div>
        `:q}
        ${d?function(t,e){let i="ok",r="water_tank_ok";"no_water"===t.id?(i="error",r="no_water"):"water_tank_detached"===t.id?(i="warning",r="water_tank_missing"):"water_shortage"===t.id&&(i="error",r="water_shortage");return B`
    <div class="header-status ${i}">
      <ha-icon icon="${t.icon}"></ha-icon>
      <span>${ft(`status.${r}`,e)}</span>
    </div>
  `}(d,s):q}
      </div>
      <div class="header-right">
        ${n?B`
          <ha-icon-button
            class="power-button ${e?"on":""}"
            @click=${o}
          >
            <ha-icon icon="mdi:power"></ha-icon>
          </ha-icon-button>
        `:q}
        ${c&&a.length>0?B`
          <div class="header-switches">
            ${a.map(t=>B`
              <div
                class="header-switch ${"on"===t.entity.state?"on":""}"
                @click=${()=>l?.(t.entity.entity_id,t.entity.state)}
                title="${ft(`switches.${t.id}`,s)||t.name}"
              >
                <ha-icon icon="${t.icon}"></ha-icon>
              </div>
            `)}
          </div>
        `:q}
      </div>
    </div>
  `}class At extends ct{setConfig(t){this._config=t}_valueChanged(t){if(!this._config||!this.hass)return;const e=t.target,i=e.dataset.configKey;if(!i)return;let r=e.value;"checkbox"===e.type&&(r=e.checked);const n={...this._config,[i]:r},s=new CustomEvent("config-changed",{detail:{config:n},bubbles:!0,composed:!0});this.dispatchEvent(s)}_getEntities(t){return this.hass?Object.keys(this.hass.states).filter(e=>e.startsWith(`${t}.`)).sort():[]}render(){if(!this.hass||!this._config)return B``;const t=_t(this.hass),e=[...this._getEntities("fan"),...this._getEntities("humidifier")].sort();return B`
      <div class="form">
        <div class="row">
          <label>${ft("editor.entity",t)}</label>
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
          <label>${ft("editor.name",t)}</label>
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
          <label for="show_name">${ft("editor.show_name",t)}</label>
        </div>

        <div class="checkbox-row">
          <input
            type="checkbox"
            id="show_state"
            data-config-key="show_state"
            .checked=${!1!==this._config.show_state}
            @change=${this._valueChanged}
          />
          <label for="show_state">${ft("editor.show_state",t)}</label>
        </div>

        <div class="checkbox-row">
          <input
            type="checkbox"
            id="show_target_humidity"
            data-config-key="show_target_humidity"
            .checked=${!1!==this._config.show_target_humidity}
            @change=${this._valueChanged}
          />
          <label for="show_target_humidity">${ft("editor.show_target_humidity",t)}</label>
        </div>

        <div class="checkbox-row">
          <input
            type="checkbox"
            id="show_mode"
            data-config-key="show_mode"
            .checked=${!1!==this._config.show_mode}
            @change=${this._valueChanged}
          />
          <label for="show_mode">${ft("editor.show_mode",t)}</label>
        </div>

        <div class="checkbox-row">
          <input
            type="checkbox"
            id="compact"
            data-config-key="compact"
            .checked=${!0===this._config.compact}
            @change=${this._valueChanged}
          />
          <label for="compact">${ft("editor.compact",t)}</label>
        </div>
      </div>
    `}}var Et,St;At.styles=o`
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
  `,t([ut({attribute:!1})],At.prototype,"hass",void 0),t([pt()],At.prototype,"_config",void 0),Et="xiaomi-humidifier-card-editor",St=At,customElements.get(Et)||customElements.define(Et,St);const Ct=100,Tt=78,Mt=135,Ot=405,Pt=30;function Lt(t){return t*Math.PI/180}function Dt(t){const e=Lt(t);return{x:Ct+Tt*Math.cos(e),y:Ct+Tt*Math.sin(e)}}function Ht(t,e){const i=Dt(t),r=Dt(e),n=e-t>180?1:0;return`M ${i.x} ${i.y} A 78 78 0 ${n} 1 ${r.x} ${r.y}`}function Rt(t){const e=Math.max(Pt,Math.min(80,t));return Mt+(e-Pt)/50*270}class Nt extends ct{constructor(){super(...arguments),this.showTarget=!0,this.isOn=!0,this._isDragging=!1,this._tempTarget=null,this._repeatDelay=400,this._handleInteractionStart=t=>{if(!this.showTarget||!this.onTargetChange||!this.isOn)return;const e=t.target;if(e.closest(".adjust-btn")||e.closest(".adjust-buttons"))return;this._isDragging=!0,this._updateTargetFromEvent(t);const i=t=>{this._isDragging&&(t.preventDefault(),this._updateTargetFromEvent(t))},r=()=>{this._isDragging&&(this._isDragging=!1,null!==this._tempTarget&&this.onTargetChange&&(this.onTargetChange(this._tempTarget),this._tempTarget=null),window.removeEventListener("mousemove",i),window.removeEventListener("mouseup",r),window.removeEventListener("touchmove",i),window.removeEventListener("touchend",r))};window.addEventListener("mousemove",i,{passive:!1}),window.addEventListener("mouseup",r),window.addEventListener("touchmove",i,{passive:!1}),window.addEventListener("touchend",r)},this._handleIncrement=t=>{t.stopPropagation(),this._adjustTarget(5)},this._handleDecrement=t=>{t.stopPropagation(),this._adjustTarget(-5)},this._startIncrementRepeat=t=>{t.preventDefault(),t.stopPropagation(),this._stopRepeat(),this._repeatTimer=setInterval(()=>this._adjustTarget(5),this._repeatDelay)},this._startDecrementRepeat=t=>{t.preventDefault(),t.stopPropagation(),this._stopRepeat(),this._repeatTimer=setInterval(()=>this._adjustTarget(-5),this._repeatDelay)},this._stopRepeat=()=>{this._repeatTimer&&(clearInterval(this._repeatTimer),this._repeatTimer=void 0)}}disconnectedCallback(){super.disconnectedCallback(),this._stopRepeat()}render(){const t=_t(this.hass),e=this._tempTarget??this.targetHumidity,i=void 0!==e,r=void 0!==this.humidity,n=Ht(Mt,Ot),s=this._isDragging?this.targetHumidity??e:e,o=i?Rt(s):Mt,a=i&&o>Mt?Ht(Mt,o):"",c=i?Rt(e):Mt,l=i?Dt(c):null,d=r?Rt(this.humidity):0,h=r?Dt(d):null,u=i?function(t){const e=[[30,255,107,53],[40,255,194,51],[50,76,175,80],[60,41,182,246],[70,21,101,192],[80,21,101,192]],i=Math.max(30,Math.min(80,t));for(let t=0;t<e.length-1;t++)if(i>=e[t][0]&&i<=e[t+1][0]){const r=(i-e[t][0])/(e[t+1][0]-e[t][0]);return`rgb(${Math.round(e[t][1]+r*(e[t+1][1]-e[t][1]))}, ${Math.round(e[t][2]+r*(e[t+1][2]-e[t][2]))}, ${Math.round(e[t][3]+r*(e[t+1][3]-e[t][3]))})`}return function(t){return t<35?"#FF6B35":t<45?"#FFC233":t<55?"#4CAF50":t<65?"#29B6F6":"#1565C0"}(i)}(e):"var(--primary-color, #03a9f4)",p=this.isOn?this._isDragging?ft("common.target",t):this._getModeName(t)||ft("common.on",t):ft("common.off",t);return B`
      <div
        class="circle-container ${this.isOn?"":"off"}"
        @mousedown=${this._handleInteractionStart}
        @touchstart=${this._handleInteractionStart}
      >
        <svg viewBox="0 0 ${200} ${200}">
          <!-- Background arc -->
          ${K`<path class="arc-bg" d="${n}" />`}

          <!-- Tick marks -->
          ${[30,40,50,60,70,80].map(t=>{const e=Rt(t),i=this._polarAtRadius(e,62),r=this._polarAtRadius(e,68),n=this._polarAtRadius(e,54);return K`
              <line class="tick" x1="${i.x}" y1="${i.y}" x2="${r.x}" y2="${r.y}" />
              <text class="tick-label" x="${n.x}" y="${n.y}">${t}</text>
            `})}

          <!-- Progress arc -->
          ${a?K`
            <path
              class="arc-progress"
              d="${a}"
              stroke="${u}"
              style="--arc-glow: ${u}40"
            />
          `:q}

          <!-- Current humidity marker -->
          ${r&&this.isOn&&h?K`
            <circle
              class="current-marker-glow"
              cx="${h.x}"
              cy="${h.y}"
              r="${7}"
            />
            <circle
              class="current-marker"
              cx="${h.x}"
              cy="${h.y}"
              r="${5}"
            />
          `:q}

          <!-- Thumb -->
          ${i&&this.showTarget&&l?K`
            <circle
              class="thumb ${this._isDragging?"dragging":""}"
              cx="${l.x}"
              cy="${l.y}"
              r="${10}"
            />
          `:q}
        </svg>

        <div class="center-content">
          <div class="status-text">${p}</div>
          <div class="target-value ${this._isDragging?"dragging":""}">
            ${i?e:"--"}
            <span class="target-unit">%</span>
          </div>
          ${r?B`
            <div class="current-value">
              <ha-icon icon="mdi:water"></ha-icon>
              ${this.humidity}%
            </div>
          `:q}
          ${i&&this.showTarget?B`
            <div class="adjust-buttons">
              <button
                class="adjust-btn"
                @click=${this._handleDecrement}
                @mousedown=${this._startDecrementRepeat}
                @mouseup=${this._stopRepeat}
                @mouseleave=${this._stopRepeat}
                @touchstart=${this._startDecrementRepeat}
                @touchend=${this._stopRepeat}
              >−</button>
              <button
                class="adjust-btn"
                @click=${this._handleIncrement}
                @mousedown=${this._startIncrementRepeat}
                @mouseup=${this._stopRepeat}
                @mouseleave=${this._stopRepeat}
                @touchstart=${this._startIncrementRepeat}
                @touchend=${this._stopRepeat}
              >+</button>
            </div>
          `:q}
        </div>
      </div>
    `}_polarAtRadius(t,e){const i=Lt(t);return{x:Ct+e*Math.cos(i),y:Ct+e*Math.sin(i)}}_getModeName(t){return""}_updateTargetFromEvent(t){const e=this.renderRoot.querySelector("svg");if(!e)return;const i=e.getBoundingClientRect(),r=i.left+i.width/2,n=i.top+i.height/2;let s,o;if("touches"in t&&t.touches.length>0)s=t.touches[0].clientX,o=t.touches[0].clientY;else{if(!("clientX"in t))return;s=t.clientX,o=t.clientY}const a=s-r,c=o-n;let l=180*Math.atan2(c,a)/Math.PI;l<0&&(l+=360);const d=function(t){let e=t;e<Mt&&(e+=360),e>Ot&&(e=Math.abs(e-Mt)<Math.abs(e-Ot)?Mt:Ot);const i=Pt+(e-Mt)/270*50;return 5*Math.round(i/5)}(l),h=Math.max(Pt,Math.min(80,d));this._tempTarget=h}_adjustTarget(t){if(!this.onTargetChange||!this.isOn)return;const e=this.targetHumidity??50,i=Math.max(Pt,Math.min(80,e+t));i!==e&&this.onTargetChange(i)}}Nt.styles=o`
    :host {
      display: block;
    }

    .circle-container {
      position: relative;
      width: 220px;
      height: 220px;
      margin: 8px auto 16px;
      touch-action: none;
      user-select: none;
      -webkit-user-select: none;
    }

    .circle-container svg {
      width: 100%;
      height: 100%;
      overflow: visible;
    }

    /* Background arc */
    .arc-bg {
      fill: none;
      stroke: var(--disabled-text-color, rgba(255, 255, 255, 0.1));
      stroke-width: ${6};
      stroke-linecap: round;
      opacity: 0.3;
    }

    /* Progress arc */
    .arc-progress {
      fill: none;
      stroke-width: ${10};
      stroke-linecap: round;
      transition: d 0.5s ease, stroke 0.15s ease;
      filter: drop-shadow(0 0 4px var(--arc-glow, rgba(3, 169, 244, 0.3)));
    }

    /* Tick marks */
    .tick {
      stroke: var(--secondary-text-color, rgba(255, 255, 255, 0.3));
      stroke-width: 1;
      opacity: 0.3;
    }

    .tick-label {
      font-size: 9px;
      fill: var(--secondary-text-color, rgba(255, 255, 255, 0.4));
      text-anchor: middle;
      dominant-baseline: central;
    }

    /* Current humidity marker */
    .current-marker {
      fill: var(--primary-text-color, #fff);
      stroke: var(--ha-card-background, var(--card-background-color, #111));
      stroke-width: 2;
      transition: cx 0.8s ease, cy 0.8s ease;
    }

    @keyframes pulse-marker {
      0%, 100% { opacity: 0.7; r: ${5}; }
      50% { opacity: 1; r: ${6.5}; }
    }

    .current-marker-glow {
      fill: var(--primary-text-color, #fff);
      opacity: 0.3;
      animation: pulse-marker 2s ease-in-out infinite;
    }

    /* Thumb (target indicator) */
    .thumb {
      fill: #fff;
      stroke: var(--ha-card-background, var(--card-background-color, #111));
      stroke-width: 3;
      cursor: grab;
      filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3));
      transition: r 0.15s ease, filter 0.15s ease;
    }

    .thumb:hover {
      r: ${12};
    }

    .thumb.dragging {
      r: ${13};
      cursor: grabbing;
      filter: drop-shadow(0 3px 8px rgba(0, 0, 0, 0.4))
              drop-shadow(0 0 12px var(--arc-glow, rgba(3, 169, 244, 0.4)));
    }

    /* Target ring behind thumb */
    .thumb-ring {
      fill: none;
      stroke-width: 2;
      opacity: 0;
      transition: opacity 0.15s ease;
    }

    .thumb:hover ~ .thumb-ring,
    .thumb.dragging ~ .thumb-ring {
      opacity: 0.3;
    }

    /* Center content */
    .center-content {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      text-align: center;
      pointer-events: none;
    }

    .status-text {
      font-size: 0.8em;
      font-weight: 400;
      color: var(--secondary-text-color, #aaa);
      text-transform: uppercase;
      letter-spacing: 0.5px;
      margin-bottom: 2px;
      transition: color 0.3s ease, opacity 0.3s ease;
    }

    .target-value {
      font-size: 3.2em;
      font-weight: 300;
      line-height: 1;
      color: var(--primary-text-color, #fff);
      transition: color 0.3s ease;
    }

    .target-unit {
      font-size: 0.35em;
      font-weight: 400;
      color: var(--secondary-text-color, #aaa);
      vertical-align: super;
    }

    .current-value {
      font-size: 0.85em;
      color: var(--secondary-text-color, #aaa);
      margin-top: 4px;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 4px;
      transition: color 0.3s ease;
    }

    .current-value ha-icon {
      --mdc-icon-size: 16px;
    }

    /* +/- buttons */
    .adjust-buttons {
      display: flex;
      justify-content: center;
      gap: 16px;
      margin-top: 8px;
      pointer-events: auto;
    }

    .adjust-btn {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      border: 1.5px solid var(--divider-color, rgba(255, 255, 255, 0.2));
      background: transparent;
      color: var(--primary-text-color, #fff);
      font-size: 1.4em;
      font-weight: 300;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.15s ease;
      -webkit-tap-highlight-color: transparent;
      user-select: none;
      -webkit-user-select: none;
    }

    .adjust-btn:hover {
      border-color: var(--primary-color, #03a9f4);
      background: rgba(3, 169, 244, 0.1);
    }

    .adjust-btn:active {
      transform: scale(0.9);
      background: rgba(3, 169, 244, 0.2);
    }

    /* Off state */
    .circle-container.off .arc-progress,
    .circle-container.off .current-marker,
    .circle-container.off .current-marker-glow,
    .circle-container.off .thumb {
      opacity: 0.15;
      transition: opacity 0.5s ease;
    }

    .circle-container.off .target-value {
      color: var(--disabled-text-color, #666);
    }

    .circle-container.off .status-text {
      color: var(--disabled-text-color, #666);
    }

    /* Dragging state — highlight target value */
    .target-value.dragging {
      color: var(--primary-color, #03a9f4);
      transition: color 0.1s ease;
    }

    /* Responsive */
    @media (max-width: 400px) {
      .circle-container {
        width: 180px;
        height: 180px;
      }

      .target-value {
        font-size: 2.6em;
      }

      .adjust-btn {
        width: 34px;
        height: 34px;
        font-size: 1.2em;
      }
    }

    @media (min-width: 600px) {
      .circle-container {
        width: 260px;
        height: 260px;
      }

      .target-value {
        font-size: 3.8em;
      }
    }
  `,t([ut({attribute:!1})],Nt.prototype,"hass",void 0),t([ut({type:Number})],Nt.prototype,"humidity",void 0),t([ut({type:Number})],Nt.prototype,"targetHumidity",void 0),t([ut({type:Boolean})],Nt.prototype,"showTarget",void 0),t([ut({type:Boolean})],Nt.prototype,"isOn",void 0),t([ut({attribute:!1})],Nt.prototype,"onTargetChange",void 0),t([pt()],Nt.prototype,"_isDragging",void 0),t([pt()],Nt.prototype,"_tempTarget",void 0),customElements.get("humidity-circle")||customElements.define("humidity-circle",Nt);const zt={Low:"mdi:fan-speed-1",Mid:"mdi:fan-speed-2",Medium:"mdi:fan-speed-2",High:"mdi:fan-speed-3",Humidity:"mdi:water-percent",Auto:"mdi:fan-auto",Silent:"mdi:volume-off",Strong:"mdi:weather-windy",Favorite:"mdi:heart",Nature:"mdi:leaf",Sleep:"mdi:sleep",Fan:"mdi:fan",Level1:"mdi:numeric-1-circle",Level2:"mdi:numeric-2-circle",Level3:"mdi:numeric-3-circle",Level4:"mdi:numeric-4-circle",WetAndProtect:"mdi:shield-water"};class It extends ct{constructor(){super(...arguments),this.modes=[],this.lang="en"}render(){return B`
      <div class="mode-chips">
        ${this.modes.map(t=>B`
          <div
            class="mode-chip ${this.currentMode===t?"active":""}"
            @click=${()=>this._handleClick(t)}
          >
            <ha-icon icon="${this._getModeIcon(t)}"></ha-icon>
            <span>${ft(`modes.${t}`,this.lang)||t}</span>
          </div>
        `)}
      </div>
    `}_getModeIcon(t){return zt[t]||"mdi:fan"}_handleClick(t){this.onModeChange&&this.onModeChange(t)}}It.styles=o`
    :host {
      display: block;
    }

    .mode-chips {
      display: flex;
      justify-content: center;
      gap: 8px;
      flex-wrap: wrap;
      margin: 8px 0 16px;
    }

    .mode-chip {
      display: flex;
      align-items: center;
      gap: 6px;
      padding: 6px 14px;
      border-radius: 18px;
      background: rgba(255, 255, 255, 0.06);
      border: 1px solid rgba(255, 255, 255, 0.1);
      cursor: pointer;
      transition: all 0.2s ease;
      font-size: 0.82em;
      color: var(--primary-text-color, #fff);
      -webkit-tap-highlight-color: transparent;
      user-select: none;
      -webkit-user-select: none;
    }

    .mode-chip ha-icon {
      --mdc-icon-size: 18px;
      color: var(--secondary-text-color, #aaa);
      transition: color 0.2s ease;
    }

    .mode-chip:hover {
      background: rgba(255, 255, 255, 0.12);
      border-color: rgba(255, 255, 255, 0.2);
    }

    .mode-chip.active {
      background: var(--primary-color, #03a9f4);
      border-color: var(--primary-color, #03a9f4);
      color: #fff;
    }

    .mode-chip.active ha-icon {
      color: #fff;
    }

    .mode-chip:active {
      transform: scale(0.95);
    }

    @media (max-width: 400px) {
      .mode-chips {
        gap: 6px;
      }

      .mode-chip {
        padding: 5px 10px;
        font-size: 0.75em;
      }
    }
  `,t([ut({type:Array})],It.prototype,"modes",void 0),t([ut({type:String})],It.prototype,"currentMode",void 0),t([ut({type:String})],It.prototype,"lang",void 0),t([ut({attribute:!1})],It.prototype,"onModeChange",void 0),customElements.get("mode-buttons")||customElements.define("mode-buttons",It);console.info("%c XIAOMI-HUMIDIFIER-CARD %c 2.1.0 ","color: white; background: #03a9f4; font-weight: bold;","color: #03a9f4; background: white; font-weight: bold;"),window.customCards=window.customCards||[],window.customCards.find(t=>"xiaomi-humidifier-card"===t.type)||window.customCards.push({type:"xiaomi-humidifier-card",name:"Xiaomi Humidifier Card",description:"Thermostat-style card for Xiaomi humidifiers",preview:!0});class Ft extends ct{setConfig(t){if(!t.entity)throw new Error("Entity is required");this._config={show_name:!0,show_state:!0,show_current_humidity:!0,show_target_humidity:!0,show_mode:!0,show_power:!0,show_sensors:!0,show_switches:!0,show_numbers:!0,show_selects:!0,show_buttons:!0,compact:!1,...t}}getCardSize(){return this._config?.compact?3:5}willUpdate(t){super.willUpdate(t),t.has("hass")&&this.hass&&this._config&&(this._entityFinder=new xt(this.hass,this._config))}render(){if(!this._config||!this.hass||!this._entityFinder)return B``;const t=_t(this.hass),e=this._entityFinder;if(e.isUnavailable())return B`
        <ha-card>
          <div class="unavailable-message">
            <ha-icon icon="mdi:alert-circle-outline"></ha-icon>
            <div>${ft("common.unavailable",t)}</div>
          </div>
        </ha-card>
      `;const i=this._config.name||e.entity?.attributes?.friendly_name||"Humidifier",r=e.getCurrentHumidity(),n=e.getTargetHumidity(),s=e.getTemperature(),o=e.isOn();return B`
      <ha-card>
        ${kt(i,o,!1!==this._config.show_name,!1!==this._config.show_state,!1!==this._config.show_power,t,()=>this._handlePowerToggle(),e.getSwitches(),!1!==this._config.show_switches,(t,e)=>this._handleSwitchToggle(t,e),e.getWaterStatus())}

        <humidity-circle
          .hass=${this.hass}
          .humidity=${r}
          .targetHumidity=${n}
          .showTarget=${!1!==this._config.show_target_humidity}
          .isOn=${o}
          .onTargetChange=${t=>this._handleTargetHumidityChange(t)}
        ></humidity-circle>

        ${this._config.show_mode?B`
          <mode-buttons
            .modes=${e.getAvailableModes()}
            .currentMode=${e.getCurrentMode()}
            .lang=${t}
            .onModeChange=${t=>this._handleModeChange(t)}
          ></mode-buttons>
        `:q}

        ${function(t,e,i){return 0===t.length?q:B`
    <div class="numbers-row">
      ${t.map(t=>B`
        <div class="number-item">
          <div class="number-header">
            <span class="number-name">
              <ha-icon icon="${t.icon}"></ha-icon>
              ${ft(`numbers.${t.id}`,e)||t.name}
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
        ${function(t,e,i){return 0===t.length?q:B`
    <div class="selects-row">
      ${t.map(t=>B`
        <div class="select-item">
          <div class="select-header">
            <ha-icon icon="${t.icon}"></ha-icon>
            <span class="select-name">${ft(`selects.${t.id}`,e)||t.name}</span>
          </div>
          <select
            .value="${t.entity.state}"
            @change=${e=>i(t.entity.entity_id,e.target.value)}
          >
            ${t.options.map(i=>B`
              <option value="${i}" ?selected=${i===t.entity.state}>
                ${ft(`select_options.${i}`,e)||i}
              </option>
            `)}
          </select>
        </div>
      `)}
    </div>
  `}(e.getSelects(),t,(t,e)=>this._handleSelectChange(t,e))}
        ${function(t,e,i){return 0===t.length?q:B`
    <div class="buttons-row">
      ${t.map(t=>B`
        <div
          class="button-item"
          @click=${()=>i(t.entity.entity_id)}
        >
          <ha-icon icon="${t.icon}"></ha-icon>
          <span class="button-name">${ft(`buttons.${t.id}`,e)||t.name}</span>
        </div>
      `)}
    </div>
  `}(e.getButtons(),t,t=>this._handleButtonPress(t))}
        ${function(t,e){return 0===t.length&&void 0===e?q:B`
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
  `}(e.getSensors(),s)}
      </ha-card>
    `}async _handlePowerToggle(){if(!this.hass||!this._entityFinder)return;const t=this._entityFinder.entityId,e=t.split(".")[0],i=this._entityFinder.isOn()?"turn_off":"turn_on";await this.hass.callService(e,i,{},{entity_id:t})}async _handleModeChange(t){if(!this.hass||!this._entityFinder)return;const e=this._entityFinder.entityId;if("fan"===e.split(".")[0])return void await this.hass.callService("fan","set_preset_mode",{preset_mode:t},{entity_id:e});const i=this._entityFinder.findEntity(["select.mode","mode_select"]);i&&await this.hass.callService("select","select_option",{option:t},{entity_id:i.entity_id})}async _handleTargetHumidityChange(t){if(!this.hass||!this._entityFinder)return;const e=this._entityFinder.findEntity(["number.target_humidity","target_humidity"]);e?await this.hass.callService("number","set_value",{value:t},{entity_id:e.entity_id}):await this.hass.callService("humidifier","set_humidity",{humidity:t},{entity_id:this._entityFinder.entityId})}async _handleSwitchToggle(t,e){if(!this.hass)return;const i="on"===e?"turn_off":"turn_on";await this.hass.callService("switch",i,{},{entity_id:t})}async _handleNumberChange(t,e){this.hass&&await this.hass.callService("number","set_value",{value:e},{entity_id:t})}async _handleSelectChange(t,e){this.hass&&await this.hass.callService("select","select_option",{option:e},{entity_id:t})}async _handleButtonPress(t){this.hass&&await this.hass.callService("button","press",{},{entity_id:t})}static getConfigElement(){return document.createElement("xiaomi-humidifier-card-editor")}static getStubConfig(){return{type:"custom:xiaomi-humidifier-card",entity:""}}}Ft.styles=mt,t([ut({attribute:!1})],Ft.prototype,"hass",void 0),t([pt()],Ft.prototype,"_config",void 0),customElements.get("xiaomi-humidifier-card")||customElements.define("xiaomi-humidifier-card",Ft);export{Ft as XiaomiHumidifierCard};
