import { BarChart } from './barChart'
import { DonutChart } from './donutChart'
window.onload = () => {
    const canvasBarChart: HTMLCanvasElement = document.querySelector('#canvas');
    canvasBarChart.width = 800;
    canvasBarChart.height = 500;
    const ctx: CanvasRenderingContext2D = canvasBarChart.getContext('2d');
    
    /*
    Line
    ctx.beginPath();
    ctx.lineWidth = 15;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.strokeStyle = '#ccc';
    ctx.moveTo(30, 30);
    ctx.lineTo(100, 30);
    ctx.lineTo(50, 100);
    ctx.lineTo(120, 70);
    ctx.stroke();
    ctx.closePath();
    */
    const data = [
        { label: 'Monday', value: 11},
        { label: 'Tuesday', value: 88},
        { label: 'Wednesday', value: 67},
        { label: 'Thursday', value: 44},
        { label: 'Friday', value: 65},
        { label: 'Sunday', value: 24}
    ]
    new BarChart(ctx, data, canvasBarChart.width, canvasBarChart.height);

    const canvasDonutChart: HTMLCanvasElement = document.querySelector('#canvas2');
    canvasDonutChart.width = 800;
    canvasDonutChart.height = 500;
    const ctx2: CanvasRenderingContext2D = canvasDonutChart.getContext('2d');

    const data2 = [
        { label: 'Foo', value: 33, color: 'red'},
        { label: 'Bar', value: 55, color: 'green'},
        { label: 'Baz', value: 12, color: 'blue'}
    ];

    new DonutChart(ctx2, data2, canvasDonutChart.width, canvasDonutChart.height);
}
