System.register("chunks:///_virtual/Background.ts",["./rollupPluginModLoBabelHelpers.js","cc","./start.ts"],(function(t){var e,i,a,n,o,r,p,s,l,h,u,c,g,d;return{setters:[function(t){e=t.applyDecoratedDescriptor,i=t.inheritsLoose,a=t.initializerDefineProperty,n=t.assertThisInitialized},function(t){o=t.cclegacy,r=t._decorator,p=t.Node,s=t.Prefab,l=t.Label,h=t.instantiate,u=t.Vec3,c=t.randomRangeInt,g=t.Component},function(t){d=t.start}],execute:function(){var m,b,f,w,P,y,v,B,j,z,I,A,C,N,x,S,k,R,L;o._RF.push({},"90b2fgaEzVBooo6znFjTpqx","Background",void 0);var _=r.ccclass,D=r.property;t("Background",(m=_("Background"),b=D({type:p}),f=D({type:s}),w=D({type:s}),P=D({type:s}),y=D({type:s}),v=D({type:s}),B=D({type:s}),j=D({type:l}),m((A=e((I=function(t){function e(){for(var e,i=arguments.length,o=new Array(i),r=0;r<i;r++)o[r]=arguments[r];return e=t.call.apply(t,[this].concat(o))||this,a(e,"parentBackground",A,n(e)),a(e,"prefabPipa",C,n(e)),a(e,"pipaAtas",N,n(e)),a(e,"pipaBawah",x,n(e)),a(e,"pipaAtasIjo",S,n(e)),a(e,"pipaBawahIjo",k,n(e)),a(e,"prefabBase",R,n(e)),e.pipa=[],e.btnStart=void 0,a(e,"scoreLabel",L,n(e)),e.randomNum=0,e.gameSpeed=5,e.pipesCount=3,e.mainControl=null,e}i(e,t);var o=e.prototype;return o.start=function(){var t,e,i=this.getColor();console.log(i);var a=h(this.prefabPipa);a.setParent(this.node.parent),a.setPosition(new u(200,0,0)),"orange"===i?((t=h(this.pipaAtas)).setParent(this.node.parent),t.setPosition(new u(200,0,0)),(e=h(this.pipaBawah)).setParent(this.node.parent),e.setPosition(new u(200,0,0))):"green"===i&&((t=h(this.pipaAtasIjo)).setParent(this.node.parent),t.setPosition(new u(200,0,0)),(e=h(this.pipaBawahIjo)).setParent(this.node.parent),e.setPosition(new u(200,0,0))),this.randomNum<0?this.pipa.push(t):this.randomNum>=0&&this.randomNum<=9?this.pipa.push(e):this.pipa.push(a);var n=h(this.prefabBase);n.setParent(this.node.parent),n.setPosition(new u(0,-260,0)),this.randomNum=c(-10,20);for(var o=0;o<this.pipesCount;o++)this.spawnRandomPipe()},o.getColor=function(){return d.getColor()},o.gameOver=function(){this.mainControl.gameOver()},o.spawnRandomPipe=function(){var t,e=this.getColor();console.log(e);var i=c(10,20);i<0?"orange"===e?t=h(this.pipaAtas):"green"===e&&(t=h(this.pipaAtasIjo)):i>=0&&i<=9&&("orange"===e?t=h(this.pipaBawah):"green"===e&&(t=h(this.pipaBawahIjo))),t.setParent(this.node.parent),t.setPosition(new u(250,0,0)),this.pipa.push(t),console.log(e)},o.touchStartBtn=function(){this.btnStart.node.active=!1,console.log(this.mainControl.isGameOver)},o.update=function(t){this.randomNum=c(-10,20);var e=this.node.getPosition();e.x-=288/this.gameSpeed*t,e.x<=-288&&(e.x+=288),this.node.setPosition(e);for(var i=0;i<this.pipa.length;i++){var a=this.pipa[i].getPosition();if(a.x-=1122/this.gameSpeed*t,a.x<=-200){a.x=200+150*(this.pipa.length-1),a.y=c(-120,120),1===c(0,1)&&(this.spawnRandomPipe(),this.pipa.splice(i,1));var n=void 0,o=this.getColor();this.randomNum<0?"orange"===o?n=h(this.pipaAtas):"green"===o&&(n=h(this.pipaAtasIjo)):this.randomNum>=0&&this.randomNum<=9&&("orange"===o?n=h(this.pipaBawah):"green"===o&&(n=h(this.pipaBawahIjo))),n.setParent(this.node.parent),n.setPosition(a),this.pipa.splice(i,1,n)}this.pipa[i].setPosition(a)}this.gameSpeed-=.15*t},e}(g)).prototype,"parentBackground",[b],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),C=e(I.prototype,"prefabPipa",[f],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),N=e(I.prototype,"pipaAtas",[w],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),x=e(I.prototype,"pipaBawah",[P],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),S=e(I.prototype,"pipaAtasIjo",[y],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),k=e(I.prototype,"pipaBawahIjo",[v],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),R=e(I.prototype,"prefabBase",[B],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),L=e(I.prototype,"scoreLabel",[j],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),z=I))||z));o._RF.pop()}}}));

System.register("chunks:///_virtual/Bird.ts",["./rollupPluginModLoBabelHelpers.js","cc","./MainControl.ts","./SFXPlayer.ts"],(function(e){var i,t,n,o,s,r,a,l,u,h,d,p,c,m,y,T,b;return{setters:[function(e){i=e.applyDecoratedDescriptor,t=e.inheritsLoose,n=e.initializerDefineProperty,o=e.assertThisInitialized},function(e){s=e.cclegacy,r=e._decorator,a=e.Sprite,l=e.ParticleSystem2D,u=e.input,h=e.Input,d=e.Collider2D,p=e.Contact2DType,c=e.RigidBody2D,m=e.Vec3,y=e.Component},function(e){T=e.MainControl},function(e){b=e.SFXPlayer}],execute:function(){var f,g,C,v,P,S,F;s._RF.push({},"212caKsbNVERqMALRR0YfOH","Bird",void 0);var O=r.ccclass,B=r.property;e("Bird",(f=O("Bird"),g=B({type:a}),C=B({type:l}),f((S=i((P=function(e){function i(){for(var i,t=arguments.length,s=new Array(t),r=0;r<t;r++)s[r]=arguments[r];return i=e.call.apply(e,[this].concat(s))||this,n(i,"bird",S,o(i)),n(i,"explosionParticle",F,o(i)),i.speedTurun=100,i.mainControl=null,i.isGameOver=!1,i.isFlying=!1,i.flySpeed=100,i.immune=!0,i.immuneTimer=5,i}t(i,e);var s=i.prototype;return s.start=function(){u.on(h.EventType.TOUCH_START,this.onTouchStart,this),u.on(h.EventType.TOUCH_END,this.onTouchEnd,this),this.node.getComponent(d).on(p.BEGIN_CONTACT,this.onCollide,this),this.mainControl=this.node.parent.getComponent(T),this.bird=this.node.getChildByName("Birb").getComponent(a),this.explosionParticle.enabled=!1},s.onCollide=function(e,i){0===i.tag&&(b.Instance.play(1),this.mainControl.gameOver(),this.isGameOver=!0,this.speedTurun=-50,e.enabled=!1,this.bird.enabled=!1,this.explosionParticle.enabled=!0)},s.onTouchStart=function(e){b.Instance.play(4),this.isGameOver||(this.isFlying=!0)},s.onTouchEnd=function(e){this.isGameOver||(this.isFlying=!1)},s.update=function(e){if(this.immune){this.immuneTimer-=e;var i=Math.floor(this.immuneTimer/.1)%2==0,t=this.node.getComponent(d),n=this.node.getComponent(c);this.bird.enabled=!i,this.immuneTimer<=0?(this.node.setScale(new m(1,1,1)),this.immune=!1,this.immuneTimer=0,t&&(t.enabled=!0),n&&(n.enabled=!0),this.bird.enabled=!0):(this.node.setScale(new m(3,3,1)),t&&(t.enabled=!1),n&&(n.enabled=!1))}if(this.isGameOver){o=this.node.getPosition();this.speedTurun-=100*e,o.y+=this.speedTurun*e,this.node.setPosition(o);this.node.setRotationFromEuler(0,0,-90),o.y<=-260&&(o.y=-260)}else{var o;this.isFlying?this.speedTurun=this.flySpeed:this.speedTurun-=300*e,(o=this.node.getPosition()).y+=this.speedTurun*e,this.node.setPosition(o);var s=this.speedTurun;s>=30?s=30:s<30&&(s=-30),this.node.setRotationFromEuler(0,0,s)}},i}(y)).prototype,"bird",[g],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),F=i(P.prototype,"explosionParticle",[C],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),v=P))||v));s._RF.pop()}}}));

System.register("chunks:///_virtual/debug-view-runtime-control.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){var e,o,i,n,s,l,r,a,g,h,p,c,C,d,m,u,L;return{setters:[function(t){e=t.applyDecoratedDescriptor,o=t.inheritsLoose,i=t.initializerDefineProperty,n=t.assertThisInitialized},function(t){s=t.cclegacy,l=t._decorator,r=t.Node,a=t.Canvas,g=t.UITransform,h=t.instantiate,p=t.Label,c=t.Color,C=t.RichText,d=t.Toggle,m=t.Button,u=t.director,L=t.Component}],execute:function(){var f,M,b,v,T,S,x,E,I;s._RF.push({},"b2bd1+njXxJxaFY3ymm06WU","debug-view-runtime-control",void 0);var A=l.ccclass,y=l.property;t("DebugViewRuntimeControl",(f=A("internal.DebugViewRuntimeControl"),M=y(r),b=y(r),v=y(r),f((x=e((S=function(t){function e(){for(var e,o=arguments.length,s=new Array(o),l=0;l<o;l++)s[l]=arguments[l];return e=t.call.apply(t,[this].concat(s))||this,i(e,"compositeModeToggle",x,n(e)),i(e,"singleModeToggle",E,n(e)),i(e,"EnableAllCompositeModeButton",I,n(e)),e._single=0,e.strSingle=["No Single Debug","Vertex Color","Vertex Normal","Vertex Tangent","World Position","Vertex Mirror","Face Side","UV0","UV1","UV Lightmap","Project Depth","Linear Depth","Fragment Normal","Fragment Tangent","Fragment Binormal","Base Color","Diffuse Color","Specular Color","Transparency","Metallic","Roughness","Specular Intensity","IOR","Direct Diffuse","Direct Specular","Direct All","Env Diffuse","Env Specular","Env All","Emissive","Light Map","Shadow","AO","Fresnel","Direct Transmit Diffuse","Direct Transmit Specular","Env Transmit Diffuse","Env Transmit Specular","Transmit All","Direct Internal Specular","Env Internal Specular","Internal All","Fog"],e.strComposite=["Direct Diffuse","Direct Specular","Env Diffuse","Env Specular","Emissive","Light Map","Shadow","AO","Normal Map","Fog","Tone Mapping","Gamma Correction","Fresnel","Transmit Diffuse","Transmit Specular","Internal Specular","TT"],e.strMisc=["CSM Layer Coloration","Lighting With Albedo"],e.compositeModeToggleList=[],e.singleModeToggleList=[],e.miscModeToggleList=[],e.textComponentList=[],e.labelComponentList=[],e.textContentList=[],e.hideButtonLabel=void 0,e._currentColorIndex=0,e.strColor=["<color=#ffffff>","<color=#000000>","<color=#ff0000>","<color=#00ff00>","<color=#0000ff>"],e.color=[c.WHITE,c.BLACK,c.RED,c.GREEN,c.BLUE],e}o(e,t);var s=e.prototype;return s.start=function(){if(this.node.parent.getComponent(a)){var t=this.node.parent.getComponent(g),e=.5*t.width,o=.5*t.height,i=.1*e-e,n=o-.1*o,s=this.node.getChildByName("MiscMode"),l=h(s);l.parent=this.node,l.name="Buttons";var r=h(s);r.parent=this.node,r.name="Titles";for(var u=0;u<2;u++){var L=h(this.EnableAllCompositeModeButton.getChildByName("Label"));L.setPosition(i+(u>0?450:150),n,0),L.setScale(.75,.75,.75),L.parent=r;var f=L.getComponent(p);f.string=u?"----------Composite Mode----------":"----------Single Mode----------",f.color=c.WHITE,f.overflow=0,this.labelComponentList[this.labelComponentList.length]=f}n-=20;for(var M=0,b=0;b<this.strSingle.length;b++,M++){b===this.strSingle.length>>1&&(i+=200,M=0);var v=b?h(this.singleModeToggle):this.singleModeToggle;v.setPosition(i,n-20*M,0),v.setScale(.5,.5,.5),v.parent=this.singleModeToggle.parent;var T=v.getComponentInChildren(C);T.string=this.strSingle[b],this.textComponentList[this.textComponentList.length]=T,this.textContentList[this.textContentList.length]=T.string,v.on(d.EventType.TOGGLE,this.toggleSingleMode,this),this.singleModeToggleList[b]=v}i+=200,this.EnableAllCompositeModeButton.setPosition(i+15,n,0),this.EnableAllCompositeModeButton.setScale(.5,.5,.5),this.EnableAllCompositeModeButton.on(m.EventType.CLICK,this.enableAllCompositeMode,this),this.EnableAllCompositeModeButton.parent=l;var S=this.EnableAllCompositeModeButton.getComponentInChildren(p);this.labelComponentList[this.labelComponentList.length]=S;var x=h(this.EnableAllCompositeModeButton);x.setPosition(i+90,n,0),x.setScale(.5,.5,.5),x.on(m.EventType.CLICK,this.changeTextColor,this),x.parent=l,(S=x.getComponentInChildren(p)).string="TextColor",this.labelComponentList[this.labelComponentList.length]=S;var E=h(this.EnableAllCompositeModeButton);E.setPosition(i+200,n,0),E.setScale(.5,.5,.5),E.on(m.EventType.CLICK,this.hideUI,this),E.parent=this.node.parent,(S=E.getComponentInChildren(p)).string="Hide UI",this.labelComponentList[this.labelComponentList.length]=S,this.hideButtonLabel=S,n-=40;for(var I=0;I<this.strMisc.length;I++){var A=h(this.compositeModeToggle);A.setPosition(i,n-20*I,0),A.setScale(.5,.5,.5),A.parent=s;var y=A.getComponentInChildren(C);y.string=this.strMisc[I],this.textComponentList[this.textComponentList.length]=y,this.textContentList[this.textContentList.length]=y.string,A.getComponent(d).isChecked=!!I,A.on(d.EventType.TOGGLE,I?this.toggleLightingWithAlbedo:this.toggleCSMColoration,this),this.miscModeToggleList[I]=A}n-=150;for(var D=0;D<this.strComposite.length;D++){var B=D?h(this.compositeModeToggle):this.compositeModeToggle;B.setPosition(i,n-20*D,0),B.setScale(.5,.5,.5),B.parent=this.compositeModeToggle.parent;var w=B.getComponentInChildren(C);w.string=this.strComposite[D],this.textComponentList[this.textComponentList.length]=w,this.textContentList[this.textContentList.length]=w.string,B.on(d.EventType.TOGGLE,this.toggleCompositeMode,this),this.compositeModeToggleList[D]=B}}else console.error("debug-view-runtime-control should be child of Canvas")},s.isTextMatched=function(t,e){var o=new String(t),i=o.search(">");return-1===i?t===e:(o=(o=o.substr(i+1)).substr(0,o.search("<")))===e},s.toggleSingleMode=function(t){for(var e=u.root.debugView,o=t.getComponentInChildren(C),i=0;i<this.strSingle.length;i++)this.isTextMatched(o.string,this.strSingle[i])&&(e.singleMode=i)},s.toggleCompositeMode=function(t){for(var e=u.root.debugView,o=t.getComponentInChildren(C),i=0;i<this.strComposite.length;i++)this.isTextMatched(o.string,this.strComposite[i])&&e.enableCompositeMode(i,t.isChecked)},s.toggleLightingWithAlbedo=function(t){u.root.debugView.lightingWithAlbedo=t.isChecked},s.toggleCSMColoration=function(t){u.root.debugView.csmLayerColoration=t.isChecked},s.enableAllCompositeMode=function(t){var e=u.root.debugView;e.enableAllCompositeMode(!0);for(var o=0;o<this.compositeModeToggleList.length;o++){this.compositeModeToggleList[o].getComponent(d).isChecked=!0}var i=this.miscModeToggleList[0].getComponent(d);i.isChecked=!1,e.csmLayerColoration=!1,(i=this.miscModeToggleList[1].getComponent(d)).isChecked=!0,e.lightingWithAlbedo=!0},s.hideUI=function(t){var e=this.node.getChildByName("Titles"),o=!e.active;this.singleModeToggleList[0].parent.active=o,this.miscModeToggleList[0].parent.active=o,this.compositeModeToggleList[0].parent.active=o,this.EnableAllCompositeModeButton.parent.active=o,e.active=o,this.hideButtonLabel.string=o?"Hide UI":"Show UI"},s.changeTextColor=function(t){this._currentColorIndex++,this._currentColorIndex>=this.strColor.length&&(this._currentColorIndex=0);for(var e=0;e<this.textComponentList.length;e++)this.textComponentList[e].string=this.strColor[this._currentColorIndex]+this.textContentList[e]+"</color>";for(var o=0;o<this.labelComponentList.length;o++)this.labelComponentList[o].color=this.color[this._currentColorIndex]},s.onLoad=function(){},s.update=function(t){},e}(L)).prototype,"compositeModeToggle",[M],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),E=e(S.prototype,"singleModeToggle",[b],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),I=e(S.prototype,"EnableAllCompositeModeButton",[v],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),T=S))||T));s._RF.pop()}}}));

System.register("chunks:///_virtual/EasyBackground.ts",["./rollupPluginModLoBabelHelpers.js","cc","./start.ts"],(function(e){var t,i,a,r,n,o,s,p,l,c,u,b,h,f,d,g,y;return{setters:[function(e){t=e.applyDecoratedDescriptor,i=e.inheritsLoose,a=e.initializerDefineProperty,r=e.assertThisInitialized},function(e){n=e.cclegacy,o=e._decorator,s=e.Node,p=e.Prefab,l=e.Sprite,c=e.Label,u=e.instantiate,b=e.Vec3,h=e.Button,f=e.NodeEventType,d=e.randomRangeInt,g=e.Component},function(e){y=e.start}],execute:function(){var v,P,m,B,w,S,z,L,k,x,C,O,I,D,G;n._RF.push({},"a991d5bY8BIPYiiDMwfOW1B","EasyBackground",void 0);var N=o.ccclass,_=o.property;e("Background",(v=N("Background"),P=_({type:s}),m=_({type:p}),B=_({type:p}),w=_({type:p}),S=_({type:l}),z=_({type:c}),v((x=t((k=function(e){function t(){for(var t,i=arguments.length,n=new Array(i),o=0;o<i;o++)n[o]=arguments[o];return t=e.call.apply(e,[this].concat(n))||this,a(t,"parentBackground",x,r(t)),a(t,"prefabPipa",C,r(t)),a(t,"prefabPipaIjo",O,r(t)),a(t,"prefabBase",I,r(t)),a(t,"spGameOver",D,r(t)),t.pipa=[],t.btnStart=void 0,a(t,"scoreLabel",G,r(t)),t.score=0,t}i(t,e);var n=t.prototype;return n.start=function(){var e=y.getColor();if(console.log("ini warna easy",e),"orange"===e){var t=u(this.prefabPipa);t.setParent(this.node.parent),t.setPosition(new b(200,0,0)),this.pipa.push(t)}else if("green"===e){var i=u(this.prefabPipaIjo);i.setParent(this.node.parent),i.setPosition(new b(200,0,0)),this.pipa.push(i)}var a=u(this.prefabBase);a.setParent(this.node.parent),a.setPosition(new b(-25,-260,0)),this.spGameOver=this.node.getChildByName("GameOver").getComponent(l),this.spGameOver.node.active=!0,this.btnStart=this.node.getChildByName("btnStart").getComponent(h),this.btnStart.node.on(f.TOUCH_END,this.touchStartBtn,this)},n.touchStartBtn=function(){this.btnStart.node.active=!1},n.update=function(e){var t=this.node.getPosition();t.x-=57.6*e,t.x<=-288&&(t.x+=288),this.node.setPosition(t);for(var i=0;i<this.pipa.length;i++){var a=this.pipa[i].getPosition();a.x-=113.2*e,a.x<=-200&&(a.x+=400,a.y=d(-120,120)),this.pipa[i].setPosition(a)}},n.updateScoreLabel=function(){this.scoreLabel&&(this.scoreLabel.string=this.score.toString())},t}(g)).prototype,"parentBackground",[P],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),C=t(k.prototype,"prefabPipa",[m],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),O=t(k.prototype,"prefabPipaIjo",[B],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),I=t(k.prototype,"prefabBase",[w],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),D=t(k.prototype,"spGameOver",[S],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),G=t(k.prototype,"scoreLabel",[z],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),L=k))||L));n._RF.pop()}}}));

System.register("chunks:///_virtual/EasyBird.ts",["./rollupPluginModLoBabelHelpers.js","cc","./MainControl.ts","./SFXPlayer.ts"],(function(e){var i,t,n,o,s,r,a,l,u,h,d,p,c,m,y,T;return{setters:[function(e){i=e.applyDecoratedDescriptor,t=e.inheritsLoose,n=e.initializerDefineProperty,o=e.assertThisInitialized},function(e){s=e.cclegacy,r=e._decorator,a=e.Sprite,l=e.ParticleSystem2D,u=e.input,h=e.Input,d=e.Collider2D,p=e.Contact2DType,c=e.RigidBody2D,m=e.Component},function(e){y=e.MainControl},function(e){T=e.SFXPlayer}],execute:function(){var b,f,g,C,v,P,B;s._RF.push({},"5f5a3bVHdNBWoqRCGcX4ude","EasyBird",void 0);var E=r.ccclass,F=r.property;e("Bird",(b=E("Bird"),f=F({type:a}),g=F({type:l}),b((P=i((v=function(e){function i(){for(var i,t=arguments.length,s=new Array(t),r=0;r<t;r++)s[r]=arguments[r];return i=e.call.apply(e,[this].concat(s))||this,n(i,"bird",P,o(i)),n(i,"explosionParticle",B,o(i)),i.speedTurun=100,i.mainControl=null,i.isGameOver=!1,i.isFlying=!1,i.flySpeed=150,i.immuneTimer=5,i.immune=!0,i}t(i,e);var s=i.prototype;return s.start=function(){u.on(h.EventType.TOUCH_START,this.onTouchStart,this),u.on(h.EventType.TOUCH_END,this.onTouchEnd,this),this.node.getComponent(d).on(p.BEGIN_CONTACT,this.onCollide,this),this.mainControl=this.node.parent.getComponent(y),this.bird=this.node.getChildByName("Birb").getComponent(a),this.explosionParticle.enabled=!1},s.onCollide=function(e,i){0===i.tag&&(T.Instance.play(1),this.mainControl.gameOver(),this.isGameOver=!0,this.speedTurun=-50,e.enabled=!1,this.bird.enabled=!1,this.explosionParticle.enabled=!0)},s.onTouchStart=function(e){T.Instance.play(4),this.isGameOver||(this.isFlying=!0)},s.onTouchEnd=function(e){this.isGameOver||(this.isFlying=!1)},s.update=function(e){if(this.immune){this.immuneTimer-=e;var i=Math.floor(this.immuneTimer/.1)%2==0,t=this.node.getComponent(d),n=this.node.getComponent(c);this.bird.enabled=!i,this.immuneTimer<=0?(this.immune=!1,this.immuneTimer=0,t&&(t.enabled=!0),n&&(n.enabled=!0),this.bird.enabled=!0):(t&&(t.enabled=!1),n&&(n.enabled=!1))}if(this.isGameOver){o=this.node.getPosition();this.speedTurun-=150*e,o.y+=this.speedTurun*e,this.node.setPosition(o);this.node.setRotationFromEuler(0,0,-90),o.y<=-260&&(o.y=-260)}else{var o;this.isFlying?this.speedTurun=this.flySpeed:this.speedTurun-=300*e,(o=this.node.getPosition()).y+=this.speedTurun*e,this.node.setPosition(o);var s=this.speedTurun;s>=30?s=30:s<30&&(s=-30),this.node.setRotationFromEuler(0,0,s)}},i}(m)).prototype,"bird",[f],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),B=i(v.prototype,"explosionParticle",[g],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),C=v))||C));s._RF.pop()}}}));

System.register("chunks:///_virtual/main",["./debug-view-runtime-control.ts","./Background.ts","./Bird.ts","./EasyBackground.ts","./EasyBird.ts","./MainControl.ts","./MoveButton.ts","./SFXPlayer.ts","./start.ts"],(function(){return{setters:[null,null,null,null,null,null,null,null,null],execute:function(){}}}));

System.register("chunks:///_virtual/MainControl.ts",["./rollupPluginModLoBabelHelpers.js","cc","./SFXPlayer.ts","./MoveButton.ts"],(function(t){var e,i,n,s,a,o,r,c,u,l,h,p,d;return{setters:[function(t){e=t.applyDecoratedDescriptor,i=t.inheritsLoose,n=t.initializerDefineProperty,s=t.assertThisInitialized},function(t){a=t.cclegacy,o=t._decorator,r=t.Label,c=t.Button,u=t.NodeEventType,l=t.director,h=t.Component},function(t){p=t.SFXPlayer},function(t){d=t.MoveButton}],execute:function(){var g,b,m,v,y,B,f,C,S;a._RF.push({},"0684fwbRlNFXq8ghYbpE14K","MainControl",void 0);var P=o.ccclass,M=o.property;t("MainControl",(g=P("MainControl"),b=M({type:r}),m=M({type:c}),v=M({type:c}),g((f=e((B=function(t){function e(){for(var e,i=arguments.length,a=new Array(i),o=0;o<i;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))||this).btnStart=void 0,n(e,"scoreLabel",f,s(e)),n(e,"pauseBtn",C,s(e)),n(e,"bgmBtn",S,s(e)),e.spGameOver=void 0,e.score=0,e.isPaused=!1,e.isMusicPlaying=!0,e.isGameOver=!1,e}i(e,t);var a=e.prototype;return a.start=function(){this.spGameOver=this.node.getChildByName("GameOver"),this.spGameOver.active=!1,this.btnStart=this.node.getChildByName("btnStart").getComponent(c),this.pauseBtn=this.node.getChildByName("pauseBtn").getComponent(c),this.bgmBtn=this.node.getChildByName("bgmBtn").getComponent(c),this.scoreLabel=this.node.getChildByName("Score").getComponent(r),this.btnStart.node.active=!1,this.score=0,this.updateScoreLabel(),this.btnStart.node.on(u.TOUCH_END,this.touchStartBtn,this),this.pauseBtn.node.on(u.TOUCH_END,this.togglePause,this),this.bgmBtn.node.on(u.TOUCH_END,this.toggleMusic,this),this.node.getChildByName("GamePausedText").getComponent(r).enabled=!1},a.update=function(t){this.spGameOver.active||this.isPaused||(this.score+=t,this.updateScoreLabel())},a.gameOver=function(){this.btnStart.node.active=!0,this.spGameOver.active=!0,this.spGameOver.setSiblingIndex(this.spGameOver.parent.children.length-1),this.pauseBtn.node.active=!1,this.bgmBtn.node.active=!1,p.Instance.stopBackgroundMusic(),this.isGameOver=!0,d.Instance.hideBtn()},a.toggleMusic=function(t){this.isMusicPlaying?p.Instance.stopBackgroundMusic():p.Instance.playBackgroundMusic(),this.isMusicPlaying=!this.isMusicPlaying},a.togglePause=function(){this.isPaused=!this.isPaused;var t=this.node.getChildByName("GamePausedText").getComponent(r);this.isPaused?(l.pause(),t.enabled=!0):(l.resume(),t.enabled=!1)},a.touchStartBtn=function(){this.btnStart.node.active=!1,this.isPaused=!1,l.loadScene("start")},a.updateScoreLabel=function(){this.scoreLabel&&(this.scoreLabel.string=Math.floor(this.score).toString())},e}(h)).prototype,"scoreLabel",[b],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),C=e(B.prototype,"pauseBtn",[m],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),S=e(B.prototype,"bgmBtn",[v],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),y=B))||y));a._RF.pop()}}}));

System.register("chunks:///_virtual/MoveButton.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){var o,n,e,i,c,r;return{setters:[function(t){o=t.inheritsLoose},function(t){n=t.cclegacy,e=t._decorator,i=t.Node,c=t.Vec3,r=t.Component}],execute:function(){var s,a;n._RF.push({},"34ee0GNm5lD4o81KfE8z/sp","MoveButton",void 0);var u=e.ccclass;e.property,t("MoveButton",u("MoveButton")(((a=function(t){function n(){for(var o,n=arguments.length,e=new Array(n),i=0;i<n;i++)e[i]=arguments[i];return(o=t.call.apply(t,[this].concat(e))||this).bird=void 0,o.canMove=!0,o}o(n,t);var e=n.prototype;return e.start=function(){n.Instance=this,this.bird=this.node.parent.getChildByName("Birb"),this.node.on(i.EventType.TOUCH_START,this.onTouchStart,this)},e.onTouchStart=function(t){var o=this;this.canMove&&(this.moveBird(),this.canMove=!1,this.node.active=!1,this.scheduleOnce((function(){o.canMove=!0,o.node.active=!0}),3)),console.log("Tombol move")},e.hideBtn=function(){this.node.active=!1},e.moveBird=function(){var t=new c;this.bird.setPosition(t)},n}(r)).Instance=null,s=a))||s);n._RF.pop()}}}));

System.register("chunks:///_virtual/SFXPlayer.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){var i,e,n,r,o,s,c,u,a,l;return{setters:[function(t){i=t.applyDecoratedDescriptor,e=t.inheritsLoose,n=t.initializerDefineProperty,r=t.assertThisInitialized},function(t){o=t.cclegacy,s=t._decorator,c=t.AudioClip,u=t.AudioSource,a=t.log,l=t.Component}],execute:function(){var p,h,f,y,d,g,S,b;o._RF.push({},"de0b0vwSPhM1qA8BJ+OUoSU","SFXPlayer",void 0);var k=s.ccclass,v=s.property;t("SFXPlayer",(p=k("SFXPlayer"),h=v({type:[c]}),f=v(c),p(((b=function(t){function i(){for(var i,e=arguments.length,o=new Array(e),s=0;s<e;s++)o[s]=arguments[s];return i=t.call.apply(t,[this].concat(o))||this,n(i,"listSfx",g,r(i)),n(i,"backgroundMusic",S,r(i)),i.source=void 0,i}e(i,t);var o=i.prototype;return o.start=function(){i.Instance=this,this.source=this.getComponent(u),this.playBackgroundMusic()},o.play=function(t){t<0||t>=this.listSfx.length||this.source.playOneShot(this.listSfx[t])},o.playBackgroundMusic=function(){this.backgroundMusic?(this.source.clip=this.backgroundMusic,this.source.loop=!0,this.source.play()):a("Background music is not assigned.")},o.stopBackgroundMusic=function(){this.source.stop()},o.update=function(t){},i}(l)).Instance=null,g=i((d=b).prototype,"listSfx",[h],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),S=i(d.prototype,"backgroundMusic",[f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),y=d))||y));o._RF.pop()}}}));

System.register("chunks:///_virtual/start.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){var e,o,n,r,a,i,s;return{setters:[function(t){e=t.inheritsLoose},function(t){o=t.cclegacy,n=t._decorator,r=t.Button,a=t.NodeEventType,i=t.director,s=t.Component}],execute:function(){var h,d;o._RF.push({},"7955aIb/n9LZoZjX44LL0bf","start",void 0);var c=n.ccclass;n.property,t("start",c("start")(((d=function(t){function o(){for(var e,o=arguments.length,n=new Array(o),r=0;r<o;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))||this).easyBtn=void 0,e.hardBtn=void 0,e.orangeBtn=void 0,e.greenBtn=void 0,e.defaultColor=!0,e}e(o,t);var n=o.prototype;return n.start=function(){this.easyBtn=this.node.getChildByName("EasyButton").getComponent(r),this.hardBtn=this.node.getChildByName("HardButton").getComponent(r),this.easyBtn.node.on(a.TOUCH_END,this.startEasyMode,this),this.hardBtn.node.on(a.TOUCH_END,this.startHardMode,this),this.orangeBtn=this.node.getChildByName("orangeBtn").getComponent(r),this.orangeBtn.node.on(a.TOUCH_END,this.changeColor,this),this.greenBtn=this.node.getChildByName("greenBtn").getComponent(r),this.greenBtn.node.on(a.TOUCH_END,this.changeColor,this),this.changeColor()},n.update=function(t){},n.startEasyMode=function(){i.loadScene("easyMode")},n.startHardMode=function(){i.loadScene("game")},o.getColor=function(){return this.color},n.changeColor=function(){this.defaultColor?(this.orangeBtn.node.active=!0,this.greenBtn.node.active=!1,o.color="orange"):(this.orangeBtn.node.active=!1,this.greenBtn.node.active=!0,o.color="green"),console.log(this.defaultColor),this.defaultColor=!this.defaultColor},o}(s)).color="orange",h=d))||h);o._RF.pop()}}}));

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});