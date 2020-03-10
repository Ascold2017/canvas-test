import { BarChart } from './barChart'
import { DonutChart } from './donutChart'
import { Pirozhok } from './pirozhok'
window.onload = () => {
    const canvasBarChart: HTMLCanvasElement = document.querySelector('#canvas');
    canvasBarChart.width = document.body.clientWidth;
    canvasBarChart.height = 300;
    const ctx: CanvasRenderingContext2D = canvasBarChart.getContext('2d');
    
    const pirozhok = new Pirozhok(ctx, 100, 100, canvasBarChart.width, canvasBarChart.height);
    //pirozhok.setVelocity(3)
    //pirozhok.start();
    window.addEventListener('keydown', event => {
        if (event.code === 'Space') {
            pirozhok.start();
        }
    })
    window.addEventListener('keyup', event => {
        if (event.code === 'Space') {
            pirozhok.stop();
        }
    })
}
