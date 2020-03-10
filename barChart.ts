export class BarChart {
    private gap = 20;
    private labels: string[] = []
    private values: number[] = []
    private itemSpace: number;
    constructor(
        private context: CanvasRenderingContext2D,
        private data: any[],
        private canvasWidth: number,
        private canvasHeight: number
    ) {
        this.drawAxis();
        this.labels = this.data.map(item => item.label);
        this.values = this.data.map(item => item.value);
        this.itemSpace = (this.canvasWidth - this.gap * 2) / this.data.length;
        //this.drawGuidelines();
        this.drawLabels()
        this.drawBars();
    }

    drawAxis() {
        // Y axis
        this.context.lineWidth = 4;
        
        this.context.beginPath();
        this.context.moveTo(this.gap, this.gap)
        this.context.lineTo(this.gap, this.canvasHeight - this.gap)
        this.context.stroke();
        this.context.closePath()

        // X axis
        
        this.context.beginPath();
        this.context.moveTo(this.gap, this.canvasHeight - this.gap)
        this.context.lineTo(this.canvasWidth - this.gap, this.canvasHeight - this.gap)
        this.context.stroke();
        this.context.closePath()
    }

    drawLabels() {

        for(let i = 0; i < this.labels.length; i++) {
            this.context.fillStyle = 'black'
            const xOffset = ((i + 1) * this.itemSpace) + this.gap - this.itemSpace / 2;
            this.context.font = 'normal 12px Roboto, sans-serif'
            this.context.textAlign = 'center';
            this.context.textBaseline = 'top'
            this.context.fillText(this.labels[i], xOffset, this.canvasHeight - this.gap +5)
        }
    }

    drawGuidelines() {
        for(let i = 1; i < this.labels.length; i++) {
            this.context.lineWidth = 2;
            this.context.beginPath();
            this.context.moveTo(this.gap + this.itemSpace * i, this.gap);
            this.context.lineTo(this.gap + this.itemSpace * i, this.canvasHeight - this.gap)
            this.context.stroke();
            this.context.closePath()
        }
    }

    drawBars() {
        this.values.forEach((value, i) => {
            const xOffset = (i * this.itemSpace) + this.gap + this.itemSpace / 4;
            const calcHeight = ((this.canvasHeight - this.gap * 2) * value) / 100;
            this.context.fillStyle = 'blue';
            this.context.lineWidth = 1;
            this.context.fillRect(xOffset, this.canvasHeight - this.gap - 2, this.itemSpace / 2, -calcHeight)
            this.context.fill()
            this.context.stroke();
            this.context.textAlign = 'center';
            this.context.textBaseline = 'bottom'
            this.context.fillText(value + '%', xOffset + this.itemSpace / 4, (this.canvasHeight - this.gap) - calcHeight - this.gap / 2)
        })
    }
}