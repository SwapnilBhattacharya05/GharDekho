import React from "react";
import { colors } from "@mui/material";
import { ResponsivePie } from "@nivo/pie";
import PieMockAdminPageData from "../../../Data/PieMockAdminPageData";


const PieChart = () => {
    return (
        <>
            <ResponsivePie
                data={PieMockAdminPageData}
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

                margin={{ top: 40, right: 80, bottom: 60, left: 80 }}
                innerRadius={0.5}
                padAngle={0.7}
                cornerRadius={3}
                activeOuterRadiusOffset={8}
                colors={{ scheme: 'accent' }}
                borderWidth={1}
                borderColor={{
                    from: 'color',
                    modifiers: [
                        [
                            'darker',
                            0.2
                        ]
                    ]
                }}
                arcLinkLabelsSkipAngle={10}
                arcLinkLabelsTextColor="#333333"
                arcLinkLabelsThickness={2}
                arcLinkLabelsColor={{ from: 'color' }}
                enableArcLabels={false}
                arcLabelsSkipAngle={10}
                arcLabelsTextColor={{
                    from: 'color',
                    modifiers: [
                        [
                            'darker',
                            2
                        ]
                    ]
                }}
                fill={[
                    {
                        match: {
                            id: 'ruby'
                        },

                    },
                    {
                        match: {
                            id: 'c'
                        },

                    },
                    {
                        match: {
                            id: 'go'
                        },

                    },
                    {
                        match: {
                            id: 'python'
                        },

                    },
                    {
                        match: {
                            id: 'scala'
                        },

                    },
                    {
                        match: {
                            id: 'lisp'
                        },

                    },
                    {
                        match: {
                            id: 'elixir'
                        },

                    },
                    {
                        match: {
                            id: 'javascript'
                        },

                    }
                ]}
                legends={[]}
            />
        </>
    )
}
export default PieChart;