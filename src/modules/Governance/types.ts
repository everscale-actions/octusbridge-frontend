import { Address } from 'ton-inpage-provider'

import {
    CastedVotes, ProposalConfig, StackingDetails,
} from '@/misc'

export enum ActionNetwork {
    TON, ETH,
}

export type Description = {
    title?: string;
    description?: string;
    link?: string;
}

export type ProposalVote = {
    createdAt?: number;
    messageHash?: string;
    proposalId?: number;
    reason?: string;
    support?: boolean;
    timestampBlock?: number;
    transactionHash?: string;
    voter?: string;
    votes?: string;
}

export type EthAction = {
    callData: string;
    chainId: number;
    signature: string;
    target: string;
    value: string;
}

export type TonAction = {
    payload: string;
    target: string;
    value: string;
}

export type ProposalsColumn = 'createdAt' | 'updatedAt'

export type ProposalsDirection = 'DESC' | 'ASC'

export type ProposalsOrdering = {
    column: ProposalsColumn;
    direction: ProposalsDirection;
}

export type ProposalState = 'Pending' | 'Active' | 'Canceled' | 'Failed' | 'Succeeded' | 'Expired' | 'Queued' | 'Executed'

export type Proposal = {
    actions?: {
      ethActions?: EthAction[];
      tonActions?: TonAction[];
    };
    againstVotes?: string;
    canceled?: boolean;
    canceledAt?: number;
    proposalAddress?: string;
    createdAt?: number;
    description?: string;
    endTime?: number;
    executed?: boolean;
    executedAt?: number;
    executionTime?: number;
    forVotes?: string;
    gracePeriod?: number;
    messageHash?: string;
    proposalId: number;
    proposer?: string;
    queued?: boolean;
    queuedAt?: number;
    quorumVotes?: string;
    startTime?: number;
    state?: ProposalState;
    timestampBlock?: number;
    transactionHash?: string;
    updatedAt?: number;
    timeLock?: number;
    votingDelay?: number;
}

export type ProposalWithVote = {
    proposal: Proposal;
    vote?: ProposalVote;
}

export type ProposalsParams = {
    limit: number;
    offset: number;
    ordering?: ProposalsOrdering;
    proposer?: string;
    proposalId?: number;
}

export type ProposalsFilters = {
    endTimeGe?: number;
    endTimeLe?: number;
    startTimeGe?: number;
    startTimeLe?: number;
    state?: ProposalState;
}

export type ProposalsRequest = ProposalsParams & ProposalsFilters

export type ProposalsResponse = {
    proposals: Proposal[];
    totalCount: number;
}

export type UserProposalsResponse = {
    proposalWithVotes: ProposalWithVote[];
    totalCount: number;
}

export type Vote = {
    createdAt: number;
    messageHash: string;
    proposalId: number;
    reason?: string;
    support: boolean;
    timestampBlock: number;
    transactionHash: string;
    voter: string;
    votes: string;
}

export type VotesColumn = 'createdAt' | 'updatedAt'

export type VotesDirection = 'DESC' | 'ASC'

export type VotesOrdering = {
    column: VotesColumn;
    direction: VotesDirection;
}

export type VotesFilters = {
    support?: boolean;
}

export type VotesParams = {
    limit: number;
    offset: number;
    ordering: VotesOrdering;
    proposalId?: number;
    voter?: string;
}

export type VotesRequest = VotesParams & VotesFilters

export type VotesResponse = {
    totalCount: number;
    votes: Vote[];
}

export type ProposalsStoreData = {
    response?: ProposalsResponse;
}

export type ProposalsStoreState = {
    loading: boolean;
}

export type UserProposalsStoreData = {
    response?: UserProposalsResponse;
}

export type UserProposalsStoreState = {
    loading?: boolean;
}

export type ProposalStoreData = {
    response?: ProposalsResponse;
}

export type ProposalStoreState = {
    cancelLoading?: boolean;
    queueLoading?: boolean;
    executeLoading?: boolean;
}

export type VotesStoreData = {
    response?: VotesResponse;
}

export type VotesStoreState = {
    loading?: boolean;
}

export type ConfigStoreData = {
    config?: ProposalConfig;
}

export type ConfigStoreState = {
    loading: boolean;
}

export type VotingStoreState = {
    loading?: boolean;
    castLoading?: boolean;
    unlockVoteLoading?: boolean;
}

export type ProposalCreateStoreState = {
    createLoading?: boolean;
}

export type UserDataStoreData = {
    userDataAddress?: Address;
    tokenBalance?: string;
    lockedTokens?: string;
    castedVotes?: CastedVotes;
    stakingDetails?: StackingDetails;
    castedProposals?: Proposal[];
}

export type UserDataStoreState = {
    hasAccount?: boolean;
}
