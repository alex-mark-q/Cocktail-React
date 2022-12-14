import React from 'react';
import { LockBody, ReleaseBody, Spinner } from './styles/loading';

export default function Loading({ src, ...restProps }) {
  return (
    <Spinner {...restProps} />
  );
}

