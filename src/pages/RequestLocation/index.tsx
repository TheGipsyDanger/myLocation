import * as React from 'react';
import { IRequestLocation } from '~/pages/RequestLocation/data';
import { RequestLocation as Layout } from './Layout';

export const RequestLocation = (props: IRequestLocation) => <Layout {...props} />;