abstract class AbstractClass {
    templateMethod() {
        this.method1();
        this.method2();
        this.method3();
    }

    protected abstract method1():void

    protected abstract method2():void

    protected abstract method3():void
}

class ConcreteClass extends AbstractClass {
    protected method1() {
        console.log('method1');
    }

    protected method2() {
        console.log('method2');
    }

    protected method3() {
        console.log('method3');
    }
}
