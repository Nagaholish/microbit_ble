
/**
* このファイルを使って、独自の関数やブロックを定義してください。
* 詳しくはこちらを参照してください：https://makecode.microbit.org/blocks/custom
*/

enum MyEnum {
    //% block="MyEventMES_4649"
    MyEventMES_4649 = 4649,
    //% block="MyEventMES_5963"
    MyEventMES_5963 = 5963,
}

/**
 * Custom blocks
 */
//% weight=100 color=#0fbc11 icon=""
namespace custom {

    /**
     * Registers an event handler.
     */
    //% weight=20 blockGap=8 blockId="custom_on_event" block="on event|from %src=MyEnum|with value %value=MyEnum"
    //% help=control/on-event
    //% blockExternalInputs=1
    export function onEvent(id: MyEnum, event: MyEnum, handler: Action): void {
        control.onEvent(id, event, 
        function() { 
            serial.writeLine("aaaaaaaaaaaaaaaa");
            handler();
        });
    }
    
    
    /**
     * TODO: describe your function here
     * @param n describe parameter here, eg: 5
     * @param s describe parameter here, eg: "Hello"
     * @param e describe parameter here
     */
    //% block
    export function foo(n: number, s: string, e: MyEnum): void {
        // Add code here
    }

    /**
     * TODO: describe your function here
     * @param value describe value here, eg: 5
     */
    //% block
    export function fib(value: number): number {
        return value <= 1 ? value : fib(value -1) + fib(value - 2);
    }
}
