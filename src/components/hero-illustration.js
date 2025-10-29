// Impressive hero illustration for homepage

export function heroIllustration() {
  return `
    <svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg" class="w-full h-full">
      <defs>
        <linearGradient id="heroBg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#3b82f6;stop-opacity:0.15" />
          <stop offset="50%" style="stop-color:#8b5cf6;stop-opacity:0.1" />
          <stop offset="100%" style="stop-color:#1e40af;stop-opacity:0.15" />
        </linearGradient>

        <!-- Gold credit card gradient -->
        <linearGradient id="cardGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#fef3c7;stop-opacity:1" />
          <stop offset="25%" style="stop-color:#fde047;stop-opacity:1" />
          <stop offset="50%" style="stop-color:#fcd34d;stop-opacity:1" />
          <stop offset="75%" style="stop-color:#f59e0b;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#d4af37;stop-opacity:1" />
        </linearGradient>

        <!-- Metallic texture pattern -->
        <pattern id="metalTexture" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse">
          <line x1="0" y1="0" x2="4" y2="4" stroke="#000000" stroke-width="0.5" opacity="0.05"/>
        </pattern>

        <linearGradient id="wireGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#06b6d4;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#0891b2;stop-opacity:1" />
        </linearGradient>

        <filter id="heroShadow">
          <feGaussianBlur in="SourceGraphic" stdDeviation="3" />
          <feOffset dx="0" dy="4" result="offsetblur" />
          <feComponentTransfer>
            <feFuncA type="linear" slope="0.3"/>
          </feComponentTransfer>
        </filter>

        <filter id="glow">
          <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>

        <filter id="shine">
          <feGaussianBlur in="SourceGraphic" stdDeviation="2" />
        </filter>
      </defs>

      <!-- Background circle -->
      <circle cx="250" cy="250" r="240" fill="url(#heroBg)" opacity="0.8"/>

      <!-- Animated blockchain network background -->
      <!-- Nodes -->
      <circle cx="150" cy="150" r="8" fill="#3b82f6" opacity="0.3"/>
      <circle cx="350" cy="150" r="8" fill="#8b5cf6" opacity="0.3"/>
      <circle cx="250" cy="100" r="8" fill="#06b6d4" opacity="0.3"/>
      <circle cx="150" cy="350" r="8" fill="#06b6d4" opacity="0.3"/>
      <circle cx="350" cy="350" r="8" fill="#3b82f6" opacity="0.3"/>

      <!-- Network connections -->
      <line x1="150" y1="150" x2="250" y2="100" stroke="url(#wireGrad)" stroke-width="1.5" opacity="0.4"/>
      <line x1="350" y1="150" x2="250" y2="100" stroke="url(#wireGrad)" stroke-width="1.5" opacity="0.4"/>
      <line x1="150" y1="150" x2="150" y2="350" stroke="url(#wireGrad)" stroke-width="1.5" opacity="0.4"/>
      <line x1="350" y1="150" x2="350" y2="350" stroke="url(#wireGrad)" stroke-width="1.5" opacity="0.4"/>
      <line x1="150" y1="350" x2="350" y2="350" stroke="url(#wireGrad)" stroke-width="1.5" opacity="0.4"/>

      <!-- Credit Card -->
      <g transform="translate(250, 250) rotate(-15)" filter="url(#heroShadow)">
        <!-- Card body with rounded corners -->
        <rect x="-100" y="-65" width="200" height="130" rx="12" ry="12" fill="url(#cardGrad)"/>
        <!-- Metallic texture overlay -->
        <rect x="-100" y="-65" width="200" height="130" rx="12" ry="12" fill="url(#metalTexture)" opacity="0.3"/>

        <!-- Card top shine effect -->
        <ellipse cx="-40" cy="-50" rx="60" ry="25" fill="white" opacity="0.15"/>

        <!-- Chip indicator (top-left) -->
        <rect x="-85" y="-50" width="20" height="20" rx="2" ry="2" fill="#d4af37" opacity="0.7"/>
        <rect x="-82" y="-47" width="14" height="14" fill="none" stroke="#8b7506" stroke-width="0.5" opacity="0.5"/>

        <!-- Bitcoin symbol (left side) -->
        <text x="-60" y="-5" font-size="32" font-weight="bold" fill="#d4af37" text-anchor="middle" opacity="0.9">₿</text>

        <!-- Ethereum symbol (center) -->
        <text x="0" y="-5" font-size="32" font-weight="bold" fill="#d4af37" text-anchor="middle" opacity="0.9">Ξ</text>

        <!-- Solana symbol (right side) -->
        <text x="60" y="-5" font-size="32" font-weight="bold" fill="#d4af37" text-anchor="middle" opacity="0.9">◎</text>

        <!-- Bottom accent line -->
        <line x1="-95" y1="35" x2="95" y2="35" stroke="#d4af37" stroke-width="1.5" opacity="0.4"/>

        <!-- Card edge highlight -->
        <rect x="-100" y="-65" width="200" height="130" rx="12" ry="12" fill="none" stroke="#ffffff" stroke-width="1" opacity="0.2"/>
      </g>


      <!-- Outer glow ring -->
      <circle cx="250" cy="250" r="240" fill="none" stroke="#3b82f6" stroke-width="1" opacity="0.2"/>
      <circle cx="250" cy="250" r="235" fill="none" stroke="#8b5cf6" stroke-width="0.5" opacity="0.15"/>
    </svg>
  `;
}
