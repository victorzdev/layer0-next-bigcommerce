# Next.js BigCommerce Layer0

High performance eCommerce with the power of Layer0.

## ⚡️ Quick Start

### Requirements

- [Next.js](https://nextjs.org/)
- [Layer0](https://www.layer0.co/)
- [BigCommerce](https://www.bigcommerce.com/)
- Environment Variables (see below)

For in-depth details, see: https://docs.layer0.co/guides/next

#### Create a Next.js Application

```bash
npm create-next-app layer0-app
```

#### Install and Initialize Layer0

```bash
npm install -g @layer0/cli
layer0 init
```

## 🚀 Getting Started

The goal of this project is to create a headless storefront deployed on Layer0 for sub-second speeds.
We will use BigCommerce (with its [GraphQL Storefront API](https://developer.bigcommerce.com/api-reference/graphql/graphql)) for our backend, and Next.js for our frontend.

### Environment

BIGCOMMERCE_STOREFRONT_API_URL=<>
BIGCOMMERCE_STOREFRONT_API_TOKEN=<>
BIGCOMMERCE_STORE_API_URL=<>
BIGCOMMERCE_STORE_API_TOKEN=<>
BIGCOMMERCE_STORE_API_CLIENT_ID=<>
BIGCOMMERCE_CHANNEL_ID=<>
