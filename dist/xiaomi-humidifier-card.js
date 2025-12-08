function t(t,e,i,s){var r,o=arguments.length,n=o<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,s);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(n=(o<3?r(n):o>3?r(e,i,n):r(e,i))||n);return o>3&&n&&Object.defineProperty(e,i,n),n}"function"==typeof SuppressedError&&SuppressedError;const e=globalThis,i=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s=Symbol(),r=new WeakMap;let o=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==s)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(i&&void 0===t){const i=void 0!==e&&1===e.length;i&&(t=r.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&r.set(e,t))}return t}toString(){return this.cssText}};const n=i?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new o("string"==typeof t?t:t+"",void 0,s))(e)})(t):t,{is:a,defineProperty:c,getOwnPropertyDescriptor:d,getOwnPropertyNames:h,getOwnPropertySymbols:l,getPrototypeOf:u}=Object,p=globalThis,m=p.trustedTypes,_=m?m.emptyScript:"",f=p.reactiveElementPolyfillSupport,g=(t,e)=>t,y={toAttribute(t,e){switch(e){case Boolean:t=t?_:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},$=(t,e)=>!a(t,e),v={attribute:!0,type:String,converter:y,reflect:!1,useDefault:!1,hasChanged:$};Symbol.metadata??=Symbol("metadata"),p.litPropertyMetadata??=new WeakMap;let w=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=v){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(t,i,e);void 0!==s&&c(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){const{get:s,set:r}=d(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get:s,set(e){const o=s?.call(this);r?.call(this,e),this.requestUpdate(t,o,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??v}static _$Ei(){if(this.hasOwnProperty(g("elementProperties")))return;const t=u(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(g("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(g("properties"))){const t=this.properties,e=[...h(t),...l(t)];for(const i of e)this.createProperty(i,t[i])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,i]of e)this.elementProperties.set(t,i)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const i=this._$Eu(t,e);void 0!==i&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(n(t))}else void 0!==t&&e.push(n(t));return e}static _$Eu(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((t,s)=>{if(i)t.adoptedStyleSheets=s.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const i of s){const s=document.createElement("style"),r=e.litNonce;void 0!==r&&s.setAttribute("nonce",r),s.textContent=i.cssText,t.appendChild(s)}})(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ET(t,e){const i=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,i);if(void 0!==s&&!0===i.reflect){const r=(void 0!==i.converter?.toAttribute?i.converter:y).toAttribute(e,i.type);this._$Em=t,null==r?this.removeAttribute(s):this.setAttribute(s,r),this._$Em=null}}_$AK(t,e){const i=this.constructor,s=i._$Eh.get(t);if(void 0!==s&&this._$Em!==s){const t=i.getPropertyOptions(s),r="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:y;this._$Em=s;const o=r.fromAttribute(e,t.type);this[s]=o??this._$Ej?.get(s)??o,this._$Em=null}}requestUpdate(t,e,i){if(void 0!==t){const s=this.constructor,r=this[t];if(i??=s.getPropertyOptions(t),!((i.hasChanged??$)(r,e)||i.useDefault&&i.reflect&&r===this._$Ej?.get(t)&&!this.hasAttribute(s._$Eu(t,i))))return;this.C(t,e,i)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(t,e,{useDefault:i,reflect:s,wrapped:r},o){i&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,o??e??this[t]),!0!==r||void 0!==o)||(this._$AL.has(t)||(this.hasUpdated||i||(e=void 0),this._$AL.set(t,e)),!0===s&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,i]of t){const{wrapped:t}=i,s=this[e];!0!==t||this._$AL.has(e)||void 0===s||this.C(e,void 0,i,s)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(e)):this._$EM()}catch(e){throw t=!1,this._$EM(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(t){}firstUpdated(t){}};w.elementStyles=[],w.shadowRootOptions={mode:"open"},w[g("elementProperties")]=new Map,w[g("finalized")]=new Map,f?.({ReactiveElement:w}),(p.reactiveElementVersions??=[]).push("2.1.1");const b=globalThis,x=b.trustedTypes,A=x?x.createPolicy("lit-html",{createHTML:t=>t}):void 0,S="$lit$",E=`lit$${Math.random().toFixed(9).slice(2)}$`,k="?"+E,C=`<${k}>`,O=document,H=()=>O.createComment(""),P=t=>null===t||"object"!=typeof t&&"function"!=typeof t,M=Array.isArray,T="[ \t\n\f\r]",U=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,z=/-->/g,N=/>/g,R=RegExp(`>|${T}(?:([^\\s"'>=/]+)(${T}*=${T}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),I=/'/g,j=/"/g,L=/^(?:script|style|textarea|title)$/i,D=(t=>(e,...i)=>({_$litType$:t,strings:e,values:i}))(1),B=Symbol.for("lit-noChange"),W=Symbol.for("lit-nothing"),q=new WeakMap,V=O.createTreeWalker(O,129);function K(t,e){if(!M(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==A?A.createHTML(e):e}const X=(t,e)=>{const i=t.length-1,s=[];let r,o=2===e?"<svg>":3===e?"<math>":"",n=U;for(let e=0;e<i;e++){const i=t[e];let a,c,d=-1,h=0;for(;h<i.length&&(n.lastIndex=h,c=n.exec(i),null!==c);)h=n.lastIndex,n===U?"!--"===c[1]?n=z:void 0!==c[1]?n=N:void 0!==c[2]?(L.test(c[2])&&(r=RegExp("</"+c[2],"g")),n=R):void 0!==c[3]&&(n=R):n===R?">"===c[0]?(n=r??U,d=-1):void 0===c[1]?d=-2:(d=n.lastIndex-c[2].length,a=c[1],n=void 0===c[3]?R:'"'===c[3]?j:I):n===j||n===I?n=R:n===z||n===N?n=U:(n=R,r=void 0);const l=n===R&&t[e+1].startsWith("/>")?" ":"";o+=n===U?i+C:d>=0?(s.push(a),i.slice(0,d)+S+i.slice(d)+E+l):i+E+(-2===d?e:l)}return[K(t,o+(t[i]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),s]};class F{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let r=0,o=0;const n=t.length-1,a=this.parts,[c,d]=X(t,e);if(this.el=F.createElement(c,i),V.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(s=V.nextNode())&&a.length<n;){if(1===s.nodeType){if(s.hasAttributes())for(const t of s.getAttributeNames())if(t.endsWith(S)){const e=d[o++],i=s.getAttribute(t).split(E),n=/([.?@])?(.*)/.exec(e);a.push({type:1,index:r,name:n[2],strings:i,ctor:"."===n[1]?Y:"?"===n[1]?tt:"@"===n[1]?et:Q}),s.removeAttribute(t)}else t.startsWith(E)&&(a.push({type:6,index:r}),s.removeAttribute(t));if(L.test(s.tagName)){const t=s.textContent.split(E),e=t.length-1;if(e>0){s.textContent=x?x.emptyScript:"";for(let i=0;i<e;i++)s.append(t[i],H()),V.nextNode(),a.push({type:2,index:++r});s.append(t[e],H())}}}else if(8===s.nodeType)if(s.data===k)a.push({type:2,index:r});else{let t=-1;for(;-1!==(t=s.data.indexOf(E,t+1));)a.push({type:7,index:r}),t+=E.length-1}r++}}static createElement(t,e){const i=O.createElement("template");return i.innerHTML=t,i}}function J(t,e,i=t,s){if(e===B)return e;let r=void 0!==s?i._$Co?.[s]:i._$Cl;const o=P(e)?void 0:e._$litDirective$;return r?.constructor!==o&&(r?._$AO?.(!1),void 0===o?r=void 0:(r=new o(t),r._$AT(t,i,s)),void 0!==s?(i._$Co??=[])[s]=r:i._$Cl=r),void 0!==r&&(e=J(t,r._$AS(t,e.values),r,s)),e}class Z{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,s=(t?.creationScope??O).importNode(e,!0);V.currentNode=s;let r=V.nextNode(),o=0,n=0,a=i[0];for(;void 0!==a;){if(o===a.index){let e;2===a.type?e=new G(r,r.nextSibling,this,t):1===a.type?e=new a.ctor(r,a.name,a.strings,this,t):6===a.type&&(e=new it(r,this,t)),this._$AV.push(e),a=i[++n]}o!==a?.index&&(r=V.nextNode(),o++)}return V.currentNode=O,s}p(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class G{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,s){this.type=2,this._$AH=W,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=J(this,t,e),P(t)?t===W||null==t||""===t?(this._$AH!==W&&this._$AR(),this._$AH=W):t!==this._$AH&&t!==B&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>M(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==W&&P(this._$AH)?this._$AA.nextSibling.data=t:this.T(O.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:i}=t,s="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=F.createElement(K(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===s)this._$AH.p(e);else{const t=new Z(s,this),i=t.u(this.options);t.p(e),this.T(i),this._$AH=t}}_$AC(t){let e=q.get(t.strings);return void 0===e&&q.set(t.strings,e=new F(t)),e}k(t){M(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const r of t)s===e.length?e.push(i=new G(this.O(H()),this.O(H()),this,this.options)):i=e[s],i._$AI(r),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class Q{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,s,r){this.type=1,this._$AH=W,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=r,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=W}_$AI(t,e=this,i,s){const r=this.strings;let o=!1;if(void 0===r)t=J(this,t,e,0),o=!P(t)||t!==this._$AH&&t!==B,o&&(this._$AH=t);else{const s=t;let n,a;for(t=r[0],n=0;n<r.length-1;n++)a=J(this,s[i+n],e,n),a===B&&(a=this._$AH[n]),o||=!P(a)||a!==this._$AH[n],a===W?t=W:t!==W&&(t+=(a??"")+r[n+1]),this._$AH[n]=a}o&&!s&&this.j(t)}j(t){t===W?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Y extends Q{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===W?void 0:t}}class tt extends Q{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==W)}}class et extends Q{constructor(t,e,i,s,r){super(t,e,i,s,r),this.type=5}_$AI(t,e=this){if((t=J(this,t,e,0)??W)===B)return;const i=this._$AH,s=t===W&&i!==W||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,r=t!==W&&(i===W||s);s&&this.element.removeEventListener(this.name,this,i),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class it{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){J(this,t)}}const st=b.litHtmlPolyfillSupport;st?.(F,G),(b.litHtmlVersions??=[]).push("3.3.1");const rt=globalThis;class ot extends w{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{const s=i?.renderBefore??e;let r=s._$litPart$;if(void 0===r){const t=i?.renderBefore??null;s._$litPart$=r=new G(e.insertBefore(H(),t),t,void 0,i??{})}return r._$AI(t),r})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return B}}ot._$litElement$=!0,ot.finalized=!0,rt.litElementHydrateSupport?.({LitElement:ot});const nt=rt.litElementPolyfillSupport;nt?.({LitElement:ot}),(rt.litElementVersions??=[]).push("4.2.1");const at={attribute:!0,type:String,converter:y,reflect:!1,hasChanged:$},ct=(t=at,e,i)=>{const{kind:s,metadata:r}=i;let o=globalThis.litPropertyMetadata.get(r);if(void 0===o&&globalThis.litPropertyMetadata.set(r,o=new Map),"setter"===s&&((t=Object.create(t)).wrapped=!0),o.set(i.name,t),"accessor"===s){const{name:s}=i;return{set(i){const r=e.get.call(this);e.set.call(this,i),this.requestUpdate(s,r,t)},init(e){return void 0!==e&&this.C(s,void 0,t,e),e}}}if("setter"===s){const{name:s}=i;return function(i){const r=this[s];e.call(this,i),this.requestUpdate(s,r,t)}}throw Error("Unsupported decorator location: "+s)};function dt(t){return(e,i)=>"object"==typeof i?ct(t,e,i):((t,e,i)=>{const s=e.hasOwnProperty(i);return e.constructor.createProperty(i,t),s?Object.getOwnPropertyDescriptor(e,i):void 0})(t,e,i)}const ht=((t,...e)=>{const i=1===t.length?t[0]:e.reduce((e,i,s)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[s+1],t[0]);return new o(i,t,s)})`
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
`;const lt={en:{common:{unavailable:"Unavailable",on:"On",off:"Off",target:"Target"},modes:{Low:"Low",Medium:"Medium",High:"High",Humidity:"Auto",Auto:"Auto",Silent:"Silent",Strong:"Strong"},switches:{led:"LED",led_light:"LED",buzzer:"Buzzer",child_lock:"Lock",dry:"Dry",overwet_protect:"Protect"},sensors:{temperature:"Temp",humidity:"Humidity",water_level:"Water",motor_speed:"Speed",use_time:"Time"},status:{water_tank_ok:"Tank OK",water_tank_missing:"No Tank",water_shortage:"Add Water",no_water:"No Water"},editor:{entity:"Entity (required)",name:"Name (optional)",show_name:"Show name",show_state:"Show state",show_target_humidity:"Show target humidity",show_mode:"Show mode buttons",compact:"Compact mode"}},ru:{common:{unavailable:"Недоступно",on:"Вкл",off:"Выкл",target:"Цель"},modes:{Low:"Низкий",Medium:"Средний",High:"Высокий",Humidity:"Авто",Auto:"Авто",Silent:"Тихий",Strong:"Сильный"},switches:{led:"LED",led_light:"LED",buzzer:"Звук",child_lock:"Блок",dry:"Сушка",overwet_protect:"Защита"},sensors:{temperature:"Темп",humidity:"Влажн",water_level:"Вода",motor_speed:"Скор",use_time:"Время"},status:{water_tank_ok:"Бак ОК",water_tank_missing:"Нет бака",water_shortage:"Долейте воду",no_water:"Нет воды"},editor:{entity:"Объект (обязательно)",name:"Название (опционально)",show_name:"Показывать название",show_state:"Показывать состояние",show_target_humidity:"Показывать целевую влажность",show_mode:"Показывать кнопки режимов",compact:"Компактный режим"}}};function ut(t,e="en"){const i=lt[e]||lt.en,s=t.split(".");let r=i;for(const e of s){if(!r||"object"!=typeof r||!(e in r)){r=lt.en;for(const e of s){if(!r||"object"!=typeof r||!(e in r))return t;r=r[e]}break}r=r[e]}return"string"==typeof r?r:t}function pt(t){if(t?.language){const e=t.language.split("-")[0].toLowerCase();if(e in lt)return e}return"en"}const mt={led:{icon:"mdi:led-on",name:"LED"},led_light:{icon:"mdi:led-on",name:"LED"},buzzer:{icon:"mdi:volume-high",name:"Buzzer"},child_lock:{icon:"mdi:lock",name:"Child Lock"},dry:{icon:"mdi:water-off",name:"Dry Mode"},overwet_protect:{icon:"mdi:water-alert",name:"Overwet Protect"}},_t={temperature:{icon:"mdi:thermometer",name:"Temperature",unit:"°C"},humidity:{icon:"mdi:water-percent",name:"Humidity",unit:"%"},water_level:{icon:"mdi:water",name:"Water Level",unit:"%"},motor_speed:{icon:"mdi:fan",name:"Motor Speed",unit:"rpm"},use_time:{icon:"mdi:clock-outline",name:"Use Time",unit:"h"}},ft={water_tank:{icon_on:"mdi:cup-water",icon_off:"mdi:cup-off-outline",name:"Water Tank"},water_shortage:{icon_on:"mdi:water-off",icon_off:"mdi:water",name:"Water Shortage"},no_water:{icon_on:"mdi:water-off",icon_off:"mdi:water",name:"No Water"}};console.info("%c XIAOMI-HUMIDIFIER-CARD %c 1.0.0 ","color: white; background: #03a9f4; font-weight: bold;","color: #03a9f4; background: white; font-weight: bold;"),window.customCards=window.customCards||[],window.customCards.push({type:"xiaomi-humidifier-card",name:"Xiaomi Humidifier Card",description:"Thermostat-style card for Xiaomi humidifiers",preview:!0});let gt=class extends ot{constructor(){super(...arguments),this._entityId="",this._relatedEntities=new Map}setConfig(t){if(!t.entity)throw new Error("Entity is required");this._config={show_name:!0,show_state:!0,show_current_humidity:!0,show_target_humidity:!0,show_mode:!0,show_power:!0,compact:!1,...t},this._entityId=t.entity}getCardSize(){return this._config?.compact?3:5}get _entity(){return this.hass?.states[this._entityId]}_getRelatedEntities(){if(!this.hass||!this._entityId)return;const t=this._entityId.split(".")[1].replace(/_fan$/,"").replace(/_humidifier$/,"");this._relatedEntities.clear();for(const e of Object.keys(this.hass.states)){const i=e.split(".");if(i[1].startsWith(t)){const s=i[0],r=i[1].replace(t+"_","");this._relatedEntities.set(`${s}.${r}`,e)}}}_findEntity(t){for(const e of t){const t=`${e}_entity`;if(this._config[t]){const e=this.hass?.states[this._config[t]];if(e)return e}for(const[t,i]of this._relatedEntities)if(t.includes(e))return this.hass?.states[i];for(const t of Object.keys(this.hass?.states||{}))if(t.includes(e))return this.hass.states[t]}}get _currentHumidity(){const t=this._entity?.attributes;if(void 0!==t?.humidity)return Number(t.humidity);const e=this._findEntity(["sensor.humidity","humidity"]);return e?Number(e.state):void 0}get _targetHumidity(){const t=this._entity?.attributes;if(void 0!==t?.target_humidity)return Number(t.target_humidity);const e=this._findEntity(["number.target_humidity","target_humidity"]);return e?Number(e.state):void 0}get _temperature(){const t=this._entity?.attributes;if(void 0!==t?.temperature)return Number(t.temperature);const e=this._findEntity(["sensor.temperature","temperature"]);return e?Number(e.state):void 0}get _currentMode(){const t=this._entity?.attributes;if(t?.preset_mode)return String(t.preset_mode);if(t?.mode)return String(t.mode);const e=this._findEntity(["select.mode","mode_select"]);return e?e.state:void 0}get _availableModes(){const t=this._entity?.attributes;if(t?.preset_modes&&Array.isArray(t.preset_modes))return t.preset_modes;const e=this._findEntity(["select.mode","mode_select"]);return e?.attributes?.options&&Array.isArray(e.attributes.options)?e.attributes.options:["Low","Medium","High","Humidity"]}get _isOn(){const t=this._entity?.state;return"on"===t||"true"===t}get _isUnavailable(){const t=this._entity?.state;return"unavailable"===t||"unknown"===t||!t}get _switches(){const t=[];for(const[e,i]of Object.entries(mt)){const s=this._findEntity([`switch.${e}`,e]);s&&t.push({id:e,entity:s,name:i.name,icon:i.icon})}return t}get _sensors(){const t=[];for(const[e,i]of Object.entries(_t)){if("humidity"===e)continue;const s=this._findEntity([`sensor.${e}`,e]);s&&"unavailable"!==s.state&&"unknown"!==s.state&&t.push({id:e,entity:s,name:i.name,icon:i.icon,unit:i.unit})}return t}get _binarySensors(){const t=[];for(const[e,i]of Object.entries(ft)){const s=this._findEntity([`binary_sensor.${e}`,e]);if(s&&"unavailable"!==s.state){const r="on"===s.state;t.push({id:e,entity:s,name:i.name,isOn:r,icon:r?i.icon_on:i.icon_off})}}return t}async _handlePowerToggle(){if(!this.hass||!this._entity)return;const t=this._entityId.split(".")[0],e=this._isOn?"turn_off":"turn_on";await this.hass.callService(t,e,{},{entity_id:this._entityId})}async _handleModeChange(t){if(!this.hass)return;if("fan"===this._entityId.split(".")[0])return void await this.hass.callService("fan","set_preset_mode",{preset_mode:t},{entity_id:this._entityId});const e=this._findEntity(["select.mode","mode_select"]);e&&await this.hass.callService("select","select_option",{option:t},{entity_id:e.entity_id})}async _handleTargetHumidityChange(t){if(!this.hass)return;const e=this._findEntity(["number.target_humidity","target_humidity"]);e?await this.hass.callService("number","set_value",{value:t},{entity_id:e.entity_id}):await this.hass.callService("humidifier","set_humidity",{humidity:t},{entity_id:this._entityId})}async _handleSwitchToggle(t,e){if(!this.hass)return;const i="on"===e?"turn_off":"turn_on";await this.hass.callService("switch",i,{},{entity_id:t})}willUpdate(t){super.willUpdate(t),t.has("hass")&&this._getRelatedEntities()}render(){if(!this._config||!this.hass)return D``;const t=pt(this.hass);if(this._isUnavailable)return D`
        <ha-card>
          <div class="unavailable-message">
            <ha-icon icon="mdi:alert-circle-outline"></ha-icon>
            <div>${ut("common.unavailable",t)}</div>
          </div>
        </ha-card>
      `;const e=this._config.name||this._entity?.attributes?.friendly_name||"Humidifier",i=this._currentHumidity,s=this._targetHumidity;return D`
      <ha-card>
        ${this._renderHeader(e,t)}
        ${this._renderHumidityCircle(i,s)}
        ${this._config.show_target_humidity?this._renderTargetSlider(s):W}
        ${this._config.show_mode?this._renderModeButtons(t):W}
        ${this._renderSwitches(t)}
        ${this._renderSensors()}
        ${this._renderStatusIndicators(t)}
      </ha-card>
    `}_renderHeader(t,e){return D`
      <div class="card-header">
        <div>
          ${this._config.show_name?D`<div class="name">${t}</div>`:W}
          ${this._config.show_state?D`
            <div class="state">
              ${this._isOn?ut("common.on",e):ut("common.off",e)}
            </div>
          `:W}
        </div>
        ${this._config.show_power?D`
          <ha-icon-button
            class="power-button ${this._isOn?"on":""}"
            @click=${this._handlePowerToggle}
          >
            <ha-icon icon="mdi:power"></ha-icon>
          </ha-icon-button>
        `:W}
      </div>
    `}_renderHumidityCircle(t,e){const i=2*Math.PI*80;return D`
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
          ${void 0!==e?D`
            <div class="target-humidity">
              ${ut("common.target",pt(this.hass))}: ${e}%
            </div>
          `:W}
        </div>
      </div>
    `}_renderTargetSlider(t){const e=t??50;return D`
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
    `}_renderModeButtons(t){const e=this._availableModes,i=this._currentMode;return D`
      <div class="mode-buttons">
        ${e.map(e=>D`
          <div
            class="mode-button ${i===e?"active":""}"
            @click=${()=>this._handleModeChange(e)}
          >
            <ha-icon icon="${this._getModeIcon(e)}"></ha-icon>
            <span class="mode-name">${ut(`modes.${e}`,t)||e}</span>
          </div>
        `)}
      </div>
    `}_getModeIcon(t){return{Low:"mdi:fan-speed-1",Medium:"mdi:fan-speed-2",High:"mdi:fan-speed-3",Humidity:"mdi:water-percent",Auto:"mdi:fan-auto",Silent:"mdi:volume-off",Strong:"mdi:weather-windy"}[t]||"mdi:fan"}_renderSwitches(t){const e=this._switches;return 0===e.length?W:D`
      <div class="switches-row">
        ${e.map(e=>D`
          <div
            class="switch-item ${"on"===e.entity.state?"on":""}"
            @click=${()=>this._handleSwitchToggle(e.entity.entity_id,e.entity.state)}
          >
            <ha-icon icon="${e.icon}"></ha-icon>
            <span class="switch-name">${ut(`switches.${e.id}`,t)||e.name}</span>
          </div>
        `)}
      </div>
    `}_renderSensors(){const t=this._sensors,e=this._temperature;return 0===t.length&&void 0===e?W:D`
      <div class="sensors-row">
        ${void 0!==e?D`
          <div class="sensor-item">
            <ha-icon icon="mdi:thermometer"></ha-icon>
            <span class="sensor-value">${e}</span>
            <span class="sensor-unit">°C</span>
          </div>
        `:W}
        ${t.map(t=>D`
          <div class="sensor-item">
            <ha-icon icon="${t.icon}"></ha-icon>
            <span class="sensor-value">${t.entity.state}</span>
            ${t.unit?D`<span class="sensor-unit">${t.unit}</span>`:W}
          </div>
        `)}
      </div>
    `}_renderStatusIndicators(t){const e=this._binarySensors;return 0===e.length?W:D`
      <div class="status-indicators">
        ${e.map(e=>{let i="ok";return e.id.includes("shortage")||e.id.includes("no_water")?i=e.isOn?"error":"ok":"water_tank"===e.id&&(i=e.isOn?"ok":"warning"),D`
            <div class="status-indicator ${i}">
              <ha-icon icon="${e.icon}"></ha-icon>
              <span>${ut(`status.${e.id}${e.isOn?"":"_missing"}`,t)||e.name}</span>
            </div>
          `})}
      </div>
    `}static getConfigElement(){return document.createElement("xiaomi-humidifier-card-editor")}static getStubConfig(){return{type:"custom:xiaomi-humidifier-card",entity:""}}};gt.styles=ht,t([dt({attribute:!1})],gt.prototype,"hass",void 0),t([function(t){return dt({...t,state:!0,attribute:!1})}()],gt.prototype,"_config",void 0),gt=t([(t=>(e,i)=>{void 0!==i?i.addInitializer(()=>{customElements.define(t,e)}):customElements.define(t,e)})("xiaomi-humidifier-card")],gt);export{gt as XiaomiHumidifierCard};
