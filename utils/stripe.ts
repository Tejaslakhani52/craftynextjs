import { loadStripe } from "@stripe/stripe-js";

export const stripe: any = loadStripe(
  "pk_test_51N1RfySHvTwSTB8sK8VsmxsabkWDqN2L8KpU0nybMQoEdfPEB3aRRm93QpbbUa1fikmdgZxFgrLN7IfwllIdni4x00yql4kmC5"
);

export default stripe;
