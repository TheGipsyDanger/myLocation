import styled from 'styled-components/native';

import { Wrapped } from '~/components/Basics';

export default {
  TempContent: styled(Wrapped).attrs({
    mb: 1,
  })`
    height: 138px;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
  `,
  TempSeparator: styled(Wrapped)`
    width: 100px;
    flex-direction: row;
    justify-content: space-between;
  `,
};
