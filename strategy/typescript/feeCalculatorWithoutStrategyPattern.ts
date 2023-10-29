class RegularMember {
    private SHIPPING_FEE = 500;
    private SHIPPING_FREE_THRESHOLD = 10000;
    private CAMPAIGN_DISCOUNT_RATE = 0.1;

    calculateFee(basePrice: number): number {
      let priceAfterDiscount = this.applyDiscount(basePrice);

      if (this.isCampaign()) priceAfterDiscount = this.campaignDiscount(priceAfterDiscount);
      const finalPrice = priceAfterDiscount + this.calculateShippingFee(priceAfterDiscount);
      return finalPrice;
    }

    private calculateShippingFee(basePrice: number): number {
        return basePrice < this.SHIPPING_FREE_THRESHOLD ? this.SHIPPING_FEE : 0;
    }
  
    private applyDiscount(basePrice: number): number {
        return basePrice;
    }

    private isCampaign(): boolean {
        return Date.now() >= new Date("2023-10-01 00:00:00").getTime() && Date.now() <= new Date("2023-11-30 23:59:59").getTime()
    }

    private campaignDiscount(basePrice: number): number {
        return basePrice * (1 - this.CAMPAIGN_DISCOUNT_RATE);
    }
}

class PremiumMember {
    private DISCOUNT_RATE = 0.05;
    private CAMPAIGN_DISCOUNT_RATE = 0.1;

    calculateFee(basePrice: number): number {
        let priceAfterDiscount = this.applyDiscount(basePrice);

        if (this.isCampaign()) priceAfterDiscount = this.campaignDiscount(priceAfterDiscount);
        const finalPrice = priceAfterDiscount + this.calculateShippingFee(priceAfterDiscount);
        return finalPrice;
    }

    private calculateShippingFee(basePrice: number): number {
        return 0;
    }
  
    private applyDiscount(basePrice: number): number {
        return basePrice * (1 - this.DISCOUNT_RATE);
    }

    private isCampaign(): boolean {
        return Date.now() >= new Date("2023-10-01 00:00:00").getTime() && Date.now() <= new Date("2023-11-30 23:59:59").getTime()
    }

    private campaignDiscount(basePrice: number): number {
        return basePrice * (1 - this.CAMPAIGN_DISCOUNT_RATE);
    }
}

class PremiumPlusMember {
    private DISCOUNT_RATE = 0.1;
    private CAMPAIGN_DISCOUNT_RATE = 0.1;

    calculateFee(basePrice: number): number {
        let priceAfterDiscount = this.applyDiscount(basePrice);

        if (this.isCampaign()) priceAfterDiscount = this.campaignDiscount(priceAfterDiscount);
        const finalPrice = priceAfterDiscount + this.calculateShippingFee(priceAfterDiscount);
        return finalPrice;
    }

    private calculateShippingFee(basePrice: number): number {
        return 0;
    }

    private isCampaign(): boolean {
        return Date.now() >= new Date("2023-10-01 00:00:00").getTime() && Date.now() <= new Date("2023-11-30 23:59:59").getTime()
    }
  
    private applyDiscount(basePrice: number): number {
        return basePrice * (1 - this.DISCOUNT_RATE);
    }

    private campaignDiscount(basePrice: number): number {
        return basePrice * (1 - this.CAMPAIGN_DISCOUNT_RATE);
    }
}

// 使用例
// 通常会員が9000円の買い物をした時
const regularMember = new RegularMember();
console.log(regularMember.calculateFee(9000));
// => 8600

// プレミアム会員が9000円の買い物をした時
const premiumMember = new PremiumMember();
console.log(premiumMember.calculateFee(9000));
// => 7695

// プレミアムプラス会員が9000円の買い物をした時
const premiumPlusMember = new PremiumPlusMember();
console.log(premiumPlusMember.calculateFee(9000));
// => 7290
