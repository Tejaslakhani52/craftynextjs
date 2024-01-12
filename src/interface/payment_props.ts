export interface RazorpayProps {
  key: string;
  name: string;
  customer_id: string;
  description: string;
  order_id: string;
  remember_customer: boolean;
}

export interface PaymentProps {
  id: string;
  type: number;
  inrVal: number;
  usdVal: number;
  inrAmount: string;
  usdAmount: string;
}

export interface PaymentStatusProps {
  success: boolean;
  msg: string;
}

export interface PurchaseItemProps {
  id: string;
  type: number;
}
