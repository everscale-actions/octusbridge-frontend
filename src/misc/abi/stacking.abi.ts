export abstract class StackingAbi {

    static RelayRound = {
        'ABI version': 2,
        version: '2.2',
        header: ['time'],
        functions: [
            {
                name: 'constructor',
                inputs: [
                ],
                outputs: [
                ],
            },
            {
                name: 'getDetails',
                inputs: [
                    { name: 'answerId', type: 'uint32' },
                ],
                outputs: [
                    { components: [{ name: 'root', type: 'address' }, { name: 'round_num', type: 'uint32' }, { name: 'ton_keys', type: 'uint256[]' }, { name: 'eth_addrs', type: 'uint160[]' }, { name: 'staker_addrs', type: 'address[]' }, { name: 'staked_tokens', type: 'uint128[]' }, { name: 'relays_installed', type: 'bool' }, { name: 'code_version', type: 'uint32' }], name: 'value0', type: 'tuple' },
                ],
            },
            {
                name: 'hasUnclaimedReward',
                inputs: [
                    { name: 'answerId', type: 'uint32' },
                    { name: '_relay_staker_addr', type: 'address' },
                ],
                outputs: [
                    { name: 'has_reward', type: 'bool' },
                ],
            },
            {
                name: 'getRelayByStakerAddress',
                inputs: [
                    { name: 'answerId', type: 'uint32' },
                    { name: '_relay_staker_addr', type: 'address' },
                ],
                outputs: [
                    { name: '_ton_key', type: 'uint256' },
                    { name: '_eth_addr', type: 'uint160' },
                    { name: '_staker_addr', type: 'address' },
                    { name: '_staked_tokens', type: 'uint128' },
                ],
            },
            {
                name: 'getRewardForRound',
                inputs: [
                    { name: 'staker_addr', type: 'address' },
                    { name: 'code_version', type: 'uint32' },
                ],
                outputs: [
                ],
            },
            {
                name: 'sendRelaysToRelayRound',
                inputs: [
                    { name: 'relay_round_addr', type: 'address' },
                    { name: 'count', type: 'uint32' },
                ],
                outputs: [
                ],
            },
            {
                name: 'relayKeys',
                inputs: [
                    { name: 'answerId', type: 'uint32' },
                ],
                outputs: [
                    { name: 'value0', type: 'uint256[]' },
                ],
            },
            {
                name: 'setEmptyRelays',
                inputs: [
                ],
                outputs: [
                ],
            },
            {
                name: 'setRelays',
                inputs: [
                    { name: '_ton_keys', type: 'uint256[]' },
                    { name: '_eth_addrs', type: 'uint160[]' },
                    { name: '_staker_addrs', type: 'address[]' },
                    { name: '_staked_tokens', type: 'uint128[]' },
                ],
                outputs: [
                ],
            },
            {
                name: 'destroy',
                inputs: [
                ],
                outputs: [
                ],
            },
            {
                name: 'upgrade',
                inputs: [
                    { name: 'code', type: 'cell' },
                    { name: 'new_version', type: 'uint32' },
                    { name: 'send_gas_to', type: 'address' },
                ],
                outputs: [
                ],
            },
            {
                name: 'getUserDataAddress',
                inputs: [
                    { name: 'answerId', type: 'uint32' },
                    { name: 'user', type: 'address' },
                ],
                outputs: [
                    { name: 'value0', type: 'address' },
                ],
            },
            {
                name: 'relays_count',
                inputs: [
                ],
                outputs: [
                    { name: 'relays_count', type: 'uint32' },
                ],
            },
            {
                name: 'start_time',
                inputs: [
                ],
                outputs: [
                    { name: 'start_time', type: 'uint32' },
                ],
            },
            {
                name: 'end_time',
                inputs: [
                ],
                outputs: [
                    { name: 'end_time', type: 'uint32' },
                ],
            },
            {
                name: 'total_tokens_staked',
                inputs: [
                ],
                outputs: [
                    { name: 'total_tokens_staked', type: 'uint128' },
                ],
            },
            {
                name: 'reward_round_num',
                inputs: [
                ],
                outputs: [
                    { name: 'reward_round_num', type: 'uint32' },
                ],
            },
            {
                name: 'round_reward',
                inputs: [
                ],
                outputs: [
                    { name: 'round_reward', type: 'uint128' },
                ],
            },
            {
                name: 'duplicate',
                inputs: [
                ],
                outputs: [
                    { name: 'duplicate', type: 'bool' },
                ],
            },
            {
                name: 'expected_packs_num',
                inputs: [
                ],
                outputs: [
                    { name: 'expected_packs_num', type: 'uint8' },
                ],
            },
        ],
        data: [
        ],
        events: [
            {
                name: 'RelayRoundCodeUpgraded',
                inputs: [
                    { name: 'code_version', type: 'uint32' },
                ],
                outputs: [
                ],
            },
        ],
        fields: [
            { name: '_pubkey', type: 'uint256' },
            { name: '_timestamp', type: 'uint64' },
            { name: '_constructorFlag', type: 'bool' },
            { name: 'relays_installed', type: 'bool' },
            { name: 'relays_count', type: 'uint32' },
            { name: 'start_time', type: 'uint32' },
            { name: 'end_time', type: 'uint32' },
            { name: 'total_tokens_staked', type: 'uint128' },
            { name: 'reward_round_num', type: 'uint32' },
            { name: 'round_reward', type: 'uint128' },
            { name: 'duplicate', type: 'bool' },
            { name: 'expected_packs_num', type: 'uint8' },
            { name: 'election_addr', type: 'address' },
            { name: 'prev_round_addr', type: 'address' },
            { name: 'round_num', type: 'uint32' },
            { name: 'ton_keys', type: 'uint256[]' },
            { name: 'eth_addrs', type: 'uint160[]' },
            { name: 'staker_addrs', type: 'address[]' },
            { name: 'staked_tokens', type: 'uint128[]' },
            { name: 'addr_to_idx', type: 'map(address,uint256)' },
            { name: 'reward_claimed', type: 'map(address,bool)' },
            { name: 'relay_packs_installed', type: 'uint8' },
            { name: 'relay_transfer_start_idx', type: 'uint256' },
            { name: 'current_version', type: 'uint32' },
            { name: 'platform_code', type: 'cell' },
            { name: 'root', type: 'address' },
        ],
    } as const

    static Root = {
        'ABI version': 2,
        version: '2.2',
        header: ['pubkey', 'time', 'expire'],
        functions: [
            {
                name: 'constructor',
                inputs: [
                    { name: '_admin', type: 'address' },
                    { name: '_dao_root', type: 'address' },
                    { name: '_rewarder', type: 'address' },
                    { name: '_rescuer', type: 'address' },
                    { name: '_bridge_event_config_eth_ton', type: 'address' },
                    { name: '_bridge_event_config_ton_eth', type: 'address' },
                    { name: '_tokenRoot', type: 'address' },
                ],
                outputs: [
                ],
            },
            {
                name: 'upgrade',
                inputs: [
                    { name: 'code', type: 'cell' },
                    { name: 'send_gas_to', type: 'address' },
                ],
                outputs: [
                ],
            },
            {
                name: 'linkRelayAccounts',
                inputs: [
                    { name: 'ton_pubkey', type: 'uint256' },
                    { name: 'eth_address', type: 'uint160' },
                ],
                outputs: [
                ],
            },
            {
                name: 'onEventConfirmed',
                inputs: [
                    { components: [{ components: [{ name: 'eventTransaction', type: 'uint256' }, { name: 'eventIndex', type: 'uint32' }, { name: 'eventData', type: 'cell' }, { name: 'eventBlockNumber', type: 'uint32' }, { name: 'eventBlock', type: 'uint256' }], name: 'voteData', type: 'tuple' }, { name: 'configuration', type: 'address' }, { name: 'staking', type: 'address' }, { name: 'chainId', type: 'uint32' }], name: 'eventData', type: 'tuple' },
                    { name: 'gasBackAddress', type: 'address' },
                ],
                outputs: [
                ],
            },
            {
                name: 'slashRelay',
                inputs: [
                    { name: 'relay_staker_addr', type: 'address' },
                    { name: 'send_gas_to', type: 'address' },
                ],
                outputs: [
                ],
            },
            {
                name: 'confirmSlash',
                inputs: [
                    { name: 'user', type: 'address' },
                    { name: 'user_rewards', type: 'uint128[]' },
                    { name: 'user_debts', type: 'uint128[]' },
                    { name: 'ban_token_balance', type: 'uint128' },
                    { name: 'send_gas_to', type: 'address' },
                ],
                outputs: [
                ],
            },
            {
                name: 'createOriginRelayRound',
                inputs: [
                    { name: 'staker_addrs', type: 'address[]' },
                    { name: 'ton_pubkeys', type: 'uint256[]' },
                    { name: 'eth_addrs', type: 'uint160[]' },
                    { name: 'staked_tokens', type: 'uint128[]' },
                    { name: 'ton_deposit', type: 'uint128' },
                    { name: 'send_gas_to', type: 'address' },
                ],
                outputs: [
                ],
            },
            {
                name: 'processBecomeRelayNextRound',
                inputs: [
                    { name: 'user', type: 'address' },
                ],
                outputs: [
                ],
            },
            {
                name: 'processGetRewardForRelayRound',
                inputs: [
                    { name: 'user', type: 'address' },
                    { name: 'round_num', type: 'uint32' },
                ],
                outputs: [
                ],
            },
            {
                name: 'startElectionOnNewRound',
                inputs: [
                ],
                outputs: [
                ],
            },
            {
                name: 'endElection',
                inputs: [
                ],
                outputs: [
                ],
            },
            {
                name: 'onElectionStarted',
                inputs: [
                    { name: 'round_num', type: 'uint32' },
                ],
                outputs: [
                ],
            },
            {
                name: 'onElectionEnded',
                inputs: [
                    { name: 'round_num', type: 'uint32' },
                    { name: 'relay_requests_count', type: 'uint32' },
                ],
                outputs: [
                ],
            },
            {
                name: 'onRelayRoundDeployed',
                inputs: [
                    { name: 'round_num', type: 'uint32' },
                    { name: 'duplicate', type: 'bool' },
                ],
                outputs: [
                ],
            },
            {
                name: 'onRelayRoundInitialized',
                inputs: [
                    { name: 'round_num', type: 'uint32' },
                    { name: 'round_start_time', type: 'uint32' },
                    { name: 'round_end_time', type: 'uint32' },
                    { name: 'relays_count', type: 'uint32' },
                    { name: 'round_reward', type: 'uint128' },
                    { name: 'reward_round_num', type: 'uint32' },
                    { name: 'duplicate', type: 'bool' },
                    { name: 'eth_keys', type: 'uint160[]' },
                ],
                outputs: [
                ],
            },
            {
                name: 'installPlatformOnce',
                inputs: [
                    { name: 'code', type: 'cell' },
                    { name: 'send_gas_to', type: 'address' },
                ],
                outputs: [
                ],
            },
            {
                name: 'installOrUpdateUserDataCode',
                inputs: [
                    { name: 'code', type: 'cell' },
                    { name: 'send_gas_to', type: 'address' },
                ],
                outputs: [
                ],
            },
            {
                name: 'installOrUpdateElectionCode',
                inputs: [
                    { name: 'code', type: 'cell' },
                    { name: 'send_gas_to', type: 'address' },
                ],
                outputs: [
                ],
            },
            {
                name: 'installOrUpdateRelayRoundCode',
                inputs: [
                    { name: 'code', type: 'cell' },
                    { name: 'send_gas_to', type: 'address' },
                ],
                outputs: [
                ],
            },
            {
                name: 'upgradeUserData',
                inputs: [
                    { name: 'send_gas_to', type: 'address' },
                ],
                outputs: [
                ],
            },
            {
                name: 'forceUpgradeUserData',
                inputs: [
                    { name: 'user', type: 'address' },
                    { name: 'send_gas_to', type: 'address' },
                ],
                outputs: [
                ],
            },
            {
                name: 'upgradeElection',
                inputs: [
                    { name: 'round_num', type: 'uint32' },
                    { name: 'send_gas_to', type: 'address' },
                ],
                outputs: [
                ],
            },
            {
                name: 'upgradeRelayRound',
                inputs: [
                    { name: 'round_num', type: 'uint32' },
                    { name: 'send_gas_to', type: 'address' },
                ],
                outputs: [
                ],
            },
            {
                name: 'getElectionAddress',
                inputs: [
                    { name: 'answerId', type: 'uint32' },
                    { name: 'round_num', type: 'uint32' },
                ],
                outputs: [
                    { name: 'value0', type: 'address' },
                ],
            },
            {
                name: 'getRelayRoundAddress',
                inputs: [
                    { name: 'answerId', type: 'uint32' },
                    { name: 'round_num', type: 'uint32' },
                ],
                outputs: [
                    { name: 'value0', type: 'address' },
                ],
            },
            {
                name: 'getRelayRoundAddressFromTimestamp',
                inputs: [
                    { name: 'answerId', type: 'uint32' },
                    { name: 'time', type: 'uint32' },
                ],
                outputs: [
                    { name: 'value0', type: 'address' },
                    { name: 'value1', type: 'uint32' },
                ],
            },
            {
                name: 'getDetails',
                inputs: [
                    { name: 'answerId', type: 'uint32' },
                ],
                outputs: [
                    { components: [{ name: 'dao_root', type: 'address' }, { name: 'bridge_event_config_eth_ton', type: 'address' }, { name: 'bridge_event_config_ton_eth', type: 'address' }, { name: 'tokenRoot', type: 'address' }, { name: 'tokenWallet', type: 'address' }, { name: 'admin', type: 'address' }, { name: 'rescuer', type: 'address' }, { name: 'rewarder', type: 'address' }, { name: 'tokenBalance', type: 'uint128' }, { name: 'rewardTokenBalance', type: 'uint128' }, { name: 'lastRewardTime', type: 'uint32' }, { components: [{ name: 'accRewardPerShare', type: 'uint256' }, { name: 'rewardTokens', type: 'uint128' }, { name: 'totalReward', type: 'uint128' }, { name: 'startTime', type: 'uint32' }], name: 'rewardRounds', type: 'tuple[]' }, { name: 'emergency', type: 'bool' }], name: 'value0', type: 'tuple' },
                ],
            },
            {
                name: 'getCodeData',
                inputs: [
                    { name: 'answerId', type: 'uint32' },
                ],
                outputs: [
                    { components: [{ name: 'platform_code', type: 'cell' }, { name: 'has_platform_code', type: 'bool' }, { name: 'user_data_code', type: 'cell' }, { name: 'user_data_version', type: 'uint32' }, { name: 'election_code', type: 'cell' }, { name: 'election_version', type: 'uint32' }, { name: 'relay_round_code', type: 'cell' }, { name: 'relay_round_version', type: 'uint32' }], name: 'value0', type: 'tuple' },
                ],
            },
            {
                name: 'getRelayRoundsDetails',
                inputs: [
                    { name: 'answerId', type: 'uint32' },
                ],
                outputs: [
                    { components: [{ name: 'currentRelayRound', type: 'uint32' }, { name: 'currentRelayRoundStartTime', type: 'uint32' }, { name: 'currentRelayRoundEndTime', type: 'uint32' }, { name: 'currentElectionStartTime', type: 'uint32' }, { name: 'currentElectionEnded', type: 'bool' }], name: 'value0', type: 'tuple' },
                ],
            },
            {
                name: 'getRelayConfig',
                inputs: [
                    { name: 'answerId', type: 'uint32' },
                ],
                outputs: [
                    { components: [{ name: 'relayLockTime', type: 'uint32' }, { name: 'relayRoundTime', type: 'uint32' }, { name: 'electionTime', type: 'uint32' }, { name: 'timeBeforeElection', type: 'uint32' }, { name: 'minRoundGapTime', type: 'uint32' }, { name: 'relaysCount', type: 'uint16' }, { name: 'minRelaysCount', type: 'uint16' }, { name: 'minRelayDeposit', type: 'uint128' }, { name: 'relayInitialTonDeposit', type: 'uint128' }, { name: 'relayRewardPerSecond', type: 'uint128' }, { name: 'userRewardPerSecond', type: 'uint128' }], name: 'value0', type: 'tuple' },
                ],
            },
            {
                name: 'addDelegate',
                inputs: [
                    { name: 'addr', type: 'address' },
                    { name: 'callHash', type: 'uint256' },
                ],
                outputs: [
                ],
            },
            {
                name: 'setDaoRoot',
                inputs: [
                    { name: 'new_dao_root', type: 'address' },
                    { name: 'send_gas_to', type: 'address' },
                ],
                outputs: [
                ],
            },
            {
                name: 'setTonEventDeployValue',
                inputs: [
                    { name: 'new_value', type: 'uint128' },
                    { name: 'send_gas_to', type: 'address' },
                ],
                outputs: [
                ],
            },
            {
                name: 'setBridgeEventEthTonConfig',
                inputs: [
                    { name: 'new_bridge_event_config_eth_ton', type: 'address' },
                    { name: 'send_gas_to', type: 'address' },
                ],
                outputs: [
                ],
            },
            {
                name: 'setBridgeEventTonEthConfig',
                inputs: [
                    { name: 'new_bridge_event_config_ton_eth', type: 'address' },
                    { name: 'send_gas_to', type: 'address' },
                ],
                outputs: [
                ],
            },
            {
                name: 'setAdmin',
                inputs: [
                    { name: 'new_admin', type: 'address' },
                    { name: 'send_gas_to', type: 'address' },
                ],
                outputs: [
                ],
            },
            {
                name: 'setRescuer',
                inputs: [
                    { name: 'new_rescuer', type: 'address' },
                    { name: 'send_gas_to', type: 'address' },
                ],
                outputs: [
                ],
            },
            {
                name: 'setRewarder',
                inputs: [
                    { name: 'new_rewarder', type: 'address' },
                    { name: 'send_gas_to', type: 'address' },
                ],
                outputs: [
                ],
            },
            {
                name: 'setActive',
                inputs: [
                    { name: 'new_active', type: 'bool' },
                    { name: 'send_gas_to', type: 'address' },
                ],
                outputs: [
                ],
            },
            {
                name: 'isActive',
                inputs: [
                    { name: 'answerId', type: 'uint32' },
                ],
                outputs: [
                    { name: 'value0', type: 'bool' },
                ],
            },
            {
                name: 'setRelayConfig',
                inputs: [
                    { components: [{ name: 'relayLockTime', type: 'uint32' }, { name: 'relayRoundTime', type: 'uint32' }, { name: 'electionTime', type: 'uint32' }, { name: 'timeBeforeElection', type: 'uint32' }, { name: 'minRoundGapTime', type: 'uint32' }, { name: 'relaysCount', type: 'uint16' }, { name: 'minRelaysCount', type: 'uint16' }, { name: 'minRelayDeposit', type: 'uint128' }, { name: 'relayInitialTonDeposit', type: 'uint128' }, { name: 'relayRewardPerSecond', type: 'uint128' }, { name: 'userRewardPerSecond', type: 'uint128' }], name: 'new_relay_config', type: 'tuple' },
                    { name: 'send_gas_to', type: 'address' },
                ],
                outputs: [
                ],
            },
            {
                name: 'receiveTokenWalletAddress',
                inputs: [
                    { name: 'wallet', type: 'address' },
                ],
                outputs: [
                ],
            },
            {
                name: 'startNewRewardRound',
                inputs: [
                    { name: 'send_gas_to', type: 'address' },
                ],
                outputs: [
                ],
            },
            {
                name: 'decodeDepositPayload',
                inputs: [
                    { name: 'payload', type: 'cell' },
                ],
                outputs: [
                    { name: 'deposit_type', type: 'uint8' },
                    { name: 'correct', type: 'bool' },
                ],
            },
            {
                name: 'onAcceptTokensTransfer',
                inputs: [
                    { name: 'tokenRoot', type: 'address' },
                    { name: 'amount', type: 'uint128' },
                    { name: 'sender', type: 'address' },
                    { name: 'senderWallet', type: 'address' },
                    { name: 'remainingGasTo', type: 'address' },
                    { name: 'payload', type: 'cell' },
                ],
                outputs: [
                ],
            },
            {
                name: 'revertDeposit',
                inputs: [
                    { name: '_deposit_nonce', type: 'uint64' },
                ],
                outputs: [
                ],
            },
            {
                name: 'finishDeposit',
                inputs: [
                    { name: '_deposit_nonce', type: 'uint64' },
                ],
                outputs: [
                ],
            },
            {
                name: 'withdraw',
                inputs: [
                    { name: 'amount', type: 'uint128' },
                    { name: 'send_gas_to', type: 'address' },
                ],
                outputs: [
                ],
            },
            {
                name: 'finishWithdraw',
                inputs: [
                    { name: 'user', type: 'address' },
                    { name: 'withdraw_amount', type: 'uint128' },
                    { name: 'send_gas_to', type: 'address' },
                ],
                outputs: [
                ],
            },
            {
                name: 'claimReward',
                inputs: [
                    { name: 'send_gas_to', type: 'address' },
                ],
                outputs: [
                ],
            },
            {
                name: 'finishClaimReward',
                inputs: [
                    { name: 'user', type: 'address' },
                    { name: 'rewards', type: 'uint128[]' },
                    { name: 'send_gas_to', type: 'address' },
                ],
                outputs: [
                ],
            },
            {
                name: 'pendingReward',
                inputs: [
                    { name: 'answerId', type: 'uint32' },
                    { name: 'user_token_balance', type: 'uint256' },
                    { components: [{ name: 'reward_balance', type: 'uint128' }, { name: 'reward_debt', type: 'uint128' }], name: 'user_reward_data', type: 'tuple[]' },
                ],
                outputs: [
                    { name: 'value0', type: 'uint256' },
                ],
            },
            {
                name: 'getUserDataAddress',
                inputs: [
                    { name: 'answerId', type: 'uint32' },
                    { name: 'user', type: 'address' },
                ],
                outputs: [
                    { name: 'value0', type: 'address' },
                ],
            },
            {
                name: 'castVote',
                inputs: [
                    { name: 'proposal_id', type: 'uint32' },
                    { name: 'support', type: 'bool' },
                ],
                outputs: [
                ],
            },
            {
                name: 'castVoteWithReason',
                inputs: [
                    { name: 'proposal_id', type: 'uint32' },
                    { name: 'support', type: 'bool' },
                    { name: 'reason', type: 'string' },
                ],
                outputs: [
                ],
            },
            {
                name: 'tryUnlockVoteTokens',
                inputs: [
                    { name: 'proposal_id', type: 'uint32' },
                ],
                outputs: [
                ],
            },
            {
                name: 'tryUnlockCastedVotes',
                inputs: [
                    { name: 'proposal_ids', type: 'uint32[]' },
                ],
                outputs: [
                ],
            },
            {
                name: 'withdrawTonsUserEmergency',
                inputs: [
                ],
                outputs: [
                ],
            },
            {
                name: 'withdrawTonsEmergency',
                inputs: [
                    { name: 'amount', type: 'uint128' },
                    { name: 'receiver', type: 'address' },
                    { name: 'all', type: 'bool' },
                    { name: 'send_gas_to', type: 'address' },
                ],
                outputs: [
                ],
            },
            {
                name: 'withdrawTokensEmergency',
                inputs: [
                    { name: 'amount', type: 'uint128' },
                    { name: 'receiver', type: 'address' },
                    { name: 'all', type: 'bool' },
                    { name: 'send_gas_to', type: 'address' },
                ],
                outputs: [
                ],
            },
            {
                name: 'setEmergency',
                inputs: [
                    { name: '_emergency', type: 'bool' },
                    { name: 'send_gas_to', type: 'address' },
                ],
                outputs: [
                ],
            },
            {
                name: 'delegators',
                inputs: [
                ],
                outputs: [
                    { name: 'delegators', type: 'map(address,uint256[])' },
                ],
            },
        ],
        data: [
            { key: 1, name: 'deploy_nonce', type: 'uint32' },
            { key: 2, name: 'deployer', type: 'address' },
        ],
        events: [
            {
                name: 'RewardDeposit',
                inputs: [
                    { name: 'amount', type: 'uint128' },
                    { name: 'reward_round_num', type: 'uint32' },
                ],
                outputs: [
                ],
            },
            {
                name: 'Deposit',
                inputs: [
                    { name: 'user', type: 'address' },
                    { name: 'amount', type: 'uint128' },
                ],
                outputs: [
                ],
            },
            {
                name: 'Withdraw',
                inputs: [
                    { name: 'user', type: 'address' },
                    { name: 'amount', type: 'uint128' },
                ],
                outputs: [
                ],
            },
            {
                name: 'RewardClaimed',
                inputs: [
                    { name: 'user', type: 'address' },
                    { name: 'reward_tokens', type: 'uint128' },
                ],
                outputs: [
                ],
            },
            {
                name: 'NewRewardRound',
                inputs: [
                    { name: 'round_num', type: 'uint32' },
                ],
                outputs: [
                ],
            },
            {
                name: 'ElectionStarted',
                inputs: [
                    { name: 'round_num', type: 'uint32' },
                    { name: 'election_start_time', type: 'uint32' },
                    { name: 'election_end_time', type: 'uint32' },
                    { name: 'election_addr', type: 'address' },
                ],
                outputs: [
                ],
            },
            {
                name: 'ElectionEnded',
                inputs: [
                    { name: 'round_num', type: 'uint32' },
                    { name: 'relay_requests', type: 'uint32' },
                    { name: 'min_relays_ok', type: 'bool' },
                ],
                outputs: [
                ],
            },
            {
                name: 'RelayRoundInitialized',
                inputs: [
                    { name: 'round_num', type: 'uint32' },
                    { name: 'round_start_time', type: 'uint32' },
                    { name: 'round_end_time', type: 'uint32' },
                    { name: 'round_addr', type: 'address' },
                    { name: 'relays_count', type: 'uint32' },
                    { name: 'duplicate', type: 'bool' },
                ],
                outputs: [
                ],
            },
            {
                name: 'RelayRoundCreation',
                inputs: [
                    { name: 'round_num', type: 'uint32' },
                    { name: 'eth_keys', type: 'uint160[]' },
                    { name: 'round_end', type: 'uint32' },
                ],
                outputs: [
                ],
            },
            {
                name: 'RelaySlashed',
                inputs: [
                    { name: 'user', type: 'address' },
                    { name: 'tokens_withdrawn', type: 'uint128' },
                ],
                outputs: [
                ],
            },
            {
                name: 'Emergency',
                inputs: [
                    { name: 'state', type: 'bool' },
                ],
                outputs: [
                ],
            },
            {
                name: 'DepositReverted',
                inputs: [
                    { name: 'user', type: 'address' },
                    { name: 'amount', type: 'uint128' },
                ],
                outputs: [
                ],
            },
            {
                name: 'DaoRootUpdated',
                inputs: [
                    { name: 'new_dao_root', type: 'address' },
                ],
                outputs: [
                ],
            },
            {
                name: 'BridgeEventEthTonConfigUpdated',
                inputs: [
                    { name: 'new_bridge_event_config_eth_ton', type: 'address' },
                ],
                outputs: [
                ],
            },
            {
                name: 'BridgeEventTonEthConfigUpdated',
                inputs: [
                    { name: 'new_bridge_event_config_ton_eth', type: 'address' },
                ],
                outputs: [
                ],
            },
            {
                name: 'TonEventDeployValueUpdated',
                inputs: [
                    { name: 'new_value', type: 'uint128' },
                ],
                outputs: [
                ],
            },
            {
                name: 'AdminUpdated',
                inputs: [
                    { name: 'new_admin', type: 'address' },
                ],
                outputs: [
                ],
            },
            {
                name: 'RewarderUpdated',
                inputs: [
                    { name: 'new_rewarder', type: 'address' },
                ],
                outputs: [
                ],
            },
            {
                name: 'RescuerUpdated',
                inputs: [
                    { name: 'new_rescuer', type: 'address' },
                ],
                outputs: [
                ],
            },
            {
                name: 'ActiveUpdated',
                inputs: [
                    { name: 'active', type: 'bool' },
                ],
                outputs: [
                ],
            },
            {
                name: 'RequestedUserDataUpgrade',
                inputs: [
                    { name: 'user', type: 'address' },
                ],
                outputs: [
                ],
            },
            {
                name: 'RequestedElectionUpgrade',
                inputs: [
                    { name: 'round_num', type: 'uint32' },
                ],
                outputs: [
                ],
            },
            {
                name: 'RequestedRelayRoundUpgrade',
                inputs: [
                    { name: 'round_num', type: 'uint32' },
                ],
                outputs: [
                ],
            },
            {
                name: 'UserDataCodeUpgraded',
                inputs: [
                    { name: 'code_version', type: 'uint32' },
                ],
                outputs: [
                ],
            },
            {
                name: 'ElectionCodeUpgraded',
                inputs: [
                    { name: 'code_version', type: 'uint32' },
                ],
                outputs: [
                ],
            },
            {
                name: 'RelayRoundCodeUpgraded',
                inputs: [
                    { name: 'code_version', type: 'uint32' },
                ],
                outputs: [
                ],
            },
            {
                name: 'RelayConfigUpdated',
                inputs: [
                    { components: [{ name: 'relayLockTime', type: 'uint32' }, { name: 'relayRoundTime', type: 'uint32' }, { name: 'electionTime', type: 'uint32' }, { name: 'timeBeforeElection', type: 'uint32' }, { name: 'minRoundGapTime', type: 'uint32' }, { name: 'relaysCount', type: 'uint16' }, { name: 'minRelaysCount', type: 'uint16' }, { name: 'minRelayDeposit', type: 'uint128' }, { name: 'relayInitialTonDeposit', type: 'uint128' }, { name: 'relayRewardPerSecond', type: 'uint128' }, { name: 'userRewardPerSecond', type: 'uint128' }], name: 'value0', type: 'tuple' },
                ],
                outputs: [
                ],
            },
        ],
        fields: [
            { name: '_pubkey', type: 'uint256' },
            { name: '_timestamp', type: 'uint64' },
            { name: '_constructorFlag', type: 'bool' },
            { name: 'delegators', type: 'map(address,uint256[])' },
            { name: 'deploy_nonce', type: 'uint32' },
            { name: 'deployer', type: 'address' },
            { name: 'active', type: 'bool' },
            { name: 'lastExtCall', type: 'uint32' },
            { components: [{ name: 'platform_code', type: 'cell' }, { name: 'has_platform_code', type: 'bool' }, { name: 'user_data_code', type: 'cell' }, { name: 'user_data_version', type: 'uint32' }, { name: 'election_code', type: 'cell' }, { name: 'election_version', type: 'uint32' }, { name: 'relay_round_code', type: 'cell' }, { name: 'relay_round_version', type: 'uint32' }], name: 'code_data', type: 'tuple' },
            { components: [{ name: 'currentRelayRound', type: 'uint32' }, { name: 'currentRelayRoundStartTime', type: 'uint32' }, { name: 'currentRelayRoundEndTime', type: 'uint32' }, { name: 'currentElectionStartTime', type: 'uint32' }, { name: 'currentElectionEnded', type: 'bool' }], name: 'round_details', type: 'tuple' },
            { components: [{ name: 'dao_root', type: 'address' }, { name: 'bridge_event_config_eth_ton', type: 'address' }, { name: 'bridge_event_config_ton_eth', type: 'address' }, { name: 'tokenRoot', type: 'address' }, { name: 'tokenWallet', type: 'address' }, { name: 'admin', type: 'address' }, { name: 'rescuer', type: 'address' }, { name: 'rewarder', type: 'address' }, { name: 'tokenBalance', type: 'uint128' }, { name: 'rewardTokenBalance', type: 'uint128' }, { name: 'lastRewardTime', type: 'uint32' }, { components: [{ name: 'accRewardPerShare', type: 'uint256' }, { name: 'rewardTokens', type: 'uint128' }, { name: 'totalReward', type: 'uint128' }, { name: 'startTime', type: 'uint32' }], name: 'rewardRounds', type: 'tuple[]' }, { name: 'emergency', type: 'bool' }], name: 'base_details', type: 'tuple' },
            { components: [{ name: 'relayLockTime', type: 'uint32' }, { name: 'relayRoundTime', type: 'uint32' }, { name: 'electionTime', type: 'uint32' }, { name: 'timeBeforeElection', type: 'uint32' }, { name: 'minRoundGapTime', type: 'uint32' }, { name: 'relaysCount', type: 'uint16' }, { name: 'minRelaysCount', type: 'uint16' }, { name: 'minRelayDeposit', type: 'uint128' }, { name: 'relayInitialTonDeposit', type: 'uint128' }, { name: 'relayRewardPerSecond', type: 'uint128' }, { name: 'userRewardPerSecond', type: 'uint128' }], name: 'relay_config', type: 'tuple' },
            { name: 'tonEventDeployValue', type: 'uint128' },
            { name: 'deposit_nonce', type: 'uint64' },
            { components: [{ name: 'user', type: 'address' }, { name: 'amount', type: 'uint128' }, { name: 'send_gas_to', type: 'address' }], name: 'deposits', type: 'map(uint64,tuple)' },
        ],
    } as const

}
