import { useState } from 'react';

import { CardInputItem } from '../../types/cardInputItem.types';
import { EXPIRE_DATE_INDEX, validateExpiryDate } from '../../validation/expiryDate';

const EXPIRY_DATE_INPUTS_LENGTH = 2;

/**
 * @returns
 * @description
 * 카드 만료일 입력을 관리하는 커스텀 훅입니다.
 * 카드 만료일의 유효성을 검사하고, 입력값을 상태로 관리합니다.
 * 만료일은 MM/YY 형식으로 입력됩니다.
 * @returns 카드 만료일 입력 상태와 핸들러를 반환합니다.
 * @returns {CardInputItem[]} expiryDate 카드 만료일 입력 상태
 * @returns {string} errorMessage 카드 만료일 입력 오류 메시지
 * @returns {function} handleExpiryDateChange 카드 만료일 입력 핸들러
 * @example
 * const { expiryDate, errorMessage, handleExpiryDateChange } = useExpiryDate();
 * <input
 *   type="text"
 *   value={expiryDate[0].value}
 *   onChange={(e) => handleExpiryDateChange(e, 0)}
 *   placeholder="MM"
 * />
 * <input
 *  type="text"
 *  value={expiryDate[1].value}
 *  onChange={(e) => handleExpiryDateChange(e, 1)}
 *  placeholder="YY"
 * />
 */
export const useExpiryDate = () => {
  const [expiryDate, setExpiryDate] = useState<CardInputItem[]>(
    Array.from({ length: EXPIRY_DATE_INPUTS_LENGTH }, () => ({ value: '', isValid: true }))
  );

  const [errorMessage, setErrorMessage] = useState('');

  const handleExpiryDateChange = (event: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const newValue = event.target.value;

    const updatedExpiryDate = [...expiryDate];
    updatedExpiryDate[index].value = newValue;

    const { isValid, isExpired, errorMessage } = validateExpiryDate(
      updatedExpiryDate,
      newValue,
      index
    );

    setExpiryDate((prev) => {
      const newExpiryDate = [...prev];
      newExpiryDate[index].value = newValue;
      if (index === EXPIRE_DATE_INDEX.YEAR && isExpired) {
        newExpiryDate[0].isValid = false;
      }
      if (!(index === EXPIRE_DATE_INDEX.YEAR && isExpired)) {
        newExpiryDate[index].isValid = isValid;
      }
      return newExpiryDate;
    });

    setErrorMessage(isValid ? '' : errorMessage);
  };

  return {
    expiryDate,
    errorMessage,
    handleExpiryDateChange,
  };
};
