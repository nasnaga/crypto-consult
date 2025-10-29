# Crypto Consult - Web3 & Blockchain Consultancy Website

A professional website for Crypto Consult, offering expert Web3 and blockchain consultancy services.

## Features

- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Multi-Page Navigation**: Home, Services, About, and Contact pages
- **Service Showcase**: Detailed descriptions of consulting offerings
- **Expert Team**: Meet our experienced blockchain consultants
- **Contact Form**: Email form with submission handling to contact@nasnaga.com.au
- **Professional UI**: Modern dark theme with gradient accents
- **SEO Optimized**: Meta tags and semantic HTML

## Services Offered

1. **Strategy & Blockchain Adoption**
   - Blockchain assessment and evaluation
   - Technology selection and recommendation
   - Implementation roadmap development
   - Risk management and compliance

2. **Smart Contract Development & Audit**
   - Custom smart contract development
   - Security audits and code reviews
   - Gas optimization
   - Multi-chain deployment

3. **Security & Compliance**
   - Penetration testing
   - Compliance review
   - Risk assessment
   - 24/7 incident response

4. **DeFi Advisory & Tokenomics**
   - Tokenomics design
   - Protocol analysis
   - Yield optimization
   - Fund management

## Tech Stack

- **Frontend Framework**: Vanilla JavaScript (ES Modules)
- **Styling**: Tailwind CSS 4.1.16
- **Build Tool**: Vite 7.1.12
- **Testing**: Vitest 4.0.3
- **Routing**: Custom client-side router

## Project Structure

```
crypto-consult/
├── src/
│   ├── pages/
│   │   ├── home.js          # Homepage with hero and services
│   │   ├── services.js      # Detailed services page
│   │   ├── about.js         # About company and team
│   │   └── contact.js       # Contact form page
│   └── components/
│       └── navigation.js    # Navigation bar component
├── app.js                   # Main application and router
├── index.html              # Entry point
├── styles.css              # Global styles
├── vite.config.js          # Vite configuration
├── vitest.config.js        # Vitest configuration
├── tailwind.config.js      # Tailwind CSS configuration
└── postcss.config.js       # PostCSS configuration
```

## Getting Started

### Installation

```bash
cd /home/yokki/workspace/crypto-consult
npm install
```

### Development

```bash
npm run dev
```

The site will be available at `http://localhost:5173`

### Build

```bash
npm run build
```

### Testing

```bash
npm run test
npm run test:ui
```

## Contact Form

The contact form collects:
- Full name
- Email address
- Company name
- Subject (dropdown with service categories)
- Message

Form submissions are handled with a fallback mechanism that directs users to email contact@nasnaga.com.au

## Engagement Models

### 1. Project-Based
- Fixed scope and pricing
- Defined deliverables
- Clear timeline

### 2. Retainer
- Ongoing support
- Dedicated team
- Priority support
- Scalable hours

### 3. Staff Augmentation
- Full-time resources
- Flexible commitment
- Technical expertise

## Team

- **Alex Chen** - Founder & Lead Consultant (10+ years blockchain)
- **Sarah Williams** - Smart Contract Lead (8+ years development)
- **David Park** - Security Expert (Penetration testing & DeFi)
- **Jessica Moore** - Compliance Officer (Regulatory expertise)

## Key Achievements

- 50+ successful projects
- $2B+ in assets secured
- 4 blockchain networks expertise
- 24/7 support available
- 4.9/5 client satisfaction rating

## Support

Business Hours: Monday - Friday, 9 AM - 6 PM AEST
Response Time: Typically within 24 business hours
Email: contact@nasnaga.com.au

## License

MIT License - 2024 Crypto Consult
