// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import type { AccountId, Balance } from '@cordnetwork/types/interfaces/runtime';
import type { Struct } from '@polkadot/types';

/** @name PalletBuilderTreasuryProposal */
export interface PalletBuilderTreasuryProposal extends Struct {
  readonly proposer: AccountId;
  readonly value: Balance;
  readonly beneficiary: AccountId;
  readonly bond: Balance;
}

export type PHANTOM_BUILDERTREASURY = 'builderTreasury';
