import React from "react";
import { 
  Smartphone, 
  Monitor, 
  Database, 
  Video, 
  Mail, 
  MapPin, 
  Calendar, 
  GraduationCap, 
  ExternalLink, 
  Menu, 
  X, 
  Sun, 
  Moon, 
  Palette, 
  ChevronUp, 
  Award, 
  Check, 
  Info, 
  Code, 
  Layers,
  Download,
  Zap,
  Bell,
  AlertTriangle,
  TrendingUp,
  Shield,
  Key,
  MessageSquare,
  Mic,
  Signal,
  Battery,
  Search,
  User,
  Globe
} from "lucide-react";

// Customized React SVG logo
const ReactLogoIcon = ({ size = 24, ...props }: React.SVGProps<SVGSVGElement> & { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-11.5 -10.23174 23 20.46348" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="1.5" {...props}>
    <circle cx="0" cy="0" r="2.05" fill="currentColor" />
    <g stroke="currentColor">
      <ellipse rx="11" ry="4.2" />
      <ellipse rx="11" ry="4.2" transform="rotate(60)" />
      <ellipse rx="11" ry="4.2" transform="rotate(120)" />
    </g>
  </svg>
);

// Custom GitHub logo
const GitHubIcon = ({ size = 24, ...props }: React.SVGProps<SVGSVGElement> & { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

// Custom LinkedIn logo
const LinkedInIcon = ({ size = 24, ...props }: React.SVGProps<SVGSVGElement> & { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

// Custom Apple/App Store logo
const AppleIcon = ({ size = 24, ...props }: React.SVGProps<SVGSVGElement> & { size?: number }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" stroke="none" {...props}>
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.82M15.97 4.17c.66-.81 1.11-1.93.99-3.06-1 .04-2.21.67-2.93 1.49-.62.69-1.16 1.84-1.01 2.96 1.12.09 2.27-.57 2.95-1.39z" />
  </svg>
);

// Custom Google Play / Play Store logo
const GooglePlayIcon = ({ size = 24, ...props }: React.SVGProps<SVGSVGElement> & { size?: number }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" stroke="none" {...props}>
    <path d="M3.609 1.814L13.783 12 3.609 22.186c-.18.18-.328.093-.328-.162V1.975c0-.255.148-.342.328-.161zm10.99 10.99l3.076-3.076-13.3-8.312 10.224 11.388zm.864-.804l4.24-2.65c.6-.375.6-.985 0-1.36l-4.24-2.65-3.21 3.21 3.21 3.45zm-1.688 1.884l-10.224 11.388 13.3-8.312-3.076-3.076z" />
  </svg>
);

export const Icons = {
  React: ReactLogoIcon,
  Mobile: Smartphone,
  Web: Monitor,
  Database: Database,
  WebRTC: Video,
  GitHub: GitHubIcon,
  LinkedIn: LinkedInIcon,
  Mail: Mail,
  Location: MapPin,
  Calendar: Calendar,
  Education: GraduationCap,
  ExternalLink: ExternalLink,
  Menu: Menu,
  Close: X,
  Sun: Sun,
  Moon: Moon,
  Palette: Palette,
  ChevronUp: ChevronUp,
  Award: Award,
  Check: Check,
  Info: Info,
  Code: Code,
  Layers: Layers,
  Download: Download,
  Zap: Zap,
  Bell: Bell,
  AlertTriangle: AlertTriangle,
  TrendingUp: TrendingUp,
  Shield: Shield,
  Key: Key,
  MessageSquare: MessageSquare,
  Mic: Mic,
  Signal: Signal,
  Battery: Battery,
  Search: Search,
  User: User,
  Globe: Globe,
  Apple: AppleIcon,
  GooglePlay: GooglePlayIcon
};
