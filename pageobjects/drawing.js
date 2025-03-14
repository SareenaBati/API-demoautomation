const { $, browser } = require('@wdio/globals');
const Page = require('./page');

class DrawingPage {
    get drawingCanvas() {
        return $('//android.widget.TextView[@resource-id="com.saucelabs.mydemoapp.android:id/itemTV" and @text="Drawing"]');
    }

    get save_button(){
        return $('//android.widget.Button[@content-desc="Save anything drawn on pad"]');
    }

    get ok_button(){
        return $('//android.widget.Button[@resource-id="android:id/button1"]');
    }

    async clickDrawing() {
        await this.drawingCanvas.click();
    }

    async drawTriangle() {
        const { width, height } = await browser.getWindowRect();
        
        // Triangle coordinates (roughly centered)
        const startX = Math.round(width * 0.5);  // Top point (centered horizontally)
        const startY = Math.round(height * 0.3); // 30% from top
        const leftX = Math.round(width * 0.3);   // Bottom left
        const bottomY = Math.round(height * 0.7); // 70% from top
        const rightX = Math.round(width * 0.7);  // Bottom right

        await browser.performActions([
            {
                type: "pointer",
                id: "finger1",
                parameters: { pointerType: "touch" },
                actions: [
                    { type: "pointerMove", duration: 0, x: startX, y: startY }, // Move to top point
                    { type: "pointerDown", button: 0 }, // Start drawing
                    { type: "pointerMove", duration: 300, x: leftX, y: bottomY }, // Move to bottom left
                    { type: "pointerMove", duration: 300, x: rightX, y: bottomY }, // Move to bottom right
                    { type: "pointerMove", duration: 300, x: startX, y: startY }, // Back to top
                    { type: "pointerUp", button: 0 } // Finish drawing
                ]
            }
        ]);
    }

    async click_save_button(){
        await this.save_button.click();
    }

    async click_ok_button(){
        await this.ok_button.click();
    }
    
}

module.exports = new DrawingPage();
