const { $ } = require('@wdio/globals');
const Page = require('./page');
class DrawingPage {
    get drawingCanvas() {
        return $('//android.widget.TextView[@resource-id="com.saucelabs.mydemoapp.android:id/itemTV" and @text="Drawing"]');
    }
    async clickDrawing() {
        await this.drawingCanvas.click();
    }
    async drawRectangle() {
        
        const { width, height } = await browser.getWindowRect();
        // Set relative coordinates for rectangle drawing
        const startX = Math.round(width * 0.3);  // 30% from left
        const startY = Math.round(height * 0.4); // 40% from top
        const endX = Math.round(width * 0.7);    // 70% from left
        const endY = Math.round(height * 0.7);   // 70% from top
       
        await browser.performActions([
            {
                type: "pointer",
                id: "finger1",
                parameters: { pointerType: "touch" },
                actions: [
                    { type: "pointerMove", duration: 0, x: startX, y: startY },
                    { type: "pointerDown", button: 0 },
                    { type: "pointerMove", duration: 300, x: endX, y: startY }, // Right
                    { type: "pointerMove", duration: 300, x: endX, y: endY }, // Down
                    { type: "pointerMove", duration: 300, x: startX, y: endY }, // Left
                    { type: "pointerMove", duration: 300, x: startX, y: startY }, // Back to start
                    { type: "pointerUp", button: 0 }
                ]
            }
        ]);
    }
}
module.exports = new DrawingPage();