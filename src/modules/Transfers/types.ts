export type TransferType = 'Default' | 'Credit' | 'Transit'

export type TransferKind =
    | 'TonToEth'
    | 'EthToTon'
    | 'CreditEthToTon'
    | 'EthToEth'

export type TransferKindFilter = Lowercase<TransferKind>

export type TransferStatus =
    | 'Pending'
    | 'Rejected'
    | 'Confirmed'

export type TransfersRequestStatus = Lowercase<TransferStatus>

export type TransfersOrdering =
    | 'updateatascending'
    | 'updateatdescending'
    | 'createdatascending'
    | 'createdatdescending'

export type TransferOld = {
    confirmVotes?: number;
    createdAt?: number;
    currencyAddress?: string;
    rejectVotes?: number;
    requiredVotes?: number;
    status?: TransferStatus;
    volumeExec?: string;
    transferKind?: TransferKind;
    chainId?: number;
    contractAddress?: string;
    ethTransactionHash?: string;
    tonTransactionHash?: string;
}

export type Transfer = {
    ethTonChainId?: number;
    ethTonContractAddress?: string;
    ethTonEthTokenAddress?: string;
    ethTonEthUserAddress?: string;
    ethTonProxyAddress?: string;
    ethTonRequiredVotes?: number;
    ethTonStatus?: TransferStatus;
    ethTonTonTokenAddress?: string;
    ethTonTransactionHashEth?: string;
    ethTonVolumeExec: string;

    tonEthChainId?: number;
    tonEthContractAddress?: string;
    tonEthEthTokenAddress?: string;
    tonEthEthUserAddress?: string;
    tonEthProxyAddress?: string;
    tonEthRequiredVotes?: number;
    tonEthStatus?: TransferStatus;
    tonEthTonTokenAddress?: string;
    tonEthVolumeExec: string;

    createdAt: number;
    creditProcessorAddress?: string;
    tonUserAddress: string;
    transferKind: TransferKind;
    transferStatus: TransferStatus;
    updatedAt: number;
}

export type TransfersParams = {
    limit?: number;
    offset?: number;
    ordering?: TransfersOrdering;
    userAddress?: string;
    createdAtGe?: number;
    createdAtLe?: number;
    status?: TransfersRequestStatus;
    transferKinds?: TransferKindFilter[];
    volumeExecGe?: string;
    volumeExecLe?: string;
    tonTokenAddress?: string;
    ethTonChainId?: number;
    tonEthChainId?: number;
}

export type TransfersFilters = {
    createdAtGe?: number;
    createdAtLe?: number;
    status?: TransfersRequestStatus;
    transferType?: TransferType;
    volumeExecGe?: string;
    volumeExecLe?: string;
    tonTokenAddress?: string;
    fromId?: string;
    toId?: string;
    userAddress?: string;
}

export type TransfersRequest = TransfersParams

export type TransfersResponse = {
    totalCount: number;
    transfers: Transfer[];
}

export type TransfersStoreData = {
    apiResponse?: TransfersResponse;
}

export type TransfersStoreState = {
    loading?: boolean;
    page: number;
    limit: number;
}