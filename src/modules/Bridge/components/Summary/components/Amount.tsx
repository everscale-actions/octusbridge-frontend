import * as React from 'react'
import { Observer } from 'mobx-react-lite'
import { useIntl } from 'react-intl'
import BigNumber from 'bignumber.js'

import { useSummary } from '@/modules/Bridge/providers'
import { formattedTokenAmount } from '@/utils'


export function Amount(): JSX.Element {
    const intl = useIntl()
    const summary = useSummary()

    return (
        <>
            <li className="divider" />

            <li className="header">
                <Observer>
                    {() => (
                        <div>
                            {intl.formatMessage({
                                id: summary.token?.symbol !== undefined
                                    ? 'CROSSCHAIN_TRANSFER_SUMMARY_AMOUNT_TOKEN'
                                    : 'CROSSCHAIN_TRANSFER_SUMMARY_AMOUNT',
                            }, {
                                symbol: summary.token?.symbol || '',
                            })}
                        </div>
                    )}
                </Observer>
            </li>

            <li>
                <Observer>
                    {() => {
                        switch (true) {
                            case summary.isFromEverscale && summary.withdrawFee !== undefined:
                                return (
                                    <b className="text-lg text-truncate">
                                        {(summary.amount && summary.amount !== '0')
                                            ? formattedTokenAmount(
                                                new BigNumber(summary.amount || 0)
                                                    .minus(summary.withdrawFee || 0)
                                                    .toFixed(),
                                                undefined,
                                                { preserve: true, roundOn: false },
                                            )
                                            : '–'}
                                    </b>
                                )

                            case summary.isFromEvm && summary.depositFee !== undefined:
                                return (
                                    <b className="text-lg text-truncate">
                                        {(summary.amount && summary.amount !== '0')
                                            ? formattedTokenAmount(
                                                new BigNumber(summary.amount || 0)
                                                    .minus(summary.depositFee || 0)
                                                    .toFixed(),
                                                undefined,
                                                { preserve: true, roundOn: false },
                                            )
                                            : '–'}
                                    </b>
                                )

                            default:
                                return (
                                    <b className="text-lg text-truncate">
                                        {(summary.amount && summary.amount !== '0')
                                            ? formattedTokenAmount(
                                                summary.amount,
                                                undefined,
                                                { preserve: true, roundOn: false },
                                            )
                                            : '–'}
                                    </b>
                                )
                        }
                    }}
                </Observer>
            </li>
        </>
    )
}
