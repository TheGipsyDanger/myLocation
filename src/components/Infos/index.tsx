import * as React from 'react';
import { useDayHour } from '~/utils';

import { IInfos } from '~/components/Infos/data';
import { Infos as Layout } from './Layout';

export const Infos = (props: IInfos) => {
  const { getDay } = useDayHour();

  const layoutProps = {
    ...props,
    day: getDay(),
  };

  return <Layout {...layoutProps} />;
};
