import * as React from 'react';

import { IPeriodImage } from '~/components/PeriodImage/data';
import { PeriodImage as Layout } from './Layout';

export const PeriodImage = (props: IPeriodImage ) => <Layout {...props} />;