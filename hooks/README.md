# Hooks Module

`@sebin0580/payments-hooks`는 카드 상태를 active하게 변경할 때 자주 사용되는 입력값(카드 번호, 유효기간, CVC, 비밀번호 등)에 대한 유효성 검사, 상태 관리, 이벤트 핸들링을 손쉽게 처리할 수 있도록 도와주는 React 커스텀 훅 모음입니다.

## 사용 예시

### 카드사에 따른 카드번호 입력 필드 관리 – `useCardNumber`
```tsx
import { useCardNumber } from '@sebin0580/payments-hooks';

const CardNumberForm = () => {
  const { cardNumbers, cardType, isValid, errorMessage, handleCardNumberChange } = useCardNumber();

  return (
    <div>
      <input
        type="text"
        maxLength={4}
        value={cardNumbers}
        onChange={handleCardNumberChange}
        placeholder="0000"
      />
    <span>{cardType}</span>
    <span>{errorMessage}</span>
    </div>
  );
};
```


### 카드 유효기간 입력 필드 관리 – `useExpiryDate`
```tsx
import { useExpiryDate } from '@sebin0580/payments-hooks';

const ExpiryDateInput = () => {
  const { expiryDate, handleChangeExpiryDate, errorMessage } = useExpiryDate();

  return (
    <div>
    {expiryDate.map((date, index) => {
      <input
        key={index}
        type="text"
        maxLength={2}
        value={date}
        onChange={(e) => handleChangeExpiryDate(e,index)}
        placeholder="MM"
      />
    )}
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
    </div>
  );
};
```


### 카드 CVC/Password 입력 필드 관리 – `useSingleCardInput`
```tsx
import { useSingleCardInput } from '@sebin0580/payments-hooks';

// CVC
const CardCVCInput = () => {
  const { singleCardInput, handleSingleCardInputChange, errorMessage } = useSingleCardInput(3);

  return (
    <div>
      <input
        type="text"
        value={singleCardInput.value}
        onChange={handleSingleCardInputChange}
        placeholder="3자리 입력"
      />
      {!singleCardInput.isValid && <p style={{ color: 'red' }}>{errorMessage}</p>}
    </div>
  );
};

// Password
const CardPasswordInput = () => {
  const { singleCardInput, handleSingleCardInputChange, errorMessage } = useSingleCardInput(2);

  return (
    <div>
      <input
        type="text"
        value={singleCardInput.value}
        onChange={handleSingleCardInputChange}
        placeholder="2자리 입력"
      />
      {!singleCardInput.isValid && <p style={{ color: 'red' }}>{errorMessage}</p>}
    </div>
  );
};
```

## 라이센스
@keemsebin