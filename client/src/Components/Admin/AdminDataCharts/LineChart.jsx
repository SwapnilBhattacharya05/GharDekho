import React from "react";
import { colors } from "@mui/material";
import { ResponsiveLine } from "@nivo/line";
import LineMockAdminPageData from "../../../Data/LineMockAdminPageData";

const LineChart = () => {
    return (
        <>
            <ResponsiveLine
                data={LineMockAdminPageData}
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
                margin={{ top: 50, right: 90, bottom: 50, left: 60 }}
                xScale={{ type: 'point' }}
                yScale={{
                    type: 'linear',
                    min: 'auto',
                    max: 'auto',
                    stacked: true,
                    reverse: false
                }}
                yFormat=" >-.2f"
                axisTop={null}
                axisRight={null}
                axisBottom={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    // legend: 'transportation',
                    legendOffset: 36,
                    legendPosition: 'middle'
                }}
                axisLeft={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    // legend: 'count',
                    legendOffset: -40,
                    legendPosition: 'middle'
                }}
                colors={{ scheme: 'accent' }}
                pointSize={10}
                pointColor={{ theme: 'background' }}
                pointBorderWidth={2}
                pointBorderColor={{ from: 'serieColor' }}
                pointLabelYOffset={-12}
                useMesh={true}
                legends={[]}
            />

        </>
    )
}
export default LineChart;

