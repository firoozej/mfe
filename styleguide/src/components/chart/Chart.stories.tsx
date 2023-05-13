import React from "react"

import { ComponentStory, ComponentMeta } from "@storybook/react"
import { Chart } from "./Chart"

export default {
    title: "Chart",
    component: Chart,
} as ComponentMeta<typeof Chart>

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof Chart> = (args) => <Chart {...args} />

export const ExampleChart = Template.bind({})

ExampleChart.args = {
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
                    29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4,
                    194.1, 95.6, 54.4,
                ],
            },
        ],
    },
}
