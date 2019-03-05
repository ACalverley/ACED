// const reactVis = require('react-vis');
// import { HorizontalGridLines,
//   VerticalGridLines,
//   XAxis,
//   XYPlot,
//   YAxis,
//   LineMarkSeries } from 'react-vis';

// class emotionGraph extends React.Component {
//     render() {
//         return (<XYPlot width={400} height={300}><XAxis/><YAxis/>
// 				<HorizontalGridLines />
// 				<VerticalGridLines />
// 				<LineMarkSeries data={data} />
// 				</XYPlot>);
//     }
// }
// ReactDOM.render(
//     <emotionGraph />,
//     document.getElementById('root')
// );

class Greeting extends React.Component {
    render() {
        return (<p>Hello world</p>);
    }
}
ReactDOM.render(
    <Greeting />,
    document.getElementById('root')
);