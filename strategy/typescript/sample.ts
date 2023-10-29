interface Strategy {
    strategyMethod(): void;
}

class ConcreteStrategyA implements Strategy {
    strategyMethod(): void {
        console.log('ConcreteStrategyA');
    }
}

class ConcreteStrategyB implements Strategy {
    strategyMethod(): void {
        console.log('ConcreteStrategyB');
    }
}

class Context {
    private strategy: Strategy;

    constructor(strategy: Strategy) {
        this.strategy = strategy;
    }

    public contextMethod(): void {
        this.strategy.strategyMethod();
    }
}

const contextA = new Context(new ConcreteStrategyA());
contextA.contextMethod();

const contextB = new Context(new ConcreteStrategyB());
contextB.contextMethod();
