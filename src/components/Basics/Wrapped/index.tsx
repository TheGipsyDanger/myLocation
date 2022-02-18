import * as React from 'react';
import { IWrapped } from './data';
import { Wrapped as Layout } from './Layout';

export const Wrapped = (props: IWrapped) => <Layout {...props} />;
