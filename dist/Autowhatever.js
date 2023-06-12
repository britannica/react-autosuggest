'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports['default'] = void 0;
var _react = _interopRequireWildcard(require('react'));
var _propTypes = _interopRequireDefault(require('prop-types'));
var _sectionIterator = _interopRequireDefault(require('section-iterator'));
var _reactThemeable = _interopRequireDefault(require('react-themeable'));
var _SectionTitle = _interopRequireDefault(require('./SectionTitle'));
var _ItemList = _interopRequireDefault(require('./ItemList'));
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
function _slicedToArray(arr, i) {
  return (
    _arrayWithHoles(arr) ||
    _iterableToArrayLimit(arr, i) ||
    _unsupportedIterableToArray(arr, i) ||
    _nonIterableRest()
  );
}
function _nonIterableRest() {
  throw new TypeError(
    'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
  );
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === 'string') return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === 'Object' && o.constructor) n = o.constructor.name;
  if (n === 'Map' || n === 'Set') return Array.from(o);
  if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
function _iterableToArrayLimit(arr, i) {
  var _i =
    null == arr
      ? null
      : ('undefined' != typeof Symbol && arr[Symbol.iterator]) ||
        arr['@@iterator'];
  if (null != _i) {
    var _s,
      _e,
      _x,
      _r,
      _arr = [],
      _n = !0,
      _d = !1;
    try {
      if (((_x = (_i = _i.call(arr)).next), 0 === i)) {
        if (Object(_i) !== _i) return;
        _n = !1;
      } else
        for (
          ;
          !(_n = (_s = _x.call(_i)).done) &&
          (_arr.push(_s.value), _arr.length !== i);
          _n = !0
        );
    } catch (err) {
      (_d = !0), (_e = err);
    } finally {
      try {
        if (
          !_n &&
          null != _i['return'] &&
          ((_r = _i['return']()), Object(_r) !== _r)
        )
          return;
      } finally {
        if (_d) throw _e;
      }
    }
    return _arr;
  }
}
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
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
var emptyObject = {};
var defaultRenderInputComponent = function defaultRenderInputComponent(props) {
  return /*#__PURE__*/ _react['default'].createElement('input', props);
};
var defaultRenderItemsContainer = function defaultRenderItemsContainer(_ref) {
  var containerProps = _ref.containerProps,
    children = _ref.children;
  return /*#__PURE__*/ _react['default'].createElement(
    'div',
    containerProps,
    children
  );
};
var defaultTheme = {
  container: 'react-autowhatever__container',
  containerOpen: 'react-autowhatever__container--open',
  input: 'react-autowhatever__input',
  inputOpen: 'react-autowhatever__input--open',
  inputFocused: 'react-autowhatever__input--focused',
  itemsContainer: 'react-autowhatever__items-container',
  itemsContainerOpen: 'react-autowhatever__items-container--open',
  itemsList: 'react-autowhatever__items-list',
  item: 'react-autowhatever__item',
  itemFirst: 'react-autowhatever__item--first',
  itemHighlighted: 'react-autowhatever__item--highlighted',
  sectionContainer: 'react-autowhatever__section-container',
  sectionContainerFirst: 'react-autowhatever__section-container--first',
  sectionTitle: 'react-autowhatever__section-title',
};
var Autowhatever = /*#__PURE__*/ (function (_Component) {
  _inherits(Autowhatever, _Component);
  var _super = _createSuper(Autowhatever);
  function Autowhatever(props) {
    var _this;
    _classCallCheck(this, Autowhatever);
    _this = _super.call(this, props);
    _defineProperty(
      _assertThisInitialized(_this),
      'storeInputReference',
      function (input) {
        if (input !== null) {
          _this.input = input;
        }
        var userRef = _this.props.inputProps.ref;
        if (userRef) {
          if (typeof userRef === 'function') {
            userRef(input);
          } else if (
            _typeof(userRef) === 'object' &&
            Object.prototype.hasOwnProperty.call(userRef, 'current')
          ) {
            userRef.current = input;
          }
        }
      }
    );
    _defineProperty(
      _assertThisInitialized(_this),
      'storeItemsContainerReference',
      function (itemsContainer) {
        if (itemsContainer !== null) {
          _this.itemsContainer = itemsContainer;
        }
      }
    );
    _defineProperty(
      _assertThisInitialized(_this),
      'onHighlightedItemChange',
      function (highlightedItem) {
        _this.highlightedItem = highlightedItem;
      }
    );
    _defineProperty(
      _assertThisInitialized(_this),
      'getItemId',
      function (sectionIndex, itemIndex) {
        if (itemIndex === null) {
          return null;
        }
        var id = _this.props.id;
        var section =
          sectionIndex === null ? '' : 'section-'.concat(sectionIndex);
        return 'react-autowhatever-'
          .concat(id, '-')
          .concat(section, '-item-')
          .concat(itemIndex);
      }
    );
    _defineProperty(_assertThisInitialized(_this), 'onFocus', function (event) {
      var inputProps = _this.props.inputProps;
      _this.setState({
        isInputFocused: true,
      });
      inputProps.onFocus && inputProps.onFocus(event);
    });
    _defineProperty(_assertThisInitialized(_this), 'onBlur', function (event) {
      var inputProps = _this.props.inputProps;
      _this.setState({
        isInputFocused: false,
      });
      inputProps.onBlur && inputProps.onBlur(event);
    });
    _defineProperty(
      _assertThisInitialized(_this),
      'onKeyDown',
      function (event) {
        var _this$props = _this.props,
          inputProps = _this$props.inputProps,
          highlightedSectionIndex = _this$props.highlightedSectionIndex,
          highlightedItemIndex = _this$props.highlightedItemIndex;
        var keyCode = event.keyCode;
        switch (keyCode) {
          case 40: // ArrowDown
          case 38: {
            // ArrowUp
            var nextPrev = keyCode === 40 ? 'next' : 'prev';
            var _this$sectionIterator = _this.sectionIterator[nextPrev]([
                highlightedSectionIndex,
                highlightedItemIndex,
              ]),
              _this$sectionIterator2 = _slicedToArray(_this$sectionIterator, 2),
              newHighlightedSectionIndex = _this$sectionIterator2[0],
              newHighlightedItemIndex = _this$sectionIterator2[1];
            inputProps.onKeyDown(event, {
              newHighlightedSectionIndex: newHighlightedSectionIndex,
              newHighlightedItemIndex: newHighlightedItemIndex,
            });
            break;
          }
          default:
            inputProps.onKeyDown(event, {
              highlightedSectionIndex: highlightedSectionIndex,
              highlightedItemIndex: highlightedItemIndex,
            });
        }
      }
    );
    _this.highlightedItem = null;
    _this.state = {
      isInputFocused: false,
    };
    _this.setSectionsItems(props);
    _this.setSectionIterator(props);
    _this.setTheme(props);
    return _this;
  }
  _createClass(Autowhatever, [
    {
      key: 'componentDidMount',
      value: function componentDidMount() {
        this.ensureHighlightedItemIsVisible();
      },

      // eslint-disable-next-line camelcase, react/sort-comp
    },
    {
      key: 'UNSAFE_componentWillReceiveProps',
      value: function UNSAFE_componentWillReceiveProps(nextProps) {
        if (nextProps.items !== this.props.items) {
          this.setSectionsItems(nextProps);
        }
        if (
          nextProps.items !== this.props.items ||
          nextProps.multiSection !== this.props.multiSection
        ) {
          this.setSectionIterator(nextProps);
        }
        if (nextProps.theme !== this.props.theme) {
          this.setTheme(nextProps);
        }
      },
    },
    {
      key: 'componentDidUpdate',
      value: function componentDidUpdate() {
        this.ensureHighlightedItemIsVisible();
      },
    },
    {
      key: 'setSectionsItems',
      value: function setSectionsItems(props) {
        if (props.multiSection) {
          this.sectionsItems = props.items.map(function (section) {
            return props.getSectionItems(section);
          });
          this.sectionsLengths = this.sectionsItems.map(function (items) {
            return items.length;
          });
          this.allSectionsAreEmpty = this.sectionsLengths.every(function (
            itemsCount
          ) {
            return itemsCount === 0;
          });
        }
      },
    },
    {
      key: 'setSectionIterator',
      value: function setSectionIterator(props) {
        this.sectionIterator = (0, _sectionIterator['default'])({
          multiSection: props.multiSection,
          data: props.multiSection ? this.sectionsLengths : props.items.length,
        });
      },
    },
    {
      key: 'setTheme',
      value: function setTheme(props) {
        this.theme = (0, _reactThemeable['default'])(props.theme);
      },
    },
    {
      key: 'renderSections',
      value: function renderSections() {
        var _this2 = this;
        if (this.allSectionsAreEmpty) {
          return null;
        }
        var theme = this.theme;
        var _this$props2 = this.props,
          id = _this$props2.id,
          items = _this$props2.items,
          renderItem = _this$props2.renderItem,
          renderItemData = _this$props2.renderItemData,
          renderSectionTitle = _this$props2.renderSectionTitle,
          highlightedSectionIndex = _this$props2.highlightedSectionIndex,
          highlightedItemIndex = _this$props2.highlightedItemIndex,
          itemProps = _this$props2.itemProps,
          suggestionListProps = _this$props2.suggestionListProps;
        return items.map(function (section, sectionIndex) {
          var keyPrefix = 'react-autowhatever-'.concat(id, '-');
          var sectionKeyPrefix = ''
            .concat(keyPrefix, 'section-')
            .concat(sectionIndex, '-');
          var isFirstSection = sectionIndex === 0;

          // `key` is provided by theme()
          /* eslint-disable react/jsx-key */
          return /*#__PURE__*/ _react['default'].createElement(
            'div',
            theme(
              ''.concat(sectionKeyPrefix, 'container'),
              'sectionContainer',
              isFirstSection && 'sectionContainerFirst'
            ),
            /*#__PURE__*/ _react['default'].createElement(
              _SectionTitle['default'],
              {
                section: section,
                renderSectionTitle: renderSectionTitle,
                theme: theme,
                sectionKeyPrefix: sectionKeyPrefix,
              }
            ),
            /*#__PURE__*/ _react['default'].createElement(
              _ItemList['default'],
              {
                items: _this2.sectionsItems[sectionIndex],
                itemProps: itemProps,
                renderItem: renderItem,
                renderItemData: renderItemData,
                sectionIndex: sectionIndex,
                highlightedItemIndex:
                  highlightedSectionIndex === sectionIndex
                    ? highlightedItemIndex
                    : null,
                onHighlightedItemChange: _this2.onHighlightedItemChange,
                getItemId: _this2.getItemId,
                itemsContainerProps: suggestionListProps,
                theme: theme,
                keyPrefix: keyPrefix,
                ref: _this2.storeItemsListReference,
              }
            )
          );
          /* eslint-enable react/jsx-key */
        });
      },
    },
    {
      key: 'renderItems',
      value: function renderItems() {
        var items = this.props.items;
        if (items.length === 0) {
          return null;
        }
        var theme = this.theme;
        var _this$props3 = this.props,
          id = _this$props3.id,
          suggestionListProps = _this$props3.suggestionListProps,
          renderItem = _this$props3.renderItem,
          renderItemData = _this$props3.renderItemData,
          highlightedSectionIndex = _this$props3.highlightedSectionIndex,
          highlightedItemIndex = _this$props3.highlightedItemIndex,
          itemProps = _this$props3.itemProps;
        return /*#__PURE__*/ _react['default'].createElement(
          _ItemList['default'],
          {
            items: items,
            itemsContainerProps: suggestionListProps,
            itemProps: itemProps,
            renderItem: renderItem,
            renderItemData: renderItemData,
            highlightedItemIndex:
              highlightedSectionIndex === null ? highlightedItemIndex : null,
            onHighlightedItemChange: this.onHighlightedItemChange,
            getItemId: this.getItemId,
            theme: theme,
            keyPrefix: 'react-autowhatever-'.concat(id, '-'),
          }
        );
      },
    },
    {
      key: 'ensureHighlightedItemIsVisible',
      value: function ensureHighlightedItemIsVisible() {
        var highlightedItem = this.highlightedItem;
        if (!highlightedItem) {
          return;
        }
        var itemsContainer = this.itemsContainer;
        var itemOffsetRelativeToContainer =
          highlightedItem.offsetParent === itemsContainer
            ? highlightedItem.offsetTop
            : highlightedItem.offsetTop - itemsContainer.offsetTop;
        var scrollTop = itemsContainer.scrollTop; // Top of the visible area

        if (itemOffsetRelativeToContainer < scrollTop) {
          // Item is off the top of the visible area
          scrollTop = itemOffsetRelativeToContainer;
        } else if (
          itemOffsetRelativeToContainer + highlightedItem.offsetHeight >
          scrollTop + itemsContainer.offsetHeight
        ) {
          // Item is off the bottom of the visible area
          scrollTop =
            itemOffsetRelativeToContainer +
            highlightedItem.offsetHeight -
            itemsContainer.offsetHeight;
        }
        if (scrollTop !== itemsContainer.scrollTop) {
          itemsContainer.scrollTop = scrollTop;
        }
      },
    },
    {
      key: 'render',
      value: function render() {
        var theme = this.theme;
        var _this$props4 = this.props,
          id = _this$props4.id,
          items = _this$props4.items,
          multiSection = _this$props4.multiSection,
          renderInputComponent = _this$props4.renderInputComponent,
          renderItemsContainer = _this$props4.renderItemsContainer,
          highlightedSectionIndex = _this$props4.highlightedSectionIndex,
          highlightedItemIndex = _this$props4.highlightedItemIndex;
        var isInputFocused = this.state.isInputFocused;
        var renderedItems = multiSection
          ? this.renderSections()
          : this.renderItems();
        var isOpen = renderedItems !== null;
        var ariaActivedescendant = this.getItemId(
          highlightedSectionIndex,
          highlightedItemIndex
        );
        var itemsContainerId = 'react-autowhatever-'.concat(id);
        var containerProps = _objectSpread(
          _objectSpread(
            {
              role: 'combobox',
              'aria-haspopup': 'listbox',
              'aria-owns': items.length ? itemsContainerId : undefined,
              'aria-controls': items.length ? itemsContainerId : undefined,
              'aria-expanded': isOpen,
            },
            theme(
              'react-autowhatever-'.concat(id, '-container'),
              'container',
              isOpen && 'containerOpen'
            )
          ),
          this.props.containerProps
        );
        var inputComponent = renderInputComponent(
          _objectSpread(
            _objectSpread(
              _objectSpread(
                {
                  type: 'text',
                  value: '',
                  autoComplete: 'off',
                  'aria-autocomplete': 'list',
                  'aria-controls': items.length ? itemsContainerId : undefined,
                  'aria-activedescendant': ariaActivedescendant,
                },
                theme(
                  'react-autowhatever-'.concat(id, '-input'),
                  'input',
                  isOpen && 'inputOpen',
                  isInputFocused && 'inputFocused'
                )
              ),
              this.props.inputProps
            ),
            {},
            {
              onFocus: this.onFocus,
              onBlur: this.onBlur,
              onKeyDown: this.props.inputProps.onKeyDown && this.onKeyDown,
              ref: this.storeInputReference,
            }
          )
        );
        var itemsContainer = renderItemsContainer({
          containerProps: _objectSpread(
            _objectSpread(
              {
                id: itemsContainerId,
              },
              theme(
                'react-autowhatever-'.concat(id, '-items-container'),
                'itemsContainer',
                isOpen && 'itemsContainerOpen'
              )
            ),
            {},
            {
              ref: this.storeItemsContainerReference,
            }
          ),
          children: renderedItems,
        });
        return /*#__PURE__*/ _react['default'].createElement(
          'div',
          containerProps,
          inputComponent,
          itemsContainer
        );
      },
    },
  ]);
  return Autowhatever;
})(_react.Component);
exports['default'] = Autowhatever;
_defineProperty(Autowhatever, 'propTypes', {
  id: _propTypes['default'].string,
  // Used in aria-* attributes. If multiple Autowhatever's are rendered on a page, they must have unique ids.
  multiSection: _propTypes['default'].bool,
  // Indicates whether a multi section layout should be rendered.
  renderInputComponent: _propTypes['default'].func,
  // When specified, it is used to render the input element.
  renderItemsContainer: _propTypes['default'].func,
  // Renders the items container.
  items: _propTypes['default'].array.isRequired,
  // Array of items or sections to render.
  renderItem: _propTypes['default'].func,
  // This function renders a single item.
  renderItemData: _propTypes['default'].object,
  // Arbitrary data that will be passed to renderItem()
  renderSectionTitle: _propTypes['default'].func,
  // This function gets a section and renders its title.
  getSectionItems: _propTypes['default'].func,
  // This function gets a section and returns its items, which will be passed into `renderItem` for rendering.
  containerProps: _propTypes['default'].object,
  // Arbitrary container props
  suggestionListProps: _propTypes['default'].object,
  // Arbitrary suggestion list props
  inputProps: _propTypes['default'].object,
  // Arbitrary input props
  itemProps: _propTypes['default'].oneOfType([
    // Arbitrary item props
    _propTypes['default'].object,
    _propTypes['default'].func,
  ]),
  highlightedSectionIndex: _propTypes['default'].number,
  // Section index of the highlighted item
  highlightedItemIndex: _propTypes['default'].number,
  // Highlighted item index (within a section)
  theme: _propTypes['default'].oneOfType([
    // Styles. See: https://github.com/markdalgleish/react-themeable
    _propTypes['default'].object,
    _propTypes['default'].array,
  ]),
});
_defineProperty(Autowhatever, 'defaultProps', {
  id: '1',
  multiSection: false,
  renderInputComponent: defaultRenderInputComponent,
  renderItemsContainer: defaultRenderItemsContainer,
  renderItem: function renderItem() {
    throw new Error('`renderItem` must be provided');
  },
  renderItemData: emptyObject,
  renderSectionTitle: function renderSectionTitle() {
    throw new Error('`renderSectionTitle` must be provided');
  },
  getSectionItems: function getSectionItems() {
    throw new Error('`getSectionItems` must be provided');
  },
  containerProps: emptyObject,
  suggestionListProps: emptyObject,
  inputProps: emptyObject,
  itemProps: emptyObject,
  highlightedSectionIndex: null,
  highlightedItemIndex: null,
  theme: defaultTheme,
});
