// Copyright 2017-2021 @cordnetwork/api authors & contributors
// SPDX-License-Identifier: Apache-2.0

import definitions from '@polkadot/types/interfaces/runtime/definitions';
import { Definitions } from '@polkadot/types/types';

export default {
  rpc: {},
  types: {
    ...definitions.types
  }
} as Definitions;
