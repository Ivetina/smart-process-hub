
import React from 'react';
import { Check } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Feature {
  text: string;
  included: boolean;
}

interface ShopItemProps {
  title: string;
  price: string;
  period?: string;
  description: string;
  features: Feature[];
  popular?: boolean;
  btnText?: string;
  onClick?: () => void;
}

const ShopItem = ({
  title,
  price,
  period = '',
  description,
  features,
  popular = false,
  btnText = 'Odaberi paket',
  onClick
}: ShopItemProps) => {
  return (
    <div 
      className={cn(
        "relative flex flex-col rounded-2xl border transition-all duration-200",
        popular ? 
          "shadow-lg border-primary/50 scale-105 md:scale-110 z-10" : 
          "border-gray-200 hover:border-primary/30 hover:shadow-md"
      )}
    >
      {popular && (
        <div className="absolute -top-5 left-0 right-0 mx-auto w-32 px-3 py-1 bg-primary text-primary-foreground text-xs font-medium text-center rounded-full">
          Najpopularniji
        </div>
      )}
      
      <div className="p-6 md:p-8 flex flex-col h-full">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-muted-foreground text-sm mb-6">{description}</p>
        
        <div className="mb-6">
          <span className="text-3xl font-bold">{price}</span>
          {period && <span className="text-muted-foreground ml-1">{period}</span>}
        </div>
        
        <ul className="mb-8 space-y-3 flex-grow">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <span className={cn(
                "flex-shrink-0 flex items-center justify-center w-5 h-5 rounded-full mr-2 mt-0.5",
                feature.included ? "bg-primary/10 text-primary" : "bg-gray-100 text-muted-foreground"
              )}>
                {feature.included ? (
                  <Check className="h-3 w-3" />
                ) : (
                  <span className="h-0.5 w-2 bg-current rounded-full" />
                )}
              </span>
              <span className={cn(
                "text-sm",
                feature.included ? "text-foreground" : "text-muted-foreground"
              )}>
                {feature.text}
              </span>
            </li>
          ))}
        </ul>
        
        <button
          onClick={onClick}
          className={cn(
            "w-full inline-flex justify-center items-center h-10 rounded-md px-4 py-2 text-sm font-medium shadow focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",
            popular ? 
              "bg-primary text-primary-foreground hover:bg-primary/90" : 
              "bg-secondary text-secondary-foreground hover:bg-secondary/80"
          )}
        >
          {btnText}
        </button>
      </div>
    </div>
  );
};

export default ShopItem;
