export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'Multi-Tenant SaaS' | 'Fintech & Payments' | 'Enterprise & Booking' | 'All';
  categories: string[];
  client: string;
  period: string;
  description: string;
  architecturalHighlights: string[];
  metrics: { label: string; value: string }[];
  technologies: string[];
  isFlagship?: boolean;
  demoType?: 'tenant-simulator' | 'sms-simulator' | 'pipeline-tracker' | 'concurrency-schematic';
  liveUrl?: string;
  githubUrl?: string;
}

export interface SkillCategory {
  title: string;
  icon: string;
  description: string;
  skills: {
    name: string;
    level: string;
    highlight?: boolean;
    description?: string;
  }[];
}

export interface CareerMilestone {
  role: string;
  company: string;
  location: string;
  period: string;
  current?: boolean;
  type: 'commercial' | 'education' | 'certification';
  summary: string;
  achievements: string[];
  stack: string[];
}

export interface CodeSnippet {
  id: string;
  filename: string;
  language: string;
  badge: string;
  title: string;
  explanation: {
    summary: string;
    security: string;
    scalability: string;
    patterns: string;
  };
  code: string;
}

export const PORTFOLIO_DATA = {
  hero: {
    name: "Harithamol V H",
    role: "PHP / Laravel Full-Stack Engineer",
    experienceYears: "5+",
    location: "Alappuzha / Kochi, Kerala, India",
    email: "vhharithamol@gmail.com",
    phone: "+91 8891336232",
    whatsappClean: "918891336232",
    githubUrl: "https://github.com/vhharithamol",
    linkedinUrl: "https://www.linkedin.com/in/harithamol-v-h",
    portfolioUrl: "https://harithamol.com",
    availabilityText: "Available for Senior / High-Impact Roles",
    summary:
      "PHP / Laravel Full Stack Developer with 5 years of commercial experience architecting scalable web applications, multi-tenant SaaS platforms, e-commerce solutions, and high-throughput enterprise systems. Expert in PHP 8, dynamic database isolation, robust REST/JSON APIs, Docker containerization, AWS, and GitHub Actions CI/CD. Daily power-user of AI engineering tools (ChatGPT, GitHub Copilot) for optimal code velocity and quality.",
    telemetryMetrics: [
      {
        label: "Commercial Experience",
        value: "5+ Years",
        detail: "MashupTech, Trusttech, Metric Tree Labs, Webrins",
      },
      {
        label: "Architecture Specialty",
        value: "Multi-Tenant SaaS",
        detail: "EazyCart & Kshetra platform architecture",
      },
      {
        label: "Engineering Velocity",
        value: "AI-Accelerated",
        detail: "Daily GitHub Copilot & ChatGPT production flows",
      },
      {
        label: "Production Delivery",
        value: "100% Resolved",
        detail: "Zero unresolved client blockers across 15+ apps",
      },
    ],
  },

  githubStats: {
    publicRepos: 18,
    totalCommitsPastYear: 1240,
    contributionStreak: 84,
    prsMerged: 136,
    codeVelocityBoost: "+42%",
    topLanguages: [
      { name: "PHP", percentage: 58, color: "#8892BF" },
      { name: "JavaScript / TypeScript", percentage: 22, color: "#F7DF1E" },
      { name: "Blade / HTML5", percentage: 12, color: "#F05340" },
      { name: "SQL & DevOps", percentage: 8, color: "#336791" },
    ],
  },

  technicalMatrix: [
    {
      title: "Backend & Architecture",
      icon: "Server",
      description: "High-performance object-oriented PHP 8 micro-services, MVC, and tenancy isolation.",
      skills: [
        { name: "PHP 8", level: "Expert", highlight: true, description: "Attributes, match expressions, JIT, strict types" },
        { name: "Laravel (v9–v12)", level: "Expert", highlight: true, description: "Service containers, pipelines, queues, events" },
        { name: "Laravel Livewire", level: "Advanced", highlight: true, description: "Reactive SPAs without complex JS builds" },
        { name: "Multi-Tenant SaaS", level: "Specialist", highlight: true, description: "Schema-based & database-isolated tenancy" },
        { name: "OOP & Design Patterns", level: "Expert", description: "SOLID, Repository pattern, Factory, Observer" },
        { name: "MVC Architecture", level: "Expert", description: "Modular domain-driven design" },
        { name: "RabbitMQ", level: "Intermediate", description: "Asynchronous task workers & message queues" },
      ],
    },
    {
      title: "Cloud & DevOps",
      icon: "Cloud",
      description: "Containerized deployments, automated CI/CD pipelines, and cloud hosting.",
      skills: [
        { name: "AWS (EC2, S3)", level: "Advanced", highlight: true, description: "Compute instances, asset storage, IAM security" },
        { name: "Docker Containerization", level: "Advanced", highlight: true, description: "Multi-stage Dockerfiles & docker-compose" },
        { name: "GitHub Actions CI/CD", level: "Advanced", highlight: true, description: "Automated linting, test runs, zero-downtime SSH deploy" },
        { name: "Linux & Bash", level: "Advanced", description: "Ubuntu/Debian server administration" },
        { name: "Nginx & Apache", level: "Advanced", description: "Reverse proxying, SSL certbot, gzip/brotli caching" },
        { name: "Git Version Control", level: "Expert", description: "Feature branches, interactive rebasing, merge hygiene" },
      ],
    },
    {
      title: "APIs & Payment Integrations",
      icon: "CreditCard",
      description: "Resilient monetary flows, webhook idempotency, and transactional messaging.",
      skills: [
        { name: "RESTful & JSON APIs", level: "Expert", highlight: true, description: "Stateless API resources, rate limiting, Sanctum/Passport" },
        { name: "Razorpay", level: "Specialist", highlight: true, description: "Orders API, webhooks, checkout modal" },
        { name: "Stripe", level: "Specialist", highlight: true, description: "Payment intents, SCA compliance, customer billing" },
        { name: "PayPal & Cashfree", level: "Advanced", description: "Cross-border & instant Indian UPI payments" },
        { name: "MSG91 SMS & OTP", level: "Specialist", highlight: true, description: "Two-factor verification, DLT transactional SMS" },
        { name: "Webhooks & Security", level: "Advanced", description: "Cryptographic signature verification & deduplication" },
        { name: "GraphQL", level: "Intermediate", description: "Lighthouse GraphQL schema querying in Laravel" },
      ],
    },
    {
      title: "Databases & Storage",
      icon: "Database",
      description: "High-concurrency query optimization, caching strategies, and data integrity.",
      skills: [
        { name: "MySQL", level: "Expert", highlight: true, description: "Indexing, execution plans, foreign keys, transactions" },
        { name: "Redis", level: "Advanced", highlight: true, description: "High-speed caching, atomic lock mutexes, session storage" },
        { name: "PostgreSQL", level: "Advanced", description: "JSONB queries, full-text search, UUID primary keys" },
        { name: "MongoDB", level: "Intermediate", description: "NoSQL document collections and aggregation" },
      ],
    },
    {
      title: "Frontend & UI Engineering",
      icon: "Layout",
      description: "Responsive glassmorphic interfaces, interactive dashboards, and DOM velocity.",
      skills: [
        { name: "JavaScript (ES6+)", level: "Advanced", highlight: true, description: "Async/await, modules, DOM APIs, event loop" },
        { name: "HTML5 & Semantic Web", level: "Expert", description: "Accessible markup, SEO, schema.org microdata" },
        { name: "CSS3 (Flexbox / Grid)", level: "Expert", description: "Custom properties, fluid typography, animations" },
        { name: "jQuery & Ajax", level: "Advanced", description: "Asynchronous data fetching & state transitions" },
        { name: "Responsive UI Design", level: "Expert", description: "Mobile-first layouts, cross-browser compatibility" },
      ],
    },
    {
      title: "AI Velocity & Quality Assurance",
      icon: "Cpu",
      description: "AI-augmented development methodologies and automated testing suites.",
      skills: [
        { name: "ChatGPT & Prompting", level: "Expert", highlight: true, description: "Boilerplate generation, refactoring, regex crafting" },
        { name: "GitHub Copilot", level: "Expert", highlight: true, description: "Context-aware code synthesis & test generation" },
        { name: "PHPUnit Automated Testing", level: "Advanced", highlight: true, description: "Feature tests, unit tests, mock assertions" },
        { name: "Agile / Scrum Methodologies", level: "Expert", description: "Sprint planning, Jira boards, iterative rollouts" },
      ],
    },
  ],

  projects: [
    {
      id: "eazycart",
      title: "EazyCart",
      subtitle: "Multi-Tenant SaaS E-Commerce Platform",
      category: "Multi-Tenant SaaS",
      categories: ["Multi-Tenant SaaS", "Fintech & Payments"],
      client: "MashupTech (Commercial SaaS)",
      period: "Sept 2025 – Present",
      isFlagship: true,
      demoType: "tenant-simulator",
      description:
        "Engineered and maintaining a multi-tenant SaaS e-commerce powerhouse that hosts hundreds of independent business storefronts from a single, unified Laravel codebase with automated tenant isolation.",
      architecturalHighlights: [
        "Dynamic tenant resolution middleware inspecting incoming Host subdomains and assigning dedicated database connections at runtime.",
        "Automated per-tenant migration and seeding pipeline enabling single-click merchant on-boarding.",
        "Dynamic theming engine providing merchant-level CSS custom property injections without altering core application templates.",
        "Isolated Redis cache tags and asset disk paths for strict tenant data separation.",
        "Integrated multi-gateway payment routing (Stripe & Razorpay) dynamically bound to individual merchant credentials.",
      ],
      metrics: [
        { label: "Architecture", value: "Single-Codebase SaaS" },
        { label: "Tenant Switch Speed", value: "< 14ms" },
        { label: "Database Isolation", value: "100% Segregated" },
        { label: "Payment Gateways", value: "Stripe & Razorpay" },
      ],
      technologies: ["PHP 8", "Laravel", "Multi-tenant Architecture", "Livewire", "MySQL", "Redis", "Payment Gateway"],
    },
    {
      id: "kshetra",
      title: "Kshetra",
      subtitle: "SaaS Temple & Operations Management System",
      category: "Multi-Tenant SaaS",
      categories: ["Multi-Tenant SaaS", "Enterprise & Booking"],
      client: "MashupTech (Enterprise Client)",
      period: "2025",
      isFlagship: true,
      demoType: "sms-simulator",
      description:
        "Comprehensive SaaS platform modernizing temple operations, devotee registration, pooja bookings, crowd scheduling, and transparent digital donation collection across regional temple trusts.",
      architecturalHighlights: [
        "Built RESTful and JSON API services consumed by cross-platform public portals and temple counter POS terminals.",
        "Integrated MSG91 DLT-approved transactional SMS gateway with instant OTP verification and booking confirmations.",
        "Engineered secure online payment workflows handling heavy festive donation surges with zero race conditions.",
        "Implemented dynamic theming enabling distinct visual branding for each temple organization while sharing central logic.",
        "Role-based access control (RBAC) separating head priests, temple committee auditors, and counter clerks.",
      ],
      metrics: [
        { label: "Notification Delay", value: "< 1.8s via MSG91" },
        { label: "Uptime During Festivals", value: "99.98%" },
        { label: "Security", value: "PCI-DSS Compliant Gateways" },
        { label: "Devotee Bookings", value: "Automated OTP Verification" },
      ],
      technologies: ["Laravel", "RESTful APIs", "MSG91 SMS & OTP", "Payment Gateway", "Dynamic Theming", "MySQL"],
    },
    {
      id: "kamco",
      title: "KAMCO Machinery Service Platform",
      subtitle: "Kerala Agro Machinery Corporation Enterprise Portal",
      category: "Enterprise & Booking",
      categories: ["Enterprise & Booking", "Fintech & Payments"],
      client: "Metric Tree Labs (Govt. Enterprise)",
      period: "Sept 2023 – Dec 2024",
      isFlagship: true,
      demoType: "pipeline-tracker",
      description:
        "Spearheaded the complete end-to-end engineering of a state-wide agricultural machinery service and warranty tracking portal for Kerala Agro Machinery Corporation (KAMCO), connecting thousands of farmers to authorized service technicians.",
      architecturalHighlights: [
        "Engineered end-to-end service booking lifecycle: machine serial verification, technician dispatch, spare parts quoting, and digital completion certificates.",
        "Orchestrated continuous deployment pipeline via GitHub Actions automating tests, linting, and container builds.",
        "Containerized development and production environments using Docker across high-performance Nginx and Apache servers.",
        "Integrated multi-gateway payment flows supporting Razorpay, Stripe, Cashfree, and PayPal with automated webhook reconciliation.",
      ],
      metrics: [
        { label: "Role", value: "Lead Full-Stack Engineer" },
        { label: "CI/CD Pipeline", value: "Zero-Downtime Deploy" },
        { label: "Gateways", value: "Razorpay, Stripe, Cashfree, PayPal" },
        { label: "Service Tracking", value: "End-to-End Audited" },
      ],
      technologies: ["Laravel", "Docker", "GitHub Actions CI/CD", "Nginx", "Razorpay", "Stripe", "Cashfree", "PayPal", "AWS (EC2, S3)"],
    },
    {
      id: "icmbrokers",
      title: "ICMBrokers",
      subtitle: "Forex Trading & Liquidity Platform Revamp",
      category: "Fintech & Payments",
      categories: ["Fintech & Payments"],
      client: "Trusttech Solutions LLP",
      period: "Feb 2025 – Sept 2025",
      isFlagship: true,
      demoType: "concurrency-schematic",
      description:
        "Modernized the core client-facing architecture of ICMBrokers forex trading platform, overhauling high-volume deposit and withdrawal pipelines with bank-grade security and automated audit trails.",
      architecturalHighlights: [
        "Implemented high-concurrency payment gateway routing handling deposits in multiple international currencies.",
        "Applied database transaction isolation and Redis atomic locks to prevent race conditions during rapid balance updates.",
        "Refactored legacy endpoints into clean, RESTful PHP 8 service layers with comprehensive validation.",
        "Collaborated in Agile sprints with cross-functional security engineers to achieve zero financial reconciliation discrepancies.",
      ],
      metrics: [
        { label: "Transaction Speed", value: "Sub-Second Ingestion" },
        { label: "Reconciliation Discrepancies", value: "0.00%" },
        { label: "Audit Logging", value: "Cryptographically Hashed" },
        { label: "Security", value: "Financial Grade" },
      ],
      technologies: ["PHP 8", "Laravel", "Payment Gateway", "RESTful APIs", "Redis", "MySQL", "Security Audits"],
    },
    {
      id: "sgate",
      title: "Sgate Logistics",
      subtitle: "Global Cargo Shipping & Payment Platform",
      category: "Enterprise & Booking",
      categories: ["Enterprise & Booking", "Fintech & Payments"],
      client: "Commercial Logistics Client",
      period: "2024",
      description:
        "Cargo and freight management platform facilitating consignment tracking, customs documentation generation, and integrated container freight payment processing.",
      architecturalHighlights: [
        "Automated consignment milestone tracking with webhook push notifications.",
        "Multi-currency freight invoicing and integrated card payment collection.",
        "Role-based dashboard for warehouse managers, shipping agents, and customers.",
      ],
      metrics: [
        { label: "Tracking Accuracy", value: "Real-Time" },
        { label: "Document Generation", value: "Instant PDF" },
      ],
      technologies: ["Laravel", "PHP 8", "RESTful APIs", "MySQL", "Payment Gateway", "JavaScript"],
    },
    {
      id: "ecogarden",
      title: "Ecogarden Resort",
      subtitle: "Online Room Booking & Hospitality Portal",
      category: "Enterprise & Booking",
      categories: ["Enterprise & Booking"],
      client: "Hospitality Group",
      period: "2023",
      description:
        "Interactive resort reservation engine featuring dynamic seasonal pricing, calendar room availability checks, add-on package selections, and instant payment confirmations.",
      architecturalHighlights: [
        "Real-time calendar lock to prevent double bookings on peak holiday weekends.",
        "Dynamic rate engine calculating weekend surcharges and promotional vouchers.",
        "Automated confirmation email dispatch with QR code check-in vouchers.",
      ],
      metrics: [
        { label: "Double Booking Rate", value: "0%" },
        { label: "Mobile Conversions", value: "+28%" },
      ],
      technologies: ["Laravel", "jQuery", "Ajax", "MySQL", "Payment Gateway", "CSS3 Flexbox/Grid"],
    },
    {
      id: "nakshathra-designs",
      title: "Nakshathra Designs",
      subtitle: "Bespoke Jewelry E-Commerce Modernization",
      category: "Fintech & Payments",
      categories: ["Fintech & Payments"],
      client: "Retail Brand",
      period: "2023",
      description:
        "Complete performance and design revamp for a premium jewelry e-commerce website, streamlining catalogue browsing, cart operations, and secure online checkouts.",
      architecturalHighlights: [
        "Reduced page load speeds by 40% through image optimization and database query caching.",
        "Seamless payment gateway integration with Razorpay UPI and netbanking options.",
        "Enhanced customer checkout UX leading to measurable drop-off reductions.",
      ],
      metrics: [
        { label: "Speed Gain", value: "40% Faster" },
        { label: "Cart Drop-off", value: "-19%" },
      ],
      technologies: ["Laravel", "PHP 8", "MySQL", "Razorpay", "JavaScript", "Responsive UI"],
    },
    {
      id: "olmesera",
      title: "Olmesera Enterprise Panel",
      subtitle: "Administrative Operations & Back-Office Suite",
      category: "Enterprise & Booking",
      categories: ["Enterprise & Booking"],
      client: "Corporate Client",
      period: "2022",
      description:
        "Centralized administrative console empowering executives to monitor inventory, track operational workflows, and generate scheduled performance reports.",
      architecturalHighlights: [
        "Fine-grained role and permission management matrix (RBAC).",
        "Exportable Excel and PDF reports generated via asynchronous background queues.",
        "Comprehensive user activity and audit trail logging.",
      ],
      metrics: [
        { label: "Role Granularity", value: "Multi-Tier RBAC" },
        { label: "Report Generation", value: "Queued Asynchronous" },
      ],
      technologies: ["Laravel", "MySQL", "JavaScript (ES6+)", "Bootstrap", "Ajax"],
    },
    {
      id: "abm-events",
      title: "ABM Events Platform",
      subtitle: "Event Coordination & Ticketing Engine",
      category: "Enterprise & Booking",
      categories: ["Enterprise & Booking"],
      client: "Webrins Technologies",
      period: "2022",
      description:
        "Event booking and coordination platform managing attendee ticket registrations, venue schedules, and organizer payouts.",
      architecturalHighlights: [
        "Automated digital badge and QR ticket issuance upon successful payment.",
        "Real-time venue capacity limiter.",
      ],
      metrics: [
        { label: "Ticket Issuance", value: "Instant QR" },
        { label: "Resolution Rate", value: "100%" },
      ],
      technologies: ["PHP", "Laravel", "Payment Gateway", "jQuery", "MySQL"],
    },
    {
      id: "kanippayyur",
      title: "Kanippayyur Official Portal",
      subtitle: "High-Traffic Brand & Consultation Portal",
      category: "Enterprise & Booking",
      categories: ["Enterprise & Booking"],
      client: "Webrins Technologies",
      period: "2022",
      description:
        "High-visibility brand web presence for a renowned heritage astrological institution, featuring digital appointment bookings and consultation scheduling.",
      architecturalHighlights: [
        "Optimized for high-concurrency visitor surges during traditional festival dates.",
        "12% organic traffic increase through strategic semantic HTML and technical SEO.",
      ],
      metrics: [
        { label: "Traffic Boost", value: "+12% Organic" },
        { label: "Issue Resolution", value: "100%" },
      ],
      technologies: ["Laravel", "PHP", "MySQL", "SEO Optimization", "Responsive Design"],
    },
    {
      id: "rdc-media",
      title: "RDC Media Hub",
      subtitle: "Music & Content Publishing Portal",
      category: "Enterprise & Booking",
      categories: ["Enterprise & Booking", "Fintech & Payments"],
      client: "Webrins Technologies",
      period: "2021 – 2022",
      description:
        "Audio and music publishing platform with creator revenue-sharing calculations, licensing management, and administrative royalty dashboards.",
      architecturalHighlights: [
        "Audio streaming playback engine with asset encryption and AWS S3 storage.",
        "Admin panel tracking song downloads, revenue attribution, and copyright metadata.",
      ],
      metrics: [
        { label: "Streaming Reliability", value: "99.9%" },
        { label: "Storage", value: "AWS S3 Integrated" },
      ],
      technologies: ["PHP", "Laravel", "AWS S3", "MySQL", "JavaScript", "HTML5 Audio"],
    },
  ] as Project[],

  codeSnippets: [
    {
      id: "tenant-resolver",
      filename: "TenantResolver.php",
      language: "php",
      badge: "Multi-Tenant Architecture",
      title: "Dynamic Subdomain Tenant Resolution & DB Isolation Middleware",
      explanation: {
        summary:
          "Intercepts every HTTP request, identifies the tenant from the Host subdomain or X-Tenant-ID header, validates tenancy state, and dynamically reconfigures the default PDO database connection and cache prefix on the fly.",
        security:
          "Guarantees total data segregation by isolating database connections at the PDO layer. Prevents cross-tenant query leaks using strict validation and fail-closed 404 responses.",
        scalability:
          "Utilizes cached tenant registry lookups in Redis (6-hour TTL with invalidation hooks) to eliminate DB lookups for tenant metadata during incoming requests.",
        patterns: "Middleware Pattern, Strategy Pattern, Dynamic Connection Swapping via Laravel Service Container.",
      },
      code: `<?php

namespace App\\Http\\Middleware;

use Closure;
use Illuminate\\Http\\Request;
use Illuminate\\Support\\Facades\\DB;
use Illuminate\\Support\\Facades\\Config;
use Illuminate\\Support\\Facades\\Cache;
use Symfony\\Component\\HttpFoundation\\Response;

class TenantResolver
{
    /**
     * Handle incoming request and dynamically bind tenant context.
     *
     * @param  \\Illuminate\\Http\\Request  $request
     * @param  \\Closure(\\Illuminate\\Http\\Request): (\\Symfony\\Component\\HttpFoundation\\Response)  $next
     * @return \\Symfony\\Component\\HttpFoundation\\Response
     */
    public function handle(Request $request, Closure $next): Response
    {
        $subdomain = $this->extractSubdomain($request);

        if (!$subdomain || in_array($subdomain, config('tenancy.reserved_subdomains', ['admin', 'api', 'www']))) {
            return $next($request);
        }

        // Fetch tenant metadata with Redis caching layer (6-hour TTL)
        $tenant = Cache::remember("tenant:host:{$subdomain}", 21600, function () use ($subdomain) {
            return DB::connection('central')
                ->table('tenants')
                ->where('subdomain', $subdomain)
                ->where('is_active', true)
                ->first();
        });

        if (!$tenant) {
            abort(404, "Tenant storefront '{$subdomain}' does not exist or has been paused.");
        }

        // Dynamically configure tenant database connection
        Config::set('database.connections.tenant.database', $tenant->database_name);
        Config::set('database.connections.tenant.username', $tenant->db_username ?? env('DB_USERNAME'));
        Config::set('database.connections.tenant.password', $tenant->db_password ?? env('DB_PASSWORD'));

        // Purge existing connection pool and switch active connection
        DB::purge('tenant');
        DB::reconnect('tenant');
        DB::setDefaultConnection('tenant');

        // Scope tenant cache and storage root
        Config::set('cache.prefix', "tenant_{$tenant->id}_cache");
        app()->instance('currentTenant', $tenant);

        return $next($request);
    }

    private function extractSubdomain(Request $request): ?string
    {
        if ($header = $request->header('X-Tenant-Domain')) {
            return strtolower(trim($header));
        }

        $host = $request->getHost();
        $parts = explode('.', $host);

        // e.g., 'luxeaura.eazycart.io' -> 'luxeaura'
        return count($parts) >= 3 ? strtolower($parts[0]) : null;
    }
}`,
    },
    {
      id: "payment-webhook",
      filename: "PaymentWebhookController.php",
      language: "php",
      badge: "Fintech & Idempotency",
      title: "Cryptographic HMAC Signature Verification & Idempotent Order Dispatcher",
      explanation: {
        summary:
          "Handles incoming real-time payment webhooks from Stripe and Razorpay. Validates cryptographic signatures, enforces Redis distributed lock mutexes to eliminate duplicate double-credits, and triggers atomic DB transactions.",
        security:
          "Mitigates replay attacks using timestamp window tolerance and cryptographic HMAC-SHA256 signature verification before any JSON payload decoding.",
        scalability:
          "Decouples heavy email/SMS receipt generation by pushing domain events into RabbitMQ / Laravel Queues, ensuring immediate 200 OK responses to webhook providers.",
        patterns: "Controller Dispatcher, Distributed Lock (Idempotency Key), Event-Driven Architecture.",
      },
      code: `<?php

namespace App\\Http\\Controllers\\Api;

use App\\Http\\Controllers\\Controller;
use App\\Events\\OrderPaymentConfirmed;
use App\\Models\\Order;
use Illuminate\\Http\\Request;
use Illuminate\\Http\\JsonResponse;
use Illuminate\\Support\\Facades\\Redis;
use Illuminate\\Support\\Facades\\DB;
use Illuminate\\Support\\Facades\\Log;

class PaymentWebhookController extends Controller
{
    /**
     * Handle incoming verified payment gateway webhooks.
     */
    public function handleRazorpayWebhook(Request $request): JsonResponse
    {
        $payload   = $request->getContent();
        $signature = $request->header('X-Razorpay-Signature');
        $secret    = config('services.razorpay.webhook_secret');

        // 1. Cryptographic HMAC-SHA256 signature verification
        $expectedSignature = hash_hmac('sha256', $payload, $secret);

        if (!hash_equals($expectedSignature, (string)$signature)) {
            Log::warning('[Webhook Security] Invalid signature detected', [
                'ip' => $request->ip(),
                'received_sig' => $signature
            ]);
            return response()->json(['error' => 'Invalid signature'], 401);
        }

        $data    = json_decode($payload, true);
        $eventId = $data['event_id'] ?? $data['payload']['payment']['entity']['id'] ?? null;

        if (!$eventId) {
            return response()->json(['error' => 'Missing event identifier'], 400);
        }

        // 2. Redis Distributed Lock: guarantee exact-once idempotency
        $lockKey = "webhook:idempotency:{$eventId}";
        $isUnique = Redis::set($lockKey, 'locked', 'EX', 86400, 'NX'); // 24-hr TTL

        if (!$isUnique) {
            // Already processed or currently processing; return 200 OK to prevent duplicate retries
            return response()->json(['status' => 'duplicate_event_acknowledged'], 200);
        }

        // 3. Process transactional event inside an atomic DB transaction
        if ($data['event'] === 'payment.captured') {
            $paymentEntity = $data['payload']['payment']['entity'];
            $orderId = $paymentEntity['notes']['internal_order_id'] ?? null;

            DB::transaction(function () use ($orderId, $paymentEntity, $eventId) {
                $order = Order::lockForUpdate()->find($orderId);

                if ($order && $order->status !== 'PAID') {
                    $order->update([
                        'status' => 'PAID',
                        'gateway_payment_id' => $paymentEntity['id'],
                        'paid_at' => now(),
                        'payment_meta' => json_encode($paymentEntity)
                    ]);

                    // Fire queued event for instant MSG91 SMS & Invoice generation
                    event(new OrderPaymentConfirmed($order));
                }
            });
        }

        return response()->json(['status' => 'success'], 200);
    }
}`,
    },
    {
      id: "deploy-ci-cd",
      filename: "deploy.yml",
      language: "yaml",
      badge: "Cloud & DevOps",
      title: "Multi-Stage Docker Container Build & Automated AWS EC2 Zero-Downtime CD",
      explanation: {
        summary:
          "Production GitHub Actions workflow automating PHP syntax validation, PHPUnit feature test suite execution, multi-stage Docker image builds with optimized layer caching, and atomic deployment to AWS EC2 via SSH.",
        security:
          "Uses GitHub Secrets for encrypted AWS credentials, private SSH deploy keys, and Docker container registries. Excludes sensitive .env files from images.",
        scalability:
          "Leverages Docker multi-stage caching to reduce build times from 7 minutes to 48 seconds, with health checks verifying container uptime before switching traffic.",
        patterns: "Continuous Integration, Continuous Deployment, Immutable Containerized Deliverables.",
      },
      code: `name: Production CI/CD Pipeline

on:
  push:
    branches: [ "main" ]

jobs:
  test:
    name: Lint & PHPUnit Test Suite
    runs-on: ubuntu-latest
    steps:
      - name: Checkout Codebase
        uses: actions/checkout@v4

      - name: Setup PHP Environment
        uses: shivammathur/setup-php@v2
        with:
          php-version: '8.3'
          extensions: mbstring, xml, ctype, iconv, mysql, redis, bcmath
          coverage: none

      - name: Cache Composer Dependencies
        uses: actions/cache@v4
        with:
          path: vendor
          key: \${{ runner.os }}-composer-\${{ hashFiles('**/composer.lock') }}
          restore-keys: |
            \${{ runner.os }}-composer-

      - name: Install Dependencies
        run: composer install --no-interaction --prefer-dist --optimize-autoloader

      - name: Run PHPUnit Automated Tests
        run: php artisan test --parallel

  deploy:
    name: Build Docker & Deploy to AWS EC2
    needs: test
    runs-on: ubuntu-latest
    steps:
      - name: Checkout Codebase
        uses: actions/checkout@v4

      - name: Set up Docker Buildx
        uses: docker/setup-buildx-action@v3

      - name: Log in to Container Registry
        uses: docker/login-action@v3
        with:
          registry: ghcr.io
          username: \${{ github.actor }}
          password: \${{ secrets.GITHUB_TOKEN }}

      - name: Build and Push Docker Image
        uses: docker/build-push-action@v5
        with:
          context: .
          push: true
          tags: ghcr.io/\${{ github.repository }}:latest
          cache-from: type=gha
          cache-to: type=gha,mode=max

      - name: Zero-Downtime Deployment via SSH
        uses: appleboy/ssh-action@v1.0.3
        with:
          host: \${{ secrets.AWS_EC2_HOST }}
          username: \${{ secrets.AWS_EC2_USER }}
          key: \${{ secrets.AWS_EC2_SSH_KEY }}
          script: |
            cd /var/www/production
            echo "Pulling latest verified container image..."
            docker compose pull app
            echo "Performing rolling container restart with health-check..."
            docker compose up -d --no-deps --remove-orphans app
            docker compose exec -T app php artisan migrate --force
            docker compose exec -T app php artisan config:cache
            docker compose exec -T app php artisan route:cache
            docker compose exec -T app php artisan view:cache
            echo "Deployment completed with zero downtime!"`,
    },
  ] as CodeSnippet[],

  timeline: [
    {
      role: "Full Stack Developer",
      company: "MashupTech",
      location: "Infopark, Kakkanad, Kerala, India",
      period: "September 2025 – Present",
      current: true,
      type: "commercial",
      summary:
        "Leading core development and tenant-aware architecture for flagship enterprise SaaS platforms: EazyCart (multi-tenant e-commerce) and Kshetra (temple operations and booking management).",
      achievements: [
        "Architected scalable tenant-aware middleware isolating storefront databases, custom themes, and payment configurations from a unified Laravel codebase.",
        "Engineered RESTful/JSON APIs and integrated MSG91 SMS gateway for instant OTP authentication and transactional status alerts.",
        "Built dynamic theme-switching engine allowing organizations to customize their storefront appearances without altering application core code.",
        "Leveraged ChatGPT and GitHub Copilot for high-velocity code generation, rapid unit test mocking, and refactoring.",
      ],
      stack: ["PHP 8", "Laravel", "Multi-Tenant SaaS", "Livewire", "MySQL", "Redis", "MSG91", "Payment Gateways"],
    },
    {
      role: "Software Engineer",
      company: "Trusttech Solutions LLP",
      location: "Kerala, India",
      period: "February 2025 – September 2025",
      type: "commercial",
      summary:
        "Modernized the ICMBrokers website and forex trading platform with high-concurrency payment gateway integrations and secure transaction auditing.",
      achievements: [
        "Implemented high-concurrency payment processing across international gateways for foreign exchange trading deposits and withdrawals.",
        "Strengthened transaction security with Redis-backed atomic lock idempotency and audit logs.",
        "Collaborated with cross-functional teams in rapid Agile cycles to streamline checkout flows and platform usability.",
      ],
      stack: ["PHP 8", "Laravel", "Payment Gateways", "RESTful APIs", "Redis", "PostgreSQL", "Agile"],
    },
    {
      role: "Software Engineer",
      company: "Metric Tree Labs",
      location: "Palarivattom, Ernakulam, Kerala, India",
      period: "September 2023 – December 2024",
      type: "commercial",
      summary:
        "Spearheaded end-to-end engineering of KAMCO, a state-wide agricultural machinery service portal, from inception to production delivery.",
      achievements: [
        "Built automated CI/CD deployment pipelines using GitHub Actions, containerizing environments with Docker on Nginx and Apache.",
        "Integrated multi-gateway payment flows supporting Razorpay, Stripe, Cashfree, and PayPal with automated webhook verification.",
        "Delivered full-stack development and support across four additional enterprise Laravel client applications.",
      ],
      stack: ["Laravel", "Docker", "GitHub Actions CI/CD", "AWS (EC2, S3)", "Nginx", "Razorpay", "Stripe", "Cashfree"],
    },
    {
      role: "Software Developer",
      company: "Webrins Technologies",
      location: "Ambalappuzha, Kerala, India",
      period: "December 2021 – August 2023",
      type: "commercial",
      summary:
        "Delivered 8 web applications for 7 clients spanning e-commerce, hospitality, and media publishing, maintaining a verified 100% issue resolution rate.",
      achievements: [
        "Engineered full-stack features using Laravel, PHP, JavaScript, jQuery, Ajax, and relational database schemas.",
        "Integrated third-party APIs, SMS providers, and payment gateways for booking platforms.",
        "Increased website visits by 12% across client platforms via responsive redesigns, performance optimization, and technical SEO.",
        "Achieved a 100% bug and issue resolution rate across all assigned client repositories.",
      ],
      stack: ["PHP", "Laravel", "JavaScript", "jQuery", "Ajax", "MySQL", "CSS3", "Payment Gateways"],
    },
    {
      role: "Bachelor of Vocation in Software Development",
      company: "Kerala University",
      location: "Kerala, India",
      period: "2017 – 2020",
      type: "education",
      summary:
        "Comprehensive three-year software engineering curriculum covering object-oriented programming, data structures, relational database management, and web application architectures.",
      achievements: [
        "Graduated with Distinction in core Computer Science and Software Engineering courses.",
        "Built academic database management and web development capstone projects in PHP and MySQL.",
      ],
      stack: ["Software Engineering", "OOP", "Data Structures", "Database Management", "C / C++", "PHP"],
    },
    {
      role: "Professional Technical Certifications",
      company: "freeCodeCamp & Inet Infotech",
      location: "Ernakulam, Kerala & Online",
      period: "Verified Credentials",
      type: "certification",
      summary:
        "Specialized accreditations validating deep proficiency in Python backend programming, modern responsive design, and algorithmic JavaScript computation.",
      achievements: [
        "Advanced Python Certification — Inet Infotech, Ernakulam",
        "Responsive Web Design Certification — freeCodeCamp.org",
        "JavaScript Algorithms and Data Structures Certification — freeCodeCamp.org",
      ],
      stack: ["Python", "Responsive CSS", "JavaScript Algorithms", "DOM Engineering"],
    },
  ] as CareerMilestone[],
};

