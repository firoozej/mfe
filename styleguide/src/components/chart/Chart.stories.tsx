import React from "react"
import type { Meta, StoryObj } from "@storybook/react"
import { Chart } from "./Chart"

const meta: Meta<typeof Chart> = {
    title: "Chart",
    component: Chart,
}

export default meta
type Story = StoryObj<typeof Chart>

export const ExampleChart: Story = {
    args: {
        options: {
            xAxis: {
                categories: [
                    "Jan",
                    "Feb",
                    "Mar",
                    "Apr",
                    "May",
                    "Jun",
                    "Jul",
                    "Aug",
                    "Sep",
                    "Oct",
                    "Nov",
                    "Dec",
                ],
            },
            plotOptions: {
                series: {
                    allowPointSelect: true,
                },
            },
            series: [
                {
                    data: [
                        29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5,
                        216.4, 194.1, 95.6, 54.4,
                    ],
                },
            ],
        },
    },
}
