import  React from "react";
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Legend, Category, Tooltip, ColumnSeries, DataLabel } from '@syncfusion/ej2-react-charts';
export let data1 = [
    { x: '2012', y: 104 },
    { x: '2016', y: 121 },
    { x: '2020', y: 113 },
];
export let data2 = [
    { x: '2012', y: 46 },
    { x: '2016', y: 46 },
    { x: '2020', y: 39 },
];
export let data3 = [
    { x: '2012', y: 65 },
    { x: '2016', y: 67 },
    { x: '2020', y: 65 },
];
export let data4 = [
    { x: '2012', y: 29 },
    { x: '2016', y: 27 },
    { x: '2020', y: 22 },
];
export let data5 = [
    { x: '2012', y: 91 },
    { x: '2016', y: 70 },
    { x: '2020', y: 88 },
];
export let data6 = [
    { x: '2012', y: 38 },
    { x: '2016', y: 26 },
    { x: '2020', y: 38 },
];
class Bar extends React.Component {
    render() {
        return (<ChartComponent id="charts" style={{ textAlign: 'center' }} primaryXAxis={{
            valueType: 'Category',
            interval: 1,
            majorGridLines: { width: 0 },
        }} primaryYAxis={{
            majorGridLines: { width: 0 },
            majorTickLines: { width: 0 },
            lineStyle: { width: 0 },
            labelStyle: { color: 'transparent' },
        }} chartArea={{ border: { width: 0 } }} tooltip={{ enable: true }} title="Olympics Medal Tally">
        <Inject services={[ColumnSeries, Legend, Tooltip, Category, DataLabel]}/>
        <SeriesCollectionDirective>
          <SeriesDirective dataSource={data1} xName="x" yName="y" name="USA Total" type="Column" groupName="USA" columnWidth={0.7} columnSpacing={0.1} marker={{
            dataLabel: {
                visible: true,
                position: 'Top',
                font: { fontWeight: '600', color: '#ffffff' },
            },
        }}></SeriesDirective>
          <SeriesDirective dataSource={data2} xName="x" yName="y" name="USA Gold" type="Column" groupName="USA" columnWidth={0.5} columnSpacing={0.1} marker={{
            dataLabel: {
                visible: true,
                position: 'Top',
                font: { fontWeight: '600', color: '#ffffff' },
            },
        }}></SeriesDirective>
          <SeriesDirective dataSource={data3} xName="x" yName="y" name="UK Total" type="Column" groupName="UK" columnWidth={0.7} columnSpacing={0.1} marker={{
            dataLabel: {
                visible: true,
                position: 'Top',
                font: { fontWeight: '600', color: '#ffffff' },
            },
        }}></SeriesDirective>
          <SeriesDirective dataSource={data4} xName="x" yName="y" name="UK Gold" type="Column" groupName="UK" columnWidth={0.5} columnSpacing={0.1} marker={{
            dataLabel: {
                visible: true,
                position: 'Top',
                font: { fontWeight: '600', color: '#ffffff' },
            },
        }}></SeriesDirective>
          <SeriesDirective dataSource={data5} xName="x" yName="y" name="China Total" type="Column" groupName="China" columnWidth={0.7} columnSpacing={0.1} marker={{
            dataLabel: {
                visible: true,
                position: 'Top',
                font: { fontWeight: '600', color: '#ffffff' },
            },
        }}></SeriesDirective>
          <SeriesDirective dataSource={data6} xName="x" yName="y" name="China Gold" type="Column" groupName="China" columnWidth={0.5} columnSpacing={0.1} marker={{
            dataLabel: {
                visible: true,
                position: 'Top',
                font: { fontWeight: '600', color: '#ffffff' },
            },
        }}></SeriesDirective>
        </SeriesCollectionDirective>
      </ChartComponent>);
    }
}
export default Bar ; 





