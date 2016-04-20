(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'react'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react);
    global.index = mod.exports;
  }
})(this, function (exports, _react) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }

  var DynamicForm = function (_Component) {
    _inherits(DynamicForm, _Component);

    function DynamicForm(props) {
      _classCallCheck(this, DynamicForm);

      var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(DynamicForm).call(this, props));

      _this.state = {
        errors: []
      };
      return _this;
    }

    _createClass(DynamicForm, [{
      key: 'handleSubmit',
      value: function handleSubmit(e) {
        var _this2 = this;

        e.preventDefault();
        if (this.validateForm()) {
          (function () {
            var formData = {};
            _this2.props.inputs.map(function (i) {
              return formData[i.name] = _this2.refs[i.name].value;
            });
            _this2.props.callBack(formData);
            _this2.props.inputs.map(function (i) {
              return _this2.refs[i.name].value = '';
            });
            _this2.setState({ errors: [] });
          })();
        }
      }
    }, {
      key: 'validateForm',
      value: function validateForm() {
        var _this3 = this;

        var responses = [];
        this.props.inputs.map(function (i) {
          return responses.push([i.name, _this3.refs[i.name].value]);
        });
        var invalidFields = responses.filter(function (r) {
          return r[1] === '';
        });
        return invalidFields.length > 0 ? this.setError(invalidFields) : true;
      }
    }, {
      key: 'setError',
      value: function setError(invalidFields) {
        this.setState({ errors: invalidFields.map(function (f) {
            return f[0];
          }) });
        return false;
      }
    }, {
      key: 'render',
      value: function render() {
        var inputs = this.props.inputs;
        var errors = this.state.errors;

        var fields = inputs.map(function (input, idx) {
          var inputClasses = errors.filter(function (e) {
            return e === input.name;
          }).length ? "form-group has-error" : "form-group";
          return _react2.default.createElement(
            'div',
            { className: inputClasses, key: idx },
            _react2.default.createElement(
              'label',
              { className: 'control-label' },
              input.name
            ),
            _react2.default.createElement('input', { className: 'form-control', name: input.name, ref: input.name, type: input.type })
          );
        });
        return _react2.default.createElement(
          'form',
          { onSubmit: this.handleSubmit.bind(this) },
          fields,
          _react2.default.createElement(
            'div',
            { className: 'form-group' },
            _react2.default.createElement(
              'button',
              { className: 'btn btn-success', type: 'submit' },
              'Submit'
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'alert alert-danger', style: { display: errors.length > 0 ? 'block' : 'none' }, role: 'alert' },
            _react2.default.createElement('span', { className: 'glyphicon glyphicon-exclamation-sign', 'aria-hidden': 'true' }),
            _react2.default.createElement(
              'span',
              { className: 'sr-only' },
              'Error:'
            ),
            '  Fields are missing'
          )
        );
      }
    }]);

    return DynamicForm;
  }(_react.Component);

  exports.default = DynamicForm;
});