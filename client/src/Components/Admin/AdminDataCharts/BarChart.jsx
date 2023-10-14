import React from "react";
import { colors } from "@mui/material";
import { ResponsiveBar } from "@nivo/bar";
import BarMockAdminPageData from "../../../Data/BarAdminPageData";

const BarChart = () => {
    return (
        <>
            <ResponsiveBar
                data={BarMockAdminPageData}
                theme={{
                    axis: {
                        domain: {
                            line: {
                                stroke: colors.grey[100],
                            }
                        },

                        ticks: {
                            line: {
                                stroke: colors.grey[100],
                            },
                            text: {
                                fill: colors.grey[100],
                            }
                        },
                        legend: {
                            text: {
                                fill: colors.grey[100]
                            }
                        }

                    },
                }}
                keys={[
                    'hot dog',
                    'burger',
                    'sandwich',
                    'kebab',
                    'fries',
                    'donut'
                ]}
                indexBy="country"
                margin={{ top: 50, right: 30, bottom: 50, left: 60 }}
                padding={0.3}
                valueScale={{ type: 'linear' }}
                indexScale={{ type: 'band', round: true }}
                colors={{ scheme: 'accent' }}
                defs={[
                    {
                        background: 'inherit',
                        color: '#38bcb2',
                        size: 0,
                        padding: 1,
                        stagger: true
                    },
                    {
                        background: 'inherit',
                        color: '#eed312',
                        rotation: -45,
                        lineWidth: 0,
                        spacing: 10
                    }
                ]}
                fill={[
                    {
                        match: {
                            id: 'fries'
                        },

                    },
                    {
                        match: {
                            id: 'sandwich'
                        },

                    }
                ]}
                borderColor={{
                    from: 'color',
                    modifiers: [
                        [
                            'darker',
                            1.6
                        ]
                    ]
                }}
                axisTop={null}
                axisRight={null}
                axisBottom={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    // legend: 'country',
                    legendPosition: 'middle',
                    legendOffset: 32
                }}
                axisLeft={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: 'food',
                    legendPosition: 'middle',
                    legendOffset: -40
                }}
                enableLabel={false}
                labelSkipWidth={12}
                labelSkipHeight={12}
                labelTextColor={{
                    from: 'color',
                    modifiers: [
                        [
                            'darker',
                            1.6
                        ]
                    ]
                }}
                legends={[]}
                role="application"
                ariaLabel="Nivo bar chart demo"
                barAriaLabel={e => e.id + ": " + e.formattedValue + " in country: " + e.indexValue}
            />

        </>
    )
}

export default BarChart;