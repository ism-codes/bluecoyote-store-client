export interface ShippingInfo {
    recipientName: string;
    shippingAddress: Address;
    contactInformation: ContactInfo;
    shippingMethod: string;
    specialInstructions: string;
  }
  
  export interface Address {
    streetAddress: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;
  }
  
  export interface ContactInfo {
    phoneNumber: string;
    emailAddress: string;
  }