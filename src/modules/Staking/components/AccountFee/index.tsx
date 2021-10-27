import * as React from 'react'
import { useIntl } from 'react-intl'

import { amount } from '@/utils'

import './index.scss'

type Props = {
    feeAmount?: string;
    tokenSymbol?: string;
    tokenDecimals?: number;
}

export function AccountFee({
    feeAmount,
    tokenSymbol,
    tokenDecimals,
}: Props): JSX.Element {
    const intl = useIntl()

    const nullMessage = intl.formatMessage({
        id: 'NO_VALUE',
    })

    return (
        <div className="staking-account-fee">
            <div className="staking-account-fee__stats">
                <span>
                    {intl.formatMessage({
                        id: 'STAKING_ACCOUNT_FORM_STATS_FEE',
                    })}
                </span>
                <span>
                    {
                        tokenDecimals !== undefined && tokenSymbol && feeAmount
                            ? intl.formatMessage({
                                id: 'AMOUNT',
                            }, {
                                value: amount(feeAmount, tokenDecimals),
                                symbol: tokenSymbol,
                            })
                            : nullMessage
                    }
                </span>
            </div>

            <div className="staking-account-fee__hint">
                {intl.formatMessage({
                    id: 'STAKING_ACCOUNT_FORM_HINT',
                })}
            </div>
        </div>
    )
}
