
export interface FAQItem {
  question: string;
  answer: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  shop: string;
  image: string;
}

export interface Stat {
  label: string;
  value: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
