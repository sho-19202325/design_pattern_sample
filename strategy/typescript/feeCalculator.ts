interface MembershipFeeStrategy {
    calculateShippingFee: (basePrice: number) => number;
    applyDiscount: (basePrice: number) => number;
}
  
class RegularMemberFee implements MembershipFeeStrategy {
    private SHIPPING_FEE = 500;
    private SHIPPING_FREE_THRESHOLD = 10000;

    calculateShippingFee(basePrice: number): number {
      return basePrice < this.SHIPPING_FREE_THRESHOLD ? this.SHIPPING_FEE : 0;
    }
  
    applyDiscount(basePrice: number): number {
      return basePrice;
    }
}
  
class PremiumMemberFee implements MembershipFeeStrategy {
    private DISCOUNT_RATE = 0.05;

    calculateShippingFee(basePrice: number): number {
        return 0;
    }
  
    applyDiscount(basePrice: number): number {
      return basePrice * (1 - this.DISCOUNT_RATE);
    }
}

// プレミアムプラス会員の計算ロジックを追加
class PremiumPlusMemberFee implements MembershipFeeStrategy {
    private DISCOUNT_RATE = 0.1;

    calculateShippingFee(basePrice: number): number {
        return 0;
    }
  
    applyDiscount(basePrice: number): number {
      return basePrice * (1 - this.DISCOUNT_RATE);
    }
}
  
class FeeContext {
    private strategy: MembershipFeeStrategy;
  
    constructor(strategy: MembershipFeeStrategy) {
      this.strategy = strategy;
    }
  
    calculateFee(basePrice: number): number {
      const priceAfterDiscount = this.strategy.applyDiscount(basePrice);
      const finalPrice = priceAfterDiscount + this.strategy.calculateShippingFee(priceAfterDiscount);
      return finalPrice;
    }
}
  
// キャンペーン期間中の計算ロジックを追加
class CampaignFeeContext {
    private strategy: MembershipFeeStrategy;
    private CAMPAIGN_DISCOUNT_RATE = 0.1;

    constructor(strategy: MembershipFeeStrategy) {
      this.strategy = strategy;
    }

    calculateFee(basePrice: number): number {
      let priceAfterDiscount = this.strategy.applyDiscount(basePrice);
      if (this.isCampaign()) priceAfterDiscount = this.campaignDiscount(priceAfterDiscount);
      const finalPrice = priceAfterDiscount + this.strategy.calculateShippingFee(priceAfterDiscount);
      return finalPrice;
    }

    private campaignDiscount(basePrice: number): number {
        return basePrice * (1 - this.CAMPAIGN_DISCOUNT_RATE);
    }

    private isCampaign(): boolean {
        return Date.now() >= new Date("2023-10-01 00:00:00").getTime() && Date.now() <= new Date("2023-11-30 23:59:59").getTime()
    }
}
  
// 使用例
const campaignRegularContext = new CampaignFeeContext(new RegularMemberFee());
console.log(campaignRegularContext.calculateFee(9000));
// => 8600

const campaignPremiumContext = new CampaignFeeContext(new PremiumMemberFee());
console.log(campaignPremiumContext.calculateFee(9000));
// => 7695

const campaignPremiumPlusContext = new CampaignFeeContext(new PremiumPlusMemberFee());
console.log(campaignPremiumPlusContext.calculateFee(9000));
// => 7290
