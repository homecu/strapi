import React from 'react';
import PropTypes from 'prop-types';

import InputText from 'components/InputsIndex';

import InlineBlock from './InlineBlock';
import ModelPicker from './ModelPicker';

import styles from './styles.scss';

const RelationBox = ({
  main,
  models,
  modelName,
  nature,
  onChange,
  onClick,
  selectedModel,
  plugin,
  source,
  value,
}) => {
  return (
    <InlineBlock>
      <div className={styles.relationBox}>
        <div className={styles.relationBoxHeader}>
          {main ? (
            <p>
              <i className="fa fa-caret-square-o-right" />
              {modelName}
              {!!source && <span style={{ fontStyle: 'italic', fontWeight: '500' }}>&nbsp;({source})</span>}
            </p>
          ) : (
            <ModelPicker models={models} onClick={onClick} plugin={plugin} selectedModel={selectedModel} />
          )}
        </div>
        <div className={styles.relationBoxBody}>
          <InputText
            label="Field Name"
            disabled={value === '-' || nature === 'oneWay'}
            name={main ? 'name' : 'key'}
            onChange={onChange}
            type="text"
            value={nature === 'oneWay' ? '-' : value}
          />
        </div>
      </div>
    </InlineBlock>
  );
};

RelationBox.defaultProps = {
  main: false,
  modelName: '',
  models: [],
  nature: null,
  onClick: () => {},
  plugin: null,
  selectedModel: null,
  source: null,
};

RelationBox.propTypes = {
  main: PropTypes.bool,
  modelName: PropTypes.string,
  models: PropTypes.array,
  nature: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onClick: PropTypes.func,
  plugin: PropTypes.string,
  selectedModel: PropTypes.string,
  source: PropTypes.string,
  value: PropTypes.string.isRequired,
};

export default RelationBox;
