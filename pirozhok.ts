export class Pirozhok {
    private vx = 3;
    private currentScreen: number = 0;
    private isMoving = false;
    private sprite: any = null;
    private screens: { x: number, y: number }[] = [
        { x: 10, y: 40 },
        { x: 100, y: 40 },
        { x: 190, y: 40 },
        { x: 280, y: 40 },
        { x: 370, y: 40 },
        { x: 460, y: 40 },
        { x: 550, y: 40 },
        { x: 640, y: 40 },
        { x: 730, y: 40 },

        { x: 10, y: 210 },
        { x: 100, y: 210 },
        { x: 190, y: 210 },
        { x: 280, y: 210 },
        { x: 370, y: 210 },
        { x: 460, y: 210 },
        { x: 550, y: 210 },
        { x: 640, y: 210 },
        { x: 730, y: 210 },

        { x: 10, y: 380 },
        { x: 100, y: 380 },
        { x: 190, y: 380 },
        { x: 280, y: 380 },
        { x: 370, y: 380 },
        { x: 460, y: 380 },
        { x: 550, y: 380 },
        { x: 640, y: 380 },
        { x: 730, y: 380 },

        { x: 10, y: 555 },
        { x: 100, y: 555 },
        { x: 190, y: 555 },
        { x: 280, y: 555 },
        { x: 370, y: 555 },
        { x: 460, y: 555 },
        { x: 550, y: 555 },
        { x: 640, y: 555 },
        { x: 730, y: 555 }
    ];
    constructor(
        private context: CanvasRenderingContext2D,
        private positionX: number,
        private positionY: number,
        private canvasWidth: number,
        private canvasHeight: number
    ) {
        this.sprite = new Image();
        this.sprite.src = 'sprite2.png'
        this.sprite.onload = () => {
            window.requestAnimationFrame(() => this.animationLoop())
        }
    }

    start() {
        this.isMoving = true
    }
    stop() {
        this.isMoving = false
    }

    animationLoop() {
        const screenWidth = 90;
        const screenHeight = 170;
        const spriteX = this.screens[this.currentScreen].x;
        const spriteY = this.screens[this.currentScreen].y;
        this.context.clearRect(0, 0, this.canvasWidth, this.canvasHeight)
        this.context.drawImage(
            this.sprite,
            spriteX,
            spriteY,
            screenWidth,
            screenHeight,
            this.positionX,
            this.positionY,
            screenWidth,
            screenHeight);
           
        if (this.isMoving) {
            this.currentScreen ++;
            if (this.currentScreen >= this.screens.length) {
                this.currentScreen = 0;
            }
            this.positionX += this.vx;
        }
    
        window.requestAnimationFrame(() => this.animationLoop())
        
    }
}