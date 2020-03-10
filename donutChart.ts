export class DonutChart {
    private centerX: number;
    private centerY: number;
    private radius: number;
    constructor(
        private context: CanvasRenderingContext2D,
        private data: any[],
        private canvasWidth: number,
        private canvasHeight: number
        
    ) {
        this.centerX = this.canvasWidth/2;
        this.centerY = this.canvasHeight/2;
        this.radius = 100;
        this.drawDonut();
        this.drawGuidelines();
    }

    degToRad(deg: number) {
        return (Math.PI * 2) * (deg / 100);
    }

    drawDonut() {
        this.context.lineWidth = 30;
        let df = 0
        this.data.forEach((item) => {
            this.context.beginPath();
            this.context.strokeStyle = item.color;
            this.context.arc(
                this.centerX,
                this.centerY,
                this.radius,
                this.degToRad(df),
                this.degToRad(df + item.value),
                false);
            this.context.stroke();
            df += item.value;
        });
    }

    drawGuidelines() {
        let df = 0
        this.data.forEach((item) => {
            const startX = (this.radius + 30) * Math.cos(this.degToRad(df + item.value / 2)) + this.centerX;
            const startY = (this.radius + 30) * Math.sin(this.degToRad(df + item.value / 2)) + this.centerY;

            const endX = 50 * Math.cos(this.degToRad(df + item.value / 2)) + startX;
            const endY = 50 * Math.sin(this.degToRad(df + item.value / 2)) + startY;

            this.context.lineWidth = 3;
            this.context.strokeStyle = item.color;
            this.context.beginPath();
            this.context.moveTo(startX, startY);
            // draw radial line
            this.context.lineTo(endX, endY);
            // draw helper line (horizontal)
            this.context.lineTo(endX + 30 * (startX > endX ? -1 : 1), endY);
            this.context.stroke();
            // draw label
            this.context.beginPath();
            this.context.font = 'normal 12px Roboto, sans-serif';
            this.context.fillStyle = item.color;
            this.context.textAlign = startX < endX ? 'left' : 'right'
            this.context.fillText(item.label, endX + 10 * (startX > endX ? -1 : 1), endY - 10)
            // draw percentage
            this.context.beginPath();
            this.context.textAlign = 'center';
            this.context.textBaseline = 'middle';
            this.context.fillStyle = 'white';
            const percentageX = (this.radius) * Math.cos(this.degToRad(df + item.value / 2)) + this.centerX;
            const percentageY = (this.radius) * Math.sin(this.degToRad(df + item.value / 2)) + this.centerY;
            this.context.fillText(item.value + '%', percentageX, percentageY);
            this.context.stroke();

            df += item.value;
        });
    }
}