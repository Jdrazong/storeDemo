import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Select extends Component {
    componentDidMount() {
        const { options } = this.props;

        if (options.length) {
            this.handleChange(options[0].value);
        }
    }

    componentWillReceiveProps(nextProps) {
        const { options } = this.props;
        const optionsChanged = options.length !== nextProps.options.length;

        this.setDefaultOption(optionsChanged, nextProps.options);
    }

    setDefaultOption = (optionsChanged, newOptions) => {
        if (optionsChanged) {
            this.handleChange(newOptions[0].value);
        }
    };

    handleChange = event => (event.target ? this.props.handleChange(event.target.value) : this.props.handleChange(event));

    render() {
        const {
            selectLabelId,
            className,
            labelValue,
            value,
            options,
            labelClassName,
            shouldRender
        } = this.props;

        return shouldRender && (
            <div className={`select-container ${className}`}>
                <label
                    className={labelClassName}
                    htmlFor={selectLabelId}
                >
                    {labelValue}
                </label>
                <select
                    className="select"
                    id={selectLabelId}
                    value={value}
                    default={options[0].value}
                    onChange={this.handleChange}
                >
                    {options.map(option => (
                        <option
                            key={option.value}
                            value={option.value}
                        >
                            {option.text}
                        </option>
                    ))}
                </select>
            </div>
        );
    }
}

Select.propTypes = {
    className: PropTypes.string.isRequired,
    labelValue: PropTypes.string.isRequired,
    selectLabelId: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired,
    labelClassName: PropTypes.string.isRequired,
    options: PropTypes.arrayOf(PropTypes.shape({ value: PropTypes.string, text: PropTypes.string })).isRequired,
    shouldRender: PropTypes.bool.isRequired
};

export default Select;
