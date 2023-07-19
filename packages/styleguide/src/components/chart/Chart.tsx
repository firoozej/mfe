import React, { ForwardedRef, forwardRef } from "react"
import Highstock from "highcharts/highstock"
import HighchartsReact from "highcharts-react-official"

interface IChartOptions extends Highcharts.Options {}

export interface IChartRefObject extends HighchartsReact.RefObject {}

export interface ChartProps {
    options: IChartOptions
}

const Chart = forwardRef(
    ({ options }: ChartProps, ref: ForwardedRef<IChartRefObject>) => (
        <HighchartsReact
            constructorType={"stockChart"}
            highcharts={Highstock}
            options={options}
            ref={ref}
        />
    )
)

export { Chart }
