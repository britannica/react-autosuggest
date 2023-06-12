'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports['default'] = void 0;
var _react = _interopRequireWildcard(require('react'));
var _propTypes = _interopRequireDefault(require('prop-types'));
var _Item = _interopRequireDefault(require('./Item'));
var _compareObjects = _interopRequireDefault(require('./compareObjects'));
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
function _getRequireWildcardCache(nodeInterop) {
  if (typeof WeakMap !== 'function') return null;
  var cacheBabelInterop = new WeakMap();
  var cacheNodeInterop = new WeakMap();
  return (_getRequireWildcardCache = function _getRequireWildcardCache(
    nodeInterop
  ) {
    return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
  })(nodeInterop);
}
function _interopRequireWildcard(obj, nodeInterop) {
  if (!nodeInterop && obj && obj.__esModule) {
    return obj;
  }
  if (
    obj === null ||
    (_typeof(obj) !== 'object' && typeof obj !== 'function')
  ) {
    return { default: obj };
  }
  var cache = _getRequireWildcardCache(nodeInterop);
  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }
  var newObj = {};
  var hasPropertyDescriptor =
    Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var key in obj) {
    if (key !== 'default' && Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor
        ? Object.getOwnPropertyDescriptor(obj, key)
        : null;
      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }
  newObj['default'] = obj;
  if (cache) {
    cache.set(obj, newObj);
  }
  return newObj;
}
function _typeof(obj) {
  '@babel/helpers - typeof';
  return (
    (_typeof =
      'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
        ? function (obj) {
            return typeof obj;
          }
        : function (obj) {
            return obj &&
              'function' == typeof Symbol &&
              obj.constructor === Symbol &&
              obj !== Symbol.prototype
              ? 'symbol'
              : typeof obj;
          }),
    _typeof(obj)
  );
}
function _extends() {
  _extends = Object.assign
    ? Object.assign.bind()
    : function (target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];
          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }
        return target;
      };
  return _extends.apply(this, arguments);
}
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly &&
      (symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      })),
      keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2
      ? ownKeys(Object(source), !0).forEach(function (key) {
          _defineProperty(target, key, source[key]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(
          target,
          Object.getOwnPropertyDescriptors(source)
        )
      : ownKeys(Object(source)).forEach(function (key) {
          Object.defineProperty(
            target,
            key,
            Object.getOwnPropertyDescriptor(source, key)
          );
        });
  }
  return target;
}
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError('Cannot call a class as a function');
  }
}
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ('value' in descriptor) descriptor.writable = true;
    Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, 'prototype', { writable: false });
  return Constructor;
}
function _inherits(subClass, superClass) {
  if (typeof superClass !== 'function' && superClass !== null) {
    throw new TypeError('Super expression must either be null or a function');
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: { value: subClass, writable: true, configurable: true },
  });
  Object.defineProperty(subClass, 'prototype', { writable: false });
  if (superClass) _setPrototypeOf(subClass, superClass);
}
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf
    ? Object.setPrototypeOf.bind()
    : function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
      };
  return _setPrototypeOf(o, p);
}
function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
      result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn(this, result);
  };
}
function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === 'object' || typeof call === 'function')) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError(
      'Derived constructors may only return object or undefined'
    );
  }
  return _assertThisInitialized(self);
}
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  }
  return self;
}
function _isNativeReflectConstruct() {
  if (typeof Reflect === 'undefined' || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === 'function') return true;
  try {
    Boolean.prototype.valueOf.call(
      Reflect.construct(Boolean, [], function () {})
    );
    return true;
  } catch (e) {
    return false;
  }
}
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf
    ? Object.getPrototypeOf.bind()
    : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
      };
  return _getPrototypeOf(o);
}
function _defineProperty(obj, key, value) {
  key = _toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true,
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey(arg) {
  var key = _toPrimitive(arg, 'string');
  return _typeof(key) === 'symbol' ? key : String(key);
}
function _toPrimitive(input, hint) {
  if (_typeof(input) !== 'object' || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || 'default');
    if (_typeof(res) !== 'object') return res;
    throw new TypeError('@@toPrimitive must return a primitive value.');
  }
  return (hint === 'string' ? String : Number)(input);
}
var ItemsList = /*#__PURE__*/ (function (_Component) {
  _inherits(ItemsList, _Component);
  var _super = _createSuper(ItemsList);
  function ItemsList() {
    var _this;
    _classCallCheck(this, ItemsList);
    for (
      var _len = arguments.length, args = new Array(_len), _key = 0;
      _key < _len;
      _key++
    ) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty(
      _assertThisInitialized(_this),
      'storeHighlightedItemReference',
      function (highlightedItem) {
        _this.props.onHighlightedItemChange(
          highlightedItem === null ? null : highlightedItem.item
        );
      }
    );
    return _this;
  }
  _createClass(ItemsList, [
    {
      key: 'shouldComponentUpdate',
      value: function shouldComponentUpdate(nextProps) {
        return (0, _compareObjects['default'])(nextProps, this.props, [
          'itemProps',
        ]);
      },
    },
    {
      key: 'render',
      value: function render() {
        var _this2 = this;
        var _this$props = this.props,
          id = _this$props.id,
          items = _this$props.items,
          itemsContainerProps = _this$props.itemsContainerProps,
          itemProps = _this$props.itemProps,
          renderItem = _this$props.renderItem,
          renderItemData = _this$props.renderItemData,
          sectionIndex = _this$props.sectionIndex,
          highlightedItemIndex = _this$props.highlightedItemIndex,
          getItemId = _this$props.getItemId,
          theme = _this$props.theme,
          keyPrefix = _this$props.keyPrefix;
        var sectionPrefix =
          sectionIndex === null
            ? keyPrefix
            : ''.concat(keyPrefix, 'section-').concat(sectionIndex, '-');
        var isItemPropsFunction = typeof itemProps === 'function';
        return /*#__PURE__*/ _react['default'].createElement(
          'ul',
          _extends(
            {
              id: id,
              role: 'listbox',
            },
            theme(''.concat(sectionPrefix, 'items-list'), 'itemsList'),
            itemsContainerProps
          ),
          items.map(function (item, itemIndex) {
            var isFirst = itemIndex === 0;
            var isHighlighted = itemIndex === highlightedItemIndex;
            var itemKey = ''.concat(sectionPrefix, 'item-').concat(itemIndex);
            var itemPropsObj = isItemPropsFunction
              ? itemProps({
                  sectionIndex: sectionIndex,
                  itemIndex: itemIndex,
                })
              : itemProps;
            var allItemProps = _objectSpread(
              _objectSpread(
                {
                  id: getItemId(sectionIndex, itemIndex),
                  'aria-selected': isHighlighted,
                },
                theme(
                  itemKey,
                  'item',
                  isFirst && 'itemFirst',
                  isHighlighted && 'itemHighlighted'
                )
              ),
              itemPropsObj
            );
            if (isHighlighted) {
              allItemProps.ref = _this2.storeHighlightedItemReference;
            }

            // `key` is provided by theme()
            /* eslint-disable react/jsx-key */
            return /*#__PURE__*/ _react['default'].createElement(
              _Item['default'],
              _extends({}, allItemProps, {
                sectionIndex: sectionIndex,
                isHighlighted: isHighlighted,
                itemIndex: itemIndex,
                item: item,
                renderItem: renderItem,
                renderItemData: renderItemData,
              })
            );
            /* eslint-enable react/jsx-key */
          })
        );
      },
    },
  ]);
  return ItemsList;
})(_react.Component);
exports['default'] = ItemsList;
_defineProperty(ItemsList, 'propTypes', {
  id: _propTypes['default'].string.isRequired,
  items: _propTypes['default'].array.isRequired,
  itemsContainerProps: _propTypes['default'].object.isRequired,
  itemProps: _propTypes['default'].oneOfType([
    _propTypes['default'].object,
    _propTypes['default'].func,
  ]),
  renderItem: _propTypes['default'].func.isRequired,
  renderItemData: _propTypes['default'].object.isRequired,
  sectionIndex: _propTypes['default'].number,
  highlightedItemIndex: _propTypes['default'].number,
  onHighlightedItemChange: _propTypes['default'].func.isRequired,
  getItemId: _propTypes['default'].func.isRequired,
  theme: _propTypes['default'].func.isRequired,
  keyPrefix: _propTypes['default'].string.isRequired,
});
_defineProperty(ItemsList, 'defaultProps', {
  sectionIndex: null,
});
