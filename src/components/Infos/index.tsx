import * as React from 'react';

import { IInfos } from '~/components/Infos/data';
import { Infos as Layout } from './Layout';

export const Infos = (props: IInfos ) => <Layout {...props} />;