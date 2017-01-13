Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactNative=require('react-native');
var _reactNativeRootSiblings=require('react-native-root-siblings');var _reactNativeRootSiblings2=_interopRequireDefault(_reactNativeRootSiblings);

var _SnackBar=require('./SnackBar');var _SnackBar2=_interopRequireDefault(_SnackBar);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}var

SnackBarManager=function(){
function SnackBarManager(){_classCallCheck(this,SnackBarManager);
this.current=null;
this.queue=[];
}_createClass(SnackBarManager,[{key:'_hasQueue',value:function _hasQueue()

{
return Array.isArray(this.queue)&&this.queue.length;
}},{key:'_addCurrent',value:function _addCurrent(

props){
this.current=new _reactNativeRootSiblings2.default(_react2.default.createElement(_SnackBar2.default,_extends({},props,{onDismiss:this.dismiss})));
return this;
}},{key:'_updateCurrent',value:function _updateCurrent(

props){
if(!this.current){
return this._addCurrent(props);
}




return this.
_removeCurrent().
_addCurrent(props);
}},{key:'_removeCurrent',value:function _removeCurrent()

{
if(!this.current){
return this;
}

this.current.destroy();
this.current=null;

return this;
}},{key:'add',value:function add(

props){
if(this.current){
this.queue.push(props);
return;
}

this._addCurrent(props);
}},{key:'show',value:function show(

props){
this._updateCurrent(props);
}},{key:'dismiss',value:function dismiss()

{
this._removeCurrent();

if(!this._hasQueue()){
return;
}

var current=this.queue.shift();
this._addCurrent(current);
}}]);return SnackBarManager;}();exports.default=SnackBarManager;
//# sourceMappingURL=index.js.map