// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import type { BlockNumber } from '@cordnetwork/types/interfaces/runtime';
import type { Struct, bool } from '@polkadot/types';

/** @name PalletEntityVerifiersVerifierDetails */
export interface PalletEntityVerifiersVerifierDetails extends Struct {
  readonly block: BlockNumber;
  readonly revoked: bool;
}

export type PHANTOM_ENTITY = 'entity';
