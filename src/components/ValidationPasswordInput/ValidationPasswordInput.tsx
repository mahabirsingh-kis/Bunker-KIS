import React, { useState, useEffect } from 'react';
import { Form, Input, Typography } from 'antd';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

import { Colors } from '../../theme';

const { Text } = Typography;

const ValidationPasswordContainer = styled.div`
  .password-validator {
    padding-left: 15px;
    margin-left: 8px;
    li {
      span.ant-typography {
        font-size: 12px;
        line-height: 18px;
        display: block;
        color: ${Colors.grey4};
      }
    }
    li {
      ::marker {
        font-size: 18px;
        line-height: 0.8;
        color: ${Colors.grey4};
      }
    }
    li.valid {
      ::marker {
        color: ${Colors.success5};
      }
      span.ant-typography {
        color: ${Colors.black08};
      }
    }
  }
`;

interface Rule {
  required: boolean;
  errorMessage: string;
}

interface ValidationPasswordInputProps {
  label: string;
  name: string;
  rule: Rule;
  placeholder: string;
}

/* eslint-disable complexity */
const ValidationPasswordInput = (props: ValidationPasswordInputProps) => {
  const { t } = useTranslation();
  const [showPasswordValidator, setShowPasswordValidator] = useState(false);
  const [passwordErrors, setPasswordErrors] = useState<any>({});
  useEffect(() => {
    if (
      !passwordErrors.minLength &&
      !passwordErrors.oneUppercase &&
      !passwordErrors.numberOrSpecials
    ) {
      setShowPasswordValidator(false);
    } else {
      setShowPasswordValidator(true);
    }
  }, [passwordErrors]);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    if (value) {
      setShowPasswordValidator(true);
      // Validate length
      const errorList: any = {};
      if (value.length < 8) {
        errorList.minLength = t('At least 8 characters total');
      }

      // Validate capital letters
      const upperCaseLetters = /[A-Z]/g;
      if (!value.match(upperCaseLetters)) {
        errorList.oneUppercase = t('At least 1 uppercase letter');
      }

      // Validate one number or special character
      const numbers = /[0-9]/g;
      const specials = /[!@#$%^&*]/g;
      if (!value.match(numbers) && !value.match(specials)) {
        errorList.numberOrSpecials = t(
          'At least 1 number OR special character',
        );
      }
      setPasswordErrors(errorList);
    } else {
      setShowPasswordValidator(false);
    }
  };
  return (
    <ValidationPasswordContainer>
      <Form.Item
        labelCol={{ span: 24 }}
        label={props.label}
        name={props.name}
        rules={[
          {
            required: props.rule.required,
            message: props.rule.errorMessage,
          },
        ]}
      >
        <Input.Password
          onChange={onChange}
          visibilityToggle={false}
          autoComplete="new-password"
          placeholder={props.placeholder}
        />
      </Form.Item>
      {showPasswordValidator && (
        <ul className="password-validator">
          <li className={!passwordErrors.minLength ? 'valid' : ''}>
            <Text>{t('At least 8 characters total')}</Text>
          </li>
          <li className={!passwordErrors.oneUppercase ? 'valid' : ''}>
            <Text>{t('At least 1 uppercase letter')}</Text>
          </li>
          <li className={!passwordErrors.numberOrSpecials ? 'valid' : ''}>
            <Text>{t('At least 1 number OR special character')}</Text>
          </li>
        </ul>
      )}
    </ValidationPasswordContainer>
  );
};

export default ValidationPasswordInput;
