# Next.js Pizza Delivery App

A modern pizza delivery application built with Next.js, TypeScript, Styled Components, and MobX. Features include multi-language support (English/Polish), subscription system, and Stripe payment integration.

## Features

- 🍕 **Product Catalog**: Browse pizzas, combos, snacks, and desserts
- 🌍 **Multi-language Support**: Switch between English and Polish
- 💳 **Stripe Payment Integration**: Secure payment processing
- 📱 **Responsive Design**: Works on all devices
- 🎨 **Modern UI**: Clean and intuitive interface
- 🔄 **State Management**: MobX for efficient state management
- 🎯 **TypeScript**: Full type safety

## Tech Stack

- **Frontend**: Next.js, React, TypeScript
- **Styling**: Styled Components
- **State Management**: MobX
- **Payments**: Stripe
- **Language**: TypeScript

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Stripe account (for payment processing)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd next-pizza
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   Create a `.env.local` file in the root directory:
   ```env
   NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_your_publishable_key_here
   STRIPE_SECRET_KEY=sk_test_your_secret_key_here
   ```

4. **Stripe Setup**
   - Sign up for a Stripe account at [stripe.com](https://stripe.com)
   - Get your API keys from the Stripe Dashboard
   - Replace the placeholder keys in `.env.local` with your actual keys

5. **Run the development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   Navigate to [http://localhost:8080](http://localhost:8080)

## Project Structure

```
src/
├── components/          # React components
│   ├── Header/         # Header components
│   ├── Navigation/     # Navigation components
│   ├── Main/           # Main content components
│   ├── Modals/         # Modal components
│   ├── Subscription/   # Subscription components
│   ├── Payment/        # Payment components
│   └── Footer/         # Footer components
├── pages/              # Next.js pages
│   ├── api/            # API routes
│   └── subscription.tsx # Subscription page
├── stores/             # MobX stores
├── constants/          # Constants and configurations
├── utils/              # Utility functions
└── types/              # TypeScript type definitions
```

## Features in Detail

### Multi-language Support
- Switch between English and Polish using the language switcher in the header
- All text, product names, and descriptions are localized
- Language preference is saved in localStorage

### Subscription System
- Monthly and yearly subscription plans
- Premium features including:
  - Unlimited deliveries
  - 20% discount on all orders
  - Priority customer support
  - Exclusive menu items

### Payment Integration
- Secure payment processing with Stripe
- Credit card validation
- Real-time payment confirmation
- Error handling and user feedback

### Product Management
- Dynamic product catalog
- Category-based organization
- Product images with fallback icons
- Localized product descriptions

## API Routes

### `/api/create-payment-intent`
Creates a Stripe payment intent for processing payments.

**Method**: POST
**Body**:
```json
{
  "amount": 19.99,
  "currency": "usd"
}
```

**Response**:
```json
{
  "clientSecret": "pi_xxx_secret_xxx"
}
```

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` | Stripe publishable key | Yes |
| `STRIPE_SECRET_KEY` | Stripe secret key | Yes |

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Stripe Integration

The app includes a complete Stripe integration for processing payments:

1. **Client-side**: Uses `@stripe/stripe-js` for secure payment processing
2. **Server-side**: Uses `stripe` package for creating payment intents
3. **Security**: All sensitive operations are handled server-side
4. **Error Handling**: Comprehensive error handling for payment failures

### Testing Payments

For testing, use Stripe's test card numbers:
- **Success**: `4242 4242 4242 4242`
- **Decline**: `4000 0000 0000 0002`
- **Expired**: `4000 0000 0000 0069`

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

This project is licensed under the ISC License.

## Support

For support, please open an issue in the GitHub repository or contact the development team.

## Demo

The application is customized for demo purposes with:
- Professional branding for Next.js projects
- Demo-specific content and features
- Showcase of modern web development practices 