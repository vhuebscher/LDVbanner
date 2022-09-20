(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"G10animationTEST_atlas_1", frames: [[460,252,90,74],[304,0,300,250],[681,330,108,13],[791,338,108,13],[0,0,302,250],[179,329,266,49],[867,280,155,56],[867,181,92,97],[179,380,160,55],[341,380,91,38],[179,252,279,75],[606,0,339,179],[447,330,232,54],[0,252,177,203],[606,181,259,147]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_1 = function() {
	this.initialize(ss["G10animationTEST_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.bg_smaller = function() {
	this.initialize(ss["G10animationTEST_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CTA = function() {
	this.initialize(ss["G10animationTEST_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CTA_BLACK = function() {
	this.initialize(ss["G10animationTEST_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.dash = function() {
	this.initialize(ss["G10animationTEST_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.headline = function() {
	this.initialize(ss["G10animationTEST_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.headline3 = function() {
	this.initialize(ss["G10animationTEST_atlas_1"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.headline_2 = function() {
	this.initialize(ss["G10animationTEST_atlas_1"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.headline_4 = function() {
	this.initialize(ss["G10animationTEST_atlas_1"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.logo = function() {
	this.initialize(ss["G10animationTEST_atlas_1"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.redbox = function() {
	this.initialize(ss["G10animationTEST_atlas_1"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.revised_van_shadow = function() {
	this.initialize(ss["G10animationTEST_atlas_1"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.ScreenShot20220126at73547pm = function() {
	this.initialize(ss["G10animationTEST_atlas_1"]);
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.VEHICLE_ANGLE2 = function() {
	this.initialize(ss["G10animationTEST_atlas_1"]);
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.vehilce = function() {
	this.initialize(ss["G10animationTEST_atlas_1"]);
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.VEHICLE3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.revised_van_shadow();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,339,179);


(lib.VEHICLE_ANGLE2_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.VEHICLE_ANGLE2();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,177,203);


(lib.UTE = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.vehilce();

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0066CC").s().p("AhKBLIAAiVICVAAIAACVg");
	this.shape.setTransform(159.5,91.55);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,259,147);


(lib.Tween2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.headline();
	this.instance.setTransform(-133,-24.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-133,-24.5,266,49);


(lib.Tween1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.redbox();
	this.instance.setTransform(-139.5,-37.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-139.5,-37.5,279,75);


(lib.MODELNAME = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// type_outlined
	this.instance = new lib.CachedBmp_1();
	this.instance.setTransform(0,0,0.8211,0.8211);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,73.9,60.8);


(lib.HEADLINE_4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.headline_4();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,160,55);


(lib.HEADLINE_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.headline3();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,155,56);


(lib.HEADLINE_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.headline_2();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,92,97);


(lib.CTA_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CTA();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,108,13);


(lib.BLACKTEXTCTA = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CTA_BLACK();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,108,13);


(lib.BLACKLDV = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.ScreenShot20220126at73547pm();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,232,54);


(lib.BACKGROUND_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.dash();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,302,250);


(lib.background = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.bg_smaller();
	this.instance.setTransform(0,-1,1.008,1.008);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-1,302.4,252);


(lib.LOGO = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.instance = new lib.BLACKLDV("synched",0);
	this.instance.setTransform(22.3,33.2,0.1906,0.2145,0,0,0,115.7,27.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_1
	this.instance_1 = new lib.logo();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,91,39);


(lib.BUTTON = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// TEXT
	this.instance = new lib.CTA_1("synched",0);
	this.instance.setTransform(62,13.05,1,1,0,0,0,54,6.5);

	this.instance_1 = new lib.BLACKTEXTCTA("synched",0);
	this.instance_1.setTransform(63,14.05,1,1,0,0,0,54,6.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1},{t:this.instance}]},1).to({state:[]},1).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#BD331A").s().p("ApmCCIAAkDITNAAIAAEDg");
	this.shape.setTransform(62,13.05);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFD05B").s().p("ApmCCIAAkDITNAAIAAEDg");
	this.shape_1.setTransform(61.5,13);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,123.5,26.1);


// stage content:
(lib.G10animationTEST = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// LOGO
	this.instance = new lib.LOGO("synched",0);
	this.instance.setTransform(52,225,1,1,0,0,0,45.5,19);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},84).wait(161).to({_off:false},0).wait(50));

	// BUTTON
	this.instance_1 = new lib.BUTTON();
	this.instance_1.setTransform(170,216);
	new cjs.ButtonHelper(this.instance_1, 0, 1, 2, false, new lib.BUTTON(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(295));

	// MODEL_NAME
	this.instance_2 = new lib.MODELNAME("synched",0);
	this.instance_2.setTransform(248.15,57.45,1.2178,1.2152,0,0,0,37.1,30.6);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(47).to({_off:false},0).to({alpha:1},5).to({startPosition:0},31).to({alpha:0},2).to({startPosition:0},1).to({startPosition:0},164).to({alpha:1},2).to({startPosition:0},42).wait(1));

	// HEADLINE_4
	this.instance_3 = new lib.HEADLINE_4("synched",0);
	this.instance_3.setTransform(185.5,44.05,1,1,0,0,0,80,27.5);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(188).to({_off:false},0).wait(56).to({startPosition:0},0).to({alpha:0},3).wait(7).to({startPosition:0},0).wait(40).to({startPosition:0},0).wait(1));

	// HEADLINE_3
	this.instance_4 = new lib.HEADLINE_3("synched",0);
	this.instance_4.setTransform(187.5,43,1,1,0,0,0,77.5,28);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(138).to({_off:false},0).to({alpha:1},4).to({startPosition:0},39).to({alpha:0},3).to({_off:true},6).wait(105));

	// HEADLINE_2
	this.instance_5 = new lib.HEADLINE_2("synched",0);
	this.instance_5.setTransform(219,62.95,1,1,0,0,0,46,48.5);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(86).to({_off:false},0).to({alpha:1},2).to({startPosition:0},41).to({_off:true},4).wait(162));

	// HEADLINE
	this.instance_6 = new lib.Tween2("synched",0);
	this.instance_6.setTransform(150,49.5);
	this.instance_6.alpha = 0.0117;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(9).to({_off:false},0).to({alpha:1},5).to({startPosition:0},26).to({alpha:0},11).to({startPosition:0},29).to({startPosition:0},5).to({_off:true},4).wait(40).to({_off:false},0).to({startPosition:0},4).to({startPosition:0},5).to({startPosition:0},4).to({startPosition:0},39).to({startPosition:0},5).to({startPosition:0},4).to({startPosition:0},54).to({startPosition:0},5).to({startPosition:0},5).to({startPosition:0},40).wait(1));

	// VEHICLE3
	this.instance_7 = new lib.VEHICLE3("synched",0);
	this.instance_7.setTransform(-172,178.85,1.1183,1.1183,0,0,0,169,86);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(133).to({_off:false},0).to({scaleX:1,scaleY:1,x:96,y:142.05},5).wait(4).to({startPosition:0},0).wait(39).to({startPosition:0},0).to({x:-178.1,y:169.05},3).to({_off:true},6).wait(105));

	// VEHICLE2
	this.instance_8 = new lib.VEHICLE_ANGLE2_1("synched",0);
	this.instance_8.setTransform(88.5,130.1,0.6949,0.6949,0,0,0,88.5,101.5);
	this.instance_8.alpha = 0.3789;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(85).to({_off:false},0).to({scaleX:1,scaleY:1,y:130.05,alpha:1},4).to({startPosition:0},40).to({scaleX:0.3672,scaleY:0.3672,alpha:0},4).to({startPosition:0},5).to({startPosition:0},4).to({startPosition:0},39).to({startPosition:0},5).to({startPosition:0},4).to({startPosition:0},54).to({startPosition:0},5).to({startPosition:0},5).to({startPosition:0},40).wait(1));

	// VEHICLE
	this.instance_9 = new lib.UTE("synched",0);
	this.instance_9.setTransform(-56,147.05,0.6899,0.6899,0,0,0,129.4,73.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({regX:129.5,scaleX:1,scaleY:1,x:134,y:152.05},14).to({startPosition:0},26).to({startPosition:0},17).to({startPosition:0},23).to({scaleX:1.1467,scaleY:1.1467,x:459.6,y:182.1},5).to({_off:true},4).wait(157).to({_off:false,regY:73.6,scaleX:0.551,scaleY:0.551,x:-76,y:152.1},0).to({regY:73.5,scaleX:1,scaleY:1,x:134,y:152.05},3).to({startPosition:0},5).to({startPosition:0},40).wait(1));

	// RED_BOX_HEADLINE
	this.instance_10 = new lib.Tween1("synched",0);
	this.instance_10.setTransform(441.5,47.5);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(5).to({_off:false},0).to({x:151.5},9).to({startPosition:0},26).to({scaleX:0.2692,x:231.5},6).to({startPosition:0},34).to({startPosition:0},4).to({regY:0.1,scaleX:0.4048,scaleY:1.4378,x:215.5,y:63.7},3).to({startPosition:0},46).to({regY:0,scaleX:0.2692,scaleY:1,x:231.5,y:47.5},5).to({scaleX:0.6559,x:178.25},4).to({startPosition:0},39).to({scaleX:0.0756,x:318.3},5).to({scaleX:0.6559,x:178.25},4).to({startPosition:0},54).to({scaleX:0.0681,x:328.3},5).to({scaleX:0.2692,x:231.5},2).to({startPosition:0},43).wait(1));

	// BACKGROUND_2
	this.instance_11 = new lib.BACKGROUND_2("synched",0);
	this.instance_11.setTransform(148.2,122.9,1.0476,1.048,0,0,0,149.9,121);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(186).to({_off:false},0).wait(58).to({regX:151,scaleX:1,scaleY:1,x:154.9,y:123.05},0).to({_off:true},1).wait(50));

	// BACKGROUND
	this.instance_12 = new lib.background("synched",0);
	this.instance_12.setTransform(151,123.05,1,1,0,0,0,151,123);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(295));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-211,121.1,819.1,161.79999999999998);
// library properties:
lib.properties = {
	id: 'E6D9FC9B80D84A4DA0DCDE9C07BEB127',
	width: 300,
	height: 250,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/G10animationTEST_atlas_1.png?1643190101184", id:"G10animationTEST_atlas_1"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['E6D9FC9B80D84A4DA0DCDE9C07BEB127'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;