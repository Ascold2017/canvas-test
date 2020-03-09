import { BarChart } from './barChart'
window.onload = () => {
    const canvas: HTMLCanvasElement = document.querySelector('#canvas');
    canvas.width = document.body.clientWidth;
    canvas.height = document.body.clientHeight;
    const ctx: CanvasRenderingContext2D = canvas.getContext('2d');
    
    /*
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
    new BarChart(ctx, data, canvas.width, canvas.height);
}
